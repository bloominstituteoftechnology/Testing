const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  

  describe('keys', () => {
    it('Return array of object keys', () => {	      
      const keys = objectFunctions.keys;
  
      const Value = keys([1, 2, 3]);
  
      expect(Value).toEqual(['0', '1', '2']);
    });
  });


  describe('values', () => {
    it('Return array of object values', () => {
      const values = objectFunctions.values;

      const Value1 = values(['Jasmine']);
      const Value2 = values('Das');

      expect(Value1).toEqual(['Jasmine']);
      expect(Value2).toEqual(['D', 'a', 's']);
    });
  });

  describe('mapObject', () => {
    it('Map over each key object', () => {
      const mapObject = objectFunctions.mapObject;

      const Value1 = mapObject([10], num => num * 3);
      const Value2 = mapObject({ a: 'Jasmine', b: 'Das' }, num => num.length);

      expect(Value1).toEqual([30]);
      expect(Value2).toEqual({ a: 7, b: 3 });
    });
  });

  describe('invert', () => {
    it('Invert keys with values and other way round ', () => {
      const invert = objectFunctions.invert;

      const Value = invert({ name1: 'Jasmine', name2: 'Das', name3: 'Aloha' });

      expect(Value).toEqual({ 'Jasmine': 'name1', 'Das': 'name2', 'Aloha': 'name3' });
    });
  });

  describe('defaults', () => {
    it('default values', () => {
      const defaults = objectFunctions.defaults;

      const days = defaults({ 2: 'Tuesday', 3: 'Wednesday' }, { 1: 'Monday' })

      expect(days).toEqual({ 1: 'Monday', 2: 'Tuesday', 3: 'Wednesday' });
      });
    });
});