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
    });

    it('it should return a new array, leaving the old one intact', () => {
      const map = arrayFunctions.map;
      const arr = [1, 2, 3, 6, 7]
      const cb = (el) => {
        return el ** 2;
      }
      const squared = map(arr, cb);
      expect(squared).toEqual([1, 4, 9, 36, 49])
    })
  });
});
