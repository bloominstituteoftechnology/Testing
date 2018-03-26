/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

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
} = funcs;

describe('Project-2 tests', () => {
  describe('`getBiggest`', () => {
    it('should be a function', () => {
      assert.typeOf(getBiggest(2, 4), 'number');
    }) 
  })

  describe('`greeting`', () => {
    it('should be a function', () => {
      assert.typeOf(greeting('German'), 'string');
    })
    it('should output German', () => {
      assert.equal(greeting('German'), 'Guten Tag!');
    })
  })

  describe('`fizzBuzz`', () => {
    it('should be a function', () => {
      assert.typeOf(fizzBuzz, 'function')
    })
    it('should respond with fizzbuzz', () => {
      assert.equal(fizzBuzz(15), 'fizzbuzz');
    })
  })


})
