const assert = require('chai').assert;
const funcs = require('../src/project-4.js');
const sinonChai = require('sinon-chai');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
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
    it('should multiply given arguments', () => {
      assert.equal(multiplyArguments, (2, 3), 6);
      assert.equal(multiplyArguments, (0, 15, 27), 0);
    });
  });
  describe('invokeCallback', () => {
  	const callBack = sinon.spy();
  	invokeCallback(callBack);
  	it('should invoke the callback', () => {
	});
  });
});