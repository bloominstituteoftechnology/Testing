const helpers = require('./project-1');

// start testing!

it('should multiply passed num by ten', () => {
  expect(helpers.multiplyByTen(6)).toEqual(60)
})
 it('should subtract five from passed num', () => {
  expect(helpers.subtractFive(10)).toEqual(5)
})
 it('should return whether passed strings are same length', () => {
  expect(helpers.areSameLength('five', 'nine')).toEqual(true)
})
 it('should return whether passed vals are strict equal', () => {
  expect(helpers.areEqual(9, 9)).toEqual(true)
})
it ('should return false if different types', () => {
  expect(helpers.areEqual(9, '9')).toEqual(false)
})
 it('should return whether passed num is less than ninety', () => {
  expect(helpers.lessThanNinety(85)).toEqual(true)
})
 it('should return whether passed num is greater than fifty', () => {
  expect(helpers.greaterThanFifty(61)).toEqual(true)
})
 it('should return sum of passed nums', () => {
  expect(helpers.add(50, 50)).toEqual(100)
})
 it('should return second num subracted from first', () => {
  expect(helpers.subtract(100, 50)).toEqual(50)
})
 it('should return quotient of passed nums', () => {
  expect(helpers.divide(100, 25)).toEqual(4)
})
 it('should multiply passed nums', () => {
  expect(helpers.multiply(5, 5)).toEqual(25)
})
 it('should return the remainder of num one divided by two', () => {
  expect(helpers.getRemainder(9, 2)).toEqual(1)
})
 it('should return true if the number is even', () => {
  expect(helpers.isEven(2)).toEqual(true)
})
 it('should return true if number is odd', () => {
  expect(helpers.isOdd(1)).toEqual(true)
})
 it('should return the square of the number passed in', () => {
  expect(helpers.square(3)).toEqual(9)
})
 it('should return the cubical of the argument passed in', () => {
  expect(helpers.cube(3)).toEqual(27)
})
 it('should return num raised to exponent', () => {
  expect(helpers.raiseToPower(3, 3)).toEqual(27)
})
 it('should round the given number', () => {
  expect(helpers.roundNumber(9.4)).toEqual(9)
})
 it('should add exclamtion point to end of string', () => {
  expect(helpers.addExclamationPoint('hello')).toEqual('hello!')
})
 it('should return both names in one statemnt', () => {
  expect(helpers.combineNames('kyran', 'mccann')).toEqual('kyran mccann')
})
 it('should return a greeting', () => {
  expect(helpers.getGreeting('kyran')).toEqual('Hello kyran!')
})
 it('should return the area of the rectangle', () => {
  expect(helpers.getRectangleArea(10, 2)).toEqual(20)
})
 it('should return the area of the triangle', () => {
  expect(helpers.getTriangleArea(10, 5)).toEqual(25)
})
 it('should return the area of the cirle', () => {
  expect(helpers.getCircleArea(10)).toEqual(314.1592653589793)
})
 it('should return the volume of the rectangular prism', () => {
  expect(helpers.getRectangularPrismVolume(10, 10, 10)).toEqual(1000)
})
