const assert = require('chai').expect;
const objectFunctions = require('../src/objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Objects', () => {
  describe('keys', () => {
    it('should have type of function', () => {
      const keys = objectFunctions.keys;
      expect(keys).to.be.a('function');
    });
  });
  describe('values', () => {
    it('should have type of function', () => {
      const values= objectFunctions.values;
      expect(values).to.be.a('function');
    });
  });
  describe('mapObject', () => {
    it('should have type of function', () => {
      const map = objectFunctions.mapObject;
      expect(map).to.be.a('function');
    });
  });
  describe('pairs', () => {
    it('should have type of function', () => {
      const pairs = objectFunctions.pairs;
      expect(pairs).to.be.a('function');
    });
  });
  describe('invert', () => {
    it('should have type of function', () => {
      const invert = objectFunctions.invert;
      expect(invert).to.be.a('function');
    });
  });
  describe('defaults', () => {
    it('should have type of function', () => {
      const defaults = objectFunctions.defaults;
      expect(defaults).to.be.a('function');
    });
  });
});
