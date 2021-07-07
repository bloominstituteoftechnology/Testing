const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('Arrays', () => {
  describe('each', () => {
    it('???', () => {
      const each = arrayFunctions.each
      expect(typeof each).toBe("function");
    })
  })
  describe('map', () => {
    it('should map over an array and apply the callback\'s value', () => {
      const map = arrayFunctions.map;
      const example = map([1, 2, 3], num => num + 1);
      const example2 = map([2, 3, 4], num => num * 5);
      expect(example).toEqual([2, 3, 4]);
      expect(example2).toEqual([10, 15, 20]);
    });
  });
  describe('reduce', () => {
    it('reduce an array to a single value', () => {
      const reduce = arrayFunctions.reduce;
      const example = reduce([1, 2, 3], (num, reducer) => reducer + num);
      expect(example).toBe(6);
    });
  });
  describe('find', () => {
    it('should find an element in an array', () => {
      const find = arrayFunctions.find;
      const example = find([1, 2, 3, 4 , 5], num => num === 4)
      expect(example).toBe(4);
    })
    it('can find a negative value in an array', () => {
      const find = arrayFunctions.find;
      const example = find([1, 2, -33, 4 , 5], num => num === -33)
      expect(example).toBe(-33);
    })
  })
  describe('filter', () => {
    it('should filter out a value in an array', () => {
      const filter = arrayFunctions.filter;
      const example = filter([1, 2, 3, 4, 5],  num => num === 3);
      expect(example).toEqual([3]);
    })
  })
  describe('flatten', () => {
    it('should return a new array with the sub-array elements concatted into it', () => {
      const flatten = arrayFunctions.flatten;
      const example = flatten([1,2,[3,4,[5,6]]]);
      expect(example).toEqual([1,2,3,4,5,6])
    })
  })
});
