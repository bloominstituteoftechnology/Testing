/* eslint-disable prefer-destructuring */

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const arrayFunctions = require('../src/arrays');

const expect = chai.expect;
chai.use(sinonChai);

const { each } = arrayFunctions;
const { map } = arrayFunctions;
const { reduce } = arrayFunctions;
const { find } = arrayFunctions;
const { filter } = arrayFunctions;
const { flatten } = arrayFunctions;


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
      expect(each).to.be.a('function');
    });
    // begin here
    it('should execute the callback on each array element', () => {
      const cb = sinon.spy();
      each([4, 5, 6], cb);
      expect(cb).to.have.callCount(3);
    });
  });

  describe('`map`', () => {
    it('should be a function', () => {
      expect(map).to.be.an('function');
    });
    it('should execute the callback on each array element', () => {
      const cb = sinon.spy();
      map([6, 7, 8, 9], cb);
      expect(cb).to.have.callCount(4);
    });
    it('should return an expected output with the specific input', () => {
      const cb = (item) => {
        return item * 2;
      };
      const setSpy = sinon.spy(cb);
      const result = map([1, 2, 3], setSpy);
      expect(result).to.eql([2, 4, 6]);
      // console.log('setSpy.returnValues', setSpy.returnValues);
    });
    it('should return an output with type: array', () => {
      const cb = (item) => {
        return item * 2;
      };
      const setSpy = sinon.spy(cb);
      const result = map([1, 2, 3], setSpy);
      expect(result).to.be.an('array');
    });
  });

  describe('`reduce`', () => {
    it('should be a function', () => {
      expect(reduce).to.be.a('function');
    });
    it('should execute the callback on each array element', () => {
      const cb = sinon.spy();
      reduce([1, 2, 3, 4], cb);
      expect(cb).to.have.callCount(3);
    });
    it('should return the expected output given a specific input', () => {
      const cb = (a, b) => {
        return (a > b) ? a : b;
      };
      expect(reduce([1, 3, 4], cb)).to.equal(4);
    });
  });

  describe('`find`', () => {
    it('should be a function', () => {
      expect(find).to.be.an('function');
    });
    it('should execute the callback on each array element', () => {
      const cb = sinon.spy();
      find([1, 2, 3, 4], cb);
      expect(cb).to.have.callCount(4);
    });
    it('should return the expected output given a specific input', () => {
      const cb = (element) => {
        if (element === 3) return true;
      };
      const setSpy = sinon.spy(cb);
      expect(find([1, 2, 3, 4, 5], setSpy)).to.equal(3);
      // console.log(setSpy.returnValues);
    });
  });

  describe('`filter`', () => {
    it('should be a function', () => {
      expect(filter).to.be.a('function');
    });
    it('should execute the callback on each array element', () => {
      const cb = sinon.spy();
      filter([1, 2, 3], cb);
      expect(cb).to.have.callCount(3);
    });
    it('should return an expected output given a specific input', () => {
      const cb = (element) => {
        if (element === 2) return true;
      };
      expect(filter([1, 2, 2, 3], cb)).to.eql([2, 2]);
    });
    it('should return an output with data type: array', () => {
      const cb = (element) => {
        if (element === 2) return true;
      };
      expect(filter([1, 2, 2, 3], cb)).to.be.an('array');
    });
  });

  describe('`flatten`', () => {
    it('should be a function', () => {
      expect(flatten).to.be.a('function');
    });
    it('should return an output with the type: array', () => {
      expect(flatten([1, 2, 3])).to.be.an('array');
    });
    it('should return an expected output given a specific input', () => {
      const result = [1, 2, 3, 4, 5];
      expect(flatten([1, [2, [3]], 4, 5])).to.eql(result);
    });
  });
});
