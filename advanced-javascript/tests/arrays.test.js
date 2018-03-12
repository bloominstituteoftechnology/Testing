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
    it('should invoke a callback for elements in the array', () => {
      const callback = sinon.spy();
      const elements = [1, 2, 3];
      arrayFunctions.each(elements, callback);
      expect(callback).to.have.been.calledWith(1);
      expect(callback).to.have.been.calledWith(2);
      expect(callback).to.have.been.calledWith(3);
    });
  });

  describe('`map`', () => {
    it('should be a function', () => {
      const map = arrayFunctions.map;
      expect(map).to.be.a('function');
    });
    it('should return a new array with mapped elements', () => {
      const callback = sinon.spy();
      const elements = [8999, 9000, 9001];
      expect(arrayFunctions.map(elements, callback));
      expect(callback).to.have.been.calledWith(8999);
      expect(callback).to.have.been.calledWith(9000);
      expect(callback).to.have.been.calledWith(9001);
    });
  });

  describe('`reduce`', () => {
    it('should be a function', () => {
      const reduce = arrayFunctions.reduce;
      const reducer = (acc, curr) => acc * curr;
      expect(reduce([1, 2, 3, 4, 5], reducer, 1)).to.equal(120);
    });
  });

  describe('`find`', () => {
    it('should be a function', () => {
      const find = arrayFunctions.find;
      expect(find).to.be.an('function');
    });
    it('should pass elements to cb and find an element in the arr', () => {
      const callback = element => element > 8;
      const elements = [7, 8, 9];
      expect(arrayFunctions.find(elements, callback)).to.equal(9);
    });
    it('should return undefined if element is not in arr', () => {
      const callback = element => element > 10;
      const elements = [7, 8, 9];
      expect(arrayFunctions.find(elements, callback)).to.equal(undefined);
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
