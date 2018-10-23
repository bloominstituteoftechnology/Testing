const funcs = require('./project-2');

test('gets biggest value from 2 numbers', () => {
  expect(funcs.getBiggest(2, 1)).toBe(2);
  expect(funcs.getBiggest(200, -1)).toBe(200);
});

test('respond Hello in passed in language', () => {
  expect(funcs.greeting('German')).toBe('Guten Tag!');
  expect(funcs.greeting('Spanish')).toBe('Hola!');
});

test('only return true if number is 10 or 5', () => {
  expect(funcs.isTenOrFive(5)).toBe(true);
  expect(funcs.isTenOrFive(-10)).toBe(false);
});

test('only return true if number between 50 and 20', () => {
  expect(funcs.isInRange(50)).toBe(false);
  expect(funcs.isInRange(25)).toBe(true);
});

test('only return true if number is int', () => {
  expect(funcs.isInteger(5)).toBe(true);
  expect(funcs.isInteger(5.2)).toBe(false);
});

test('returns fiz or buzz or fizbuzz', () => {
  expect(funcs.fizzBuzz(15)).toBe('fizzbuzz');
  expect(funcs.fizzBuzz(10)).toBe('buzz');
});

test('only return true if number is prime', () => {
  expect(funcs.isPrime(5)).toBe(true);
  expect(funcs.isPrime(8)).toBe(false);
});

test('return first value in array', () => {
  expect(funcs.returnFirst([])).toBe(undefined);
  expect(funcs.returnFirst(['1', '2'])).toBe('1');
});

test('return last value in array', () => {
  expect(funcs.returnLast([])).toBe(undefined);
  expect(funcs.returnLast(['1', '2'])).toBe('2');
});

test('return length of array', () => {
  expect(funcs.getArrayLength([])).toBe(0);
  expect(funcs.getArrayLength(['1', '2'])).toBe(2);
});

test('return each value by 1', () => {
  expect(funcs.incrementByOne([])).toEqual([]);
  expect(funcs.incrementByOne(['1', '2'])).toEqual([2, 3]);
  expect(funcs.incrementByOne(['hi', 'hi2'])).toEqual([NaN, NaN]);
});

test('add item to array', () => {
  expect(funcs.addItemToArray([], 1)).toEqual([1]);
  expect(funcs.addItemToArray(['1', '2'], 4)).toEqual(['1', '2', 4]);
});

test('add item to front of array', () => {
  expect(funcs.addItemToFront([], 1)).toEqual([1]);
  expect(funcs.addItemToFront(['1', '2'], 4)).toEqual([4, '1', '2']);
});

test('creates sentence out of words array passed in', () => {
  expect(funcs.wordsToSentence([])).toEqual('');
  expect(funcs.wordsToSentence(['Hello', 'Yo'])).toEqual('Hello Yo');
});

test('returns true if item is apart of array', () => {
  expect(funcs.contains(['1', '2'], '1')).toEqual(true);
  expect(funcs.contains(['Hello', 'Yo'], '1')).toEqual(false);
});

test('adds numbers in array', () => {
  expect(funcs.addNumbers([1, 2, 3])).toEqual(6);
  expect(funcs.addNumbers([1, 2, 'Hi'])).toEqual('3Hi');
});

test('returns average score', () => {
  expect(funcs.averageTestScore([1, 2, 3])).toEqual(2);
  expect(funcs.averageTestScore([1, 2, 3, 4])).toEqual(2.5);
});

test('returns largest number in array', () => {
  expect(funcs.largestNumber([1, 2, 3])).toEqual(3);
  expect(funcs.largestNumber([1, 2, 3, 4])).toEqual(4);
});
