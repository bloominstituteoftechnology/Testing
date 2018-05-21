const funcs = require('./project-1');

// write your tests here
+it('multiplyByTen', () => {
  +  expect(funcs.multiplyByTen(5)).toBe(50)
  +})
  +it('subtractFive', () => {
  +  expect(funcs.subtractFive(10)).toBe(5)
  +})
  +it('areSameLength', () => {
  +  expect(funcs.areSameLength('iamsnow', 'iamrain')).toBeTruthy()
  +})
  +it('areEqual', () => {
  +  expect(funcs.areEqual(10, 1 * 10)).toBeTruthy()
  +})
  +it('lessThanNinety', () => {
  +  // y tho
  +  expect(funcs.lessThanNinety(3)).toBeTruthy()
  +})
  +it('greaterThanFifty', () => {
  +  // but y tho
  +  expect(funcs.greaterThanFifty(70)).toBeTruthy()
  +})
  +it('add', () => {
  +  // okay this is busy work
  +  expect(funcs.add(1, 2)).toBe(1 + 2)
  +})
  +it('subtract', () => {
  +  expect(funcs.subtract(2, 1)).toBe(2 - 1)
  +})
  +it('divide', () => { })
  +it('multiply', () => { })
  +it('getRemainder', () => { })
  +it('isEven', () => { })
  +it('isOdd', () => { })
  +it('square', () => { })
  +it('cube', () => { })
  +it('raiseToPower', () => { })
  +it('roundNumber', () => { })
  +it('roundUp', () => { })
  +it('addExclamationPoint', () => { })
  +it('combineNames', () => { })
  +it('getGreeting', () => { })
  +it('getRectangleArea', () => { })
  +it('getTriangleArea', () => { })
  +it('getCircleArea', () => { })
  +it('getRectangularPrismVolume', () => { })