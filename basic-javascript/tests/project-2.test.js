/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Project-2 Functions', () => {
  describe('`getBiggest`', () => {
    const getBiggest = funcs.getBiggest;
    it('should be a function', () => {
      assert.typeOf(getBiggest, 'function');
    });
    it('should return x if it is greater than y', () => {
      assert.equal(getBiggest(20, 10), 20);
    });
    it('should return y if it is greater than x', () => {
      assert.equal(getBiggest(5, 8), 8);
    });
    it('should return either x or y if they are equal', () => {
      assert.equal(getBiggest(4, 4), 4);
    });
  });

  describe('`greeting`', () => {
    const greeting = funcs.greeting;
    it('should be a function', () => {
      assert.typeOf(greeting, 'function');
    });
    it('should return a string', () => {
      assert.typeOf(greeting(), 'string');
    });
    it("should return 'Guten Tag!' for German", () => {
      assert.equal(greeting('German'), 'Guten Tag!');
    });
    it("should return 'Hola!' for Spanish", () => {
      assert.equal(greeting('Spanish'), 'Hola!');
    });
    it("should return 'Hello!' if no argument is passed in or for a language other than German or Spanish", () => {
      assert.equal(greeting('Portuguese'), 'Hello!');
    });
  });

  describe('`isTenOrFive`', () => {
    const isTenOrFive = funcs.isTenOrFive;
    it('should be a function', () => {
      assert.typeOf(isTenOrFive, 'function');
    });
    it('should return a boolean', () => {
      assert.typeOf(isTenOrFive(), 'boolean');
    });
    it('should return true if num is 10 or 5', () => {
      assert.equal(isTenOrFive(10), true);
      assert.equal(isTenOrFive(5), true);
    });
    it('should return false if num is not 10 or 5', () => {
      assert.equal(isTenOrFive(15), false);
    });
  });

  describe('`isInRange`', () => {
    const isInRange = funcs.isInRange;
    it('should be a function', () => {
      assert.typeOf(isInRange, 'function');
    });
    it('should return a boolean', () => {
      assert.typeOf(isInRange(), 'boolean');
    });
    it('should return true if num is within the given range', () => {
      assert.equal(isInRange(49), true);
    });
    it('should return false if num is outside the given range', () => {
      assert.equal(isInRange(51), false);
    });
  });

  describe('`isInteger`', () => {
    const isInteger = funcs.isInteger;
    it('should be a function', () => {
      assert.typeOf(isInteger, 'function');
    });
    it('should return a boolean', () => {
      assert.typeOf(isInteger(), 'boolean');
    });
    it('should return true if num is an integer', () => {
      assert.equal(isInteger(3), true);
    });
    it('should return false if num is not an integer', () => {
      assert.equal(isInteger(7.3), false);
    });
  });

  describe('`fizzBuzz`', () => {
    const fizzBuzz = funcs.fizzBuzz;
    it('should be a function', () => {
      assert.typeOf(fizzBuzz, 'function');
    });
    it('should return fizz if divisible by three', () => {
      assert.equal(fizzBuzz(9), 'fizz');
    });
    it('should return buzz if divisible by five', () => {
      assert.equal(fizzBuzz(10), 'buzz');
    });
    it('should return fizzbuzz if divisible by five and three', () => {
      assert.equal(fizzBuzz(15), 'fizzbuzz');
    });
    it('should return num if not divisible by five or three', () => {
      assert.equal(fizzBuzz(2), 2);
    });
  });
});
