const assert = require('chai').expect;
const funcs = require('../src/closure');
const sinon = require('sinon');
// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('counter', () => {
  it('should be a functon', () => {
    const counter = funcs.counter;
    assert(counter).to.be.a('function');
  });
  it('should return a counter that can increment on each call', () => {
    const counter = funcs.counter();
    counter();
    counter();
    assert(counter()).to.be.equal(3);
  });
});
describe('counterFactory', () => {
  it('should be a functon', () => {
    const counterFactory = funcs.counterFactory;
    assert(counterFactory).to.be.a('function');
  });
  it('should return a counter object that can increment and decrement', () => {
    const counter = funcs.counterFactory();
    counter.increment();
    counter.decrement();
    counter.increment();
    assert(counter.increment()).to.equal(2);
  });
});
describe('cacheFunction', () => {
  it('should be a functon', () => {
    const cacheFunction = funcs.cacheFunction;
    assert(cacheFunction).to.be.a('function');
  });
  it('should only run callback once and return cache after that', () => {
    const cacheFunction = funcs.cacheFunction;
    const spy = sinon.spy();
    const cachedFunc = cacheFunction(spy);
    cachedFunc(6);
    cachedFunc(6);
    cachedFunc(6);
    assert(spy.callCount).to.equal(1);
  });
});
describe('limitFunctionCallCount', () => {
  it('should be a functon', () => {
    const limitFunctionCallCount = funcs.limitFunctionCallCount;
    assert(limitFunctionCallCount).to.be.a('function');
  });
  it('should limit a function call to n times', () => {
    const limitFunctionCallCount = funcs.limitFunctionCallCount;
    const spy = sinon.spy();
    const limitedFunc = limitFunctionCallCount(spy, 2);
    limitedFunc();
    limitedFunc();
    limitedFunc();
    limitedFunc();
    assert(spy.callCount).to.equal(2);
  });
});
