const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('Arrays', () => {  
  describe('map', () => {
    const arr1 = [1,3,5, 9, 0]
    it('should be a function', () => {
      const map = arrayFunctions.map;
      expect(typeof map).toBe('function');
    });
    it('should return the product of every element times 2', () => {      
      const expected = arrayFunctions.map(arr1, e => e * 2)
      expect(expected).toEqual([2,6,10,18,0])
    })
    it('should return the elements in increments of 5', () => {
      const expected = arrayFunctions.map(arr1, e => e + 5)
      expect(expected).toEqual([6,8,10,14,5])
    });
    
  });
});
