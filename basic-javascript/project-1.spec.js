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
    expect(helpers.multiplyByTen(null)).toBe(0);
  });
});
