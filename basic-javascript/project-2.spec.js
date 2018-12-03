const funcs = require('./project-2')
/**
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
describe('getBiggest', () => {
  it('returns x if x > y', () => {
    expect(funcs.getBiggest(15, 2)).toBe(15)
  })
  it('returns y if y > x', () => {
    expect(funcs.getBiggest(500, 12200)).toBe(12200)
  })
  it('returns x or y when equal', () => {
    expect(funcs.getBiggest(140, 140)).toBe(140)
  })
})

/**
 * @param {string} language
 * @returns {string}
 */
describe('greeting', () => {
  it("returns 'Guten Tag!' for German", () => {
    expect(funcs.greeting('German')).toBe('Guten Tag!')
  })
  it("returns 'Hola!' for Spanish", () => {
    expect(funcs.greeting('Spanish')).toBe('Hola!')
  })
  it("returns 'Hello!' for all other cases", () => {
    expect(funcs.greeting('Yiddish')).toBe('Hello!')
    expect(funcs.greeting()).toBe('Hello!')
  })
})
/**
 * @param {number} num
 * @returns {bool}
 */
describe('isTenOrFive', () => {
  it('returns true if num is 10 or 5', () => {
    expect(funcs.isTenOrFive(10)).toBe(true)
    expect(funcs.isTenOrFive(5)).toBe(true)
  })
  it('should return false if num is not 10 or 5', () => {
    expect(funcs.isTenOrFive(0)).toBe(false)
    expect(funcs.isTenOrFive(4.1)).toBe(false)
  })
})

/**
 * @param {number} num
 * @returns {bool}
 */
describe('isInRange', () => {
  it('returns true if number is in range', () => {
    expect(funcs.isInRange(35.5)).toBe(true)
    expect(funcs.isInRange(40)).toBe(true)
  })
  it('return false if number is outside of range', () => {
    expect(funcs.isInRange(7)).toBe(false)
    expect(funcs.isInRange(56)).toBe(false)
  })
})

/**
 * @param {number} num
 * @returns {bool}
 */
describe('isInteger', () => {
  it('returns true if num is an integer', () => {
    expect(funcs.isInteger(5)).toBe(true)
    expect(funcs.isInteger(0)).toBe(true)
    expect(funcs.isInteger(-20)).toBe(true)
  })
  it('returns false if num is not an integer', () => {
    expect(funcs.isInteger(0.5)).toBe(false)
  })
})

/**
 * @param {number} num
 * @returns {string}
 */
describe('fizzBuzz', () => {
  it('returns fizz if divisible by 3', () => {
    expect(funcs.fizzBuzz(9)).toBe('fizz')
  })
  it('returns buzz if divisible by 5', () => {
    expect(funcs.fizzBuzz(10)).toBe('buzz')
  })
  it('returns fizzbuzz if divisible by 3 and 5', () => {
    expect(funcs.fizzBuzz(15)).toBe('fizzbuzz')
  })
  it('returns num if not divisible by 3 or 5', () => {
    expect(funcs.fizzBuzz(4)).toBe(4)
  })
})

/**
 * @param {number} num
 * @returns {bool}
 */
describe('isPrime', () => {
  it('returns true if num is prime', () => {
    expect(funcs.isPrime(7)).toBe(true)
    expect(funcs.isPrime(17)).toBe(true)
  })
  it('returns false if num is not prime', () => {
    expect(funcs.isPrime(222)).toBe(false)
    expect(funcs.isPrime(1000)).toBe(false)
    expect(funcs.isPrime(0)).toBe(false)
    expect(funcs.isPrime(1)).toBe(false)
  })
})

/**
 * @param {array} arr
 * @returns {number, string}
 */
describe('returnFirst', () => {
  it('returns the first item in the array', () => {
    expect(funcs.returnFirst([ 120, 140, 216, 1222 ])).toBe(120)
    expect(funcs.returnFirst([ 'hi', 'newman' ])).toBe('hi')
  })
})

/**
 * @param {array} arr
 * @returns {number, string}
 */
describe('returnLast', () => {
  it('returns the last item in the array', () => {
    expect(funcs.returnLast([ 129, 130, 1644, 132 ])).toBe(132)
    expect(funcs.returnLast([ 'hi', 'newman' ])).toBe('newman')
  })
})

/**
 * @param {array} arr
 * @returns {number}
 */
describe('getArrayLength', () => {
  it('returns the length of the array', () => {
    expect(funcs.getArrayLength([ 1230, 1330, 1634, 14422 ])).toBe(4)
    expect(funcs.getArrayLength([ 'hi', 'newman' ])).toBe(2)
  })
})

/**
 * @param {array} arr
 * @returns {array}
 */
describe('incrementByOne', () => {
  it('should return the array with each value incremented by one', () => {
    expect(funcs.incrementByOne([ 1, 3, 5, 6 ])).toEqual([ 2, 4, 6, 7 ])
    expect(funcs.incrementByOne([])).toEqual([])
  })
})

/**
 * @param {array} arr
 * @param {number, string} item
 * @returns {array}
 */
describe('addItemToArray', () => {
  it('returns the array with the item added to the end', () => {
    expect(funcs.addItemToArray([ 1, 5 ], 20)).toEqual([ 1, 5, 20 ])
    expect(funcs.addItemToArray([ 'hello' ], 'newman')).toEqual([ 'hello', 'newman' ])
  })
})

/**
 * @param {array} arr
 * @param {number, string} item
 * @returns {array}
 */
describe('addItemToFront', () => {
  it('returns the array with the item added to the front', () => {
    expect(funcs.addItemToFront([ 1, 5 ], 20)).toEqual([ 20, 1, 5 ])
    expect(funcs.addItemToFront([ 'newman' ], 'hello')).toEqual([ 'hello', 'newman' ])
  })
})

/**
 * @param {array} words
 * @returns {string}
 */
describe('wordsToSentence', () => {
  it('returns a string with the words joined and separated by spaces', () => {
    expect(funcs.wordsToSentence([ 'I', 'Love', 'Lambda' ])).toBe('I Love Lambda')
  })
})

/**
 * @param {array} arr
 * @param {number, string} item
 * @returns {bool}
 */
describe('contains', () => {
  it('returns true if the array contains the item', () => {
    expect(funcs.contains([ 3, 6, 9, 10 ], 10)).toBe(true)
    expect(funcs.contains([ 'goodbye' ], 'Hello')).toBe(false)
  })
})

/**
 * @param {array} numbers
 * @returns {number}
 */
describe('addNumbers', () => {
  it('adds all the numbers and returns sum', () => {
    expect(funcs.addNumbers([ 9, 1 ])).toBe(10)
    expect(funcs.addNumbers([ 0 ])).toBe(0)
  })
})

/**
 * @param {array} numbers
 * @returns {number}
 */
describe('averageTestScore', () => {
  it('returns the avg. score', () => {
    expect(funcs.averageTestScore([ 10, 20, 0, 10 ])).toBe(10)
  })
})

/**
 * @param {array} numbers
 * @returns {number}
 */
describe('largestNumber', () => {
  it('returns the largest number', () => {
    expect(funcs.largestNumber([ -3, 10, 399, 20048, 9, -8 ])).toBe(20048)
  })
})
