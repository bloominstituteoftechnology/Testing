const chai = require('chai');

const assert = chai.assert;
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);
const funcs = require('../src/project-4');
/* eslint-disable no-unused-expressions, no-console */

describe('Project-4 Functions', () => {
  describe('multiplyArguments', () => {
    const multiplyArguments = funcs.multiplyArguments;
    // console.log('typeof multiplyArguments:', multiplyArguments);
    /*
    it('should be a function', () => {
      assert.typeOf(multiplyArguments, 'function');
    });
    */
    const t = multiplyArguments(2, 3, 10);
    const y = multiplyArguments(4, 5, 10);
    // console.log('t:', t, '  y:', y);
    it('multiplyArguments should multiply all its args together', () => {
      assert(t === 60, 't is 60');
      assert(y === 200, 't is 200');
    });
  });
  describe('invokeCallback', () => {
    const invokeCallback = funcs.invokeCallback;
    it('should be a function', () => {
      assert.typeOf(invokeCallback, 'function');
    });
    it('invokeCallback should call it callback', () => {
      const callBack = sinon.spy();
      invokeCallback(callBack);
      expect(callBack).to.have.been.calledOnce;
    });
  });
  describe('sumArray', () => {
    const sumArray = funcs.sumArray;
    it('should be a function', () => {
      assert.typeOf(sumArray, 'function');
    });
    it('invokeCallback should call it callback', () => {
      const callBack = sinon.spy();
      sumArray([1, 2, 3], callBack);
      expect(callBack).to.have.been.calledOnce;
      expect(callBack).to.have.been.calledWith(6);
    });
  });
  describe('forEach', () => {
    const forEach = funcs.forEach;
    it('should be a function', () => {
      assert.typeOf(forEach, 'function');
    });
    it('foreach should call callback for each element', () => {
      const callBack = sinon.spy();
      forEach([1, 2, 3], callBack);
      expect(callBack).to.have.been.callCount(3);
    });
  });
  describe('map', () => {
    const map = funcs.map;
    it('should be a function', () => {
      assert.typeOf(map, 'function');
    });
    it('map should call callback for each element', () => {
      const spy = sinon.spy();
      const arr = [1, 2, 3];
      const mapped = map(arr, spy);
      mapped.forEach((dummy, i) => {
        expect(spy.getCall(i)).to.have.be.calledWith(arr[i]);
      });
      expect(spy).to.have.been.callCount(arr.length);
    });
  });
  describe('getUserConstructor', () => {
    const getUserConstructor = funcs.getUserConstructor;
    const User = getUserConstructor();
    it('should be a function', () => {
      assert.typeOf(User, 'function');
    });
    it('User tests', () => {
      const Mark = new User({
        username: 'Mark User',
        name: 'Mark',
        email: 'Mark@email',
        password: 'testMarkPassord'
      });
      expect(Mark.sayHi()).to.be.eq('Hello, my name is Mark');
      expect(Mark.username).to.be.eq('Mark User');
    });
  });
  describe('addPrototypeMethod', () => {
    const addPrototypeMethod = funcs.addPrototypeMethod;
    it('should be a function', () => {
      assert.typeOf(addPrototypeMethod, 'function');
    });
    it('should add sayHi to prototype of passed function', () => {
      function ToAdd() {}
      addPrototypeMethod(ToAdd);
      const toAdd = new ToAdd();
      expect(toAdd.sayHi()).to.be.eq('Hello World!');
    });
  });

  describe('addReverseString', () => {
    const addReverseString = funcs.addReverseString;
    it('should be a function', () => {
      assert.typeOf(addReverseString, 'function');
    });
    it("should add reverse() to String's prototype", () => {
      const s = 'abc';
      // expect(s.reverse()).to.be.undefined;
      addReverseString();
      expect(s.reverse()).to.be.eq('cba');
    });
  });
  describe('nFactorial', () => {
    const nFactorial = funcs.nFactorial;
    it('should be a function', () => {
      assert.typeOf(nFactorial, 'function');
    });
    it('should return the factorial', () => {
      expect(nFactorial(4)).to.be.eq(24);
      expect(nFactorial(5)).to.be.eq(120);
    });
  });
  describe('cacheFunction', () => {
    const cacheFunction = funcs.cacheFunction;
    it('should be a function', () => {
      assert.typeOf(cacheFunction, 'function');
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
