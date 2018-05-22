const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  it('should be an object', () => {});
});

describe('keys', () => {
  it('return object keys', () => {
    expect(objectFunctions.keys({ 1: 2, 3: 4 })).toEqual(["1", "3"])
  })
})

describe('values', () => {
  it('return object values', () => {
    expect(objectFunctions.values({ 1: 2, 3: 4 })).toEqual([2, 4])
  })
})

describe('mapObject', () => {
  it('return mapObject with callback', () => {
    expect(objectFunctions.mapObject([1, 2], (x) => x + 1)).toEqual([2, 3])
  })
})

describe('pairs', () => {
  it('return object pairs in array', () => {
    expect(objectFunctions.pairs({ 1: 2, 3: 4 })).toEqual([["1", 2], ["3", 4]])
  })
})

describe('invert', () => {
  it('return inversion of key and values', () => {
    expect(objectFunctions.invert({ a: 'b', c: 'd' })).toEqual({ b: 'a', d: 'c' })
  })
})

describe('defaults', () => {
  it('return copy of values missing from defaultProps object', () => {
    expect(objectFunctions.defaults({ 1: 2 }, { 1: 3, 2: 4 })).toEqual({ 1: 2, 2: 4 })
  })
})