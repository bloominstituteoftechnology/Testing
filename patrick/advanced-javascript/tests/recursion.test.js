// const assert = require('chai').expect; // <--- was this intentional?
const expect = require('chai').expect;

const Objfunc = require('../src/recursion');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Advanced-JS: Recursion', () => {

  describe('`nFibonacci`', () => {
    it('should be a function', () => {
      const nFibonacci = Objfunc.nFibonacci;
      expect(nFibonacci).to.be.a('function');
    });
  });

  describe('`nFactorial`', () => {
    it('should be a function', () => {
      const nFactorial = Objfunc.nFactorial;
      expect(nFactorial).to.be.a('function');
    });
  });

  describe('`checkMatchingLeaves`', () => {
    it('should be a function', () => {
      const checkMatchingLeaves = Objfunc.checkMatchingLeaves;
      expect(checkMatchingLeaves).to.be.a('function');
    });
  });

});
