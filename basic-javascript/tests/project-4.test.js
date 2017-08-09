const assert = require('chai').assert;
const funcs = require('../src/project-4.js');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
//
describe('Project 4', () => {
  describe('multiplyArgs', () => {
    it('should be of type function', () => {
      const mult = funcs.multiplyArguments;
      assert.typeOf(mult, 'function');
    });
    it('should return a number', () => {
      const mult = funcs.multiplyArguments(5, 5);
      assert.typeOf(mult, 'number');
    });
    it('should handle positive, negative, and zero', () => {
      const mult = funcs.multiplyArguments(5, 5);
      const mult2 = funcs.multiplyArguments(-5, -5);
      const mult3 = funcs.multiplyArguments(5, 0);
      const mult4 = funcs.multiplyArguments();
      assert.equal(mult, 25);
      assert.equal(mult2, 25);
      assert.equal(mult3, 0);
      assert.equal(mult, 25);
    });
  });
  describe('invokeCallback', () => {
    it('should be of type function', () => {
      const invoke = func.invokeCallback;
      assert.typeOf(invoke, 'function');
    });
    it('should return a function', () => {
      const invoke = func.invokeCallback;
      assert.typeOf(invoke(), 'function');
    });
  };
  describe('sumArray', () => {
    it('should be of type function', () => {
      const sum = funcs.sumArray;
      assert.typeOf(sum, 'function');
    });
    it('should return something', () => {
      const sum = funcs.sumArray([1, 2], sinon.spy);
      assert.typeOf(sum, 'function');
    });
  });
  describe('forEach', () => {
    it('should be of type function', () => {
      const each = funcs.forEach;
      assert.typeOf(each, 'function');
    });
  });
  describe('map', () => {
    it('should be of type function', () => {
      const map = funcs.map;
      assert.typeOf(map, 'function');
    });
  });
  describe('getUserConstructor', () => {
    it('should be of type function', () => {
      const constructor = funcs.getUserConstructor;
      assert.typeOf(constructor, 'function');
    });
  });
  describe('addPrototypeMethod', () => {
    it('should be of type function', () => {
      const addMethod = funcs.addPrototypeMethod;
      assert.typeOf(addMethod, 'function');
    });
  });
  describe('addReverseString', () => {
    it('should be of type function', () => {
      const revString = funcs.addReverseString;
      assert.typeOf(revString, 'function');
    });
  });
  describe('nFactorial', () => {
    it('should be of type function', () => {
      const fact = funcs.nFactorial;
      assert.typeOf(fact, 'function');
    });
  });
  describe('cacheFunction', () => {
    it('should be of type function', () => {
      const cache = funcs.cache;
      assert.typeOf(cache, 'function');
    });
  });
});
