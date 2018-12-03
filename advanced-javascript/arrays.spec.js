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
      const arr = [1, 2, 3];
      const callback = item => item + 1;
      const expected = [2, 3, 4];
      const actual = map(arr, callback);
      expect(typeof map).toBe('function');
      expect(actual).toEqual(expected);
    });
  });
  describe('each', () => {
    it('should be a function and loop through array', () => {
      const each = arrayFunctions.each;
      const arr = [1, 2, 3];
      const callback = item => item;
      const actual = each(arr, callback);
      expect(typeof each).toBe('function');
      expect(actual).toEqual(undefined);
    });
  });
  describe('reduce', () => {
    it('should be a function and reduce the array', () => {
      const reduce = arrayFunctions.reduce;
      const arr = [1, 2, 3];
      const callback = (total, current) => total + current;
      const actual = reduce(arr, callback);
      expect(typeof reduce).toBe('function');
      expect(actual).toBe(6);
    });
  });
  describe('find', () => {
    it('should be a function and finds the first element', () => {
      const find = arrayFunctions.find;
      const arr = [5, 12, 8, 130, 44];
      const callback = item => item > 10;
      const actual = find(arr, callback);
      expect(typeof find).toBe('function');
      expect(actual).toBe(12);
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
      const callback = word => word.length > 6;
      const expected = ['exuberant', 'destruction', 'present'];
      const actual = filter(arr, callback);
      expect(typeof filter).toBe('function');
      expect(actual).toEqual(expected);
    });
  });
  describe('flatten', () => {
    it('should be a function and flattens the array', () => {
      const flat = arrayFunctions.flatten;
      const arr = [1, 2, [3, 4]];
      const expected = [1, 2, 3, 4];
      const actual = flat(arr);
      expect(typeof flat).toBe('function');
      expect(actual).toEqual(expected);
    });
  });
});
