const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  it('should be an object', () => {});
  test('keys', () => {
    expect(objectFunctions.keys({a: 1, b: 2, c: 3})).toEqual(["a", "b", 'c'])
  });
  test('values', () => {
    expect(objectFunctions.values({a: 1, b: 2, c: 3})).toEqual([1,2,3])
  });
  test('mapObject', () => {
    let bob = objectFunctions.mapObject({a: 1, b: 2, c: 3}, num => num)
    expect(bob).toEqual({a: 1, b: 2, c: 3})
  });
  test('pairs', () => {
    let bob = objectFunctions.pairs({a: 1, b: 2, c: 3});
    expect(bob).toEqual([['a', 1], ['b', 2], ['c', 3]]);
  });
  test('invert', () => {
    let bob = objectFunctions.invert({a: 1, b: 2, c: 3});
    expect(bob).toEqual({"1": "a", "2": "b", "3": "c"});
  });
  test('defaults', () => {
    let bob = objectFunctions.defaults({a: 1, c: 3}, {a: 1, b: 2, c: 3});
    expect(bob).toEqual({a: 1, b: 2, c: 3});
  });
});
