const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {

  describe('keys', () => {
    it('should return an Array', () => {
      const keys = objectFunctions.keys;
      const obj = {
        name: 'jack',
        position: 'cia',
        alias: 'nerd'
      }
      expect(keys(obj)).toEqual([ 'name', 'position', 'alias' ]);
    });


    it('should handle args', () => {
      const keys = objectFunctions.keys;

      expect(keys({})).toEqual([]);
      expect(keys([])).toBe('Need to provide an object');
      expect(keys('hello')).toBe('Need to provide an object');
      expect(keys(undefined)).toBe('Need to provide an object');
    });
  });


  describe('values', () => {
    it('should return an Array', () => {
      const values = objectFunctions.values;
      const obj = {
        name: 'jack',
        position: 'cia',
        alias: 'nerd'
      }
      expect(values(obj)).toEqual([ 'jack', 'cia', 'nerd' ]);
    });


    it('should handle args', () => {
      const values = objectFunctions.values;

      expect(values({})).toEqual([]);
      expect(values([])).toBe('Need to provide an object');
      expect(values(654)).toBe('Need to provide an object');
      expect(values(null)).toBe('Need to provide an object');
    });
  });


  describe('mapObject', () => {
    it('should return an Array', () => {
      const mapObject = objectFunctions.mapObject;
      const obj = {
        name: 'jack',
        position: 'cia',
        alias: 'nerd'
      }
      const cb = (obj) => `${obj}!!`
      expect(mapObject(obj, cb)).toEqual({
         name: 'jack!!', 
         position: 'cia!!', 
         alias: 'nerd!!' 
      });
    });


    it('should handle args', () => {
      const mapObject = objectFunctions.mapObject;
      const cb = (obj) => `${obj}!!`
      expect(mapObject({}, [])).toBe('Did not provide a function');
      expect(mapObject(undefined)).toBe('Need to provide an object');
      expect(mapObject(null, cb)).toBe('Need to provide an object');
    });
  });


  describe('pairs', () => {
    it('should return an Array', () => {
      const pairs = objectFunctions.pairs;
      const obj = {
        name: 'jack',
        position: 'cia',
        alias: 'nerd'
      }
      expect(pairs(obj)).toEqual([
        [ 'name', 'jack' ],
        [ 'position', 'cia' ],
        [ 'alias', 'nerd' ] 
      ]);
    });


    it('should handle args', () => {
      const pairs = objectFunctions.pairs;

      expect(pairs({})).toEqual([]);
      expect(pairs([])).toBe('Need to provide an object');
      expect(pairs(654)).toBe('Need to provide an object');
      expect(pairs(undefined)).toBe('Need to provide an object');
    });
  });


  describe('invert', () => {
    it('should return an Array', () => {
      const invert = objectFunctions.invert;
      const obj = {
        name: 'jack',
        position: 'cia',
        alias: 'nerd'
      }
      expect(invert(obj)).toEqual({
        jack: 'name',
        cia: 'position',
        nerd: 'alias'
      });
    });


    it('should handle args', () => {
      const invert = objectFunctions.invert;

      expect(invert({})).toEqual({});
      expect(invert([])).toBe('Need to provide an object');
      expect(invert(654)).toBe('Need to provide an object');
      expect(invert(undefined)).toBe('Need to provide an object');
    });
  });

});
