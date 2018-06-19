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
    it('should call cb on each element of array', () => {
      const map = arrayFunctions.map;
      const addOne = (x) => x + 1;
      expect(map([1, 2], addOne)).toEqual([2, 3]);
    });
  });

  describe('each', () => {
    it('should be a function', () => {
      const each = arrayFunctions.each;
      expect(typeof each).toBe('function');
    });
  });

  describe('reduce', () => {
    it('should be a function', () => {
      const reduce = arrayFunctions.each;
      expect(typeof reduce).toBe('function');
    }); 
  });

  describe('find', () => {
    it('should be a function', () => {
      const find = arrayFunctions.each;
      expect(typeof find).toBe('function');
    }); 
    it('should do what its supposed to', () => {
      const find = arrayFunctions.each;
      const addOne = (int) => int + 1
      expect(find([1, 2, 3], )).toBe('function');
    }); 
  });

});
