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
    test('each', () => {
      const mockCallback = jest.fn();
      arrayFunctions.each([0, 1], mockCallback);
      expect(mockCallback.mock.calls.length).toBe(2);
    });
    test('map', () => {
      let bob = arrayFunctions.map([0, 1], num => num);
        expect(bob).toEqual([0,1]);
    });
    test('reduce', () => {
      let bob = arrayFunctions.reduce([0,1,2,3], (a, b) => a + b );
      expect(bob).toEqual(6);
    });
    test('find', () => {
      const mockCallback = jest.fn();
      arrayFunctions.find([0, 1, 2, 3], mockCallback);
      expect(mockCallback.mock.calls[0]).toEqual([0]);
    });
    test('filter', () => {
      let bob = arrayFunctions.filter([0,1,2,3], x => x === 2);
      expect(bob).toEqual([2]);
    });
    test('flatten', () => {
      let bob = arrayFunctions.flatten([[0], 1, [2], 3]);
      expect(bob).toEqual([0, 1, 2,3]);
    })
  });
});
