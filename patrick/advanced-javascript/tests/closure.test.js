// const assert = require('chai').expect; // <--- was this intentional?
const expect = require('chai').expect;

const closureFunc = require('../src/closure');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Advanced-JS: Closure', () => {

  describe('`counter`', () => {
    it('should be a function', () => {
      const counter = closureFunc.counter;
      expect(counter).to.be.a('function');
    });
  });

  describe('`counterFactory`', () => {
    it('should be a function', () => {
      const counterFactory = closureFunc.counterFactory;
      expect(counterFactory).to.be.a('function');
    });
  });

  describe('`cacheFunction`', () => {
    it('should be a function', () => {
      const cacheFunction = closureFunc.cacheFunction;
      expect(cacheFunction).to.be.a('function');
    });
  });

  describe('`limitFunctionCallCount`', () => {
    it('should be a function', () => {
      const limitFunctionCallCount = closureFunc.limitFunctionCallCount;
      expect(limitFunctionCallCount).to.be.a('function');
    });
  });

});
