const arrayFunctions = require('../src/arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

const stringArray = ['anthony', 'lily', 'ben'];
const numberArray = [ 1, 3, 5, 3, 1];

describe('Arrays', () => {
  describe('map', () => {
    it('should be a function', () => {
      const map = arrayFunctions.map;
      expect(typeof map).toBe('object');
    });

    it('should return a boolean of true if array is passed', () => {
      const map = arrayFunctions.map;
      const arr = map(numberArray, () => 'map');
      expect(Array.isArray(arr)).toBe(true);
    });
  });
});


describe('each', () => {
  it('should be a function', () => {
    const each = arrayFunctions.each;
    expect(typeof each).toBe('function');
  });
});

describe('reduce', () => {
  it('should be a function', () => {
    const reduce = arrayFunctions.reduce;
    expect(typeof reduce).toBe('function');
  });
  it('should return a reduced array', () => {
    let memo = [];
    const reduce = arrayFunctions.reduce;
    const array = reduce(numberArray, (x, y) => x + y, memo);
    expect(array).toBe(13);
  });
});

describe('find', () => {
  it('should be a function', () => {
    const find = arrayFunctions.find;
    expect(typeof find).toBe('function');
  });

  it('should return a number if found in the array', () => {
    const find = arrayFunctions.find;
    const array = find(numberArray, x => x = 5);
    expect(array).toBe([5]);
  });
});

describe('filter', () => {
  it('should be a function', () => {
    const filter = arrayFunctions.filter;
    expect(typeof filter).toBe('function');
  });
  it('should do return an array of filtered values', () => {
    const filter = arrayFunctions.filter;
    const array = filter(numberArray, x => x > 4);
    expect(array).toBe([5]);
  });
});

describe('flatten', () => {
  it('should be a function', () => {
    const flatten = arrayFunctions.flatten;
    expect(typeof flatten).toBe('function');
  });
  it('should return a flat array', () => {
    const flatten = arrayFunctions.flatten;
    const array = flatten([numberArray]);
    expect(array).toEqual([
      1, 
      3, 
      5, 
      3, 
      1
    ]);
  });
})
