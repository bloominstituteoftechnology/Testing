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
    it('should be a function', () => {
      expect(typeof map).toBe('function');
    });
    it('should return modified array', () => {
      expect(arrayFunctions.map([3,6,7], x => x * 2)).toEqual([6,12,14]);
    })
  });

  describe('each', () => {
    const each = arrayFunctions.each;
    const mockFn = jest.fn();
    it('should be a function', () => {
      expect(typeof each).toBe('function');
      });
    it('should pass each to the func', () => {
      each([3,6,7], mockFn);
      expect(mockFn.mock.calls.length).toBe(3);
      expect(mockFn.mock.calls[0][0]).toBe(3);
      expect(mockFn.mock.calls[1][0]).toBe(6);
    });    
  });

  describe('reduce', () => {
    const reduce = arrayFunctions.reduce;
    const mockFn = jest.fn();
    it('should be a function', () => {
      expect(typeof reduce).toBe('function');
      });
    it('should reduce', () => {
      reduce([1,2], mockFn);
      expect(mockFn.mock.calls.length).toBe(1);
      expect(mockFn.mock.calls[0][1]).toBe(2);
      expect(mockFn.mock.calls[0][1]).toBe(2);
    });
  });

  describe('find', () => {
    const find = arrayFunctions.find;
    const mockFn = jest.fn();
    it('should be a function', () => {
      expect(typeof find).toBe('function');
      });
    it('should find', () => {
      find([1,2], mockFn);
      expect(mockFn.mock.calls.length).toBe(2);
      expect(mockFn.mock.calls[0][0]).toBe(1);
      expect(mockFn.mock.calls[1][0]).toBe(2);
    });
  });

  // describe('filter', () => {
  //   const filter = arrayFunctions.filter;
  //   const filt = filter([3, 6, 7 ], x => x > 6);      
  //   it('should filter', () => {
  //     expect(filt).toEqual([7]);
  //   });
  // });

  describe('flatten', () => {
    const flatten = arrayFunctions.flatten;
    const flat = flatten([3, 6, [7]]);    
    it('should flatten', () => {
      expect(flat).toEqual([3, 6, 7]);
    });
  });

});
