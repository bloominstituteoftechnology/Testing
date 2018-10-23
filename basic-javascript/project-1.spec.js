const helpers = require('./project-1');

// start testing!
it('should multiply by ten', () => {
  const expected = 110
  const actual = helpers.multiplyByTen(11)
  expect(actual).toBe(expected);
})

it('should subtract five', () => {
  const expected = 12
  const actual = helpers.subtractFive(17)
  expect(actual).toBe(expected);
})

it('should return true if both are same length', () => {
  const expected = true
  const actual = helpers.areSameLength('four', 'nine')
  expect(actual).toBe(expected);
})

it('should return true if are equal', () => {
  const expected = true
  const actual = helpers.areEqual((5+5), (5*2))
  expect(actual).toBe(expected);
})

it('should return true if  num < 90', () => {
  const expected = true
  const actual = helpers.lessThanNinety(-89)
  expect(actual).toBe(expected);
})

it('should return true if num > 50', () => {
  const expected = true
  const actual = helpers.greaterThanFifty(51)
  expect(actual).toBe(expected);
})

it('should add both numbers', () => {
  const expected = 12
  const actual = helpers.add(5, 7)
  expect(actual).toBe(expected);
})

it('should subtract second number from first', () => {
  const expected = 7
  const actual = helpers.subtract(12, 5)
  expect(actual).toBe(expected);
})

it('should divide first number by the second', () => {
  const expected = 7
  const actual = helpers.divide(21, 3)
  expect(actual).toBe(expected);
})

it('should multiply both numbers', () => {
  const expected = 35
  const actual = helpers.multiply(5, 7)
  expect(actual).toBe(expected);
})

it('should get the remainder of a / b', () => {
  const expected = 1
  const actual = helpers.getRemainder(22, 3)
  expect(actual).toBe(expected);
})

it('should return true if even', () => {
  const expected = false
  const actual = helpers.isEven(7)
  expect(actual).toBe(expected);
})

it('should return true if odd', () => {
  const expected = true
  const actual = helpers.isOdd(7)
  expect(actual).toBe(expected);
})

it('should square the number', () => {
  const expected = 49
  const actual = helpers.square(7)
  expect(actual).toBe(expected);
})

it('should cube the number', () => {
  const expected = 343
  const actual = helpers.cube(7)
  expect(actual).toBe(expected);
})

it('should raise first number to the power of the second', () => {
  const expected = 2401
  const actual = helpers.raiseToPower(7, 4)
  expect(actual).toBe(expected);
})

it('should round the Number', () => {
  const expected = 11
  const actual = helpers.roundNumber(11.17)
  expect(actual).toBe(expected);
})

it('should round up', () => {
  const expected = 11
  const actual = helpers.roundUp(10.001)
  expect(actual).toBe(expected);
})

it('should add exclamation point to end', () => {
  const expected = 'what?!'
  const actual = helpers.addExclamationPoint('what?')
  expect(actual).toBe(expected);
})

it('should combine first and last name', () => {
  const expected = 'Luisan Suarez'
  const actual = helpers.combineNames('Luisan', 'Suarez')
  expect(actual).toBe(expected);
})

it('should greet you kindly but effusively', () => {
  const expected = 'Hello Zack!'
  const actual = helpers.getGreeting('Zack')
  expect(actual).toBe(expected);
})

it('should get the area of the rectangle', () => {
  const expected = 110
  const actual = helpers.getRectangleArea(11, 10)
  expect(actual).toBe(expected);
})

it('should get the area of a triangle', () => {
  const expected = 55
  const actual = helpers.getTriangleArea(11, 10)
  expect(actual).toBe(expected);
})

it('should get the area of a circle', () => {
  const expected = Math.PI * 9
  const actual = helpers.getCircleArea(3)
  expect(actual).toBe(expected);
})

it('should get the volume of a rectangular prism', () => {
  const expected = 330
  const actual = helpers.getRectangularPrismVolume(11, 10, 3)
  expect(actual).toBe(expected);
})
