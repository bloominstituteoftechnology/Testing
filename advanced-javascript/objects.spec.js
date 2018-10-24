const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe.only('objects', () => {
  const obj = {
    id: 1,
    name: 'Kev',
    location: 'Forum Coffeehouse'
  };

  describe('keys', () => {
    it('Should return keys of an object.', () => {
      expect(objectFunctions.keys(obj)).toEqual(['id', 'name', 'location']);
    });
    it('Should throw error if argument is not an Object', () => {
      const actual = () => objectFunctions.keys(4);
      expect(actual).toThrow();
    });
  });

  describe('values', () => {
    it('Should return values of an object', () => {
      expect(objectFunctions.values(obj)).toEqual([1, 'Kev', 'Forum Coffeehouse']);
    });
    it('Should throw error if argument is not an Object', () => {
      const actual = () => objectFunctions.values(4);
      expect(actual).toThrow();
    });
  });

  describe('mapObject', () => {
    const obj2 = {lon:1, lat:2};
    it('Should run second argument callback on each value in first argument object.', () => {
      expect(objectFunctions.mapObject(obj2, value => {
        return value+1;
      })).toEqual({lon:2, lat:3});
    });
    it('Should throw an error if passed missing or improper arguments.', () => {
      let actual = () => objectFunctions.mapObject(obj2);
      expect(actual).toThrow();
      actual = () => objectFunctions.mapObject();
      expect(actual).toThrow();
      actual = () => objectFunctions.mapObject(obj2, obj);
      expect(actual).toThrow();
    });
  });

  describe('pairs', () => {
    it('Should return array of key:value pairs of first argument object.', () => {
      expect(objectFunctions.pairs(obj)).toEqual([['id',1],['name','Kev'],['location','Forum Coffeehouse']]);
    });
    it('Should throw an error if argument is not an Object.', () => {
      const actual = () => objectFunctions.pairs(4);
      expect(actual).toThrow();
    });
  });

  describe('invert', () => {
    const obj2 = {a:'letter', four:'number'};
    it('Should invert key:value pairs in first argument Object.', () => {
      expect(objectFunctions.invert(obj2)).toEqual({letter:'a', number:'four'});
    });
    it('Should throw an error if argument is not an Object.', () => {
      const actual = () => objectFunctions.invert(4);
      expect(actual).toThrow();
    });
  });
  // it('should be an object', () => {});
});
