const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.


describe('Arrays', () => {
  describe('each', () => {
    it('it should be a function', () => {
      const each = arrayFunctions.each
      expect(typeof each).toBe('function')
    });
  });
  describe('map', () => {
    it('should map over an array and apply the callback to each item', () => {
      const map = arrayFunctions.map;
      expect(typeof map).toBe('function');
      expect(map([1,2,3], num => num * 2)).toEqual([2,4,6])
    });
  });
  describe('reduce', () => {
    it('reduce an array to a single value using the callback', () => {
      const reduce = arrayFunctions.reduce;
      expect(typeof reduce).toBe('function');
      expect(reduce([1,2,3,4], (num, acc) => acc + num)).toEqual(10);
      expect(reduce([1,2,3,4], (num, acc) => acc * num)).toEqual(24);
    })
  })
  describe('find', () => {
    it('should find a given value in an array', () => {
      const find = arrayFunctions.find;
      expect(typeof find).toBe('function');
      expect(find([0,1,2,3,4,5], num => num === 4)).toBe(4);
      expect(find([0,1,2,3,4,5], num => num === 17)).toBeUndefined();
      expect(find(['a','s','d','f'], num => num === 'f')).toBe('f');
    })
  })
  describe('filter', () => {
    it('filters out items in array that dont meet conditions of cb', () => {
      const filter = arrayFunctions.filter;
      expect(typeof filter).toBe('function');
      expect(filter([0,1,2,3,4,5,6,7,8,9], num => num > 3)).toEqual([4,5,6,7,8,9]);
      expect(filter([0,1,2,3,4,5,6,7,8,9], num => num === 3)).toEqual([3]);
      expect(filter(['can', 'jam', 'poetry', 'slam'], num => num === 'can')).toEqual(['can']);
    })
  })
  describe('flatten', () => {
    it('alters multi-dimensional arrays to single-dimension array', () => {
      const flatten = arrayFunctions.flatten;
      expect(typeof flatten).toBe('function');
      expect(flatten([1,2,3, [4,5, [6,7,8]]])).toEqual([1,2,3,4,5,6,7,8]);
      expect(flatten(['a', 'b', ['c', ['d']]])).toEqual(['a', 'b', 'c', 'd']);
    })
  })
});




