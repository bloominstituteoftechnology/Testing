/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project-2 Functions', () => {
  describe('`getBiggest`', () => {
    it('should be a function', () => {
      const getBiggest = funcs.getBiggest;
      assert.typeOf(getBiggest, 'function');
    });
    it('should return a number', () => {
      const getBiggest = funcs.getBiggest(5, 4);
      assert.typeOf(getBiggest, 'number');
    });
    it('should return the biggest number', () => {
      const getBiggest = funcs.getBiggest(5, 4);
      assert.equal(getBiggest, 5, 'getBiggest(5, 4) should return 5.');
    });
    it('should return y if the numbers are equal', () => {
      const getBiggest = funcs.getBiggest(5, 5);
      assert.equal(getBiggest, 5, 'getBiggest(5, 5) should return 5.');
    });
  });

  describe('`greeting`', () => {
    it('should be a function', () => {
      const greeting = funcs.greeting;
      assert.typeOf(greeting, 'function');
    });
    it('should return a string', () => {
      const greeting = funcs.greeting('German');
      assert.typeOf(greeting, 'string');
    });
    it('should return Guten Tag', () => {
      const greeting = funcs.greeting('German');
      assert.equal(greeting, 'Guten Tag!', 'greeting should return Guten Tag!');
    });
  });

  describe('`isPrime`', () => {
    it('should be a function', () => {
      const isPrime = funcs.isPrime;
      assert.typeOf(isPrime, 'function');
    });
    it('should return a boolean', () => {
      const isPrime = funcs.isPrime(5);
      assert.isBoolean(isPrime, 'isPrime returns a boolean');
    });
    it('should return true', () => {
      const isPrime = funcs.isPrime(5);
      assert.isTrue(isPrime, 'isPrime returned true');
    });
  });

  describe('incrementByOne', () => {
    it('should be a function', () => {
      const incrementByOne = funcs.incrementByOne;
      assert.typeOf(incrementByOne, 'function');
    });
    it('should return an array', () => {
      const incrementByOne = funcs.incrementByOne([1, 2, 3]);
      assert.isArray(incrementByOne, 'returned an array');
    });
    it('should return an array with each element incremented by 1', () => {
      const incrementByOne = funcs.incrementByOne([43, 53, 36]);
      // const areEqual = [2, 3, 4].every((num, i) => num === incrementByOne[i]);
      assert.sameOrderedMembers(incrementByOne, [44, 54, 37], 'same ordered members');
    });
  });
});
