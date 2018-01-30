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
    it('should execute call back at least once', () => {
      const callBack = sinon.spy();
      const each = arrayFunctions.each;
      each([1], callBack);
      expect(callBack).to.have.callCount(1);
    });
  });

  describe('`map`', () => {
    it('should be a function', () => {
      const map = arrayFunctions.map;
      expect(map).to.be.an('function');
    });
    it('should execute the callback at least once', () => {
      const callBack = sinon.spy();
      const map = arrayFunctions.map;
      map([1], callBack);
      expect(callBack).to.have.callCount(1);
    });
    it('should return a type of array', () => {
      const callBack = sinon.spy();
      const map = arrayFunctions.map;
      expect(map([1], callBack)).to.be.an('array');
    });
  });

  describe('`reduce`', () => {
    it('should be a function', () => {
      const reduce = arrayFunctions.reduce;
      expect(reduce).to.be.a('function');
    });
    it('should execute the callback at least once', () => {
      const callBack = sinon.spy();
      const reduce = arrayFunctions.reduce;
      reduce([1, 2], callBack, 0);
      expect(callBack).to.have.callCount(2);
    });
    it('should return a number', () => {
      const reduce = arrayFunctions.reduce;
      const reducer = (acc, curr) => acc + curr;
      expect(reduce([12, 12, 11], reducer, 0)).to.be.a('number');
    });
    it('should perform correct calculations using the callback provided', () => {
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
    it('should find the item we are searching for', () => {
      const find = arrayFunctions.find;
      const callBack = (element) => {
        return element === 'turtle' ? element : undefined;
      };
      expect(find([1, 2, 'turtle', 'blue'], callBack)).to.equal('turtle');
    });
    it('should return an item with the same type as what we are seaching for', () => {
      const find = arrayFunctions.find;
      const callBack = (element) => {
        return element === 3 ? element : undefined;
      };
      expect(find([1, 3, 'orange', 'banana'], callBack)).to.be.a('number');
    });
  });

  describe('`filter`', () => {
    it('should be a function', () => {
      const filter = arrayFunctions.filter;
      expect(filter).to.be.a('function');
    });
    it('should return items that meet the filter', () => {
      const filter = arrayFunctions.filter;
      const callBack = (element) => { return element > 10; };
      expect(filter([1, 133, 244, 32, 3], callBack)).to.eql([133, 244, 32]);
    });
    it('should return an array', () => {
      const filter = arrayFunctions.filter;
      const callBack = (element) => { return element > 1; };
      expect(Array.isArray(filter([1, 2, 3], callBack))); // this gave me hell, tried to make it work with typeof for a long time
    });
  });

  describe('`flatten`', () => {
    it('should be a function', () => {
      const flatten = arrayFunctions.flatten;
      expect(flatten).to.be.a('function');
    });
    it('should flatten nested arrays', () => {
      const flatten = arrayFunctions.flatten;
      expect(flatten([1, 2, [3, [4]]])).to.eql([1, 2, 3, 4]);
    });
    it('should return an array', () => {
      const flatten = arrayFunctions.flatten;
      expect(Array.isArray(flatten([1, 2, [3, [4, [5]]]])));
    });
  });
});
