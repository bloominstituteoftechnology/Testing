const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('Arrays', () => {
  describe('each', () => {
    const mockCallBack = jest.fn();
    it('each', () => {
      const each = arrayFunctions.each;
      // expect(typeof map).toBe('function');
      each([9,1], mockCallBack);
      expect(mockCallBack.mock.calls[0]).toEqual([9,0]);
    });
  });
  describe('map', () => {
    it('should an array of all items pushed through a callback', () => {
      const map = arrayFunctions.map;
      expect(typeof map).toBe('function');
      expect(map([9], (item)=> item)).toEqual([9]);
    });
  });
});
