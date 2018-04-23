/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
const expect = require('chai').expect;

const {
  getBiggest,
  greeting,
  isTenOrFive,
  isInRange,
  isInteger,
  fizzBuzz,
  isPrime,
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber
} = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('basic-javascript-project-2.js', () => {
  describe('getBiggest', () => {
    it('should return the largest number', () => {
      assert.equal(getBiggest(5, 7), 7);
      assert.equal(getBiggest(9, 7), 9);
      assert.equal(getBiggest(-12, -4), -4);
    });
  });
  describe('greeting', () => {
    it('shour return the appropriatly languaged greeting', () => {
      assert.equal(greeting('German'), 'Guten Tag!');
      assert.equal(greeting('Spanish'), 'Hola!');
      assert.equal(greeting('german'), 'Hello!');
      assert.equal(greeting('spanish'), 'Hello!');
    });
  });
  describe('isTenOrFive', () => {
    it('should return true if 10 or 5', () => {
      assert.equal(isTenOrFive(5), true);
      assert.equal(isTenOrFive(10), true);
      assert.equal(isTenOrFive(4), false);
      assert.equal(isTenOrFive(501), false);
    });
  });
  describe('isInRange', () => {
    it('should be between 20 and 50', () => {
      assert.equal(isInRange(20), false);
      assert.equal(isInRange(50), false);
      assert.equal(isInRange(26), true);
      assert.equal(isInRange(-43), false);
    });
  });
  describe('isInteger', () => {
    it('', () => {
      assert.equal(isInteger(4.3), false);
      assert.equal(isInteger(7.4), false);
      assert.equal(isInteger(-3.2), false);
      assert.equal(isInteger(5.0), true);
    });
  });
  describe('fizzBuzz', () => {
    it('shour return fizz, buzz. fizzbuzz, or a number, depending on the input', () => {
      assert.equal(fizzBuzz(3), 'fizz');
      assert.equal(fizzBuzz(5), 'buzz');
      assert.equal(fizzBuzz(15), 'fizzbuzz');
      assert.equal(fizzBuzz(7), 7);
    });
  });
  describe('isPrime', () => {
    it('should return if num is prime', () => {
      assert.equal(isPrime(7), true);
      assert.equal(isPrime(4), false);
      assert.equal(isPrime(11), true);
    });
  });
  describe('returnFirst', () => {
    it('should return the first item from the array', () => {
      assert.equal(returnFirst([8, 5, 9, 1, 4]), 8);
      assert.equal(returnFirst(['first', 5, 3, 'last']), 'first');
    });
  });
  describe('returnLast', () => {
    it('should return the last item from the array', () => {
      assert.equal(returnLast([8, 5, 9, 1, 4]), 4);
      assert.equal(returnLast(['first', 5, 3, 'last']), 'last');
    });
  });
  describe('getArrayLength', () => {
    it('should return the legth of the array', () => {
      assert.equal(getArrayLength([0, 1, 2, 3, 4, 5, 6]), 7);
      assert.equal(getArrayLength([0, 1]), 2);
      assert.equal(getArrayLength([0]), 1);
    });
  });
  describe('incrementByOne', () => {
    const newArr = incrementByOne([5, 8, 4, 9, 2, 1, -3]);
    const response = [6, 9, 5, 10, 3, 2, -2];
    it('should return a new array', () => {
      assert.typeOf(newArr, 'array');
    });
    it('should increase each value in the array by 1', () => {
      newArr.forEach((item, index) => {
        assert.equal(item, response[index]);
      });
    });
  });
  describe('addItemToArray', () => {
    it('should add item to the end of the arr', () => {
      assert.deepEqual(addItemToArray([0, 2], 'added'), [0, 2, 'added']);
      assert.deepEqual(addItemToArray([], 'added'), ['added']);
      assert.deepEqual(addItemToArray([0, 'string', 2, 'this'], 'added'), [
        0,
        'string',
        2,
        'this',
        'added'
      ]);
    });
  });
  describe('addItemToFront', () => {
    it('should add item to the beginning of arr', () => {
      assert.deepEqual(addItemToFront([0, 2], 'added'), ['added', 0, 2]);
      assert.deepEqual(addItemToFront([], 'added'), ['added']);
    });
  });
  describe('wordsToSencence', () => {
    it('should create a sentence out of an array of words', () => {
      assert.equal(
        wordsToSentence([
          'Lambda',
          'School',
          'is',
          'the',
          'top',
          'rated',
          'programming',
          'school'
        ]),
        'Lambda School is the top rated programming school'
      );
      assert.equal(wordsToSentence(['Hello', 'World']), 'Hello World');
    });
  });
  describe('contains', () => {
    it('should return true if item appears in arr', () => {
      assert.equal(contains([0, 0, 2, 0, 2, 0, 1, 0, 1, 3], 0), true);
      assert.equal(contains(['This', 'that', 'this', 'this'], 'That'), false);
    });
  });
  describe('addNumbers', () => {
    it('should return the sum of all numbers in an array', () => {
      assert.equal(addNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]), 45);
      assert.equal(addNumbers([4]), 4);
      assert.equal(addNumbers([90, 500, 5, 1000]), 1595);
    });
  });
  describe('averageTestScore', () => {
    it('should return the average of the numbers in the array', () => {
      assert.equal(averageTestScore([1, 2, 3, 4, 5, 6, 7, 8, 9]), 5);
      assert.equal(averageTestScore([100, 90, 70, 60]), 80);
    });
  });
  describe('largestNumber', () => {
    it('should return the largest number in the array', () => {
      assert.equal(largestNumber([100, 58, 105, 98, 62]), 105);
      assert.equal(largestNumber([45, 9581, -102567]), 9581);
    });
  });
});
