const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  it('should be an object', () => {
    expect(typeof objectFunctions).toBe('object');
  });
});

describe('keys', () => {
  it('should be a key', ()=> {
    expect(objectFunctions.keys({a: 0, b:1, c:3})).toEqual(["a", "b", "c"]);
  });
});

describe('values', () => {
  it('should be a value', () => {
    expect(objectFunctions.values({a: 0, b:1, c:3})).toEqual([0,1,3]);
  });
});

describe('mapObject', () => {
  it('should invoke a callback', () => {
    const cb= jest.fn();
    const mapObject = objectFunctions.mapObject;
    const obj = {a:0, b:1, c:3};

    mapObject(obj, cb);
    expect(cb).toHaveBeenCalled();
  });
});

describe('pairs', () => {
  it('should return key/value pairs', () => {
    expect(objectFunctions.pairs({a:0, b:1, c:3})).toEqual([["a",0], ["b",1], ["c", 3]]);
  });
});

describe('invert', () => {
  it('should invert so keys become values and values become keys', () => {
    expect(objectFunctions.invert({a:0, b:1, c:3})).toEqual({"0":"a", "1": "b", "3": "c"});
  });
});

describe('defaultProps', () => {
  it('should pass default props', () => {
    const defaultProps = jest.fn;
    expect(objectFunctions.defaults({a:0, b:1, c:3}, defaultProps)).toEqual({a:0, b:1, c:3});
  })
})