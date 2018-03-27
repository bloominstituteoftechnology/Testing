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
    it('should iterate for every element in the array', () => {
      const spy = sinon.spy();
      each([1, 2, 3], spy);
      expect(spy).to.have.callCount(3);
    });
    it('should pass each element through the callback', () => {
      // let sum = 0;
      // each([1, 2, 3], x => sum += x);
      // expect(sum).to.equal(6);

      // const spy = sinon.spy();
      // each([1, 2, 3], spy);
      // expect(spy).calledWith(1);
      // expect(spy).calledWith(2);
      // expect(spy).calledWith(3);

      const spy = sinon.spy();
      const test = [1, 3, 5, 1, 5, 7];
      each(test, spy);
      const results = spy.args;
      const array = test.map((each, i) => [each, i]);
      expect(results).to.deep.equal(array);
    });
    it('should pass each element and index through the callback', () => {
      let sum = 0;
      each([1, 2, 3], (x, i) => (sum = sum + x + i));
      expect(sum).to.equal(9);
    });
  });

  describe('`map`', () => {
    const map = arrayFunctions.map;
    it('should be a function', () => {
      expect(map).to.be.an('function');
    });
    it('should iterate for every element in the array', () => {
      const spy = sinon.spy();
      map([1, 2, 3], spy);
      expect(spy).to.have.callCount(3);
    });
    it('should return an array', () => {
      expect(map([1, 2, 3], x => x + 2)).to.be.an('array');
    });
    it('it should properly handle the elements in the callback', () => {
      const spy = sinon.spy(x => x + 2);
      map([1, 2, 3], spy);
      const results = spy.returnValues;
      // results = map([1, 2, 3], x => x + 2);
      expect(results).to.deep.equal([3, 4, 5]);
    });
  });

  describe('`reduce`', () => {
    const reduce = arrayFunctions.reduce;
    it('should be a function', () => {
      expect(reduce).to.be.a('function');
    });
    it('should iterate for every element in the array', () => {
      const spy = sinon.spy();
      reduce([1, 2, 3], spy);
      expect(spy).to.have.callCount(2);
    });
    it('should return the correct number', () => {
      expect(reduce([1, 2, 3], x => x + 2)).to.equal(5);
    });
    it('it should properly handle the elements in the callback', () => {
      const spy = sinon.spy(x => x + 2);
      reduce([1, 2, 3], spy);
      const results = spy.returnValues;
      // results = reduce([1, 2, 3], x => x + 2);
      expect(results).to.deep.equal([3, 5]);
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
