/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
const funcs = require('../src/project-2');

describe('Project-2 Functions', () => {
  describe('getBiggest', () => {
    it('should be a function', () => {
      const getBiggest = funcs.getBiggest;
      assert.typeOf(getBiggest, 'function');
    });
  });

  describe('greeting', () => {
    it('should be a function', () => {
      const greeting = funcs.greeting;
      assert.typeOf(greeting, 'function');
    });
    it('should return a string', () => {
      const languange = funcs.greeting('German');
      assert.typeOf(languange, 'string');
    });
  });
  describe('isTenOrFive', () => {
    it('should be a function', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.typeOf(isTenOrFive, 'function');
    });
    it('should be a boolean', () => {
      const num = funcs.isTenOrFive(10);
      assert.typeOf(num, 'boolean');
    });
  });
  describe('isInRange', () => {
    it('should be a function', () => {
      const isInRange = funcs.isInRange;
      assert.typeOf(isInRange, 'function');
    });
    it('should be a boolean', () => {
      const num = funcs.isInRange(50);
      assert.typeOf(num, 'boolean');
    });
  });
  describe('isInteger', () => {
    it('should be a function', () => {
      const isInteger = funcs.isInteger;
      assert.typeOf(isInteger, 'function');
    });
    it('should be a boolean', () => {
      const num = funcs.isInteger();
      assert.typeOf(num, 'boolean');
    });
    it('should return true on integers', () => {
      const results = funcs.isInteger(5);
      assert.equal(results, true);
    });
  });
  describe('fizzBuzz', () => {
    it('should be a function', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.typeOf(fizzBuzz, 'function');
    });
    it('should be a string', () => {
      const results = funcs.fizzBuzz(5);
      assert.typeOf(results, 'string');
    });
  });
  describe('isPrime', () => {
    it('should be a function', () => {
      const isPrime = funcs.isPrime;
      assert.typeOf(isPrime, 'function');
    });
    it('should be a boolean', () => {
      const result = funcs.isPrime(1);
      assert.typeOf(result, 'boolean'); 
    });
  });
});
