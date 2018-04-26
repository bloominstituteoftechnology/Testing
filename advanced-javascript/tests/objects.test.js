const chai = require('chai');

const { expect } = chai;

const {
  keys,
  values,
  mapObject,
  pairs,
  invert,
  defaults
} = require('../src/objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  describe('keys', () => {
    it('should return an array', () => {
      expect(keys({ a: 1, b: 2, c: 3 })).to.be.an('array');
    });
    it('should return all properties from an object', () => {
      expect(keys({ a: 1, b: 2 })).to.have.a.lengthOf(2);
      expect(keys({ d: 1, e: 2, f: 3 })).to.have.a.lengthOf(3);
      expect(keys({
        h: 1, g: 2, j: 3, t: 4, y: 5
      })).to.have.a.lengthOf(5);
    });
  });
});
