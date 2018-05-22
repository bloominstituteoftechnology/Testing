const objectFunctions = require('./objects');

const carObject = {
  make: "ford",
  model: "mustang",
  year: 2010
};

const numObject = {
  first: 1,
  second: 2,
  third: 3
};

const numObjects = {
  first: 1,
  second: 2,
  third: 3
};

const newObject = {
  first: 1,
  second: 2,
  third: 3
}



const multiplyByTen = num => { //PASSES
  return num * 10;
};

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  it('should be an object', () => {});

  describe('keys', () => {  //PASSED
    it('should return the keys of an object', () => {
      //arrange
      const keys = objectFunctions.keys;

      //act
      const objectKeys = keys(carObject);

      expect(objectKeys).toEqual(['make', 'model', 'year']);
      expect(typeof keys).toBe('function');
    })
  })

  describe('values function', () => {
    it('should give the values from the keys', () => {
      //arrange
      const values = objectFunctions.values;

      //act
      const myValues = values(carObject);

      //assert
      expect(myValues).toEqual(['ford', 'mustang', 2010]);
      expect(typeof values).toBe('function');
    })
  })

  describe('map object function', () => {   //PASSED
    it('should map over an object and return new values', () => {
      //arrange
      const mapObject = objectFunctions.mapObject;

      //act
      const mappedObject = mapObject(numObject, multiplyByTen);

      expect(mappedObject).toEqual({first: 10, second: 20, third: 30});
      expect(typeof mapObject).toBe('function');
    })
  })

  describe('pairs object', () => {    //PASSED
    it('should return the key value pairs of an object', () => {
      //arrange
      const pairs = objectFunctions.pairs;

      //act
      const numPairs = pairs(numObjects);

      expect(numPairs).toEqual([["first", 1], ["second", 2], ["third", 3]]);
      expect(typeof pairs).toBe('function');
    })
  })

  describe('invert function', () => {   //PASSED
    it('should invert the keys and values for an object', () => {
      //arrange
      const invert = objectFunctions.invert;

      //act
      const inverted = invert(numObjects);

      expect(inverted).toEqual({"1": "first", "2": "second", "3": "third"});
      expect(typeof invert).toBe('function');
    })
  })

  describe('defaults function', () => { //PASSED
    it('should set default values', () => {
      //arrange
      const defaults = objectFunctions.defaults;

      //act
      const defaulted = defaults(newObject, { fourth: 4 });

      //assert
      expect(defaulted).toEqual({first: 1, second: 2, third: 3, fourth: 4});
      expect(typeof defaults).toBe('function');
    })
  })

});
