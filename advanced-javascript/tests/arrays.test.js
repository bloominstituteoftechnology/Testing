/* eslint-disable prefer-destructuring */

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const arrayFunctions = require('../src/arrays');

const expect = chai.expect;
const assert = chai.assert;

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
    it('should call the callback n number of times', () => {
      const callback = sinon.spy();
      each([1, 2, 3], callback);
      expect(callback).callCount(3);
    });
  });

  describe('`map`', () => {
    const map = arrayFunctions.map;
    const arr = [1, 2, 3];
    const callback = sinon.spy(n => n * 2);
    it('should be a function', () => {
      expect(map).to.be.a('function');
    });
    it('should call the callback 3 number of times', () => {
      map(arr, callback);
      expect(callback).callCount(3);
    });
    it('should return an array', () => {
      const arr1 = map(arr, callback);
      expect(arr1).to.be.an('array');
    });
  });

  describe('`reduce`', () => {
    const reduce = arrayFunctions.reduce;
    const arr = [1, 2, 3];
    const callback = sinon.spy(n => n * 2);
    it('should be a function', () => {
      expect(reduce).to.be.a('function');
    });
    it('should call the callback 3 number of times', () => {
      reduce(arr, callback, 0);
      expect(callback).callCount(3);
    });
    it('should return a number', () => {
      const sum = reduce(arr, callback, 0);
      expect(sum).to.be.a('number');
    });
    it('should return 8', () => {
      const sum = reduce(arr, callback, 1);
      assert.equal(sum, 8);
    });
  });

  describe('`find`', () => {
    const find = arrayFunctions.find;
    const arr = [1, 2, 3, 4, 5];
    const callback = sinon.spy(num => num === 5);
    it('should be a function', () => {
      expect(find).to.be.a('function');
    });
    it('should call the callback 5 number of times', () => {
      find(arr, callback);
      expect(callback).callCount(5);
    });
    it('should return the first element that passes the truth test', () => {
      const result = find(arr, callback);
      assert.equal(result, 5);
    });
  });

  describe('`filter`', () => {
    const filter = arrayFunctions.filter;
    const arr = [1, 2, 3];
    const callback = sinon.spy(num => num > 2);
    it('should be a function', () => {
      expect(filter).to.be.a('function');
    });
    it('should call the callback 3 number of times', () => {
      filter(arr, callback);
      expect(callback).callCount(3);
    });
    it('should return an array', () => {
      // const results = filter(arr, callback);
      // assert.equal(results, [3]);
      expect(filter(arr, callback)).to.be.an('array');
      // assert.equal(filter(arr, callback), [3]);
    });
  });

  describe('`flatten`', () => {
    const flatten = arrayFunctions.flatten;
    const arr = [1, 2, 3];
    const callback = sinon.spy()
    it('should be a function', () => {
      expect(flatten).to.be.a('function');
    });

    it('should return an array', () => {
      expect(flatten(arr, callback)).to.be.an('array');
    });

    it('should return a flattened array regardless of how deep the array nesting is', () => {
      const arr = [1, [2], [[3]], [[[4]]]];
      const results = arrayFunctions.flatten(arr);
      expect(results).to.eql([1, 2, 3, 4]);
    });
  }); ////typo somewhere cant implement
});
