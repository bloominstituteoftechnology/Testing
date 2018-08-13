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

// start testing!

describe('multiplyByTen', () => {
  test('multiplies 5 by 10 to equal 50', () => {
    expect(multiplyByTen(5)).toBe(50)
  })
  test('multiplies 0 by 10 to equal 0', () => {
    expect(multiplyByTen(0)).toBe(0)
  })
  test('multiplies undefined by 10 to equal false', () => {
    expect(multiplyByTen(undefined)).toBe(false)
  })
})

describe('subtractFive', () => {
  test('subtracts 5 from 8 to equal 3', () => {
    expect(subtractFive(8)).toBe(3)
  })
  test('if argument is not a number return false', () => {
    expect(subtractFive('notanumber')).toBe(false)
  })
  test('subtracts 5 from -5 to equal -10', () => {
    expect(subtractFive(-5)).toBe(-10)
  })
})
