const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe.only('Arrays', () => {
  const array = [1,2,3,4,5]
  const callback = (element) => {return element += 1}
  const reducer = (accum, value) => {return accum + value}
  const filtered = item => { return item > 3 ? item : null }

  describe('map', () => {
    const map = arrayFunctions.map;
    it('should be a function', () => {
      expect(typeof map).toBe('function');
    });

    it('should return a modified array', () => {
      expect(map(array, callback)).toEqual([2,3,4,5,6])
    });
  });

  describe('reduce', () => {
    const reduce = arrayFunctions.reduce;
    it('should be a function', () => {
      expect(typeof reduce).toBe('function');
    });

    it('should return a reduced array', () => {
      expect(reduce(array, reducer)).toBe(15)
    });
  });

  describe('find', () => {
    const find = arrayFunctions.find;

    it('should be a function', () => {
      expect(typeof find).toBe('function');
    });

    // it('should return an element if it is in the array', () => {
    //   expect(find(array, reducer)).toBe(15)
    // });
  });

  describe('filter', () => {
    const filter = arrayFunctions.filter;
    it('should be a function', () => {
      expect(typeof filter).toBe('function');
    });

    it('should return an element if it is in the array', () => {
      expect(filter(array, filtered)).toEqual([4,5])
    });
  });

  describe('flatten', () => {
    const flatten = arrayFunctions.flatten;
    it('should be a function', () => {
      expect(typeof flatten).toBe('function');
    });

    it('should return a flattened array', () => {
      expect(flatten([1,2, [3,4], [5]])).toEqual([1,2,3,4,5])

    });
  });

});
