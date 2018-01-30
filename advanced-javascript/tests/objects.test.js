const expect = require('chai').expect;
const chai = require('chai');
const objectFunctions = require('../src/objects');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Objects Functions', () => {
  let testObj = {};
  beforeEach(() => {
    testObj = {a:1, b:2, c:3, d:4, e:5};
  });

  afterEach(() => {
    testObj = {};
  });
  describe('`keys`', () => {
    it('should be a function', () => {
      const keys = objectFunctions.keys;
      expect(keys).to.be.a('function');
    });
    it('should give correct output type', () => {
      const keys = objectFunctions.keys;
      expect(keys(testObj)).to.be.an('array');
    });
    it('should give specific output by given input', () => {
      const keys = objectFunctions.keys;
      expect(keys(testObj)).to.deep.equal(['a','b','c','d','e']);
    });
  });

  describe('`values`', () => {
    it('should be a function', () => {
      const values = objectFunctions.values;
      expect(values).to.be.a('function');
    });
    it('should give correct output type', () => {
      const values = objectFunctions.values;
      expect(values(testObj)).to.be.an('array');
    });
    it('should give specific output by given input', () => {
      const values = objectFunctions.values;
      expect(values(testObj)).to.deep.equal([1,2,3,4,5]);
    });

  });

  describe('`mapObject`', () => {
    it('should be a function', () => {
      const mapObject = objectFunctions.mapObject;
      expect(mapObject).to.be.a('function');
    });
    it('should invoke callback the number of elements in the object', () => {
      const mapObject = objectFunctions.mapObject;
      const callBack = sinon.spy();
      mapObject(testObj, callBack);
      expect(callBack).to.have.callCount(5);
    });
  });

  describe('`pairs`', () => {
    it('should be a function', () => {
      const pairs = objectFunctions.pairs;
      expect(pairs).to.be.a('function');
    });
    it('should give correct output type', () => {
      const pairs = objectFunctions.pairs;
      expect(pairs(testObj)).to.be.an('array');
    });
    it('should give specific output by given input', () => {
      const pairs = objectFunctions.pairs;
      expect(pairs(testObj)).to.deep.equal([['a',1],['b',2],['c',3],['d',4],['e',5]]);
    });
  });

  describe('`invert`', () => {
    it('should be a function', () => {
      const invert = objectFunctions.invert;
      expect(invert).to.be.a('function');
    });
    it('should give correct output type', () => {
      const invert = objectFunctions.invert;
      expect(invert(testObj)).to.be.an('object');
    });
    it('should give specific output by given input', () => {
      const invert = objectFunctions.invert;
      expect(invert(testObj)).to.deep.equal({1:'a',2:'b',3:'c',4:'d',5:'e'});
    });
  });

  describe('`defaults`', () => {
    it('should be a function', () => {
      const defaults = objectFunctions.defaults;
      expect(defaults).to.be.a('function');
    });
    it('should give correct output type', () => {
      const defaults = objectFunctions.defaults;
      expect(defaults(testObj, {f:6,g:7})).to.be.an('object');
    });
    it('should give specific output by given input', () => {
      const defaults = objectFunctions.defaults;
      const defaultProps = {f:6,g:7};
      expect(defaults(testObj, defaultProps)).to.deep.equal({a:1,b:2,c:3,d:4,e:5,f:6,g:7});
    });
  });
});