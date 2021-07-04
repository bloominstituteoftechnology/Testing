const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {

  //#1
  describe('keys', () => {
    it('should return keys to your object', () => {
      const keys = objectFunctions.keys;
      const theKeys = keys({one: 1, two: 2, three: 3})

      expect(theKeys).toEqual(['one', 'two', 'three']);
    });
  })

  //#2
  describe('values', () => {
    it('should return values of your object', () => {
      const values = objectFunctions.values;
      const theValues = values({one: 1, two: 2, three: 3})

      expect(theValues).toEqual([1, 2, 3])
    })
  })
});

//#3
  describe('mapObject', () => {
    const cb = item => {
      return item ** 2;
    }
    const obj = {one: 1, two: 2, three: 3};
    const mapObject = objectFunctions.mapObject;
    const mapped = mapObject(obj, cb);
    it('should return each item, squared', () => {
      const res = {one: 1, two: 4, three: 9}
      expect(mapped).toEqual(res)
    })
    it('should return an object', () => {
      expect(typeof mapped).toBe('object');
    })
  })

//#4
describe('pairs', () => {
  const obj = {one: 1, two: 2, three: 3};
  const pairs = objectFunctions.pairs; 
  const paired = pairs(obj);
  const res = [['one', 1], ['two', 2], ['three', 3]];
  it('should create subarrays of key & value pairs', () => {
    expect(paired).toEqual(res);
  })
  it('should return an array', () => {
    expect(typeof paired).toBe('object')
  })
  it('array should be length 3', () => {
    expect(paired).toHaveLength(3);
  })
});

//#5
describe('invert', () => {
  const obj = {one: 1, two: 2, three: 3};
  const invert = objectFunctions.invert;
  const inverted = invert(obj);
  const res = {1: 'one', 2: 'two', 3: 'three'}
  it('should return an keys and values inverted', () => {
    expect(inverted).toEqual(res);
  })
  it('should return an object', () => {
    expect(typeof res).toBe('object');
  })
});

//#6
describe('defaults', () => {
  const obj = {one: 1, two: 2, three: 3};
  const defaults = objectFunctions.defaults;
  const defaultProps = {one: 23, two: 2234, three: 23423, four: 4, five: 5}
  const defaulted = defaults(obj, defaultProps);
  const res = {one: 1, two: 2, three: 3, four: 4, five: 5}
  it('should return an obj w/o duplicate keys and values', () => {
    expect(defaulted).toEqual(res);
  })
  it('should return an object', () => {
    expect(typeof res).toBe('object');
  })
});