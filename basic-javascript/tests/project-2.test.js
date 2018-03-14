/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project-2 Functions', () => {
  describe('getBiggest', () => {
    it('should be a function', () => {
      const { getBiggest } = funcs;
      assert.typeOf(getBiggest, 'function');
    });
    it('should return the larger of two numbers', () => {
      const { getBiggest } = funcs;
      assert(getBiggest(1, 2), 2);
    });
    it('should just return the number if the numbers are the same', () => {
      const { getBiggest } = funcs;
      assert(getBiggest(1, 1), 1);
    });
  });

  describe('greeting', () => {
    it('should be a function', () => {
      const { greeting } = funcs;
      assert.typeOf(greeting, 'function');
    });
    it('should return the greeting in appropriate language', () => {
      const { greeting } = funcs;
      assert(greeting('German'), 'Guten Tag!');
    });
    it('should return the greeting in appropriate language', () => {
      const { greeting } = funcs;
      assert(greeting('Spanish'), 'Hola!');
    });
    it('should return the greeting in appropriate language', () => {
      const { greeting } = funcs;
      assert(greeting('American'), 'Hello!');
    });
  });

  describe('isTenOrFive', () => {
    it('should be a function', () => {
      const { isTenOrFive } = funcs;
      assert.typeOf(isTenOrFive, 'function');
    });
    it('should return true if the number is 10 or 5', () => {
      const { isTenOrFive } = funcs;
      assert(isTenOrFive(10), true);
      assert(isTenOrFive(5), true);
    });
    it('should return false if the number is not equal to 10 or 5', () => {
      const { isTenOrFive } = funcs;
      assert.strictEqual(isTenOrFive(2), false);
    });
  });

  describe('isInRange', () => {
    it('should be a function', () => {
      const { isInRange } = funcs;
      assert.typeOf(isInRange, 'function');
    });
    it('should return true if the number is between 20 and 50 exclusive', () => {
      const { isInRange } = funcs;
      assert(isInRange(Math.floor(Math.random() * (49 - 21) + 21)));
    });
    it('should return false if the number is less than or equal to 20 or greater than or equal to 50', () => {
      const { isInRange } = funcs;
      assert.strictEqual(
        isInRange(Math.floor(Math.random() * (200 - 50) + 50)),
        false
      );
      assert.strictEqual(isInRange(Math.floor(Math.random() * 20)), false);
    });
    it('should return false if the number is negative', () => {
      const { isInRange } = funcs;
      assert.strictEqual(isInRange(-1), false);
    });
  });

  describe('isInteger', () => {
    it('should be a function', () => {
      const { isInteger } = funcs;
      assert.typeOf(isInteger, 'function');
    });
    it('should return true if the number is an integer', () => {
      const { isInteger } = funcs;
      assert(isInteger(4), true);
    });
    it('should return false if the number is a decimal', () => {
      const { isInteger } = funcs;
      assert.strictEqual(isInteger(3.14), false);
    });
    it('should return false if the number is a fraction', () => {
      const { isInteger } = funcs;
      assert.strictEqual(isInteger(1 / 2), false);
    });
  });
});
