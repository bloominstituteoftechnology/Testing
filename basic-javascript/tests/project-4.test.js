const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const assert = chai.assert;
const expect = chai.expect;
chai.use(sinonChai);
/* eslint-disable no-undef */
const {
  multiplyArguments,
  invokeCallback,
  sumArray,
  forEach,
  map,
  getUserConstructor,
  addPrototypeMethod,
  addReverseString,
  nFactorial,
  cacheFunction
  } = require('../src/project-4');

describe('Project-4 Functions', () => {
  describe('multiplyArguments', () => {
    it('should multiply the arguments given', () => {
      assert.equal(multiplyArguments(2, 3, 6, 10, 54), 19440);
      assert.equal(multiplyArguments(1, 1, 1, 1, 1, 1, 1, 1, 1, 10), 10);
    });
  });
  describe('invokeCallBack', () => {
    const callBack = sinon.spy();
    invokeCallback(callBack);
    it('should invoke the callback', () => {
    // expect(callBack).to.have.been.called;
    });
  });
  describe('sumArray', () => {
    it('should add the values in an array together and pass it to the callback', () => {
      const callBack = sinon.spy();
      sumArray([4, 5, 10, 12], callBack);
      expect(callBack).to.have.been.calledWith(31);
    });
  });
  describe('forEach', () => {
    it(('should call the callback with each value in the array'), () => {
      const callBack = sinon.spy();
      forEach([4, 5, 10, 12], callBack);
      expect(callBack).to.have.callCount(4);
      expect(callBack).to.have.been.calledWith(4);
      expect(callBack).to.have.been.calledWith(5);
      expect(callBack).to.have.been.calledWith(10);
      expect(callBack).to.have.been.calledWith(12);
    });
  });
  describe('map', () => {
    const callBack = sinon.spy(num => num * 2);
    const array = map([4, 5, 10, 12], callBack);
    it('should map over the values and pass each one to a callback', () => {
      expect(callBack).to.have.callCount(4);
      expect(callBack).to.have.been.calledWith(4);
      expect(callBack).to.have.been.calledWith(5);
      expect(callBack).to.have.been.calledWith(10);
      expect(callBack).to.have.been.calledWith(12);
    });
    it(('should push each callback result to a newarray and returned it'), () => {
      assert.sameOrderedMembers(array, [8, 10, 20, 24]);
    });
  });
  describe('getUserConstructor', () => {
    const Joe = {
      username: 'smiley',
      name: 'Joe',
      email: 'smileyjoe@gmail.com',
      password: 'password'
    };
    const User = getUserConstructor();
    const userJoe = new User(Joe);
    it('should create the user constructor with username, name, email, password', () => {
      assert.propertyVal(userJoe, 'username', 'smiley');
      assert.propertyVal(userJoe, 'name', 'Joe');
      assert.propertyVal(userJoe, 'email', 'smileyjoe@gmail.com');
      assert.propertyVal(userJoe, 'password', 'password');
    });
    it(('should have a method that says Hi'), () => {
      assert.equal(userJoe.sayHi(), 'Hello, my name is Joe');
    });
  });
  describe('addPrototypeMethod', () => {
    const object = {};
    addPrototypeMethod(Object);
    it('should create a prototype method that says hi', () => {
      assert.property(object, 'sayHi');
      assert.equal(object.sayHi(), 'Hello World!');
    });
  });
  describe('addReverseString', () => {
    const reverse = addReverseString();
    it('should reverse a string', () => {
      assert.equal('hello'.reverse(), 'olleh');
    });
  });
  describe('nFactorial', () => {
    it('should return the factorial of n', () => {
      assert.equal(nFactorial(20), 2432902008176640000);
      assert.equal(nFactorial(3), 6);
    });
  });
  describe('cacheFunction', () => {
    const callBack = sinon.spy(num => num * 2);
    const returnFunction = cacheFunction(callBack);
    it('should return the callBack if cache[x] is undefined', () => {
      returnFunction(5);
      // expect(callBack).to.have.been.called;
      returnFunction(5);
      expect(callBack).to.have.callCount(1);
    });
    it('should return x after the callBack', () => {
      assert.equal(returnFunction(5), 10);
    });
  });
});
