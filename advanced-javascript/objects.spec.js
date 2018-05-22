const objfn = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  it('should be an object', () => {});
});

describe('keys', () => {
  it('should return an array of the object keys', () => {
    expect(objfn.keys({ 1: 2, 3: 4 })).toEqual(["1", "3"])
  })
})

describe('values', () => {
  it('should return an array of the object values', () => {
    expect(objfn.values({ 1: 2, 3: 4 })).toEqual([2, 4])
  })
})

describe('mapObject', () => {
  it('should return an array with each element the result of a callback', () => {
    expect(objfn.mapObject([1,2], (x) => x+1)).toEqual([2,3])
  })
})

describe('pairs', () => {
  it('should return key/value pairs in array', () => {
    expect(objfn.pairs({ 1: 2, 3: 4 })).toEqual([["1", 2], ["3", 4]])
  })
})

describe('invert', () => {
  it('should reverse the keys and values of an object', () => {
    expect(objfn.invert({ a: 'b', c: 'd' })).toEqual({b:'a', d:'c'})
  })
})

describe('defaults', () => {
  it('should copy all values from defaultProps that are missing from object', () => {
    expect(objfn.defaults({ 1: 2 }, { 1: 3, 2: 4 })).toEqual({1:2, 2:4})
  })
})