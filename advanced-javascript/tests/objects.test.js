const expect = require('chai').expect;
const objectFunctions = require('../src/objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  it('should be an object', () => {
          const keys = objectFunctions.keys;
          expect(keys).to.be.an('function');
  });
});
