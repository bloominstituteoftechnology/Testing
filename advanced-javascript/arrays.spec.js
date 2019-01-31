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

    it('should return a new array with the result of the callback performed on each item in the array', () => {
      const map = arrayFunctions.map;
      const testArr = [1,2,3,4,5];
      const testCb = (x) => {
        return x + 1
      }
      const actual = map(testArr, testCb);
      expect(actual).toEqual([2,3,4,5,6]);
      expect(map(actual, testCb)).toEqual([3,4,5,6,7]);
    })
  });
  describe('each', () => {
    it('should be a function', () => {
      const map = arrayFunctions.map;
      expect(typeof map).toBe('function');

      const testArr = [1,2,3,4,5];
      const testCb = (x) => {
        return x + 1
      }

      const actual = map(testArr, testCb);

      expect(actual).toEqual([2,3,4,5,6]);
      expect(map(actual, testCb)).toEqual([3,4,5,6,7]);

    });
  });
});
