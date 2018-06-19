const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {

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
 
  //mapObject
  describe("mapObject", () => {
    it("should return an object with the value increment by 1", () => {
      expect(objectFunctions.mapObject({num1: 5, num2: 7}, (x) => x + 1))
      .toEqual({num1: 6, num2: 8}); 
    })
  })
 
  //pairs
  describe("pairs", () => {
    it("should return 1 with arrays of key value pair", () => {
      expect(objectFunctions.pairs({name: "Ja", age: 23}))
      .toEqual([["name","Ja"],["age",23]])
    })
  })
 
  //invert
  describe("invert", () => {
    it("should invert the key and value of the object", () => {
      expect(objectFunctions.invert({name: "Ja", age: 23})).toEqual({Ja:"name", "23": "age"})
    })
  })
 
  //defaults
describe("defaults", () => {
  it("should return the object's own property and value and properties that you don't have but is given to you from the default object", () => {
    expect(objectFunctions.defaults({name: "Ja", age: 23}, {name: "test", age: 5, lastName: "Navey"}))
    .toEqual({name: "Ja", age: 23, lastName: "Navey"})
  })
})

});
