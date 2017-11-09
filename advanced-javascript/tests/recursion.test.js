const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const recursionFunctions = require('../src/recursion');

const expect = chai.expect;
chai.use(sinonChai);
/* eslint-disable no-unused-expressions */
describe('recursion', () => {
  describe('nFibonacci', () => {
    const nFibonacci = recursionFunctions.nFibonacci;
    it('should be a function', () => {
      expect(nFibonacci).to.be.a('function');
    });
    it('should calculate the Fibonacci number', () => {
      expect(nFibonacci(5)).to.be.eq(8);
      expect(nFibonacci(7)).to.be.eq(21);
    });
  });
  describe('nFactorial', () => {
    const nFactorial = recursionFunctions.nFactorial;
    it('should be a function', () => {
      expect(nFactorial).to.be.a('function');
    });
    it('should calculate the Factorial number', () => {
      expect(nFactorial(5)).to.be.eq(120);
      expect(nFactorial(7)).to.be.eq(5040);
    });
  });
  describe('checkMatchingLeaves', () => {
    const checkMatchingLeaves = recursionFunctions.checkMatchingLeaves;
    it('should be a function', () => {
      expect(checkMatchingLeaves).to.be.a('function');
    });
    it('should calculate the Factorial number', () => {
      const sameO = { a: 1, b: 1, c: { d: 1, e: { d: 1, f: 1 } } };
      const notSameO = { a: 1, b: 1, c: { d: 1, e: { d: 2, f: 1 } } };
      expect(checkMatchingLeaves(sameO)).to.be.true;
      expect(checkMatchingLeaves(notSameO)).to.be.false;
    });
  });
});
