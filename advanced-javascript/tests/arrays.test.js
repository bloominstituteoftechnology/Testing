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
    const each = arrayFunctions.each;
    it('should be a function', () => {
      expect(each).to.be.a('function');
    });
    it('should be called three times for an array of length 3', () => {
      const spyCallBack = sinon.spy();
      each([1, 2, 3], spyCallBack);
      expect(spyCallBack.calledThrice, true);
    });
    it('second call should equal 2', () => {
      const add2 = x => x + 2;
      const spyCallBack = sinon.spy(add2);
      each([4, 5, 6], spyCallBack);
      expect(spyCallBack.secondCall.returnValue).to.equal(7);
    });
    it('should return 120', () => {
      let count = 1;
      each([4, 5, 6], (element) => {
        count *= element;
      });
      expect(count).to.equal(120);
    });
  });

  describe('`map`', () => {
    const map = arrayFunctions.map;
    it('should be a function', () => {
      expect(map).to.be.a('function');
    });
    it('should return an array', () => {
      expect(map([1, 2], x => x + 1)).to.be.an('array');
    });
    it('first value should equal 2', () => {
      const result = map([1, 2], x => x + 1);
      expect(result[0]).to.equal(2);
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
      expect(find).to.be.a('function');
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
