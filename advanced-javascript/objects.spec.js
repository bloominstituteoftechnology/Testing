const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  it('keys', () => {
    const keys = objectFunctions.keys({a:1, b:2});
    expect(keys).toEqual(['a', 'b']);
  });
  it('values', () => {
    const values = objectFunctions.values({a:1, b:2});
    expect(values).toEqual([1, 2]);
  });
  it('mapObject', () => {
    const mapObject = objectFunctions.mapObject({a:1, b:2}, x => x + 1);
    expect(mapObject).toEqual({"a": 2, "b": 3});
  });
  it('pairs', () => {
    const pairs = objectFunctions.pairs({a:1, b:2});
    expect(pairs).toEqual([["a", 1], ["b", 2]]);
  });
  it('invert', () => {
    const invert = objectFunctions.invert({a:1, b:2});
    expect(invert).toEqual({"1": "a", "2": "b"});
  });
  it('defaults', () => {
    const defaults = objectFunctions.defaults({a:1, b:2}, {});
    expect(defaults).toEqual({a:1, b:2});
  });
});
