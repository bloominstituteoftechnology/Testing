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
  })

  describe('map', () => {
    it('should be a function', () => {
      const map = arrayFunctions.map;
      expect(typeof map).toBe('function');
    });

    it('should return a new array of values that pass through callback', () => {
      const result = arrayFunctions.map([1,2,3], item => item * 2); 
      expect(result).toEqual([2,4,6]); 
    }); 

    it('should return an empty array if if element array is empty', () => {
      const result = arrayFunctions.map([], item => item + 1); 
      expect(result).toEqual([]); 
    })

  describe('reduce', () => {
      
    it('should be a function', () => {
      const reduce = arrayFunctions.reduce;
      expect(typeof reduce).toBe('function'); 
    }); 
    
    it('should return one reduced value from callback', () => {
      const reduce = arrayFunctions.reduce([1,2,3], (a,b) => a + b )
      expect(reduce).toEqual(6); 
    }); 
    
  }); 

  describe('find', () => {
    it('should be a function', () => {
      const find = arrayFunctions.find;
      expect(typeof find).toBe('function'); 
    });

    it('should return element if present in array', () => {
      const find = arrayFunctions.find([1,2,3,4], value => value % 4 === 0); 
      expect(find).toBe(4); 
    }); 
  }); 

  describe('filter', () => {
    it('should be a function', () => {
      const filter = arrayFunctions.filter;
      expect(typeof filter).toBe('function'); 
    }); 

    it('should return correct filtered array from callback', () => {
      const filter = arrayFunctions.filter([1,2,3,4,5], value => value % 2 === 0); 
      expect(filter).toEqual([2,4]); 
    })
  }); 

  describe('flatten', () => {
    it('should be a function', () => {
      const flatten = arrayFunctions.flatten; 
      expect(typeof flatten).toBe('function'); 
    });  
    it('should return an array with no inner arrays present', () => {
      const flatten = arrayFunctions.flatten([1, [2,3], [4,5]]); 
      expect(flatten).toEqual([1,2,3,4,5])
    })
  })

  });




});
