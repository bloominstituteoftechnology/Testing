const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const funcs = require('../src/closure');

const expect = chai.expect;
const assert = chai.assert;
chai.use(sinonChai);

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Closures', () => {
  describe('`counter`', () => {
    it('should return a function', () => {
      const counter = funcs.counter;
      assert.typeOf(counter(), 'function');
    });
    it('should properly increment count', () => {
      const counter = funcs.counter();
      assert.equal(counter(), 1);
      counter();
      assert.equal(counter(), 3);
    });
  });

  describe('`counterFactory`', () => {
    it('should return an object with function properties `increment` and `decrement`', () => {
      const counterFactory = funcs.counterFactory;
      assert.typeOf(counterFactory(), 'object');
      assert.typeOf(counterFactory().increment, 'function');
      assert.typeOf(counterFactory().decrement, 'function');
    });
    it('should `increment` and `decrement` properly', () => {
      const counterFactory = funcs.counterFactory;
      const newFactory = counterFactory();
      assert.equal(newFactory.increment(), 1);
      newFactory.increment();
      newFactory.increment();
      assert.equal(newFactory.decrement(), 2);
    });
  });

  describe('`limitFunctionCallCount`', () => {
    it('should call function back no more than n times', () => {
      const limitCalls = funcs.limitFunctionCallCount;
      const cb = sinon.stub();
      cb.returns(1);
      const newLimit = limitCalls(cb, 7);
      newLimit();
      newLimit();
      newLimit();
      newLimit();
      newLimit();
      newLimit();
      newLimit();
      newLimit();
      newLimit();
      assert.equal(newLimit(), null);
      newLimit();
      expect(cb).to.have.callCount(7);
    });
  });

  describe('`cacheFunction`', () => {
    it('should cache results', () => {
      const cb = sinon.stub();
      const cacheFunction = funcs.cacheFunction(cb);
      cb.withArgs('apple').returns(1);
      cb.withArgs('banana').returns(2);
      cacheFunction('apple');
      cacheFunction('apple');
      expect(cb).to.have.callCount(1);
      cacheFunction('banana');
      cacheFunction('banana');
      expect(cb).to.have.callCount(2);
    });
  });
});
