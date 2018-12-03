const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
it('should return the larger number', () => {
  expect(funcs.getBiggest(2, 3)).toBe(3);
  expect(funcs.getBiggest(3, 3)).toBe(3);
  expect(funcs.getBiggest(4, 2)).toBe(4);
});

it('should return a greeting in a language', () => {
  expect(funcs.greeting('German')).toBe('Guten Tag!');
  expect(funcs.greeting('Spanish')).toBe('Hola!');
});

it('should return true if number is 10 or 5', () => {
  expect(funcs.isTenOrFive(5)).toBe(true);
  expect(funcs.isTenOrFive(10)).toBe(true);
  expect(funcs.isTenOrFive(41)).toBe(false);
});

it('should return true if number is in range', () => {
  expect(funcs.isInRange(25)).toBe(true);
  expect(funcs.isInRange(45)).toBe(true);
  expect(funcs.isInRange(607)).toBe(false);
});

it('should return true if number is an int', () => {
  expect(funcs.isInteger(3)).toBe(true);
  expect(funcs.isInteger(-3)).toBe(true);
  expect(funcs.isInteger(3.32)).toBe(false);
});

it('should return the correct option for fizzbuzz', () => {
  expect(funcs.fizzBuzz(9)).toBe('fizz');
  expect(funcs.fizzBuzz(15)).toBe('fizzbuzz');
  expect(funcs.fizzBuzz(20)).toBe('buzz');
});

it('should return true if number is prime', () => {
  expect(funcs.isPrime(2)).toBe(true);
  expect(funcs.isPrime(3)).toBe(true);
  expect(funcs.isPrime(5)).toBe(true);
  expect(funcs.isPrime(4)).toBe(false);
});

it('should return the first number of an array', () => {
  expect(funcs.returnFirst([1, 2, 3])).toBe(1);
  expect(funcs.returnFirst([54, 23, 412])).toBe(54);
});

it('should return last number in array', () => {
  expect(funcs.returnLast([1, 2, 3])).toBe(3);
});

it('should return the arrays length', () => {
  expect(funcs.getArrayLength([1, 2, 3])).toBe(3);
  expect(funcs.getArrayLength([1, 2, 3, 4, 5, 6])).toBe(6);
});

it('should return an array modified with 1 added', () => {
  expect(funcs.incrementByOne([1, 2, 3])).toEqual([2, 3, 4]);
  expect(funcs.incrementByOne([2, 3, 4])).toEqual([3, 4, 5]);
});

it('should return an array with an item added', () => {
  expect(funcs.addItemToArray([1, 2], 3)).toEqual([1, 2, 3]);
  expect(funcs.addItemToArray([1, 2], 'hello')).toEqual([1, 2, 'hello']);
  expect(funcs.addItemToArray([1, 2], true)).toEqual([1, 2, true]);
});

it('should return an array with an item added to the front', () => {
  expect(funcs.addItemToFront([1, 2], 3)).toEqual([3, 1, 2]);
  expect(funcs.addItemToFront([1, 2], 'hello')).toEqual(['hello', 1, 2]);
  expect(funcs.addItemToFront([1, 2], true)).toEqual([true, 1, 2]);
});

it('should return a string from an array of words', () => {
  expect(funcs.wordsToSentence(['it', 'should', 'be'])).toBe('it should be');
});

it('should return true if arr contains an item', () => {
  expect(funcs.contains([1, 2, 3], 3)).toBe(true);
  expect(funcs.contains([1, 2, 3], 4)).toBe(false);
});

it('should return the sum of all numbers', () => {
  expect(funcs.addNumbers([1, 2, 3])).toBe(6);
  expect(funcs.addNumbers([2, 3, 4])).toBe(9);
});

it('should return the average test score', () => {
  expect(funcs.averageTestScore([100, 100, 50, 67, 73])).toBe(78);
});

it('should return the largest int', () => {
  expect(funcs.largestNumber([1, 2, 3, 4, 65])).toBe(65);
});
