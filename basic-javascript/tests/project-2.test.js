/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
const funcs = require('../src/project-2');

describe('Project-2 Functions', () => {
  describe('getBiggest', () => {
    it('should be a function', () => {
      const getBiggest = funcs.getBiggest;
      assert.typeOf(getBiggest, 'function');
    });
  });

  describe('greeting', () => {
    it('should be a function', () => {
      const greeting = funcs.greeting;
      assert.typeOf(greeting, 'function');
    });
    it('should return a string', () => {
      const languange = funcs.greeting('German');
      assert.typeOf(languange, 'string');
    });
  });
  describe('isTenOrFive', () => {
    it('should be a function', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.typeOf(isTenOrFive, 'function');
    });
    it('should be a boolean', () => {
      const num = funcs.isTenOrFive(10);
      assert.typeOf(num, 'boolean');
    });
  });
  describe('isInRange', () => {
    it('should be a function', () => {
      const isInRange = funcs.isInRange;
      assert.typeOf(isInRange, 'function');
    });
    it('should be a boolean', () => {
      const num = funcs.isInRange(50);
      assert.typeOf(num, 'boolean');
    });
  });
  describe('isInteger', () => {
    it('should be a function', () => {
      const isInteger = funcs.isInteger;
      assert.typeOf(isInteger, 'function');
    });
    it('should be a boolean', () => {
      const num = funcs.isInteger();
      assert.typeOf(num, 'boolean');
    });
    it('should return true on integers', () => {
      const results = funcs.isInteger(5);
      assert.equal(results, true);
    });
  });
  describe('fizzBuzz', () => {
    it('should be a function', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.typeOf(fizzBuzz, 'function');
    });
    it('should be a string', () => {
      const results = funcs.fizzBuzz(5);
      assert.typeOf(results, 'string');
    });
  });
  describe('isPrime', () => {
    it('should be a function', () => {
      const isPrime = funcs.isPrime;
      assert.typeOf(isPrime, 'function');
    });
    it('should be a boolean', () => {
      const result = funcs.isPrime(1);
      assert.typeOf(result, 'boolean');
    });
  });
  describe('returnFirst', () => {
    it('should be a function', () => {
      const returnFirst = funcs.returnFirst;
      assert.typeOf(returnFirst, 'function');
    });
    it('should be first item in array', () => {
      const item = funcs.returnFirst([0, 1, 2, 3]);
      assert.equal(item, 0);
    });
  });
  describe('returnLast', () => {
    it('should be a function', () => {
      const returnLast = funcs.returnLast;
      assert.typeOf(returnLast, 'function');
    });
    it('should return the last item', () => {
      const item = funcs.returnLast([0, 1, 2, 3]);
      assert.equal(item, 3);
    });
  });
  describe('getArrayLength', () => {
    it('should be a function', () => {
      const getArrayLength = funcs.getArrayLength;
      assert.typeOf(getArrayLength, 'function');
    });
    it('should return the array length', () => {
      const length = funcs.getArrayLength([0, 1, 2, 3]);
      assert.equal(length, 4);
    });
  });
  describe('incrementByOne', () => {
    it('should be a function', () => {
      const incrementByOne = funcs.incrementByOne;
      assert.typeOf(incrementByOne, 'function');
    });
    it('should add one', () => {
      const increment = funcs.incrementByOne([1]);
      assert.equal(increment, 2);
    });
  });
  describe('addItemToArray', () => {
    it('should be a function', () => {
      const addItemToArray = funcs.addItemToArray;
      assert.typeOf(addItemToArray, 'function');
    });
    it('should add item to array', () => {
      const addItem = funcs.addItemToArray([], 'thing');
      assert.equal(addItem, 'thing');
    });
  });
  describe('addItemToFront', () => {
    it('should be a function', () => {
      const addItemToFront = funcs.addItemToFront;
      assert.typeOf(addItemToFront, 'function');
    });
    it('should add item to front of array', () => {
      const frontItem = funcs.addItemToFront([0,1], 3);
      assert.deepEqual(frontItem, [3,0,1]);
    });
  });
  describe('wordsToSentence', () => {
    it('should be a function', () => {
      const wordsToSentence = funcs.wordsToSentence;
      assert.typeOf(wordsToSentence, 'function');
    });
    it('should return a string', () => {
      const wordsToSentence = funcs.wordsToSentence(['test','testing']);
      assert.typeOf(wordsToSentence, 'string');
    });
  });
  describe('contains', () => {
    it('should be a function', () => {
      const contains = funcs.contains;
      assert.typeOf(contains, 'function');
    });
    if('should return true if array contains the item', () => {
      const doesContain = funcs.contains([0, 1], 0);
      assert.equal(doesContain, true);
    });
  });
  describe('addNumbers', () => {
    it('should be a function', () => {
      const addNumbers = funcs.addNumbers;
      assert.typeOf(addNumbers, 'function');
    });
    it('should return the sum of all the numbers', () => {
      const sum = funcs.addNumbers([1, 1, 1, 1]);
      assert.equal(sum, 4);
    });
  });
  describe('averageTestScore', () => {
    it('should be a function', () => {
      const averageTestScore = funcs.averageTestScore;
      assert.typeOf(averageTestScore, 'function');
    });
    it('should return the average test score', () => {
      const average = funcs.averageTestScore([25, 25, 25, 25]);
      assert.equal(average, 25);
    });
  });
  describe('largestNumber', () => {
    it('should be a function', () => {
      const largestNumber = funcs.largestNumber;
      assert.typeOf(largestNumber, 'function');
    });
    it('should return the largest num', () => {
      const largest = funcs.largestNumber([0, 1, 2]);
      assert.equal(largest, 2);
    });
  });
});
