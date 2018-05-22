const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  
  describe('keys', () => {
    const keys = objectFunctions.keys;
    const obj = {
      name: "Zack",
      city: "SF"
    };
    
    it ('should return an array of keys', () => {
      const objKeys = keys(obj);
      //console.log(objKeys);
      expect(Array.isArray(objKeys)).toEqual(true);
    });
    
    it('should return keys', () => {
      const objKeys = keys(obj);
      //console.log(objKeys);
      expect(objKeys).toEqual([ 'name', 'city' ]);
    });
  });
  
  describe('values', () => {
    const values = objectFunctions.values;
    const obj = {
      name: "Zack",
      city: "SF"
    };
    
    it ('should return an array of values', () => {
      const objValues = values(obj);
      //console.log(objKeys);
      expect(Array.isArray(objValues)).toEqual(true);
    });
    
    it('should return values', () => {
      const objValues = values(obj);
      //console.log(objKeys);
      expect(objValues).toEqual([ 'Zack', 'SF' ]);
    });
  });
  
});
