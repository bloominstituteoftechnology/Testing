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
      it('should be number 10', () => {
        const result = getBiggest(10, 2);
        assert.equal(result, 10);
      });
      it('should be number 3', () => {
        const result = getBiggest(3, 3);
        assert.equal(result, 3);
      });
    });
    describe('`greeting`', () => {
        const greeting = funcs.greeting;
        it('should be a function', () => {
          assert.typeOf(greeting, 'function');
        });
        it('should return a string - Guten Tag!', () => {
          const result = greeting('German');
          assert.equal(result, 'Guten Tag!');
        });
        it('should return a string - Hello!', () => {
          const result = greeting('English');
          assert.equal(result, 'Hello!');
        });
    });
    describe('`isTenOrFive`', () => {
        const isTenOrFive = funcs.isTenOrFive;
        it('should be a function', () => {
          assert.typeOf(isTenOrFive, 'function');
        });
        it('should return true', () => {
          const result = isTenOrFive(10);
          assert.equal(result, true);
        });
        it('should return false', () => {
          const result = isTenOrFive(4);
          assert.equal(result, false);
        });
    });
    describe('`isInRange`', () => {
        const isInRange = funcs.isInRange;
        it('should be a function', () => {
          assert.typeOf(isInRange, 'function');
        });
        it('should return true', () => {
          const result = isInRange(22);
          assert.equal(result, true);
        });
        it('should return false', () => {
          const result = isInRange(52);
          assert.equal(result, false);
        });
    });
    describe('`isInteger`', () => {
        const isInteger = funcs.isInteger;
        it('should be a function', () => {
          assert.typeOf(isInteger, 'function');
        });
        it('should return true', () => {
          const result = isInteger(157);
          assert.equal(result, true);
        });
        it('should return false', () => {
          const result = isInteger(23.7);
          assert.equal(result, false);
        });
    });
    describe('`fizzBuzz`', () => {
        const fizzBuzz = funcs.fizzBuzz;
        it('should be a function', () => {
          assert.typeOf(fizzBuzz, 'function');
        });
        it('should return fizzbuzz', () => {
          const result = fizzBuzz(15);
          assert.equal(result, 'fizzbuzz');
        });
        it('should return buzz', () => {
          const result = fizzBuzz(25);
          assert.equal(result, 'buzz');
        });
        it('should return fizz', () => {
            const result = fizzBuzz(9);
            assert.equal(result, 'fizz');
        });
        it('should return a number', () => {
            const result = fizzBuzz(11);
            assert.equal(result, 11);
        });
    });
    describe('`isPrime`', () => {
        const isPrime = funcs.isPrime;
        it('should be a function', () => {
          assert.typeOf(isPrime, 'function');
        });
        it('should be number true', () => {
          const result = isPrime(7);
          assert.equal(result, true);
        });
        it('should be number false', () => {
          const result = isPrime(6);
          assert.equal(result, false);
        });
        it('should be number false', () => {
            const result = isPrime(-1);
            assert.equal(result, false);
        });
    });
    describe('`returnFirst`', () => {
        const returnFirst = funcs.returnFirst;
        it('should be a function', () => {
          assert.typeOf(returnFirst, 'function');
        });
        it('should be number 5', () => {
          const result = returnFirst([5, 10, 3]);
          assert.equal(result, 5);
        });
    });
    describe('`returnLast`', () => {
        const returnLast = funcs.returnLast;
        it('should be a function', () => {
          assert.typeOf(returnLast, 'function');
        });
        it('should be number 7', () => {
          const result = returnLast([5, 10, 7]);
          assert.equal(result, 7);
        });
    });
});
