/* eslint-disable */

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const objectFunctions = require('../src/objects');

const expect = chai.expect;
chai.use(sinonChai);

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Objects', () => {
  describe('keys', () => {
    it('should be a function', () => {
      expect(objectFunctions.keys).to.be.a('function');
    });
    it('should return the keys in the object when passed an object', () => {
      const obj = {key1: 1, key2: 2};
      expect(objectFunctions.keys(obj)[0]).to.equal('key1');
    });
    it('should return an array when passed an object', () => {
      const obj = {key1: 1, key2: 2};
      expect(objectFunctions.keys(obj)).to.be.a('array');
    });
  });

  describe('values', () => {
    it('should be a function', () => {
      expect(objectFunctions.values).to.be.a('function');
    });
    it('should return the values of object keys if object is passed', () => {
      const obj = {key1: 1, key2: 2};
      expect(objectFunctions.values(obj)[0]).to.equal(1);
    });
    it('should return an array when passed an object', () => {
      const obj = {key1: 1, key2: 2};
      expect(objectFunctions.values(obj)).to.be.a('array');
    });
  });

  describe('mapObject', () => {
    it('should be a function', () => {
      expect(objectFunctions.mapObject).to.be.a('function');
    });
    it('should return an array of mapped elements when passed an object', () => {
      const callback = sinon.spy();
      const obj = {key1: 1, key2: 2};
      objectFunctions.mapObject(obj, callback);
      expect(callback).to.have.been.calledWith(1);
    });
    it('should return an object when passed an object', () => {
      const callback = sinon.spy();
      const obj = {key1: 1, key2: 2};
      expect(objectFunctions.mapObject(obj, callback)).to.be.a('object');
    });
  });

  describe('pairs', () => {
    it('should be a function', () => {
      expect(objectFunctions.pairs).to.be.a('function');
    });
    // return [key, obj[key] => key value pair
    it('should retrun key, value pairs when passed an object', () => {
      const obj = {key1: 1, key2: 2};
      expect(objectFunctions.pairs(obj)).to.eql([['key1', 1],['key2', 2]]);
    });
    it('should return an array when passed an object', () => {
      const obj = {key1: 1, key2: 2};
      expect(objectFunctions.pairs(obj)).to.be.a('array');
    });
  });

  describe('invert', () => {
    it('should be a function', () => {
      expect(objectFunctions.invert).to.be.a('function');
    });
    it('should swap a key and value when passed an object and return a new object', () => {
      const obj = {key1: 1, key2: 2};
      const invertedObj = objectFunctions.invert(obj);
      expect(objectFunctions.values(obj)[0]).to.equal('key1');
      expect(objectFunctions.values(obj)[1]).to.equal('key2');
      expect(objectFunctions.keys(obj)[0]).to.equal('1');
      expect(objectFunctions.keys(obj)[1]).to.equal('2');
    });
  });

  describe('defaults', () => {
    it('should be a function', () => {
      expect(objectFunctions.defaults).to.be.a('function');
    });
    it('should add default properties to an object and return an updated object', () => {
      const obj = {key1: 1, key2: 2};
      const defaults = {key2: 3, key3: 4};
      const newObj = objectFunctions.defaults(obj, defaults);
      expect(newObj).to.eql(obj);
    });
    it('should return an object when passed an object', () => {
      const obj = {key1: 1, key2: 2};
      const defaults = {key2: 3, key3: 4};
      const newObj = objectFunctions.defaults(obj, defaults);
      expect(newObj).to.be.a('object');
    });
  });

});
