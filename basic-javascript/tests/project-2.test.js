/* eslint-disable prefer-destructuring */
const chai = require('chai');
const assert = require('chai').assert;
const expect = require('chai').expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const funcs = require('../src/project-2');

chai.use(sinonChai);

describe('Project-2 functions', () => {
  describe('getBiggest', () => {
    it('should be a function', () => {
      const getBiggest = funcs.getBiggest;
      assert.typeOf(getBiggest, 'function');
    });
    it('should return a number', () => {
      const num1 = 233;
      const num2 = 233;
      const getBiggest = funcs.getBiggest;
      const biggest = getBiggest(num1, num2);
      expect(biggest).to.be.a('number');
    });
    it('should return first arguement when it is larger', () => {
      const num1 = 233;
      const num2 = 232;
      const getBiggest = funcs.getBiggest;
      const biggest = getBiggest(num1, num2);
      expect(biggest).to.equal(num1);
    });
    it('should return second arguement when it is larger', () => {
      const num1 = 233;
      const num2 = 234;
      const getBiggest = funcs.getBiggest;
      const biggest = getBiggest(num1, num2);
      expect(biggest).to.equal(num2);
    });
  });

  describe('greeting', () => {
    it('should be a function', () => {
      const greeting = funcs.greeting;
      assert.typeOf(greeting, 'function');
    });
    it('should return a string', () => {
      const str1 = 'dog';
      const greeting = funcs.greeting;
      const greeted = greeting(str1);
      expect(greeted).to.be.a('string');
    });
    it('if language is German responds with a greeting in German', () => {
      const str1 = 'German';
      const greeting = funcs.greeting;
      const greeted = greeting(str1);
      expect(greeted).to.equal('Guten Tag!');
    });
    it('if language is Spanish responds with a greeting in Spanish', () => {
      const str1 = 'Spanish';
      const greeting = funcs.greeting;
      const greeted = greeting(str1);
      expect(greeted).to.equal('Hola!');
    });
    it('responds with a default greeting if no language is provided', () => {
      const str1 = '';
      const greeting = funcs.greeting;
      const greeted = greeting(str1);
      expect(greeted).to.equal('Hello!');
    });
  });

  describe('isTenOrFive', () => {
    it('should be a function', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.typeOf(isTenOrFive, 'function');
    });
    it('should return a boolean', () => {
      const input1 = 'dog';
      const isTenOrFive = funcs.isTenOrFive;
      const tenOrFive = isTenOrFive(input1);
      expect(tenOrFive).to.be.a('boolean');
    });
    it('if 10 or 5 returns true', () => {
      const num1 = 10;
      const isTenOrFive = funcs.isTenOrFive;
      const tenOrFive = isTenOrFive(num1);
      expect(tenOrFive).to.equal(true);
    });
    it('if anything that is not 10 or 5 returns false', () => {
      const num1 = true;
      const isTenOrFive = funcs.isTenOrFive;
      const tenOrFive = isTenOrFive(num1);
      expect(tenOrFive).to.equal(false);
    });
  });

  describe('isInRange', () => {
    it('should be a function', () => {
      const isInRange = funcs.isInRange;
      assert.typeOf(isInRange, 'function');
    });
    it('should return a boolean', () => {
      const num1 = 233;
      const isInRange = funcs.isInRange;
      const inRange = isInRange(num1);
      expect(inRange).to.be.a('boolean');
    });
    it('should return true when between 20 and 50', () => {
      const num1 = 24;
      const isInRange = funcs.isInRange;
      const inRange = isInRange(num1);
      expect(inRange).to.equal(true);
    });
    it('should return false when not between 20 and 50', () => {
      const num1 = 233;
      const isInRange = funcs.isInRange;
      const inRange = isInRange(num1);
      expect(inRange).to.equal(false);
    });
  });

  describe('isInteger', () => {
    it('should be a function', () => {
      const isInteger = funcs.isInteger;
      assert.typeOf(isInteger, 'function');
    });
    it('should return a boolean', () => {
      const num1 = 233.33;
      const isInteger = funcs.isInteger;
      const integer = isInteger(num1);
      expect(integer).to.be.a('boolean');
    });
    it('should return true when input is an integer', () => {
      const num1 = 24;
      const isInteger = funcs.isInteger;
      const integer = isInteger(num1);
      expect(integer).to.equal(true);
    });
    it('should return false when input is not an integer', () => {
      const num1 = 233.33;
      const isInteger = funcs.isInteger;
      const integer = isInteger(num1);
      expect(integer).to.equal(false);
    });
  });

  describe('fizzBuzz', () => {
    it('should be a function', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.typeOf(fizzBuzz, 'function');
    });
    it('should return the input number when not matching', () => {
      const num1 = 31;
      const fizzBuzz = funcs.fizzBuzz;
      const buzzed = fizzBuzz(num1);
      expect(buzzed).to.be.a('number');
    });
    it('should return fizzbuzz when divisible by 5 and 3', () => {
      const num1 = 15;
      const fizzBuzz = funcs.fizzBuzz;
      const buzzed = fizzBuzz(num1);
      expect(buzzed)
        .to.equal('fizzbuzz')
        .to.be.a('string');
    });
    it('should return fizz when divisible by 3', () => {
      const num1 = 6;
      const fizzBuzz = funcs.fizzBuzz;
      const buzzed = fizzBuzz(num1);
      expect(buzzed)
        .to.equal('fizz')
        .to.be.a('string');
    });
    it('should return buzz when divisible by 5', () => {
      const num1 = 10;
      const fizzBuzz = funcs.fizzBuzz;
      const buzzed = fizzBuzz(num1);
      expect(buzzed)
        .to.equal('buzz')
        .to.be.a('string');
    });
  });

  // finish this
  describe('isPrime', () => {
    it('should be a function', () => {
      const isPrime = funcs.isPrime;
      assert.typeOf(isPrime, 'function');
    });
  });

  describe('returnFirst', () => {
    it('should be a function', () => {
      const returnFirst = funcs.returnFirst;
      assert.typeOf(returnFirst, 'function');
    });
    it('should return the first element in an array', () => {
      const arr1 = [233.33, 3, 443, 3, 2];
      const returnFirst = funcs.returnFirst;
      const first = returnFirst(arr1);
      expect(first).to.equal(233.33);
    });
  });

  describe('returnLast', () => {
    it('should be a function', () => {
      const returnLast = funcs.returnLast;
      assert.typeOf(returnLast, 'function');
    });
    it('should return the last element in an array', () => {
      const arr1 = [233.33, 3, 443, 3, 2];
      const returnLast = funcs.returnLast;
      const last = returnLast(arr1);
      expect(last).to.equal(2);
    });
  });

  describe('getArrayLength', () => {
    it('should be a function', () => {
      const getArrayLength = funcs.getArrayLength;
      assert.typeOf(getArrayLength, 'function');
    });
    it('should return a number', () => {
      const arr1 = [233.33, 3, 443, 3, 2];
      const getArrayLength = funcs.getArrayLength;
      const length = getArrayLength(arr1);
      expect(length).to.be.a('number');
    });
    it('should return the length of an array', () => {
      const arr1 = [233.33, 3, 443, 3, 2];
      const getArrayLength = funcs.getArrayLength;
      const length = getArrayLength(arr1);
      expect(length).to.equal(5);
    });
  });

  describe('incrementByOne', () => {
    it('should be a function', () => {
      const incrementByOne = funcs.incrementByOne;
      assert.typeOf(incrementByOne, 'function');
    });
    it('should return an array', () => {
      const arr1 = [233.33, 3, 443, 3, 2];
      const incrementByOne = funcs.incrementByOne;
      const incremented = incrementByOne(arr1);
      expect(incremented).to.be.an('array');
    });
    it('should increment each item in the array by one', () => {
      const arr1 = [233.33, 3, 443, 3, 2];
      const incrementByOne = funcs.incrementByOne;
      const incremented = incrementByOne(arr1);
      // expect(incremented).to.equal([234.33, 4, 444, 4, 3]);
    });
  });

  // finish below

  describe('addItemToArray', () => {
    it('should be a function', () => {
      const addItemToArray = funcs.addItemToArray;
      assert.typeOf(addItemToArray, 'function');
    });
  });

  describe('addItemToFront', () => {
    it('should be a function', () => {
      const addItemToFront = funcs.addItemToFront;
      assert.typeOf(addItemToFront, 'function');
    });
  });

  describe('wordsToSentence', () => {
    it('should be a function', () => {
      const wordsToSentence = funcs.wordsToSentence;
      assert.typeOf(wordsToSentence, 'function');
    });
  });

  describe('contains', () => {
    it('should be a function', () => {
      const contains = funcs.contains;
      assert.typeOf(contains, 'function');
    });
  });
  describe('addNumbers', () => {
    it('should be a function', () => {
      const addNumbers = funcs.addNumbers;
      assert.typeOf(addNumbers, 'function');
    });
  });

  describe('averageTestScore', () => {
    it('should be a function', () => {
      const averageTestScore = funcs.averageTestScore;
      assert.typeOf(averageTestScore, 'function');
    });
  });

  describe('largestNumber', () => {
    it('should be a function', () => {
      const largestNumber = funcs.largestNumber;
      assert.typeOf(largestNumber, 'function');
    });
  });
});
