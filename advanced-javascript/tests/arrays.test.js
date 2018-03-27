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
    it('should be a function', () => {
      const each = arrayFunctions.each;
      expect(each).to.be.a('function');
    });
    it('should run the callback on each element of array', () => {
      const { each } = arrayFunctions;
      let str = '';
      const words = ['Hello', 'World', '!'];
      each(words, (elem) => {
        str += elem;
      });
      expect(str).to.equal('HelloWorld!');
    });
    it('should pass the element and the index to the callback', () => {
      const { each } = arrayFunctions;
      let count = 0;
      each([1, 2, 3, 4], (elem, i) => {
        count += elem + i;
      });
      expect(count).to.equal(16);
    });
    it('should invoke the cb on all elements', () => {
      const { each } = arrayFunctions;
      const elements = [1, 2, 3];
      const cb = sinon.spy();
      each(elements, cb)
      expect(cb).to.have.callCount(elements.length);
    });
  });


  describe('`map`', () => {
    it('should be a function', () => {
      const map = arrayFunctions.map;
      expect(map).to.be.an('function');
    });
    it ('should return an array', () => {
      const map = arrayFunctions;
      const result = [];
      expect(result).to.be.an('array');
    });
    it('should invoke the cb on all elements', () => {
      const { map } = arrayFunctions;
      const elements = [1, 2, 3, 4];
      const cb = sinon.spy();
      map(elements, cb)
      expect(cb).callCount(elements.length);
    });
  });

  describe('`reduce`', () => {
    it('should be a function', () => {
      const reduce = arrayFunctions.reduce;
      expect(reduce).to.be.a('function');
    });
    it('should reduce all elements to a single value', () => {
      const { reduce } = arrayFunctions;
      const arr = [4, 2, 5, 3, 20];
      const result = reduce(arr, (sum, next) => (sum + next), 23);
      expect(result).to.equal(57);
    });
    it('should handle different types of data', () => {
      const { reduce } = arrayFunctions;
      let arr = ['T', 'e', 'r', 'r', 'i', 'e'];
      const result = reduce(arr, (sum, current) => (sum + current));
      expect(result).to.be.equal('Terrie');
    });
  });

  describe('`find`', () => {
    it('should be a function', () => {
      const find = arrayFunctions.find;
      expect(find).to.be.an('array');
    });
  });

  describe('`filter`', () => {
    it('should be a function', () => {
      const filter = arrayFunctions.filter;
      expect(filter).to.be.a('null');
    });
  });

  describe('`flatten`', () => {
    it('should be a function', () => {
      const flatten = arrayFunctions.flatten;
      expect(flatten).to.be.a('promise');
    });
  });
});
