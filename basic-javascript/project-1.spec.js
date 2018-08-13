const helpers = require('./project-1');

describe('multiplyByTen', () => {
  it('should multiply a number by 10',() => {
    const { multiplyByTen } = helpers
    expect(multiplyByTen(4)).toEqual(40)
  })
})

describe('subtractFive', () => {
  it('should subtract 5 from number', () => {
    const { subtractFive } = helpers
    expect(subtractFive(10)).toEqual(5)
  })
})

describe('areSameLength', () => {
  it('strings of different lengths should return false', () => {
    const { areSameLength } = helpers
    expect(areSameLength('yo', 'yoo')).toBe(false)
  })
  it('strings of same length should return true', () => {
    const { areSameLength } = helpers
    expect(areSameLength('yo', 'yo')).toBe(true)
  })
})
