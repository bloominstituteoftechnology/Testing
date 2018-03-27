const assert = require('chai').assert;
const objectFunctions = require('../src/objects');
const sinon = require('sinon');

const { keys, values, mapObject, pairs, invert, defaults } = objectFunctions;

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  describe('`keys`', () => {
    const testObj = { key1: 'value 1', key2: 'value 2' };
    const objKeys = keys(testObj);
    it('should be an array', () => {
      assert.typeOf(objKeys, 'array');
    });
    it('should contain strings', () => {
      objKeys.forEach(key => assert.isOk(typeof key === 'string'));
    });
  });

  describe('`values`', () => {
    const testObj = { key1: 'value 1', key2: 'value 2' };
    const objValues = values(testObj);
    it('should contain the value as array element', () => {
      assert.equal(objValues[0], 'value 1');
    });
  });

  describe('`mapObject`', () => {
    const testObj = { key1: 'value 1', key2: 'value 2' };
    const spy = sinon.spy(el => (el += '1'));
    const testMapObj = mapObject(testObj, spy);
    it('should modify the string correctly', () => {
      assert.equal(testMapObj['key1'], 'value 11');
    });
    it('should call the cb the correct number of times', () => {
      assert.equal(spy.callCount, 2);
    });
  });

  describe('`pairs`', () => {
    const testObj = { key1: 'value 1', key2: 'value 2' };
    const testPairs = pairs(testObj);
    it('should be an array', () => {
      assert.typeOf(testPairs, 'array');
    });
    it('should contain the correct value', () => {
      assert.notStrictEqual(testPairs[1], ['key2', 'value 2']);
    });
  });
});
