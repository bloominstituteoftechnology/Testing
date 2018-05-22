const funcs = require('./project-2');

describe('getBiggest', () => {
  it('should return the largest of two elements', () => {
    expect(funcs.getBiggest(1, 2)).toBe(2)
  })
 })

describe('isTenOrFive', () => {
  it('should return true if num is 10 or 5', () => {
    expect(funcs.isTenOrFive(5)).toBeTruthy()
    expect(funcs.isTenOrFive(10)).toBeTruthy()
    expect(funcs.isTenOrFive(2)).toBeFalsy()
  })
})

describe('isInRange', () => {
  it('returns true if a number is between 20 and 50', () => {
    expect(funcs.isInRange(21)).toBeTruthy()
    expect(funcs.isInRange(19)).toBeFalsy()
  })
})

describe('isInteger', () => {
  it('returns true if num is an integer', () => {
    expect(funcs.isInteger(1.1)).toBeFalsy()
    expect(funcs.isInteger(1)).toBeTruthy()
  })
})

describe('fizzBuzz', () => {
  it('should return fizz for multiples of 3, buzz for 5, fizzbuzz for 15, or num', () => {
    expect(funcs.fizzBuzz(3)).toBe('fizz')
    expect(funcs.fizzBuzz(5)).toBe('buzz')
    expect(funcs.fizzBuzz(15)).toBe('fizzbuzz')
    expect(funcs.fizzBuzz(1)).toBe(1)
  })
})

describe('isPrime', () => {
  it('should return true if number is prime', () => {
    expect(funcs.isPrime(1)).toBeFalsy()
    expect(funcs.isPrime(2)).toBeTruthy()
    expect(funcs.isPrime(7)).toBeTruthy()
    expect(funcs.isPrime(21)).toBeFalsy()
  })
})

describe('returnFirst', () => {
  it('returns the first element of an array', () => {
    expect(funcs.returnFirst([1,2])).toBe(1)
  })
})

describe('returnLast', () => {
  it('should return the last element of an array', () => {
    expect(funcs.returnLast([1,2])).toBe(2)
  })
})

describe('getArrayLength', () => {
  it('should return the length of an array', () => {
    expect(funcs.getArrayLength([1,2,3,4])).toBe(4)
  })
})

describe('incrementByOne', () => {
  it('should increment each element of an array by one', () => {
    expect(funcs.incrementByOne([1,2,3])).toEqual([2,3,4])
  })
})

describe('addItemToArray', () => {
  it('should add an item to the end of an array', () => {
    expect(funcs.addItemToArray([1,2],3)).toEqual([1,2,3])
  })
})

describe('addItemToFront', () => {
  it('should add an item to the front of an array', () => {
    expect(funcs.addItemToFront([2,3],1)).toEqual([1,2,3])
  })
})

describe('wordsToSentence', () => {
  it('should join an array of words into a sentence', () => {
    expect(funcs.wordsToSentence(['i', 'am'])).toEqual('i am')
  })
})

describe('contains', () => {
  it('returns true if the item exists in the container', () => {
    expect(funcs.contains([1, 2], 1)).toBeTruthy()
    expect(funcs.contains([1, 2], 3)).toBeFalsy()
  })
})

describe('addNumbers', () => {
  it('should return the sum of an array of numbers', () => {
    expect(funcs.addNumbers([1, 2, 3])).toBe(6)
  })
})

describe('averageTestScore', () => {
  it('should compute the average of an array', () => {
    expect(funcs.averageTestScore([1,2,3])).toBe(2)
  })
})

describe('largestNumber', () => {
  it('should return the largest number in the array', () => {
    expect(funcs.largestNumber([1,2,3,5,4,3])).toBe(5)
  })
})

