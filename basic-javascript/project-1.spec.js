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
