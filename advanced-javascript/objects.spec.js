const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  it('should be an object', () => {});
});



  // keys
  describe("keys", () => {
    it("should return an array of the properties of an object", () => {
      expect(objectFunctions.keys({name: "Maribel", age: 18})).toEqual(['name', 'age']);
    })
  })
 
  //values
  describe("values", () => {
    it("should return an array if the values of an object", () => {
      expect(objectFunctions.values({name: "Maribel", age: 18})).toEqual(["Maribel", 18]); 
    })
  })
