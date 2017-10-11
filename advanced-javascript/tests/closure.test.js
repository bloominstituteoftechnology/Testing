const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const funcs = require('../src/closure');

const expect = chai.expect;
chai.should();
chai.use(sinonChai);

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Closure', () => {
  describe('`counter`', () => {
    const counter = funcs.counter;
    it('should be a function', () => {
      expect(counter).to.be.a('function');
    });
    it('should return a function', () => {
      expect(counter()).to.be.a('function');
    });
    it('should increment the count each time the function is called', () => {
      const newCounter = counter();
      expect(newCounter()).to.equal(1);
      expect(newCounter()).to.equal(2);
      expect(newCounter()).to.equal(3);
      expect(newCounter()).to.equal(4);
      expect(newCounter()).to.equal(5);
    });
  });

  describe('`counterFactory`', () => {
    const counterFactory = funcs.counterFactory;
    it('should be a function', () => {
      expect(counterFactory).to.be.a('function');
    });
    it('should return an object with an increment and decrement method', () => {
      const counter = counterFactory();
      expect(counter).to.be.an('object');
      expect(counter.increment).to.be.a('function');
      expect(counter.decrement).to.be.a('function');
    });
    it('should increment or decrement on the respective method calls', () => {
      const counter = counterFactory();
      expect(counter.increment()).to.equal(1);
      expect(counter.increment()).to.equal(2);
      expect(counter.increment()).to.equal(3);
      expect(counter.decrement()).to.equal(2);
      expect(counter.decrement()).to.equal(1);
    });
  });

  describe('`limitFunctionCallCount`', () => {
    const limitFunctionCallCount = funcs.limitFunctionCallCount;
    it('should be a function', () => {
      expect(limitFunctionCallCount).to.be.a('function');
    });
    it('should return a function that can only be called n times', () => {
      const func = limitFunctionCallCount(() => 'Called', 3);
      expect(func).to.be.a('function');
      expect(func()).to.equal('Called');
      func();
      func();
      expect(func()).to.be.null;
    });
    it('should pass the callback arguments to the limited function', () => {
      const func = limitFunctionCallCount(
        (str1, str2, str3) => (str1 += str2 + str3),
        3,
      );
      expect(func('a', 'b', 'c')).to.equal('abc');
      expect(func('1', '2', '3')).to.equal('123');
      func('q', 'w', 'e');
      expect(func('1', '2', '3')).to.be.null;
    });
  });

  describe('`cacheFunction`', () => {
    const cacheFunction = funcs.cacheFunction;
    it('should be a function', () => {
      expect(cacheFunction).to.be.a('function');
    });
    it('should return a fucntion', () => {
      expect(cacheFunction()).to.be.a('function');
    });
    it('should cache the result and return it without re-calling the function', () => {
      const spy = sinon.spy();
      const func = cacheFunction(spy);
      func(23);
      func(23);
      func(23);
      func(23);
      func(23);
      func('Parrot');
      func('Parrot');
      func('Parrot');
      func('Parrot');
      spy.should.have.been.calledTwice;
    });
  });
});
