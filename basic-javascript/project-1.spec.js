const helpers = require('./project-1');

// start testing!
describe('multiplyByTen', () => {
  test('multiples numbers by 10', () => {
    expect(helpers.multiplyByTen(1)).toBe(10);
    expect(helpers.multiplyByTen(-1)).toBe(-10);
    expect(helpers.multiplyByTen(0)).toBe(0);
  });

  test('handles undefined values', () => {
    expect(helpers.multiplyByTen()).toBe(0);
  });

  test('handles values other than numbers', () => {
    expect(helpers.multiplyByTen('1')).toBe(10);
    expect(() => helpers.multiplyByTen('string')).toThrow();
    expect(() => helpers.multiplyByTen({})).toThrow();
    expect(() => helpers.multiplyByTen([])).toThrow();
    expect(() => helpers.multiplyByTen(null)).toThrow();
  });
});

describe('subtractFive', () => {
  test('subtracts 5 from numbers', () => {
    expect(helpers.subtractFive(5)).toBe(0);
    expect(helpers.subtractFive(0)).toBe(-5);
    expect(helpers.subtractFive(-3)).toBe(-8);
  });

  test('handles undefined', () => {
    expect(helpers.subtractFive()).toBe(-5);
  });

  test('handles values other than numbers', () => {
    expect(helpers.subtractFive('1')).toBe(-4);
    expect(() => helpers.subtractFive('string')).toThrow();
    expect(() => helpers.subtractFive({})).toThrow();
    expect(() => helpers.subtractFive([])).toThrow();
    expect(() => helpers.subtractFive(null)).toThrow();
  });
});

describe('areSameLength', () => {
  test('compares two strings', () => {
    expect(helpers.areSameLength('hello', 'hello')).toBe(true);
    expect(helpers.areSameLength('hello', 'hellow')).toBe(false);
    expect(helpers.areSameLength('', '')).toBe(true);
  });

  test('throws errors if arguments are not strings', () => {
    expect(() => helpers.areSameLength()).toThrow();
    expect(() => helpers.areSameLength([], [])).toThrow();
    expect(() => helpers.areSameLength({}, {})).toThrow();
  });
});

describe('binary operators', () => {
  test('areEqual tests for strict equality', () => {
    expect(helpers.areEqual(0, '0')).toBe(false);
    expect(helpers.areEqual(null, null)).toBe(true);
    expect(helpers.areEqual([], [])).toBe(false);
    expect(helpers.areEqual({}, {})).toBe(false);
  });

  test('lessThanNinety tests if number is less than 90', () => {
    expect(helpers.lessThanNinety(35)).toBe(true);
    expect(helpers.lessThanNinety(94)).toBe(false);
    expect(helpers.lessThanNinety(-35)).toBe(true);
  });

  test('greaterThanFifty tests if number is greater than 50', () => {
    expect(helpers.greaterThanFifty(65)).toBe(true);
    expect(helpers.greaterThanFifty(34)).toBe(false);
    expect(helpers.greaterThanFifty(-35)).toBe(false);
  });

  test('add function adds 2 numbers', () => {
    expect(helpers.add(1, 2)).toBe(3);
    expect(helpers.add(1, 2, 3)).toBe(3);
    expect(helpers.add(-5, 6)).toBe(1);
  });

  test('subtract function takes away the second argument from the first', () => {
    expect(helpers.subtract(1, 2)).toBe(-1);
    expect(helpers.subtract(7, 2)).toBe(5);
    expect(helpers.subtract(1, 2, 2)).toBe(-1);
  });

  test('divide function divides operand one by opearand two', () => {
    expect(helpers.divide(6, 2)).toBe(3);
    expect(helpers.divide(3, 2)).toBe(1.5);
    expect(helpers.divide(1, -2)).toBe(-0.5);
  });

  test('divide function throws error if divider is zero', () => {
    expect(() => helpers.divide(1, 0)).toThrow();
  });

  test('multiply returns product of two numbers', () => {
    expect(helpers.multiply(3, 2)).toBe(6);
    expect(helpers.multiply(3, -2)).toBe(-6);
    expect(helpers.multiply(3, 0)).toBe(0);
  });

  test('getRemainder returns the remainder', () => {
    expect(helpers.getRemainder(10, 5)).toBe(0);
    expect(helpers.getRemainder(10, 6)).toBe(4);
    expect(helpers.getRemainder(-11, 5)).toBe(-1);
  });
});

describe('math functions', () => {
  test('isEven returns true for even numbers', () => {
    expect(helpers.isEven(2)).toBe(true);
    expect(helpers.isEven(1)).toBe(false);
    expect(helpers.isEven(-4)).toBe(true);
  });

  test('isOdd returns true for Odd numbers', () => {
    expect(helpers.isOdd(1)).toBe(true);
    expect(helpers.isOdd(6)).toBe(false);
    expect(helpers.isOdd(-3)).toBe(true);
  });

  test('square returns the square of the passed number', () => {
    expect(helpers.square(-2)).toBe(4);
    expect(helpers.square(45)).toBe(2025);
    expect(helpers.square(-9)).toBe(81);
  });

  test('cube returns the cube of the passed number', () => {
    expect(helpers.cube(-2)).toBe(-8);
    expect(helpers.cube(45)).toBe(91125);
    expect(helpers.cube(-9)).toBe(-729);
  });

  test('raiseToPower returns the first number raised to the power of second number', () => {
    expect(helpers.raiseToPower(2, 5)).toBe(32);
    expect(helpers.raiseToPower(2, -3)).toBe(0.125);
  });

  test('roundNumber rounds the number to nearest decimal', () => {
    expect(helpers.roundNumber(4.5)).toBe(5);
    expect(helpers.roundNumber(-3.4)).toBe(-3);
    expect(helpers.roundNumber(4)).toBe(4);
  });

  test('roundUp returns an next nearest integer', () => {
    expect(helpers.roundUp(4.1)).toBe(5);
    expect(helpers.roundUp(-3.8)).toBe(-3);
  });
});

describe('string functions', () => {
  test('addExclamationPoint adds ! at the end of string', () => {
    expect(helpers.addExclamationPoint('hello')).toBe('hello!');
    expect(helpers.addExclamationPoint('')).toBe('!');
  });

  test('combineNames combines two strings', () => {
    expect(helpers.combineNames('hello', 'world')).toBe('hello world');
    expect(helpers.combineNames('hello')).toBe('hello ');
  });

  test('getGreeting prepends hello to strings', () => {
    expect(helpers.getGreeting('world')).toBe('Hello world!');
  });
});

describe('geometry functions', () => {
  test('getRectangleArea returns area of a rectangle given length and width', () => {
    expect(helpers.getRectangleArea(4, 5)).toBe(20);
    expect(helpers.getRectangleArea(-4, 5)).toBe(0);
  });

  test('getTriangleArea returns area of a triangle', () => {
    expect(helpers.getTriangleArea(3, 5)).toBe(7.5);
    expect(helpers.getTriangleArea(3, -5)).toBe(0);
  });

  test('getCircleArea returns the area of a circle', () => {
    expect(helpers.getCircleArea(7)).toBeGreaterThan(153);
    expect(helpers.getCircleArea(7)).toBeLessThan(155);
  });

  test('getRectangularPrismVolume returns that', () => {
    expect(helpers.getRectangularPrismVolume(3, 3, 3)).toBe(27);
  });
});
