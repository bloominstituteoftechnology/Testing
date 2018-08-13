const helpers = require('./project-1');

describe('multiplyByTen', () => {
  it('should work for positive ints', () => {
    expect(helpers.multiplyByTen(3)).toEqual(30)
    expect(helpers.multiplyByTen(11)).toEqual(110)
  })
  it('should work for negative ints', () => {
    expect(helpers.multiplyByTen(-5)).toEqual(-50)
    expect(helpers.multiplyByTen(-12)).toEqual(-120)
  })
  it('should return "Not a Number" for non-number variables', () => {
    expect(helpers.multiplyByTen('-5')).toEqual('Not a Number')
    expect(helpers.multiplyByTen(false)).toEqual('Not a Number')
  })
})

describe('subtractFive', () => {
  it('should work for positive ints', () => {
    expect(helpers.subtractFive(3)).toEqual(-2)
    expect(helpers.subtractFive(11)).toEqual(6)
  })
  it('should work for negative ints', () => {
    expect(helpers.subtractFive(-5)).toEqual(-10)
    expect(helpers.subtractFive(-12)).toEqual(-17)
  })
  it('should return "Not a Number" for non-number variables', () => {
    expect(helpers.subtractFive('-5')).toEqual('Not a Number')
    expect(helpers.subtractFive(false)).toEqual('Not a Number')
  })
})

describe('areSameLength', () => {
  it('should return true for str of same length', () => {
    expect(helpers.areSameLength('four', 'llll')).toEqual(true)
    expect(helpers.areSameLength('11', 'on')).toEqual(true)
  })
  it('should return false for str of same length', () => {
    expect(helpers.areSameLength('four', '4')).toEqual(false)
    expect(helpers.areSameLength('11', 'eleven')).toEqual(false)
  })
})

describe('areEqual', () => {
  it('should return true for numbers with the same value', () => {
    expect(helpers.areEqual(4, 2 + 2)).toEqual(true)
    expect(helpers.areEqual(11, 11)).toEqual(true)
  })
  it('should return false for numbers with different values', () => {
    expect(helpers.areEqual(7, 5)).toEqual(false)
    expect(helpers.areEqual(3, 8)).toEqual(false)
  })
  it('should return true for strings with equal contents', () => {
    expect(helpers.areEqual('yelp', 'yelp')).toEqual(true)
    expect(helpers.areEqual('11', '11')).toEqual(true)
  })
})

describe('lessThanNinety', () => {
  it('should return true for numbers less than 90', () => {
    expect(helpers.lessThanNinety(50)).toEqual(true)
    expect(helpers.lessThanNinety(80)).toEqual(true)
  })
  it('should return false for numbers greater than 90', () => {
    expect(helpers.lessThanNinety(91)).toEqual(false)
    expect(helpers.lessThanNinety(200)).toEqual(false)
  })
  it('should return "Not a Number" for non-number variables', () => {
    expect(helpers.lessThanNinety('-5')).toEqual('Not a Number')
    expect(helpers.lessThanNinety(false)).toEqual('Not a Number')
  })
})
// start testing!
