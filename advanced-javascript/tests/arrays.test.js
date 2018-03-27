/* eslint-disable prefer-destructuring */

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const arrayFunctions = require('../src/arrays');

const expect = chai.expect;
chai.use(sinonChai);

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.
// hint 3. - if the function you're testing requires a * callback *, make sure you use a spy like sinon

describe('Arrays', () => {
  describe('`each`', () => {
    const cb = sinon.spy();
    const each = arrayFunctions.each;
    it('should be a function', () => {
      expect(each).to.be.a('function');
    });
    // begin here
    it('should invoke a callback once', () => {
      each([1, 2, 3], cb);
      expect(cb).to.have.callCount(3);
    });
  });

  describe('`map`', () => {
    const cb = sinon.spy();
    const map = arrayFunctions.map;
    it('should be a function', () => {
      expect(map).to.be.a('function');
    });
    it('should invoke a callback once', () => {
      map([1, 2, 3], cb);
      expect(cb).to.have.callCount(3);
    });
    it('should return an array', () => {
      expect(map([1, 2, 3], cb)).to.be.an('array');
    });
  });

  describe('`reduce`', () => {
    const cb = sinon.spy();
    const reduce = arrayFunctions.reduce;
    it('should be a function', () => {
      expect(reduce).to.be.a('function');
    });
    it('should invoke a callback once', () => {
      const sum = (a, b) => {
        return a + b;
      };
      expect(reduce([1, 2, 3], sum, 0)).to.equal(6);
    });
  });

  describe('`find`', () => {
    const cb = sinon.spy();
    const find = arrayFunctions.find;
    const elements = (el) => {
      if (el === 2) return true;
      return false;
    };
    it('should be a function', () => {
      expect(find).to.be.a('function');
    });
    it('should return the element', () => {
      expect(find([1, 2, 3], elements)).to.equal(2);
    });
    it('should return undefined', () => {
      expect(find([1, 3], elements)).to.equal(undefined);
    });
  });

  describe('`filter`', () => {
    const cb = sinon.spy();
    const filter = arrayFunctions.filter;
    it('should be a function', () => {
      expect(filter).to.be.a('function');
    });
    it('should return an array', () => {
      expect(filter([1, 2, 3], cb)).to.be.an('array');
    });
  });

  describe('`flatten`', () => {
    const flatten = arrayFunctions.flatten;
    it('should be a function', () => {
      expect(flatten).to.be.a('function');
    });
    it('should return a flattened array', () => {
      expect(flatten([[[1, 2]], [3]])).to.deep.equal([1, 2, 3]);
    });
  });
});
