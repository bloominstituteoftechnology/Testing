const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const expect = chai.expect;
const assert = chai.assert;
const objectFunctions = require('../src/objects');

chai.use(sinonChai);

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Objects', () => {
  describe('`keys`', () => {
    it('should return an array', () => {
      const obj = { name: 'Peter Parker', alias: 'Spider-Man', hobbies: ['science', 'photography', 'paying bills', 'not being Spider-Man'] };
      const keys = objectFunctions.keys(obj);
      assert.typeOf(keys, 'array');
    });
    it('should return an array of the passed object\'s properties', () => {
      const obj = { name: 'Peter Parker', alias: 'Spider-Man', hobbies: ['science', 'photography', 'paying bills', 'not being Spider-Man'] };
      const keys = objectFunctions.keys(obj);
      assert.equal(obj[keys[0]], obj.name);
      assert.equal(obj[keys[1]], obj.alias);
      assert.equal(obj[keys[2]], obj.hobbies);
    });
  });

  describe('`values`', () => {
    it('should return an array of the passed object\'s values', () => {
      const obj = { name: 'Peter Parker', alias: 'Spider-Man', hobbies: ['science', 'photography', 'paying bills', 'not being Spider-Man'] };
      const values = objectFunctions.values(obj);
      assert.equal(values[0], obj.name);
      assert.equal(values[1], obj.alias);
      assert.equal(values[2], obj.hobbies);
    });
  });

  describe('`mapObject`', () => {
    it('should return an object', () => {
      const mapObject = objectFunctions.mapObject;
      const obj = { name: 'Blue', occupation: 'Puzzle solver', gender: 'dog' };
      const cb = sinon.stub();
      cb.returns(1);
      assert.typeOf(mapObject(obj, cb), 'object');
    });
    it('should pass the values to the callback function and change them in the passed object', () => {
      const mapObject = objectFunctions.mapObject;
      const obj = { name: 'Blue', occupation: 'Puzzle solver', gender: 'dog' };
      const cb = sinon.stub();
      cb.withArgs('Blue').returns(1);
      cb.withArgs('Puzzle solver').returns(2);
      cb.withArgs('dog').returns(3);
      mapObject(obj, cb);
      expect(cb).to.have.callCount(3);
      expect(obj).to.deep.equal({ name: 1, occupation: 2, gender: 3 });
    });

    describe('`invert`', () => {
      it('should invert the properties and values of the passed object', () => {
        const invert = objectFunctions.invert;
        const obj = { name: 'Blue', occupation: 'Puzzle solver', gender: 'dog' };
        invert(obj);
        expect(Object.keys(obj)).to.deep.equal(['Blue', 'Puzzle solver', 'dog']);
        expect(Object.values(obj)).to.deep.equal(['name', 'occupation', 'gender']);
      });
    });

    describe('`defaults`', () => {
      it('should add defaultProps to passed object, leave defined defaultProps unchanged', () => {
        const defaults = objectFunctions.defaults;
        const obj = { name: 'Blue', occupation: 'Puzzle solver', gender: 'dog' };
        const props = { name: 'Dags', age: 2, weight: '20kg', color: 'blue' };
        defaults(obj, props);
        expect(Object.keys(obj)).to.deep.equal(['name', 'occupation', 'gender', 'age', 'weight', 'color']);
        assert.equal(obj.name, 'Blue');
      });
    });
  });
});
