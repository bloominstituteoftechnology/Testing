const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const funcs = require('../src/recursion');

const expect = chai.expect;
chai.use(sinonChai);

describe('Recursion', () => {
  describe('`nFibonacci`', () => {
    it('should be a function', () => {
      expect(funcs.nFibonacci).to.be.a('function');
    });
    it('should return the nth fibonacci number', () => {
      expect(funcs.nFibonacci(6)).to.equal(13);
    });
    it('should return a number', () => {
      expect(funcs.nFibonacci(6)).to.be.a('number');
    });
  });

  describe('`nFactorial`', () => {
    it('should be a function', () => {
      expect(funcs.nFactorial).to.be.a('function');
    });
    it('should return the correct factorial', () => {
      expect(funcs.nFactorial(5)).to.equal(120);
    });
    it('should return a number', () => {
      expect(funcs.nFactorial(5)).to.be.a('number');
    });
  });

  describe('`checkMatchingLeaves`', () => {
    it('should be a function', () => {
      expect(funcs.checkMatchingLeaves).to.be.a('function');
    });
    it('should return true if the leaves match', () => {
      const obj = {
        a: 1,
        b: 1,
        c: { d: 1 }
      };
      expect(funcs.checkMatchingLeaves(obj)).to.equal(true);
    });
    it('should return false if the leaves do not match', () => {
      const obj = {
        a: 1,
        b: 2,
        c: { d: 1 }
      };
      expect(funcs.checkMatchingLeaves(obj)).to.equal(false);
    });
    it('should return a boolean', () => {
      const obj = {
        a: 1,
        b: 1,
        c: { d: 1 }
      };
      expect(funcs.checkMatchingLeaves(obj)).to.be.a('boolean');
    });
  });
});
