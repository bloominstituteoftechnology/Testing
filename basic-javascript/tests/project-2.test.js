const assert = require('chai').assert;
const expect = require('chai').expect;
const funcs = require('../src/project-2');
const cases = require('../src/project-2.js');

describe('Project-2 Functions', () => {
  describe('`getBiggest`', () => {
    it('should return the larger of two numbers', () => {
      const getBiggest = funcs.getBiggest;
      assert.typeOf(getBiggest, 'function');
    });

    it('should return 10 given 10 and 5', () => {
      const getBiggest = cases.getBiggest;
      expect(getBiggest(5, 10)).to.equal(10);
    });

    it('should return a number', () => {
      const getBiggest = cases.getBiggest;
      expect(getBiggest(5, 10)).to.be.a('number');
    });
  });

  describe('`greeting`', () => {
    it('should return a greeting in the language specified', () => {
      const greeting = funcs.greeting;
      assert.typeOf(greeting, 'function');
    });

    it('should return Guten Tag! given Germany', () => {
      const greeting = cases.greeting;
      expect(greeting('German')).to.equal('Guten Tag!');
    });

    it('should return a string', () => {
      const greeting = cases.greeting;
      expect(greeting('German')).to.be.a('string');
    });
  });

  describe('`isTenOrFive`', () => {
    it('should return true if the number given is 10 or 5', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.typeOf(isTenOrFive, 'function');
    });

    it('should return true given 10', () => {
      const isTenOrFive = cases.isTenOrFive;
      expect(isTenOrFive(10)).to.equal(true);
    });

    it('should return a boolean', () => {
      const isTenOrFive = cases.isTenOrFive;
      expect(isTenOrFive(5)).to.be.a('boolean');
    });
  });

  describe('`isInRange`', () => {
    it('should return true if the number given is between 20 and 50', () => {
      const isInRange = funcs.isInRange;
      assert.typeOf(isInRange, 'function');
    });

    it('should return true given 30', () => {
      const isInRange = cases.isInRange;
      expect(isInRange(30)).to.equal(true);
    });

    it('should return a boolean', () => {
      const isInRange = cases.isInRange;
      expect(isInRange(5)).to.be.a('boolean');
    });
  });

  describe('`isInteger`', () => {
    it('should return true if the number given is an integer', () => {
      const isInteger = funcs.isInteger;
      assert.typeOf(isInteger, 'function');
    });

    it('should return true given 30', () => {
      const isInteger = cases.isInteger;
      expect(isInteger(30)).to.equal(true);
    });

    it('should return a boolean', () => {
      const isInteger = cases.isInteger;
      expect(isInteger(5)).to.be.a('boolean');
    });
  });

  describe('`fizzBuzz`', () => {
    it('should return fizzbuzz, fizz, or buzz in the right context', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.typeOf(fizzBuzz, 'function');
    });

    it('should return fizzbuzz given 15', () => {
      const fizzBuzz = cases.fizzBuzz;
      expect(fizzBuzz(15)).to.equal('fizzbuzz');
    });

    it('should return a string', () => {
      const fizzBuzz = cases.fizzBuzz;
      expect(fizzBuzz(15)).to.be.a('string');
    });
  });

  describe('`isPrime`', () => {
    it('should return true if the number is a prime number', () => {
      const isPrime = funcs.isPrime;
      assert.typeOf(isPrime, 'function');
    });

    it('should return true given 23', () => {
      const isPrime = cases.isPrime;
      expect(isPrime(23)).to.equal(true);
    });

    it('should return a boolean', () => {
      const isPrime = cases.isPrime;
      expect(isPrime(15)).to.be.a('boolean');
    });
  });

// Stopping here because the cat said so.

});