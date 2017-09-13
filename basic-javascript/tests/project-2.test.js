const chai = require('chai');
const sinon = require('sinon');

const sinonChai = require('sinon-chai');

const expect = chai.expect;
const assert = require('chai').assert;

const funcs = require('../src/project-2');

chai.use(sinonChai);

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Project-2 Functions', () => {
  const getBiggest = funcs.getBiggest;
  describe('`getBiggest`', () => {
    it('should be a function', () => {
      assert.typeOf(getBiggest, 'function');
    });
        // begin here
    it('should equal 10', () => {
      expect(funcs.getBiggest(5, 10)).to.equal(10);
    });
    it('should equal 80', () => {
      expect(funcs.getBiggest(80, 7)).to.equal(80);
    });
  });

  describe('greeting', () => {
    const greeting = funcs.greeting;
    it('should be a function', () => {
      assert.typeOf(greeting, 'function');
    });
    it('should return "Guten Tag"', () => {
      expect(greeting('German')).to.equal('Guten Tag!');
    });
    it('should return "Hola"', () => {
      expect(greeting('Spanish')).to.equal('Hola!');
    });
  });

  describe('isTenOrFive', () => {
    const isTenOrFive = funcs.isTenOrFive;
    it('should be a function', () => {
      assert.typeOf(isTenOrFive, 'function');
    });
    it('should return whether or not the number is either five or ten', () => {
      expect(isTenOrFive(5)).to.equal(true);
    });
    it('should return whether or not the number is either five or ten', () => {
      expect(isTenOrFive('five')).to.equal(false);
    });
  });

  describe('isInRange', () => {
    const isInRange = funcs.isInRange;
    it('should be a function', () => {
      assert.typeOf(isInRange, 'function');
    });
    it('should return whether or not the number is between 20 (exclusive) and 50 (exclusive)', () => {
      expect(isInRange(5)).to.equal(false);
    });
    it('should return whether or not the number is between 20 (exclusive) and 50 (exclusive)', () => {
      expect(isInRange(25)).to.equal(true);
    });
  });

  describe('isInteger', () => {
    const isInteger = funcs.isInteger;
    it('should be a function', () => {
      assert.typeOf(isInteger, 'function');
    });
    it('should return whether or not the number is an integer', () => {
      expect(isInteger(5)).to.equal(true);
    });
    it('should return whether or not the number is between 20 (exclusive) and 50 (exclusive)', () => {
      expect(isInteger(5.5)).to.equal(false);
    });
  });

  describe('fizzBuzz', () => {
    const fizzBuzz = funcs.fizzBuzz;
    it('should be a function', () => {
      assert.typeOf(fizzBuzz, 'function');
    });
    it('should return whether or not the number is an integer', () => {
      expect(fizzBuzz(5)).to.equal('buzz');
    });
    it('should return whether or not the number is between 20 (exclusive) and 50 (exclusive)', () => {
      expect(fizzBuzz(3)).to.equal('fizz');
    });
    it('should return whether or not the number is between 20 (exclusive) and 50 (exclusive)', () => {
      expect(fizzBuzz(15)).to.equal('fizzbuzz');
    });
  });

  describe('isPrime', () => {
    const isPrime = funcs.isPrime;
    it('should be a function', () => {
      assert.typeOf(isPrime, 'function');
    });
    it('should return whether or not the number is a prime', () => {
      expect(isPrime(5)).to.equal(true);
    });
    it('should return whether or not the number is between 20 (exclusive) and 50 (exclusive)', () => {
      expect(isPrime(10)).to.equal(false);
    });
  });

  describe('returnFirst', () => {
    const returnFirst = funcs.returnFirst;
    it('should be a function', () => {
      assert.typeOf(returnFirst, 'function');
    });
    it('should return an array\'s first element', () => {
      expect(returnFirst([0, 1, 2])).to.equal(0);
    });
    it('should return an array\'s first element', () => {
      expect(returnFirst([])).to.equal(undefined);
    });
  });

  describe('returnLast', () => {
    const returnLast = funcs.returnLast;
    it('should be a function', () => {
      assert.typeOf(returnLast, 'function');
    });
    it('should return an array\'s last element', () => {
      expect(returnLast([0, 1, 2])).to.equal(2);
    });
    it('should return an array\'s last element', () => {
      expect(returnLast([])).to.equal(undefined);
    });
  });

  describe('getArrayLength', () => {
    const getArrayLength = funcs.getArrayLength;
    it('should be a function', () => {
      assert.typeOf(getArrayLength, 'function');
    });
    it('should return an array\'s length', () => {
      expect(getArrayLength([0, 1, 2])).to.equal(3);
    });
    it('should return an array\'s length', () => {
      expect(getArrayLength([])).to.equal(0);
    });
  });

  describe('incrementByOne', () => {
    const incrementByOne = funcs.incrementByOne;
    it('should be a function', () => {
      assert.typeOf(incrementByOne, 'function');
    });
    it('should increment each array element by one', () => {
      expect(incrementByOne([0, 1, 2])).to.deep.equal([1, 2, 3]);
    });
    it('should increment each array element by one', () => {
      expect(incrementByOne([])).to.deep.equal([]);
    });
  });

  describe('addItemToArray', () => {
    const addItemToArray = funcs.addItemToArray;
    it('should be a function', () => {
      assert.typeOf(addItemToArray, 'function');
    });
    it('should add a item to an array', () => {
      expect(funcs.addItemToArray([0, 1, 2], 3)).to.deep.equal([0, 1, 2, 3]);
    });
    it('should add an item to an array', () => {
      expect(addItemToArray([], 0)).to.deep.equal([0]);
    });
  });

  describe('addItemToFront', () => {
    const addItemToFront = funcs.addItemToFront;
    it('should be a function', () => {
      assert.typeOf(addItemToFront, 'function');
    });
    it('should add an element to the front of an array', () => {
      expect(addItemToFront([0, 1, 2], 3)).to.deep.equal([3, 0, 1, 2]);
    });
    it('should add an element to the front of an array', () => {
      expect(addItemToFront([], 0)).to.deep.equal([0]);
    });
  });

  describe('wordsToSentence', () => {
    const wordsToSentence = funcs.wordsToSentence;
    it('should be a function', () => {
      assert.typeOf(wordsToSentence, 'function');
    });
    it('should return a sentence', () => {
      expect(wordsToSentence(['Hello', 'World'])).to.equal('Hello World');
    });
  });

  describe('contains', () => {
    const contains = funcs.contains;
    it('should be a function', () => {
      assert.typeOf(contains, 'function');
    });
    it('should return a boolean if contained', () => {
      expect(contains([0, 1, 2], 2)).to.equal(true);
    });
    it('should return a boolean if contained', () => {
      expect(contains([], 'Hello')).to.equal(false);
    });
  });

  describe('addNumbers', () => {
    const addNumbers = funcs.addNumbers;
    it('should be a function', () => {
      assert.typeOf(addNumbers, 'function');
    });
    it('should return a reduced array', () => {
      expect(addNumbers([0, 1, 2])).to.equal(3);
    });
    it('should return a reduced array', () => {
      expect(addNumbers([])).to.equal(0);
    });
  });

  describe('averageTestScore', () => {
    const averageTestScore = funcs.averageTestScore;
    it('should be a function', () => {
      assert.typeOf(averageTestScore, 'function');
    });
    it('should return the average test score', () => {
      expect(averageTestScore([3, 3, 3, 3, 3, 3, 3, 3, 3])).to.equal(3);
    });
    it('should return the average test score', () => {
      expect(averageTestScore([100, 80, 60])).to.equal(80);
    });
  });

  describe('largestNumber', () => {
    const largestNumber = funcs.largestNumber;
    it('should be a function', () => {
      assert.typeOf(largestNumber, 'function');
    });
    it('should return the largest number', () => {
      expect(largestNumber([0, 1, 2])).to.equal(2);
    });
    it('should return the largest number', () => {
      expect(largestNumber([])).to.equal(0);
    });
    it('should return the largest number', () => {
      expect(largestNumber([-50, -25])).to.equal(0);
    });
  });
});
