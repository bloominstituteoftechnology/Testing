const assert = require('chai').expect;
const objectFunctions = require('../src/objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('keys', () => {
  it('should be a function', () => {
    const keys = objectFunctions.keys;
    assert(keys).to.be.a('function');
  });
});
describe('values', () => {
  it('should be a function', () => {
    const values = objectFunctions.values;
    assert(values).to.be.a('function');
  });
});
describe('mapObject', () => {
  it('should be a function', () => {
    const mapObject = objectFunctions.mapObject;
    assert(mapObject).to.be.a('function');
  });
});
describe('pairs', () => {
  it('should be a function', () => {
    const pairs = objectFunctions.pairs;
    assert(pairs).to.be.a('function');
  });
});
describe('invert', () => {
  it('should be a function', () => {
    const invert = objectFunctions.invert;
    assert(invert).to.be.a('function');
  });
});
describe('defaults', () => {
  it('should be a function', () => {
    const defaults = objectFunctions.defaults;
    assert(defaults).to.be.a('function');
  });
});
