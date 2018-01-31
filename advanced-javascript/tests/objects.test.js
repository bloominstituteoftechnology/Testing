const chai = require('chai');
const objectFunctions = require('../src/objects');

const { expect, assert } = chai;

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Objects', () => {
  describe('keys', () => {
    const { keys } = objectFunctions;

    it('should be a function', () => {
      expect(keys).to.be.a('function');
    });

    it('should return the keys of an object', () => {
      const keysArray = keys({ cheese: 'gouda', meat: 'salami' });
      expect(keysArray).to.deep.equal(['cheese', 'meat']);
    });

    it('should return an array', () => {
      const keysArray = keys({ breakfast: 'done', lunch: 'done', dinner: 'not done' });
      expect(keysArray).to.be.an('array'); // Array
    });
  });

  describe('values', () => {
    const { values } = objectFunctions;

    it('should be a function', () => {
      expect(values).to.be.a('function');
    });

    it('should return the values of an object', () => {
      const valuesArray = values({ cheese: 'gouda', meat: 'salami' });
      expect(valuesArray).to.deep.equal(['gouda', 'salami']);
    });

    it('should return an array', () => {
      const valuesArray = values({ breakfast: 'done', lunch: 'done', dinner: 'not done' });
      expect(valuesArray).to.be.an('array');
    });
  });

  describe('mapObject', () => {
    const { mapObject } = objectFunctions;

    it('should be a function', () => {
      expect(mapObject).to.be.a('function');
    });

    it('should return a key-value pair with a value changed from the original by a callback function ', () => {
      const callback = (value) => {
        return value + 1;
      };
      const mappedObject = mapObject({ cheese: 1, meat: 2 }, callback);
      expect(mappedObject).to.deep.equal({ cheese: 2, meat: 3 });
    });

    it('should return an object', () => {
      const callback = (value) => {
        return value.concat(' with it');
      };
      const mappedObject = mapObject({ breakfast: 'done', lunch: 'done', dinner: 'not done' }, callback);
      expect(mappedObject).to.be.an('object');
    });
  });

  describe('pairs', () => {
    const { pairs } = objectFunctions;

    it('should be a function', () => {
      expect(pairs).to.be.a('function');
    });

    it('should return a nested array, filled with key value pairs ', () => {
      const pairsArray = pairs({ cheese: 1, meat: 2 });
      expect(pairsArray).to.deep.equal([['cheese', 1], ['meat', 2]]);
    });

    it('should return an array', () => {
      const pairsArray = pairs({ breakfast: 'done', lunch: 'done', dinner: 'not done' });
      expect(pairsArray).to.be.an('array');
    });
  });

  describe('invert', () => {
    const { invert } = objectFunctions;

    it('should be a function', () => {
      expect(invert).to.be.a('function');
    });

    it('should return a key-value pair with positions swapped, so value is the previous key and vice-versa ', () => {
      const invertedObject = invert({ cheese: 1, meat: 2 });
      expect(invertedObject).to.deep.equal({ 1: 'cheese', 2: 'meat' });
    });

    it('should return an object', () => {
      const invertedObject = invert({ breakfast: 'done', lunch: 'done', dinner: 'not done' });
      expect(invertedObject).to.be.an('object');
    });
  });

  describe('defaults', () => {
    const { defaults } = objectFunctions;

    it('should be a function', () => {
      expect(defaults).to.be.a('function');
    });

    it('should return an object that includes all properties listed in the default ', () => {
      const obj = { key1: 1, key2: 2 };
      const defaultsObj = { key2: 3, key3: 4 };
      const newObj = objectFunctions.defaults(obj, defaultsObj);
      expect(newObj).to.eql(obj);
    });

    it('should return an object', () => {
      const defaultProps = { height: 1, weight: 2, eyeColor: 'brown' };
      expect(typeof (defaults({ breakfast: 'done', lunch: 'done', dinner: 'not done' }, defaultProps))).to.equal('object');
    });
  });
});
