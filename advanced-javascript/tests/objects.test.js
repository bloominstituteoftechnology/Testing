const assert = require('chai').assert;
const objectFunctions = require('../src/objects');
const sinon = require('sinon');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Objects', () => {
  describe('`keys`', () => {
    const { keys } = objectFunctions;
    it('should be an object', () => {
      assert.typeOf(keys, 'function');
    });
    it('should return an array', () => {
      assert.isArray(keys({}), 'array');
    });
    it('should return the correct object keys', () => {
      const obj = {
        key1: 0,
        key2: 'value',
      };
      assert.deepEqual(keys(obj), ['key1', 'key2']);
    });
  });
  describe('`mapObject`', () => {
    const { mapObject } = objectFunctions;
    it('should be an object', () => {
      assert.typeOf(mapObject, 'function');
    });
    it('should return an object', () => {
      assert.isObject(mapObject({}), 'object');
    });
    it('should return the correct object keys', () => {
      const obj = { key1: 0, key2: 1 };
      const test = { key1: 1, key2: 2 };
      const spy = sinon.spy(x => ++x);
      const result = mapObject(obj, spy);
      assert.deepEqual(result, test);
    });
  });
});
