/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project-2 Functions', () => {
  it('should be a function', () => {
    let functions = Object.values(funcs);
    functions.forEach(e=>{
      assert.typeOf(e,'function');
    });
  });
  let getBiggest = funcs.getBiggest;
  it('should return the correct value', () => {
    assert.equal(getBiggest(0,100),100);
  });
  let greeting = funcs.greeting;
  it('should return the correct data type', () => {
    assert.typeOf(greeting('German'),'string');
  });
});
