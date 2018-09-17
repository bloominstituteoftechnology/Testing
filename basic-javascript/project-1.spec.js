const helpers = require('./project-1');

// start testing!

it('should run project1 tests', () => {
  expect(helpers.multiplyByTen(2)).toBe(20);
  expect(helpers.multiplyByTen('sister')).toBe(false);
  expect(helpers.multiplyByTen('5')).toBe(50);
  expect(helpers.multiplyByTen(true)).toBe(false);

  expect(helpers.subtractFive(7)).toBe(2);
  expect(helpers.subtractFive('9')).toBe(4);
  expect(helpers.subtractFive('brother')).toBe(false);
  expect(helpers.subtractFive(true)).toBe(false);

  expect(helpers.areSameLength('sister', 'mother')).toBe(true);
  expect(helpers.areSameLength('sister', 'brother')).toBe(false);
  expect(helpers.areSameLength(1, 'I')).toBe(true);
  expect(helpers.areSameLength(false, 'false')).toBe(true);

  expect(helpers.areEqual(1, '1')).toBe(true);
  expect(helpers.areEqual(true, 'true')).toBe(true);
  expect(helpers.areEqual(undefined, NaN)).toBe(false);

  expect(helpers.lessThanNinety('50')).toBe(true);
  expect(helpers.lessThanNinety(87)).toBe(true);
  expect(helpers.lessThanNinety('fifty')).toBe(false);
  expect(helpers.lessThanNinety(true)).toBe(false);

  expect(helpers.greaterThanFifty(60)).toBe(true);
  expect(helpers.greaterThanFifty('80')).toBe(true);
  expect(helpers.greaterThanFifty('ninety')).toBe(false);
  expect(helpers.greaterThanFifty(true)).toBe(false);

  expect(helpers.add(1, 2)).toBe(3);
  expect(helpers.add('1', 7)).toBe(8);
  expect(helpers.add(true, '5')).toBe(5);
  expect(helpers.add('hello', true)).toBe(false);

  expect(helpers.subtract(5, '2')).toBe(3);
  expect(helpers.subtract('3', 9)).toBe(-6);
  expect(helpers.subtract('love', 'hate')).toBe(false);
  expect(helpers.subtract('money', 2000)).toBe(false);
  expect(helpers.subtract(2000, 'money')).toBe(2000);

  expect(helpers.divide(6, '3')).toBe(2);
  expect(helpers.divide(2, 4)).toBeCloseTo(.5, 5);
  expect(helpers.divide('6', true)).toBe(6);
  expect(helpers.divide(true, '6')).toBe(false);
  expect(helpers.divide('mother', 6)).toBe(false);

  expect(helpers.multiply)
})
