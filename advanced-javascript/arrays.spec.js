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
    it('should be a function', () => {
      const each = arrayFunctions.each;
      expect(typeof each).toBe('function')
    })
    it('should iterate over elements, but return nothing', () => {
      expect(arrayFunctions.each([1,2,3,4], item => item)).toBe(undefined)
    })
  })

  describe('map', () => {
    it('should be a function', () => {
      const map = arrayFunctions.map;
      expect(typeof map).toBe('function');
    })
    it('should return a new array', () => {
      const mappedArr = arrayFunctions.map([1,2,3,4], item => item+1);
      expect(mappedArr).toEqual([2,3,4,5]);
      expect(typeof mappedArr).toBe('object');
    })
  })

  describe('reduce', () => {
    it('should be a function', () => {
      const reduce = arrayFunctions.reduce;
      expect(typeof reduce).toBe('function');
    })
    it('should return a value', () => {
      const reducedArr = arrayFunctions.reduce([1,2,3,4], (item1, item2) => item1+item2);
      expect(reducedArr).toEqual(10);
      expect(typeof reducedArr).toBe('number');
    })
  })

  describe('find', () => {
    it('should be a function', () => {
      const find = arrayFunctions.find;
      expect(typeof find).toBe('function');
    })
    it('should return found element if in array', () => {
      const foundNumber = arrayFunctions.find([1,2,3,4], item => item === 2);
      expect(foundNumber).toEqual(2);
      expect(typeof foundNumber).toBe('number');

      const foundString = arrayFunctions.find(['foo', 'bar', 'foobar'], item => item === 'bar');
      expect(foundString).toEqual('bar');
      expect(typeof foundString).toBe('string');
    })
  })

  describe('filter', () => {
    it('should be a function', () => {
      const filter = arrayFunctions.filter;
      expect(typeof filter).toBe('function');
    })
    it('should return an array', () => {
      const arr = [1, 'one', 3, 'foo', 'bar', 1111];
      const filteredArr = arrayFunctions.filter(arr, item => typeof item === 'number');
      expect(filteredArr).toEqual([1,3,1111]);
      expect(typeof filteredArr).toBe('object')
    })
  })

  describe('flatten', () => {
    it('should be a function', () => {
      const flatten = arrayFunctions.flatten;
      expect(typeof flatten).toBe('function');
    })
    it('should return an array', () => {
      const arr = [1, 'one', 3, 'foo', 'bar', 1111];
      const flattenedArr = arrayFunctions.flatten(arr);
      expect(flattenedArr).toEqual(arr);
      expect(typeof flattenedArr).toBe('object')
    })
  })
});
