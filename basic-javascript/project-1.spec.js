const {
  multiplyByTen,
  subtractFive,
  areSameLength,
  areEqual,
  lessThanNinety,
  greaterThanFifty,
  add,
  subtract,
  divide,
  multiply,
  getRemainder,
  isEven,
  isOdd,
  square,
  cube,
  raiseToPower,
  roundNumber,
  roundUp,
  addExclamationPoint,
  combineNames,
  getGreeting,
  getRectangleArea,
  getTriangleArea,
  getCircleArea,
  getRectangularPrismVolume
} = require('./project-1')

// 1. (pre-test) Summarize what your function does
// 2. (pre-test) Write function signature
// 3. Get Red - write test, have it fail
// 4. Get Green - fix thing that's getting tested, have it pass
// 5. Refactor - optional, make it better, keep it green

// Arrange: setup the world
// Act: execute the code you're testing
// Assert: check that it works

describe('Jest', () => {
  test('Jest runs', () => {})
})

describe('multiplyByTen', () => {
  test('returns multiple of ten', () => {
    const input = 10
    const expected = 100
    const actual = multiplyByTen(input)
    expect(actual).toBe(expected)
  })
})

describe('subtractFive', () => {
  test('subtracts by five', () => {
    const input = 10
    const expected = 5
    const actual = subtractFive(input)
    expect(actual).toBe(expected)
  })
})

describe('areSameLength', () => {
  test('tests whether two strings are same length', () => {
    const string1 = 'blah'
    const string2 = 'rarr'
    expect(areSameLength(string1, string2)).toBeTruthy()
  })
  test('tests whether two strings are different length', () => {
    const string1 = 'blah'
    const string2 = 'rar'
    expect(areSameLength(string1, string2)).toBeFalsy()
  })
})

describe('areEqual', () => {
  test('tests whether two numbers are equal', () => {
    const num1 = 10
    const num2 = 10
    expect(areEqual(num1, num2)).toBeTruthy()
  })
  test('tests whether two numbers are not equal', () => {
    const num1 = 10
    const num2 = 14
    expect(areEqual(num1, num2)).toBeFalsy()
  })
})

describe('lessThanNinety', () => {
  test('test whether a number is less than 90', () => {
    const num = 10
    expect(lessThanNinety(num)).toBeTruthy()
  })
  test('test whether a number is greater than 90', () => {
    const num = 99
    expect(lessThanNinety(num)).toBeFalsy()
  })
})
