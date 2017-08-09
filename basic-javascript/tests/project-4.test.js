const assert = require('chai').assert;
let sinon = require("sinon");
const funcs = require('../src/project-4.js');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Project-4 Functions', () => {

  describe('multiplyArguments', () => {

    it('should be a function', () => {
      const multiplyArguments = funcs.multiplyArguments;
      assert.isFunction(multiplyArguments);
    });
    it('should return 0 is no arguments are passed in', () => {
      const multiplyArguments = funcs.multiplyArguments;
      const result = multiplyArguments();
      assert.equal(result, 0);
    });

    it('should correctly multiply the arguments', () => {
      const multiplyArguments = funcs.multiplyArguments;
      const result = multiplyArguments(5,4,5);
      assert.equal(result, 100);
    });
  });

  describe('invokeCallback', () => {
    it('should be a function', () => {
      const invokeCallback = funcs.invokeCallback;
      assert.isFunction(invokeCallback);
    });
    it('should invoke callback', () => {
      const invokeCallback = funcs.invokeCallback;
      const callback = sinon.spy()
      const result = invokeCallback(callback);
      sinon.assert.calledOnce(callback);
    });
  });

  describe('sumArray', () => {
    it('should be a function', () => {
      const sumArray = funcs.sumArray;
      assert.isFunction(sumArray);
    });
    it('should invoke callback', () => {
      const sumArray = funcs.sumArray;
      const numbers = [1, 2, 3];
      const callback = sinon.spy();
      const result = sumArray(numbers, callback);
      sinon.assert.calledOnce(callback);
    });
    it('should correctly sum the array', () => {
      const sumArray = funcs.sumArray;
      const numbers = [1, 2, 3];
      const callback = sinon.spy();
      const result = sumArray(numbers, callback);
      sinon.assert.calledWith(callback, 6);
    });
  });

  describe('forEach', () => {
    it('should be a function', () => {
      const forEach = funcs.forEach;
      assert.isFunction(forEach);
    });
    it('should invoke callback 4 times', () => {
      const forEach = funcs.forEach;
      const callback = sinon.spy();
      const arr = [1, 2, 3, 4];
      const result = forEach(arr, callback);
      sinon.assert.callCount(callback, 4);
    });
    it('should invoke callback with the correct arguments', () => {
      const forEach = funcs.forEach;
      const callback = sinon.spy();
      const arr = [1, 2, 3, 4];
      const result = forEach(arr, callback);
      sinon.assert.calledWith(callback, 1);
      sinon.assert.calledWith(callback, 2);
      sinon.assert.calledWith(callback, 3);
      sinon.assert.calledWith(callback, 4);
    });
  });

  describe('map', () => {
    it('should be a function', () => {
      const map = funcs.map;
      assert.isFunction(map);
    });
    it('should invoke callback 3 times', () => {
      const map = funcs.map;
      const callback = sinon.spy();
      const arr = [1, 2, 3];
      const result = map(arr, callback);
      sinon.assert.callCount(callback, 3);
    });
    it('should return new array after callback is invoked', () => {
      const map = funcs.map;
      const callback = (num) => num * 2;
      const arr = [1, 2, 3];
      const result = map(arr, callback);
      sinon.assert.match(result, [2, 4, 6]);
    });
  });

  describe('getUserConstructor', () => {
    it('should be a function', () => {
      const getUserConstructor = funcs.getUserConstructor;
      assert.isFunction(getUserConstructor);
    });
    it('should return an object', () => {
      const getUserConstructor = funcs.getUserConstructor;
      const userDeets = {
        username: 'JohnDoe',
        name: 'John',
        email: 'john@ls.com',
        password: 'iamawesome',
      };
      const User = getUserConstructor();
      const user = new User(userDeets);
      assert.isObject(user);
    });
    it('it should return a new user', () => {
      const getUserConstructor = funcs.getUserConstructor;
      const userDeets = {
        username: 'JohnDoe',
        name: 'John',
        email: 'john@ls.com',
        password: 'iamawesome',
      };
      const User = getUserConstructor();
      const user = new User(userDeets);
      assert.equal(user.username, userDeets.username);
      assert.equal(user.name, userDeets.name);
      assert.equal(user.email, userDeets.email);
      assert.equal(user.password, userDeets.password);
    });
    it('should add sayHi method to the user', () => {
      const getUserConstructor = funcs.getUserConstructor;
      const userDeets = {
        username: 'JohnDoe',
        name: 'John',
        email: 'john@ls.com',
        password: 'iamawesome',
      };
      const User = getUserConstructor();
      const user = new User(userDeets);
      assert.isOk(user.sayHi);
      assert.isFunction(user.sayHi);
      assert.equal(user.sayHi(), 'Hello, my name is John');
    });
  });

  // describe('addPrototypeMethod(Constructor)', () => {
  // 	it('should add the method sayHi to the constructor', () => {
  //     const addPrototypeMethod = funcs.addPrototypeMethod;
  // 		const Constructor = () => {
  //       this.name = 'john';
  //     }
  // 		const newPro = addPrototypeMethod(Constructor);
  // 		// const test = new Constructor();
  // 		console.log(newPro);
  // 	});
  // });

  describe('addReverseString', () => {
    it('should be a function', () => {
      const addReverseString = funcs.addReverseString;
      assert.isFunction(addReverseString);
    });
    it('should return reversed string ', () => {
      funcs.addReverseString();
      const str = 'Hello';
      assert.equal(str.reverse(), 'olleH');

    });
  });

  describe('nFactorial', () => {
    it('should be a function', () => {
      const nFactorial = funcs.nFactorial;
      assert.isFunction(nFactorial);
    });
    it('should return the factorial of n', () => {
      const nFactorial = funcs.nFactorial;
      const fiveFactoral = nFactorial(5);
      assert.equal(fiveFactoral, 120);
    });
  });

  describe('cacheFunction', () => {
    it('should be a function', () => {
      const cacheFunction = funcs.cacheFunction;
      assert.isFunction(cacheFunction);
    });
    it('should invoke callback', () => {
      const callback = (x) => {
        return x * 2;
      }
      const cacheFunction = funcs.cacheFunction(callback);
      const result = cacheFunction(5);
      assert.equal(result, 10);
    });
    it('should cache function results', () => {
      const cb = (x) => x * x;
      const callback = sinon.spy(cb);
      const cacheFunction = funcs.cacheFunction(callback);
      cacheFunction(10);
      cacheFunction(10);
      cacheFunction(10);
      cacheFunction('hello');
      cacheFunction('hello');
      cacheFunction('hello');
      cacheFunction(11);
      cacheFunction(11);
      cacheFunction(11);
      sinon.assert.calledThrice(callback);
    });

  });









});
