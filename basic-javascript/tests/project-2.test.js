const assert = require('chai').assert;
const expect = require('chai').expect;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project 2 Functions', () => {
  describe('getBiggest', () => {
    it('should be a function', () => {
      const getBiggest = funcs.getBiggest;
      expect(getBiggest).to.be.a('function');
    });
    it('should return 2 if 2 and 1 are given', () => {
      const getBiggest = funcs.getBiggest;
      expect(getBiggest(2, 1)).to.equal(2);
    });
    it('should return a number', () => {
      const getBiggest = funcs.getBiggest;
      expect(getBiggest(1, 2)).to.be.a('number');
    });
  });
  describe('greeting', () => {
    it('should be a function', () => {
      const greeting = funcs.greeting;
      expect(greeting).to.be.a('function');
    });
    it('should return Hola if the language is Spanish', () => {
      const greeting = funcs.greeting;
      expect(greeting('Spanish')).to.equal('Hola!');
    });
    it('should return Guten Tag if the language is German', () => {
      const greeting = funcs.greeting;
      expect(greeting('German')).to.equal('Guten Tag!');
    });
  });
  describe('isTenOrFive', () => {
    it('should be a function', () => {
      const isTenOrFive = funcs.isTenOrFive;
      expect(isTenOrFive).to.be.a('function');
    });
    it('should return true if 10', () => {
      const isTenOrFive = funcs.isTenOrFive;
      expect(isTenOrFive(10)).to.equal(true);
    });
    it('should return true if 5', () => {
      const isTenOrFive = funcs.isTenOrFive;
      expect(isTenOrFive(5)).to.equal(true);
    });
  });
  describe('isInRange', () => {
    it('should be a function', () => {
      const isInRange = funcs.isInRange;
      expect(isInRange).to.be.a('function');
    });
    it('should return true if the given number is 30', () => {
      const isInRange = funcs.isInRange;
      expect(isInRange(30)).to.equal(true);
    });
    it('should return false if the given number is 100', () => {
      const isInRange = funcs.isInRange;
      expect(isInRange(100)).to.equal(false);
    });
  });
  describe('isInteger', () => {
    it('should be a function', () => {
      const isInteger = funcs.isInteger;
      expect(isInteger).to.be.a('function');
    });
    it('should return true if the given number is 10', () => {
      const isInteger = funcs.isInteger;
      expect(isInteger(10)).to.equal(true);
    });
    it('should return false if the given number is 10.1', () => {
      const isInteger = funcs.isInteger;
      expect(isInteger(10.1)).to.equal(false);
    });
  });
  describe('fizzBuzz', () => {
    it('should be a function', () => {
      const fizzBuzz = funcs.fizzBuzz;
      expect(fizzBuzz).to.be.a('function');
    });
    it('should return fizzBuzz if the given number is 15', () => {
      const fizzBuzz = funcs.fizzBuzz;
      expect(fizzBuzz(15)).to.equal('fizzbuzz');
    });
    it('should return 4 if the given number is 4', () => {
      const fizzBuzz = funcs.fizzBuzz;
      expect(fizzBuzz(4)).to.equal(4);
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
