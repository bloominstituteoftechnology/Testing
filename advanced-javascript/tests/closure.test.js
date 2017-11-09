const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const funcs = require('../src/closure');

const expect = chai.expect;
chai.use(sinonChai);

describe('Closures', () => {
  describe('`counter`', () => {
    it('should be a function', () => {
      expect(funcs.counter).to.be.a('function');
    });
    it('should return a function', () => {
      expect(funcs.counter()).to.be.a('function');
    });
    it('should correctly increment count', () => {
      const counter = funcs.counter();
      expect(counter()).to.equal(1);
      expect(counter()).to.equal(2);
    });
  });

  describe('`counterFactory`', () => {
    it('should be a function', () => {
      expect(funcs.counterFactory).to.be.a('function');
    });
    it('should return an object', () => {
      expect(funcs.counterFactory()).to.be.an('object');
    });
    it('should correctly increment and decrement', () => {
      const counter = funcs.counterFactory();
      expect(counter.increment()).to.equal(1);
      expect(counter.decrement()).to.equal(0);
    });
  });

  describe('`cacheFunction`', () => {
    it('should be a function', () => {
      expect(funcs.cacheFunction).to.be.a('function');
    });
    it('should only call the callback if the input has not been seen before', () => {
      const callBack = sinon.spy(num => num + 5);
      const cachedFunction = funcs.cacheFunction(callBack);
      cachedFunction(5);
      cachedFunction(5);
      expect(callBack).to.have.callCount(1);
    });
  });

  describe('`limitFunctionCallCount`', () => {
    it('should be a function', () => {
      expect(funcs.limitFunctionCallCount).to.be.a('function');
    });
    it('should only call the function the correct number of times', () => {
      const callBack = num => num + 5;
      const limitedFunction = funcs.limitFunctionCallCount(callBack, 2);
      expect(limitedFunction(5)).to.equal(10);
      expect(limitedFunction(6)).to.equal(11);
      expect(limitedFunction(7)).to.equal(null);
    });
  });
});
