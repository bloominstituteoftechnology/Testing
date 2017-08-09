const assert = require('chai').expect;
const funcs = require('../src/closure');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const expect = chai.expect;
chai.use(sinonChai);

describe('Closure Function Tests', () => {

  describe('counter', () => {
    const counter = funcs.counter();
    it('should return a function', () => {
      expect(typeof counter).to.equal('function');
    });
    it('should return 1 when the returned function is invoked', () => {
      expect(counter()).to.equal(1);
    });
    it('should increment and return the number each time the function is invoked', () => {
      const counterFunc = funcs.counter();
      expect(counterFunc()).to.equal(1);
      expect(counterFunc()).to.equal(2);
      expect(counterFunc()).to.equal(3);
    });
  });

  describe('counterFactory', () => {
    const counterFactory = funcs.counterFactory;
    it('should return an object with an increment method and a decrement method', () => {
      expect(typeof counterFactory()).to.equal('object');
    });
    it('should have a working increment method that increments the private counter and returns the new value', () => {
      const result = counterFactory();
      expect(result.increment()).to.equal(1);
      expect(result.increment()).to.equal(2);
      expect(result.increment()).to.equal(3);
    });
    it('should have a working decrement method that decrements the private counter and returns the new value', () => {
      const result = counterFactory();
      expect(result.decrement()).to.equal(-1);
      expect(result.decrement()).to.equal(-2);
      expect(result.decrement()).to.equal(-3);
    });
  });

  describe('limitFunctionCallCount', () => {
    const limitFunctionCallCount = funcs.limitFunctionCallCount;
    it('should return a function', () => {
      expect(typeof limitFunctionCallCount()).to.equal('function');
    });
    it('should return a wrapped version of the original function that can only be invoked n times', () => {
      const cb = x => x;
      const result = limitFunctionCallCount(cb, 2);
      result();
      result();
      expect(result()).to.equal(null);
    });
    it('should properly handle arguments in the wrapped function', () => {
      const cb = num => (num + 1);
      const result = limitFunctionCallCount(cb, 2);
      expect(result(1)).to.equal(2);
      expect(result(9)).to.equal(10);
      expect(result(20)).to.equal(null);
    });
  });

  describe('cacheFunction', () => {
    const cacheFunction = funcs.cacheFunction;
    it('should return a function', () => {
      expect(typeof cacheFunction()).to.equal('function');
    });
    it('The cached function should return the correct result', () => {
      const cb = (num) => (num + 1);
      const result = cacheFunction(cb);
      expect(result(1)).to.equal(2);
      expect(result(2)).to.equal(3);
    });
    it('should cache function results and not rerun the original callback if the same arguments are presented', () => {
      const cb = sinon.spy();
      const result = cacheFunction(cb);
      result(1);
      result(1);
      result('Hello');
      result('Hello');
      expect(cb).to.have.been.callCount(2);
    });
  });

});
