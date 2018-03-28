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
    it('should be a function', () => {
      expect(keys).to.be.a('function');
    });
    it('should return a', () => {
      const result = keys({a: 1, b: 2});
      expect(result[0]).eql('a');
    });
  });
  

  describe('values', () => {
    const values = objFuncs.values;
    // const spy = sinon.spy();
    it('should be a function', () => {
      expect(values).to.be.a('function');
    });
    it('should return 1', () => {
      const result = values({a: 1, b: 2});
      expect(result[0]).eql(1);
    });
  });

  describe('mapObject', () => {
    const mapObject = objFuncs.mapObject;
    const spy = sinon.spy();
    it('should be a function', () => {
      expect(mapObject).to.be.a('function');
    });
    it('should return 2', () => {
      const result = mapObject({a: 1, b: 2}, spy);
      expect(spy).to.have.callCount(2);
    });
  });

  describe('pairs', () => {
    const pairs = objFuncs.pairs;
    const spy = sinon.spy();
    it('should be a function', () => {
      expect(pairs).to.be.a('function');
    });
    it('should return a type of array', () => {
      const result = pairs({a: 1, b: 2});
      expect(result).to.be.a("array");
    })
    it('should return an array with a key/value pair', () => {
      const result = pairs({a: 1, b: 2});
      expect(result[0]).eql(['a', 1]);
    });
  });

  describe('invert', () => {
    const invert = objFuncs.invert;
    const spy = sinon.spy();
    it('should be a function', () => {
      expect(invert).to.be.a('function');
    });
    it('should return a type of object', () => {
      const result = invert({a: 1});
      expect(result).to.be.a("object");
    })
    it('should return a value of 1', () => {
      const result = invert({a: 1});
      expect(result).eql({"1": "a"});
    });
  });

  describe('defaults', () => {
    const defaults = objFuncs.defaults;
    const spy = sinon.spy();
    it('should be a function', () => {
      expect(defaults).to.be.a('function');
    });
    it('should return a type of object', () => {
      const result = defaults({a: 1}, {a: 1, b: 2});
      expect(result).to.be.a("object");
    })
    it('should return a value of 1', () => {
      const result = defaults({a: 1});
      expect(result).to.equal(1);
    });
  });
});
