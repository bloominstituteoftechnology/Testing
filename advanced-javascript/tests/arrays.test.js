/* eslint-disable prefer-destructuring */

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const arrayFunctions = require('../src/arrays');

const expect = chai.expect;
chai.use(sinonChai);

const {
  each,
  map,
  reduce,
  find,
  filter,
  flatten
} = arrayFunctions;


// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.
// hint 3. - if the function you're testing requires a * callback *, make sure you use a spy like sinon

describe('Arrays', () => {
  let testArr = [];
  
  beforeEach(() => {
    testArr = ['Monday', 'Tuesday', 'Noday', 'Friyay'];
  });

  afterEach(() => {
    testArr = [];
  });
  
  describe('`each`', () => {
    const callback = sinon.spy();
    it('should be a function', () => {
      // const each = arrayFunctions.each;
      expect(each).to.be.a('function');
    });
    // begin here
    it('should execute callback atleast once', () => {
      each(testArr, callback);
      expect(callback).to.have.callCount(testArr.length);
    });
  });

  describe('`map`', () => {
    const callback = sinon.spy();
    it('should be a function', () => {
      const map = arrayFunctions.map;
      expect(map).to.be.an('function');
    });
    it('should execute callback atleast once', () => {
      map(testArr, callback);
      expect(callback).to.have.callCount(testArr.length);
    })
    it('should map elements to objects', () => {
      const callback = (item) => {
        return { 
          item,
        };
      };
      const mappedArray = map(testArr, callback);
      expect(mappedArray[0]).to.be.an('object');
    });
  });

  describe('`reduce`', () => {
    const callback = sinon.spy();
    it('should be a function', () => {
      const reduce = arrayFunctions.reduce;
      expect(reduce).to.be.a('function');
    });
    it('should return sum', () => {
      const sum = reduce([1, 2, 3], (a, b) => a + b);
      expect(sum).that.equal(6);
    });
  });

  describe('`find`', () => {
    it('should be a function', () => {
      const find = arrayFunctions.find;
      expect(find).to.be.an('function');
    });
    it('should find correct element', () => {
      const testArr = [1, 2, 3];
      const testParam = 2;
      const callback = (param) => {
        if (param === testParam) return param
      }
      const foundElement = find(testArr, callback)
      expect(foundElement).to.equal(2);
    })
  });

  describe('`filter`', () => {
    it('should be a function', () => {
      const filter = arrayFunctions.filter;
      expect(filter).to.be.a('function');
    });
    it('should filter down an item', () => {
      // const testArr = [1, 2, 3, 3, 4];
      const callback = (item) => {
        return true;
      };
      // console.log(callback)
      filter(testArr, callback)
    });
  });

  describe('`flatten`', () => {
    it('should be a function', () => {
      const flatten = arrayFunctions.flatten;
      expect(flatten).to.be.a('function');
    });
    it('should flatten nested array', () => {
      const testArr = [[2]];
      const flattenedArr = flatten(testArr);
      expect(flattenedArr).to.eql([2]);
    })
  });
});
