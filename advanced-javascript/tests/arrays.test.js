/* eslint-disable prefer-destructuring */

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const arrayFunctions = require('../src/arrays');

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
      assert.typeOf(each, 'function');
    });
    it('should use callback function', () => {
      const spy = sinon.spy();
      each([1, 2, 3, 4], spy);
      assert.equal(spy.callCount, 4);
    });
  });

  describe('`map`', () => {
    const map = arrayFunctions.map;
    it('should be a function', () => {
      assert.typeOf(map, 'function');
    });
    it('should use callback function', () => {
      const spy = sinon.spy();
      map([1, 2, 3, 4], spy);
      assert.equal(spy.callCount, 4);
    });
    it('should correctly apply callback', () => {
      const cb = x => x + 1;
      const result = map([1, 2, 3, 4, 5], cb);
      assert.equal(result, [2, 3, 4, 5, 6]);
    });
  });

  describe('`reduce`', () => {
    const reduce = arrayFunctions.reduce;
    it('should be a function', () => {
      assert.typeOf(reduce, 'function');
    });
    it('should use callback function', () => {
      const spy = sinon.spy();
      reduce([1, 2, 3, 4], spy);
      assert.equal(spy.callCount, 4);
    });
  });

  describe('`find`', () => {
    const find = arrayFunctions.find;
    it('should be a function', () => {
      assert.typeOf(find, 'function');
    });
    it('should use callback function', () => {
      const spy = sinon.spy();
      find([1, 2, 3, 4], spy);
      assert.equal(spy.callCount, 4);
    });
  });

  describe('`filter`', () => {
    const filter = arrayFunctions.filter;
    it('should be a function', () => {
      assert.typeOf(filter, 'function');
    });
    it('should use callback function', () => {
      const spy = sinon.spy();
      filter([1, 2, 3, 4], spy);
      assert.equal(spy.callCount, 4);
    });
  });

  describe('`flatten`', () => {
    const flatten = arrayFunctions.flatten;
    it('should be a function', () => {
      assert.typeOf(flatten, 'function');
    });
  });
});
