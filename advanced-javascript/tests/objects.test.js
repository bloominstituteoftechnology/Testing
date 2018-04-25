/* eslint-disable prefer-destructuring */
const assert = require('chai').assert;
const objectFunctions = require('../src/objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Objects', () => {
  const obj = { x: 7, y: 42, z: 99 };
  describe('keys', () => {
    const keys = objectFunctions.keys;
    it('should be a function', () => {
      assert.typeOf(keys, 'function');
    });
    it('should return an array', () => {
      assert.isArray(keys(obj));
    });
  });
  describe('values', () => {
    const values = objectFunctions.values;
    it('should be a function', () => {
      assert.typeOf(values, 'function');
    });
    it('should return an array', () => {
      assert.isArray(values(obj));
    });
    it('should return the correct values', () => {
      assert.sameOrderedMembers(values(obj), [7, 42, 99]);
    });
  });
  describe('mapObject', () => {
    const mapObject = objectFunctions.mapObject;
    it('should be a function', () => {
      assert.typeOf(mapObject, 'function');
    });
    it('should return an object', () => {
      const output = mapObject(obj, () => 'some value');
      assert.typeOf(output, 'object');
    });
    it('should return all values properly mapped', () => {
      const output = mapObject(obj, x => x++);
    });
  });
});
