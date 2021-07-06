const arrayFunctions = require('./arrays');

// // we've gone ahead and gotten a start here for you,
// // except, for some reason, none of our current assertions are working.
// // first step is to make sure all these assertions work.
// // then make sure you have at least 2-3 more assertions for every function.
// // hint 1. - you need to pass data to the functions and get expected output.
// // hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('Arrays', () => {
//   describe('each', () => {
//         it('should perform a callback function on each element in a given array', () => {
//             const each = arrayFunctions.each;
//             const cb = elements => {
//                 return elements - 1;
//             }
//             expect(typeof each).toBe('function');
//             expect(each([2, 3, 4], cb)).toBe([1, 2, 3]);
//         });
//     });

  describe('map', () => {
      it('should be a function that returns an array after performing a callback function', () => {
        const map = arrayFunctions.map;
        expect(typeof map).toBe('function');
        expect(map([1, 2, 3, 4, 5], num => num + 3)).toEqual([4, 5, 6, 7, 8]);
    });
  });

  describe('reduce', () => {
      const reduce = arrayFunctions.reduce;
      it('should be a function', () => {
          expect(typeof reduce).toBe('function');
      });
      it('should aggregate all integers passed into the function', () => {
        const arr = [1, 2, 3];
        const cb = (accum, e) => {
            return accum + e;
        }
        const addAllElements = reduce(arr, cb);
        expect(addAllElements).toEqual(6);
      });
  });

  describe('find', () => {
      it('should be a function', () => {
          const find = arrayFunctions.find;
          expect(typeof find).toBe('function');
      });
      it('should return the desired item if it is present in the array', () => {
          const find = arrayFunctions.find;
          const arr = [3, 4, 8, 15, 16];
          const cb = e => {
              return e === 3;
          }
          const findNum = find(arr, cb);
          expect(findNum).toBe(3);
      })
  });

  describe('filter', () => {
      it('should be a function', () => {
          const filter = arrayFunctions.filter;
          expect(typeof filter).toBe('function');
      });
      it('should check for given items in the array', () => {
        const filter = arrayFunctions.filter;
        const expected = ["hello", "hi"]
        const cb = (params) => {
            return params === "hello";
            }
        const actual = filter(expected, cb)
        expect(actual).toEqual(["hello"])
      });
  });

  describe('flatten', () => {
      it('should be a function', () => {
          const flatten = arrayFunctions.flatten;
          expect(typeof flatten).toBe('function');
      });
      it('should condense multiple arrays into a singular array', () => {
          const arr = [5, 6, 7, [9, 8, 7, [4, 8, 15, 16, 23, 42]]];
          const flatten = arrayFunctions.flatten;
          expect(flatten(arr)).toEqual([5, 6, 7, 9, 8, 7, 4, 8, 15, 16, 23, 42]);
      });
  });

});
