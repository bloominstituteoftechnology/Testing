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
    const nums = {
      in: [1, 2, 3, 4, 5],
      out: [10, 20, 30, 40, 50]
    }
    const strings = {
      in: ['a', 'b', 'c', 'd'],
      out: ['a!', 'b!', 'c!', 'd!']
    }
    const { multiplyByTen, addExclamationPoint } = basicFunctions

    it('should return an array with the callback applied to each element', () => {
      expect(arrayFunctions.map(nums.in, multiplyByTen)).toEqual(nums.out)
      expect(arrayFunctions.map(strings.in, addExclamationPoint)).toEqual(strings.out)
    })
  })

  describe('reduce', () => {
    const nums = {
      in: [1, 2, 3, 4, 5],
      out: {
        add: 15,
        mult: 120,
        power: 1
      }
    }
    const { add, multiply, raiseToPower } = basicFunctions

    it('should return a single value obtained by repeatedly applying the callback to a memo and the next element', () => {
      expect(arrayFunctions.reduce(nums.in, add, 0)).toBe(nums.out.add)
      expect(arrayFunctions.reduce(nums.in, multiply, 1)).toBe(nums.out.mult)
      expect(arrayFunctions.reduce(nums.in, raiseToPower, 1)).toBe(nums.out.power)
    })
  })

  describe('find', () => {
    const nums = [1, 2, 3, 4, 5]
    const strings = ['a', 'b', 'c', 'd']

    it('should return the item if found in the array', () => {
      expect(arrayFunctions.find(nums, (num) => num == 4)).toBe(4)
      expect(arrayFunctions.find(strings, (char) => char =='c')).toBe('c')
    })

    it('should return undefined if the element is not found', () => {
      expect(arrayFunctions.find(nums, (num) => num == 42)).toBeUndefined()
      expect(arrayFunctions.find(strings, (char) => char == 'q')).toBeUndefined()
    })
  })

  describe('filter', () => {
    const nums = {
      input: [1, 2, 3, 4, 5],
      fn: (num) => num < 4,
      expected: [1, 2, 3]
    }
    const strings = {
      input: ['a', 'ab', 'abc', 'abcd'],
      fn: (string) => string.length < 3,
      expected: ['a', 'ab']
    }

    it('should return an array of elements for which the callback returns true', () => {
      expect(arrayFunctions.filter(nums.input, nums.fn)).toEqual(nums.expected)
      expect(arrayFunctions.filter(strings.input, strings.fn)).toEqual(strings.expected)
    })
  })

  describe('flatten', () => {
    const nested = {
      in: [1, [2, [3, [4, [5]]]]],
      out: [1, 2, 3, 4, 5]
    }

    it('should accept an arbitrarily nested array and return a flattened copy', () => {
      expect(arrayFunctions.flatten(nested.in)).toEqual(nested.out)
    })  
  })
})
