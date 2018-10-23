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
