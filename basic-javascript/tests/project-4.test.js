const assert = require('chai').assert;
const expect = require('chai').expect;
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const funcs = require('../src/project-4.js');
chai.use(sinonChai);

describe('Project-4 Functions', () => {

  describe('`multiplyArguments(...args)`', () => {
    const multiplyArguments = funcs.multiplyArguments;
    it('it should be a function', () => {
      assert.typeOf(multiplyArguments, 'function');
    });
    it('should return the product of the arguments', () => {
      assert.strictEqual(multiplyArguments(2, 3, 4), 24);
      assert.strictEqual(multiplyArguments(), 0);
      assert.strictEqual(multiplyArguments(1), 1);
    });
  });

  describe('`invokeCallback(cb)`', () => {
    const invokeCallback = funcs.invokeCallback;
    it('it should be a function', () => {
      assert.typeOf(invokeCallback, 'function');
    });
    it('should invoke the callback', () => {
      const cb = sinon.spy();
      invokeCallback(cb);
      expect(cb).to.have.been.calledOnce;
    });
  });

  describe('`sumArray(numbers, cb)`', () => {
    const sumArray = funcs.sumArray;
    it('it should be a function', () => {
      assert.typeOf(sumArray, 'function');
    });
    it('should pass the sum of Array numbers to the callback', () => {
      let num;
      const cb = (sum) => {
        num = sum;
      };
      sumArray([1, 2, 3], cb);
      assert.strictEqual(num, 6);
    });
  });

  describe('`forEach(arr, cb)`', () => {
    const forEach = funcs.forEach;
    it('it should be a function', () => {
      assert.typeOf(forEach, 'function');
    });
    it('should pass all array items to the callback', () => {
      const arr = [];
      const cb = (num) => {
        arr.push(num);
      };
      forEach([1, 2, 3, 4, 5], cb);
      assert.deepEqual(arr, [1, 2, 3, 4, 5]);
    });
  });

  describe('`map(arr, cb)`', () => {
    const map = funcs.map;
    it('it should be a function', () => {
      assert.typeOf(map, 'function');
    });
    it('should return array with changed elements', () => {
      const cb = (num) => {
        return num * num;
      };
      const result = map([1, 2, 3, 4, 5], cb);
      assert.deepEqual(result, [1, 4, 9, 16, 25]);
    });
  });

  describe('`getUserConstructor()`', () => {
    const getUserConstructor = funcs.getUserConstructor;
    it('it should be a function', () => {
      assert.typeOf(getUserConstructor, 'function');
    });
    it('should return a constructor that builds Users', () => {
      const User = getUserConstructor();
      const user = new User({
        username: 'Chooster',
        name: 'Jake',
        email: 'jakeacooley@gmail.com',
        password: 'mypassword'
      });
      assert.strictEqual(user.username, 'Chooster');
      assert.strictEqual(user.name, 'Jake');
      assert.strictEqual(user.email, 'jakeacooley@gmail.com');
      assert.strictEqual(user.password, 'mypassword');
    });
  });

  describe('`addPrototypeMethod(Constructor)`', () => {
    const addPrototypeMethod = funcs.addPrototypeMethod;
    it('it should be a funtion', () => {
      assert.typeOf(addPrototypeMethod, 'function');
    });
    it('should add a prototype method to the constructor', () => {
      function testFunc() {
        return;
      };
      addPrototypeMethod(testFunc);
      const test = new testFunc
      assert.strictEqual(test.sayHi(), 'Hello World!');
    });
  });

  describe('`addReverseString()`', () => {
    const addReverseString = funcs.addReverseString;
    it('it should be a function', () => {
      assert.typeOf(addReverseString, 'function');
    });
    it('should add reverse string method to String prototype', () => {
      addReverseString();
      const test = 'Friend';
      assert.strictEqual(test.reverse(), 'dneirF');
    });
  });

  describe('`nFactorial(n)`', () => {
    const nFactorial = funcs.nFactorial;
    it('it should be a function', () => {
      assert.typeOf(nFactorial, 'function');
    });
    it('should return the factorial of n', () => {
      assert.strictEqual(nFactorial(1), 1);
      assert.strictEqual(nFactorial(0), 1);
      assert.strictEqual(nFactorial(4), 24);
    });
  });

  describe('`cacheFunction(cb)`', () => {
    const cacheFunction = funcs.cacheFunction;
    it('it should be a function', () => {
      assert.typeOf(cacheFunction, 'function');
    });
    it('it should return the callback function', () => {
      const cb = num => num;
      assert.typeOf(cacheFunction(cb), 'function');
    });
    it('should return the callback functions result when the cached function is invoked', () => {
      const cb = num => num * num;
      const cachedFunction = cacheFunction(cb);
      assert.strictEqual(cachedFunction(4), 16);
    });
    it('should cache function results', () => {
      const cb = sinon.spy(cacheFunction);
      const cachedFunction = cacheFunction(cb);
      cachedFunction('Hello');
      cachedFunction('Hello');
      cachedFunction(11);
      cachedFunction(11);
      cachedFunction(false);
      cachedFunction(false);
      expect(cb).to.have.been.calledThrice;
    });
  });
});
