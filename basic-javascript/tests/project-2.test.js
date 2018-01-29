const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('PROJECT 2', () => {
  let standardMockArray = [];
  beforeEach(() => {
    standardMockArray = ['chicken tendies', 'crabby patties'];
  });
  afterEach(() => {
    standardMockArray = [];
  });

  describe('getBiggest', () => {
    it('should be the biggest number', () => {
        const getBiggest = funcs.getBiggest;
        assert.typeOf(getBiggest, 'function');
      });
  });
  describe('greeting', () => {
    it('should be a greeting', () => {
        const greeting = funcs.greeting;
        assert.typeOf(greeting, 'function');
      });

  });
  describe('isTenOrFive', () => {
    it('should be ten or five', () => {
        const isTenOrFive = funcs.isTenOrFive;
        assert.typeOf(isTenOrFive, 'function');
      });
  });
  describe('isInRange', () => {
    it('should be an integer', () => {
        const isInRange = funcs.isInRange;
        assert.typeOf(isInRange, 'function');
      });
  });
  describe('isInteger', () => {
    it('should be an integer', () => {
        const isInteger = funcs.isInteger;
        assert.typeOf(isInteger, 'function');
      });
  });
  describe('fizzBuzz', () => {
    it('should be an integer', () => {
        const fizzBuzz = funcs.fizzBuzz;
        assert.typeOf(fizzBuzz, 'function');
      });
  });
  describe('isPrime', () => {
    it('should be an integer', () => {
        const isPrime = funcs.isPrime;
        assert.typeOf(isPrime, 'function');
      });
  });
  describe('returnFirst', () => {
    it('should be an integer', () => {
        const returnFirst = funcs.returnFirst;
        assert.typeOf(returnFirst, 'function');
      });
  });
  describe('returnLast', () => {
    it('should be an integer', () => {
        const returnLast = funcs.returnLast;
        assert.typeOf(returnLast, 'function');
      });
  });
  describe('getArrayLength', () => {
    it('should be an integer', () => {
        const getArrayLength = funcs.getArrayLength;
        assert.typeOf(getArrayLength, 'function');
      });
  });
  describe('incrementByOne', () => {
    it('should be an integer', () => {
        const incrementByOne = funcs.incrementByOne;
        assert.typeOf(incrementByOne, 'function');
      });
  });
  describe('addItemToArray', () => {
    it('should be an integer', () => {
        const addItemToArray = funcs.addItemToArray;
        assert.typeOf(addItemToArray, 'function');
      });
  });
  describe('wordsToSentence', () => {
    it('should be an array', () => {
        const wordsToSentence = funcs.wordsToSentence;
        assert.typeOf(wordsToSentence, 'function');
      });
  });
  describe('contains', () => {
    it('should be an string', () => {
        const contains = funcs.contains;
        assert.typeOf(contains, 'function');
      });
  });
  describe('addNumbers', () => {
    it('should be an integer', () => {
        const addNumbers = funcs.addNumbers;
        assert.typeOf(addNumbers, 'function');
      });
  });
  describe('averageTestScore', () => {
    it('should be an integer', () => {
        const averageTestScore = funcs.averageTestScore;
        assert.typeOf(averageTestScore, 'function');
      });
  });
  describe('largestNumber', () => {
    it('should be an integer', () => {
        const largestNumber = funcs.largestNumber;
        assert.typeOf(largestNumber, 'function');
  });
});
});