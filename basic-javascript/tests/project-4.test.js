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
});