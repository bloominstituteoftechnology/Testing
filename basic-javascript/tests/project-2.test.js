/* eslint-disable prefer-destructuring */
const expect = require('chai').expect;
const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Project-2 Functions', () => {
  describe('`getBiggest`', () => {
    const getBiggest = funcs.getBiggest;
    it('should be a function', () => {
      assert.typeOf(getBiggest, 'function');
    });
    // begin here

    it('return the biggest number', () => {
      assert.equal(getBiggest(3, 2), 3);
    });
  });
  describe('`greeting`', () => {
    const greeting = funcs.greeting;
    it('should be a function', () => {
      assert.typeOf(greeting, 'function');
    });
    it('return the correct greeting in the corresponding language', () => {
      assert.equal(greeting('German'), 'Guten Tag!');
    });
  });
  describe('`isTenOrFive`', () => {
    const isTenOrFive = funcs.isTenOrFive;
    it('should return a function', () => {
      assert.typeOf(isTenOrFive, 'function');
    });
    it('should return a boolean', () => {
      expect(isTenOrFive()).to.be.a('boolean');
    });
    it('should return a boolean if the number given is equal to 10 or 5', () => {
      assert.equal(isTenOrFive(5), true);
      assert.equal(isTenOrFive(4), false);
    });
  });
  describe('`isInRange`', () => {
    const isInRange = funcs.isInRange;
    it('should return a function', () => {
      assert.typeOf(isInRange, 'function');
    });
    it('should return a boolean', () => {
      expect(isInRange()).to.be.a('boolean');
    });
    it('should return a boolean if the number is in range of 50-20', () => {
      assert.equal(isInRange(23), true);
      assert.equal(isInRange(4), false);
    });
  });
  describe('isInteger', () => {
    const isInteger = funcs.isInteger;
    it('should be a function', () => {
      assert.typeOf(isInteger, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(isInteger(), 'boolean');
    });
    it('should return a boolean if the number is an integer', () => {
      assert.equal(isInteger(1), true);
      assert.equal(isInteger(4.2), false);
    });
  });
  //   describe('fizzBuzz', () => {
  //     const fizzBuzz = funcs.fizzBuzz;
  //     it('should be a function', () => {
  //       assert.typeOf(fizzBuzz, 'function');
  //     });
  //     it('should return a number', () => {
  //       assert.typeOf(fizzBuzz(), 'number');
  //     });
  //   });

  describe('`isPrime`', () => {
    const isPrime = funcs.isPrime;
    it('should be a function', () => {
      assert.typeOf(isPrime, 'function');
    });
    it('should return a boolean if the number is an integer', () => {
      assert.equal(isPrime(1), false);
      assert.equal(isPrime(4.2), true);
    });
  });
  describe('`returnFirst`', () => {
    const returnFirst = funcs.returnFirst;
    it('should be a function', () => {
      assert.typeOf(returnFirst, 'function');
    });
  });
  describe('`returnLast`', () => {
    const returnLast = funcs.returnLast;
    it('should be a function', () => {
      assert.typeOf(returnLast, 'function');
    });
  });
  describe('`getArrayLength`', () => {
    const getArrayLength = funcs.getArrayLength;
    it('should be a function', () => {
      assert.typeOf(getArrayLength, 'function');
    });
  });
  describe('`incrementByOne`', () => {
    const incrementByOne = funcs.incrementByOne;
    it('should be a function', () => {
      assert.typeOf(incrementByOne, 'function');
    });
  });
  describe('`addItemToArray`', () => {
    const addItemToArray = funcs.addItemToArray;
    it('should be a function', () => {
      assert.typeOf(addItemToArray, 'function');
    });
  });
  describe('`addItemToFront`', () => {
    const addItemToFront = funcs.addItemToFront;
    it('should be a function', () => {
      assert.typeOf(addItemToFront, 'function');
    });
  });
  describe('`wordsToSentence`', () => {
    const wordsToSentence = funcs.wordsToSentence;
    it('should be a function', () => {
      assert.typeOf(wordsToSentence, 'function');
    });
  });
  describe('`contains`', () => {
    const contains = funcs.contains;
    it('should be a function', () => {
      assert.typeOf(contains, 'function');
    });
  });
  describe('`addNumbers`', () => {
    const addNumbers = funcs.addNumbers;
    it('should be a function', () => {
      assert.typeOf(addNumbers, 'function');
    });
  });
  describe('`averageTestScore`', () => {
    const averageTestScore = funcs.averageTestScore;
    it('should be a function', () => {
      assert.typeOf(averageTestScore, 'function');
    });
  });
  describe('`largestNumber`', () => {
    const largestNumber = funcs.largestNumber;
    it('should be a function', () => {
      assert.typeOf(largestNumber, 'function');
    });
  });
});
