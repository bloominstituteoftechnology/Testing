const assert = require('chai').expect;
const objectFunctions = require('../src/objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
/* describe('objects', () => {
  it('should be an object', () => {

  });
}); */

describe('keys', () => {
  it('should be a function', () => {
    const { keys } = objectFunctions;
    assert(keys).to.be.a('function');
  });
});
