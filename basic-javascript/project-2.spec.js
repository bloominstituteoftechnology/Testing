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

test('Increment By One', () => {
  expect(incrementByOne([5, 6, 7, 8])).toEqual([6, 7, 8, 9]);
});

test('Add Item To Array', () => {
  expect(addItemToArray(['Jonas', 'Henry', 'Norah', 'Gemma'], 'Evan')).toEqual([
    'Jonas',
    'Henry',
    'Norah',
    'Gemma',
    'Evan'
  ]);
  expect(addItemToArray([1, 2, 3], 0)).toEqual([1, 2, 3, 0]);
});

test('Add Item To Front', () => {
  expect(addItemToFront(['Henry', 'Norah', 'Gemma', 'Evan'], 'Jonas')).toEqual([
    'Jonas',
    'Henry',
    'Norah',
    'Gemma',
    'Evan'
  ]);
  expect(addItemToFront([1, 2, 3], 0)).toEqual([0, 1, 2, 3]);
});

test('Words To Sentence', () => {
  expect(wordsToSentence(['This', 'is', 'a', 'sentence'])).toEqual(
    'This is a sentence'
  );
});

test('Contains', () => {
  const family = ['Jonas', 'Henry', 'Norah', 'Gemma', 'Evan'];
  expect(contains(family, 'Gemma')).toEqual(true);
  expect(contains(family, 'Natalie')).toEqual(false);
});

test('Add Numbers', () => {
  expect(addNumbers([1, 2, 3, 4])).toEqual(10);
});

test('Average Test Score', () => {
  const scores = [90, 85, 67, 100];
  const avg = 85.5;
  expect(averageTestScore(scores)).toEqual(avg);
});

test('Largest Number', () => {
  expect(largestNumber([3, 60, 105, 52, 8, 10])).toEqual(105);
});
