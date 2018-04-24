const assert = require('chai').assert;
const objectFunctions = require('../src/objects');
const expect = require('chai').expect;

const sinon = require('sinon');
const sinonChai = require('sinon-chai');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  describe('`keys`', () => {
    const keys = objectFunctions.keys;
    it('should be an function', () => {
      expect(keys).to.be.an('function');
    });

    it('should return an array', () => {
      const obj = { a: 'b', b: 'c' };
      const result = keys(obj);
      expect(result).to.be.an('array');
    });

    it('should return the proper keys', () => {
      const obj = { a: 'b', c: 'c' };
      const result = keys(obj);
      expect(result).to.be.eql(['a', 'c']);
    });
  });

  describe('`values`', () => {
    const values = objectFunctions.values;
    it('should be an function', () => {
      expect(values).to.be.an('function');
    });

    it('should return an array', () => {
      const obj = { a: 'b', b: 'c' };
      const result = values(obj);
      expect(result).to.be.an('array');
    });

    it('should return the proper values', () => {
      const obj = { a: 'b', c: 'c' };
      const result = values(obj);
      expect(result).to.be.eql(['b', 'c']);
    });
  });

  describe('`mapObject`', () => {
    const mapObject = objectFunctions.mapObject;
    const cb = sinon.spy();
    it('should be an function', () => {
      expect(mapObject).to.be.an('function');
    });

    it('should return an object', () => {
      const obj = { a: 'b', b: 'c' };
      const result = mapObject(obj, cb);
      expect(result).to.be.an('object');
    });
  });
  describe('`pairs`', () => {
    const pairs = objectFunctions.pairs;

    it('should be an function', () => {
      expect(pairs).to.be.an('function');
    });

    it('should return an array ', () => {
      const obj = { a: 'b', b: 'c' };
      const result = pairs(obj);
      expect(result).to.be.an('array');
    });

    it('should return correct key and value ', () => {
      const obj = { a: 'b', b: 'c' };
      const result = pairs(obj);
      expect(result).to.be.eql([['a', 'b'], ['b', 'c']]);
    });
  });
  describe('`invert`', () => {
    const invert = objectFunctions.invert;

    it('should be an function', () => {
      expect(invert).to.be.an('function');
    });

    it('should return an object ', () => {
      const obj = { a: 1, b: 2, c: 1 };
      const result = invert(obj);
      expect(result).to.be.an('object');
    });

    it('should return correct key and value ', () => {
      const obj = { a: 1, b: 2, c: 1 };
      const result = invert(obj);
      expect(result).to.be.eql({ '1': 'c', '2': 'b' });
    });
  });
  describe('`defaults`', () => {
    const defaults = objectFunctions.defaults;
    const callBack = sinon.spy(n => n+1);
    it('should be an function', () => {
      expect(defaults).to.be.an('function');
    });

    it('should return an object ', () => {
      const obj = { a: 'b' };

      const result = defaults(obj, callBack);
      expect(result).to.be.an('object');
    });

    // it('should return correct key and value ', () => {
    //   const obj = { a: 'b' };
    //   const result = defaults(obj, callBack);
    //   expect(result).to.be.equal({a: "b"});
    // });
  });
});
