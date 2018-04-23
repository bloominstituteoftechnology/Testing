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
    it('should return the biggest number from x or y', () => {
      const getBiggest = funcs.getBiggest;
      assert.equal(getBiggest(20, 80), 80);
    });
    it('should return the same number if x and y are equal', () => {
      const getBiggest = funcs.getBiggest;
      assert.equal(getBiggest(80, 80), 80);
    });
  });

  describe('`greeting`', () => {
    it('should be a function', () => {
      const greeting = funcs.greeting;
      assert.typeOf(greeting, 'function');
    });
    it('should return a greeting for the given language', () => {
      const greeting = funcs.greeting;
      assert.equal(greeting('German'), 'Guten Tag!');
      assert.equal(greeting('Spanish'), 'Hola!');
      assert.equal(greeting(''), 'Hello!');
    });
  });

  describe('`isTenOrFive`', () => {
    it('should be a function', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.typeOf(isTenOrFive, 'function');
    });
    it('should return true if the number is equal to 10 or 5', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.equal(isTenOrFive(10, 5), true);
    });
    it('should return false if the number is not equal to 10 or 5', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.equal(isTenOrFive(15, 22), false);
    });
  });

  describe('`isInRange`', () => {
    it('should be a function', () => {
      const isInRange = funcs.isInRange;
      assert.typeOf(isInRange, 'function');
    });
    it('should return true if the number is less than 50 and greater than 20', () => {
      const isInRange = funcs.isInRange;
      assert.equal(isInRange(35), true);
    });
    it('should return false if the number is greater than 50 0r less than 20', () => {
      const isInRange = funcs.isInRange;
      assert.equal(isInRange(60, 15), false);
    });
  });

  describe('`isInteger`', () => {
    it('should be a function', () => {
      const isInteger = funcs.isInteger;
      assert.typeOf(isInteger, 'function');
    });
    it('should return true when an integer is equal to  another integer when using math.floor', () => {
      const isInteger = funcs.isInteger;
      assert.equal(isInteger(5, 5), true);
    });
    it('should return false when an integer is not equal to another integer when using math.floor', () => {
      const isInteger = funcs.isInteger;
      assert.equal(isInteger(5.05, 5), false);
    });
  });

  describe('`fizzBuzz`', () => {
    it('should be a function', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.typeOf(fizzBuzz, 'function');
    });
    it('should return buzz when a num % 5 and 3 is equal to zero', () => {
      const fizzbuzz = funcs.fizzBuzz;
      assert.equal(fizzbuzz(5), 'buzz');
    });
    it('should return fizz when a num % 5 and 3 is equal to zero', () => {
      const fizzbuzz = funcs.fizzBuzz;
      assert.equal(fizzbuzz(3), 'fizz');
    });
    it('should return fizzbuzz when a num % 5 and 3 is equal to zero', () => {
      const fizzbuzz = funcs.fizzBuzz;
      assert.equal(fizzbuzz(15), 'fizzbuzz');
    });
  });

  describe('`isPrime`', () => {
    it('should be a function', () => {
      const isPrime = funcs.isPrime;
      assert.typeOf(isPrime, 'function');
    });
    it('should return false if the number is less than 0', () => {
      const isPrime = funcs.isPrime;
      assert.equal(isPrime(-2), false);
    });
    it('should return false if the number is equal to 1 or 0', () => {
      const isPrime = funcs.isPrime;
      assert.equal(isPrime(1, 0), false);
    });
    it('should return false if the % of the number is 0', () => {
      const isPrime = funcs.isPrime;
      assert.equal(isPrime(4), false);
    });
    it('should return true if the % of the number is not 0', () => {
      const isPrime = funcs.isPrime;
      assert.equal(isPrime(2), true);
    });
  });

  describe('`returnFirst`', () => {
    it('should be a function', () => {
      const returnFirst = funcs.returnFirst;
      assert.typeOf(returnFirst, 'function');
    });
    it('should return the first index in an array', () => {
      const returnFirst = funcs.returnFirst;
      assert.equal(returnFirst(0));
    });
  });

  describe('`returnLast`', () => {
    it('should be a function', () => {
      const returnLast = funcs.returnLast;
      assert.typeOf(returnLast, 'function');
    });
    it('should return the last index in an array', () => {
      const returnFirst = funcs.returnFirst;
      assert.equal(returnFirst(4));
    });
  });

  describe('`getArrayLength`', () => {
    it('should be a function', () => {
      const getArrayLength = funcs.getArrayLength;
      assert.typeOf(getArrayLength, 'function');
    });
    it('should return the length of the array', () => {
      const getArrayLength = funcs.getArrayLength;
      assert.equal(getArrayLength(4));
    });
  });

  describe('`incrementByOne`', () => {
    it('should be a function', () => {
      const incrementByOne = funcs.incrementByOne;
      assert.typeOf(incrementByOne, 'function');
    });
    it('should increment every  index in the array  by one', () => {
      const incrementByOne = funcs.incrementByOne;
      assert.equal(incrementByOne(2, 0), 3, 1);
    });
  });

  describe('`addItemToArray`', () => {
    it('should be a function', () => {
      const addItemToArray = funcs.addItemToArray;
      assert.typeOf(addItemToArray, 'function');
    });
  });
  describe('`addItemToFront`', () => {
    it('should be a function', () => {
      const addItemToFront = funcs.addItemToFront;
      assert.typeOf(addItemToFront, 'function');
    });
  });
  describe('`wordsToSentence`', () => {
    it('should be a function', () => {
      const wordsToSentence = funcs.wordsToSentence;
      assert.typeOf(wordsToSentence, 'function');
    });
  });
  describe('`contains`', () => {
    it('should be a function', () => {
      const contains = funcs.contains;
      assert.typeOf(contains, 'function');
    });
  });
  describe('`addNumbers`', () => {
    it('should be a function', () => {
      const addNumbers = funcs.addNumbers;
      assert.typeOf(addNumbers, 'function');
    });
  });
  describe('`averageTestScore`', () => {
    it('should be a function', () => {
      const averageTestScore = funcs.averageTestScore;
      assert.typeOf(averageTestScore, 'function');
    });
  });
  describe('`largestNumber`', () => {
    it('should be a function', () => {
      const largestNumber = funcs.largestNumber;
      assert.typeOf(largestNumber, 'function');
    });
  });
});
