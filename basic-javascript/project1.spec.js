const helpers = require('./project1');

// start testing!
describe('multiply by ten', () => {
    test('Should multiply a number by ten', () => {
      expect(helpers.multiplyByTen(2)).toEqual(20);
      expect(helpers.multiplyByTen(10)).toEqual(100);
      expect(helpers.multiplyByTen(6.5)).toEqual(65);
      expect(helpers.multiplyByTen(-2)).toEqual(-20);
    })
    test('Should return false if value is undefined', () => {
      expect(helpers.multiplyByTen(undefined)).toEqual(false)
    })
  })

  describe('subtract by five', () => {
      test('Should subtract a number by five', () => {
          expect(helpers.subtractFive(10)).toEqual(5);
          expect(helpers.subtractFive(5)).toEqual(0); 
          expect(helpers.subtractFive(-10)).toEqual(-15); 
      })
  })

  describe('are same length', () => {
      test('should return true if strings are equal in length', () => {
          expect(helpers.areSameLength('dog', 'cat')).toEqual(true); 
          expect(helpers.areSameLength('ant', 'ladybug')).toEqual(false); 
          expect(helpers.areSameLength(2, 'two')).toEqual(false); 
      })
  })

  describe('are equal', ()=>{
      test("should return true if x and y are equal", () => {
          expect(helpers.areEqual(2, 2)).toEqual(true); 
          expect(helpers.areEqual(3, 5)).toEqual(false); 
          expect(helpers.areEqual(undefined, 3)).toEqual(false); 
      })
  })