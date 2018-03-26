const assert = require('chai').assert;
const objectFunctions = require('../src/objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  const obj = { a: 1, b: 2, c: 3 };
  describe('keys', () => {
    it('should be a function', () => {
      assert.typeOf(objectFunctions.keys, 'function');
    });
    it('should return an array', () => {
      assert.isArray(objectFunctions.keys(obj));
    });
    it('should return the correct keys', () => {
      assert.sameOrderedMembers(objectFunctions.keys(obj), ['a', 'b', 'c']);
    });
  });
  describe('values', () => {
    it('should be a function', () => {
      assert.typeOf(objectFunctions.values, 'function');
    });
    it('should return an array', () => {
      assert.isArray(objectFunctions.values(obj));
    });
    it('should return the correct values', () => {
      assert.sameOrderedMembers(objectFunctions.values(obj), [1, 2, 3]);
    });
  });
  describe('mapObject', () => {
    const cb = num => num + 1;
    const newObj = objectFunctions.mapObject(obj, cb);
    it('should be a function', () => {
      assert.typeOf(objectFunctions.values, 'function');
    });
    it('should return an object', () => {
      assert.isObject(newObj);
    });
    it('should return an object with correct key/value pairs', () => {
      assert.deepEqual(newObj, { a: 2, b: 3, c: 4 });
    });
  });
  describe('pairs', () => {
    it('should be a function', () => {
      assert.typeOf(objectFunctions.pairs, 'function');
    });
  });
  describe('invert', () => {
    it('should be a function', () => {
      assert.typeOf(objectFunctions.invert, 'function');
    });
  });
  describe('defaults', () => {
    it('should be a function', () => {
      assert.typeOf(objectFunctions.defaults, 'function');
    });
  });
});
