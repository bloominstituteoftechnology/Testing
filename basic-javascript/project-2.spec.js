const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

test('should return the larger of two values', () => {
  const x = 2;
  const y = 9;
  const compare = funcs.getBiggest(x, y);

  expect(compare).toEqual(9);
});

test('should return a greeting in the requested language', () => {
  const language = 'Spanish';
  const greet = funcs.greeting(language);

  expect(greet).toBe('Hola!');
});

test('should return true iff the number is ten or five', () => {
  const num = 5;
  const fiveTenTest = funcs.isTenOrFive(num);

  expect(fiveTenTest).toBe(true);
});

test('should return true for any number between 20 and 50', () => {
  const num = 29;
  const rangeCheck = funcs.isInRange(num);

  expect(rangeCheck).toBe(true);
});

test('should return true if the number is whole', () => {
  const num = 8;
  const intCheck = funcs.isInteger(num);

  expect(intCheck).toBe(true);
});

test('should return buzz if divisible by 5, fizz if divisible by 3, number otherwise', () => {
  const both = 15;
  const buzzNum = 10;
  const fizzNum = 9;
  const shouldBeBoth = funcs.fizzBuzz(both);
  const shouldBeBuzz = funcs.fizzBuzz(buzzNum);
  const shouldBeFizz = funcs.fizzBuzz(fizzNum);

  expect(shouldBeBoth).toBe('fizzbuzz');
  expect(shouldBeBuzz).toBe('buzz');
  expect(shouldBeFizz).toBe('fizz');

  // probably should have made this its own suite
});

test('should return true iff a number is prime', () => {
  const num = 7;
  const primeCheck = funcs.isPrime(num);

  expect(primeCheck).toBe(true);
});

describe('array operations', () => {

  test('should return the first item in a given array', () => {
    const array = ['one', 'two', 'three', 'four'];
    const first = funcs.returnFirst(array);

    expect(first).toBe('one');
  });

  test('should return the last item in a given array', () => {
    const array = ['one', 'two', 'three', 'four'];
    const last = funcs.returnLast(array);

    expect(last).toBe('four');
  });

  test('should return the length of an array', () => {
    const array = ['one', 'two', 'three', 'four'];
    const length = funcs.getArrayLength(array);

    expect(length).toEqual(4);
  });

  test('should add one to each item in a given array', () => {
    const array = [1, 2, 3, 4];
    const increment = funcs.incrementByOne(array);

    expect(increment).toEqual([2, 3, 4, 5]);
  });

  test('should add item to the beginning of an array', () => {
    const array = ['one', 'two', 'three', 'four'];
    const toAdd = 'zero';
    const add = funcs.addItemToFront(array, toAdd);

    expect(add).toEqual(['zero', 'one', 'two', 'three', 'four']); // do not use toBe, checking for deep equality
  });

  test('should add item to the end of an array', () => {
    const array = ['one', 'two', 'three', 'four'];
    const toAdd = 'zero';
    const add = funcs.addItemToArray(array, toAdd);

    expect(add).toEqual(['one', 'two', 'three', 'four', 'zero']);
  });

  test('returns true if a given item appears in the array', () => {
      const array = [1, 2, 3, 4];
      const item = 2;
      const itemCheck = funcs.contains(array, item);

      expect(itemCheck).toBe(true);
  });

}); // array operations
