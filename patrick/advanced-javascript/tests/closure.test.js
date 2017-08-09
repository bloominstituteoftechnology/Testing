const assert = require('chai').expect;
const funcs = require('../src/closure');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Closure', () => {

  describe('`counter`', () => {
    it('should be a function', () => {
      const counter = funcs.counter;
      expect(counter).to.be.a('function');
    });
  });

  describe('`counterFactory`', () => {
    it('should be a function', () => {
      const counterFactory = funcs.counterFactory;
      expect(counterFactory).to.be.a('function');
    });
  });

  describe('`cacheFunction`', () => {
    it('should be a function', () => {
      const cacheFunction = funcs.cacheFunction;
      expect(cacheFunction).to.be.a('function');
    });
  });

  describe('`limitFunctionCallCount`', () => {
    it('should be a function', () => {
      const limitFunctionCallCount = funcs.limitFunctionCallCount;
      expect(limitFunctionCallCount).to.be.a('function');
    });
  });

});
