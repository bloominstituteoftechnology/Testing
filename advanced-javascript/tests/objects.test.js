/* eslint-disable */

const expect = require('chai').expect;
const assert = require('chai').assert;
const objectFunctions = require('../src/objects');
const funcs = objectFunctions;
// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  describe('keys', () => {
  	it('should be a function', () => {
  		assert.typeOf(funcs.keys, 'function');
  	});
  	it('should return an array', () => {
  		assert.typeOf(funcs.keys({a: 1, b: 2}), 'array');
  	});
  	it('should return an array of keys', () => {
  		assert(funcs.keys({a: 1, b: 2}), ['a', 'b']);
  	});
  });

  describe('values', () => {
  	it('should be a function', () => {
  		assert.typeOf(funcs.values, 'function');
  	});
  	it('should return an array', () => {
  		assert.typeOf(funcs.values({a: 1, b: 2}), 'array');
  	});
  	it('should return an array of values', () => {
  		assert(funcs.values({a: 1, b: 2}), [1, 2]);
  	});
  });

  describe('mapObject', () => {
  	it('should be a function', () => {
  		assert.typeOf(funcs.mapObject, 'function');
  	});
  	const double = (n) => {
  		return 2 * n;
  	};
  	it('should map all the object values using the cb function to a new object', () => {
  		assert(funcs.mapObject({a: 1, b: 2}, double), {a: 2, b: 4});
  	});
  	it('should return an object', () => {
  		assert.typeOf(funcs.mapObject({a: 1, b: 2}, double), 'object');
  	});
  });

  describe('pairs', () => {
    it('should convert an object into a nested array of key-value pairs', () => {
      assert(funcs.pairs({a: 1, b: 2}), [['a', 1], ['b', 2]]);
    });
    it('should be a function', () => {
      assert.typeOf(funcs.pairs, 'function');
    });
    it('should return an array', () => {
      assert.typeOf(funcs.pairs({a: 1, b: 2}), 'array');
    });
  })

  describe('invert', () => {
    it('should be a function', () => {
      assert.typeOf(funcs.invert, 'function');
    });
    it('should return an object', () => {
      assert.typeOf(funcs.invert({a: 1, b: 2}), 'object');
    });
    it('should return a new object where the keys becomes the values and the values become the keys', () => {
      assert(funcs.invert({a: 1, b: 2}), {1: 'a', 2: 'b'});
    });
  })

  describe('defaults', () => {
    it('should be a function', () => {
      assert.typeOf(funcs.defaults, 'function');
    });
    it('should return an object', () => {
      assert.typeOf(funcs.defaults({a: 1, b: 2}, {default: 'default'}), 'object');
    });
    it('should update default properties on first object passed as a parameter', () => {
      assert(funcs.defaults({a: 1, b: 2}, {default: 'default'}), {a: 1, b: 2, default: 'default'});
    });
  })
});
