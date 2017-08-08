const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Project-2 Functions', () => {

  describe('getBiggest', () => {
    it('should be a function', () => {
      const getBiggest = funcs.getBiggest;
      assert.typeOf(getBiggest, 'function');
    });
    it('should return a number', () => {
      const getBiggest = funcs.getBiggest;
      assert.typeOf(getBiggest(1, 100), 'number');
    });
  });

  describe('greeting', () => {
    it('should be a function', () => {
      const greeting = funcs.greeting;
      assert.typeOf(greeting, 'function');
    });
    it('should return a string', () => {
      const greeting = funcs.greeting;
      assert.typeOf(greeting(''), 'string');
    });
  });

  describe('isTenOrFive', () => {
    it('should be a function', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.typeOf(isTenOrFive, 'function');
    });
    it('should return a Boolean', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.typeOf(isTenOrFive(25), 'boolean');
    });
  });

  describe('isInRange', () => {
    it('should be a function', () => {
      const isInRange = funcs.isInRange;
      assert.typeOf(isInRange, 'function');
    });
    it('should return a Boolean', () => {
      const isInRange = funcs.isInRange;
      assert.typeOf(isInRange(35), 'boolean');
    });
  });

  describe('isInteger', () => {
    it('should be a function', () => {
      const isInteger = funcs.isInteger;
      assert.typeOf(isInteger, 'function');
    });
    it('should return a Boolean', () => {
      const isInteger = funcs.isInteger;
      assert.typeOf(isInteger(2.5), 'boolean');
    });
  });

  describe('fizzBuzz', () => {
    it('should be a function', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.typeOf(fizzBuzz, 'function');
    });
    it('should return a string', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.typeOf(fizzBuzz(213), 'string');
    });
  });

  describe('isPrime', () => {
    it('should be a function', () => {
      const isPrime = funcs.isPrime;
      assert.typeOf(isPrime, 'function');
    });
    it('should return a Boolean', () => {
      const isPrime = funcs.isPrime;
      assert.typeOf(isPrime(121), 'boolean');
    });
  });

  describe('returnFirst', () => {
    it('should be a function', () => {
      const returnFirst = funcs.returnFirst;
      assert.typeOf(returnFirst, 'function');
    });
    // Should we test all types? Or is it worth type testing this kind of function?
    it('should return a number', () => {
      const returnFirst = funcs.returnFirst;
      assert.typeOf(returnFirst([ 1, 2, 3 ]), 'number');
    });
  });

  describe('returnLast', () => {
    it('should be a function', () => {
      const returnLast = funcs.returnLast;
      assert.typeOf(returnLast, 'function');
    });
    // Same Q? as above
    it('should return a number', () => {
      const returnLast = funcs.returnLast;
      assert.typeOf(returnLast([ 1, 2, 3 ]), 'number');
    });
  });

  describe('getArrayLength', () => {
    it('should be a function', () => {
      const getArrayLength = funcs.getArrayLength;
      assert.typeOf(getArrayLength, 'function');
    });
    it('should return a number', () => {
      const getArrayLength = funcs.getArrayLength;
      assert.typeOf(getArrayLength([ 1, 2, 3 ]), 'number');
    });
  });

  describe('incrementByOne', () => {
    it('should be a function', () => {
      const incrementByOne = funcs.incrementByOne;
      assert.typeOf(incrementByOne, 'function');
    });
    it('should return an array', () => {
      const incrementByOne = funcs.incrementByOne;
      assert.typeOf(incrementByOne([ 1, 2, 3 ]), 'array');
    });
  });

  describe('addItemToArray', () => {
    it('should be a function', () => {
      const addItemToArray = funcs.addItemToArray;
      assert.typeOf(addItemToArray, 'function');
    });
    it('should return an array', () => {
      const addItemToArray = funcs.addItemToArray;
      assert.typeOf(addItemToArray([ 1, 2, 3 ]), 'array');
    });
  });

  describe('addItemToFront', () => {
    it('should be a function', () => {
      const addItemToFront = funcs.addItemToFront;
      assert.typeOf(addItemToFront, 'function');
    });
    it('should return an array', () => {
      const addItemToFront = funcs.addItemToFront;
      assert.typeOf(addItemToFront([ 1, 2, 3 ]), 'array');
    });
  });

  describe('wordsToSentence', () => {
    it('should be a function', () => {
      const wordsToSentence = funcs.wordsToSentence;
      assert.typeOf(wordsToSentence, 'function');
    });
    it('should return a string', () => {
      const wordsToSentence = funcs.wordsToSentence;
      assert.typeOf(wordsToSentence(
        ['say', 'hello', 'to', 'my', 'little', 'friend']),
        'string');
    });
  });

  describe('contains', () => {
    it('should be a function', () => {
      const contains = funcs.contains;
      assert.typeOf(contains, 'function');
    });
    it('should return a Boolean', () => {
      const contains = funcs.contains;
      assert.typeOf(contains([ 1, 2, 3 ], 3), 'boolean');
    });
  });

  describe('addNumbers', () => {
    it('should be a function', () => {
      const addNumbers = funcs.addNumbers;
      assert.typeOf(addNumbers, 'function');
    });
    it('should return a number', () => {
      const addNumbers = funcs.addNumbers;
      assert.typeOf(addNumbers([ 1, 2, 3 ]), 'number');
    });
  });

  describe('averageTestScore', () => {
    it('should be a function', () => {
      const averageTestScore = funcs.averageTestScore;
      assert.typeOf(averageTestScore, 'function');
    });
    it('should return a number', () => {
      const averageTestScore = funcs.averageTestScore;
      assert.typeOf(averageTestScore([ 1, 2, 3 ]), 'number');
    });
  });

  describe('largestNumber', () => {
    it('should be a function', () => {
      const largestNumber = funcs.largestNumber;
      assert.typeOf(largestNumber, 'function');
    });
    it('should return a number', () => {
      const largestNumber = funcs.largestNumber;
      assert.typeOf(largestNumber([ 234, 1, 2, 3, 555]), 'number');
    });
  });

});
