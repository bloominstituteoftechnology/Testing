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
    // begin here
    it('should call the callback n amounts of times', () => {
      const each = arrayFunctions.each;
      const items = [1, 2, 3];
      const cb = sinon.spy();
      const n = items.length;
      each(items, cb);
      expect(cb.callCount).to.equal(items.length);
    });
  });

  describe('`map`', () => {
    it('should be a function', () => {
      const map = arrayFunctions.map;
      expect(map).to.be.an('function');
    });
    it('should transform every element passed in', () => {
      const map = arrayFunctions.map;
      const cb = item => item * 2;
      const items = [1, 2, 3];
      const expected = [2, 4, 6];
      expect(map(items, cb)).to.deep.equal(expected);
    });
  });

  describe('`reduce`', () => {
    it('should be a function', () => {
      const reduce = arrayFunctions.reduce;
      expect(reduce).to.be.a('function');
    });
    it('should reduce to a single value', () => {
      const reduce = arrayFunctions.reduce;
      const items = [1, 2, 3];
      const cb = (acc, item) => acc + item;
      const something = reduce(items, cb);
      expect(something).to.equal(6);
    });
  });

  describe('`find`', () => {
    it('should be a function', () => {
      const find = arrayFunctions.find;
      expect(find).to.be.an('function');
    });
    it('should find an existing element in array', () => {
      const find = arrayFunctions.find;
      const items = [1, 2, 3];
      const cb = item => item === 3;
      expect(find(items, cb)).to.equal(3);
    });
  });

  describe('`filter`', () => {
    it('should be a function', () => {
      const filter = arrayFunctions.filter;
      expect(filter).to.be.a('function');
    });
    it('should filter out items based on the callback', () => {
      const filter = arrayFunctions.filter;
      const cb = item => item % 2 === 0;
      const items = [1, 2, 3, 4];
      const expected = [2, 4];
      expect(filter(items, cb)).to.deep.equal(expected);
    });
  });

  describe('`flatten`', () => {
    it('should be a function', () => {
      const flatten = arrayFunctions.flatten;
      expect(flatten).to.be.a('function');
    });
    it('should flatten an array', () => {
      const flatten = arrayFunctions.flatten;
      const items = [1, 2, 3, [4, 5]];
      const expected = [1, 2, 3, 4, 5];
      expect(flatten(items)).to.deep.equal(expected);
    });
  });
});
