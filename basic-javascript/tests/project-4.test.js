const assert = require('chai').assert;
const funcs = require('../src/project-4.js');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('multiplyArguments', () => {
  it('should be a function', () => {
    const multiplyArguments = funcs.multiplyArguments;
    assert.typeOf(multiplyArguments, 'function');
  });
});
describe('invokeCallback', () => {
  it('should be a function', () => {
    const invokeCallback = funcs.invokeCallback;
    assert.typeOf(invokeCallback, 'function');
  });
});
describe('sumArray', () => {
  it('should be a function', () => {
    const sumArray = funcs.sumArray;
    assert.typeOf(sumArray, 'function');
  });
});
describe('forEach', () => {
  it('should be a function', () => {
    const forEach = funcs.forEach;
    assert.typeOf(forEach, 'function');
  });
});
describe('map', () => {
  it('should be a function', () => {
    const map = funcs.map;
    assert.typeOf(map, 'function');
  });
});
describe('getUserConstructor', () => {
  it('should be a function', () => {
    const getUserConstructor = funcs.getUserConstructor;
    assert.typeOf(getUserConstructor, 'function');
  });
});
describe('addPrototypeMethod', () => {
  it('should be a function', () => {
    const addPrototypeMethod = funcs.addPrototypeMethod;
    assert.typeOf(addPrototypeMethod, 'function');
  });
});
describe('addReverseString', () => {
  it('should be a function', () => {
    const addReverseString = funcs.addReverseString;
    assert.typeOf(addReverseString, 'function');
  });
});
describe('nFactorial', () => {
  it('should be a function', () => {
    const nFactorial = funcs.nFactorial;
    assert.typeOf(nFactorial, 'function');
  });
});
describe('cacheFunction', () => {
  it('should be a function', () => {
    const cacheFunction = funcs.cacheFunction;
    assert.typeOf(cacheFunction, 'function');
  });
});
