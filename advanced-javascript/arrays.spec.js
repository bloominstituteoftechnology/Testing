const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('Arrays', () => {

  function giveNum(num) {
    return num;
  }

  function findVal(find, val) {
    if(val === find) {
      return true;
    } else {
      return false;
    }
    
  }

  function reduceVal(memo, item) {
    return memo + item;
  }

  describe('map', () => {
    it('should be a function', () => {
      const map = arrayFunctions.map;
      expect(typeof map).toBe('function');
    });

    it('should return the array', () => {
      expect(arrayFunctions.map([1,2,3], giveNum)).toEqual([1,2,3])
    })
  });

  describe('reduce', () => {

    it('should be a function', () => {
      const reduce = arrayFunctions.reduce;
      expect(typeof reduce).toBe('function');
    });

    it('should return the acc value', () => {
      expect(arrayFunctions.reduce([1,2,3], reduceVal)).toBe(6)
    })

  });

  describe('find', () => {

    it('should be a function', () => {
      const find = arrayFunctions.find;
      expect(typeof find).toBe('function');
    });

    it('should the expected value', () => {
      expect(arrayFunctions.find([1,2,3], findVal, 3)).toBe(3)
    })

  });

  describe('filter', () => {

    it('should be a function', () => {
      const filter = arrayFunctions.filter;
      expect(typeof filter).toBe('function');
    });

    it('should return an array with just the filtered values', () => {
      expect(arrayFunctions.filter([1,2,3], findVal, 1)).toEqual([1])
    })

  });

  describe('flatten', () => {

    it('should be a function', () => {
      const flatten = arrayFunctions.flatten;
      expect(typeof flatten).toBe('function');
    });

    it('should return an array with just the filtered values', () => {
      expect(arrayFunctions.flatten([1,2,3, [1,2]])).toEqual([1,2,3,1,2])
    })

  });
});
