const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const closureFunctions = require('../src/closure');

const expect = chai.expect;
chai.use(sinonChai);

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Closures', () => {
  describe('counter', () => {
    const counter = closureFunctions.counter;
    it('should be a function', () => {
      expect(counter).to.be.a('function');
    });
    it('should return a function that returns the incremented count', () => {
      const incrementer = counter();
      expect(incrementer()).to.be.eq(1);
      expect(incrementer()).to.be.eq(2);
    });
  });
  describe('counterFactory', () => {
    const counterFactory = closureFunctions.counterFactory;
    it('should be a function', () => {
      expect(counterFactory).to.be.a('function');
    });
    it('should return a function that returns the incremented count', () => {
      const incDec = counterFactory();
      expect(incDec.increment()).to.be.eq(1);
      expect(incDec.decrement()).to.be.eq(0);
    });
  });
  describe('limitFunctionCallCount', () => {
    const limitFunctionCallCount = closureFunctions.limitFunctionCallCount;
    it('should be a function', () => {
      expect(limitFunctionCallCount).to.be.a('function');
    });
    it('should return a function that returns the incremented count', () => {
      const stub = sinon.stub();
      stub.onCall(0).returns(0);
      stub.onCall(1).returns(1);
      stub.onCall(2).returns(2);
      stub.onCall(3).returns(3);
      stub.onCall(4).returns(4);
      const arr = [0, 1, 2, 3, 4];
      const limited = limitFunctionCallCount(stub, 2);
      expect(limited(null)).to.eq(0);
      expect(limited(null)).to.eq(1);
      expect(limited(null)).to.eq(null);
    });
  });
  describe('cacheFunction', () => {
    const cacheFunction = closureFunctions.cacheFunction;
    it('should be a function', () => {
      expect(cacheFunction).to.be.a('function');
    });
    it('cacheFunction', () => {
      const spy = sinon.stub();
      spy.returns('x');
      const cache = cacheFunction(spy);
      cache(1);
      cache(1);
      cache(2);
      expect(spy).to.have.been.callCount(2);
      expect(spy.getCall(0)).to.have.be.calledWith(1);
      expect(spy.getCall(1)).to.have.be.calledWith(2);
    });
  });
});
