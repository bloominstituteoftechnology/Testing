const expect = require('chai').expect;
const arrays = require('../src/arrays');

describe('Arrays', () => {

  describe('`each`', () => {
    it('should be a function', () => {
      const each = arrays.each;
      expect(each).to.be.a('string');
    });
  });

  describe('`map`', () => {
    it('should be a function', () => {
      const map = arrays.map;
      expect(map).to.be.an('object');
    });
  });

  describe('`reduce`', () => {
    it('should be a function', () => {
      const reduce = arrays.reduce;
      expect(reduce).to.be.a('number');
    });
  });

  describe('`find`', () => {
    it('should be a function', () => {
      const find = arrays.find;
      expect(find).to.be.an('array');
    });
  });

  describe('`filter`', () => {
    it('should be a function', () => {
      const filter = arrays.filter;
      expect(filter).to.be.a('null');
    });
  });

  describe('`flatten`', () => {
    it('should be a function', () => {
      const flatten = arrays.flatten;
      expect(flatten).to.be.a('promise');
    });
  });
  
});