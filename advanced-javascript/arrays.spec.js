const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, 
//   and perform some sort of operation on the data.

describe.skip('arrays', () => {
  describe('all array functions', () => {
    it('should be functions', () => {
      for (let func in arrayFunctions) {
        expect(typeof arrayFunctions[func]).toBe('function');
      }
    });
  });

  describe('map', () => {
    it('should return mapped arr', () => {
      expect(arrayFunctions
        .map([1, 2, 3], el => {
          return el + 1;
        })
      ).toEqual([ 2, 3, 4 ]);
    });

    it('should return a new array', () => {
      let arr = [1, 2, 3];
      expect(arrayFunctions
        .map(arr, el => {
          return el + 1;
        })
      ).not.toBe(arr);
    });
  });

  describe('reduce', () => {
    it('should return reduced val', () => {
      expect(arrayFunctions
        .reduce([1, 2, 3], (acc, el) => {
          return acc + el;
        }, 0)
      ).toBe(6);
    });

    it('should return a new array', () => {
      let arr = [1, 2, 3];
      expect(arrayFunctions
        .reduce(arr, (acc, el) => {
          return acc + el;
        }, 0)
      ).not.toBe(arr);
    });
  });

  describe('find', () => {
    it('should return found val', () => {
      expect(arrayFunctions
        .find([1, 2, 3], el => {
          return el % 2 === 0;
        })
      ).toBe(2);
    });

    it('should undefined if not found', () => {
      expect(arrayFunctions
        .find([1, 2, 3], el => {
          return el === 0;
        }, 0)
      ).toBe(undefined);
    });
  });

  describe('filter', () => {
    it('should return filtered vals', () => {
      expect(arrayFunctions
        .filter([1, 2, 3], el => {
          return el % 2 === 0;
        })
      ).toEqual([ 2 ]);

      expect(arrayFunctions
        .filter([1, 2, 3], el => {
          return el % 2 !== 0;
        })
      ).toEqual([ 1, 3 ]);
    });

    it('should an empty arr if no elements met condition', () => {
      expect(arrayFunctions
        .filter([1, 2, 3], el => {
          return el === 0;
        }, 0)
      ).toEqual([]);
    });
  });

  describe('flatten', () => {
    it('should return a flattened array', () => {
      expect(arrayFunctions.flatten([1, 2, 3, [ 4, 5 ]]))
        .toEqual([ 1, 2, 3, 4, 5 ]);

      expect(arrayFunctions.flatten([1, [2], 3, [ 4, 5, [ 6, 7 ] ], 8]))
        .toEqual([ 1, 2, 3, 4, 5, 6, 7, 8 ]);

      expect(arrayFunctions.flatten([1, 2, 3]))
        .toEqual([ 1, 2, 3 ]);
    });

    it('should an empty arr if no elements met condition', () => {
      expect(arrayFunctions.flatten([], 0)).toEqual([]);
    });
  });
});
