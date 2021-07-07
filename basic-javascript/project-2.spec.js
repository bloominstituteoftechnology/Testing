const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
test('which input is larger', () => {
  expect(funcs.getBiggest(4,3)).toBe(4);
})

test('which input is larger', () => {
  expect(funcs.getBiggest(3,4)).toBe(4);
})

test('which input is larger', () => {
  expect(funcs.getBiggest(4,4)).toBe('EQUAL');
})

test('correct language is returned', () => {
  expect(funcs.greeting('German')).toBe('Guten Tag!');
})

test('correct language is returned', () => {
  expect(funcs.greeting('Spanish')).toBe('Hola!');
})

test('correct language is returned', () => {
  expect(funcs.greeting()).toBe('Hello!');
})

test('if input is 10 or 5', () => {
  expect(funcs.isTenOrFive(5)).toBe(true);
})

test('if input is 10 or 5', () => {
  expect(funcs.isTenOrFive(10)).toBe(true);
})

test('if input is 10 or 5', () => {
  expect(funcs.isTenOrFive(6)).toBe(false);
})

test('if input is 10 or 5', () => {
  expect(funcs.isTenOrFive('10')).toBe(false);
})

test('if input is 10 or 5', () => {
  expect(funcs.isTenOrFive('5')).toBe(false);
})

test('a number in range 20 and 50', () => {
  expect(funcs.isInRange(20.0000001)).toBe(true);
})

test('a number in range 20 and 50', () => {
  expect(funcs.isInRange(50.0000001)).toBe(false);
})

test('a number is an integer', () => {
  expect(funcs.isInteger(4)).toBe(true);
})

test('a number is an integer', () => {
  expect(funcs.isInteger(4.5)).toBe(false);
})

test('a number is fizzbuzz (multiple of five and three)', () => {
  expect(funcs.fizzBuzz(15)).toBe('fizzbuzz');
})

test('a number is fizzbuzz (multiple of five and three)', () => {
  expect(funcs.fizzBuzz(10)).toBe('buzz');
})

test('a number is fizzbuzz (multiple of five and three)', () => {
  expect(funcs.fizzBuzz(9)).toBe('fizz');
})

test('a number is fizzbuzz (multiple of five and three)', () => {
  expect(funcs.fizzBuzz(11)).toBe(11);
})

test('a number is prime', () => {
  expect(funcs.isPrime(11)).toBe(true);
})

test('a number is prime', () => {
  expect(funcs.isPrime(10)).toBe(false);
})

test('a number is prime', () => {
  expect(funcs.isPrime(1)).toBe(false);
})

test('a number is prime', () => {
  expect(funcs.isPrime(0)).toBe(false);
})

test('functions returns first array element', () => {
  expect(funcs.returnFirst([1,2,3,4,5])).toBe(1);
})

test('functions returns last array element', () => {
  expect(funcs.returnLast([1,2,3,4,5])).toBe(5);
})

test('function returns array length', () => {
  expect(funcs.getArrayLength([1,2,3,4,5])).toBe(5);
})

test('function returns array elements incremented by one', () => {
  expect(funcs.incrementByOne([1,2,3,4,5])).toEqual([2,3,4,5,6]);
})

test('function adds an item to back of an array', () => {
  expect(funcs.addItemToArray([1,2,3,4,5],6)).toEqual([1,2,3,4,5,6]);
})

test('function adds an item to front of array', () => {
  expect(funcs.addItemToFront([2,3,4,5], 1)).toEqual([1,2,3,4,5]);
})
