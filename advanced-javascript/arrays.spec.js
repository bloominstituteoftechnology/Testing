const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('each', () => {
  it('should invoke a callback for each array element', () => {
    const each = arrayFunctions.each;
    expect(typeof each).toBe('function');
  });
});

describe('map', () => {
  it('should be a function', () => {
    const map = arrayFunctions.map;
    const actual = map([1, 2, 3], num => num * 2);
    expect(typeof map).toBe('function');
    expect(actual).toEqual([2, 4, 6]);
  });
});

describe('reduce', () => {
  it('should return an array reduced to a single value based on the callback', () => {
    const reduce = arrayFunctions.reduce;
    const actual = reduce([1, 2, 3], (num, acc) => acc + num);
    expect(actual).toBe(6);
  });
});
