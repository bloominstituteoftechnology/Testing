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
    const each = arrayFunctions.each;
    it('should be a function', () => {
      expect(each).to.be.a('function');
    });
    // begin here
    it('should call the callback the correct amount', () => {
      const cb = sinon.spy();
      each([1, 2, 3], cb);
      expect(cb).callCount(3);
    });
  });

  describe('`map`', () => {
    const map = arrayFunctions.map;
    const arr = [5, 6, 7];
    const cb = sinon.spy(val => val += 1);
    const cngArr = map(arr, cb);
    it('should be a function', () => {
      expect(map).to.be.an('function');
    });
    it('should run the expected amount of times', () => {
      expect(cb).callCount(3);
    });
    it('should return an array with cb applied to each item', () => {
      expect(cngArr).to.have.ordered.members([6, 7, 8]);
    });
  });

  describe('`reduce`', () => {
    const reduce = arrayFunctions.reduce;
    const arr = [1, 2, 3];
    const cb = sinon.spy((mem, num) => mem + num);
    it('should be a function', () => {
      expect(reduce).to.be.a('function');
    });
    it('should call the callback the expected amount', () => {
      reduce(arr, cb, 0);
      expect(cb).callCount(3);
    });
    it('should return number', () => {
      expect(reduce(arr, cb, 0)).to.be.a('number');
    });
    it('should return the expected value', () => {
      expect(reduce(arr, cb, 0)).to.equal(6);
    });
  });

  describe('`find`', () => {
    const find = arrayFunctions.find;
    const result = find([1, 2, 3, 4], number => number === 3);
    it('should be a function', () => {
      expect(find).to.be.an('function');
    });
    it('should return a number', () => {
      expect(result).to.be.a('number');
    });
    it('should return the found element', () => {
      expect(result).to.be.equal(3);
    });
  });

  describe('`filter`', () => {
    const filter = arrayFunctions.filter;
    const arr = [1, 2, 3, 2, 2, 5];
    const cb = sinon.spy(val => (val === 2));
    const result = filter(arr, cb);
    it('should be a function', () => {
      expect(filter).to.be.a('function');
    });
    it('should return an array', () => {
      expect(filter(arr, cb)).to.be.an('array');
    });
    it('should return an array with elements that pass the testing function', () => {
      expect(filter(arr, cb)).to.have.ordered.members([2, 2, 2]);
    });
  });

  describe('`flatten`', () => {
    const flatten = arrayFunctions.flatten;
    const arr = [1, 2, [2, 5, 6], 7, [8, [9]]];
    const result = flatten(arr);
    it('should be a function', () => {
      expect(flatten).to.be.a('function');
    });
    it('should return an array', () => {
      expect(result).to.be.an('array');
    });
    it('should flatten the array correctly', () => {
      expect(result).to.have.ordered.members([1, 2, 2, 5, 6, 7, 8, 9]);
    });
  });
});
