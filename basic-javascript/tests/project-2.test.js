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
    it('should return the first value from the array', () => {
      assert.equal(returnFirst([8, 5, 9, 1, 4]), 8);
      assert.equal(returnFirst(['first', 5, 3, 'last']), 'first');
    });
  });
  // describe('returnLast', () => {
  //   it('', () => {
  //     assert.equal();
  //   });
  // });
  // describe('getArrayLength', () => {
  //   it('', () => {
  //     assert.equal();
  //     assert.equal();
  //     assert.equal();
  //   });
  // });
  // describe('incrementByOne', () => {
  //   it('', () => {
  //     assert.equal();
  //   });
  // });
  // describe('addItemToArray', () => {
  //   it('', () => {
  //     assert.equal();
  //   });
  // });
  // describe('addItemToFront', () => {
  //   it('', () => {
  //     assert.equal();
  //   });
  // });
  // describe('wordsToSencence', () => {
  //   it('', () => {
  //     assert.equal();
  //   });
  // });
  // describe('contains', () => {
  //   it('', () => {
  //     assert.equal();
  //   });
  // });
  // describe('addNumbers', () => {
  //   it('', () => {
  //     assert.equal();
  //   });
  // });
  // describe('averageTestScore', () => {
  //   it('', () => {
  //     assert.equal();
  //   });
  // });
  // describe('largestNumber', () => {
  //   it('', () => {
  //     assert.equal();
  //   });
  // });
});
