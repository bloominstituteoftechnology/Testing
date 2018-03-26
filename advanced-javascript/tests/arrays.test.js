/* eslint-disable prefer-destructuring */

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const arrayFunctions = require('../src/arrays');

const expect = chai.expect;
chai.use(sinonChai);

const each = arrayFunctions.each;
const map = arrayFunctions.map;

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.
// hint 3. - if the function you're testing requires a * callback *, make sure you use a spy like sinon

describe('Arrays', () => {
  describe('`each`', () => {
    it('should be a function', () => {
      expect(each).to.be.a('function');
    });
    // begin here
    it('should execute the callback on each array element', () => {
      const cb = sinon.spy();
      each([4, 5, 6], cb);
      expect(cb).to.have.callCount(3);
    });
  });

  describe('`map`', () => {
    it('should be a function', () => {
      expect(map).to.be.an('function');
    });
    it('should execute the callback on each array element', () => {
      const cb = sinon.spy();
      map([6, 7, 8, 9], cb);
      expect(cb).to.have.callCount(4);
    });
    it('should return an expected output with the specific input', () => {
      const cb = (item) => {
        return item * 2;
      };
      const result = map([1, 2, 3], cb);

      expect(result).to.equal([2, 4, 6]);
    });
    it('should return an output with type: array', () => {
      const cb = (item) => {
        return item * 2;
      };
      const result = map([1, 2, 3], cb);
      expect(result).to.be.an('array');
    });
  });

  describe('`reduce`', () => {
    it('should be a function', () => {
      const reduce = arrayFunctions.reduce;
      expect(reduce).to.be.a('function');
    });
  });

  describe('`find`', () => {
    it('should be a function', () => {
      const find = arrayFunctions.find;
      expect(find).to.be.an('function');
    });
  });

  describe('`filter`', () => {
    it('should be a function', () => {
      const filter = arrayFunctions.filter;
      expect(filter).to.be.a('function');
    });
  });

  describe('`flatten`', () => {
    it('should be a function', () => {
      const flatten = arrayFunctions.flatten;
      expect(flatten).to.be.a('function');
    });
  });
});
