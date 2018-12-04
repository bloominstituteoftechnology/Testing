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
  largestNumber,
} = require('./project-2');

describe('getBiggest function', () => {
  it('should return largest argument when arguements are not equal', () => {
    expect(getBiggest(1, 2)).toBe(2);
    expect(getBiggest(1, -2)).toBe(1);
  });

  it('should return second argument when arguments are equal', () => {
    expect(getBiggest(1, 1)).toBe(1);
  });

  it('should return undefined when type of either argument is not number', () => {
    expect(getBiggest(1, '1')).toBe(undefined);
    expect(getBiggest(1, [])).toBe(undefined);
    expect(getBiggest(1, {})).toBe(undefined);
    expect(getBiggest(1, null)).toBe(undefined);
    expect(getBiggest(1, false)).toBe(undefined);
    expect(getBiggest(1, NaN)).toBe(undefined);
  });

  it('should return undefined when either argument is missing', () => {
    expect(getBiggest(1)).toBe(undefined);
  });
});
