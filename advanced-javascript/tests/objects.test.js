const expect = require('chai').expect;
const objectFunctions = require('../src/objects');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Objects', () => {
  describe('keys', () => {
    it('should have type of function', () => {
      const keys = objectFunctions.keys;
      expect(keys).to.be.a('function');
    });
    it('should return an array', () => {
      const keys = objectFunctions.keys({prop1: 2, prop2: 2});
      expect(keys).to.be.an('array');
    });
  });
  describe('values', () => {
    it('should have type of function', () => {
      const values= objectFunctions.values;
      expect(values).to.be.a('function');
    });
    it('should return an array', () => {
      const values = objectFunctions.values({prop1: 2, prop2: 2});
      expect(values).to.be.an('array');
    });
  });
  describe('mapObject', () => {
    it('should have type of function', () => {
      const map = objectFunctions.mapObject;
      expect(map).to.be.a('function');
    });
    it('should return an object', () => {
      const map = objectFunctions.mapObject({prop1: 2, prop2: 2}, sinon.spy);
      expect(map).to.be.an('array');
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
    it('should return an object', () => {
      const invert = objectFunctions.invert({prop1: 2, prop2: 2});
      expect(invert).to.be.an('object');
    });
  });
  describe('defaults', () => {
    it('should have type of function', () => {
      const defaults = objectFunctions.defaults;
      expect(defaults).to.be.a('function');
    });
    it('should return an object', () => {
      const defaults = objectFunctions.defaults({prop1: 2, prop2: 2}, 'prop1');
      expect(defaults).to.be.an('object');
    });
  });
});
