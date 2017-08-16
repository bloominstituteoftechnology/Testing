const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const expect = chai.expect;
const assert = chai.assert;
const funcs = require('../src/project-4');

chai.use(sinonChai);
// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Project-4 Functions', () => {
  describe('`multiplyArguments`', () => {
    it('should return 0 if the input is empty', () => {
      const multiplyArguments = funcs.multiplyArguments;
      assert.equal(multiplyArguments(), 0);
    });
    it('should return the sum of product of the arguments', () => {
      const multiplyArguments = funcs.multiplyArguments;
      const numbers1 = 1;
      const numbers2 = 2;
      const numbers3 = 3;
      const numbers4 = 4;
      const numbers5 = 5;
      const numFactorial = 120
      assert.equal(multiplyArguments(numbers1,numbers2,numbers3,numbers4,
        numbers5), 120);
    });
  });
  describe('`invokeCallback`', () => {
    it('should invoke callback function', () => {
      const invokeCallback = funcs.invokeCallback;
      const cb = sinon.spy();
      invokeCallback(cb);
      expect(cb).to.have.callCount(1);
    });
  });
  describe('`sumArray`', () => {
    it('should invoke callback function', () => {
      const sumArray = funcs.sumArray;
      const numbersArray = [1,2,3,4]
      const cb = sinon.spy();
      sumArray(numbersArray, cb);
      expect(cb).to.have.callCount(1);
    });
    it('should return an expected sum of the array', () => {
      const sumArray = funcs.sumArray;
      const numbersArray = [1, 2, 3, 4];
      const callback = (num) => {
        return num * 2;
      };
      assert.equal(sumArray(numbersArray, callback), 20);
    });
  });
  describe('`forEach`', () => {
    it('should invoke callback function', () => {
      const forEach = funcs.forEach;
      const numbersArray = [1,2,3,4]
      const cb = sinon.spy();
      forEach(numbersArray, cb);
      expect(cb).to.have.callCount(4);
    });
  });
  describe('`map`', () => {
    it('should invoke callback function', () => {
      const map = funcs.map;
      const numbersArray = [1,2,3,4]
      const cb = sinon.spy();
      map(numbersArray, cb);
      expect(cb).to.have.callCount(4);
    });
    it('should return an array', () => {
      const map = funcs.map;
      const numbersArray = [1,2,3,4]
      const cb = sinon.spy();
      assert.typeOf(map(numbersArray, cb), 'array');
    });
    it('should return an array with proper values', () => {
      const map = funcs.map;
      const numbersArray = [1,2,3,4]
      const cb = (value) => {
        return value * 2;
      }
      expect(map(numbersArray,cb)).to.deep.equal([2,4,6,8]);
    });
  });
  describe('`getUserConstructor`', () => {
    it('should return a function', () => {
      const getUserConstructor = funcs.getUserConstructor;
      const userObj = {
        username: 'mhigbee',
        name: 'Matt',
        email: 'mhigbee@superfriends.com',
        password: 'asdfkaasdfasdf'
      }
      assert.typeOf(getUserConstructor(userObj), 'function');
    });
  });
  //Go back and do addPrototypeMethod
  describe('`nFactorial`', () => {
    it('should return 1 if input is 1', () => {
      const nFactorial = funcs.nFactorial;
      assert.equal(nFactorial(1), 1);
    });
    it('should return factorial of a given value', () => {
      const nFactorial = funcs.nFactorial;
      assert.equal(nFactorial(5), 120);
    });
  });
  describe('`cacheFunction`', () => {
    it('should add results to cache', () => {
      const cacheFunction = funcs.cacheFunction;
      const cb = () => {};
      assert.typeOf(cacheFunction(cb), 'function');
    });
    it('should return expected call back value', () => {
      const cb = (x) => {
        return x * 3;
      };
      const cacheFunction = funcs.cacheFunction(cb);
      expect(cacheFunction(5)).to.equal(15);
    });
    it('should cache function results', () => {
      const cb = sinon.spy();
      const cacheFunction = funcs.cacheFunction(cb);
      cacheFunction('banana');
      cacheFunction('banana');
      cacheFunction('banana');
      cacheFunction('banana');
      cacheFunction('banana');
      expect(cb).to.have.callCount(1);
    });
  });
});
