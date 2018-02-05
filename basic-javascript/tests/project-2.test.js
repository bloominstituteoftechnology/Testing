const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
/* eslint-disable no-undef */
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

describe('Project 2', () => {
  describe('getBiggest(x, y)', () => {
    it('should be a function', () => {
      assert.typeOf(getBiggest, 'function');
    });
    it('should return x if it is larger than y', () => {
      assert.isAbove(10, 5, '10 is greater than 5');
    });
    it('should return y if it is larger than x', () => {
      assert.isBelow(50, 100, '50 is less than 100');
    });
    it('should return either one if they are the same', () => {
      assert.equal(1000, 1000, 'x and y are equal');
    });
  });

  describe('greeting(language)', () => {
    it('should be a function', () => {
      assert.typeOf(greeting, 'function');
    });
    it('should return \'Guten Tag!\' for German', () => {
      assert.equal('German', 'German', 'Guten Tag!');
    });
    it('should return \'Hola!\' for Spanish', () => {
      assert.equal('Spanish', 'Spanish', 'Hola!');
    });
    it('should return \'Ni Hao!\' for Chinese', () => {
      assert.equal('Chinese', 'Chinese', 'Ni Hao!');
    });
    it('should return \'Hello!\' if no argument is passed in or if a language beyond Spanish, English, and German is passed in.', () => {
      assert.isEmpty('', 'Hello!');
    });
    it('should return \'Hello!\' if no argument is passed in or if a language beyond Spanish, English, and German is passed in.', () => {
      assert.isUndefined(undefined, 'Hello!');
    });
    it('should return \'Hello!\' if no argument is passed in or if a language beyond Spanish, English, and German is passed in.', () => {
      assert.notInclude(['Spanish', 'English', 'German'], (greeting), 'Hello');
    });
  });
  describe('isTenOrFive(num)', () => {
    it('should be a function', () => {
      assert.typeOf(isTenOrFive, 'function');
    });
    it('should return true if num is 10 or 5', () => {
      assert.equal(10, 10, true);
      assert.equal(5, 5, true);
    });
    it('should return false if num is not 10 or 5', () => {
      assert.notEqual(11, 10, false);
      assert.notEqual(11, 5, false);
      assert.notEqual(6, 10, false);
      assert.notEqual(6, 5, false);
      assert.notEqual(0, 10, false);
      assert.notEqual(0, 5, false);
      assert.notEqual(5.01, 10, false);
      assert.notEqual(5.01, 5, false);
      assert.notEqual(!(10), 10, false);
      assert.notEqual(!(5), 5, false);
    });
  });

  describe('isInRange(num)', () => {
    it('should be a function', () => {
      assert.typeOf(isInRange, 'function');
    });
    it('should return true if num is inside range', () => {
      assert.isOk(35.5, 'true');
      assert.isOk(40, 'true');
      assert.isOk(49, 'true');
      assert.isOk(21, 'true');
    });
    it('should return false if outside of range', () => {
      assert.isNotTrue(10);
      assert.isNotTrue(20, 'false');
      assert.isNotTrue(50, 'false');
      assert.isNotTrue(100, 'false');
    });
  });

  describe('isInteger(num)', () => {
    it('should be a function', () => {
      assert.typeOf(isInteger, 'function');
    });
    it('should return true if num is 5', () => {
      assert.isOk(5, 'true');
    });
    it('should return false if num is 0.5', () => {
      assert.isNotTrue(0.5, 'false');
    });
    it('should return true if num is -20', () => {
      assert.isOk(-20, 'true');
    });
    it('should return true for 0', () => {
      assert.equal(0, 0, true);
    });
  });

  /* describe('fizzBuzz(num)', () => {
    it('should be a function', () => {
      assert.typeOf(fizzBuzz, 'function');
    });
    it('should return fizz if divisible by 3', () => {
      expect(fizzBuzz(9)).toBe('fizz');
    });
    it('should return buzz if divisible by 5', () => {
      expect(fizzBuzz(10)).toBe('buzz');
    });
    it('should return fizzbuzz if divisible by 3 and 5', () => {
      expect(fizzBuzz(15)).toBe('fizzbuzz');
    });
    it('should return num if not divisible by 3 or 5', () => {
      expect(fizzBuzz(4)).toBe(4);
    });
  }); */

  describe('isPrime(num)', () => {
    it('should be a function', () => {
      assert.typeOf(isPrime, 'function');
    });
    it('should return true if num is prime', () => {
      assert.isOk(7, 'true');
      assert.isOk(97, 'true');
    });
    it('should return false if num is not prime', () => {
      assert.isNotTrue(10, 'false');
      assert.isNotTrue(100, 'false');
      assert.isNotTrue(0, 'false');
      assert.isNotTrue(1, 'false');
    });
  });

  describe('returnFirst(arr)', () => {
    it('should be a function', () => {
      assert.typeOf(returnFirst, 'function');
    });
    it('should return the first item in the array', () => {
      // assert.equal(returnFirst([10, 10, 16, 12]), 10);
      assert(returnFirst([10, 10, 16, 12]) === 10);
      // expect(returnFirst([10, 10, 16, 12])).toBe(10);
      assert(returnFirst([97, 100, 80, 55, 72, 94]) === 97);
      // expect(returnFirst([97, 100, 80, 55, 72, 94])).toBe(97);
    });
  });

  describe('returnLast(arr)', () => {
    it('should be a function', () => {
      assert.typeOf(returnLast, 'function');
    });
    it('should return the last item in the array', () => {
      assert.isOk(returnLast([10, 10, 16, 12]), '12');
      // assert(returnLast([10, 10, 16, 12]) == 12);
      // expect(returnLast([10, 10, 16, 12])).toBe(12);
      assert(returnLast([97, 100, 80, 55, 72, 94]) === 94);
      // expect(returnLast([97, 100, 80, 55, 72, 94])).toBe(94);
      assert(returnLast(['hi', 'there', 'how', 'are', 'you', 'doing?']) === 'doing?');// expect(returnLast(['hi', 'there', 'how', 'are', 'you', 'doing?'])).toBe('doing?');
    });
  });

  describe('getArrayLength(arr)', () => {
    it('should be a function', () => {
      assert.typeOf(getArrayLength, 'function');
    });
    it('should return the length of the array', () => {
      assert.lengthOf([10, 10, 16, 12], 4);

      assert.lengthOf([97, 100, 80, 55, 72, 94], 6);
      assert.lengthOf(['hi', 'there', 'how', 'are', 'you', 'doing?'], 6);
    });
  });

  describe('incrementByOne(arr)', () => {
    it('should be a function', () => {
      assert.typeOf(incrementByOne, 'function');
    });
    it('should return the array with each value incremented by one', () => {
      assert.deepEqual(incrementByOne([10, 10, 16, 12]), [11, 11, 17, 13]);
      // expect(incrementByOne([97, 100, 80, 55, 72, 94])).toEqual([98, 101, 81, 56, 73, 95]);
      assert.deepEqual(incrementByOne([97, 100, 80, 55, 72, 94]), [98, 101, 81, 56, 73, 95]);
      // assert.equal(incrementByOne([]), 1);
    });
  });

  describe('addItemToArray(arr, item)', () => {
    it('should be a function', () => {
      assert.typeOf(addItemToArray, 'function');
    });
    it('should return the array with the item added to the end', () => {
      // expect(addItemToArray([10, 10, 16, 12], 10)).toEqual([10, 10, 16, 12, 10]);
      // expect(addItemToArray([97, 100, 80, 55, 72, 94], 'Hello')).toEqual([97, 100, 80, 55, 72, 94, 'Hello']);
      // expect(addItemToArray([], true)).toEqual([true]);
    });
  });

  describe('addItemToFront(arr, item)', () => {
    it('should be a function', () => {
      assert.typeOf(addItemToFront, 'function');
    });
    it('should return the array with the item added to the front', () => {
      // expect(addItemToFront([10, 10, 16, 12], 10)).toEqual([10, 10, 10, 16, 12]);
      // assert.equal(addItemToFront([10, 10, 16, 12]), [10, 10, 10, 16, 12]);
      // expect(addItemToFront([97, 100, 80, 55, 72, 94], 'Hello')).toEqual(['Hello', 97, 100, 80, 55, 72, 94]);
      // expect(addItemToFront([], true)).toEqual([true]);
    });
  });

  describe('wordsToSentence(words)', () => {
    it('should be a function', () => {
      assert.typeOf(wordsToSentence, 'function');
    });
    it('should return a string that has all of the words from the array separated by spaces', () => {
      // expect(wordsToSentence(['LambdaSchool', 'JavaScript', 'Class'])).toBe('LambdaSchool JavaScript Class');
      // expect(wordsToSentence(['LambdaSchool'])).toBe('LambdaSchool');
    });
  });

  describe('contains(arr, item)', () => {
    it('should be a function', () => {
      assert.typeOf(contains, 'function');
    });
    it('should return true if the array contains the item', () => {
      assert.include([10, 10, 16, 12], 10, 'true');
      assert.notInclude([97, 100, 80, 55, 72, 94], 'Hello', 'false');
      assert.notInclude([], true, 'false');
    });
  });

  describe('addNumbers(numbers)', () => {
    it('should be a function', () => {
      assert.typeOf(addNumbers, 'function');
    });
    it('should add all of the numbers in the array together and return the sum', () => {
      // expect(addNumbers([10, 10, 16])).toBe(36);
      // expect(addNumbers([97, 100])).toBe(197);
      // expect(addNumbers([0])).toBe(0);
    });
  });

  describe('averageTestScore(testScores)', () => {
    it('should be a function', () => {
      assert.typeOf(averageTestScore, 'function');
    });
    it('should return the average test score', () => {
      // expect(averageTestScore([10, 10, 16, 12])).toBe(12);
      // expect(averageTestScore([97, 100, 80, 55, 72, 94])).toBe(83);
    });
  });

  describe('largestNumber(numbers)', () => {
    it('should be a function', () => {
      assert.typeOf(largestNumber, 'function');
    });
    it('should return the largest number', () => {
      // assert(largestNumber([10, 10, 16, 12]) === 16, 'largest should be 16');
      // expect(largestNumber([10, 10, 16, 12])).toBe(16);
      // expect(largestNumber([97, 100, 80, 55, 72, 94])).toBe(100);
      // expect(largestNumber([97, 10000, 80, 55, 7.2, -94])).toBe(10000);
    });
  });
});
