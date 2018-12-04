const {
  getBiggest,
  greeting,
  isTenOrFive,
  isInRange,
  isInteger,
  fizzBuzz,
  isPrime,
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber
} = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

test('Get Biggest', () => {
  expect(getBiggest(8, 10)).toBe(10);
  expect(getBiggest(3, 3)).toBe(3);
  expect(getBiggest(5, 2)).toBe(5);
});

test('Greeting', () => {
  expect(greeting('German')).toBe('Guten Tag!');
  expect(greeting('Spanish')).toBe('Hola!');
  expect(greeting('English')).toBe('Hello!');
});

test('Is Ten of Five', () => {
  expect(isTenOrFive(5)).toBe(true);
  expect(isTenOrFive(10)).toBe(true);
  expect(isTenOrFive(4)).toBe(false);
});

test('Is In Range', () => {
  expect(isInRange(30)).toBe(true);
  expect(isInRange(1)).toBe(false);
  expect(isInRange(58)).toBe(false);
});

test('isInteger', () => {
  expect(isInteger(1)).toBe(true);
  expect(isInteger(1.5)).toBe(false);
});

test('fizzBuzz', () => {
  expect(fizzBuzz(30)).toBe('fizzbuzz');
  expect(fizzBuzz(5)).toBe('buzz');
  expect(fizzBuzz(3)).toBe('fizz');
  expect(fizzBuzz(1)).toBe(1);
});

test('Is Prime', () => {
  expect(isPrime(7)).toBe(true);
  expect(isPrime(8)).toBe(false);
});

test('Return First', () => {
  expect(returnFirst([1, 2, 3])).toBe(1);
  expect(returnFirst(['Jonas', 'Henry', 'Norah', 'Gemma', 'Evan'])).toBe(
    'Jonas'
  );
});

test('Return Last', () => {
  expect(returnLast([1, 2, 3])).toBe(3);
  expect(returnLast(['Jonas', 'Henry', 'Norah', 'Gemma', 'Evan'])).toBe('Evan');
});

test('Get Array Length', () => {
  expect(getArrayLength(['Jonas', 'Henry', 'Norah', 'Gemma', 'Evan'])).toBe(5);
});
