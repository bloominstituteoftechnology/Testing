const funcs = require('./project-2');

it('should return number that is largest', () => {
  expect(funcs.getBiggest(7, 3)).toBe(7);
});

it('(biggest) should return false if a value is not provided', () => {
  expect(funcs.getBiggest(1, undefined)).toBe(false);
});

it('should return hello in language passed in', () => {
  expect(funcs.greeting('German')).toBe('Guten Tag!');
});

it('should return hello in english if provided language is not used or provided wrong', () => {
  expect(funcs.greeting(undefined)).toBe('Hello!');
});

it('should return true if number is 10 or 5', () => {
  expect(funcs.isTenOrFive(10)).toBe(true);
});

it('should return false if value is not 10 or 5', () => {
  expect(funcs.isTenOrFive(18)).toBe(false);
});

it('should return true if value is between 20 and 50', () => {
  expect(funcs.isInRange(28)).toBe(true);
});

it('should return false if value is not between 20 and 50', () => {
  expect(funcs.isInRange(11)).toBe(false);
});

it('should return true if value is an integer', () => {
  expect(funcs.isInteger(6)).toBe(true);
});

it('should return false if value is not an integer or not provided', () => {
  expect(funcs.isInteger('nine')).toBe(false);
});

it('should return string fizzbuzz if value is divisble by 5 or 3', () => {
  expect(funcs.fizzBuzz(300)).toBe('fizzbuzz');
});

it('should return value if not a number divisible by 5 or 3', () => {
  expect(funcs.fizzBuzz('yes')).toBe('yes');
});

it('should return true if value is a prime number', () => {
  expect(funcs.isPrime(467)).toBe(true);
});

it('should return false if value is not a prime', () => {
  expect(funcs.isPrime(18)).toBe(false);
});

it('should return the first value in an array', () => {
  expect(funcs.returnFirst([1, 5, 8, 8])).toBe(1);
});

it('should return false if value is not an array', () => {
  expect(funcs.returnFirst('test')).toBe(false);
});

it('should return the last value in an array', () => {
  expect(funcs.returnLast([1, 5, 8, 8])).toBe(8);
});

it('should return false if value is not an array', () => {
  expect(funcs.returnLast('test')).toBe(false);
});

it('should return the length of an array', () => {
  expect(funcs.getArrayLength([1, 5, 8, 8])).toBe(4);
});

it('should return false if value is not an array', () => {
  expect(funcs.getArrayLength('test')).toBe(false);
});

it('should increment all values in array by 1', () => {
  expect(funcs.incrementByOne([1, 5, 8, 8])).isEqual([2, 6, 9, 9]);
});

it('should return the array if any values are not a number', () => {
  expect(funcs.incrementByOne([1, 5, 'any', 8])).toBe([1, 5, 'any', 8]);
});

it('should add item to the array returning array', () => {
  expect(funcs.addItemToArray(['yes', 'no', 3], 8)).toEqual(['yes', 'no', 3, 8]);
});

it('should return array if value to add is undefined or null', () => {
  expect(funcs.addItemToArray(['yes', 'no', 3])).toEqual(['yes', 'no', 3]);
});
