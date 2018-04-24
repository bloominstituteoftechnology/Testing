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
    it('should throw an error if first arg not an array', () => {
      const each = arrayFunctions.each;
      const spy = sinon.spy();
      const tester = each(4, spy);
      expect(each(4, () => 1)).to.throw;
    });
    it('should invoke callback for each item', () => {
      const each = arrayFunctions.each;
      const spy = sinon.spy();
      const tester = each([2, 2], spy);
      expect(spy).to.have.been.calledTwice;
    });   
  });

  describe('`map`', () => {
    it('should be a function', () => {
      const map = arrayFunctions.each;
      expect(map).to.be.a('function');
    });
    it('should throw an error if first arg not an array', () => {
      const map = arrayFunctions.map;
      const spy = sinon.spy();
      const tester = map(4, spy);
      expect(map(4, () => 1 )).to.throw;
    });
    it('should invoke callback for each item', () => {
      const map = arrayFunctions.map;
      const spy = sinon.spy();
      const tester = map([2, 2], spy);
      expect(spy).to.have.been.calledTwice;
    });   
  });

  describe('`reduce`', () => {
    it('should be a function', () => {
      const reduce = arrayFunctions.reduce;
      expect(reduce).to.be.a('function');
    });
    it('should throw an error if first arg not an array', () => {
      const reduce = arrayFunctions.reduce;
      expect(reduce(4, () => 1, [])).to.throw;
    });
    it('should invoke callback for each item', () => {
      const reduce = arrayFunctions.reduce;
      const spy = sinon.spy();
      const tester = reduce([2, 2], spy, []);
      expect(spy).to.have.been.calledTwice;
    });
  });

  describe('`find`', () => {
    it('should be a function', () => {
      const find = arrayFunctions.find;
      expect(find).to.be.an('function');
    });
    it('should throw an error if first arg not an array', () => {
      const find = arrayFunctions.find;
      expect(find(4, (item) => item === 1 )).to.throw;
    });
    it('should invoke callback for each item', () => {
      const find = arrayFunctions.find;
      const spy = sinon.spy();
      const tester = find([2, 2], spy);
      expect(spy).to.have.been.calledTwice;
    });
  });

  describe('`filter`', () => {
    it('should be a function', () => {
      const filter = arrayFunctions.filter;
      expect(filter).to.be.a('function');
    });
    it('should throw an error if first arg not an array', () => {
      const filter = arrayFunctions.filter;
      expect(filter(4, (item) => item === 1 )).to.throw;
    });
    it('should invoke callback for each item', () => {
      const filter = arrayFunctions.filter;
      const spy = sinon.spy();
      const tester = filter([2, 2], spy);
      expect(spy).to.have.been.calledTwice;
    });
  });

  describe('`flatten`', () => {
    it('should be a function', () => {
      const flatten = arrayFunctions.flatten;
      expect(flatten).to.be.a('function');
    });
    it('should return an array', () => {
      const flatten = arrayFunctions.flatten;
      expect(flatten([1,2,3])).to.be.a('array');
    });
    it('should throw and error if not passed an array', () => {
      const flatten = arrayFunctions.flatten;
      expect(flatten(4)).to.throw;
    });
  });
});
