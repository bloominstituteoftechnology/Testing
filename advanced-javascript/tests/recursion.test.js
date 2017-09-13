const chai = require('chai');

const expect = chai.expect;
const assert = chai.assert;

const {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves
  } = require('../src/recursion');

describe('Recursion', () => {
  describe('nFibonacci', () => {
    it('should return the nth fibonacci number', () => {
      assert.equal(nFibonacci(5), 8);
      assert.equal(nFibonacci(12), 233);
    });
  });
  describe('nFactorial', () => {
    it('should return the factorial of n', () => {
      assert.equal(nFactorial(5), 120);
      assert.equal(nFactorial(12), 479001600);
    });
  });
  describe('checkMatchingLeaves', () => {
    it('should return true if the leaves match', () => {
      const object = {
        a: 'value 1',
        b: 'value 1',
        c: 'value 1'
      };
      const nestedObject = {
        a: 'value 1',
        b: 'value 1',
        c: { d: { e: 'value 1' } }
      };
      assert.isTrue(checkMatchingLeaves(object));
      assert.isTrue(checkMatchingLeaves(nestedObject));
    });
    it('should return false if the leaves don\'t match', () => {
      const object = {
        a: 'value 1',
        b: 'value 2',
        c: 'value 1'
      };
      const nestedObject = {
        a: 'value 1',
        b: { c: 'value 2' },
        c: 'value 1'
      };
      assert.isFalse(checkMatchingLeaves(object));
      assert.isFalse(checkMatchingLeaves(nestedObject));
    });
  });
});
