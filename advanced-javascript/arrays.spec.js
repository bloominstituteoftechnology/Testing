const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('Arrays', () => {

  describe('each', () => {
    it('should check if its a function', () => {
      const each = arrayFunctions.each;
      const cb = (el) => {
        return el * 2;
      }
      const actual = each([
        1, 2, 3, 4
      ], cb)
      expect(typeof each).toBe('function')
    })
  })

  describe('map', () => {
    it('should be a function', () => {
      const map = arrayFunctions.map;
      expect(typeof map).toBe('function');
    });

    it('should return a new array without modifying the original', () => {
      const map = arrayFunctions.map;
      const arr = [2, 3, 5, 6, 7];
      const cb = (el) => {
        return el * 2;
      }
      const multiplyBy2 = map(arr, cb);
      expect(multiplyBy2).toEqual([4, 6, 10, 12, 14]);
    });

  });

  describe('reduce', () => {
    const reduce = arrayFunctions.reduce;
    it('should be a function', () => {

      expect(typeof reduce).toBe('function');
    });

    it('should return a new value multiplying all the items', () => {

      const arr = [2, 3, 5];

      const cb = (acc, item) => {
        return acc * item;
      }
      const multiplyEveryItem = reduce(arr, cb);
      expect(multiplyEveryItem).toEqual(30);
    });

  });

  describe('find', () => {
    it('should be a function', () => {
      const find = arrayFunctions.find;
      expect(typeof find).toBe('function');
    });

    it('should return a the item we are searching for', () => {
      const find = arrayFunctions.find;
      const arr = [2, 3, 5, 6, 7];
      const cbFind5 = (el) => {
        return el === 5;
      }
      const search5 = find(arr, cbFind5);
      expect(search5).toEqual(5);
    });

    it('should not return undefined if not found', () => {
      const find = arrayFunctions.find;
      const arr = [2, 3, 6];
      const cbFind5 = (el) => {
        return el === 5;
      }
      const search5 = find(arr, cbFind5);
      expect(search5).toEqual(undefined);
    });

  });

  describe('filter', () => {
    it('should be a function', () => {
      const filter = arrayFunctions.filter;
      expect(typeof filter).toBe('function');
    });

    it('check if item exist in array', () => {
      const filter = arrayFunctions.filter;
      const expected = ["hello", "hi"]
      const cb = (params) => {
        return params === "hello";
      }
      const actual = filter(expected, cb)
      expect(actual).toEqual(["hello"])
    })

  })

  describe('flatten', () => {
    it('should be a function', () => {
      const flatten = arrayFunctions.flatten;
      expect(typeof flatten).toBe('function');
    });

    it('check if item exist in array', () => {
      const filter = arrayFunctions.filter;
      const expected = ["hello", "hi"]
      const cb = (params) => {
        return params === "hello";
      }
      const actual = filter(expected, cb)
      expect(actual).toEqual(["hello"])
    })

  })

});
