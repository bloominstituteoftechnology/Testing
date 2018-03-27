/* eslint-disable prefer-destructuring, no-unused-expressions */

const expect = require('chai').expect;
const objectFunctions = require('../src/objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Objects', () => {
  describe('`keys`', () => {
    const keys = objectFunctions.keys;
    it('should be a function', () => {
      expect(keys).to.be.a('function');
    });
  });

  describe('`values`', () => {
    const values = objectFunctions.values;
    it('should be a function', () => {
      expect(values).to.be.a('function');
    });
  });

  describe('`mapObject`', () => {
    const mapObject = objectFunctions.mapObject;
    it('should be a function', () => {
      expect(mapObject).to.be.a('function');
    });
  });

  describe('`pairs`', () => {
    const pairs = objectFunctions.pairs;
    it('should be a function', () => {
      expect(pairs).to.be.a('function');
    });
  });

  describe('`invert`', () => {
    const invert = objectFunctions.invert;
    it('should be a function', () => {
      expect(invert).to.be.a('function');
    });
  });

  describe('`defaults`', () => {
    const defaults = objectFunctions.defaults;
    it('should be a function', () => {
      expect(defaults).to.be.a('function');
    });
  });
});
