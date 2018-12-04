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

  it('should return false if arg is not 10 or 5', () => {
    expect(isTenOrFive(1)).toBe(false);
    expect(isTenOrFive(500)).toBe(false);
    expect(isTenOrFive('10')).toBe(false);
    expect(isTenOrFive('5')).toBe(false);
    expect(isTenOrFive([5])).toBe(false);
    expect(isTenOrFive({ key: 5 })).toBe(false);
    expect(isTenOrFive(null)).toBe(false);
    expect(isTenOrFive(true)).toBe(false);
    expect(isTenOrFive(NaN)).toBe(false);
  });
});

describe('isInRange function', () => {
  it('should return true if arg is between 20 and 50', () => {
    expect(isInRange(21)).toBe(true);
    expect(isInRange(49)).toBe(true);
  });

  it('should return false if arg is not between 20 and 50', () => {
    expect(isInRange(1)).toBe(false);
    expect(isInRange(500)).toBe(false);
    expect(isInRange('5')).toBe(false);
    expect(isInRange([5])).toBe(false);
    expect(isInRange({ key: 5 })).toBe(false);
    expect(isInRange(null)).toBe(false);
    expect(isInRange(true)).toBe(false);
    expect(isInRange(NaN)).toBe(false);
  });
});

describe('isInteger function', () => {
  it('should return true if arg is between 20 and 50', () => {
    expect(isInteger(1)).toBe(true);
    expect(isInteger(0)).toBe(true);
    expect(isInteger(-1)).toBe(true);
  });

  it('should return false if arg is not between 20 and 50', () => {
    expect(isInteger(1.1)).toBe(false);
    expect(isInteger(0.1)).toBe(false);
    expect(isInteger('5')).toBe(false);
    expect(isInteger([5])).toBe(false);
    expect(isInteger({ key: 5 })).toBe(false);
    expect(isInteger(null)).toBe(false);
    expect(isInteger(true)).toBe(false);
    expect(isInteger(NaN)).toBe(false);
  });
});
