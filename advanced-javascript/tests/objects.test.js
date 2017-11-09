const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const objectFunctions = require('../src/objects');

const expect = chai.expect;
chai.use(sinonChai);

describe('Objects', () => {
  describe('keys', () => {
    const keys = objectFunctions.keys;
    it('should be a function', () => {
      expect(keys).to.be.a('function');
    });
    it('is should return the keys', () => {
      const o = { x: 1, y: 2 };
      const keyS = keys(o);
      expect(keyS.length).to.be.eq(2);
      expect(keyS[0]).to.be.eq('x');
      expect(keyS[1]).to.be.eq('y');
    });
  });
  describe('values', () => {
    const values = objectFunctions.values;
    it('should be a function', () => {
      expect(values).to.be.a('function');
    });
    it('is should return the values', () => {
      const o = { x: 1, y: 2 };
      const Values = values(o);
      expect(Values.length).to.be.eq(2);
      expect(Values[0]).to.be.eq(1);
      expect(Values[1]).to.be.eq(2);
    });
  });
  describe('mapObject', () => {
    const mapObject = objectFunctions.mapObject;
    it('should be a function', () => {
      expect(mapObject).to.be.a('function');
    });
    it('it should call the cb with each value in object', () => {
      const spy = sinon.spy();
      const o = { x: 1, y: 2 };
      mapObject(o, spy);
      expect(spy.getCall(0)).to.have.been.calledWith(1);
      expect(spy.getCall(1)).to.have.been.calledWith(2);
      expect(spy).to.have.been.callCount(Object.keys(o).length);
    });
  });
  describe('Invert', () => {
    const pairs = objectFunctions.pairs;
    it('should be a function', () => {
      expect(pairs).to.be.a('function');
    });
    it('it should covert the object into an array of Invert', () => {
      const o = { x: 1, y: 2 };
      const Pairs = pairs(o);
      expect(Pairs.length).to.be.eq(2);
      expect(Pairs[0]).to.be.eql(['x', 1]);
      expect(Pairs[1]).to.be.eql(['y', 2]);
    });
  });
  describe('invert', () => {
    const invert = objectFunctions.invert;
    it('should be a function', () => {
      expect(invert).to.be.a('function');
    });
    it('it should covert the object into an array of Invert', () => {
      const o = { x: 1, y: 2 };
      const Invert = invert(o);
      expect(Object.keys(Invert).length).to.be.eq(2);
      expect(Invert[1]).to.be.eq('x');
      expect(Invert[2]).to.be.eq('y');
    });
  });
  describe('defaults', () => {
    const defaults = objectFunctions.defaults;
    it('should be a function', () => {
      expect(defaults).to.be.a('function');
    });
    it('it should copy default props to any missing in the original', () => {
      const o = { x: 1, y: 2 };
      const def = { y: 3, z: 4 };
      const unified = defaults(o, def);
      expect(Object.keys(unified).length).to.be.eq(3);
      expect(unified.x).to.be.eq(1);
      expect(unified.y).to.be.eq(2);
      expect(unified.z).to.be.eq(4);
    });
  });
});
