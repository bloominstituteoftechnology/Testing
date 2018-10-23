const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('Arrays', () => {
  describe('each', () => {
    it('should be a function', () => {
      const each = arrayFunctions.each;
      expect(typeof each).toBe('function');
    });
  });
  describe('map', () => {
    it('should be a function', () => {
      const map = arrayFunctions.map;
      expect(typeof map).toBe('function');
    });
    it('should return a cb function on the array', () => {
      const mapped = arrayFunctions.map([ 0, 1, 2 ], x =>  x + x );
      expect(mapped).toEqual([0,2,4]);
    })
  });
  describe('reduce', () => {
    it('should be a function', () => {
      const reduce = arrayFunctions.reduce;
      expect(typeof reduce).toBe('function');
    });
    it('should reduce all elements in array into 1 element', () => {
      const reduced = arrayFunctions.reduce([0, 1, 2, 3], (acc, x) => {return acc + x});
      expect(reduced).toBe(6);
    })
  });
  describe('find', () => {
    it('should be a function', () => {
      const find = arrayFunctions.find;
      expect(typeof find).toBe('function');
    });
    it('should find if an element exists in the array', () => {
      const found = arrayFunctions.find([0, 1, 2], x => x > 0);
      expect(found).toEqual(1);
    })
  });
  describe('filter', () => {
    it('should be a function', () => {
      const filter = arrayFunctions.filter;
      expect(typeof filter).toBe('function');
    });
      const filtered = arrayFunctions.filter([0, 1, 2, 3, 4], x => x % 2 === 0);
      expect(filtered).toEqual([0, 2, 4]);
  });
  describe('flatten', () => {
    it('should be a function', () => {
      const flatten = arrayFunctions.flatten;
      expect(typeof flatten).toBe('function');
    });
    const flattened = arrayFunctions.flatten([0, 1, [2, 3, 4], 5, [6, 7]])
    expect(flattened).toEqual([0, 1, 2, 3, 4, 5, 6, 7]);
  });
});
