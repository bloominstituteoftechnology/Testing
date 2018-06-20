const objectFunctions = require('./objects');

describe('Objects', () => {

  describe('keys', () => {
    const keys = objectFunctions.keys;
    it('should be a function', () => {
      expect(typeof keys).toBe('function');
    });
    it('should return an array of keys on a passed Object', () => {
      const name = 'John';
      const age = 88;
      const obj = makeObject(name, age);
      const actual = keys(obj);
      const expected = ['name', 'age'];
      expect(actual).toEqual(expected);
    });
  });

  describe('values', () => {
    const values = objectFunctions.values;
    it('should be a function', () => {
      expect(typeof values).toBe('function');
    });
    it('should return an array of values on a passed Object', () => {
      const name = 'John';
      const age = 88;
      const obj = makeObject(name, age);
      const actual = values(obj);
      const expected = ['John', 88];
      expect(actual).toEqual(expected);
    });
  });

  describe('mapObject', () => {
    const mapObject = objectFunctions.mapObject;
    it('should be a function', () => {
      expect(typeof mapObject).toBe('function');
    });
    it('should return an object with modified keys', () => {
      const name = 'John';
      const age = 88;
      const obj = makeObject(name, age);
      const actual = mapObject(obj, addOne);
      const expected = { name:'John1', age:89 };
      expect(actual).toEqual(expected);
    });
  });

  describe('pairs', () => {
    const pairs = objectFunctions.pairs;
    it('should be a function', () => {
      expect(typeof pairs).toBe('function');
    });
    it('should return an array of key-value pairs', () => {
      const name = 'John';
      const age = 88;
      const obj = makeObject(name, age);
      const actual = pairs(obj);
      const expected =  [[ 'name', 'John' ],[ 'age', 88 ]];
      expect(actual).toEqual(expected);
    });
  });

  describe('invert', () => {
    const invert = objectFunctions.invert;
    it('should be a function', () => {
      expect(typeof invert).toBe('function');
    });
    it('should return an object with modified keys', () => {
      const name = 'John';
      const age = 88;
      const obj = makeObject(name, age);
      const actual = invert(obj);
      const expected =  { 88 : 'age', 'John': 'name' };
      expect(actual).toEqual(expected);
    });
  });

  describe('defaults', () => {
    const defaults = objectFunctions.defaults;
    it('should be a function', () => {
      expect(typeof defaults).toBe('function');
    });
    it('should return an object with modified keys', () => {
      const name = 'John';
      const age = 88;
      const props = { name: '', age: '', hometown: '' };
      const obj = makeObject(name, age);
      const actual = defaults(obj, props);
      const expected =  { 'name': 'John', 'age': 88, 'hometown': ''};
      expect(actual).toEqual(expected);
    });
  });

});

function makeObject(name, age) {
  return { name: name, age: age }
}

function addOne(a) {
  return a + 1;
}