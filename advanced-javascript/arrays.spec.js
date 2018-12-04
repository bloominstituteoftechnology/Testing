const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('Arrays', () => {
  // each
  describe('each', () => {
    it('should perform callback (with optional arguments element and original index) for each element of array', () => {
      let str = '';
      arrayFunctions.each([1, 2], (element, index) => { str += `Element ${element} is at index ${index}. `});
      expect(str).toEqual('Element 1 is at index 0. Element 2 is at index 1. ');
    });
  });

  // map
  describe('map', () => {
    it('should be a function', () => {
      const map = arrayFunctions.map;
      expect(typeof map).toBe('function');
    });

    it('should return an array', () => {
      expect(Array.isArray(arrayFunctions.map([1, 2, 3], () => {}))).toBe(true);
    });

    it('should apply the callback function to each element of the array and return each new element in an array', () => {
      expect(arrayFunctions.map([1, 2, 3], element => ++element)).toEqual([2, 3, 4]);
    })
  });

  // reduce
  describe('reduce', () => {
    it('should be a function', () => {
      expect(typeof arrayFunctions.reduce).toBe('function');
    });
  })

  // find
  describe('find', () => {
    it('should return first element that satisfies a condition in the callback', () => {
      expect(arrayFunctions.find([1, 2, 3, 4], element => element > 2)).toEqual(3);
    });
  });

  // filter
  describe('filter', () => {
    it('should return an array of all elements that satisfy a condition in callback', () => {
      expect(arrayFunctions.filter([1, 2, 3, 4], element => element > 2)).toEqual([3, 4]);
    });
  });

  // flatten
  describe('flatten', () => {
    it('should flatten multidimensional arrays in one-dimensional array', () => {
      expect(arrayFunctions.flatten([[1, [2, 3], 4], 5, [6, 7, 8, 9]])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
  });
});
