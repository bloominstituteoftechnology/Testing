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

describe('greaterThanFifty', () => {
  test('test whether a number is greater than 50', () => {
    const num = 99
    expect(greaterThanFifty(num)).toBeTruthy()
  })
  test('test whether a number is less than 50', () => {
    const num = 40
    expect(greaterThanFifty(num)).toBeFalsy()
  })
})

describe('add', () => {
  test('test whether add works', () => {
    const num1 = 3
    const num2 = 7
    const expected = 10
    const actual = add(num1, num2)
    expect(actual).toBe(expected)
  })
})

describe('subtract', () => {
  test('test whether subtract works', () => {
    const num1 = 10
    const num2 = 7
    const expected = 3
    const actual = subtract(num1, num2)
    expect(actual).toBe(expected)
  })
})

describe('multiply', () => {
  test('test whether multiply works', () => {
    const num1 = 3
    const num2 = 3
    const expected = 9
    const actual = multiply(num1, num2)
    expect(actual).toBe(expected)
  })
})

describe('divide', () => {
  test('test whether divide works', () => {
    const num1 = 10
    const num2 = 2
    const expected = 5
    const actual = divide(num1, num2)
    expect(actual).toBe(expected)
  })
})

describe('getRemainder', () => {
  test('test whether getRemainder works', () => {
    const num1 = 10
    const num2 = 9
    const expected = 1
    const actual = getRemainder(num1, num2)
    expect(actual).toBe(expected)
  })
})

describe('isEven', () => {
  test('test whether a number is even', () => {
    const num = 10
    expect(isEven(num)).toBeTruthy()
  })
  test('test whether a number is not even', () => {
    const num = 9
    expect(isEven(num)).toBeFalsy()
  })
})

describe('isOdd', () => {
  test('test whether a number is odd', () => {
    const num = 9
    expect(isOdd(num)).toBeTruthy()
  })
  test('test whether a number is not odd', () => {
    const num = 10
    expect(isOdd(num)).toBeFalsy()
  })
})

describe('square', () => {
  test('test whether square() returns square', () => {
    const num = 9
    const expected = num * num
    const actual = square(num)
    expect(actual).toBe(expected)
  })
})

describe('cube', () => {
  test('test whether cube() returns cube', () => {
    const num = 9
    const expected = num * num * num
    const actual = cube(num)
    expect(actual).toBe(expected)
  })
})

describe('raiseToPower', () => {
  test('test whether raiseToPower() raises to power', () => {
    const num = 9
    const power = 2
    const expected = num ** power
    const actual = raiseToPower(num, power)
    expect(actual).toBe(expected)
  })
})

describe('roundNumber', () => {
  test('test whether roundNumber() rounds number', () => {
    const num = 9.1
    const expected = Math.round(num)
    const actual = roundNumber(num)
    expect(actual).toBe(expected)
  })
})

describe('roundUp', () => {
  test('test whether roundUp() rounds number up', () => {
    const num = 9.8
    const expected = Math.ceil(num)
    const actual = roundUp(num)
    expect(actual).toBe(expected)
  })
})

describe('addExclamationPoint', () => {
  test('test whether addExclamationPoint() adds !', () => {
    const string = 'blah'
    const expected = 'blah!'
    const actual = addExclamationPoint(string)
    expect(actual).toBe(expected)
  })
})
