const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const objectFunctions = require('../src/objects');

const expect = chai.expect;
chai.use(sinonChai);

describe('Objects', () => {
  describe('`keys`', () => {
    it('should be a function', () => {
      expect(objectFunctions.keys).to.be.a('function');
    });
    it('should return an array of object keys', () => {
      const obj = { a: 1, b: 2, c: 3 };
      const keys = objectFunctions.keys(obj);
      expect(keys[0]).to.equal('a');
      expect(keys[1]).to.equal('b');
      expect(keys[2]).to.equal('c');
    });
    it('should return an array', () => {
      const obj = { a: 1, b: 2, c: 3 };
      const keys = objectFunctions.keys(obj);
      expect(keys).to.be.an('array');
    });
  });

  describe('`values`', () => {
    it('should be a function', () => {
      expect(objectFunctions.values).to.be.a('function');
    });
    it('should return an array of object values', () => {
      const obj = { a: 1, b: 2, c: 3 };
      const values = objectFunctions.values(obj);
      expect(values[0]).to.equal(1);
      expect(values[1]).to.equal(2);
      expect(values[2]).to.equal(3);
    });
    it('should return an array', () => {
      const obj = { a: 1, b: 2, c: 3 };
      const values = objectFunctions.values(obj);
      expect(values).to.be.an('array');
    });
  });

  describe('`mapObject`', () => {
    it('should be a function', () => {
      expect(objectFunctions.mapObject).to.be.a('function');
    });
    it('should pass each value to the callback function', () => {
      const callBack = sinon.spy();
      const obj = { a: 1, b: 2, c: 3 };
      objectFunctions.mapObject(obj, callBack);
      expect(callBack).to.have.been.calledWith(1);
      expect(callBack).to.have.been.calledWith(2);
      expect(callBack).to.have.been.calledWith(3);
    });
    it('should return an object', () => {
      const callBack = sinon.spy();
      const obj = { a: 1, b: 2, c: 3 };
      expect(objectFunctions.mapObject(obj, callBack)).to.be.an('object');
    });
  });

  describe('`pairs`', () => {
    it('should be a function', () => {
      expect(objectFunctions.pairs).to.be.a('function');
    });
    it('should return an array of key, value pairs', () => {
      const obj = { a: 1, b: 2, c: 3 };
      const pairsArray = objectFunctions.pairs(obj);
      expect(pairsArray).to.eql([['a', 1], ['b', 2], ['c', 3]]);
    });
    it('should return an array', () => {
      const obj = { a: 1, b: 2, c: 3 };
      const pairsArray = objectFunctions.pairs(obj);
      expect(pairsArray).to.be.an('array');
    });
  });

  describe('`invert`', () => {
    it('should be a function', () => {
      expect(objectFunctions.invert).to.be.a('function');
    });
    it('should invert an object\'s keys and values', () => {
      const obj = { a: 1, b: 2, c: 3 };
      const invertedObj = objectFunctions.invert(obj);
      const keys = objectFunctions.keys(obj);
      const values = objectFunctions.values(obj);
      expect(keys[0]).to.equal('1');
      expect(keys[1]).to.equal('2');
      expect(keys[2]).to.equal('3');
      expect(values[0]).to.equal('a');
      expect(values[1]).to.equal('b');
      expect(values[2]).to.equal('c');
    });
    it('should return an object', () => {
      const obj = { a: 1, b: 2, c: 3 };
      const invertedObj = objectFunctions.invert(obj);
      expect(invertedObj).to.be.an('object');
    });
  });

  describe('`defaults`', () => {
    it('should be a function', () => {
      expect(objectFunctions.defaults).to.be.a('function');
    });
    it('should add default properties to an object', () => {
      const obj = { a: 1, b: 2, c: 3 };
      const defaults = { c: 4, d: 5 };
      const newObj = objectFunctions.defaults(obj, defaults);
      expect(newObj).to.have.ownPropertyDescriptor('d');
      expect(newObj.c).to.equal(3);
    });
    it('should return an object', () => {
      const obj = { a: 1, b: 2, c: 3 };
      const defaults = { c: 4, d: 5 };
      const newObj = objectFunctions.defaults(obj, defaults);
      expect(newObj).to.be.an('object');
    });
  });
});
