const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('Arrays', () => {
  describe('each', () => {
    it('should invoke a callback for each array element', () => {
      const each = arrayFunctions.each;
      expect(typeof each).toBe('function');
    })
  })

  describe('map', () => {
    it('should be a function', () => {
      const map = arrayFunctions.map;
      const s1 = map([1,2,3], num => num*2);
      expect(typeof map).toBe('function');
      expect(s1).toEqual([2,4,6]);
    })
  })

  describe('reduce', () => {
    it('should reduce an array to a single value based on the callback', () => {
      const reduce = arrayFunctions.reduce;
      const s1 = reduce([1,2,3], (num, acc) => acc + num);
      const s2 = reduce([1,2,3,4,5], (num, acc) => acc * num);
      const s3 = reduce([1,2,3], (num, acc) => acc);
      expect(s1).toEqual(6);
      expect(s2).toEqual(120);
      expect(s3).toEqual(3);
    })
  })

  describe('find', () => {
    it('should find some value in an array', () => {
      const find = arrayFunctions.find;
      const s1 = find([1,2,3], num => num === 2);
      const s2 = find([1,2,3], num => num === 0);
      const s3 = find([1,2,3,4,5,3], num => num === 3);
      expect(s1).toEqual(2);
      expect(s2).toEqual(undefined);
      expect(s3).toEqual(3);
    })
  })

  describe('filter', () => {
    it('should filter array elements based on the callback', () => {
      const filter = arrayFunctions.filter;
      const s1 = filter([], num => num === 1);
      const s2 = filter([1,2,3], num => num === 2);
      const s3 = filter([1,2,3,4,5,3], num => num === 3)
      expect(s1).toEqual([])
      expect(s2).toEqual([2]);
      expect(s3).toEqual([3, 3]);
    })
  })

  describe('flatten', () => {
    it('should alter a multi-dimensional array to a one-dimentional array', () => {
      const flatten = arrayFunctions.flatten;
      const s1 = flatten([1,2,[3, 4, [5, 6]]]);
      const s2 = flatten([1,2,3]);
      const s3 = flatten({ key: "value" });
      expect(s1).toEqual([1,2,3,4,5,6]);
      expect(s2).toEqual([1,2,3]);
      expect(s3).toEqual([]);
    })
  })
});