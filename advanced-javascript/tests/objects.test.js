/* eslint-disable */
const assert = require('chai').assert;
// const sinon = require('sinon');
// const sinonChai = require('sinon-chai');
const objectFunctions = require('../src/objects');

// assert.use(sinonChai);

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
const obj = { 'a': 1, 'b': 2, 'c': 3 };

describe('objects', () => {
  describe('keys', () => {
    const { keys } = objectFunctions;
    it('should be a function', () => {
      assert.typeOf(keys, 'function');
    });
    it('should return an array with the keys', () => {
      assert.sameOrderedMembers(keys(obj), ['a', 'b', 'c']);
    });
  });
});
