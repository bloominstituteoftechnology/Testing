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

    it('should call a callback function for each element in an array', () => {
      const mockCallback = jest.fn();
      const each = arrayFunctions.each;
      each([2, 5, 6], mockCallback);
      expect(mockCallback.mock.calls.length).toBe(3);
    })
  });

  describe('map', () => {
    it('should be a function', () => {
      const map = arrayFunctions.map;
      expect(typeof map).toBe('function');
    });
    it('should return a mapped array', () => {
      const expected = [4, 10, 12];
      const map = arrayFunctions.map;
      const actual = map([2, 5, 6], (x) => x * 2 );
      expect(actual).toEqual(expected);
    })
  });
});
