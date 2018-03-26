/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project-2 Functions', () => {
  describe('`getBiggest`', () => {
    it('should be a function', () => {
      const getBiggest = funcs.getBiggest;
      assert.typeOf(getBiggest, 'function');
    });
    it('should return a number', () => {
      const getBiggest = funcs.getBiggest(5, 4);
      assert.typeOf(getBiggest, 'number');
    });
    it('should return the biggest number', () => {
      const getBiggest = funcs.getBiggest(5, 4);
      assert.equal(getBiggest, 5, 'getBiggest(5, 4) should return 5.');
    });
    it('should return y if the numbers are equal', () => {
      const getBiggest = funcs.getBiggest(5, 5);
      assert.equal(getBiggest, 5, 'getBiggest(5, 5) should return 5.');
    });
  });
});
