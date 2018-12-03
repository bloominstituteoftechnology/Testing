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
      expect(typeof map).toBe('function');
      expect(
        map([1, 2, 3], item => {
          return item + 1;
        })
      ).toEqual([2, 3, 4]);
    });
  });
  describe('each', () => {
    it('should be a function and loop through array', () => {
      const each = arrayFunctions.each;
      expect(typeof each).toBe('function');
      expect(
        each([1, 2, 3], item => {
          return item;
        })
      ).toEqual();
    });
  });
  describe('reduce', () => {
    it('should be a function and reduce the array', () => {
      const reduce = arrayFunctions.reduce;
      expect(typeof reduce).toBe('function');
      expect(
        reduce([1, 2, 3], (total, current) => {
          return total + current;
        })
      ).toBe(6);
    });
  });
  describe('find', () => {
    it('should be a function and finds the first element', () => {
      const find = arrayFunctions.find;
      expect(typeof find).toBe('function');
      expect(
        find([5, 12, 8, 130, 44], item => {
          return item > 10;
        })
      ).toBe(12);
    });
  });
  describe('filter', () => {
    it('should be a function and filter an array', () => {
      const filter = arrayFunctions.filter;
      const arr = [
        'spray',
        'limit',
        'elite',
        'exuberant',
        'destruction',
        'present'
      ];
      expect(typeof filter).toBe('function');
      expect(
        filter(arr, word => {
          return word.length > 6;
        })
      ).toEqual(['exuberant', 'destruction', 'present']);
    });
  });
  describe('flatten', () => {
    it('should be a function and flattens the array', () => {
      const flat = arrayFunctions.flatten;
      expect(typeof flat).toBe('function');
      expect(flat([1, 2, [3, 4]])).toEqual([1, 2, 3, 4]);
    });
  });
});
