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

    it('does not mutate the original array', () => {
      const arr = [1, 2, 3];
      const newArr = arrayFunctions.map(arr, () => 1);

      expect(newArr).not.toBe(arr);
    });

    it('calls the callback function for each element', () => {
      const cb = jest.fn();
      arrayFunctions.map([1, 2, 3], cb);
      expect(cb).toHaveBeenCalledTimes(3);
    });

    it('maps new values based on original elements', () => {
      const arr = [1, 2, 3];

      expect(arrayFunctions.map(arr, v => v * 2)).toEqual([2, 4, 6]);
    });
  });

  describe('each', () => {
    it('calls the callback function for each element', () => {
      const cb = jest.fn();
      arrayFunctions.each([1, 2, 3], cb);
      expect(cb).toHaveBeenCalledTimes(3);
    });
  });

  describe('reduce', () => {
    it('calls the callback function for each element', () => {
      const cb = jest.fn();
      arrayFunctions.reduce([1, 2, 3], cb, 0);
      expect(cb).toHaveBeenCalledTimes(3);
    });

    it('accepts an initializer', () => {
      expect(arrayFunctions.reduce([0, 0, 0], (a, b) => a + b, 1)).toBe(1);
    });
  });

  describe('find', () => {
    it('exits early if the item is found', () => {
      const mock = jest.fn();
      const cb = v => {
        mock();
        return v === 2;
      };
      arrayFunctions.find([1, 2, 3], cb);
      expect(mock).toHaveBeenCalledTimes(2);
    });

    it("returns undefined if the item isn't found", () => {
      expect(arrayFunctions.find(['apples', 'oranges'], () => false)).toBe(
        undefined,
      );
    });
  });

  describe('filter', () => {
    it('calls the callback function for each element', () => {
      const cb = jest.fn();
      arrayFunctions.filter([1, 2, 3], cb);
      expect(cb).toHaveBeenCalledTimes(3);
    });

    it('filters a list of elements based on a predicate', () => {
      const predicate = v => v % 2 === 0;
      const arr = [1, 2, 3, 4, 5, 6, 7, 8];
      const result = arrayFunctions.filter(arr, predicate);
      expect(result).toEqual([2, 4, 6, 8]);
    });

    it('does not mutate the original array', () => {
      const predicate = v => v % 2 === 0;
      const arr = [1, 2, 3, 4, 5, 6, 7, 8];
      const result = arrayFunctions.filter(arr, predicate);
      expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
      expect(result).not.toBe(arr);
    });
  });

  describe('flatten', () => {
    it('does not mutate original array', () => {
      const arr = [1, [2, [3, 4]]];
      const flattened = arrayFunctions.flatten(arr);
      expect(flattened).not.toBe(arr);
      expect(arr).toEqual([1, [2, [3, 4]]]);
    });

    it('flattens nested arrays', () => {
      const arr = [1, [2, 3], [4, [5, [6, 7]]]];
      const flattened = arrayFunctions.flatten(arr);
      expect(flattened).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });
  });
});
