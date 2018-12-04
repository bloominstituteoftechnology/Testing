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
  expect(getBiggest(8, 10)).toBe(6);
  expect(getBiggest(3, 3)).toBe(3)
  expect(getBiggest(5, 2)).toBe(5)
});

test('Greeting', () => {});
