const assert = require('chai').expect;
const funcs = require('../src/closure');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const expect = chai.expect;
chai.use(sinonChai);

// whoops.. there is no test suite for this file. You'll simply just have to create one :/


describe('Closures', () => {
  describe('counter', () => {
    it('should be a function', () => {
      const counter = funcs.counter;
      expect(counter).to.be.a('function');
    });
    it('should return 1 when invoked', () => {
      const counter = funcs.counter();
      expect(counter()).to.equal(1);
    });
    it('should increment each time invoked', () => {
      const counter = funcs.counter();
      expect(counter()).to.equal(1);
      expect(counter()).to.equal(2);
      expect(counter()).to.equal(3);
      expect(counter()).to.equal(4);
      expect(counter()).to.equal(5);
    });
  });
  describe('counterFactory', () => {
    it('should be a function', () => {
      const factory = funcs.counterFactory;
      expect(factory).to.be.a('function');
    });
    it('should return an object with 2 methods', () => {
      const factory = funcs.counterFactory;
      expect(factory()).to.be.an('object');
      expect(factory().increment).to.be.a('function');
      expect(factory().decrement).to.be.a('function');
    });
    it('should increment each time increment invoked', () => {
      const factory = funcs.counterFactory();
      expect(factory.increment()).to.be.equal(1);
      expect(factory.increment()).to.be.equal(2);
      expect(factory.increment()).to.be.equal(3);
      expect(factory.increment()).to.be.equal(4);
    });
    it('should decrement each time increment invoked', () => {
      const factory = funcs.counterFactory();
      expect(factory.decrement()).to.be.equal(-1);
      expect(factory.decrement()).to.be.equal(-2);
      expect(factory.decrement()).to.be.equal(-3);
      expect(factory.decrement()).to.be.equal(-4);
    });
  });
  describe('limitFunctionCallCount', () => {
    it('should be a function', () => {
      const limit = funcs.limitFunctionCallCount;
      expect(limit).to.be.a('function');
    });
  });
  describe('cacheFunction', () => {
    it('should be a function', () => {
      const cache = funcs.cacheFunction;
      expect(cache).to.be.a('function');
    });
    it('should return a function', () => {
      const cache = funcs.cacheFunction;
      expect(cache()).to.be.a('function');
    });
    it('should invoke a callback', () => {
      const cache = funcs.cacheFunction;
      const spy = sinon.spy();
      const foo = cache(spy);
      const result = foo(2);
      expect(spy).to.have.been.calledOnce;
    });
    it('should cache results and only return if results are uncached', () => {
      const cache = funcs.cacheFunction;
      const spy = sinon.spy();
      const foo = cache(spy);
      foo(1);
      foo(1);
      foo(true);
      expect(spy.callCount).to.equal(2);
    });
  });
});
