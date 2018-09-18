const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('Arrays', () => {
  describe('each', () => {
    const each = arrayFunctions.each;
    it('should be a function', () => {
      expect(typeof each).toBe('function');
    });
    it('should return undefined', () => {
      expect(typeof each([1, 2, 3], (item) => {
        return (item + 1);
      })).toBe('undefined');
    });
  });

  describe('map', () => {
    const map = arrayFunctions.map;
    it('should be a function', () => {
      expect(typeof map).toBe('function');
    });
    it('should return an array', () => {
      expect(Array.isArray(map([1, 2, 3], (item) => {
        return (item + 1);
      }))).toBe(true);
    });
  });

  describe('reduce', () => {
    const reduce = arrayFunctions.reduce;
    it('should be a function', () => {
      expect(typeof reduce).toBe('function');
    });
    it('should return a number', () => {
      expect(typeof reduce([1, 2, 3], (item, acc) => {
        return item + acc
      })).toBe('number');
    });
  });

  describe('find', () => {
    const find = arrayFunctions.find;
    it('should be a function', () => {
      expect(typeof find).toBe('function');
    });
    it('should return an element of the array, same type', () => {
      expect(typeof find(['test', 'hello', 'find'], (item) => {
        return item === 'hello'
      })).toBe('string');
    })
  });

  describe('filter', () => {
    const filter = arrayFunctions.filter;
    it('should be a function', () => {
      expect(typeof filter).toBe('function');
    });
    it('should return an array of filtered items', () => {
      expect(Array.isArray(filter(['test', 'hello', 'find'], (item) => {
        item.includes('f')
      }))).toBe(true);
    });
  });

  describe('flatten', () => {
    const flatten = arrayFunctions.flatten;
    it('should be a function', () => {
      expect(typeof flatten).toBe('function');
    });
    it('should return an array', () => {
      expect(Array.isArray(flatten([1, 2, [3, 4, 5], 6]))).toBe(true);
    });
  });
});
