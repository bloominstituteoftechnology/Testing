const expect = require('chai').expect;
const objectFunctions = require('../src/objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Objects', () => {
  let testObject = {};
  beforeEach(() => {
    testObject.name = 'Ethan';
    testObject.age = 27;
    testObject.occupation = 'Sailor';
  });
  afterEach(() => {
    testObject = {};
  });
  describe('Keys', () => {
    const keys = objectFunctions.keys;
    it('should exist and be a function', () => {});
    it('should return an array', () => {});
    it('should return an array of keys', () => {
      const myArrayOfKeys = Object.keys(testObject);
      const testCall = keys(testObject);
      expect(myArrayOfKeys).to.eql(testCall);
    });
  });
});
