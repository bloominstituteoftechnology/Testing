/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Project-2 Functions', () => {
  describe('`getBiggest`', () => {
    it('should be a function', () => {
      const getBiggest = funcs.getBiggest;
      assert.typeOf(getBiggest, 'function');
    });
    it('should return the biggest of two numbers', () => {
      const num1 = 5;
      const num2 = 10;
      const num3 = 15;
      const getBiggest = funcs.getBiggest;
      const biggest = getBiggest(num1, num2);
      const biggest2 = getBiggest(num2, num3);
      assert.equal(biggest, 10);
      assert.equal(biggest2, 15);
      assert.typeOf(biggest, 'number');
    });
  });

  describe('`greeting`', () => {
    it('should be a function', () => {
      const greeting = funcs.greeting;
      assert.typeOf(greeting, 'function');
    });
    it('should return a greeting in the specified language', () => {
      const lang = 'German';
      const greeting = funcs.greeting;
      const greet = greeting(lang);
      assert.equal(greet, 'Guten Tag!');
      assert.typeOf(greet, 'string');
    });
  });

  describe('`isTenOrFive`', () => {
    it('should be a function', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.typeOf(isTenOrFive, 'function');
    });
    it('should return true if num passed is 10 or 5', () => {
      const num1 = 5;
      const num2 = 10;
      const num3 = 15;
      const isTenOrFive = funcs.isTenOrFive;
      const invoke1 = isTenOrFive(num1);
      const invoke2 = isTenOrFive(num2);
      const invoke3 = isTenOrFive(num3);
      assert.equal(invoke1, true);
      assert.equal(invoke2, true);
      assert.equal(invoke3, false);
      assert.isBoolean(invoke1);
    });
  });

  describe('`isInRange`', () => {
    const isInRange = funcs.isInRange;
    it('should be a function', () => {
      assert.typeOf(isInRange, 'function');
    });
    it('should return truthiness of a num less than 50 and greater than 20', () => {
      const num1 = 35;
      const num2 = 10;
      const num3 = 100;
      const invoke1 = isInRange(num1);
      const invoke2 = isInRange(num2);
      const invoke3 = isInRange(num3);
      assert.equal(invoke1, true);
      assert.equal(invoke2, false);
      assert.equal(invoke3, false);
      assert.isBoolean(invoke1, 'true, this is a Boolean.');
    });
  });

  describe('`isInteger`', () => {
    const isInteger = funcs.isInteger;
    it('should be a function', () => {
      assert.typeOf(isInteger, 'function');
    });
    it('should return true if num is an integer', () => {
      const num1 = 5;
      const num2 = -5;
      const num3 = '5';
      const invoke1 = isInteger(num1);
      const invoke2 = isInteger(num2);
      const invoke3 = isInteger(num3);
      assert.equal(invoke1, true);
      assert.equal(invoke2, true);
      assert.equal(invoke3, false);
      assert.typeOf(invoke1, 'boolean');
      assert.isBoolean(invoke1, 'true, this is a boolean');
    });
  });

  describe('`fizzBuzz`', () => {
    const fizzBuzz = funcs.fizzBuzz;
    it('should be a function', () => {
      assert.typeOf(fizzBuzz, 'function');
    });
    it('should return fizzbuzz result', () => {
      const num1 = 9;
      const num2 = 10;
      const num3 = 15;
      const num4 = 4;
      const invoke1 = fizzBuzz(num1);
      const invoke2 = fizzBuzz(num2);
      const invoke3 = fizzBuzz(num3);
      const invoke4 = fizzBuzz(num4);
      assert.equal(invoke1, 'fizz');
      assert.equal(invoke2, 'buzz');
      assert.equal(invoke3, 'fizzbuzz');
      assert.equal(invoke4, 4);
      assert.typeOf(invoke1, 'string');
      assert.typeOf(invoke4, 'number');
    });
  });

  describe('`isPrime`', () => {
    const isPrime = funcs.isPrime;
    it('should be a function', () => {
      assert.typeOf(isPrime, 'function');
    });
    it('should return true if number supplied is a prime number', () => {
      const num1 = 7;
      const num2 = 10;
      const invoke1 = isPrime(num1);
      const invoke2 = isPrime(num2);
      assert.equal(invoke1, true);
      assert.equal(invoke2, false);
      assert.typeOf(invoke1, 'boolean');
    });
  });

  describe('`returnFirst`', () => {
    const returnFirst = funcs.returnFirst;
    it('should be a function', () => {
      assert.typeOf(returnFirst, 'function');
    });
    it('should return the first element of the array', () => {
      const arr = [5, 10, 15, 20];
      const invoke = returnFirst(arr);
      assert.equal(invoke, 5);
      assert.typeOf(invoke, 'number');
    });
  });

  describe('`returnLast`', () => {
    const returnLast = funcs.returnLast;
    it('should be a function', () => {
      assert.typeOf(returnLast, 'function');
    });
    it('should return the last element of the array', () => {
      const arr = [5, 10, 15, 20];
      const invoke = returnLast(arr);
      assert.equal(invoke, 20);
      assert.typeOf(invoke, 'number');
    });
  });

  describe('`getArrayLength`', () => {
    const getArrayLength = funcs.getArrayLength;
    it('should be a function', () => {
      assert.typeOf(getArrayLength, 'function');
    });
    it("should return the array's length", () => {
      const arr = [5, 10, 15, 20];
      const invoke = getArrayLength(arr);
      assert.equal(invoke, 4);
      assert.typeOf(invoke, 'number');
    });
  });

  describe('`incrementByOne`', () => {
    const incrementByOne = funcs.incrementByOne;
    it('should be a function', () => {
      assert.typeOf(incrementByOne, 'function');
    });
    it('should increase each element in the array by one', () => {
      const arr = [5, 10, 15, 20];
      const invoke = incrementByOne(arr);
      assert.typeOf(invoke, 'array');
      assert.deepEqual(invoke, [6, 11, 16, 21]);
    });
  });

  describe('`addItemToArray`', () => {
    const addItemToArray = funcs.addItemToArray;
    it('should be a function', () => {
      assert.typeOf(addItemToArray, 'function');
    });
    it('should add an item to the end of the array', () => {
      const arr = [1, 2, 3, 4];
      const item = 5;
      const invoke = addItemToArray(arr, item);
      assert.deepEqual(invoke, [1, 2, 3, 4, 5]);
      assert.typeOf(invoke, 'array');
    });
  });

  describe('`addItemToFront`', () => {
    const addItemToFront = funcs.addItemToFront;
    it('should be a function', () => {
      assert.typeOf(addItemToFront, 'function');
    });
    it('should add an item to the front of the array', () => {
      const arr = [1, 2, 3, 4];
      const item = 0;
      const invoke = addItemToFront(arr, item);
      assert.deepEqual(invoke, [0, 1, 2, 3, 4]);
      assert.typeOf(invoke, 'array');
    });
  });

  describe('`wordsToSentence`', () => {
    const wordsToSentence = funcs.wordsToSentence;
    it('should be a function', () => {
      assert.typeOf(wordsToSentence, 'function');
    });
    it('should return an array of words as a sentence', () => {
      const arr = ['It', 'was', 'the', 'best', 'of', 'times...'];
      const invoke = wordsToSentence(arr);
      assert.equal(invoke, 'It was the best of times...');
      assert.typeOf(invoke, 'string');
    });
  });

  describe('`contains`', () => {
    const contains = funcs.contains;
    it('should be a function', () => {
      assert.typeOf(contains, 'function');
    });
    it('should return true if array contains item, false otherwise', () => {
      const arr = [1, 2, 3, 4, 5];
      const item1 = 3;
      const item2 = 6;
      const invoke1 = contains(arr, item1);
      const invoke2 = contains(arr, item2);
      assert.equal(invoke1, true);
      assert.equal(invoke2, false);
      assert.isBoolean(invoke1, 'true, this is a boolean');
    });
  });

  describe('`addNumbers`', () => {
    const addNumbers = funcs.addNumbers;
    it('should be a function', () => {
      assert.typeOf(addNumbers, 'function');
    });
    it('should return the sum of numbers in an array', () => {
      const arr = [1, 2, 3, 4, 5];
      const invoke = addNumbers(arr);
      assert.equal(invoke, 15);
      assert.typeOf(invoke, 'number');
    });
  });

  describe('`averageTestScore`', () => {
    const averageTestScore = funcs.averageTestScore;
    it('should be a function', () => {
      assert.typeOf(averageTestScore, 'function');
    });
    it('should return the average of numbers in the array', () => {
      const arr = [99, 90, 85, 100, 96];
      const invoke = averageTestScore(arr);
      assert.equal(invoke, 94);
      assert.typeOf(invoke, 'number');
    });
  });

  describe('`largestNumber`', () => {
    const largestNumber = funcs.largestNumber;
    it('should be a function', () => {
      assert.typeOf(largestNumber, 'function');
    });
    it('should return the biggest number in an array of numbers', () => {
      const arr = [1, 5, 10, 20, 40, 30, 90, 150, 2];
      const invoke = largestNumber(arr);
      assert.equal(invoke, 150);
      assert.typeOf(invoke, 'number');
    });
  });
});
