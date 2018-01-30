const chai = require('chai');
const assert = chai.assert;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const arrayFunctions = require('../src/arrays');

const expect = chai.expect;
chai.use(sinonChai);
const numArr = [1, 2, 3, 4];
// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.
// hint 3. - if the function you're testing requires a * callback *, make sure you use a spy like sinon

describe('Arrays', () => {
  const callback = sinon.spy();
  const each = arrayFunctions.each;
  describe('`each`', () => {
    it('should be a function', () => {
      expect(each).to.be.a('function');
    });
    it('should perform a function on each element in a given array', () => {
      each(numArr, callback)
      assert.strictEqual(callback.callCount, 4);
    })
    // begin here
  });

  describe('`map`', () => {
    const map = arrayFunctions.map;
    it('should be a function', () => {
      expect(map).to.be.an('function');
    });
    it('should return an array', () => {
      const callback = sinon.spy();
      assert.strictEqual(typeof map(numArr, callback), 'object');
    });
    it('should return an array modified by the callback function and be called only 4 times', () => {
      const callback = sinon.spy();
      assert.strictEqual(map(numArr, (item) => {
        callback();
        return item + 1;
      }).join(), [2, 3, 4, 5].join());
      assert.strictEqual(callback.callCount, 4);
    })
  });

  describe('`reduce`', () => {
    const reduce = arrayFunctions.reduce;
    it('should be a function', () => {
      expect(reduce).to.be.a('function');
    });
    it('should return an array', () => {
      const callback = sinon.spy();
      assert.strictEqual(typeof reduce(numArr, callback), 'object');
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
