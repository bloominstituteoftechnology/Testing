/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
const funcs = require('../src/project-2');
// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Project-2 Functions', () => {
  describe('`getBiggest`', () => {
    const getBiggest = funcs.getBiggest;
    it('should be a function', () => {
      assert.typeOf(getBiggest, 'function');
    });
    it('should return a number', () => {
      assert.isFinite(getBiggest(10, 5), true);
    });
    it('should return 10', () => {
      assert.equal(getBiggest(10, 5), 10);
    });
  });
});
