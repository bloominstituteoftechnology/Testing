const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Testing test!', () => {
  it('Checking that test runs.', () => {});
});

// getBiggest,
it('should return the larger of two numbers', () => {
  // arrange
  const getBiggest = funcs.getBiggest;
  // act
  const five = getBiggest(3, 5);
  // assert
  expect(five).toBe(5);
});

// greeting,
it('should return hello in the specified language', () => {
  // arrange
  const greeting = funcs.greeting;
  // act
  const german = greeting('German');
  const spanish = greeting('Spanish');
  const english = greeting('English');
  // assert
  expect(german).toBe('Guten Tag!')
  expect(spanish).toBe('Hola!')
  expect(english).toBe('Hello!')
});

// isTenOrFive,
it('should return true if the number is 10 or 5', () => {
  // arrange
  const isTenOrFive = funcs.isTenOrFive;
  // act
  const isTen = isTenOrFive(10);
  const isFive = isTenOrFive(5);
  const isSix = isTenOrFive(6);
  // assert
  expect(isTen).toBeTruthy();
  expect(isFive).toBeTruthy();
  expect(isSix).toBeFalsy();
});

// isInRange,
it('should return true if between 50 and 20, and false otherwise', () => {
  // arrange
  const isInRange = funcs.isInRange;
  // act
  const withinRange = isInRange(35);
  const aboveRange = isInRange(50);
  const belowRange = isInRange(20);
  const justWithinRange = isInRange(20.1);
  // assert
  expect(withinRange).toBeTruthy();
  expect(aboveRange).toBeFalsy();
  expect(belowRange).toBeFalsy();
  expect(justWithinRange).toBeTruthy();
});

// isInteger,
it('should return true if integer, false if not', () => {
  // arrange
  const isInteger = funcs.isInteger;
  // act
  const isInt = isInteger(5);
  const isNotInt = isInteger(4.3);
  // assert
  expect(isInt).toBeTruthy();
  expect(isNotInt).toBeFalsy();
});

// fizzBuzz,
describe('Check for Fizzbuzz', () => {
  // arrange
  const fizzBuzz = funcs.fizzBuzz;

  it('Check for fizz AND buzz', () => {
    // act 15
    const fb = fizzBuzz(15);
    // assert
    expect(fb).toBe('fizzbuzz');
  });
  it('Check for buzz', () => {
    // act 10
    const b = fizzBuzz(10);
    // assert
    expect(b).toBe('buzz');
  });
  it('Check for fizz', () => {
    // act 12
    const f = fizzBuzz(12);
    // assert
    expect(f).toBe('fizz');
  });
  it('Check for neither fizz NOR buzz', () => {
    // act 8
    const neither = fizzBuzz(8);
    // assert
    expect(neither).toBe(8);
  });
});

// isPrime,
it('should return true if number is prime', () => {
  // arrange
  const isPrime = funcs.isPrime;
  // act
  const seven = isPrime(7);
  const nine = isPrime(9);
  // assert
  expect(seven).toBeTruthy();
  expect(nine).toBeFalsy();
});

// returnFirst,
it('should return the first element in an array', () => {
  // arrange
  const returnFirst = funcs.returnFirst;
  // act
  const november = returnFirst(['November', 'December', 'January'])
  // assert
  expect(november).toBe('November');
});

// returnLast,
it('should return the last element in an array', () => {
  // arrange
  const returnLast = funcs.returnLast;
  // act
  const january = returnLast(['November', 'December', 'January'])
  const five = returnLast([1, 2, 3, 4, 5])
  // assert
  expect(january).toBe('January');
  expect(five).toBe(5);
});

// getArrayLength,
it('should return the length of the array', () => {
  // arrange
  const getArrayLength = funcs.getArrayLength;
  // act
  const five = getArrayLength([5, 4, 3, 2, 1]);
  // assert
  expect(five).toBe(5);
});

// incrementByOne,
it('should increment each number in the array by 1', () => {
  // arrange
  const plusOne = funcs.incrementByOne;
  // act
  const arr = plusOne([3, 4, 5]);
  // assert
  expect(arr).toEqual([4, 5, 6]);
});

// addItemToArray,
it('', () => {
  // arrange
  // act
  // assert
});

// addItemToFront,
it('', () => {
  // arrange
  // act
  // assert
});

// wordsToSentence,
it('', () => {
  // arrange
  // act
  // assert
});

// contains,
it('', () => {
  // arrange
  // act
  // assert
});

// addNumbers,
it('', () => {
  // arrange
  // act
  // assert
});

// averageTestScore,
it('', () => {
  // arrange
  // act
  // assert
});

// largestNumber
it('', () => {
  // arrange
  // act
  // assert
});