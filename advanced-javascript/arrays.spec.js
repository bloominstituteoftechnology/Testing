const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('Arrays', () => {
  
  describe('map', () => {
    const map = arrayFunctions.map;
    const myFunc = item => {
      return item * 2;
    };
    
    it('should be a function', () => {
      expect(typeof map).toBe('function');
    });
    
    it('output should be an array', () => {
      const output = map([1, 3, 6], x => x);
      expect(Array.isArray(output)).toEqual(true);
    });
    
    it ('should invoke the callback', () => {
      const invoked = map([10, 19, 22], myFunc);
      expect(invoked).toEqual([20, 38, 44])
    });
  });
  
  describe('each', () => {
    const each = arrayFunctions.each;
    
    it('should be a function', () => {
      expect(typeof each).toBe('function');
    });
    
    it('should invoke callback on each element', () => {
      const mockCalls = jest.fn();
      const arr = [2, 4, 6];
      each(arr, mockCalls)
      
      expect(mockCalls.mock.calls.length).toBe(3);
    });
    
  });
  
  
  describe('reduce', () => {
    const reduce = arrayFunctions.reduce;
    
    it('should be a function', () => {
      expect(typeof reduce).toBe('function');
    });
    
    it('should reduce an array', () => {
      const reduced = reduce([342, 34, 1, 3], (memo, item) => {
        return memo - item;
      })
      //console.log(reduced);
      expect(reduced).toEqual(304)
    });
    
    it('should invoke callback on each element', () => {
      const mockCalls = jest.fn();
      //console.log(mockCalls);
      const reduced = reduce([2, 2, 3], (memo) => mockCalls(memo));
      expect(mockCalls.mock.calls.length).toBe(2);
    });
    
  });
  
  describe('find', () => {
    const find = arrayFunctions.find;
    
    it('should be a function', () => {
      expect(typeof find).toBe('function');
    });
    
    const arr = [3, 56, 23];
    const matched = find(arr, item => item === 23);
    //console.log(matched);
    it('should find proper element', () => {
      expect(matched).toEqual(23);
    });
  });
  
  describe('filter', () => {
    const filter = arrayFunctions.filter;
    const arr = [3, 56, 23];
    const filtered = filter(arr, item => item > 25);
    console.log(filtered);
    
    it('should be a function', () => {
      expect(typeof filter).toBe('function');
    });
    
    it('should filter elements', () => {
      expect(filtered).toEqual([56]);
    });
    
    it('output should be an array', () => {
      expect(Array.isArray(filtered)).toBe(true);
    });
  });
  
  describe('flatten', () => {
    const flatten = arrayFunctions.flatten;
    const arr = [3, [56], [[23]]];
    const flattened = flatten(arr);
    console.log(flattened);
    
    it('should be a function', () => {
      expect(typeof flatten).toBe('function');
    });
    
    it('should flatten an arrays', () => {
      expect(flattened).toEqual([ 3, 56, 23 ]);
    });
    
    it('output should be an array', () => {
      expect(Array.isArray(flattened)).toBe(true);
    });
  });
  
});
