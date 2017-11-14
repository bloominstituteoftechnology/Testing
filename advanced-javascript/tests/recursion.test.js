const assert = require('chai').expect;
const funcs = require('../src/recursion');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('nFibonacci', () => {
  it('should be a function', () => {
    const nFibonacci = funcs.nFibonacci;
    assert(nFibonacci).to.be.a('function');
  });
});
describe('nFactorial', () => {
  it('should be a function', () => {
    const nFactorial = funcs.nFactorial;
    assert(nFactorial).to.be.a('function');
  });
});
describe('checkMatchingLeaves', () => {
  it('should be a function', () => {
    const checkMatchingLeaves = funcs.checkMatchingLeaves;
    assert(checkMatchingLeaves).to.be.a('function');
  });
});
