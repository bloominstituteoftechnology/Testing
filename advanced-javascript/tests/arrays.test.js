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
    // begin here
  });

  describe('`map`', () => {
    it('should be a function', () => {
      const map = arrayFunctions.map;
      expect(map).to.be.an('function');
    });
    it('should return an array', () => {
      const map = arrayFunctions.map;
      expect(arrayFunctions.map([1,2,3], (element) => {
        return element + 4;
      }))
      .to.be.an('array');
    });
    it('should invoke the cb on each element', () => {
      const map = arrayFunctions.map;
      expect(arrayFunctions.map([1,2,3], (element) => {
        return element + 4;
      }))
      .to.have.ordered.members([5,6,7]);
    });

  });

  describe('`reduce`', () => {
    it('should be a function', () => {
      const reduce = arrayFunctions.reduce;
      expect(reduce).to.be.a('function');
    });
    it('should handle memo argument', () => {
      const callBack = (memo, element) => {
        return memo + element
      };
      const result = arrayFunctions.reduce([1,2,3,4], callBack, 12);
      expect(result).to.equal(22);
    });
    it('should handle elements of various types', () => {
      const callBack = (memo, element) => {
        return memo + element
      };
      const result = arrayFunctions.reduce(['1','2','3','4'], callBack, '12');
      expect(result).to.equal('121234');
    });
  });

  describe('`find`', () => {
    it('should be a function', () => {
      const find = arrayFunctions.find;
      expect(find).to.be.a('function');
    });
    it('should return number or undefined', () => {
      const callBack = (element) => {
        return element > 5
      };
      const result1 = arrayFunctions.find([1,'bear',3,4,7,6], callBack);
      const result2 = arrayFunctions.find([1,2,3,4,2], callBack);
      expect(result1).to.be.a('number');
      expect(result2).to.equal(undefined);
    });
    it('should return first element that matches w/ cb', () => {
      const callBack = (element) => {
        return element > 5
      };
      const result = arrayFunctions.find([1,5,23,2,3,4,7,6], callBack);
      expect(result).to.equal(23);
    });
  });

  describe('`filter`', () => {
    it('should be a function', () => {
      const filter = arrayFunctions.filter;
      expect(filter).to.be.a('function');
    });
    it('should return an array', () => {
      const filter = arrayFunctions.filter;
      const callBack = (element) => {
        return element !== 2;
      };
      expect(arrayFunctions.filter([1,2,3], callBack))
      .to.be.an('array');
    });
    it('should filter based on cb', () => {
      const filter = arrayFunctions.filter;
      const callBack = (element) => {
        return element !== 2;
      };
      expect(arrayFunctions.filter([1,2,3], callBack))
      .to.have.ordered.members([1,3]);
    });
  });

  describe('`flatten`', () => {
    it('should be a function', () => {
      const flatten = arrayFunctions.flatten;
      expect(flatten).to.be.a('promise');
    });
  });
});
