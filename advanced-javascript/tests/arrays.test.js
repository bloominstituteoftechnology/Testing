/* eslint-disable */
/* prefer-destructuring */

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
    const spy = sinon.spy();
    const each = arrayFunctions.each;
    it('should be a function', () => {
      expect(each).to.be.a('function');
    });
    it("should run the callback on each element in the array", () => {
      const spy = sinon.spy();
      each([1, 2, 3], spy);
      expect(spy).to.have.callCount(3);
    })
  });

  describe('`map`', () => {
    const spy = sinon.spy();
    const map = arrayFunctions.map;
    it('should be a function', () => {
      expect(map).to.be.a('function');
    });
    it("should run the callback on each element", () => {
      map([1, 2, 3], spy);
      expect(spy).to.have.callCount(3);
    });
    it("should return an array", () => {
      expect(map([1, 2, 3], spy)).to.be.an("array");
    })
  });

  describe('`reduce`', () => {
    const spy = sinon.spy();
    const reduce = arrayFunctions.reduce;
    it('should be a function', () => {
      expect(reduce).to.be.a('function');
    });
    it("it should run the callback on each element", () => {
      reduce([1, 2, 3], spy);
      expect(spy).to.have.callCount(2);
    })

  });

  describe('`find`', () => {
    const find = arrayFunctions.find;
    it('should be a function', () => {
      expect(find).to.be.an('function');
    });
  });

  describe('`filter`', () => {
    const filter = arrayFunctions.filter;
    it('should be a function', () => {
      expect(filter).to.be.a('function');
    });
  });

  describe('`flatten`', () => {
    const flatten = arrayFunctions.flatten;
    it('should be a function', () => {
      expect(flatten).to.be.a('function');
    });
  });
});
