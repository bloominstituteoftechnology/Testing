const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const expect = chai.expect;
const assert = chai.assert;
chai.use(sinonChai);

const {
  keys,
  values,
  mapObject,
  pairs,
  invert,
  defaults
  } = require('../src/objects');

describe('Objects', () => {
  describe('keys', () => {
    it('should return an objects keys as an array', () => {
      const object = {
        a: 1,
        b: 2,
        d: 3
      };
      assert.sameOrderedMembers(keys(object), ['a', 'b', 'd']);
    });
  });
  describe('values', () => {
    it('should return an objects values as an array', () => {
      const object = {
        a: 1,
        b: 2,
        d: 3
      };
      assert.sameOrderedMembers(values(object), [1, 2, 3]);
    });
  });
  describe('mapObject', () => {
    const object = {
      a: 1,
      b: 2,
      d: 3
    };
    const cb = sinon.spy(v => v * 2);
    const mapped = mapObject(object, cb);
    it('should return the object with each value ran through a callback', () => {
      assert.propertyVal(mapped, 'a', 2);
      assert.propertyVal(mapped, 'b', 4);
      assert.propertyVal(mapped, 'd', 6);
      sinon.assert.callCount(cb, 3);
    });
  });
  describe('pairs', () => {
    it('should return the object with its keys value as the key value pair', () => {
      const object = {
        a: 1,
        b: 2,
        d: 3
      };
      pairs(object).forEach(pair => assert.propertyVal(object, pair[0], pair[1]));
    });
  });
  describe('invert', () => {
    it('should return the keys as the objects and objects as keys', () => {
      const object = {
        a: 1,
        b: 2,
        d: 3
      };
      const newObj = invert(object);
      assert.propertyVal(newObj, 1, 'a');
      assert.propertyVal(newObj, 2, 'b');
      assert.propertyVal(newObj, 3, 'd');
    });
  });
  describe('defaults', () => {
    it('should return an object with default properties for each key', () => {
      const object = {
        a: 1,
        b: 2,
        d: 3,
      };
      const defaultProps = {
        e: 3,
        b: 6
      };
      const newObj = defaults(object, defaultProps);
      assert.propertyVal(newObj, 'a', 1);
      assert.propertyVal(newObj, 'b', 2);
      assert.propertyVal(newObj, 'd', 3);
      assert.propertyVal(newObj, 'e', 3);
    });
  });
});
