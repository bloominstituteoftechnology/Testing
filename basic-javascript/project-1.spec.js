const helpers = require('./project-1');

test('should return value multiplied by 10', () => {
  expect(helpers.multiplyByTen(10)).toBe(100);
});

test('should return value subtracted by 5', () => {
  expect(helpers.subtractFive(10)).toBe(5);
});

test('should return whether strings are same length', () => {
  expect(helpers.areSameLength('abcd', '1234')).toBeTruthy();
  expect(helpers.areSameLength('abcd', '123')).toBeFalsy();
});

test('should return whether values are equal', () => {
  expect(helpers.areEqual(5, 5)).toBeTruthy();
  expect(helpers.areEqual(5, 2)).toBeFalsy();
});

test('should return whether value is less than ninety', () => {
  expect(helpers.lessThanNinety(100)).toBeFalsy();
  expect(helpers.lessThanNinety(3)).toBeTruthy();
});

test('should return whether value is greater than fifty', () => {
  expect(helpers.greaterThanFifty(100)).toBeTruthy();
  expect(helpers.greaterThanFifty(1)).toBeFalsy();
});

test('should return addition of values', () => {
  expect(helpers.add(1, 2)).toBe(3);
});

test('should return multiplication of values', () => {
  expect(helpers.multiply(1, 10)).toBe(10);
});

test('should return subtraction of second value from first', () => {
  expect(helpers.subtract(20, 10)).toBe(10);
});

test('should return division of first value from second value', () => {
  expect(helpers.divide(20, 10)).toBe(2);
});

test('should return remainder of first value divided by second value', () => {
  expect(helpers.getRemainder(10, 3)).toBe(1);
});

test('should return whether value is even', () => {
  expect(helpers.isEven(2)).toBeTruthy();
  expect(helpers.isEven(3)).toBeFalsy();
});

test('should return whether value is odd', () => {
  expect(helpers.isOdd(3)).toBeTruthy();
  expect(helpers.isOdd(2)).toBeFalsy();
});

test('returns square of value', () => {
  expect(helpers.square(2)).toBe(4);
});

test('returns cube of value', () => {
  expect(helpers.cube(2)).toBe(8);
});

test('returns value of first value to the power of second value', () => {
  expect(helpers.raiseToPower(2, 4)).toBe(16);
});

test('returns rounded value', () => {
  expect(helpers.roundNumber(2.3)).toBe(2);
});

test('returns value rounded up', () => {
  expect(helpers.roundUp(2.3)).toBe(3);
});

test('returns exclamation point concat to string value', () => {
  expect(helpers.addExclamationPoint('hello')).toBe('hello!');
});

test('returns full name', () => {
  expect(helpers.combineNames('joe', 'hoang')).toBe('joe hoang');
});

test('returns greeting of name', () => {
  expect(helpers.getGreeting('joe')).toBe('Hello joe!');
});

test('returns area of rectangle given height, width values', () => {
  expect(helpers.getRectangleArea(2, 3)).toBe(6);
});

test('returns area of a triangle given base, height', () => {
  expect(helpers.getTriangleArea(10, 10)).toBe(50);
});

test('returns circle area given radius', () => {
  expect(helpers.getCircleArea(3)).toBe(Math.PI * 9);
});

test('returns rectangular prism volume given length, width, height', () => {
  expect(helpers.getRectangularPrismVolume(10, 10, 5)).toBe(500);
});
