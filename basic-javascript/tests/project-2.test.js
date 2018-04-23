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
    it('should be a function', () => {
      const isInteger = funcs.isInteger;
      expect(isInteger).to.be.a('function');
    });
  });
  describe('fizzBuzz', () => {
    it('should be a function', () => {
      const fizzBuzz = funcs.fizzBuzz;
      expect(fizzBuzz).to.be.a('function');
    });
  });
  describe('isPrime', () => {
    it('should be a function', () => {
      const isPrime = funcs.isPrime;
      expect(isPrime).to.be.a('function');
    });
  });
  describe('returnFirst', () => {
    it('should be a function', () => {
      const returnFirst = funcs.returnFirst;
      expect(returnFirst).to.be.a('function');
    });
  });
  describe('returnLast', () => {
    it('should be a function', () => {
      const returnLast = funcs.returnLast;
      expect(returnLast).to.be.a('function');
    });
  });
  describe('getArrayLength', () => {
    it('should be a function', () => {
      const getArrayLength = funcs.getArrayLength;
      expect(getArrayLength).to.be.a('function');
    });
  });
  describe('incrementByOne', () => {
    it('should be a function', () => {
      const incrementByOne = funcs.incrementByOne;
      expect(incrementByOne).to.be.a('function');
    });
  });
  describe('addItemToArray', () => {
    it('should be a function', () => {
      const addItemToArray = funcs.addItemToArray;
      expect(addItemToArray).to.be.a('function');
    });
  });
  describe('addItemToFront', () => {
    it('should be a function', () => {
      const addItemToFront = funcs.addItemToFront;
      expect(addItemToFront).to.be.a('function');
    });
  });
  describe('wordsToSentence', () => {
    it('should be a function', () => {
      const wordsToSentence = funcs.wordsToSentence;
      expect(wordsToSentence).to.be.a('function');
    });
  });
  describe('contains', () => {
    it('should be a function', () => {
      const contains = funcs.contains;
      expect(contains).to.be.a('function');
    });
  });
  describe('addNumbers', () => {
    it('should be a function', () => {
      const addNumbers = funcs.addNumbers;
      expect(addNumbers).to.be.a('function');
    });
  });
  describe('averageTestScore', () => {
    it('should be a function', () => {
      const averageTestScore = funcs.averageTestScore;
      expect(averageTestScore).to.be.a('function');
    });
  });
  describe('largestNumber', () => {
    it('should be a function', () => {
      const largestNumber = funcs.largestNumber;
      expect(largestNumber).to.be.a('function');
    });
  });
});
