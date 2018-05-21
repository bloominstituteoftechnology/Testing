const arrayFunctions = require('./arrays');
const basicFunctions = require('../basic-javascript/project-1')

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.


// Run a test on all or most of the module's functions
const testAll = (test, filter = '') => {
  Object.keys(arrayFunctions)
    .filter(key => !filter.includes(key))
    .forEach(key => describe(key, test(key)))
}

const shouldBeFunction = (name) => () => {
  it('should be a function', () => {
    expect(typeof arrayFunctions[name]).toBe('function')
  })
}

const shouldInvokeCallback = (name) => () => {
  it('should invoke the provided callback for each element', () => {
    const fn = jest.fn()
    const elements = [1, 2, 3, 4, 5]
    arrayFunctions[name](elements, fn)

    // Special case for reduce
    const invocations = name == 'reduce' ? 4 : 5
    
    expect(fn.mock.calls.length).toBe(invocations)
  })
}

describe('Arrays', () => {
  testAll(shouldBeFunction)
  testAll(shouldInvokeCallback, 'flatten')
  describe('map', () => {
    it('should return an array with the callback applied to each element', () => {
      const nums = [1, 2, 3, 4, 5]
      const numsExpected = [10, 20, 30, 40, 50]
      const strings = ['a', 'b', 'c', 'd']
      const stringsExpected = ['a!', 'b!', 'c!', 'd!']
      const { multiplyByTen, addExclamationPoint } = basicFunctions
      expect(arrayFunctions.map(nums, multiplyByTen)).toEqual(numsExpected)
      expect(arrayFunctions.map(strings, addExclamationPoint)).toEqual(stringsExpected)
    })
  })
});
