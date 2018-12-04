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

describe('greeting function', () => {
  it('should return greeting in argument language', () => {
    expect(greeting('German')).toBe('Guten Tag!');
    expect(greeting('Spanish')).toBe('Hola!');
  });

  it('should return "Hello!" when no argument is passed', () => {
    expect(greeting()).toBe('Hello!');
  });

  it('should return "Hello!" when type of argument is not string', () => {
    expect(greeting(1)).toBe('Hello!');
    expect(greeting([])).toBe('Hello!');
    expect(greeting({})).toBe('Hello!');
    expect(greeting(null)).toBe('Hello!');
    expect(greeting(false)).toBe('Hello!');
    expect(greeting(NaN)).toBe('Hello!');
  });
});

describe('isTenOrFive function', () => {
  it('should return true if arg is 10 or 5', () => {
    expect(isTenOrFive(10)).toBe(true);
    expect(isTenOrFive(5)).toBe(true);
  });
