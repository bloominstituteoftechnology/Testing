const assert = require('chai').assert;
const expect = require('chai').expect;
const funcs = require('../src/project-2');
/* eslint-disable no-unused-expressions */
// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project-2 Functions', () => {
  describe('getBiggest', () => {
    const getBiggest = funcs.getBiggest;
    it('should be a function', () => {
      assert.typeOf(getBiggest, 'function');
    });
    it('should return the larger of x, y', () => {
      expect(getBiggest(2, 0)).to.eq(2);
      expect(getBiggest(3.1, 2)).to.eq(3.1);
    });
  });
  describe('isTenOrFive', () => {
    const isTenOrFive = funcs.isTenOrFive;
    it('should be a function', () => {
      assert.typeOf(isTenOrFive, 'function');
    });
    it('should return true for 10 or 5', () => {
      expect(isTenOrFive(5)).to.be.true;
      expect(isTenOrFive(10)).to.be.true;
      expect(isTenOrFive(1)).to.be.false;
    });
  });
  describe('isInRange', () => {
    const isInRange = funcs.isInRange;
    it('should be a function', () => {
      assert.typeOf(isInRange, 'function');
    });
    it('should return true for (num < 50 && num > 20)', () => {
      expect(isInRange(55)).to.be.false;
      expect(isInRange(21)).to.be.true;
      expect(isInRange(1)).to.be.false;
    });
  });

  describe('isInteger', () => {
    const isInteger = funcs.isInteger;
    it('should be a function', () => {
      assert.typeOf(isInteger, 'function');
    });
    it('should return true for whole numbers', () => {
      expect(isInteger(55)).to.be.true;
      expect(isInteger(21)).to.be.true;
      expect(isInteger(1.1)).to.be.false;
    });
  });
  describe('fizzBuzz', () => {
    const fizzBuzz = funcs.fizzBuzz;
    it('should be a function', () => {
      assert.typeOf(fizzBuzz, 'function');
    });
    it('should return fizzBuzz for x % 15 == 0, else fizz for x % 5 == 0 or buzz for x % 3 == 0 else the num', () => {
      expect(fizzBuzz(30)).to.eq('fizzbuzz');
      expect(fizzBuzz(25)).to.eq('buzz');
      expect(fizzBuzz(9)).to.eq('fizz');
      expect(fizzBuzz(1)).to.eq(1);
    });
  });
  describe('isPrime', () => {
    const isPrime = funcs.isPrime;
    it('should be a function', () => {
      assert.typeOf(isPrime, 'function');
    });
    it('should return true for prime numbers', () => {
      expect(isPrime(45)).to.be.false;
      expect(isPrime(21)).to.be.false;
      expect(isPrime(11)).to.be.true;
    });
  });
  describe('returnFirst', () => {
    const returnFirst = funcs.returnFirst;
    it('should be a function', () => {
      assert.typeOf(returnFirst, 'function');
    });
    it('should return the first element of an array', () => {
      expect(returnFirst([45, 10])).to.eq(45);
      expect(returnFirst([1, 3])).to.eq(1);
      expect(returnFirst([1, 3])).to.not.eq(3);
    });
  });
  describe('returnLast', () => {
    const returnLast = funcs.returnLast;
    it('should be a function', () => {
      assert.typeOf(returnLast, 'function');
    });
    it('should return the last element of an array', () => {
      expect(returnLast([45, 10])).to.eq(10);
      expect(returnLast([1, 3])).to.eq(3);
      expect(returnLast([1, 3])).to.not.eq(1);
    });
  });
  describe('getArrayLength', () => {
    const getArrayLength = funcs.getArrayLength;
    it('should be a function', () => {
      assert.typeOf(getArrayLength, 'function');
    });
    it('should return the length of the array or other element with length property', () => {
      expect(getArrayLength([45, 10])).to.eq(2);
      expect(getArrayLength([1, 3, 5])).to.eq(3);
      expect(getArrayLength('xxxx')).to.eq(4);
    });
  });
  describe('incrementByOne', () => {
    const incrementByOne = funcs.incrementByOne;
    it('should be a function', () => {
      assert.typeOf(incrementByOne, 'function');
    });
    it('should increment all elements of an array', () => {
      expect(incrementByOne([45, 10])).to.eql([46, 11]);
      expect(incrementByOne([1, 3, 5])).to.eql([2, 4, 6]);
    });
  });
  describe('addItemToArray', () => {
    const addItemToArray = funcs.addItemToArray;
    it('should be a function', () => {
      assert.typeOf(addItemToArray, 'function');
    });
    it('should append y to array x', () => {
      expect(addItemToArray([45, 10], 1)).to.eql([45, 10, 1]);
      expect(addItemToArray([1, 3, 5], 2)).to.eql([1, 3, 5, 2]);
    });
  });
  describe('addItemToFront', () => {
    const addItemToFront = funcs.addItemToFront;
    it('should be a function', () => {
      assert.typeOf(addItemToFront, 'function');
    });
    it('should prepend y to array x', () => {
      expect(addItemToFront([45, 10], 1)).to.eql([1, 45, 10]);
      expect(addItemToFront([1, 3, 5], 2)).to.eql([2, 1, 3, 5]);
    });
  });
  describe('wordsToSentence', () => {
    const wordsToSentence = funcs.wordsToSentence;
    it('should be a function', () => {
      assert.typeOf(wordsToSentence, 'function');
    });
    it('should join an array of strings together with spaces', () => {
      expect(wordsToSentence(['I', 'am', 'a', 'sentence', '.'])).to.eq('I am a sentence .');
      expect(wordsToSentence(['x', 'y'])).to.eq('x y');
    });
  });
  describe('contains', () => {
    const contains = funcs.contains;
    it('should be a function', () => {
      assert.typeOf(contains, 'function');
    });
    it('should return true if item y is in array x', () => {
      expect(contains([4, 5], 4)).to.be.true;
      expect(contains([4, 5], 5)).to.be.true;
      expect(contains([4, 5], 3)).to.be.false;
    });
  });
  describe('averageTestScore', () => {
    const averageTestScore = funcs.averageTestScore;
    it('should be a function', () => {
      assert.typeOf(averageTestScore, 'function');
    });
    it('should return the average of the array elements', () => {
      expect(averageTestScore([4, 5])).to.eq(4.5);
      expect(averageTestScore([4, 5, 6])).to.eq(5);
    });
  });
  describe('largestNumber', () => {
    const largestNumber = funcs.largestNumber;
    it('should be a function', () => {
      assert.typeOf(largestNumber, 'function');
    });
    it('should return the largest element in an array', () => {
      expect(largestNumber([4, 5])).to.eq(5);
      expect(largestNumber([4, 6, 5])).to.eq(6);
    });
  });
});
