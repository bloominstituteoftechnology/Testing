const assert = require('chai').expect;
const objectFunctions = require('../src/objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  describe('keys', () => {
    it('should be a function', () => {
      const { keys } = objectFunctions;
      assert.typeOf(keys, 'function');
    });
  });
  describe('values', () => {
    it('should be a function', () => {
      const { values } = objectFunctions;
      assert.typeOf(values, 'function');
    });
  });
  describe('mapObject', () => {
    it('should be a function', () => {
      const { mapObject } = objectFunctions;
      assert.typeOf(mapObject, 'function');
    });
  });
  describe('pairs', () => {
    it('should be a function', () => {
      const { values } = objectFunctions;
      assert.typeOf(values, 'function');
    });
  });
  describe('invert', () => {
    it('should be a function', () => {
      const { invert } = objectFunctions;
      assert.typeOf(invert, 'function');
    });
  });
  describe('defaults', () => {
    it('should be a function', () => {
      const { defaults } = objectFunctions;
      assert.typeOf(defaults, 'function');
    });
  });
});
