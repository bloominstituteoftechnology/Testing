const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const expect = chai.expect;
chai.use(sinonChai);

const {
    counter,
    counterFactory,
    limitFunctionCallCount,
    cacheFunction
  } = require('../src/closure');

describe('Closure', () => {
  describe('counter', () => {
    it('should return one when the function is invoked', () => {
      expect(counter()()).to.equal(1);
    });
  });
  describe('counterFactory', () => {
    const counterFunc = counterFactory();
    it('should decrement and increment appropriately', () => {
      expect(counterFunc.increment()).to.equal(1);
      expect(counterFunc.increment()).to.equal(2);
      expect(counterFunc.decrement()).to.equal(1);
    });
  });
  describe('limitFunctionCallCount', () => {
    const limited = limitFunctionCallCount((x, y) => x + y, 2);
    it('should return the callback a limited amount of times', () => {
      expect(limited(4, 5)).to.equal(9);
      expect(limited(2, 1)).to.equal(3);
      expect(limited(3, 5)).to.equal(null);
    });
  });
  describe('cacheFunction', () => {
    const cb = sinon.spy(v => v + 2);
    const cacheFunc = cacheFunction(cb);
    it('should run callback only if the input has not been seen before', () => {
      expect(cacheFunc(4)).to.equal(6);
      expect(cacheFunc(6)).to.equal(8);
      expect(cacheFunc(4)).to.equal(6);
      expect(cacheFunc(4)).to.equal(6);
      expect(cb).to.have.callCount(2);
    });
  });
});
