const { expect } = require('chai');
const objectFunctions = require('../src/objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  describe('keys', () => {
    const { keys } = objectFunctions;
    it('should be a function', () => {
      expect(keys).to.be.a('function');
    });
    it('should return an array', () => {
      const object = {
        1: 'John',
        2: 'Edmund',
        3: 'Joshua'
      };
      expect(keys(object)).to.be.a('array');
    });
  });

  describe('values', () => {
    const { values } = objectFunctions;
    it('should be a function', () => {
      expect(values).to.be.a('function');
    });
    it('should return an array', () => {
      const object = {
        1: 'John',
        2: 'Edmund',
        3: 'Joshua'
      };
      expect(values(object)).to.be.a('array');
    });
  });

  describe('mapObject', () => {
    const { mapObject } = objectFunctions;
    it('should be a function', () => {
      expect(mapObject).to.be.a('function');
    });
    it('should return a new object', () => {
      const object = {
        1: 1,
        2: 2,
        3: 3
      };
      const cb = (x) => {
        return x + 1;
      };
      const newObj = {
        1: 2,
        2: 3,
        3: 4
      };
      expect(mapObject(object, cb)).to.deep.equal(newObj);
      expect(mapObject(object, cb)).to.be.a('object');
    });
  });

  describe('pairs', () => {
    const { pairs } = objectFunctions;
    it('should be a function', () => {
      expect(pairs).to.be.a('function');
    });
    it('should return an array', () => {
      const object = {
        1: 1,
        2: 2,
        3: 3
      };

      const newArr = [['1', 1], ['2', 2], ['3', 3]];
      expect(pairs(object)).to.deep.equal(newArr);
    });
  });

  describe('invert', () => {
    const { invert } = objectFunctions;
    it('should be a function', () => {
      expect(invert).to.be.a('function');
    });
    it('should return an object', () => {
      const object = {
        1: 'a',
        2: 'b',
        3: 'c'
      };

      const newObj = {
        a: '1',
        b: '2',
        c: '3'
      };
      expect(invert(object)).to.deep.equal(newObj);
    });
  });

  describe('defaults', () => {
    const { defaults } = objectFunctions;
    it('should be a function', () => {
      expect(defaults).to.be.a('function');
    });
    it('should return an object', () => {
      const objOne = {
        1: 'a',
        2: 'b',
        3: 'c'
      };

      const objTwo = {
        4: 'd'
      };

      const objThree = {
        1: 'a',
        2: 'b',
        3: 'c',
        4: 'd'
      };

      expect(defaults(objOne, objTwo)).to.deep.equal(objThree);
    });
  });
});
