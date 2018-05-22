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
      const map = arrayFunctions.map([1, 2], () => {});
      expect(typeof map).toBe('object');
    });
  });
  describe('reduce', () => {
    it('should be a function', () => {
      const reduce = arrayFunctions.reduce([1, 2], (a, b) => a + b);
      expect(typeof reduce).toBe('number');
    });
  });
  describe('find', () => {
    it('should be a function', () => {
      const find = arrayFunctions.find([1, 2], x => x === 1);
      expect(find).toBe(1);
    });
  });
  describe('filter', () => {
    it('should be a function', () => {
      const filter = arrayFunctions.filter([1, 2], x => x > 1);
      expect(typeof filter).toBe('object');
    });
  });
  describe('flatten', () => {
    it('should be a function', () => {
      const flatten = arrayFunctions.flatten([1, 2]);
      expect(typeof flatten).toBe('object');
    });
  });
});
