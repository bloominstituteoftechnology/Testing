const helpers = require('./project-1');

it('should multiply number by 10', () => {
  expect(helpers.multiplyByTen(5)).toBe(50);
});

it('(multby10) should return false if value is not a number', () => {
  expect(helpers.multiplyByTen(false)).toBe(false);
});

it('should remove 5 from number', () => {
  expect(helpers.subtractFive(7)).toBe(2);
});

it('(sub5) should return false if value is not a number', () => {
  expect(helpers.subtractFive(null)).toBe(false);
});

it('should return true if two strings are same length', () => {
  expect(helpers.areSameLength('test', 'yes!')).toBe(true);
});

it('should return false if two strings are different length', () => {
  expect(helpers.areSameLength('a really long string', 'shortStr')).toBe(false);
});

it('should return false if two numbers not equal', () => {
  expect(helpers.areEqual(8-2, 8-5)).toBe(false);
});

//example of pass, but shouldn't
it('(areEqual) should return false if one value is not a number', () => {
  expect(helpers.areEqual(true, 1)).toBe(false);
});

it('should return true if less than 90', () => {
  expect(helpers.lessThanNinety(45)).toBe(true);
});

it('should return false if more than 90', () => {
  expect(helpers.lessThanNinety(180)).toBe(false);
});
