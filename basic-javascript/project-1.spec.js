const helpers = require('./project-1');

test('multiplyByTen function', () => {
  expect(helpers.multiplyByTen(1)).toBe(10);
  expect(helpers.multiplyByTen(-1)).toBe(-10);
});

test('subtractFive test', () => {
  expect(helpers.subtractFive(10)).toBe(5);
  expect(helpers.subtractFive(-5)).toBe(-10);
});

test('testing if strings are the same length', () => {
  expect(helpers.areSameLength('Trevor', 'Ash')).toBe(false);
  expect(helpers.areSameLength('Trevor', 'Ashwin')).toBe(true);
});

test('testing if strings are equal', () => {
  expect(helpers.areEqual('Trevor', 'Ashwin')).toBe(false);
  expect(helpers.areEqual('Lauren', 'Lauren')).toBe(true);
});

test('testing if number is les than 90', () => {
  expect(helpers.lessThanNinety(1)).toBe(true);
  expect(helpers.lessThanNinety(90)).toBe(false);
});

test('testing if number is greater than 50', () => {
  expect(helpers.greaterThanFifty(51)).toBe(true);
  expect(helpers.greaterThanFifty(50)).toBe(false);
});

test('add two numbers', () => {
  expect(helpers.add(4, 2)).toBe(6);
  expect(helpers.add(4, -2)).toBe(2);
});

test('subtract two numbers', () => {
  expect(helpers.subtract(4, 2)).toBe(2);
  expect(helpers.subtract(4, -2)).toBe(6);
});

test('divide two numbers', () => {
  expect(helpers.divide(4, 2)).toBe(2);
  expect(helpers.divide(4, -2)).toBe(-2);
});

test('multiply two numbers', () => {
  expect(helpers.multiply(4, 2)).toBe(8);
  expect(helpers.multiply(4, -2)).toBe(-8);
});

test('get remainder of two numbers', () => {
  expect(helpers.getRemainder(4, 2)).toBe(0);
  expect(helpers.getRemainder(4, 3)).toBe(1);
});

test('tests if a number is even', () => {
  expect(helpers.isEven(4)).toBe(true);
  expect(helpers.isEven(3)).toBe(false);
});

test('tests if a number is odd', () => {
  expect(helpers.isOdd(3)).toBe(true);
  expect(helpers.isOdd(4)).toBe(false);
});

test('tests if numbers multiplied by itself is squared', () => {
  expect(helpers.square(3)).toBe(9);
  expect(helpers.square(2)).toBe(4);
});

test('tests if numbers multiplied by itself 3 itmes is cubed', () => {
  expect(helpers.cube(3)).toBe(27);
  expect(helpers.cube(2)).toBe(8);
});

test('tests exponents of a number and exponent', () => {
  expect(helpers.raiseToPower(3, 2)).toBe(9);
  expect(helpers.raiseToPower(2, 3)).toBe(8);
});

test('rounds a number to whole number', () => {
  expect(helpers.roundNumber(3.1)).toBe(3);
  expect(helpers.roundNumber(3.5)).toBe(4);
});

test('rounds a number up to whole number', () => {
  expect(helpers.roundUp(3.1)).toBe(4);
  expect(helpers.roundUp(4.5)).toBe(5);
});

test('add excaliation to string', () => {
  expect(helpers.addExclamationPoint('Lauren')).toBe('Lauren!');
  expect(helpers.addExclamationPoint('')).toBe('!');
});

test('combines a first name and last name', () => {
  expect(helpers.combineNames('Lauren', 'Worthington')).toBe(
    'Lauren Worthington',
  );
  expect(helpers.combineNames('Percy', 'Worthington')).toBe(
    'Percy Worthington',
  );
});

test('returns name with hello before it', () => {
  expect(helpers.getGreeting('Lauren')).toBe('Hello Lauren!');
  expect(helpers.getGreeting('Percy')).toBe('Hello Percy!');
});

test('returns the first value times the second value', () => {
  expect(helpers.getRectangleArea(2, 3)).toBe(6);
  expect(helpers.getRectangleArea(3, 4)).toBe(12);
});

test('returns the first value times the second value times .5', () => {
  expect(helpers.getTriangleArea(2, 3)).toBe(3);
  expect(helpers.getTriangleArea(3, 4)).toBe(6);
});

test('returns the first value times the second value times pi', () => {
  expect(helpers.getCircleArea(3)).toBe(28.274333882308138);
  expect(helpers.getCircleArea(4)).toBe(50.26548245743669);
});

test('returns the first value times the second value', () => {
  expect(helpers.getRectangularPrismVolume(2, 3, 5)).toBe(30);
  expect(helpers.getRectangularPrismVolume(3, 4, 2)).toBe(24);
});

// start testing!
