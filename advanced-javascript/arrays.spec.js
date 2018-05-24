const arrayFunctions = require('./arrays');

describe('Testing test!', () => {
  it('Checking that test runs.', () => {});
});
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
      expect(typeof each).toBe('function')
    })
  });

  describe('map', () => {
    const map = arrayFunctions.map;

    it('should be a function', () => {
      expect(typeof map).toBe('function');
    });
    it('should map over an array and return a new array', () => {
      function cb(string) {
        return string + '_';
      }
      const obj = map(['this', 'that', 'and the other thing'], cb);
      expect(obj).toEqual(['this_', 'that_', 'and the other thing_']);
    });
  });

  describe('reduce', () => {
    const reduce = arrayFunctions.reduce;

    it('should be a function', () => {
      expect(typeof reduce).toBe('function');
    });
    it('', () => {

    });
  });

  describe('find', () => {
    it('should be a function', () => {
      const find = arrayFunctions.find;
      expect(typeof find).toBe('function');
    });
  });

  describe('filter', () => {
    it('should be a function', () => {
      const filter = arrayFunctions.filter;
      expect(typeof filter).toBe('function');
    });
  });

  describe('flatten', () => {
    it('should be a function', () => {
      const map = arrayFunctions.map;
      expect(typeof map).toBe('function');
    });
  });
});

// each,
// map,
// reduce,
// find,
// filter,
// flatten