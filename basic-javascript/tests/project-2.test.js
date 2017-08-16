const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Project-2 Functions', () => {
  describe('`getBiggest`', () => {
    it('should be a function', () => {
      const getBiggest = funcs.getBiggest;
      assert.typeOf(getBiggest, 'function');
    });
    it('should output a number', () => {
      const getBiggest = funcs.getBiggest;
      const num = Math.floor(Math.random()) * 10;
      const num2 = Math.floor(Math.random()) * 10;
      assert.typeOf(getBiggest(num, num2), 'number');
    });
    it('should properly return the biggest number', () => {
      const getBiggest = funcs.getBiggest;
      const num = Math.floor(Math.random()) * 10;
      const num2 = Math.floor(Math.random()) * 40;
      assert.equal(getBiggest(num, num2), num2);
    });
  });
  describe('`greeting`', () => {
    it('should be a function', () => {
      const greeting = funcs.greeting;
      assert.typeOf(greeting, 'function');
    });
    it('should output a string', () => {
      const greeting = funcs.greeting;
      const language = 'German'
      assert.typeOf(greeting(language), 'string');
    });
    it('should properly output a language', () => {
      const greeting = funcs.greeting;
      const language = 'Spanish'
      assert.equal(greeting(language), 'Hola!');
    });
  });
  describe('`isTenOrFive`', () => {
    it('should be a function', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.typeOf(isTenOrFive, 'function');
    });
    it('should output a boolean', () => {
      const isTenOrFive = funcs.isTenOrFive;
      const number = 5;
      assert.typeOf(isTenOrFive(number), 'boolean');
    });
    it('should properly output return true for 10', () => {
      const isTenOrFive = funcs.isTenOrFive;
      const number = 10;
      assert.equal(isTenOrFive(number), true);
    });
    it('should properly output return true for 5', () => {
      const isTenOrFive = funcs.isTenOrFive;
      const number = 5;
      assert.equal(isTenOrFive(number), true);
    });
    it('should properly output return false for any number but 10 or 5', () => {
      const isTenOrFive = funcs.isTenOrFive;
      const numberToTest = Math.floor(Math.random() * 111) + 11;
      assert.equal(isTenOrFive(numberToTest), false);
    });
  });
  describe('`isInRange`', () => {
    it('should be a function', () => {
      const isInRange = funcs.isInRange;
      assert.typeOf(isInRange, 'function');
    });
    it('should output a boolean', () => {
      const isInRange = funcs.isInRange;
      const number = 1;
      assert.typeOf(isInRange(number), 'boolean');
    });
    it('should properly check if the number is between 20 and 50', () => {
      const isInRange = funcs.isInRange;
      const number = Math.floor(Math.random() * (50 - 20) + 20);
      assert.equal(isInRange(number), true);
    });
  });
  describe('`isInteger`', () => {
    it('should be a function', () => {
      const isInteger = funcs.isInteger;
      assert.typeOf(isInteger, 'function');
    });
    it('should output a boolean', () => {
      const isInteger = funcs.isInteger;
      const number = 1;
      assert.typeOf(isInteger(number), 'boolean');
    });
  });
  describe('`fizzBuzz`', () => {
    it('should be a function', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.typeOf(fizzBuzz, 'function');
    });
    it('should output a fizzbuzz if number is divisible by 3 and 5', () => {
      const fizzBuzz = funcs.fizzBuzz;
      const number = 15;
      assert.equal(fizzBuzz(number), 'fizzbuzz');
    });
    it('should return buzz if number is divisible by 5', () => {
      const fizzBuzz = funcs.fizzBuzz;
      const number = 20;
      assert.equal(fizzBuzz(number), 'buzz');
    });
    it('should return fizz if number is divisible by 3', () => {
      const fizzBuzz = funcs.fizzBuzz;
      const number = 3;
      assert.equal(fizzBuzz(number), 'fizz');
    });
    it('should return number if number is not divisble by 5 or 3', () => {
      const fizzBuzz = funcs.fizzBuzz;
      const number = 11;
      assert.equal(fizzBuzz(number), number);
    });
  });
});
