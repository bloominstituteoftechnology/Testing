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
      const getBiggest = funcs.getBiggest;
      const result = getBiggest(5, 3);
      assert.typeOf(result, 'number');
    });
    it('should return the correct result', () => {
      const getBiggest = funcs.getBiggest;
      const result = getBiggest(5, 3);
      assert.equal(result, 5);
    });
  });
  describe('`greeting`', () => {
    it('should return Guten Tag!', () => {
      const greeting = funcs.greeting;
      const result = greeting('German');
      assert.equal(result, 'Guten Tag!');
    });
    it('should return Hello!', () => {
      const greeting = funcs.greeting;
      const result = greeting('English');
      assert.equal(result, 'Hello!');
    });
    it('should return Hola!', () => {
      const greeting = funcs.greeting;
      const result = greeting('Spanish');
      assert.equal(result, 'Hola!');
    });
    it('should return Hello!', () => {
      const greeting = funcs.greeting;
      const result = greeting();
      assert.equal(result, 'Hello!');
    });
  });
  describe('`isTenOrFive`', () => {
    it('should return true', () => {
      const isTenOrFive = funcs.isTenOrFive;
      const result = isTenOrFive(10);
      assert.equal(result, true);
    });
    it('should return true', () => {
      const isTenOrFive = funcs.isTenOrFive;
      const result = isTenOrFive(5);
      assert.equal(result, true);
    });
    it('should return false', () => {
      const isTenOrFive = funcs.isTenOrFive;
      const result = isTenOrFive(6);
      assert.equal(result, false);
    });
  });
});