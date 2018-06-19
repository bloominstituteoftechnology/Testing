const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

const {
  each,
  map,
  reduce,
  find,
  filter,
  flatten,
} = arrayFunctions;

describe('Arrays', () => {
  describe('each', () => {
    it('returns an array', () => {
      const arr = [1, 2, 3];
      const cb = (val, ind) => val;
      expect(each(arr, cb)).toEqual(undefined);
    });
  });

  describe('map', () => {
      const arr = [1, 2, 3];
      const cb = (val, ind) => val;
    it('returns an array', () => {
      expect(map(arr, cb)).toEqual([1, 2, 3]);
    });
  });

  describe('reduce', () => {
    it('returns the sum of an index', () => {
      const arr = [1, 2, 3];
      const cb = (sum, next) => sum + next;
      expect(reduce(arr, cb)).toEqual(6);
    });
  });

  describe('find', () => {
    it('finds a specific element', () => {
      const arr = [1, 2, 3];
      const cb = (val) => val > 2;
      expect(find(arr, cb)).toEqual(3);
    });
  });

  describe('filter', () => {
    it('should filter and return an array', () => {
      const arr = [1, 2, 3];
      const cb = val => val > 1;
      expect(filter(arr, cb)).toEqual([2, 3]);
    });
  });

  describe('flatten', () => {
    it('should return a flattened array', () => {
      const arr = [1, [2], [[3]]];
      expect(flatten(arr)).toEqual([1, 2, 3]);
    });
  });
});
