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
      expect(typeof each).toBe('function')
    })
    it('should iterate over elements', () => {
      expect(arrayFunctions.each([1,2,3,4,5], element => element)).toBe(undefined)
    })
  })

  describe('map', () => {
    it('should be a function', () => {
      const map = arrayFunctions.map;
      expect(typeof map).toBe('function');
    })
    it('should return a new array', () => {
      const mapArr = arrayFunctions.map([1,2,3,4,5], element => element+1);
      expect(mapArr).toEqual([2,3,4,5,6]);
      expect(typeof mapArr).toBe('object');
    })
  })

  describe('reduce', () => {
    it('should be a function', () => {
      const reduce = arrayFunctions.reduce;
      expect(typeof reduce).toBe('function');
    })
    it('should return a value', () => {
      const reduceArr = arrayFunctions.reduce([1,2,3,4,5], (x, y) => x+y);
      expect(reduceArr).toEqual(15);
      expect(typeof reduceArr).toBe('number');
    })
  })

  describe('find', () => {
    it('should be a function', () => {
      const find = arrayFunctions.find;
      expect(typeof find).toBe('function');
    })
    it('should return found element if in array', () => {
      const number = arrayFunctions.find([1,2,3,4,5], element => element === 4);
      expect(number).toEqual(4);
      expect(typeof number).toBe('number');

      const string = arrayFunctions.find(['one', 'two', 'three'], element => element === 'three');
      expect(string).toEqual('three');
      expect(typeof string).toBe('string');
    })
  })

  describe('filter', () => {
    it('should be a function', () => {
      const filter = arrayFunctions.filter;
      expect(typeof filter).toBe('function');
    })
    it('should return an array', () => {
      const arr = [1, 'one', 2, 'two', 'three', 3];
      const filterArr = arrayFunctions.filter(arr, element => typeof element === 'number');
      expect(filterArr).toEqual([1,2,3]);
      expect(typeof filterArr).toBe('object')
    })
  })

  describe('flatten', () => {
    it('should be a function', () => {
      const flatten = arrayFunctions.flatten;
      expect(typeof flatten).toBe('function');
    })
    it('should return an array', () => {
      const arr = [1, 'one', 2, 'two', 'three', [1, 'one', 2, 'two', 'three', 3] ];
      const flattenArr = arrayFunctions.flatten(arr);
      expect(flattenArr).toEqual( [1, "one", 2, "two", "three", 1, "one", 2, "two", "three", 3] );
      expect(typeof flattenArr).toBe('object')
    })
  })
});