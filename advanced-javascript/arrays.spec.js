const aF = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('Arrays', () => {
  describe('each', () => {
    it('should be a function', () => {
      expect(typeof aF.each).toBe('function');
    })
  })
  describe('map', () => {
    it('should be a function', () => {
      expect(typeof aF.map).toBe('function');
    });
    it('should return results with a callback', () => {
      expect(aF.map([1, 2, 3], n => n * 2)).toEqual([2, 4, 6]);
    });
  });
  describe('reduce', () => {
    it('should be a function', () => {
      expect(typeof aF.reduce).toBe('function');
    });
    it('should return the sum of all the elements', () => {
      expect(aF.reduce([1, 2, 3], (acc, curr) => acc + curr, 0)).toEqual(6);
    })
  });
  describe('find', () => {
    it('should be a function', () => {
      expect(typeof aF.find).toBe('function');
    });
    it('should return undefined if no values found', () => {
      expect(aF.find([1, 2, 3], n => n < 0)).toBeUndefined
    })
  });
  describe('filter', () => {
    it('should be a function', () => {
      expect(typeof aF.filter).toBe('function');
    });
    it('should return an array', () => {
      expect(aF.filter([1, 2, 3], n => n !== 2)).toEqual([1, 3]);
    });
  });
  describe('flatten', () => {
    it('should be a function', () => {
      expect(typeof aF.flatten).toBe('function');
    });
    it('should return a flattened array of elements', () => {
      expect(aF.flatten([[1], [2, 3]])).toEqual([1, 2, 3])
    })
  });
});
