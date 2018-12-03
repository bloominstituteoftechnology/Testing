const helpers = require('./project-1');

describe('multiply by 10', () => {
  test('multiply by positive & negative 10', () => {
    expect(helpers.multiplyByTen(3)).toBe(30);
    expect(helpers.multiplyByTen(-3)).toBe(-30);
  });
  test('multiply with strings', () => {
    expect(helpers.multiplyByTen('3')).toBe(30);
    expect(helpers.multiplyByTen('-3')).toBe(-30);
  });
});

test('subtract by 5', () => {
  expect(helpers.subtractFive(3)).toBe(-2);
});

test('return true if strings are same length', () => {
  expect(helpers.areSameLength('Sam', 'Eli')).toBeTruthy();
  expect(helpers.areSameLength('Sam', 'Leroy')).toBeFalsy();
});
