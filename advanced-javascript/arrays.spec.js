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

  function reduceVal(memo, item) {
    return memo + item;
  }

  describe('map', () => {
    it('should be a function', () => {
      const map = arrayFunctions.map;
      expect(typeof map).toBe('function');
    });

    it('should returned the array', () => {
      expect(arrayFunctions.map([1,2,3], giveNum)).toEqual([1,2,3])
    })
  });

  describe('reduce', () => {

    it('should be a function', () => {
      const reduce = arrayFunctions.reduce;
      expect(typeof reduce).toBe('function');
    });

    it('should returned the array', () => {
      expect(arrayFunctions.reduce([1,2,3], reduceVal)).toBe(6)
    })

  });
});
