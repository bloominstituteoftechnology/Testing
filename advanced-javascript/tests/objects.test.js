/* eslint-disable prefer-destructuring */

const chai = require('chai');
const assert = require('chai').assert;
const expect = require('chai').expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const objectFunctions = require('../src/objects');

describe('objects', () => {
  describe('`keys`', () => {
    it('should be a function', () => {
      const keys = objectFunctions.keys;
      expect(keys).to.be.a('function');
    });
  });

  describe('`values`', () => {
    it('should be a function', () => {
      const values = objectFunctions.values;
      expect(values).to.be.an('function');
    });
  });

  describe('`mapObject`', () => {
    it('should be a function', () => {
      const mapObject = objectFunctions.mapObject;
      expect(mapObject).to.be.a('function');
    });
  });

  describe('`pairs`', () => {
    it('should be a function', () => {
      const pairs = objectFunctions.pairs;
      expect(pairs).to.be.an('function');
    });
  });

  describe('`invert`', () => {
    it('should be a function', () => {
      const invert = objectFunctions.invert;
      expect(invert).to.be.a('function');
    });
  });

  describe('`defaults`', () => {
    it('should be a function', () => {
      const defaults = objectFunctions.defaults;
      expect(defaults).to.be.a('function');
    });
  });
});
