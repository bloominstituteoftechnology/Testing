const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('getBiggest', () => {
  test('returns the biggest of two numbers', () => {
    expect(funcs.getBiggest(3, 5)).toBe(5);
    expect(funcs.getBiggest(-2, -2)).toBe(-2);
  });
});

describe('greeting', () => {
  test('returns greeting in different languages', () => {
    expect(funcs.greeting('German')).toBe('Guten Tag!');
    expect(funcs.greeting('Spanish')).toBe('Hola!');
    expect(funcs.greeting('English')).toBe('Hello!');
  });
});

describe('is function helpers', () => {
  test('isTenOrFive returns true for 10 and 5 but not for other numbers', () => {
    expect(funcs.isTenOrFive(10)).toBe(true);
    expect(funcs.isTenOrFive(5)).toBe(true);
    expect(funcs.isTenOrFive(-10)).toBe(false);
    expect(funcs.isTenOrFive(-5)).toBe(false);
  });

  test('isInRange returns if a number is in range or not', () => {
    expect(funcs.isInRange(30)).toBe(true);
    expect(funcs.isInRange(80)).toBe(false);
    expect(funcs.isInRange(50)).toBe(false);
  });

  test('isInteger returns true for integers', () => {
    expect(funcs.isInteger(5)).toBe(true);
    expect(funcs.isInteger(-3)).toBe(true);
    expect(funcs.isInteger(5.1)).toBe(false);
  });

  test('isPrime returns true for prime numbers', () => {
    expect(funcs.isPrime(5)).toBe(true);
    expect(funcs.isPrime(11)).toBe(true);
    expect(funcs.isPrime(19)).toBe(true);
  });
});

describe('fizzBuzz', () => {
  test('returns fizz for numbers divisble by 3', () => {
    expect(funcs.fizzBuzz(3)).toBe('fizz');
    expect(funcs.fizzBuzz(48)).toBe('fizz');
    expect(funcs.fizzBuzz(54)).toBe('fizz');
  });

  test('returns buzz for numbers divisble by 5', () => {
    expect(funcs.fizzBuzz(5)).toBe('buzz');
    expect(funcs.fizzBuzz(55)).toBe('buzz');
    expect(funcs.fizzBuzz(95)).toBe('buzz');
  });

  test('returns fizzbuzz for numbers divisible by both 3 and 5', () => {
    expect(funcs.fizzBuzz(15)).toBe('fizzbuzz');
  });
});

describe('array functions', () => {
  test('returnFirst returns the first element', () => {
    expect(funcs.returnFirst([1, 2, 3])).toBe(1);
    expect(funcs.returnFirst([])).toBe(undefined);
  });

  test('returnLast returns the last element', () => {
    expect(funcs.returnLast([1, 2, 3])).toBe(3);
    expect(funcs.returnLast([])).toBe(undefined);
  });

  test('getArrayLength returns the length of the array', () => {
    expect(funcs.getArrayLength([1, 4, 5, 7])).toBe(4);
  });

  test('incrementByOne increments each element by one', () => {
    expect(funcs.incrementByOne([1, 2, 3])).toEqual([2, 3, 4]);
  });

  test('addItemToArray pushes elements to the end of the array', () => {
    expect(funcs.addItemToArray([1, 2], 3)).toEqual([1, 2, 3]);
  });

  test('addItemToFront adds item to the front of the list', () => {
    expect(funcs.addItemToFront([1, 2], 3)).toEqual([3, 1, 2]);
  });

  test('wordsToSentence converts an array into sentence', () => {
    expect(funcs.wordsToSentence(['I', 'am', 'frustrated'])).toBe(
      'I am frustrated',
    );
  });

  test('contains returns if an item is in the array or not', () => {
    expect(funcs.contains([1, 2, 3], 3)).toBe(true);
    expect(funcs.contains([1, 2, 3], 4)).toBe(false);
  });

  test('addNumbers takes an array and returns the sum of all the numbers', () => {
    expect(funcs.addNumbers([1, 2, 5])).toBe(8);
  });

  test('averageTestScores takes an array and returns the average of numbers', () => {
    expect(funcs.averageTestScore([40, 50, 60])).toBe(50);
  });

  test('largestNumber returns the maximum number in the array', () => {
    expect(funcs.largestNumber([1, 2, 3])).toBe(3);
  });
});
