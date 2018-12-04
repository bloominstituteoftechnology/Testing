const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('Arrays', () => {
  describe('map', () => {
    it('should be a function', () => {
      const map = arrayFunctions.map;
      expect(typeof map).toBe('function');
    });
  });
});

describe('each', () => {
  test('each can access each item', () => {
    const array = [2, 4, 6]
    const newArray = []
    const expected = [3, 5, 7]
    const cb = item => newArray.push(item + 1)
    arrayFunctions.each(array, cb)
    expect(newArray).toEqual(expected)
  })

  test('each can access the indices', () => {
    const array = [2, 4, 6]
    const newArray = []
    const expected = [0, 1, 2]
    const cb = (_, index) => newArray.push(index)
    arrayFunctions.each(array, cb)
    expect(newArray).toEqual(expected)
  })
})

describe('map', () => {
  test('tests that each can modify each item', () => {
    const array = [2, 4, 6]
    const cb = item => item + 1
    const expected = [3, 5, 7]
    const actual = arrayFunctions.map(array, cb)
    expect(actual).toEqual(expected)
  })
})

describe('reduce', () => {
  test('reduce works', () => {
    const array = [1, 2, 3, 4, 5]
    const cb = (acc, item) => acc + item
    const expected = 15
    const actual = arrayFunctions.reduce(array, cb)
    expect(actual).toEqual(expected)
  })
})