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
      expect(result).to.be.an('array');
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
    const find = arrayFunctions.find;
    it('should be a function', () => {
      expect(find).to.be.an('function');
    });
    it('should return the first element that passes the truth test', () => {
      const arr = [1, 2, 3, 4, 5];
      const result = find(arr, num => (num === 5));
      expect(result).to.equal(5);
    });
  });

  describe('`filter`', () => {
    const filter = arrayFunctions.filter;
    it('should be a function', () => {
      expect(filter).to.be.a('function');
    });
    it('should return an array', () => {
      const arr = [1, 2, 3, 4, 5];
      const results = filter(arr, num => (num === 5));
      expect(results).to.be.an('array');
    });
    it('should return an empty array if no elements pass truth test', () => {
      const arr = [1, 2, 3, 4, 5];
      const results = filter(arr, num => (num === 10));
      expect(results).to.be.an('array');
      expect(results.length).to.equal(0);
    });
    it('should return an array with all elements that pass truth test', () => {
      const arr = [1, 2, 3, 4, 5];
      const results = filter(arr, num => (num % 2 === 0));
      expect(results[0]).to.equal(2);
      expect(results[1]).to.equal(4);
      expect(results.length).to.equal(2);
    });
  });

  describe('`flatten`', () => {
    const flatten = arrayFunctions.flatten;
    it('should be a function', () => {
      expect(flatten).to.be.a('function');
    });
    it('should return an array', () => {
      const arr = [1, 2, 3, 4, 5];
      const results = flatten(arr);
      expect(results).to.be.an('array');
    });
    it('should return a flattened array when given a nested array', () => {
      const arr = [1, 2, 3, 4, 5, [6], [7]];
      const results = flatten(arr);
      expect(results).to.be.an('array');
      expect(results).to.eql([1, 2, 3, 4, 5, 6, 7]).but.not.equal([1, 2, 3, 4, 5, 6, 7]);
    });
    it('should return a flattened array regardless of how deep the array nesting is', () => {
      const arr = [1, [2], [[3]], [[[4]]]];
      const results = flatten(arr);
      expect(results).to.eql([1, 2, 3, 4]).but.not.equal([1, 2, 3, 4]);
    });
  });
});
