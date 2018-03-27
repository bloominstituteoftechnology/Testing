/* eslint-disable */

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

const arr = [5, 3, 1];
const nestedArr = [5, [3, 1]];
const multipleNests = [5, [[3,[[1]]]]];
const addTwo = x => x += 2;
const sum = (x, y) => x + y;
const lessThanTwo = x => x < 2;
describe('Arrays', () => {
  describe('`each`', () => {
    const each = arrayFunctions.each;
    it('should be a function', () => {
      expect(each).to.be.a('function');
    });
    // begin here
    it('should call a given callback', () => {
      const callBack = sinon.spy();
      each(arr, callBack);
      expect(callBack).to.have.callCount(3);
    });
  });

  describe('`map`', () => {
    const map = arrayFunctions.map;
    it('should be a function', () => {
      expect(map).to.be.an('function');
    });
    it('should call a given callback', () => {
      const callBack = sinon.spy();
      map(arr, callBack);
      expect(callBack).to.have.callCount(3);
    });
    it('should return a new array', () => {
      expect(map(arr, addTwo)).to.have.ordered.members([7, 5, 3]);
    });
  });

  describe('`reduce`', () => {
    const reduce = arrayFunctions.reduce;
    let memo = null;
    it('should be a function', () => {
      expect(reduce).to.be.a('function');
    });
    it('should call a given callback', () => {
      const callBack = sinon.spy();
      reduce(arr, callBack, memo);
      expect(callBack).to.have.callCount(3);
    });
    it('should return a new array', () => {
      expect(reduce(arr, sum, memo)).to.equal(9);
    });
  });

  describe('`find`', () => {
    const find = arrayFunctions.find;
    it('should be a function', () => {
      expect(find).to.be.an('function');
    });
    it('should call given callback at least once', () => {
      const callBack = sinon.spy();
      find(arr, callBack);
      expect(callBack).to.be.called;
    });
    it('should return a matching value', () => {
      expect(find(arr, lessThanTwo), 1);
      expect(find(arr, lessThanTwo), undefined);
    });
  });

  describe('`filter`', () => {
    const filter = arrayFunctions.filter;
    it('should be a function', () => {
      expect(filter).to.be.a('function');
    });
    it('should call a given callback', () => {
      const callBack = sinon.spy();
      filter(arr, callBack);
      expect(callBack).to.have.callCount(3);
    });
    it('should return a new array', () => {
      expect(filter(arr, lessThanTwo)).to.have.ordered.members([1]);
    });
  });

  describe('`flatten`', () => {
    const flatten = arrayFunctions.flatten;
    it('should be a function', () => {
      expect(flatten).to.be.a('function');
    });
    it('should return a new array with no array elements', () => {
      expect(flatten(nestedArr)).to.have.ordered.members([5, 3, 1]);
      expect(flatten(multipleNests)).to.have.ordered.members([5, 3, 1]);
    });
  });
});
