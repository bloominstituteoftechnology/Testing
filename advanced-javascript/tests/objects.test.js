const { assert, expect } = require('chai');
const objectFunctions = require('../src/objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('OBJECTS', () => {
  describe('keys', () => {
    it('should be a function', () => {
      const keys = objectFunctions.keys;
      expect(keys).to.be.a('function');
    });
    it('should return the keys of an object', () => {
      const keys = objectFunctions.keys;
      assert.deepEqual(keys({ cheese: 'gouda', meat: 'salami' }), [
        'cheese',
        'meat'
      ]);
    });
    it('should return an array', () => {
      const keys = objectFunctions.keys;
      expect(
        Array.isArray(
          keys({ breakfast: 'done', lunch: 'done', dinner: 'not done' })
        )
      );
    });
  });

  describe('values', () => {
    it('should be a function', () => {
      const values = objectFunctions.values;
      expect(values).to.be.a('function');
    });
    it('should return the values of an object', () => {
      const values = objectFunctions.values;
      assert.deepEqual(values({ cheese: 'gouda', meat: 'salami' }), [
        'gouda',
        'salami'
      ]);
    });
    it('should return an array', () => {
      const values = objectFunctions.values;
      expect(
        Array.isArray(
          values({ breakfast: 'done', lunch: 'done', dinner: 'not done' })
        )
      );
    });
  });
  describe('mapObject', () => {
    it('should be a function', () => {
      const mapObject = objectFunctions.mapObject;
      expect(mapObject).to.be.a('function');
    });
    it('should return a key-value pair with a value changed from the original by a callback function ', () => {
      const mapObject = objectFunctions.mapObject;
      const callback = value => {
        return value + 1;
      };
      assert.deepEqual(mapObject({ cheese: 1, meat: 2 }, callback), {
        cheese: 2,
        meat: 3
      });
    });
    it('should return an object', () => {
      const mapObject = objectFunctions.mapObject;
      const callback = value => {
        return value.concat(' with it');
      };
      expect(
        typeof mapObject(
          { breakfast: 'done', lunch: 'done', dinner: 'not done' },
          callback
        )
      ).to.equal('object');
    });
  });
  describe('pairs', () => {
    it('should be a function', () => {
      const pairs = objectFunctions.pairs;
      expect(pairs).to.be.a('function');
    });
    it('should return a nested array, filled with key value pairs ', () => {
      const pairs = objectFunctions.pairs;
      assert.deepEqual(pairs({ cheese: 1, meat: 2 }), [
        ['cheese', 1],
        ['meat', 2]
      ]);
    });
    it('should return an array', () => {
      const pairs = objectFunctions.pairs;
      expect(
        Array.isArray(
          pairs({ breakfast: 'done', lunch: 'done', dinner: 'not done' })
        )
      ).to.equal(true);
    });
  });
  describe('invert', () => {
    it('should be a function', () => {
      const invert = objectFunctions.invert;
      expect(invert).to.be.a('function');
    });
    it('should return a key-value pair with positions swapped, so value is the previous key and vice-versa ', () => {
      const invert = objectFunctions.invert;
      assert.deepEqual(invert({ cheese: 1, meat: 2 }), {
        1: 'cheese',
        2: 'meat'
      });
    });
    it('should return an object', () => {
      const invert = objectFunctions.invert;
      expect(
        typeof invert({ breakfast: 'done', lunch: 'done', dinner: 'not done' })
      ).to.equal('object');
    });
  });
  describe('defaults', () => {
    it('should be a function', () => {
      const defaults = objectFunctions.defaults;
      expect(defaults).to.be.a('function');
    });
    it('should return an object that includes all properties listed in the default ', () => {
      const defaults = objectFunctions.defaults;
      const base = { breakfast: 'done', lunch: 'done', eyeColor: 'not done' };
      const defaultProps = { height: 1, weight: 2, eyeColor: 'brown' };
      const defaultProps2 = {
        height: 1,
        weight: 2,
        eyeColor: 'brown',
        hairColor: 'black'
      };
      defaults(base, defaultProps);
      assert.containsAllDeepKeys(
        defaults(base, defaultProps),
        Object.keys(defaultProps)
      );
    });
    it('should return an object', () => {
      const defaults = objectFunctions.defaults;
      const defaultProps = { height: 1, weight: 2, eyeColor: 'brown' };
      expect(
        typeof defaults(
          { breakfast: 'done', lunch: 'done', dinner: 'not done' },
          defaultProps
        )
      ).to.equal('object');
    });
  });
});
