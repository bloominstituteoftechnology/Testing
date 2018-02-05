const assert = require('chai').assert;
const expect = require('chai').expect;

const objectFunctions = require('../src/objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
const objectMethods = require('../src/objects');
/* eslint-disable no-undef */
describe('objects', () => {
  describe('keys', () => {
    it('should return an array', () => {
      const obj = {
        hi: 'hi',
      };
      const result = objectMethods.keys(obj);
      assert.isArray(result);
    });
    it('should return an array of strings that correspond with the object\'s properties', () => {
      const obj = {
        hi: 'hi',
        there: 'there',
        JSFOREVER: null,
      };
      const result = objectMethods.keys(obj);
      // assert.include(result, ['hi', 'there', 'JSFOREVER']);
      expect(result).to.deep.equal(['hi', 'there', 'JSFOREVER']);
    });
  });

  describe('values', () => {
    it('should return an array', () => {
      const obj = {
        hi: 'hi',
      };
      const result = objectMethods.values(obj);
      expect(Array.isArray(result)).to.equal(true);
    });
    it('should return an array of strings that correspond with the object\'s values', () => {
      const obj = {
        hi: 'hi',
        there: 'there',
        JSFOREVER: null,
      };
      const result = objectMethods.values(obj);
      expect(result).to.deep.equal(['hi', 'there', null]);
    });
  });

  describe('mapObject', () => {
    it('should return an object', () => {
      const obj = {
        hi: 'hi',
      };
      const result = objectMethods.mapObject(obj, () => (null));
      expect(Array.isArray(result)).to.equal(false);
      expect(typeof result).to.equal('object');
    });
    it('should return an object with all of its values properly mapped', () => {
      const obj = {
        x: 2,
        y: 5,
        z: 10,
      };
      const result = objectMethods.mapObject(obj, n => (n * n));
      expect(result).to.include({ x: 4, y: 25, z: 100 });
    });
  });

  describe('pairs', () => {
    it('should return an array of arrays', () => {
      const obj = {
        hi: 'hi',
      };
      const result = objectMethods.pairs(obj);
      expect(Array.isArray(result)).to.equal(true);
      expect(Array.isArray(result[0])).to.equal(true);
    });
    it('should return key, value pairs that properly match the object\'s properties', () => {
      const obj = {
        x: 2,
        y: 5,
        z: 10,
      };
      const result = objectMethods.pairs(obj);
      expect(result).to.deep.equal([['x', 2], ['y', 5], ['z', 10]]);
    });
  });

  describe('invert', () => {
    it('should return an object', () => {
      const obj = {
        hi: 'hi',
      };
      const result = objectMethods.invert(obj);
      expect(Array.isArray(result)).to.equal(false);
      expect(typeof result).to.equal('object');
    });
    it('should return an object where the keys and values have been switched', () => {
      const obj = {
        x: 'hi',
        y: 'sup',
        z: 'yo',
      };
      const result = objectMethods.invert(obj);
      expect(result).to.include({ hi: 'x', sup: 'y', yo: 'z' });
    });
  });

  describe('defaults', () => {
    it('should return an object', () => {
      const obj = {
        hi: 'hi',
      };
      const result = objectMethods.defaults(obj, {});
      expect(Array.isArray(result)).to.equal(false);
      expect(typeof result).to.equal('object');
    });
    it('should return an object where defaults have been filled in', () => {
      const obj = {
        x: 'hi',
      };
      const defaults = {
        banana: true,
        bubblegum: false,
      };
      const result = objectMethods.defaults(obj, defaults);
      expect(result).to.include({ x: 'hi', banana: true, bubblegum: false });
    });
    it('should not overwrite existing defined properties with defaults', () => {
      const obj = {
        x: 'hi',
      };
      const defaults = {
        banana: true,
        x: false,
      };
      const result = objectMethods.defaults(obj, defaults);
      expect(result).to.include({ x: 'hi', banana: true });
    });
  });
});

/* eslint-enable no-undef */
