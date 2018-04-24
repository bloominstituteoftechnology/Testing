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
    const spy = sinon.spy();
    const result = each([1, 2, 3, 4], (e, i) => spy(e, i));
    it('should be a function', () => {
      expect(spy).to.be.a('function');
    });
    // begin here
    it('should return an array', () => {
      expect(spy).to.be.callCount(4);
    });
  });

  describe('`map`', () => {
    const map = arrayFunctions.map;
    let cb = sinon.spy(item => item * 2);
    let result = map([1, 2, 3, 4, 5, 6], item => cb(item));
    let expected = [2, 4, 6, 8, 10, 12];
    it('should be a function', () => {
      expect(map).to.be.an('function');
    });
    it('should return an array', () => {
      expect(result).to.be.an('array');
    });

    it('should return a new altered array', () => {
      assert.deepEqual(result, expected);
      cb = sinon.spy(item => item + 2);
      result = map(['one', 'two', 'three'], item => cb(item));
      expected = ['one2', 'two2', 'three2'];
      assert.deepEqual(result, expected);
    });
  });

  describe('`reduce`', () => {
    const reduce = arrayFunctions.reduce;
    const cb = sinon.spy((sum, num) => sum + num);
    const result = reduce([4, 3, 2, 1], cb);
    it('should be a function', () => {
      expect(reduce).to.be.a('function');
    });
    it('should return a number', () => {
      assert.typeOf(result, 'number');
    });
    it('should return sum of all numbers from array', () => {
      assert.equal(result, 10);
      assert.equal(reduce([-4, -3, -2, -1], cb), -10);
    });
  });

  // describe('`find`', () => {
  //     const find = arrayFunctions.find;
  //   it('should be a function', () => {
  //     expect(find).to.be.an('function');
  //   });
  // });

  describe('`filter`', () => {
    const filter = arrayFunctions.filter;
    let cb = sinon.spy();
    const result = filter(['earth', 'air', 'wind', 'fire', 'spirit'], () =>
      cb());
    it('should be a function', () => {
      expect(filter).to.be.a('function');
    });
    it('should return an array', () => {
      expect(result).to.be.an('array');
    });
    it('cb should be called once for each item in the array', () => {
      expect(cb).to.have.a.callCount(5);
      cb = sinon.spy();
      filter([1, 2, 3], () => cb());
      expect(cb).to.have.a.callCount(3);
    });
  });

  // describe('`flatten`', () => {
  //     const flatten = arrayFunctions.flatten;
  //   it('should be a function', () => {
  //     expect(flatten).to.be.a('function');
  //   });
  // });
});
