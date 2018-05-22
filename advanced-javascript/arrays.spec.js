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
  });
});

  describe('each', () => {
    it('should be a function', () => {
      const each = arrayFunctions.each
      expect(typeof each).toBe('function');
    });
  });
  describe('reduce', () => {
    it('should be a function', () => {
      const reduce = arrayFunctions.reduce
      expect(typeof reduce).toBe('function');
    });
  });
  describe('find', () => {
    it('should be a function', () => {
      const find = arrayFunctions.find
      expect(typeof find).toBe('function');
    });
  });
  describe('Filter', () => {
    it('should be a function', () => {
      const filter = arrayFunctions.filter
      expect(typeof filter).toBe('function');
    });
  });
  describe('flatten', () => {
    it('should be a function', () => {
      const flatten = arrayFunctions.flatten
      expect(typeof flatten).toBe('function');
    });
  });

