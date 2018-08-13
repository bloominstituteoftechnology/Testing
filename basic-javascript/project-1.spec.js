const helpers = require('./project-1');

// start testing!
test('multiply input by 10', () => {
  expect(helpers.multiplyByTen(9)).toBe(90);
});

test('multiply input by 10', () => {
  expect(helpers.multiplyByTen(0)).toBe(0);
})

test('multiply input by 10', () => {
  expect(helpers.multiplyByTen(1000000)).toBe(10000000);
})

test('subtracts input by 5', () => {
  expect(helpers.subtractFive(10)).toBe(5);
})

test('subtracts input by 5', () => {
  expect(helpers.subtractFive(5)).toBe(0);
})

test('subtracts input by 5', () => {
  expect(helpers.subtractFive(0)).toBe(-5);
});

it('checks if two strings are the same length', () => {
  expect(helpers.areSameLength('coke','soda')).toBe(true);
})

test('checks if two strings are the same length', () => {
  expect(helpers.areSameLength('coke', 'pepsi')).toBe(false);
})

test('checks if two numbers are equal', () => {
  expect(helpers.areEqual(2,2)).toBe(true);
})

test('checks if two numbers are equal', () => {
  expect(helpers.areEqual(2,3)).toBe(false);
})

test('checks if two numbers are equal', () => {
  expect(helpers.areEqual(2,'2')).toBe(false)
})

test('checks if two numbers are equal', () => {
  expect(helpers.areEqual('2','2')).toBe(true);
})

test('checks if a number is less than 90', () => {
  expect(helpers.lessThanNinety(89.99999999999)).toBe(true);
})

test('checks if a number is less than 90', () => {
  expect(helpers.lessThanNinety(90.000000000001)).toBe(false);
})

test('checks if a number is greater than 50', () => {
  expect(helpers.greaterThanFifty(50.0000000001)).toBe(true);
})

test('checks if a number is greater than 50', () => {
  expect(helpers.greaterThanFifty(49.999999999999)).toBe(false);
})

test('sum of two numbers', () => {
  expect(helpers.add(2,2)).toBe(4);
})

test('sum of two numbers', () => {
  expect(helpers.add(2,5)).not.toBe(6);
})

test('difference of two numbers', () => {
  expect(helpers.subtract(2,5)).toBe(-3);
})

test('product of two numbers', () => {
  expect(helpers.multiply(2,5)).toBe(10);
})

test('product of two numbers', () => {
  expect(helpers.multiply(2,-5)).toBe(-10);
})

test('product of two numbers', () => {
  expect(helpers.multiply(-2,-5)).toBe(10);
})

test('remainder of two numbers', () => {
  expect(helpers.getRemainder(2,5)).toBe(2);
})

test('remainder of two numbers', () => {
  expect(helpers.getRemainder(5,5)).toBe(0);
})

test('remainder of two numbers', () => {
  expect(helpers.getRemainder(6,5)).toBe(1);
})
