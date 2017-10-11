const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const arrayFunctions = require('../src/arrays');

const expect = chai.expect;

chai.should();
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
    const arr = [1, 2, 3, 4];
    it('should be a function', () => {
      expect(each).to.be.a('function');
    });
    it('should iterate over an array', () => {
      const callBack = sinon.spy();
      each(arr, callBack);
      callBack.should.have.callCount(arr.length);
    });
    it('should call the callback function on each element of the array', () => {
      const callBack = sinon.spy();
      each(arr, callBack);
      callBack.should.have.been.calledWith(arr[0]);
      callBack.should.have.been.calledWith(arr[1]);
      callBack.should.have.been.calledWith(arr[2]);
      callBack.should.have.been.calledWith(arr[3]);
    });
  });

  describe('`map`', () => {
    const map = arrayFunctions.map;
    it('should be a function', () => {
      expect(map).to.be.an('function');
    });
    it('should return an array', () => {
      expect(map([1, 2, 3], item => ++item)).to.be.an('array');
    });
    it('should apply the callback to each item in the array', () => {
      expect(map([1, 2, 3], item => ++item)).to.eql([2, 3, 4]);
    });
  });

  describe('`reduce`', () => {
    const reduce = arrayFunctions.reduce;
    it('should be a function', () => {
      expect(reduce).to.be.a('function');
    });
    it('should reduce an array to a single value', () => {
      const sum = reduce([1, 2, 3], (a, b) => a + b);
      expect(sum).to.equal(6);
    });
    it('should allow a starting value to be passed in', () => {
      const product = reduce([1, 2, 3], (a, b) => a * b, 10);
      expect(product).to.equal(60);
    });
    it('should handle an array of any type of values', () => {
      const wizard = reduce(
        ['G', 'a', 'n', 'd', 'a', 'l', 'f'],
        (a, b) => (a += b),
        '',
      );
      expect(wizard).to.equal('Gandalf');
    });
  });

  describe('`find`', () => {
    const find = arrayFunctions.find;
    it('should be a function', () => {
      expect(find).to.be.an('function');
    });
    it('should return undefined if no element is found', () => {
      expect(find([1, 1, 1], item => item === 2)).to.be.undefined;
    });
    it('should return the first item found', () => {
      expect(find([1, 2, 3, 3, 4], item => item === 3)).to.equal(3);
    });
  });

  describe('`filter`', () => {
    const filter = arrayFunctions.filter;
    it('should be a function', () => {
      expect(filter).to.be.a('function');
    });
    it('should return an array', () => {
      expect(filter([1, 2, 3], item => item > 1)).to.be.an('array');
    });
    it('should filter the array based on the provided callback', () => {
      expect(filter([1, 2, 3, 4, 5, 6], item => item % 2 === 0)).to.eql([
        2,
        4,
        6,
      ]);
    });
    it('should return an empty array if all elements fail the callback', () => {
      expect(filter([1, 3, 5], item => item % 2 === 0)).to.be.empty;
    });
  });

  describe('`flatten`', () => {
    const flatten = arrayFunctions.flatten;
    it('should be a function', () => {
      expect(flatten).to.be.a('function');
    });
    it('should return an array', () => {
      expect(flatten([[1, 2], 3], item => ++item)).to.be.an('array');
    });
    it('should flatten a nested array', () => {
      const nested = [[1, 2, 3, [1]], 1, 2, [1, [2, [3]]]];
      const flat = [1, 2, 3, 1, 1, 2, 1, 2, 3];
      expect(flatten(nested)).to.eql(flat);
    });
  });
});
