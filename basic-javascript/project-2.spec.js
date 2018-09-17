const helpers = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('find the higher number', () => {
    test('Should return the higher number', () => {
      expect(helpers.getBiggest(2, 9)).toEqual(9);
      expect(helpers.getBiggest(10, 1)).toEqual(10);
      expect(helpers.getBiggest(-10, 100)).toEqual(100);
    })
    test('Should return false if either value is undefined', () => {
      expect(helpers.getBiggest(undefined)).toEqual(false)
    })
  })

  describe('greeting', () => {
      test('should return a greeting', () => {
          expect(helpers.greeting("German")).toEqual("Guten Tag!"); 
          expect(helpers.greeting("Spanish")).toEqual("Hola!"); 
          
      })
  })