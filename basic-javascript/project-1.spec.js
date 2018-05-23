const funcs = require('./project-1')

// write your tests here
it('multiplyByTen', () => {
  expect(funcs.multiplyByTen(5)).toBe(50)
})
it('subtractFive', () => {
  expect(funcs.subtractFive(10)).toBe(5)
})
it('areSameLength', () => {
  expect(funcs.areSameLength('iamataco', 'iamabell')).toBeTruthy()
})
it('areEqual', () => {
  expect(funcs.areEqual(10, 1 * 10)).toBeTruthy()
})
it('lessThanNinety', () => {
  // y tho
  expect(funcs.lessThanNinety(3)).toBeTruthy()
})
it('greaterThanFifty', () => {
  // but y tho
  expect(funcs.greaterThanFifty(70)).toBeTruthy()
})
it('add', () => {
  // okay this is busy work
  expect(funcs.add(1, 2)).toBe(1 + 2)
})
it('subtract', () => {
  expect(funcs.subtract(2, 1)).toBe(2 - 1)
})
it('divide', () => {
  expect(funcs.divide(2, 1)).toBe(2)
})
it('multiply', () => {
  expect(funcs.multiply(3, 2)).toBe(6)
})
it('getRemainder', () => {
  expect(funcs.getRemainder(5, 2)).toBe(1)
})
it('isEven', () => {
  expect(funcs.isEven(2)).toBe(true)
  expect(funcs.isEven(3)).toBe(false)
})
it('isOdd', () => {
  expect(funcs.isOdd(3)).toBe(true)
  expect(funcs.isOdd(4)).toBe(false)
})
it('square', () => {
  expect(funcs.square(5)).toBe(25)
})
it('cube', () => {
  expect(funcs.cube(3)).toBe(27)
})
it('raiseToPower', () => {
  expect(funcs.raiseToPower(4, 4)).toBe(256)
})
it('roundNumber', () => {
  expect(funcs.roundNumber(4.523)).toBe(5)
})
it('roundUp', () => {
  expect(funcs.roundUp(4.3)).toBe(5)
})
it('addExclamationPoint', () => {
  expect(funcs.addExclamationPoint('hey...')).toBe('hey...!')
})
it('combineNames', () => {
  expect(funcs.combineNames('Homer', 'Simpson')).toBe('Homer Simpson')
})
it('getGreeting', () => {
  expect(funcs.getGreeting('Homer')).toBe('Hello Homer!') // Doh! 🤕
})
it('getRectangleArea', () => {
  expect(funcs.getRectangleArea(2, 4)).toBe(8)
})
it('getTriangleArea', () => {
  expect(funcs.getTriangleArea)
})
it('getCircleArea', () => {
  expect(funcs.getCircleArea(3)).toBe(Math.PI * 3 ** 2)
})
it('getRectangularPrismVolume', () => {
  expect(funcs.getRectangularPrismVolume(2, 2, 2)).toBe(2 ** 3)
})
