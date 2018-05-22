const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('Arrays', () => {
  describe('each', () => {
    it('should invoke cb on each array element', () => {
      let count = 0;
      arrayMethods.each([1, 2, 3], (element) => {
        count += element;
      });
      expect(count).toBe(6);
    });
    it('should pass the element and the index to cb', () => {
      let count = 0;
      arrayMethods.each([1, 2, 3], (element, index) => {
        count += element + index;
      });
      expect(count).toBe(9);
    });
    it('should call the callback passed in the array', () => {
      const callBack = jest.fn();
      expect(callBack.mock.calls.length).toBe(0);
      arrayMethods.each([1, 2, 3], callBack);
      expect(callBack.mock.calls.length).toBe(3);
    });
  });
  describe('map', () => {
    it('should return an array', () => {
      const arr = [];
      const result = arrayMethods.map(arr, n => (n * n));
      expect(Array.isArray(result)).toBe(true);
    });
    it('should pass each item', () => {
      const arr = [1, 2, 3];
      const mappedArr = arrayMethods.map(arr, n => (n * 4));
      expect(mappedArr).toEqual([4, 8, 12]);
    });
    it('should call the callback passed to it for each element in array given', () => {
      const callBack = jest.fn(); 
      expect(callBack.mock.calls.length).toBe(0);
      arrayMethods.each([1, 2, 3], callBack);
      expect(callBack.mock.calls.length).toBe(3);
    });
  });

  describe('reduce', () => {
    it('should reduce the array', () => {
      const arr = [1, 2, 3];
      const result = arrayMethods.reduce(arr, (memo, num) => (memo + num));
      expect(result).toBe(6);
    });
    it('should accept a memo argument', () => {
      const arr = [1, 2, 3];
      const result = arrayMethods.reduce(arr, (memo, num) => (memo + num), 10);
      expect(result).toBe(16);
    });
    it('should handle any type of data', () => {
      const arr = ['h', 'e', 'l', 'l', 'o'];
      const result = arrayMethods.reduce(arr, (memo, num) => (memo + num));
      expect(result).toBe('hello');
    });
    it('should call the callback for every item', () => {
      const callBack = jest.fn();
      callBack.mockReturnValue(6);
      const arr = [1, 2, 3];
      const result = arrayMethods.reduce(arr, callBack);
      expect(result).toBe(6);
      expect(callBack.mock.calls.length).toBe(3);
    });
  });
  describe('find', () => {
    it('should return the first element that passes', () => {
      const arr = [1, 2, 3];
      const result = arrayMethods.find(arr, num => (num === 3));
      expect(result).toBe(3);
    });
  });

  describe('filter', () => {
    it('should return an array', () => {
      const arr = [1, 2, 3];
      const results = arrayMethods.filter(arr, num => (num === 3));
      expect(Array.isArray(results)).toBe(true);
    });
    it('should return an empty array if false', () => {
      const arr = [1, 2, 3];
      const results = arrayMethods.filter(arr, num => (num === 4));
      expect(Array.isArray(results)).toBe(true);
      expect(results.length).toBe(0);
    });
    it('should return an array with all elements that are true', () => {
      const arr = [1, 2, 3];
      const results = arrayMethods.filter(arr, num => (num % 2 === 0));
      expect(results[0]).toBe(1);
      expect(results[1]).toBe(2);
      expect(results.length).toBe(1);
    });
  });

  describe('flatten', () => {
    it('should return an array', () => {
      const arr = [1, 2, 3];
      const results = arrayMethods.flatten(arr);
      expect(Array.isArray(results)).toBe(true);
    });
    it('should return a flattened array', () => {
      const arr = [1, 2, [3]];
      const results = arrayMethods.flatten(arr);
      expect(Array.isArray(results)).toBe(true);
      expect(results).toEqual([1, 2, 3]);
    });
    it('should return a flattened array', () => {
      const arr = [1, [2], [[3]]];
      const results = arrayMethods.flatten(arr);
      expect(results).toEqual([1, 2, 3]);
    });
  });
});