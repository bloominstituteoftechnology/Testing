const assert = require('chai').assert;
const funcs = require('../src/project-4.js');

describe('Project-4-tests', () => {
  describe('multiplyArguments', () => {
    const multiplyArguments = funcs.multiplyArguments;
    it('multiplyArguments should be a function', () => {
      assert.typeOf(multiplyArguments, 'function');
    });
    it('should multiply all arguments', () => {
      assert.equal(multiplyArguments(2, 2, 2, 2), 16);
    });
  });
});
