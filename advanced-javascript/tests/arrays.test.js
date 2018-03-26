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
    it('should call the callback the correct number of times', () => {
      const cb = sinon.spy();
      each([1, 2, 3], cb);
      expect(cb).callCount(3);
    });
  });

  describe('`map`', () => {
    const map = arrayFunctions.map;
    const arr = [1, 2, 3];
    const cb = sinon.spy(num => num + 1);
    it('should be a function', () => {
      expect(map).to.be.a('function');
    });
    it('should call the callback the correct number of times', () => {
      map(arr, cb);
      expect(cb).callCount(3);
    });
    it('should return an array', () => {
      const newArr = map(arr, cb);
      expect(newArr).to.be.an('array');
    });
    it('should return an array with the correct values', () => {
      const newArr = map(arr, cb);
      expect(newArr).to.have.ordered.members([2, 3, 4]);
    });
  });

  describe('`reduce`', () => {
    const reduce = arrayFunctions.reduce;
    const arr = [1, 2, 3];
    const cb = sinon.spy((memo, num) => memo + num);
    it('should be a function', () => {
      expect(reduce).to.be.a('function');
    });
    it('should call the callback the correct number of times', () => {
      const result = reduce(arr, cb, 0);
      expect(cb).callCount(3);
    });
    it('should return a number', () => {
      const result = reduce(arr, cb, 0);
      expect(result).to.be.a('number');
    });
    it('should return the correct value', () => {
      const result = reduce(arr, cb, 0);
      expect(result).to.equal(6);
    });
  });

  describe('`find`', () => {
    it('should be a function', () => {
      const find = arrayFunctions.find;
      expect(find).to.be.a('function');
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
