/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('`getBiggest`', () => {
  it('should be a function', () => {
    const getBiggest = funcs.getBiggest;
    assert.typeOf(getBiggest, 'function');
  });
  it('should return 100', () => {
    const getBiggest = funcs.getBiggest;
    const num1 = 1;
    const num2 = 100;
    assert.strictEqual(getBiggest(num1, num2), 100);
  });
  it('should return a number', () => {
    const getBiggest = funcs.getBiggest;
    const num1 = 1;
    const num2 = 100;
    assert.isNumber(getBiggest(num1, num2));
  });
});

describe('`greeting`', () => {
  it('should be a function', () => {
    const greeting = funcs.greeting;
    assert.typeOf(greeting, 'function');
  });
  it('should return Guten Tag!', () => {
    const greeting = funcs.greeting;
    const language = 'German';
    assert.strictEqual(greeting(language), 'Guten Tag!');
  });
  it('should return a string', () => {
    const greeting = funcs.greeting;
    const language = 'Spanish';
    assert.isString(greeting(language));
  });
});

describe('`isTenOrFive`', () => {
  it('should be a function', () => {
    const isTenOrFive = funcs.isTenOrFive;
    assert.typeOf(isTenOrFive, 'function');
  });
  it('should return true', () => {
    const isTenOrFive = funcs.isTenOrFive;
    const num = 10;
    assert.isTrue(isTenOrFive(10));
  });
  it('should return a boolean', () => {
    const isTenOrFive = funcs.isTenOrFive;
    const num = 5;
    assert.isBoolean(isTenOrFive(num));
  });
});

describe('`isInRange`', () => {
  it('should be a function', () => {
    const isInRange = funcs.isInRange;
    assert.typeOf(isInRange, 'function');
  });
  it('should return false', () => {
    const isInRange = funcs.isInRange;
    const num = 1;
    assert.isFalse(isInRange(num));
  });
  it('should not return null', () => {
    const isInRange = funcs.isInRange;
    const num = 25;
    assert.isNotNull(isInRange(num));
  });
});

describe('`isInteger`', () => {
  it('should be a function', () => {
    const isInteger = funcs.isInteger;
    assert.isFunction(isInteger);
  });
  it('should return false', () => {
    const isInteger = funcs.isInteger;
    const num = 1.543;
    assert.isFalse(isInteger(num));
  });
  it('should return a boolean', () => {
    const isInteger = funcs.isInteger;
    const num = 1;
    assert.isBoolean(isInteger(num));
  });
});

describe('`fizzBuzz`', () => {
  it('should be a function', () => {
    const fizzBuzz = funcs.fizzBuzz;
    assert.isFunction(fizzBuzz);
  });
  it('should return fizzbuzz', () => {
    const fizzBuzz = funcs.fizzBuzz;
    const num = 15;
    assert.strictEqual(fizzBuzz(num), 'fizzbuzz');
  });
  it('should return buzz', () => {
    const fizzBuzz = funcs.fizzBuzz;
    const num = 10;
    assert.strictEqual(fizzBuzz(num), 'buzz');
  });
  it('should return fizz', () => {
    const fizzBuzz = funcs.fizzBuzz;
    const num = 3;
    assert.strictEqual(fizzBuzz(num), 'fizz');
  });
  it('should not return a string', () => {
    const fizzBuzz = funcs.fizzBuzz;
    const num = 22;
    assert.isNotString(fizzBuzz(num));
  });
});

describe('isPrime', () => {
  it('should be a function', () => {
    const isPrime = funcs.isPrime;
    assert.isFunction(isPrime);
  });
  it('should return true', () => {
    const isPrime = funcs.isPrime;
    const num = 3;
    assert.isTrue(isPrime(num));
  });
  it('should return false', () => {
    const isPrime = funcs.isPrime;
    const num = 4;
    assert.isFalse(isPrime(num));
  });
  it('should return a boolean', () => {
    const isPrime = funcs.isPrime;
    const num = 5;
    assert.isBoolean(isPrime(num));
  });
});

describe('`returnFirst`', () => {
  it('should be a function', () => {
    const returnFirst = funcs.returnFirst;
    assert.isFunction(returnFirst);
  });
  it('should return 0', () => {
    const returnFirst = funcs.returnFirst;
    const array = [0, 1, 2];
    assert.strictEqual(returnFirst(array), 0);
  });
  it('should return a number', () => {
    const returnFirst = funcs.returnFirst;
    const array = [0, 1, 2];
    assert.isNumber(returnFirst(array));
  });
});

describe('`returnLast`', () => {
  it('should be a function', () => {
    const returnLast = funcs.returnLast;
    assert.isFunction(returnLast);
  });
  it('should return 2', () => {
    const returnLast = funcs.returnLast;
    const array = [0, 1, 2];
    assert.strictEqual(returnLast(array), 2);
  });
  it('should return a number', () => {
    const returnLast = funcs.returnLast;
    const array = [0, 1, 2];
    assert.isNumber(returnLast(array));
  });
});

describe('`getArrayLength`', () => {
  it('should be a function', () => {
    const getArrayLength = funcs.getArrayLength;
    assert.isFunction(getArrayLength);
  });
  it('should return 3', () => {
    const getArrayLength = funcs.getArrayLength;
    const array = [0, 1, 2];
    assert.strictEqual(getArrayLength(array), array.length);
  });
  it('should return a number', () => {
    const getArrayLength = funcs.getArrayLength;
    const array = [0, 1, 2];
    assert.isNumber(getArrayLength(array));
  });
});

describe('`incrementByOne`', () => {
  it('should be a function', () => {
    const incrementByOne = funcs.incrementByOne;
    assert.isFunction(incrementByOne);
  });
  it('should return [1,2,3]', () => {
    const incrementByOne = funcs.incrementByOne;
    const array = [0, 1, 2];
    assert.deepEqual(incrementByOne(array), [1, 2, 3]);
  });
  it('should return an array', () => {
    const incrementByOne = funcs.incrementByOne;
    const array = [0, 1, 2];
    assert.isArray(incrementByOne(array));
  });
});

describe('`addItemToArray`', () => {
  it('should be a function', () => {
    const addItemToArray = funcs.addItemToArray;
    assert.isFunction(addItemToArray);
  });
  it('should return [0,1,2,3]', () => {
    const addItemToArray = funcs.addItemToArray;
    const array = [0, 1, 2];
    const item = 3;
    assert.deepEqual(addItemToArray(array, item), [0, 1, 2, 3]);
  });
  it('should return an array', () => {
    const addItemToArray = funcs.addItemToArray;
    const array = [0, 1, 2];
    assert.isArray(addItemToArray(array));
  });
});

describe('`addItemToFront`', () => {
  it('should be a function', () => {
    const addItemToFront = funcs.addItemToFront;
    assert.isFunction(addItemToFront);
  });
  it('should return [2,0,1,2]', () => {
    const addItemToFront = funcs.addItemToFront;
    const array = [0, 1, 2];
    const item = 3;
    assert.deepEqual(addItemToFront(array, item), [3, 0, 1, 2]);
  });
  it('should return an array', () => {
    const addItemToFront = funcs.addItemToFront;
    const array = [0, 1, 2];
    assert.isArray(addItemToFront(array));
  });
});

describe('`wordsToSentence', () => {
  it('should be a function', () => {
    const wordsToSentence = funcs.wordsToSentence;
    assert.isFunction(wordsToSentence);
  });
  it('should return "This is a sentence"', () => {
    const wordsToSentence = funcs.wordsToSentence;
    const array = ['This', 'is', 'a', 'sentence'];
    assert.strictEqual(wordsToSentence(array), 'This is a sentence');
  });
  it('should return a string', () => {
    const wordsToSentence = funcs.wordsToSentence;
    const array = ['This', 'is', 'a', 'sentence'];
    assert.typeOf(wordsToSentence(array), 'string');
  });
});

describe('`contains`', () => {
  it('should be a function', () => {
    const contains = funcs.contains;
    assert.typeOf(contains, 'function');
  });
  it('should return true', () => {
    const contains = funcs.contains;
    const array = ['This', 'is', 'a', 'sentence'];
    const item = 'is';
    assert.isTrue(contains(array, item));
  });
  it('should return false', () => {
    const contains = funcs.contains;
    const array = ['This', 'is', 'a', 'sentence'];
    const item = 'this';
    assert.isFalse(contains(array, item));
  });
});

describe('`addNumbers`', () => {
  it('should be a function', () => {
    const addNumbers = funcs.addNumbers;
    assert.isFunction(addNumbers);
  });
  it('should return 25', () => {
    const addNumbers = funcs.addNumbers;
    const array = [5, 5, 5, 5, 5];
    assert.strictEqual(addNumbers(array), 25);
  });
  it('should return a number', () => {
    const addNumbers = funcs.addNumbers;
    const array = [5, 5, 5, 5, 5];
    assert.isNumber(addNumbers(array));
  });
});

describe('`averageTestScore`', () => {
  it('should be a function', () => {
    const averageTestScore = funcs.averageTestScore;
    assert.isFunction(averageTestScore);
  });
  it('should return 50', () => {
    const averageTestScore = funcs.averageTestScore;
    const array = [40, 50, 60];
    assert.equal(averageTestScore(array), 50);
  });
  it('should return a number', () => {
    const averageTestScore = funcs.averageTestScore;
    const array = [50, 50, 50];
    assert.isNumber(averageTestScore(array));
  });
});

describe('`largestNumber`', () => {
  it('should be a function', () => {
    const largestNumber = funcs.largestNumber;
    assert.isFunction(largestNumber);
  });
  it('should return 100', () => {
    const largestNumber = funcs.largestNumber;
    const array = [-150, 0, 50, 100];
    assert.strictEqual(largestNumber(array), 100);
  });
  it('should not return a boolean', () => {
    const largestNumber = funcs.largestNumber;
    const array = [0, 1, 2, 3];
    assert.isNotBoolean(largestNumber(array));
  });
});
