// const assert = require('chai').expect; // <--- was this intentional?
const expect = require('chai').expect;

const objectFunc = require('../src/objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Advanced-JS: Objects', () => {

  describe('`keys`', () => {
    it('should be a function', () => {
      const keys = objectFunc.keys;
      expect(keys).to.be.a('function');
    });
  });

  describe('`values`', () => {
    it('should be a function', () => {
      const values = objectFunc.values;
      expect(values).to.be.a('function');
    });
  });

  describe('`mapObject`', () => {
    it('should be a function', () => {
      const mapObject = objectFunc.mapObject;
      expect(mapObject).to.be.a('function');
    });
  });

  describe('`pairs`', () => {
    it('should be a function', () => {
      const pairs = objectFunc.pairs;
      expect(pairs).to.be.a('function');
    });
  });

  describe('`invert`', () => {
    it('should be a function', () => {
      const invert = objectFunc.invert;
      expect(invert).to.be.a('function');
    });
  });

  describe('`defaults`', () => {
    it('should be a function', () => {
      const defaults = objectFunc.defaults;
      expect(defaults).to.be.a('function');
    });
  });

});
