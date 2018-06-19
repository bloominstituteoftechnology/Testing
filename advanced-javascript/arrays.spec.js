const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('Arrays', () => {
  describe('map(array, callback)', () => {
    it('should be a function', () => {
      const map = arrayFunctions.map;
      expect(typeof map).toBe('function');
    });
    it('should return an array of processed array elements', () => {
      const map = arrayFunctions.map;
      const doubles = map([2,4,6,8,10], function(element) {
        return element * 2; 
      });
      expect(doubles).toEqual([4, 8, 12, 16, 20]);
    });
  });

  describe('each(array, callback)', () => {
    it('should be a function', () => {
      const each = arrayFunctions.each;
      expect(typeof each).toBe('function');
    });
    it('should iterate through each element in the array and pass each element into a callback', () => {
      const nums = [];
      const each = arrayFunctions.each;
      each([11, 22, 33, 44, 55, 66, 77], function(num) {
        nums.push(num);
      });
      expect(nums).toEqual([11, 22, 33, 44, 55, 66, 77]);
    });
  });

  describe('filter(array, cb)', () => {
    const filter = arrayFunctions.filter;
    it('should be a function', () => {
      const filter = arrayFunctions.filter;
      expect(typeof filter).toBe('function');
      });

      it('returns only array elements that satisfy a predicate', function() {
        const filter = arrayFunctions.filter;
        expect(filter([11, 33, 44, 55, 66, 77, 101], (item => item === 33))).toEqual([33])
      });
  });

  describe('find(array, cb', () => {
      const find = arrayFunctions.find; 
      expect(typeof find).toBe('function'); 
    });



  });
// const filter = (elements, cb) => {
//   const filteredValues = [];
//   each(element, item => {
//     if (cb(item)) filteredValues.push(item);
//   });
//   return filteredValues;
// };

// const find = (elements, cb) => {
//   for (let i = 0; i < elements.length; i++) {
//     if (cb(elements[i])) return elements[i];
//   }
//   return undefined;
// };
