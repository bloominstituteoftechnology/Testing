const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

//#1 & 2
describe('Arrays', () => {
  describe('map', () => {
    it('should be a function', () => {
      const map = arrayFunctions.map;
      expect(typeof map).toBe('function');
    });

    it('it should return a new array, leaving the old one intact', () => {
      const map = arrayFunctions.map;
      const arr = [1, 2, 3, 6, 7]
      const cb = (el) => {
        return el ** 2;
      }
      const squared = map(arr, cb);
      expect(squared).toEqual([1, 4, 9, 36, 49])
    })
  });
});
//#3
describe('Reduce', () => {
  describe('reduce', () => {
    it('should be a function', () => {
      const reduce = arrayFunctions.reduce;
      expect(typeof reduce).toBe('function');
    });

    it('it should return a value, while keeping the old array intact', () => {
      const map = arrayFunctions.reduce;
      const arr = [1, 2, 3, 6, 7]
      const cb = (acc, item) => {
        return acc + item;
      }
      const squared = map(arr, cb);
      expect(squared).toEqual(19)
    })
  });
});
//#4
  describe('find', () => {
    it('should be a function', () => {
      const find = arrayFunctions.find;
      expect(typeof find).toBe('function');
    });

    it('it should return return the element we want', () => {
      const find = arrayFunctions.find;
      const arr = [1, 3, 6, 7]
      const cb = (el) => {
        return el == 2;
      }
      const searched = find(arr, cb);
      expect(searched).toEqual(undefined)
    })
  });

//#5
  describe('filter', () => {
    it('should be a function', () => {
      const filter = arrayFunctions.filter;
      expect(typeof filter).toBe('function');
    });

    it('it should return what you have filtered', () => {
      const filter = arrayFunctions.filter;
      const arr = [1, 2, 3, 6, 7]
      const cb = (el) => {
        return el == 2;
      }
      const filtered = filter(arr, cb);
      expect(filtered).toEqual([2])
    })
  });

//#6

    describe('flatten', () => {
      it('should be a function', () => {
        const flatten = arrayFunctions.flatten;
        expect(typeof flatten).toBe('function');
      });
  
      it('it should return a flat array (no subarrays)', () => {
        const flatten = arrayFunctions.flatten;
        const arr = [1, 2, [3,[6]], 7]
        const cb = (el) => {
          return el ** 2;
        }
        const flattened = flatten(arr, cb);
        expect(flattened).toEqual([1, 2, 3, 6, 7])
      })
    });
