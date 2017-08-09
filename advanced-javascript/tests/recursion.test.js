const assert = require('chai').expect;
const funcs = require('../src/recursion');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Recursion', () => {
  describe('nFib', () => {
    it('should have type function', () => {
      const fib = funcs.nFibonacci;
      expect(fib).to.be.a('function');
    });
  });
  describe('nFact', () => {
    it('should have type function', () => {
      const fact = funcs.nFactorial;
      expect(fact).to.be.a('function');
    });
  });
  describe('MatchingLeaves', () => {
    it('should have type function', () => {
      const leaves = funcs.leaves;
      expect(leaves).to.be.a('function');
    });
  });
});
