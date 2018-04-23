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
  // describe('isTenOrFive', () => {
  //   it('', () => {
  //     assert();
  //     assert();
  //     assert();
  //   });
  // });
  // describe('isInRange', () => {
  //   it('', () => {
  //     assert();
  //     assert();
  //     assert();
  //   });
  // });
  // describe('isInteger', () => {
  //   it('', () => {
  //     assert();
  //     assert();
  //     assert();
  //   });
  // });
  // describe('fizzBuzz', () => {
  //   it('', () => {
  //     assert();
  //     assert();
  //     assert();
  //   });
  // });
  // describe('isPrime', () => {
  //   it('', () => {
  //     assert();
  //     assert();
  //     assert();
  //   });
  // });
  // describe('returnFirst', () => {
  //   it('', () => {
  //     assert();
  //     assert();
  //     assert();
  //   });
  // });
  // describe('returnLast', () => {
  //   it('', () => {
  //     assert();
  //     assert();
  //     assert();
  //   });
  // });
  // describe('getArrayLength', () => {
  //   it('', () => {
  //     assert();
  //     assert();
  //     assert();
  //   });
  // });
  // describe('incrementByOne', () => {
  //   it('', () => {
  //     assert();
  //     assert();
  //     assert();
  //   });
  // });
  // describe('addItemToArray', () => {
  //   it('', () => {
  //     assert();
  //     assert();
  //     assert();
  //   });
  // });
  // describe('addItemToFront', () => {
  //   it('', () => {
  //     assert();
  //     assert();
  //     assert();
  //   });
  // });
  // describe('wordsToSencence', () => {
  //   it('', () => {
  //     assert();
  //     assert();
  //     assert();
  //   });
  // });
  // describe('contains', () => {
  //   it('', () => {
  //     assert();
  //     assert();
  //     assert();
  //   });
  // });
  // describe('addNumbers', () => {
  //   it('', () => {
  //     assert();
  //     assert();
  //     assert();
  //   });
  // });
  // describe('averageTestScore', () => {
  //   it('', () => {
  //     assert();
  //     assert();
  //     assert();
  //   });
  // });
  // describe('largestNumber', () => {
  //   it('', () => {
  //     assert();
  //     assert();
  //     assert();
  //   });
  // });
});
