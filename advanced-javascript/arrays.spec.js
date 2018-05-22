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
    })
  })


  describe('map', () => {
    it('should add all elements by one', () => {
      const map = arrayFunctions.map;
      function addOne(input) {return (input + 1);}
      const actual = map([1, 2, "string"], addOne)
      expect(typeof map).toBe('function');
      expect(actual).toEqual([2, 3, 'string1'])
    });
  });

  describe('reduce', () => {
    it('should add array input together', () => {
      const reduce = arrayFunctions.reduce;
      const actual = reduce([1,2,3], (num, acc) => {return num+acc;})
      expect(typeof reduce).toBe('function');
      expect(actual).toBe(6);
    });
  });

  describe('find', () => {
    it('should find an element in an array', () => {
      const find = arrayFunctions.find;
      const actual = find([1,2,3,4,5,6,7], (num) => num === 3);
      expect(typeof find).toBe('function');
      expect(actual).toBe(3);
    });
  });

  describe('filter', () => {
    it('should return array of only filtered items', () => {
      const filter = arrayFunctions.filter;
      const arr = [40, 50, 30, "lol"];
      const actual = filter(arr, num => (num === 50));
      expect(typeof filter).toBe('function');
      expect(actual).toEqual([50]);
    });
  });

  describe('flatten', () => {
    it('Should transform arrays within arrays into a single array', () => {
      const flatten = arrayFunctions.flatten;
      const actual = flatten([3,4,["hello", 5, 6]]);
      expect(typeof flatten).toBe('function');
      expect(actual).toEqual([3, 4, "hello", 5, 6])
    });
  });
});
