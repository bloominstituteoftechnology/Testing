const helpers = require('./project-1')

// start testing!
describe('multiplyByTen', () => {
  it('is defined', () => {
    expect(helpers.multiplyByTen).toBeDefined()
  })
  it('multiplies by ten', () => {
    expect(helpers.multiplyByTen(2)).toStrictEqual(20)
    expect(helpers.multiplyByTen(-3)).toStrictEqual(-30)
    expect(helpers.multiplyByTen('hi')).toBeNaN()
    expect(helpers.multiplyByTen([ 'a' ])).toBeNaN()
  })
})

describe('subtractFive', () => {
  it('is defined', () => {
    expect(helpers.subtractFive).toBeDefined()
  })
  it('multiplies by ten', () => {
    expect(helpers.subtractFive(2)).toStrictEqual(-3)
    expect(helpers.subtractFive(-3)).toStrictEqual(-8)
    expect(helpers.subtractFive('hi')).toBeNaN()
  })
})

describe('areSameLength', () => {
  it('is defined', () => {
    expect(helpers.areSameLength).toBeDefined()
  })

  it('returns true if the strings are equal', () => {
    expect(helpers.areSameLength('foo', 'bar')).toBeTruthy()
  })
  it('returns false if the strings are equal', () => {
    expect(helpers.areSameLength('foo', 'bars')).toBeFalsy()
  })
})

describe('areEqual', () => {
  it('is defined', () => {
    expect(helpers.areEqual).toBeDefined()
  })
  it('returns true if x = y', () => {
    expect(helpers.areEqual(2, 2)).toBeTruthy()
    expect(helpers.areEqual(-2, -2)).toBeTruthy()
    expect(helpers.areEqual('hi', 'hi')).toBeTruthy()
  })

  it('returns false if x !== y', () => {
    expect(helpers.areEqual(-2, 2)).toBeFalsy()
    expect(helpers.areEqual(-2, 122)).toBeFalsy()
    expect(helpers.areEqual('hi', 'there')).toBeFalsy()
  })
})

describe('lessThanNinety', () => {
  it('returns true if argument < 90', () => {
    expect(helpers.lessThanNinety(5)).toBe(true)
    expect(helpers.lessThanNinety(90)).toBe(false)
    expect(helpers.lessThanNinety(232)).toBe(false)
  })
})

describe('greaterThanFifty', () => {
  it('returns true if argument > 50', () => {
    expect(helpers.greaterThanFifty(25)).toBe(false)
    expect(helpers.greaterThanFifty(50)).toBe(false)
    expect(helpers.greaterThanFifty(80)).toBe(true)
  })
})
describe('add', () => {
  it('should return the sum of the two arguments', () => {
    expect(helpers.add(5, 15)).toBe(20)
    expect(helpers.add(-10, -5)).toBe(-15)
  })
})

describe('subtract', () => {
  it('should return the difference of the two arguments', () => {
    expect(helpers.subtract(25, 25)).toBe(0)
    expect(helpers.subtract(-1, -5)).toBe(4)
    expect(helpers.subtract(5, -4)).toBe(9)
    expect(helpers.subtract(0, 0)).toBe(0)
  })
})

describe('divide', () => {
  it('should return the quotient of the two arguments', () => {
    expect(helpers.divide(15, 15)).toBe(1)
    expect(helpers.divide(12, 6)).toBe(2)
    expect(helpers.divide(11, 2)).toBe(5.5)
  })
})

describe('multiply', () => {
  it('should return the product of the two arguments', () => {
    expect(helpers.multiply(4, 4)).toBe(16)
    expect(helpers.multiply(10, -15)).toBe(-150)
    expect(helpers.multiply(11, 0)).toBe(0)
  })
})
