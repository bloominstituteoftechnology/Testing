const funcs = require('./project-2');

describe('Get Biggest', () => {
  test('Should return the larger of the numbers', () => {
    expect(funcs.getBiggest(489, 723)).toEqual(723)
  })
  test('Should return false if value is undefined', () => {
    expect(funcs.getBiggest(undefined, 723)).toEqual(false)
  })
})
describe('Get greeting', () => {
  test('Should return Hello in said language', () => {
    expect(funcs.greeting('German')).toEqual('Guten Tag!')
  })
  test('Should return false if value is undefined', () => {
    expect(funcs.greeting()).toEqual('Hello!')
  })
})
