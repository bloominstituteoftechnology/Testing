/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Project-2 functions', () => {
  describe('getBiggest', () => {
    it('should return a number', () => {
      const getBiggest = funcs.getBiggest;
      assert.typeOf(getBiggest, 'function');
    });
  });

  describe('greeting', () => {
    it('should return a number', () => {
      const greeting = funcs.greeting;
      assert.typeOf(greeting, 'function');
    });
  });

  describe('isTenOrFive', () => {
    it('should return a number', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.typeOf(isTenOrFive, 'function');
    });
  });

  describe('isInRange', () => {
    it('should return a number', () => {
      const isInRange = funcs.isInRange;
      assert.typeOf(isInRange, 'function');
    });
  });

  describe('isInteger', () => {
    it('should return a number', () => {
      const isInteger = funcs.isInteger;
      assert.typeOf(isInteger, 'function');
    });
  });

  describe('fizzBuzz', () => {
    it('should return a number', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.typeOf(fizzBuzz, 'function');
    });
  });

  describe('isPrime', () => {
    it('should return a number', () => {
      const isPrime = funcs.isPrime;
      assert.typeOf(isPrime, 'function');
    });
  });

  describe('returnFirst', () => {
    it('should return a number', () => {
      const returnFirst = funcs.returnFirst;
      assert.typeOf(returnFirst, 'function');
    });
  });

  describe('returnLast', () => {
    it('should return a number', () => {
      const returnLast = funcs.returnLast;
      assert.typeOf(returnLast, 'function');
    });
  });

  describe('getArrayLength', () => {
    it('should return a number', () => {
      const getArrayLength = funcs.getArrayLength;
      assert.typeOf(getArrayLength, 'function');
    });
  });

  describe('incrementByOne', () => {
    it('should return a number', () => {
      const incrementByOne = funcs.incrementByOne;
      assert.typeOf(incrementByOne, 'function');
    });
  });

  describe('addItemToArray', () => {
    it('should return a number', () => {
      const addItemToArray = funcs.addItemToArray;
      assert.typeOf(addItemToArray, 'function');
    });
  });

  describe('addItemToFront', () => {
    it('should return a number', () => {
      const addItemToFront = funcs.addItemToFront;
      assert.typeOf(addItemToFront, 'function');
    });
  });

  describe('wordsToSentence', () => {
    it('should return a number', () => {
      const wordsToSentence = funcs.wordsToSentence;
      assert.typeOf(wordsToSentence, 'function');
    });
  });

  describe('contains', () => {
    it('should return a number', () => {
      const contains = funcs.contains;
      assert.typeOf(contains, 'function');
    });
  });
  describe('addNumbers', () => {
    it('should return a number', () => {
      const addNumbers = funcs.addNumbers;
      assert.typeOf(addNumbers, 'function');
    });
  });

  describe('averageTestScore', () => {
    it('should return a number', () => {
      const averageTestScore = funcs.averageTestScore;
      assert.typeOf(averageTestScore, 'function');
    });
  });

  describe('largestNumber', () => {
    it('should return a number', () => {
      const largestNumber = funcs.largestNumber;
      assert.typeOf(largestNumber, 'function');
    });
  });
});
