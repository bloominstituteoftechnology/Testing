const helpers = require('./project-1');

// start testing!

it('multiplies a number by 10 and returns the result', () => {
  expect(helpers.multiplyByTen(10)).toEqual(100);
});

it('subtracts 5 from a number and returns the result', () => {
  expect(helpers.subtractFive(10)).toEqual(5);
});

it('returns true if two strings are the same length', () => {
  expect(helpers.areSameLength('parker', 'taylor')).toBe(true);
});

it('returns true if two values are equal', () => {
  expect(helpers.areEqual('logan', 'logan')).toBe(true);
  expect(helpers.areEqual(5 * 5, 25)).toBe(true);
  expect(helpers.areEqual(25, '25')).toBe(false);
});

it('returns true if a number is less than 90 and false if the number is greater than 90', () => {
  expect(helpers.lessThanNinety(89)).toBe(true);
  expect(helpers.lessThanNinety(90)).toBe(false);
  expect(helpers.lessThanNinety(91)).toBe(false);
});

it('returns true if a number is greater than 50 and false if less than 50', () => {
  expect(helpers.greaterThanFifty(50)).toBe(false);
  expect(helpers.greaterThanFifty(51)).toBe(true);
  expect(helpers.greaterThanFifty(40)).toBe(false);
});

it('returns the sum of two numbers', () => {
  expect(helpers.add(10, 10)).toEqual(20);
  expect(helpers.add(10, -10)).toEqual(0);
});

it('returns the difference between two numbers', () => {
  expect(helpers.subtract(10, 20)).toEqual(-10);
  expect(helpers.subtract(10, -5)).toEqual(15);
});

it('returns the result of a divided number', () => {
  expect(helpers.divide(10, 5)).toEqual(2);
  expect(helpers.divide(5, 2)).toEqual(2.5);
  expect(helpers.divide(10, 0)).toEqual(Infinity);
  expect(helpers.divide(1, 3)).toEqual(1 / 3);
});

it('returns the result of two multipied numbers', () => {
  expect(helpers.multiply(5, 2)).toEqual(10);
  expect(helpers.multiply(5, -2)).toEqual(-10);
});

it('returns the remainder of two divided numbers', () => {
  expect(helpers.getRemainder(3, 2)).toEqual(1);
  expect(helpers.getRemainder(3, -2)).toEqual(1);
});

it('returns true if a number is even and false if odd', () => {
  expect(helpers.isEven(2)).toBe(true);
  expect(helpers.isEven(3)).toBe(false);
});

it('returns true if a nu  expect(helpers.isEven(2)).toBe(true);mber is odd and false if even', () => {
  expect(helpers.isOdd(2)).toBe(false);
  expect(helpers.isOdd(3)).toBe(true);
});

it('returns the square of a number', () => {
  expect(helpers.square(2)).toEqual(4);
});

it('returns the cubed value of a number', () => {
  expect(helpers.cube(3)).toEqual(27);
});

it('returns the result of a number raised to a specified power', () => {
  expect(helpers.raiseToPower(2, 2)).toEqual(4);
  expect(helpers.raiseToPower(2, 4)).toEqual(16);
});

it('returns a rounded number', () => {
  expect(helpers.roundNumber(2.5)).toEqual(3);
  expect(helpers.roundNumber(2.4)).toEqual(2);
});

it('returns a number rounded up to the nearest number', () => {
  expect(helpers.roundUp(2.1)).toEqual(3);
});

it('adds an exclamation point to the end of a string', () => {
  expect(helpers.addExclamationPoint('hello')).toEqual('hello!');
  expect(helpers.addExclamationPoint(1234)).toEqual('1234!');
});

it('returns two names combined together', () => {
  expect(helpers.combineNames('logan', 'wright')).toEqual('logan wright');
});

it('returns a greeting to when given a string', () => {
  expect(helpers.getGreeting('logan')).toEqual('Hello logan!');
});

it('returns the area of a rectangle given two sides', () => {
  expect(helpers.getRectangleArea(5, 10)).toEqual(50);
});

it('returns the area of a circle', () => {
  expect(helpers.getCircleArea(2)).toEqual(Math.PI * 2 * 2);
});

it('returns the area of a triangle', () => {
  expect(helpers.getTriangleArea(3, 4)).toEqual(6);
});

it('returns the volume of a rectangular prism, given the three sides', () => {
  expect(helpers.getRectangularPrismVolume(2, 3, 4)).toEqual(24);
});
