/* eslint-disable*/

const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project-2 Functions', () => {
  describe('getBiggest', () => {
    it('should be a function', () => {
      assert.typeOf(funcs.getBiggest, 'function');
    });
    it('should return the larger of two numbers', () => {
      assert(funcs.getBiggest(2, 3), 3);
    });
    it('should return the number if the numbers are the same', () => {
      assert(funcs.getBiggest(2, 2), 2);
    });
  });

  describe('greeting', () => {
    it('should be a function', () => {
      assert.typeOf(funcs.greeting, 'function');
    });
    it('should return greeting in appropriate language', () => {
      assert(funcs.greeting('German'), 'Guten Tag!');
    });
    it('should return greeting in appropriate language', () => {
      assert(funcs.greeting('Spanish'), 'Hola!');
    });
    it('should return greeting in appropriate language', () => {
      assert(funcs.greeting('jkasdlflkjsad'), 'Hello!');
    });
  });

  describe('isTenOrFive', () => {
    it('should be a function', () => {
      assert.typeOf(funcs.isTenOrFive, 'function');
    });
    it('should return true if the number is 10 or 5', () => {
      assert(funcs.isTenOrFive(10), true);
      assert(funcs.isTenOrFive(5), true);
    });
    it('should return false if the number is not equal to 10 or 5', () => {
      assert.strictEqual(funcs.isTenOrFive(2), false);
    });
  });

  describe('isInRange', () => {
    it('should be a function', () => {
      assert.typeOf(funcs.isInRange, 'function');
    });
    it('should return true if the number is between 20 and 50 exclusive', () => {
      assert(funcs.isInRange(Math.floor(Math.random() * (49 - 21) + 21)));
    });
    it('should return false if the number is less than or equal to 20 or greater than or equal to 50', () => {
      assert.strictEqual(funcs.isInRange(Math.floor(Math.random() * (200 - 50) + 50)), false);
      assert.strictEqual(funcs.isInRange(Math.floor(Math.random() * 20)), false);
    });
    it('should return false if the number is negative', () => {
      assert.strictEqual(funcs.isInRange(-1), false);
    });
  });

  describe('isInteger', () => {
    it('should be a function', () => {
      assert.typeOf(funcs.isInteger, 'function');
    });
    it('should return true if the number is an integer', () => {
      assert(funcs.isInteger(4), true);
    });
    it('should return false if the number is a decimal', () => {
      assert.strictEqual(funcs.isInteger(3.14), false);
    });
    it('should return false if the number is a fraction', () => {
      assert.strictEqual(funcs.isInteger(1/2), false);
    });
  })
});
