const assert = require('chai').expect;
const objectFunctions = require('../src/objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  describe('`keys`', () => {
    const keys = objectFunctions.keys;
    it('should be a function', () => {
      assert.typeOf(keys, 'function');
    });
  });

  describe('`values`', () => {
    const {
      values
    } = objectFunctions.values;
    it('should be a function', () => {
      assert.typeOf(values, 'function');
    });
  });

  describe('`mapObject`', () => {
    const {
      mapObject
    } = objectFunctions.mapObject;
    it('should be a function', () => {
      assert.typeOf(mapObject, 'function');
    });
  });

  describe('`pairs`', () => {
    const {
      pairs
    } = objectFunctions.pairs;
    it('should be a function', () => {
      assert.typeOf(pairs, 'function');
    });
  });

  describe('`invert`', () => {
    const {
      invert
    } = objectFunctions.invert;
    it('should be a function', () => {
      assert.typeOf(invert, 'function');
    });
  });

  describe('`defaults`', () => {
    const {
      defaults
    } = objectFunctions.defaults;
    it('should be a function', () => {
      assert.typeOf(defaults, 'function');
    });
  });
});
