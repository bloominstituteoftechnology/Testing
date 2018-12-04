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
