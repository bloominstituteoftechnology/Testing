/* eslint-disable */

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const arrayFunctions = require('../src/arrays');
const assert = require('assert');

const expect = chai.expect;
chai.use(sinonChai);
const funcs = arrayFunctions;

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
      const each = funcs.each;
      expect(each).to.be.a('function');
    });
    // begin here
    const double = (n) => {
      return 2 * n;
    };
    it('should pass each element of the array to the callback function and invoke it', () => {
      expect(funcs.each([1, 2, 3], double), [2, 4, 6]);
    });
    it('should invoke the callback once', () => {
      const cb = sinon.spy();
      funcs.each([1], cb);
      expect(cb).to.have.been.calledOnce;
    });
  });

  describe('`map`', () => {
    it('should be a function', () => {
      const map = funcs.map;
      expect(map).to.be.an('function');
    });
    it('should map all the elements of the original array to a new array using the callback function', () => {
      const double = (n) => {
        return 2 * n;
      };
      expect(funcs.map([1, 2, 3], double), [2, 4, 6]);
    });
    it('should return a new array', () => {
      const test = (n) => {
        return n;
      };
      expect((funcs.map([1, 2, 3], test) === [1, 2, 3]), false);
    });
  });

  describe('`reduce`', () => {
    it('should be a function', () => {
      const reduce = funcs.reduce;
      expect(reduce).to.be.a('function');
    });
    it('should reduce all elements in the array according to the callback function', () => {
      const sum = (a, b) => {
        return a + b;
      }
      expect(funcs.reduce([1, 2, 3], sum), 6);
    });
  });

  describe('`find`', () => {
    it('should be a function', () => {
      const find = funcs.find;
      expect(find).to.be.an('function');
    });
    it('should return the element if the element is in the array', () => {
      const find = (arr) => {
        for(let i = 0; i < arr.length; i++) {
          if(arr[i] > 10) return true;
        }
        return false;
      }
      expect(funcs.find([1, 2, 3], find), undefined);
    });
    it('should return the element if the element is in the array', () => {
      const find = (arr) => {
        for(let i = 0; i < arr.length; i++) {
          if(arr[i] > 10) return true;
        }
        return false;
      }
      expect(funcs.find([10, 12, 13], find), 12);
    });
  });

  describe('`filter`', () => {
    it('should be a function', () => {
      const filter = funcs.filter;
      expect(filter).to.be.a('function');
    });
    const find = (arr) => {
      for (let i = 0; i < arr.length; i++) {
        if(arr[i] > 10) return true;
      }
      return false;
    }
    it('should return a new array that consists of all the elements that satisfy the conditions of the callback function', () => {
      expect(funcs.filter([10, 12, 13], find), [12, 13]);
    });
    it('should return an array', () => {
      expect(funcs.filter([10, 12, 13], find)).to.be.a('array');
    });
  });

  describe('`flatten`', () => {
    it('should be a function', () => {
      const flatten = funcs.flatten;
      expect(flatten).to.be.a('function');
    });
    it('should flatten nested arrays into a single array', () => {
      expect(funcs.flatten([[1, 2], 3, [[4], 342, [5]]]), [1, 2, 3, 4, 342, 5]);
    });
    it('should return an array', () => {
      expect(funcs.flatten([[1, 2], 3, [[4], 342, [5]]])).to.be.an('array');
    });
  });
});
