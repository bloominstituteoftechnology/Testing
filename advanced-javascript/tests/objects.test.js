const assert = require('chai').expect;
const objectFunctions = require('../src/objects');
const sinonChai = require('sinon-chai');
const chai = require('chai');

const expect = chai.expect;

chai.use(sinonChai);

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  describe('`keys`', () => {
    it('should be a function', () => {
      const { keys } = objectFunctions;

      assert(keys).to.be.a('function');
    });
    it('should return an array', () => {
      const { keys } = objectFunctions;
      const obj = { powerLevel: '9001' };

      assert(keys(obj)).to.be.an('array');
    });
  });
  describe('`values`', () => {
    it('should be a function', () => {
      const { values } = objectFunctions;

      assert(values).to.be.a('function');
    });
    it('should return an array', () => {
      const { values } = objectFunctions;
      const obj = { foo: 'bar' };

      assert(values(obj)).to.be.an('array');
    });
  });
  describe('`mapObject`', () => {
    it('should be a function', () => {
      const { mapObject } = objectFunctions;

      assert(mapObject).to.be.a('function');
    });
    it('should return new arrays for each item passed', () => {
      const { mapObject } = objectFunctions;
      const arr = [3, 6, 9];
      const cb = arr => arr * 3;
      const mappedArr = [9, 18, 27];

      expect(mapObject(arr, cb)).to.eql(mappedArr);
      expect(mapObject(arr, cb)).to.be.an('array');
    });
  });
  describe('`pairs`', () => {
    it('should be a function', () => {
      const { pairs } = objectFunctions;
      assert(pairs).to.be.a('function');
    });
    it("should return an array containing nested object's keys and values ", () => {
      const { pairs } = objectFunctions;
      const obj = { majorKey: 1, anotherOne: 2, another1: 3 };

      assert(pairs(obj)).to.be.an('array');
    });
  });
  describe('`invert`', () => {
    it('should be a function', () => {
      const { invert } = objectFunctions;
      assert(invert).to.be.a('function');
    });
    it("should invert object's keys and values", () => {
      const { invert } = objectFunctions;
      const obj = { majorKey: 1, anotherOne: 2, another1: 3 };

      assert(invert(obj)).to.be.an('object');
    });
  });
  describe('`defaults`', () => {
    it('should be a function', () => {
      const { defaults } = objectFunctions;
      assert(defaults).to.be.a('function');
    });
    it('should return an object', () => {
      const { defaults } = objectFunctions;
      const obj = {
        foo: 'bar'
      };
      const result = defaults(obj, {});
      expect(Array.isArray(result)).to.equal(false);
      expect(typeof result).to.equal('object');
    });
  });
});
