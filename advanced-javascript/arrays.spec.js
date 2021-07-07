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
    it('should return an array of the same length but with altered elements', () => {
      let newArray = [1, 2, 3].map(item => item + 1)
      expect(typeof newArray).toBe('object');
      expect(arrayFunctions.map([1, 2, 3], (item) => {return item + 1})).toEqual([2, 3, 4])
      expect(newArray).toHaveLength(3);
    })
  });

  describe('each', () => {
    it('should be a function', () => {
      const each = arrayFunctions.each;
      expect(typeof each).toBe('function');
    });

    it('should return undefined', () => {
      let afterIteration = arrayFunctions.each([1,2,3], num => num +1)
      expect(afterIteration).toBe(undefined)
    })
  })

  describe('reduce', () => {
    it('should be a function', () => {
      const reduce = arrayFunctions.reduce;
      expect(typeof reduce).toBe('function');
    });

    it('should return sum of all elements in the array', () => {
      expect(arrayFunctions.reduce([5, 5, 5], ((acc, val) => {return acc + val}))).toBe(15)
      expect(arrayFunctions.reduce([5, undefined, 5], ((acc, val) => {return acc + val}))).toBeNaN();
    })
  })

  describe('find', () => {
    it('should be a function', () => {
      const reduce = arrayFunctions.reduce;
      expect(typeof reduce).toBe('function');
    });

    it('should return item user is looking for', () => {
      expect(arrayFunctions.find(['test1', 'test2', 'test3'], item => item === 'test2')).toBe('test2')
    })
  })

  describe('filter', () => {
    it('should be a function', () => {
      const reduce = arrayFunctions.reduce;
      expect(typeof reduce).toBe('function');
    });
    it('should return a new array containing all even numbers', () => {
      expect(arrayFunctions.filter([5, 10, 33, 20], num => num % 2 === 0)).toEqual([10, 20])
    })
  })

  describe('flatten', () => {
    it('should be a function', () => {
      const reduce = arrayFunctions.reduce;
      expect(typeof reduce).toBe('function');
    });

    it('should flatten given array', () => {
      expect(arrayFunctions.flatten([1,[2,3],4,[[5]]])).toEqual([1, 2, 3, 4, 5])
      expect(arrayFunctions.flatten([1,[2,3],{4: 1},[[5]]])).toEqual([1, 2, 3, {4: 1}, 5])
    })
  })
});
