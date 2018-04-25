const assert = require('chai').assert
const objectFunctions = require('../src/objects')

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  it('should be a function', () => {
    const keys = objectFunctions.keys
    assert.isFunction(keys, 'is a function yay!')
  })
})
