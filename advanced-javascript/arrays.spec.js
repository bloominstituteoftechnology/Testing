const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

// {
//   each,
//   map,
//   reduce,
//   find,
//   filter,
//   flatten,
// }


describe('Arrays', () => {
  describe('each', () => {
    it('should be a function type', () => {
      const each = arrayFunctions.each;
      expect(typeof each).toBe('function');
    })
    it('should iterate over elements, but nothing is returned', () => {
      expect(arrayFunctions.each([3, 2, 3, 4], item => item)).toBe(undefined)
    })
  })
})

  describe('map', () => {
    it('should be a function type', () => {
      const map = arrayFunctions.each;
      expect(typeof map).toBe('function');
    })
    it('should return new array', () => {
      const mappedArr = arrayFunctions.map([3,4,5,6], item => item + 1);
      expect(mappedArr).toEqual([4,5,6,7]);
      expect(typeof mappedArr).toBe('object');
    })
  })

  describe('reduce', () => {
    it('should be a function type', () => {
      const reduce = arrayFunctions.reduce;
      expect(typeof reduce).toBe('function');
    })
    it('should return some value', () => {
      const reducedArr = arrayFunctions.reduce([1,2,3,4], (item1, item2) => item1+item2);
      expect(reducedArr).toEqual(10);
      expect(typeof reducedArr).toBe('number');
    })
  })
