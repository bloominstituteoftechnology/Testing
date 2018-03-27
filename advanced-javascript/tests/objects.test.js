const chai = require('chai');

const { assert } = require('chai');
const objectFunctions = require('../src/objects');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { keys } = objectFunctions;
const { values } = objectFunctions;
const { mapObject } = objectFunctions;
const { pairs } = objectFunctions;
const { invert } = objectFunctions;
const { defaults } = objectFunctions;

const obj = { a: 1, b: 2 };

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  describe('keys', () => {
    it('should be a function', () => {
      assert.typeOf(keys, 'function');
    });
    it('should return an output with data type: array', () => {
      assert.typeOf(keys(obj), 'array');
    });
    it('should return the expected output given a specific input', () => {
      assert.deepEqual(keys(obj), ['a', 'b']);
    });
  });
  describe('values', () => {
    it('should be a function', () => {
      assert.typeOf(values, 'function');
    });
    it('should return an output with data type: array', () => {
      assert.typeOf(values(obj), 'array');
    });
    it('should return the expected output given a specific input', () => {
      assert.deepEqual(values(obj), [1, 2]);
    });
  });
  describe('mapObject', () => {
    it('should be a function', () => {
      assert.typeOf(mapObject, 'function');
    });
    it('should return an output with data type: object', () => {
      const cb = (value) => {
        return value * 2;
      };
      assert.typeOf(mapObject(obj, cb), 'object');
    });
    it('should execute the callback once for every key in the object', () => {
      const cb = sinon.spy();
      mapObject(obj, cb);
      expect(cb).to.have.callCount(2);
    });
    it('should return the expected output given a specific input', () => {
      
    });
  });
  describe('pairs', () => {
    it('should be a function', () => {
      assert.typeOf(pairs, 'function');
    });
  });
  describe('invert', () => {
    it('should be a function', () => {
      assert.typeOf(invert, 'function');
    });
  });
  describe('defaults', () => {
    it('should be a function', () => {
      assert.typeOf(defaults, 'function');
    });
  });
});
