const {
  getBiggest,
  greeting,
  isTenOrFive,
  isInRange,
  isInteger,
  fizzBuzz,
  isPrime,
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber
} = require('./project-2')

describe('Jest', () => {
  test('Jest runs', () => {})
})

describe('getBiggest', () => {
  test('returns biggest of different sizes', () => {
    const input1 = 10
    const input2 = 12
    const expected = input2
    const actual = getBiggest(input1, input2)
    expect(actual).toBe(expected)
  })

  test('returns second if same sizes', () => {
    const input1 = 10
    const input2 = 10
    const expected = input2
    const actual = getBiggest(input1, input2)
    expect(actual).toBe(expected)
  })
})

describe('greeting', () => {
  test('returns German', () => {
    expect(greeting('German')).toBe('Guten Tag!')
  })

  test('returns Spanish', () => {
    expect(greeting('Spanish')).toBe('Hola!')
  })

  test('returns English from no input', () => {
    expect(greeting()).toBe('Hello!')
  })

  test('returns English from unknown input', () => {
    expect(greeting(';lkjafoiehafpoieaiea')).toBe('Hello!')
  })
})

describe('isTenOrFive', () => {
  test('returns true if param is 5', () => {
    expect(isTenOrFive(5)).toBe(true)
  })

  test('returns true if param is 10', () => {
    expect(isTenOrFive(10)).toBe(true)
  })

  test('returns true if param is not 5 or 10', () => {
    expect(isTenOrFive(9)).toBe(false)
  })
})

describe('isInRange', () => {
  test('returns true if param is 5', () => {
    expect(isInRange(5)).toBe(false)
  })

  test('returns true if param is 25', () => {
    expect(isInRange(25)).toBe(true)
  })
})

describe('isInteger', () => {
  test('returns true if param is integer', () => {
    expect(isInteger(5)).toBe(true)
  })

  test('returns false if param is not integer', () => {
    expect(isInteger('25')).toBe(false)
  })
})

describe('fizzBuzz', () => {
  test('returns fizzbuzz', () => {
    expect(fizzBuzz(15)).toBe('fizzbuzz')
  })

  test('returns fizz', () => {
    expect(fizzBuzz(3)).toBe('fizz')
  })

  test('returns buzz', () => {
    expect(fizzBuzz(10)).toBe('buzz')
  })

  test('returns number', () => {
    expect(fizzBuzz(7)).toBe(7)
  })
})
