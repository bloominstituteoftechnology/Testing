const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {

  // keys function test suite
  describe('keys function test suite', () => {
    it('if not object should return null', () => {
      expect(objectFunctions.keys(true)).toBe(null)
    });
    it('takes in object, should return an array of the key names as strings', () => {
      expect(objectFunctions.keys({key: 'value', key1: 'value'})).toEqual(['key', 'key1'])
    });
  })


  // values function test suite
  describe('values function test suite', () => {
    it('takes in an object and returns an array with the value names as string items in the array', () => {
      expect(objectFunctions.values({key: 'value', key1: 'value'})).toEqual(['value', 'value'])
    });
  })

  // mapObject function test suite
  describe('mapObject function test suite', () => {
    it('takes in object and a cb function, should return object with the values mapped.', () => {
      expect(objectFunctions.mapObject({key: '1', key1: '2'}, objectFunctions.values({key: 'value', key1: 'value'}))).toEqual({'key': ['1'], 'key1': ['2']})
    });
  })

  // pairs function test suite
  describe('pairs function test suite', () => {
    it('takes in an object, returns an array of arrays with the key value pairs as strings as the array items', () => {
      expect(objectFunctions.pairs({key: '1', key1: '2'})).toEqual([['key', '1'], ['key1', '2']])
    });
  })


  // invert function test suite
  describe('invert function test suite', () => {
    it('takes in an object, should return the object with the key/value pairs reversed.', () => {
      expect(objectFunctions.invert({key: '1', key1: '2'})).toEqual({'1': 'key', '2': 'key1'})
    });
  })

    // defaults function test suite
    describe('defaults function test suite', () => {
      it('takes in an object and a string, turns each character of that string turns each character into a value name and places them at the beginning of the object, then pairs each character value name with a key name starting with 0 and adding a number for every character in the string ', () => {
        expect(objectFunctions.defaults({key: '1', key1: '2'}, '1')).toEqual({'0':'1', 'key': '1', 'key1': '2'})
      });
    })



});
