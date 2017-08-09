const assert = require('chai').expect;
const funcs = require('../src/closure');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Closures', () => {
  describe('counter', () => {
    it('should be a function', () => {
      const counter = funcs.counter;
      expect(counter).to.be.a('function);
    });
  });
  describe('counterFactory', () => {
    it('should be a function', () => {
      const factory = funcs.counterFactory;
      expect(factory).to.be.a('function);
    });
  });
  describe('limitFunctionCallCount', () => {
    it('should be a function', () => {
      const limit = funcs.limitFunctionCallCount;
      expect(limit).to.be.a('function);
    });
  });
  describe('cacheFunction', () => {
    it('should be a function', () => {
      const cache = funcs.cacheFunction;
      expect(cache).to.be.a('function);
    });
  });
});
