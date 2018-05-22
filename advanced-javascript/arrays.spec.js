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
      expect(typeof arrayFunctions.map).toBe('function');
    });

    it('should map an array', () => {
      const returnValue = arrayFunctions.map([1,2], x => x * 2 );
      expect(returnValue).toEqual([2, 4]);
    });
  });

  describe('each', () => {
    const mockCallback = jest.fn();

    it('should work', () => {
      arrayFunctions.each([1,2], mockCallback);

      expect(mockCallback.mock.calls.length).toBe(2);
      expect(mockCallback.mock.calls[0][0]).toBe(1);
      expect(mockCallback.mock.calls[1][0]).toBe(2);
    });
  });

  describe('reduce', () => {
    const mockCallback = jest.fn();

    it('should work', () => {
      const returnValue = arrayFunctions.reduce([1,2], mockCallback);

      expect(mockCallback.mock.calls.length).toBe(1);
      expect(mockCallback.mock.calls[0][1]).toBe(2);
      expect(mockCallback.mock.calls[0][1]).toBe(2);
    });
  });

  describe('find', () => {
    const mockCallback = jest.fn();

    it('should work', () => {
      const returnValue = arrayFunctions.find([1,2], mockCallback);

      expect(mockCallback.mock.calls.length).toBe(2);
      expect(mockCallback.mock.calls[0][0]).toBe(1);
      expect(mockCallback.mock.calls[1][0]).toBe(2);
    });
  });

  describe('filter', () => {
    it('should work', () => {
      const returnValue = arrayFunctions.filter([5, 2,1, 7, 2], x => x > 4);

      expect(returnValue).toEqual([5, 7]);
    });
  });

  describe('flatten', () => {
    it('should work', () => {
      const returnValue = arrayFunctions.flatten([5, 2, [1]]);

      expect(returnValue).toEqual([5, 2, 1]);
    });
  });
});



