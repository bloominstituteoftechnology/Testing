
const objectFunctions = require('../src/objects');
const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');

const expect = chai.expect;
const assert = chai.assert;

chai.use(sinonChai);

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  describe('keys', () => {
    it('should be a function', () => {
      const keys = objectFunctions.keys;
      expect(keys).to.be.a('function');
    });
    it('should return an array', () => {
        const keys = objectFunctions.keys;
        assert.typeOf(keys({a:1}), 'array'); 
    });
    it('should throw an error if not passed an object', () => {
      const keys = objectFunctions.keys;
      expect(keys('5')).to.throw;
    });
  });

  describe('mapObject', () => {
    it('should be a function', () => {
      const mapObject = objectFunctions.mapObject;
      expect(mapObject).to.be.a('function');
    });
    it('should return an object', () => {
        const mapObject = objectFunctions.mapObject;
        assert.typeOf(mapObject({a:1}, () => 1), 'object'); 
    });
    it('should invoke callback once for each property on the object', () => {
      const mapObject = objectFunctions.mapObject;
      const spy = sinon.spy();
      const tester = mapObject({a:1, b:2}, spy)
      expect(spy).to.be.calledTwice;
    });
  });

  describe('pairs', () => {
    it('should be a function', () => {
      const pairs = objectFunctions.pairs;
      expect(pairs).to.be.a('function');
    });
    it('should return an array', () => {
        const pairs = objectFunctions.pairs;
        assert.typeOf(pairs({a:1}), 'array'); 
    });
    it('should throw an error if not passed an object', () => {
      const pairs = objectFunctions.pairs;
      expect(pairs('5')).to.throw;
    });
  });

  describe('invert', () => {
    it('should be a function', () => {
      const invert = objectFunctions.invert;
      expect(invert).to.be.a('function');
    });
    it('should return an object', () => {
        const invert = objectFunctions.invert;
        assert.typeOf(invert({a:1}), 'object'); 
    });
    it('should throw an error if not passed an object', () => {
      const invert = objectFunctions.invert;
      expect(invert('5')).to.throw;
    });
  });

  describe('defaults', () => {
    it('should be a function', () => {
      const defaults = objectFunctions.defaults;
      expect(defaults).to.be.a('function');
    });
    it('should return an array', () => {
        const defaults = objectFunctions.defaults;
        assert.typeOf(defaults({a:1}, {b:2}), 'object'); 
    });
    it('should throw an error if not passed an object', () => {
      const defaults= objectFunctions.defaults;
      expect(defaults('5', '5')).to.throw;
    });
  });

});




