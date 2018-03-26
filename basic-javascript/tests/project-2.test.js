/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('`getBiggest`', () => {
  it('should be a function', () => {
    const getBiggest = funcs.getBiggest;
    assert.typeOf(getBiggest, 'function');
  });
  it('should return 100', () => {
    const getBiggest = funcs.getBiggest;
    const num1 = 1;
    const num2 = 100;
    assert.strictEqual(getBiggest(num1, num2), 100);
  });
  it('should return a number', () => {
    const getBiggest = funcs.getBiggest;
    const num1 = 1;
    const num2 = 100;
    assert.isNumber(getBiggest(num1, num2));
  });
});
