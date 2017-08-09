const assert = require('chai').assert;
const funcs = require('../src/project-4.js');
const sinon = require('sinon');

describe('Project-4 Functions', () => {

  describe('`multiplyArguments`', () => {
    it('should multiply the arguments', () => {
      const multiplyArguments = funcs.multiplyArguments;
      const result = multiplyArguments(2, 4, 5, 6, 7, 8, 9, 10);
      const result2 = multiplyArguments();
      assert.equal(result, 1209600);
      assert.equal(result2, 0);
    });
  });
  describe('`invokeCallback`', () => {
    it('should invoke the callback', () => {
      const invokeCallback = funcs.invokeCallback;
      const callback = sinon.spy();
      invokeCallback(callback);
      assert(callback.called);
    });
  });
  describe('`sumArray`', () => {
    it('should invoke the callback on the summed array', () => {
      const sumArray = funcs.sumArray;
      const numbers = [3, 4, 5];
      const callback = sinon.spy();
      sumArray(numbers, callback);
      assert(callback.calledWith(12));
    });
  });
  describe('`forEach`', () => {
    it('should invoke the callback on each array element', () => {
      const forEach = funcs.forEach;
      const numbers = [3, 4, 5];
      const callback = sinon.spy();
      forEach(numbers, callback);
      assert(callback.calledWith(3));
      assert(callback.calledWith(4));
      assert(callback.calledWith(5));
    });
  });
  describe('`map`', () => {
    it('should invoke the callback on each array element', () => {
      const map = funcs.map;
      const numbers = [3, 4, 5];
      const callback = sinon.spy();
      map(numbers, callback);
      assert(callback.calledWith(3));
      assert(callback.calledWith(4));
      assert(callback.calledWith(5));
    });
  });
  describe('`getUserConstructor`', () => {
    it('should invoke the callback on each array element', () => {
      const getUserConstructor = funcs.getUserConstructor;
      //const spy1 = sinon.spy(getUserConstructor);
      const User = getUserConstructor();
      // spy for User function
      const user1 = new User({
        username: 'austenIsAwesome',
        name: 'Austen Allred',
        email: 'austen@lambdaschool.com',
        password: '123LambdaSchoolRocks!',
      });
      let spy = sinon.spy(user1, 'sayHi');
      assert.equal(user1.username, 'austenIsAwesome');
      assert.equal(user1.name, 'Austen Allred');
      assert.equal(user1.email, 'austen@lambdaschool.com');
      assert.equal(user1.password, '123LambdaSchoolRocks!');
      user1.sayHi();
      assert.equal(spy.returnValues[0], 'Hello, my name is Austen Allred');
    });
  });
  describe('`addPrototypeMethod`', () => {
    it('should add sayHi to User', () => {
      const addPrototypeMethod = funcs.addPrototypeMethod;
      const User = function User(userObj) {
        this.username = userObj.username;
      };
      addPrototypeMethod(User);
      let newUser = new User({username: 'Bob'});
      let spy = sinon.spy(newUser, 'sayHi');
      newUser.sayHi();
      assert.equal(spy.returnValues[0], 'Hello World!');
    });
  });
  describe('`addReverseString`', () => {
    it('should invoke the callback', () => {
      const addReverseString = funcs.addReverseString;
      addReverseString();
      const dumb = 'dumb';
      const result = dumb.reverse();
      assert.equal(result, 'bmud');
    });
  });
  describe('`nFactorial`', () => {
    it('should provide the correct result', () => {
      const nFactorial = funcs.nFactorial;
      const number = 5;
      const result = nFactorial(5);
      assert.equal(result, 120);
    });
  });
  describe('`cacheFunction`', () => {
    it('should return the callback function', () => {
      const cacheFunction = funcs.cacheFunction;
      const callback = sinon.spy();
    });
  });
});