const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('Arrays', () => {
  describe('map', () => {
    it('should be a function', () => {
      const map = arrayFunctions.map;

      const Value = map([1, 2, 3], num => num*2);

      expect(typeof map).toBe('function');
      expect(Value).toEqual([2, 4, 6]);
    });
  });

  describe('each', () => {
    it('invokes cb for every array element', () => {
      const each = arrayFunctions.each;

      expect(typeof each).toBe('function');
    });
  });

  describe('reduce', () => {
    it('reduces array to single value', () => {
      const reduce = arrayFunctions.reduce;
      const Value1 = reduce([2, 2, 2], (x, y) => y + x);
      const Value2 = reduce([1, 1, 1], (x, y) => y * x);
      const Value3 = reduce([1, 2, 3], (x ,y) => y);

      expect(Value1).toEqual(6);
      expect(Value2).toEqual(1);
      expect(Value3).toEqual(3);
    });
  });

  describe('find', () => {
    it('find value within array', () => {
      const find = arrayFunctions.find;
      const Value1 = find([1, 2, 3], num => num === 1);
      const Value2 = find([1, 2, 3], num => num === 4);
      const Value3 = find([1, 2, 3, 4, 3], num => num === 4);

      expect(Value1).toEqual(1);
      expect(Value2).toEqual(undefined);
      expect(Value3).toEqual(4);
    });
  });

  describe('filter', () => {
    it('filter arrays elements with callback', () => {
      const filter = arrayFunctions.filter;
      const Value1 = filter([], num => num === 1);
      const Value2 = filter([1, 2, 3, 4, 5, 6, 4, 4, 5], num => num === 4);
      const Value3 = filter([1, 2, 3, 4, 5, 3, 5], num => num === 5)
      
      expect(Value1).toEqual([])
      expect(Value2).toEqual([4, 4, 4]);
      expect(Value3).toEqual([5, 5]);
    });
  });

  describe('flatten', () => {
    it('Convert multi-dimensional array to a one-dimentional array', () => {
      const flatten = arrayFunctions.flatten;
      const Value1 = flatten([0, 1, [3, 4, [6, 7]]]);
      const Value2 = flatten([0, 1, 2]);
      const Value3 = flatten({ memo: "item" });
      
      expect(Value1).toEqual([0, 1, 3, 4, 6, 7]);
      expect(Value2).toEqual([0, 1, 2]);
      expect(Value3).toEqual([]);
    });
  });
});