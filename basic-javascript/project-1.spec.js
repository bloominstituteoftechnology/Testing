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

// start iting!

describe('multiplyByTen', () => {
  it('multiplies 5 by 10 to equal 50', () => {
    expect(multiplyByTen(5)).toBe(50)
  })
  it('multiplies 0 by 10 to equal 0', () => {
    expect(multiplyByTen(0)).toBe(0)
  })
  it('multiplies undefined by 10 to equal false', () => {
    expect(multiplyByTen(undefined)).toBe(false)
  })
})

describe('subtractFive', () => {
  it('subtracts 5 from 8 to equal 3', () => {
    expect(subtractFive(8)).toBe(3)
  })
  it('if argument is not a number return false', () => {
    expect(subtractFive('notanumber')).toBe(false)
  })
  it('subtracts 5 from -5 to equal -10', () => {
    expect(subtractFive(-5)).toBe(-10)
  })
})

describe('`areSameLength`', () => {
  it('should be a function', () => {
    expect(typeof areSameLength).toBe('function')
  })
  it('should return a boolean', () => {
    const result = areSameLength('this', 'false')
    expect(typeof result).toBe('boolean')
  })
  it('areSameLength("this", "false") should return false', () => {
    const result = areSameLength('this', 'false')
    expect(result).toBe(false)
  })
})

describe('areEqual', () => {
  it('should be a function', () => {
    expect(typeof areEqual).toBe('function')
  })
  it('should return a boolean', () => {
    const result = areEqual('this', 'false')
    expect(typeof result).toBe('boolean')
  })
  it('areEqual("this", "false") should return false', () => {
    const result = areEqual('this', 'false')
    expect(result).toBe(false)
  })
  it('areEqual("equal", "equal") should return true', () => {
    const result = areEqual('equal', 'equal')
    expect(result).toBe(true)
  })
})

describe('`lessThanNinety`', () => {
  it('should be a function', () => {
    expect(typeof lessThanNinety).toBe('function')
  })
  it('should return a boolean', () => {
    const result = lessThanNinety(80)
    expect(typeof result).toBe('boolean')
  })
  it('lessThanNinety(80) should return true', () => {
    const result = lessThanNinety(80)
    expect(result).toEqual(true)
  })
  it('lessThanNinety(90) should return false', () => {
    const result = lessThanNinety(90)
    expect(result).toEqual(false)
  })
})
