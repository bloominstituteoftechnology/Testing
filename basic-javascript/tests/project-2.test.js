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
      assert.equal();
      assert.equal();
      assert.equal();
    });
  });
  // describe('isInRange', () => {
  //   it('', () => {
  //     assert.equal();
  //     assert.equal();
  //     assert.equal();
  //   });
  // });
  // describe('isInteger', () => {
  //   it('', () => {
  //     assert.equal();
  //     assert.equal();
  //     assert.equal();
  //   });
  // });
  // describe('fizzBuzz', () => {
  //   it('', () => {
  //     assert.equal();
  //     assert.equal();
  //     assert.equal();
  //   });
  // });
  // describe('isPrime', () => {
  //   it('', () => {
  //     assert.equal();
  //     assert.equal();
  //     assert.equal();
  //   });
  // });
  // describe('returnFirst', () => {
  //   it('', () => {
  //     assert.equal();
  //     assert.equal();
  //     assert.equal();
  //   });
  // });
  // describe('returnLast', () => {
  //   it('', () => {
  //     assert.equal();
  //     assert.equal();
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
  //     assert.equal();
  //     assert.equal();
  //   });
  // });
  // describe('addItemToArray', () => {
  //   it('', () => {
  //     assert.equal();
  //     assert.equal();
  //     assert.equal();
  //   });
  // });
  // describe('addItemToFront', () => {
  //   it('', () => {
  //     assert.equal();
  //     assert.equal();
  //     assert.equal();
  //   });
  // });
  // describe('wordsToSencence', () => {
  //   it('', () => {
  //     assert.equal();
  //     assert.equal();
  //     assert.equal();
  //   });
  // });
  // describe('contains', () => {
  //   it('', () => {
  //     assert.equal();
  //     assert.equal();
  //     assert.equal();
  //   });
  // });
  // describe('addNumbers', () => {
  //   it('', () => {
  //     assert.equal();
  //     assert.equal();
  //     assert.equal();
  //   });
  // });
  // describe('averageTestScore', () => {
  //   it('', () => {
  //     assert.equal();
  //     assert.equal();
  //     assert.equal();
  //   });
  // });
  // describe('largestNumber', () => {
  //   it('', () => {
  //     assert.equal();
  //     assert.equal();
  //     assert.equal();
  //   });
  // });
});
