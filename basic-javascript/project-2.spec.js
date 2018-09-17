const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
test('returns larger value given two values', () => {
  expect(funcs.getBiggest(10, 20)).toBe(20);
});

test('returns greeting based on input', () => {
  expect(funcs.greeting('German')).toBe('Guten Tag!');
  expect(funcs.greeting('Spanish')).toBe('Hola!');
  expect(funcs.greeting('Gibberish')).toBe('Hello!');
});

test('returns whether value is ten or five', () => {
  expect(funcs.isTenOrFive(10)).toBeTruthy();
  expect(funcs.isTenOrFive(3)).toBeFalsy();
});

test('returns whether num is between 20 and 50, exclusive', () => {
  expect(funcs.isInRange(35)).toBeTruthy();
  expect(funcs.isInRange(1)).toBeFalsy();
});

test('returns if value is integer', () => {
  expect(funcs.isInteger(345)).toBeTruthy();
  expect(funcs.isInteger(23.2)).toBeFalsy();
});

test('returns fizz if value is divisible by 3, buzz if value is divisible by 5', () => {
  expect(funcs.fizzBuzz(15)).toBe('fizzbuzz');
  expect(funcs.fizzBuzz(3)).toBe('fizz');
  expect(funcs.fizzBuzz(25)).toBe('buzz');
});

test('returns whether number is prime', () => {
  expect(funcs.isPrime(7)).toBeTruthy();
  expect(funcs.isPrime(21)).toBeFalsy();
});

test('returns first value of array', () => {
  expect(funcs.returnFirst([1, 2, 3, 4])).toBe(1);
});

test('returns last value of array', () => {
  expect(funcs.returnLast([1, 2, 3, 4])).toBe(4);
});

test('returns length of array', () => {
  expect(funcs.getArrayLength([1, 2, 3, 4])).toBe(4);
});

test('returns arr elements incremented by 1', () => {
  expect(funcs.incrementByOne([1, 2, 3, 4])).toEqual([2, 3, 4, 5]);
});

test('returns arr with added item', () => {
  expect(funcs.addItemToArray([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4, 5]);
});

test('returns arr with added item to the front', () => {
  expect(funcs.addItemToFront([1, 2, 3, 4], 0)).toEqual([0, 1, 2, 3, 4]);
});

test('returns a sentence from a words array', () => {
  expect(funcs.wordsToSentence(['hello', 'testing'])).toBe('hello testing');
});

test('returns whether an array contains an item', () => {
  expect(funcs.contains([1, 2, 3, 4], 2)).toBeTruthy();
  expect(funcs.contains([1, 2, 3, 4], 100)).toBeFalsy();
});

test('returns sum of number array', () => {
  expect(funcs.addNumbers([1, 2, 3, 4, 5])).toBe(15);
});

test('returns avg of number array', () => {
  expect(funcs.averageTestScore([100, 90, 95])).toBe(95);
  expect(funcs.averageTestScore([100, 90, 90])).toBe(280 / 3);
});

test('returns largest number of number array', () => {
  expect(funcs.largestNumber([100, 200, 1, 2])).toBe(200);
});
