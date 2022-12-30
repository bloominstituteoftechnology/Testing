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
    it('should return a new array with all the nums doubled', () => {
      const map = arrayFunctions.map;
      expect(map([4,2,5], num => num*2)).toEqual([8,4,10]);
    });
  });

  describe('reduce', () => {
    it('should be a function', () => {
      const reduce = arrayFunctions.reduce;
      expect(typeof reduce).toBe('function');
    });
    it('should return the sum of the items in the array', () => {
      const reduce = arrayFunctions.reduce;
      expect(reduce([4, 2, 5], ((total, num) => {
        return total+num
      }))).toEqual(11);
    });
  });

  describe('find', () => {
    it('should be a function', () => {
      const find = arrayFunctions.find;
      expect(typeof find).toBe('function');
    });
    it('should return the odd numbers in the array', () => {
      const find = arrayFunctions.find;
      const arr = [6, 7, 2];
      expect(find(arr, num => num % 2 === 0)).toEqual([6])
    });
  });

  describe('filter', () => {
    it('should be a function', () => {
      const filter = arrayFunctions.filter;
      expect(typeof filter).toBe('function');
    });
    it('should return the odd numbers in the array', () => {
      const filter = arrayFunctions.filter;
      const arr = [6,7,2];
      expect(filter(arr, num => num % 2 === 1)).toEqual([7])
    });
  });

  describe("flatten", () => {
    it('should be a function', () => {
      const flatten = arrayFunctions.flatten;
      expect(typeof flatten).toBe('function');
    });
    const flatten = arrayFunctions.flatten;
    const arr = [7, 2, [9, 4, [1]]];
    it("should flatten the array", () => {
      expect(flatten(arr)).toEqual([7, 2, 9, 4, 1]);
    });
  });
    

  

});
