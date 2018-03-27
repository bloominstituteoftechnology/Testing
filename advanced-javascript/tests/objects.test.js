/* eslint-disable */
/* prefer-destructuring */

const assert = require('chai').assert;
const expect = require('chai').expect;
const objFuncs = require('../src/objects');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {

  describe('keys', () => {
    const keys = objFuncs.keys;
    // const spy = sinon.spy();
    it('should be an object', () => {
      expect(keys).to.be.a('function');
    });
    it('should return a', () => {
      const result = keys({a: 1, b: 2});
      expect(result[0]).to.equal('a');
    });
  });
  

  describe('values', () => {
    const values = objFuncs.values;
    // const spy = sinon.spy();
    it('should be an object', () => {
      expect(values).to.be.a('function');
    });
    it('should return 1', () => {
      const result = values({a: 1, b: 2});
      expect(result[0]).to.equal(1);
    });
  });

  describe('values', () => {
    const values = objFuncs.values;
    // const spy = sinon.spy();
    it('should be an object', () => {
      expect(values).to.be.a('function');
    });
    it('should return 1', () => {
      const result = values({a: 1, b: 2});
      expect(result[0]).to.equal(1);
    });
  });

  describe('mapObject', () => {
    const mapObject = objFuncs.mapObject;
    const spy = sinon.spy();
    it('should be an object', () => {
      expect(mapObject).to.be.a('function');
    });
    it('should return 2', () => {
      const result = mapObject({a: 1, b: 2}, spy);
      expect(spy).to.have.callCount(2);
    });
  });
});
