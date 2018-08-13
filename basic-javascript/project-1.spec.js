const helpers = require('./project-1')
it('should multiply the number passed by ten', () => {
  expect(helpers.multiplyByTen(4)).toEqual(40)
})

it('the number passed should be subtracted by 5', () => {
  expect(helpers.subtractFive(10)).toEqual(5)
})

it('both string arguments should be the same length', () => {
  expect(helpers.areSameLength(10, 10)).toEqual(true)
})

it('both values have to strictly be equal to each other', () => {
  expect(helpers.areEqual(100, 100)).toEqual(true)
})

it('expects the argument passed in to be less then 90', () => {
  expect(helpers.lessThanNinety(89)).toEqual(true)
})

it('expects argument to be greater than 50', () => {
  expect(helpers.greaterThanFifty(51)).toEqual(true)
})

it('the addition of both paramaters passed in', () => {
  expect(helpers.add(100, 100)).toEqual(200)
})

it('the subtraction of both values passed in', () => {
  expect(helpers.subtract(100, 100)).toEqual(0)
})

it('the division of both numbers passed in', () => {
  expect(helpers.divide(50, 2)).toEqual(25)
})

it('the multiplication of both arguments passed in', () => {
  expect(helpers.multiply(5, 5)).toEqual(25)
})

it('the modulus of the two arguments passed in', () => {
  expect(helpers.getRemainder(5, 2)).toEqual(1)
})

it('should return true if the number is even', () => {
  expect(helpers.isEven(2)).toEqual(true)
})

it('should return true if number is odd', () => {
  expect(helpers.isOdd(1)).toEqual(true)
})

it('should return the square of the number passed in', () => {
  expect(helpers.square(2)).toEqual(4)
})

it('should return the cubical of the argument passed in', () => {
  expect(helpers.cube(3)).toEqual(27)
})

it('should return the result of the given exponent to the given number', () => {
  expect(helpers.raiseToPower(2, 3)).toEqual(8)
})

it('should round the given number', () => {
  expect(helpers.roundNumber(4.4)).toEqual(4)
})

it('the given string should have an exclamation point at the end', () => {
  expect(helpers.addExclamationPoint('hello')).toEqual('hello!')
})

it('should return both first & last name together as one string', () => {
  expect(helpers.combineNames('luis', 'martinez')).toEqual('luis martinez')
})

it('should return the string saying hello plus the passed in argument', () => {
  expect(helpers.getGreeting('luis')).toEqual('Hello luis!')
})

it('should return the result of the length & width multiplied together', () => {
  expect(helpers.getRectangleArea(50, 2)).toEqual(100)
})

it('should return the result of the multiplication of 0.5 * (given base) * (given height)', () => {
  expect(helpers.getTriangleArea(10, 10)).toEqual(50)
})

it('should return the area of a given radius', () => {
  expect(helpers.getCircleArea(10, 10)).toEqual(314.1592653589793)
})

it('should return the multiplaication result of width times height times length', () => {
  expect(helpers.getRectangularPrismVolume(10, 10, 10)).toEqual(1000)
})
// start testing!
