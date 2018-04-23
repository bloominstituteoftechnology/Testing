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
  describe('each', () => {
    it('should invoke cb on each array element', () => {
      let count = 0;
      arrayFunctions.each([1, 2, 3], (element) => {
        count += element;
      });
      expect(count).to.equal(6);
    });
    it('should pass the element and the index to cb', () => {
      let count = 0;
      arrayFunctions.each([1, 2, 3], (element, index) => {
        count += element + index;
      });
      expect(count).to.equal(9);
    });
    // it('should call the callback passed to it for each element in array given', () => {
    //   const callBackMockFn = jest.fn(); // this function is going to act as your callback, if it's not called your test will fail.
    //   expect(callBackMockFn.mock.calls.length).toBe(0);
    //   arrayMethods.each([1, 2, 3, 'four'], callBackMockFn);
    //   expect(callBackMockFn.mock.calls.length).toBe(4);
    // });
  });

  describe('`map`', () => {
    it('should be a function', () => {
      const map = arrayFunctions.map;
      expect(map).to.be.an('function');
    });
  });

  describe('`reduce`', () => {
    it('should be a function', () => {
      const reduce = arrayFunctions.reduce;
      expect(reduce).to.be.a('function');
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
