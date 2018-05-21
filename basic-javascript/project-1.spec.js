const funcs = require('./project-1');

// write your tests here
it('runs the tests', () => { })

it('multiplies a number by ten', () => {
  expect(funcs.multiplyByTen(10)).toBe(100)
})

it('subtracts five from a number', () => {
  expect(funcs.subtractFive(5)).toBe(0)
})

it('checks that two strings are of equal length', () => {
  expect(funcs.areSameLength('a', 'b')).toBeTruthy()
  expect(funcs.areSameLength('a', 'ab')).toBeFalsy()
})

it('checks the exact equality of two inputs', () => {
  expect(funcs.areEqual(1, 1)).toBeTruthy()
  expect(funcs.areEqual('a', 'b')).toBeFalsy()
})

it('checks whether a number is less than ninety', () => {
  expect(funcs.lessThanNinety(89)).toBeTruthy()
  expect(funcs.lessThanNinety(91)).toBeFalsy()
})

it('adds two numbers together', () => {
  expect(funcs.add(1, 2)).toBe(3)
})

it('subtracts one number from another', () => {
  expect(funcs.subtract(1, 2)).toBe(-1)
})

it('divides one number by another', () => {
  expect(funcs.divide(2, 2)).toBe(1)
})

it('multiplies one number by another', () => {
  expect(funcs.multiply(10,10)).toBe(100)
})

it('calculates the remainder of modulus division of two numbers', () => {
  expect(funcs.getRemainder(1, 2)).toBe(1)
})

it('determines whether a number is even', () => {
  expect(funcs.isEven(2)).toBeTruthy()
  expect(funcs.isEven(1)).toBeFalsy()
})

it('determines whether a number is odd', () => {
  expect(funcs.isOdd(2)).toBeFalsy()
  expect(funcs.isOdd(1)).toBeTruthy()
})

it('squares a number', () => {
  expect(funcs.square(2)).toBe(4)
})

it('cubes a number', () => {
  expect(funcs.cube(2)).toBe(8)
})

it('raises a number to a power', () => {
  expect(funcs.raiseToPower(2, 4)).toBe(16)
})

it('rounds a number to the nearest integer', () => {
  expect(funcs.roundNumber(0.5)).toBe(1)
  expect(funcs.roundNumber(0.4)).toBe(0)
})

it('rounds a number up to the nearest integer', () => {
  expect(funcs.roundUp(0.5)).toBe(1)
  expect(funcs.roundUp(0.01)).toBe(1)
})

it('adds an exclamation point to a string', () => {
  expect(funcs.addExclamationPoint('hello')).toBe('hello!')
})

it('combines a first name and a last name into a single string', () => {
  expect(funcs.combineNames('jared', 'cuffe')).toBe('jared cuffe')
})

it('takes a name and returns a greeting', () => {
  expect(funcs.getGreeting('jared')).toBe('Hello jared!')
})

it('calculates the area of a rectangle given length and width', () => {
  expect(funcs.getRectangleArea(2,4)).toBe(8)
})

it('calculates the area of a triangle given base and height', () => {
  expect(funcs.getTriangleArea(2, 4)).toBe(4)
})

it('calculates the area of a circle given the radius', () => {
  expect(funcs.getCircleArea(2)).toBe(Math.PI * 4)
})

it('calculates the volume of a prism given length, width, and height', () => {
  expect(funcs.getRectangularPrismVolume(1, 2, 3)).toBe(6)
})