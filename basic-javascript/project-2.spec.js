const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
test('getBiggest', () => {
  expect(funcs.getBiggest(5, 9)).toBe(9);
  expect(funcs.getBiggest(5, 5)).toBe(5);
  expect(funcs.getBiggest(9, 5)).toBe(9);
});

test('greeting', () => {
  expect(funcs.greeting('German')).toBe('Guten Tag!');
  expect(funcs.greeting('Spanish')).toBe('Hola!');
  expect(funcs.greeting('English')).toBe('Hello!');
  expect(funcs.greeting()).toBe('Hello!');  
});

test('isTenOrFive', () => {
  expect(funcs.isTenOrFive(10)).toBe(true);
  expect(funcs.isTenOrFive(5)).toBe(true);
  expect(funcs.isTenOrFive(9)).toBe(false);
});

test('isInRange', () => {
  expect(funcs.isInRange(9)).toBe(false);
  expect(funcs.isInRange(29)).toBe(true);
  expect(funcs.isInRange(129)).toBe(false);
});

test('isInteger', () => {
  expect(funcs.isInteger(9)).toBe(true);
  expect(funcs.isInteger(9.321)).toBe(false);
});

test('fizzBuzz', () => {
  expect(funcs.fizzBuzz(90)).toBe('fizzbuzz');
  expect(funcs.fizzBuzz(80)).toBe('buzz');
  expect(funcs.fizzBuzz(9)).toBe('fizz');
  expect(funcs.fizzBuzz(7)).toBe(7);
});

test('isPrime', () => {
  expect(funcs.isPrime(90)).toBe(false);
  expect(funcs.isPrime(7)).toBe(true);
});

test('returnFirst', () => {
  expect(funcs.returnFirst([90, 42, 1863])).toBe(90);
});

test('returnLast', () => {
  expect(funcs.returnLast([90, 42, 1863])).toBe(1863);
});

test('getArrayLength', () => {
  expect(funcs.getArrayLength([90, 42, 1863])).toBe(3);
});

test('incrementByOne', () => {
  expect(funcs.incrementByOne([90, 42, 1863])).toEqual([91, 43, 1864]);
});

test('addItemToArray', () => {
  expect(funcs.addItemToArray([90, 42, 1863], 19)).toEqual([90, 42, 1863, 19]);
});

test('addItemToFront', () => {
  expect(funcs.addItemToFront([90, 42, 1863], 19)).toEqual([19, 90, 42, 1863]);
});

test('wordsToSentence', () => {
  expect(
    funcs
      .wordsToSentence(["Don't", "be", "too", "proud", "of", "this", "technological", "terror", "you've", "constructed"]))
      .toBe("Don't be too proud of this technological terror you've constructed");  
});

test('contains', () => {
  expect(funcs.contains([90, 42, 1863], 19)).toBe(false);
  expect(funcs.contains([90, 42, 1863], 42)).toBe(true);
});

test('addNumbers', () => {
  expect(funcs.addNumbers([90, 42, 1863])).toBe(1995);
});

test('averageTestScore', () => {
  expect(funcs.averageTestScore([90, 42, 98])).toBeCloseTo(76.67);
});

test('largestNumber', () => {
  expect(funcs.largestNumber([90, 42, 1863])).toBe(1863);
});
