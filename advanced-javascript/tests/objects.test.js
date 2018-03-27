const assert = require('chai').expect;
const objectFunctions = require('../src/objects');

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const expect = chai.expect;
chai.use(sinonChai);

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  describe('`keys`', () => {
    it('should be a function', () => {
      const keys = objectFunctions.keys;
      expect(keys).to.be.a('function');
    });
    it('should return an array', () => {
      const obj = {
        bob: true,
        tim: false,
        reed: 4
      };
      const result = objectFunctions.keys(obj);
      expect(result).to.be.an('array');
    });
    it('should return an array of strings that correspond to obj props', () => {
      const obj = {
        bob: true,
        tim: false,
        reed: 4
      };
      const result = objectFunctions.keys(obj);
      expect(result).to.have.ordered.members(['bob','tim','reed']);
    });
  });

  describe('`values`', () => {
    it('should be a function', () => {
      const values = objectFunctions.values;
      expect(values).to.be.a('function');
    });
    it('should return an array', () => {
      const obj = {
        bob: true,
        tim: false,
        reed: 4
      };
      const result = objectFunctions.values(obj);
      expect(result).to.be.an('array');
    });
    it('should return an array that corresponds to obj values', () => {
      const obj = {
        bob: true,
        tim: null,
        reed: 4
      };
      const result = objectFunctions.values(obj);
      expect(result).to.have.ordered.members([true,null,4]);
    });
  });

  describe('`mapObject`', () => {
    it('should be a function', () => {
      const mapObject = objectFunctions.mapObject;
      expect(mapObject).to.be.a('function');
    });
    it('should return an object', () => {
      const obj = {
        bob: true,
        tim: false,
        reed: false,
      };
      const result = objectFunctions.mapObject(obj, elem => elem? false : true);
      expect(result).to.be.an('object');
    });
    it('should return an object with values based on cb', () => {
      const obj = {
        bob: true,
        tim: false,
        reed: false,
      };
      const result = objectFunctions.mapObject(obj, elem => elem? false : true);
      expect(result).to.eql({
        bob: false,
        tim: true,
        reed: true
      });
    });
  });

  describe('`pairs`', () => {
    it('should be a function', () => {
      const pairs = objectFunctions.pairs;
      expect(pairs).to.be.a('function');
    });
    it('should return an array', () => {
      const obj = {
        bob: true,
        tim: false,
        reed: 4
      };
      const result = objectFunctions.pairs(obj);
      expect(result).to.be.an('array');
    });
    it('should return an array that corresponds to pairs', () => {
      const obj = {
        bob: true,
        tim: null,
        reed: 4
      };
      const result = objectFunctions.pairs(obj);
      expect(result).to.have.deep.ordered.members([['bob',true],['tim',null],['reed',4]]);
    });
  });

  describe('`invert`', () => {
    it('should be a function', () => {
      const invert = objectFunctions.invert;
      expect(invert).to.be.a('function');
    });
    it('should return an object', () => {
      const obj = {
        bob: true,
        tim: false,
        reed: false,
      };
      const result = objectFunctions.invert(obj);
      expect(result).to.be.an('object');
    });
    it('should return an object with keys swapped with values', () => {
      const obj = {
        bob: true,
        tim: false,
        reed: 4,
      };
      const result = objectFunctions.invert(obj);
      expect(result).to.eql({
        true: 'bob',
        false: 'tim',
        4: 'reed'
      });
    });
  });

});
