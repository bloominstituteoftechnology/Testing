/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
const expect = require('chai').expect;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project 2 Functions', () => {
  describe('getBiggest', () => {
    const getBiggest = funcs.getBiggest;
    it('should be a function', () => {
      expect(getBiggest).to.be.a('function');
    });
    it('should return a number', () => {
      const result = getBiggest(3, 7);
      expect(result).to.be.a('number');
    });
    it('should return the larger of two numbers', () => {
      const num1 = 23;
      const num2 = 107;
      const result = getBiggest(num1, num2);

      expect(result).to.equal(107);
    });
  });
  describe('greeting', () => {
    const greeting = funcs.greeting;
    it('should be a function', () => {
      expect(greeting).to.be.a('function');
    });
    it('should return a string', () => {
      const result = greeting();
      expect(result).to.be.a('string');
    });
    it('should return a German greeting if given the parameter German', () => {
      const result = greeting('German');
      expect(result).to.equal('Guten Tag!');
    });
    it('should return a Spanish greeting if given the parameter Spanish', () => {
      const result = greeting('Spanish');
      expect(result).to.equal('Hola!');
    });
    it('should return an English greeting if given no parameter, or no parameter that matches', () => {
      const result = greeting();
      expect(result).to.equal('Hello!');
    });
  });
  describe('isTenOrFive', () => {
    const isTenOrFive = funcs.isTenOrFive;
    it('should be a function', () => {
      expect(isTenOrFive).to.be.a('function');
    });
    it('should return true if given the number 5', () => {
      const result = isTenOrFive(5);
      expect(result).to.equal(true);
    });
    it('should return true if given the number 10', () => {
      const result = isTenOrFive(10);
      expect(result).to.equal(true);
    });
    it('should return false if given a number other than 10 or 5', () => {
      const result = isTenOrFive(11);
      expect(result).to.equal(false);
    });
  });
  describe('isInRange', () => {
    const isInRange = funcs.isInRange;
    it('should be a function', () => {
      expect(isInRange).to.be.a('function');
    });
    it('should return true if the number is in the range between 20 and 50', () => {});
  });
  describe('isInteger', () => {
    const isInteger = funcs.isInteger;
    it('should be a function', () => {
      expect(isInteger).to.be.a('function');
    });
  });
  describe('fizzBuzz', () => {
    const fizzBuzz = funcs.fizzBuzz;
    it('should be a function', () => {
      expect(fizzBuzz).to.be.a('function');
    });
    it('should return a string', () => {
      const result = fizzBuzz(15);
      expect(result).to.be.a('string');
    });
  });
  describe('isPrime', () => {
    const isPrime = funcs.isPrime;
    it('should be a function', () => {
      expect(isPrime).to.be.a('function');
    });
  });
  describe('returnFirst', () => {
    const returnFirst = funcs.returnFirst;
    it('should be a function', () => {
      expect(returnFirst).to.be.a('function');
    });
  });
  describe('returnLast', () => {
    const returnLast = funcs.returnLast;
    it('should be a function', () => {
      expect(returnLast).to.be.a('function');
    });
  });
  describe('getArrayLength', () => {
    const getArrayLength = funcs.getArrayLength;
    it('should be a function', () => {
      expect(getArrayLength).to.be.a('function');
    });
    it('should return a number', () => {
      const result = getArrayLength([3, 7]);
      expect(result).to.be.a('number');
    });
  });
  describe('incrementByOne', () => {
    const incrementByOne = funcs.incrementByOne;
    it('should be a function', () => {
      expect(incrementByOne).to.be.a('function');
    });
  });
  describe('addItemToArray', () => {
    const addItemToArray = funcs.addItemToArray;
    it('should be a function', () => {
      expect(addItemToArray).to.be.a('function');
    });
  });
  describe('addItemToFront', () => {
    const addItemToFront = funcs.addItemToFront;
    it('should be a function', () => {
      expect(addItemToFront).to.be.a('function');
    });
  });
  describe('wordsToSentence', () => {
    const wordsToSentence = funcs.wordsToSentence;
    it('should be a function', () => {
      expect(wordsToSentence).to.be.a('function');
    });
    it('should return a string', () => {
      const result = wordsToSentence(['a', 'sentence']);
      expect(result).to.be.a('string');
    });
  });
  describe('contains', () => {
    const contains = funcs.contains;
    it('should be a function', () => {
      expect(contains).to.be.a('function');
    });
  });
  describe('addNumbers', () => {
    const addNumbers = funcs.addNumbers;
    it('should be a function', () => {
      expect(addNumbers).to.be.a('function');
    });
    it('should return a number', () => {
      const result = addNumbers(3, 7);
      expect(result).to.be.a('number');
    });
  });
  describe('averageTestScore', () => {
    const averageTestScore = funcs.averageTestScore;
    it('should be a function', () => {
      expect(averageTestScore).to.be.a('function');
    });
    it('should return a number', () => {
      const result = averageTestScore(3, 7);
      expect(result).to.be.a('number');
    });
  });
  describe('largestNumber', () => {
    const largestNumber = funcs.largestNumber;
    it('should be a function', () => {
      expect(largestNumber).to.be.a('function');
    });
    it('should return a number', () => {
      const result = largestNumber([3, 7]);
      expect(result).to.be.a('number');
    });
  });
});
