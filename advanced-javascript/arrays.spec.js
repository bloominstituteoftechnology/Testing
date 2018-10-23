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
    it('should return results of cb function', () => {
      const map2 = arrayFunctions.map([1, 2, 3, 4], num => num + num);
      expect(map2).toEqual([2, 4, 6, 8]);
    });
  });
  describe('reduce', () => {
    it('should be a function', () => {
      expect(typeof arrayFunctions.reduce).toBe('function');
    });
    it('should return result of cb as reduced output', () => {
      expect(
        arrayFunctions.reduce([1, 2, 3, 4, 5], (acc, num) => {
          return acc + num;
        })
      ).toBe(15);
    });
  });
  describe('find', () => {
    it('should be a function', () => {
      expect(typeof arrayFunctions.find).toBe('function');
    });
    it('should return values met by cb function', () => {
      expect(arrayFunctions.find([1, 2, 3, 4, 5], num => num / 2 === 1)).toBe(
        2
      );
    });
  });
  describe('filter', () => {
    it('should be a function', () => {
      expect(typeof arrayFunctions.filter).toBe('function');
    });
    it('should return values met by cb function', () => {
      expect(
        arrayFunctions.filter([1, 2, 3, 4, 5], num => num % 2 === 0)
      ).toEqual([2, 4]);
    });
  });
  describe('flatten', () => {
    it('should be a function', () => {
      expect(typeof arrayFunctions.flatten).toBe('function');
    });
    it('should return flattened array', () => {
      expect(arrayFunctions.flatten([1, [2, 3], [4, [5, 6]]])).toEqual([
        1,
        2,
        3,
        4,
        5,
        6
      ]);
    });
  });
});
