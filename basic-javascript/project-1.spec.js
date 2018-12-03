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
