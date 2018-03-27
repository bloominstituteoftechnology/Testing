/* eslint-disable */
const chai = require('chai');
const assert = chai.assert;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const objectFunctions = require('../src/objects');

chai.use(sinonChai);

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
const addTwo = x => x += 2;

describe('objects', () => {
  describe('keys', () => {
    const { keys } = objectFunctions;
    const obj = { 'a': 1, 'b': 2, 'c': 3 };
    it('should be a function', () => {
      assert.typeOf(keys, 'function');
    });
    it('should return an array with the keys', () => {
      assert.sameOrderedMembers(keys(obj), ['a', 'b', 'c']);
    });
  });

  describe('values', () => {
    const { values } = objectFunctions;
    const obj = { 'a': 1, 'b': 2, 'c': 3 };
    it('should be a function', () => {
      assert.typeOf(values, 'function');
    });
    it('should return an array with the values', () => {
      assert.sameOrderedMembers(values(obj), [1, 2, 3]);
    });
  });

  describe('mapObject', () => {
    const { mapObject } = objectFunctions;
    let obj = { 'a': 1, 'b': 2, 'c': 3 };
    it('should be a function', () => {
      assert.typeOf(mapObject, 'function');
    });
    it('should call a given callback', () => {
      const callBack = sinon.spy();
      mapObject(obj, callBack);
      assert.strictEqual(callBack.callCount, 3);
    });
    it('should return a new obj with new values', () => {
      assert.hasAllKeys(mapObject(obj, addTwo), { 'a': 3, 'b': 4, 'c': 5 });
      obj = { 'a': 1, 'b': 2, 'c': 3 };
      assert.ownInclude(mapObject(obj, addTwo), { 'a': 3, 'b': 4, 'c': 5 });
    });
  });

  describe('pairs', () => {
    const { pairs } = objectFunctions;
    const obj = { 'a': 1, 'b': 2, 'c': 3 };
    it('should be a function', () => {
      assert.typeOf(pairs, 'function');
    });
    it('should return an array with the pairs', () => {
      console.log('obj is', obj);
      assert.sameDeepOrderedMembers(pairs(obj), [['a', 1], ['b', 2], ['c', 3]]);
    });
  });

  describe('invert', () => {
    const { invert } = objectFunctions;
    let obj = { 'a': 1, 'b': 2, 'c': 3 };
    it('should be a function', () => {
      assert.typeOf(invert, 'function');
    });
    it('should return a new obj with new values', () => {
      assert.hasAllKeys(invert(obj), { '1': 'a', '2': 'b', '3': 'c' });
      obj = { 'a': 1, 'b': 2, 'c': 3 };
      assert.ownInclude(invert(obj), { '1': 'a', '2': 'b', '3': 'c' });
    });
  });

  describe('defaults', () => {
    const { defaults } = objectFunctions;
    let obj = { 'a': 1, 'b': 2, 'c': 3 };
    it('should be a function', () => {
      assert.typeOf(defaults, 'function');
    });
    it('should return a new obj with new values', () => {
      assert.hasAllKeys(defaults(obj, {'a': 5, 'd': 4}), { 'a': 1, 'b': 2, 'c': 3, 'd': 4 });
      obj = { 'a': 1, 'b': 2, 'c': 3 };
      assert.ownInclude(defaults(obj, {'a': 5, 'd': 4}), { 'a': 1, 'b': 2, 'c': 3, 'd': 4 });
    });
  });
});
