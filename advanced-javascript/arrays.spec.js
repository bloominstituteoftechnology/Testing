const arrF = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('Arrays', () => {
  describe('map', () => {
    it('should be a function', () => {
      const map = arrF.map;
      expect(typeof map).toBe('function');
    });
    it('should return a new array', () => {
      const arr1 = [1, 2, 3];
      const arr2 = arrF.map(arr1, el => el);
      expect(arr1 === arr2).toBe(false);
    });
    it('should return a new array with new values from callback', () => {
      const arr1 = [1, 2, 3];
      const arr2 = arrF.map(arr1, el => el + 1);
      expect(arr2).toEqual([2, 3, 4]);
    });
  });

  describe('reduce', () => {
    it('should be a function', () => {
      const reduce = arrF.reduce;
      expect(typeof reduce).toBe('function');
    });

    it('should return a reduced value from callback', () => {
      const arr1 = [1, 2, 3];
      const reduce = arrF.reduce(arr1, (a, b) => a + b);
      expect(reduce).toBe(6);
    });
  });

  describe('find', () => {
    it('should be a function', () => {
      const find = arrF.find;
      expect(typeof find).toBe('function');
    });
    it('should return the first element that satisfies callback conditional', () => {
      const arr1 = [1, 2, 3];
      expect(arrF.find(arr1, el => el > 2)).toBe(3);
    });
  });

  describe('filter', () => {
    it('should be a function', () => {
      const filter = arrF.filter;
      expect(typeof filter).toBe('function');
    });
    it('should return a new array', () => {
      const arr1 = [1, 2, 3];
      const arr2 = arrF.filter(arr1, el => el);
      expect(arr1 === arr2).toBe(false);
    });
    it('should return a new array of all elements that satisfy callback conditional', () => {
      const arr1 = [1, 2, 3];
      expect(arrF.filter(arr1, el => el > 1)).toEqual([2, 3]);
    });
  });

  describe('flatten', () => {
    it('should return a function', () => {
      const flatten = arrF.flatten;
      expect(typeof flatten).toBe('function');
    });
    it('should return a new array', () => {
      const arr1 = [1, 2, 3];
      const arr2 = arrF.flatten(arr1, el => el);
      expect(arr1 === arr2).toBe(false);
    });
    it('should return a new array with no inner elements present', () => {
      const arr1 = [1, [2, 3], [4, 5, 6]];
      expect(arrF.flatten(arr1)).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });
});
