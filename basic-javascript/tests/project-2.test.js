/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Project-2 functions', () => {
  describe('`getBiggest`', () => {
    const getBiggest = funcs.getBiggest;
    it('should be a function', () => {
      assert.typeOf(getBiggest, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(getBiggest(10, 20), 'number');
    });
    it('should return the expected value', () => {
      assert.strictEqual(getBiggest(10, 20), 20);
    });
  });

  describe('`greeting`', () => {
    const greeting = funcs.greeting;
    it('should be a function', () => {
      assert.typeOf(greeting, 'function');
    });
    it('should return a string', () => {
      assert.typeOf(greeting('German'), 'string');
    });
    it('should return the expected value', () => {
      assert.strictEqual(greeting('German'), 'Guten Tag!');
    });
  });

  describe('`isTenOrFive`', () => {
    const isTenOrFive = funcs.isTenOrFive;
    it('should be a function', () => {
      assert.typeOf(isTenOrFive, 'function');
    });
    it('should return a boolean', () => {
      assert.typeOf(isTenOrFive(5), 'boolean');
    });
    it('should return the expected value', () => {
      assert.strictEqual(isTenOrFive(5), true);
    });
  });

  describe('`isInRange`', () => {
    const isInRange = funcs.isInRange;
    it('should be a function', () => {
      assert.typeOf(isInRange, 'function');
    });
    it('should return a boolean', () => {
      assert.typeOf(isInRange(30), 'boolean');
    });
    it('should return the expected value', () => {
      assert.strictEqual(isInRange(30), true);
    });
  });

  describe('`fizzBuzz`', () => { // FIX
    const fizzBuzz = funcs.fizzBuzz;
    it('should be a function', () => {
      assert.typeOf(fizzBuzz, 'function');
    });
    it('should return a string or number', () => {
      assert.typeOf(fizzBuzz(10), 'string');
      assert.typeOf(fizzBuzz(11), 'number');
    });
    it('should return the expected value', () => {
      assert.strictEqual(fizzBuzz(10), 'buzz');
    });
  });

  describe('`isPrime`', () => {
    const isPrime = funcs.isPrime;
    it('should be a function', () => {
      assert.typeOf(isPrime, 'function');
    });
    it('should return a boolean', () => {
      assert.typeOf(isPrime(5), 'boolean');
    });
    it('should return the expected value', () => {
      assert.strictEqual(isPrime(5), true);
    });
  });

  describe('`returnFirst`', () => {
    const returnFirst = funcs.returnFirst;
    it('should be a function', () => {
      assert.typeOf(returnFirst, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(returnFirst([5, 2, 3, 9, 2]), 'number');
    });
    it('should return the expected value', () => {
      assert.strictEqual(returnFirst([2, 4, 3, 9, 5]), 2);
    });
  });

  describe('`returnLast`', () => {
    const returnLast = funcs.returnLast;
    it('should be a function', () => {
      assert.typeOf(returnLast, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(returnLast([5, 2, 3, 9, 2]), 'number');
    });
    it('should return the expected value', () => {
      assert.strictEqual(returnLast([2, 4, 3, 9, 5]), 5);
    });
  });

  describe('`getArrayLength`', () => {
    const getArrayLength = funcs.getArrayLength;
    it('should be a function', () => {
      assert.typeOf(getArrayLength, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(getArrayLength([5, 2, 3, 9, 2]), 'number');
    });
    it('should return the expected value', () => {
      assert.strictEqual(getArrayLength([2, 4, 3, 9, 5]), 5);
    });
  });

  describe('`addItemToArray`', () => {
    const addItemToArray = funcs.addItemToArray;
    it('should be a function', () => {
      assert.typeOf(addItemToArray, 'function');
    });
    it('should return an array', () => {
      assert.typeOf(addItemToArray([1, 2, 3], 6), 'array');
    });
    it('should return the expected value', () => { // FIX
      assert.sameOrderedMembers(addItemToArray([1, 2, 3], 7), [1, 2, 3, 7]); // NOTE: can't check objects to objects for values in strict mode
      // notStrict is checking if both items are arrays
    });
  });

  describe('`addItemToFront`', () => {
    const addItemToFront = funcs.addItemToFront;
    it('should be a function', () => {
      assert.typeOf(addItemToFront, 'function');
    });
    it('should return an array', () => {
      assert.typeOf(addItemToFront([1, 2, 3], 6), 'array');
    });
    it('should return the expected value', () => { // FIX
      assert.notStrictEqual(addItemToFront([1, 2, 3], 7), [7, 1, 2, 3]);
    });
  });

  describe('`wordsToSentence`', () => {
    const wordsToSentence = funcs.wordsToSentence;
    it('should be a function', () => {
      assert.typeOf(wordsToSentence, 'function');
    });
    it('should return a string', () => {
      assert.typeOf(wordsToSentence(['hi', 'uh', 'okay', 'uhh', 'alright']), 'string');
    });
    it('should return the expected value', () => {
      assert.strictEqual(wordsToSentence(['hi', 'uh', 'okay', 'uhh', 'alright']), 'hi uh okay uhh alright');
    });
  });

  describe('`contains`', () => {
    const contains = funcs.contains;
    it('should be a function', () => {
      assert.typeOf(contains, 'function');
    });
    it('should return a boolean', () => {
      assert.typeOf(contains([1, 2, 3], 3), 'boolean');
    });
    it('should return the expected value', () => {
      assert.strictEqual(contains([1, 2, 3], 3), true);
    });
  });

  describe('`addNumbers`', () => {
    const addNumbers = funcs.addNumbers;
    it('should be a function', () => {
      assert.typeOf(addNumbers, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(addNumbers([1, 2, 3]), 'number');
    });
    it('should return the expected value', () => {
      assert.strictEqual(addNumbers([1, 2, 3]), 6);
    });
  });

  describe('`averageTestScore`', () => {
    const averageTestScore = funcs.averageTestScore;
    it('should be a function', () => {
      assert.typeOf(averageTestScore, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(averageTestScore([1, 2, 3]), 'number');
    });
    it('should return the expected value', () => {
      assert.strictEqual(averageTestScore([1, 2, 3]), 2);
    });
  });

  describe('`largestNumber`', () => {
    const largestNumber = funcs.largestNumber;
    it('should be a function', () => {
      assert.typeOf(largestNumber, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(largestNumber([1, 2, 3]), 'number');
    });
    it('should return the expected value', () => {
      assert.strictEqual(largestNumber([1, 2, 3]), 3);
    });
  });
});
