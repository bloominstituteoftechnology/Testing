const expect = require('chai').expect;
const objectFunctions = require('../src/objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Objects', () => {
  describe('`keys`', () => {
    const keys = objectFunctions.keys;
    it('should be a function', () => {
      expect(keys).to.be.a('function');
    });
    it('should return an array of object keys', () => {
      expect(keys({ 1: '1' })).to.be.an('array');
      expect(keys({ one: 1, two: 2, three: 3 })).to.eql([
        'one',
        'two',
        'three',
      ]);
    });
  });
  describe('`values`', () => {
    const values = objectFunctions.values;
    it('should be a function', () => {
      expect(values).to.be.a('function');
    });
    it('should return an array of object values', () => {
      expect(values({ 1: '1' })).to.be.an('array');
      expect(values({ one: 1, two: 2, three: 3 })).to.eql([1, 2, 3]);
    });
  });
  describe('`mapObject`', () => {
    const mapObject = objectFunctions.mapObject;
    it('should be a function', () => {
      expect(mapObject).to.be.a('function');
    });
    it('should return an object', () => {
      expect(mapObject({ 1: 2, 2: 3, 3: 4 }, item => ++item)).to.be.an(
        'object',
      );
    });
    it('should apply a callback function to each value in the object', () => {
      expect(mapObject({ 1: 2, 2: 3, 3: 4 }, item => ++item)).to.eql({
        1: 3,
        2: 4,
        3: 5,
      });
    });
  });
  describe('`pairs`', () => {
    const pairs = objectFunctions.pairs;
    it('should be a function', () => {
      expect(pairs).to.be.a('function');
    });
    it('should return an array of arrays of key, value pairs', () => {
      const obj = { 1: 1, 2: 2, 3: 3, 4: 4 };
      expect(pairs(obj)).to.eql([['1', 1], ['2', 2], ['3', 3], ['4', 4]]);
    });
  });
  describe('`invert`', () => {
    const invert = objectFunctions.invert;
    it('should be a function', () => {
      expect(invert).to.be.a('function');
    });
    it('should return an obj', () => {
      expect(invert({ 1: 2, 2: 1 })).to.be.an('object');
    });
    it('should swap the keys and values of an object', () => {
      expect(invert({ 1: 2, 3: 1 })).to.eql({ 2: '1', 1: '3' });
    });
  });
  describe('`defaults`', () => {
    const defaults = objectFunctions.defaults;
    it('should be a function', () => {
      expect(defaults).to.be.a('function');
    });
  });
});
