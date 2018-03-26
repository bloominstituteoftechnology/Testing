/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project-2 Functions', () => {
    describe('`multiplyByTen`', () => {
      const multiplyByTen = funcs.multiplyByTen;
      it('should be a function', () => {
        assert.typeOf(multiplyByTen, 'function');
      });
      it('should be a number', () => {
        const result = multiplyByTen(10);
        assert.typeOf(result, 'number');
      });
    }); 
});
