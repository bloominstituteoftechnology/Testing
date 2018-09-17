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

  describe("is ten of five", () => {
      test("should true of number is ten or five", () => {
          expect(helpers.isTenOrFive(5)).toEqual(true); 
          expect(helpers.isTenOrFive(10)).toEqual(true); 
          expect(helpers.isTenOrFive(3)).toEqual(false); 
          expect(helpers.isTenOrFive(undefined)).toEqual(false); 
      })
  })

  describe("is i range", () => {
      test("should return true if in range", () => {
          expect(helpers.isInRange(30)).toEqual(true); 
          expect(helpers.isInRange(65)).toEqual(false); 
          expect(helpers.isInRange(10)).toEqual(false); 
          expect(helpers.isInRange(undefined)).toEqual(false);
      })
  })

  describe("is an integer", () => {
      test("should return true if input is integer", () => {
          expect(helpers.isInteger(1)).toEqual(true); 
          expect(helpers.isInteger(3.4)).toEqual(false); 
          expect(helpers.isInteger(undefined)).toEqual(false); 
      })
  })