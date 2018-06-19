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
    })
  });

  describe('map', () => {
    it('should be a function', () => {
      const map = arrayFunctions.map;
      expect(typeof map).toBe('function');
    })
    it('should return array with items incremented by 1', () => {
      const map = arrayFunctions.map;
      expect(map([1, 2, 3, 4, 5], num => num + 1)).toEqual([2, 3, 4, 5, 6]);
    })
  });

  describe('reduce', () => {
    it('should be a function', () => {
      const reduce = arrayFunctions.reduce;
      expect(typeof reduce).toBe('function');
    })
    it('should return the sum of the array items', () => {
      const reduce = arrayFunctions.reduce;
      expect(reduce([1, 2, 3, 4, 5], ((total, num) => {
        return total + num;
      }))).toEqual(15);
    })
  });

  describe('find', () => {
    it('should be a function', () => {
      const find = arrayFunctions.find;
      expect(typeof find).toBe('function');
    })
    it('returns the item found in array', () => {
      const array = ['a', 'b', 'c', 'd', 'e'];
      const find = arrayFunctions.find;
      expect(find(array, (letter => letter === 'c'))).toEqual('c')
    })
  });

  describe('filter', () => {
    it('should be a function', () => {
      const filter = arrayFunctions.filter;
      expect(typeof filter).toBe('function');
    })
    it('should return numbers divisible by 5', () => {
      const array = [3, 5, 6, 11, 15, 21, 24, 30, 33, 35, 38]
      const filter = arrayFunctions.filter;
      expect(filter(array, (num => num % 5 === 0))).toEqual([5, 15, 30, 35]);
    })
  });

  describe('flatten', () => {
    it('should be a function', () => {
      const flatten = arrayFunctions.flatten;
      expect(typeof flatten).toBe('function');
    })
    it('should flatten array', () => {
      const array = [1, 2, 3, [4, 5, [6]]];
      const flatten = arrayFunctions.flatten;
      expect(flatten(array)).toEqual([1, 2, 3, 4, 5, 6]);
    })
  })
});
