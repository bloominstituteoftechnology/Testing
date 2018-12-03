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
  const x = 8;
  const y = 4;
  const result = 8;
  expect(getBiggest(x, y)).toBe(result);
});

test('Greeting', () => {});
