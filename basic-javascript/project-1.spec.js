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
