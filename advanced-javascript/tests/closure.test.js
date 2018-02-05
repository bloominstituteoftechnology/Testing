const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should;
const funcs = require('../src/closure');
const chai = require('chai');
const spies = require('chai-spies');
const jest = require('jest');

chai.use(spies);
// const expect = chai.expect();
// jest.mock = ('chai', () => component => component)
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

const closureMethods = require('../src/closure');
/* eslint-disable no-undef */
describe('closure', () => {
  describe('counter', () => {
    it('should return a function', () => {
      assert.typeOf(closureMethods.counter(), 'function');
    });
    it('should return 1 when the returned function is invoked', () => {
      expect(closureMethods.counter()()).to.equal(1);
    });
    it('should increment and return the number each time the function is invoked', () => {
      const counterFunction = closureMethods.counter();
      expect(counterFunction()).to.equal(1);
      expect(counterFunction()).to.equal(2);
      expect(counterFunction()).to.equal(3);
      expect(counterFunction()).to.equal(4);
      expect(counterFunction()).to.equal(5);
    });
  });

  describe('counterFactory', () => {
    it('should return an object with an increment method and a decrement method', () => {
      assert.typeOf(closureMethods.counterFactory().increment, 'function');
      assert.typeOf(closureMethods.counterFactory().decrement, 'function');
    });
    it('should have a working increment method that increments the private counter and returns the new value', () => {
      const counter = closureMethods.counterFactory();
      expect(counter.increment()).to.equal(1);
      expect(counter.increment()).to.equal(2);
      expect(counter.increment()).to.equal(3);
      expect(counter.increment()).to.equal(4);
    });
    it('should have a working decrement method that decrements the private counter and returns the new value', () => {
      const counter = closureMethods.counterFactory();
      expect(counter.decrement()).to.equal(-1);
      expect(counter.decrement()).to.equal(-2);
      expect(counter.decrement()).to.equal(-3);
      expect(counter.decrement()).to.equal(-4);
    });
  });

  describe('limitFunctionCallCount', () => {
    it('should return a function', () => {
      assert.typeOf(closureMethods.limitFunctionCallCount(), 'function');
    });
    it('should return a wrapped version of the original function that can only be invoked n times', () => {
      const foo = () => (true);
      const limitedFunction = closureMethods.limitFunctionCallCount(foo, 2);
      expect(limitedFunction()).to.equal(true);
      limitedFunction();
      expect(limitedFunction()).to.equal(null);
    });
    it('should properly handle arguments in the wrapped function', () => {
      const foo = (x, y, z) => (x + y + z);
      const limitedFunction = closureMethods.limitFunctionCallCount(foo, 2);
      expect(limitedFunction(5, 10, 15)).to.equal(30);
      limitedFunction(0, 0, 0);
      expect(limitedFunction()).to.equal(null);
    });
  });

  describe('cacheFunction', () => {
    it('should return a function', () => {
      assert.typeOf(closureMethods.cacheFunction(), 'function');
    });
    it('The cached function should return the correct result', () => {
      const foo = x => (x * x);
      const cachedFunction = closureMethods.cacheFunction(foo);
      expect(cachedFunction(5)).to.equal(25);
    });
    /* I don't know how to fix the problem with jest, below. Most up to date version is installed

    it('should cache function results and not rerun the original callback if the same arguments are presented', () => {
      const foo = jest.fn();
      foo();
      const cachedFunction = closureMethods.cacheFunction(foo);
      cachedFunction(true);
      cachedFunction(true);
      cachedFunction(true);
      cachedFunction(true);
      cachedFunction(true);
      cachedFunction(10);
      cachedFunction(10);
      cachedFunction(10);
      cachedFunction(10);
      cachedFunction(10);
      expect(foo).to.have.been.called.exactly(2);
    }); */
  });
});
