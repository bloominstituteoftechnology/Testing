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
    it('should invoke the callback on each array element', () => {
      const cb = sinon.spy();
      const arr = [1, 2, 3, 4, 5];
      each(arr, cb);
      expect(cb).to.have.callCount(arr.length);
    });
    it('should pass the element and index to the callback', () => {
      let total = 0;
      const cb = (array, idx) => {
        total += array + idx;
      };
      const arr = [1, 2, 3, 4, 5];
      each(arr, cb);
      expect(total).to.equal(25);
    });
  });

  describe('`map`', () => {
    const map = arrayFunctions.map;
    it('should be a function', () => {
      expect(map).to.be.an('function');
    });
    it('should return an array', () => {
      const arr = [1, 2, 3, 4, 5];
      const test = map(arr, num => num + 1);
      expect(Array.isArray(test)).to.equal(true);
    });
    it('should pass each item into the transform function', () => {
      const arr = [1, 2, 3, 4, 5];
      const cb = (num) => {
        return num * num;
      };
      const result = map(arr, cb);
      expect(result).to.eql([1, 4, 9, 16, 25]);
    });
  });

  describe('`reduce`', () => {
    const reduce = arrayFunctions.reduce;
    it('should be a function', () => {
      expect(reduce).to.be.a('function');
    });
    it('should reduce the array\'s contents to a single value', () => {
      const arr = [1, 2, 3, 4, 5];
      const result = reduce(arr, (memo, num) => (memo + num));
      expect(result).to.equal(15);
    });
    it('should accept a memo argument', () => {
      const arr = [1, 2, 3, 4, 5];
      const result = reduce(arr, (memo, num) => (memo + num), 5);
      expect(result).to.equal(20);
    });
    it('should handle any type of data in the array', () => {
      const arr = ['hello ', 'Freddy ', 'Frickle'];
      const result = reduce(arr, (memo, num) => (memo + num));
      expect(result).to.equal('hello Freddy Frickle');
    });
  });

  describe('`find`', () => {
    const find = arrayFunctions.find;
    it('should be a function', () => {
      expect(find).to.be.an('function');
    });
    it('should return the first element that passes the truth test', () => {
      const arr = [0, 1, 2, 3, 4, 5];
      const result = find(arr, (num) => (num === 3));
      expect(result).to.equal(3);
    });
  });

  describe('`filter`', () => {
    const filter = arrayFunctions.filter;
    it('should be a function', () => {
      expect(filter).to.be.a('function');
    });
    it('should return an array', () => {
      const arr = [1, 2, 3, 4, 5];
      const result = filter(arr, (arr, num) => (num === 5));
      expect(Array.isArray(result)).to.equal(true);
    });
    it('should return an empty array if no elements pass truth test', () => {
      const arr = [1, 2, 3, 4, 5];
      const result = filter(arr, (arr, num) => (num === 6));
      expect(result).to.eql([]);
    });
    it('should return an array with all elements that pass truth test', () => {
      const arr = [1, 2, 3, 4, 5];
      const result = filter(arr, (num) => (num % 2 === 0));
      expect(result).to.eql([2, 4]);
    });
  });

  describe('`flatten`', () => {
    const flatten = arrayFunctions.flatten;
    it('should be a function', () => {
      expect(flatten).to.be.a('function');
    });
    it('should return an array', () => {
      const arr = [1, 2, 3, 4, 5];
      const result = flatten(arr);
      expect(Array.isArray(result)).to.equal(true);
    });
    it('should return a flattened array when given a nested array', () => {
      const arr = [1, 2, [3, 4], 5];
      const result = flatten(arr);
      expect(result).to.eql([1, 2, 3, 4, 5]);
    });
    it('should return a flattened array regardless of how deep the array nesting is', () => {
      const arr = [1, 2, [[[[[[3]]]]]], [[4]], [5]];
      const result = flatten(arr);
      expect(result).to.eql([1, 2, 3, 4, 5]);
    });
  });

});
