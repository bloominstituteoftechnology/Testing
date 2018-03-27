/* eslint-disable prefer-destructuring, no-unused-expressions */

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
    it('should invoke callback on each array element', () => {
      let finalString = '';
      each(['stuff', 'things', 'whatnot'], (el) => {
        finalString += el;
      });
      expect(finalString).to.equal('stuffthingswhatnot');
    });
    it('should pass the element and the index to the callback', () => {
      let count = 0;
      each([1, 2, 3], (element, index) => {
        count += element + index;
      });
      expect(count).to.equal(9);
    });
    it('should call the callback passed to it for each element in array given', () => {
      const spy = sinon.spy();
      expect(spy.callCount).to.equal(0);
      each([1, 2, 3, 'four'], spy);
      expect(spy.callCount).to.equal(4);
    });
  });

  describe('`map`', () => {
    const map = arrayFunctions.map;
    it('should be a function', () => {
      expect(map).to.be.an('function');
    });
    it('should return an array', () => {
      const arr = [];
      const result = map(arr, n => (n * n));
      expect(Array.isArray(result)).to.be.true;
    });
    it('should pass each item into the transform function', () => {
      const arr = [1, 2, 3];
      const mappedArr = map(arr, n => (n * 2));
      expect(mappedArr).to.eql([2, 4, 6]).but.not.equal([2, 4, 6]);
    });
    it('should call the callback passed to it for each element in array given', () => {
      const spy = sinon.spy();
      expect(spy.callCount).to.equal(0);
      map([1, 2, 3, 'four'], spy);
      expect(spy.callCount).to.equal(4);
    });
  });

  describe('`reduce`', () => {
    const reduce = arrayFunctions.reduce;
    it('should be a function', () => {
      expect(reduce).to.be.a('function');
    });
    it('should reduce the array\'s contents to a single value', () => {
      const arr = [1, 2, 3, 4, 5];
      const result = reduce(arr, (memo, num) => (memo + num));
      expect(result).to.equal(15);
    });
    it('should accept a memo argument', () => {
      const arr = [1, 2, 3, 4, 5];
      const result = reduce(arr, (memo, num) => (memo + num), 10);
      expect(result).to.equal(25);
    });
    it('should handle any type of data in the array', () => {
      const arr = ['h', 'e', 'l', 'l', 'o', '!'];
      const result = reduce(arr, (memo, num) => (memo + num));
      expect(result).to.equal('hello!');
    });
    it('should call the given callback per every item but one in the array and return an expected value', () => {
      const stub = sinon.stub();
      stub.returns(25);
      const arr = [1, 2, 3, 4, 5];
      const result = reduce(arr, stub);
      expect(result).to.equal(25);
      expect(stub.callCount).to.equal(4);
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
