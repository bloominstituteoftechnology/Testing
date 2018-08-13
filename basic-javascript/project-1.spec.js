const helpers = require('./project-1');
require('jest-extended');

// start testing!
describe("project-1", () => {

  describe('multiplyByTen', () => {
    it('should return the given number multiplied by ten', () => {
      //assert
      expect(helpers.multiplyByTen(undefined)).toBeNaN();
      expect(helpers.multiplyByTen('test')).toBeNaN();
      expect(helpers.multiplyByTen(false)).toEqual(0);
      expect(helpers.multiplyByTen(true)).not.toEqual(1);
    })
  })

  describe('subtractFive', () => {
    it('should return the given minus five', () => {
      expect(helpers.subtractFive(10)).toBe(5)
    })
    it('should return NaN', () => {
      expect(helpers.subtractFive('str')).toBe(NaN);
    })
  })

  describe('areSameLength', () => {
    it('should return true if length is equal', () => {
      expect(helpers.areSameLength('asdf', 'asdf')).toBeTruthy();
    })
    it('return false if lengths not equal', () => {
      expect(helpers.areSameLength('akafdasdf', 'afda')).toBeFalsy();
    })
  })

  describe('areEqual', () => {
    it('should return false if not equal', () => {
      expect(helpers.areEqual(5, 7)).toBeFalsy()
    })
    it('should return true if equal', () => {
      expect(helpers.areEqual(5, 5)).toBeTruthy()
    })
    it('should return true if no arguments provided', () => {
      expect(helpers.areEqual()).toBeTruthy()
    })
  })

  describe('lessThanNinety', () => {
    it('should return true if less than 90', () => {
      expect(helpers.lessThanNinety(89)).toBeTruthy()
    })
    it('should return false if greater than 90', () => {
      expect(helpers.lessThanNinety(91)).toBeFalsy()
    })
    it('should return false if no arguments provided', () => {
      expect(helpers.lessThanNinety()).toBeFalsy()
    })
  })

  describe('greaterThanFifty', () => {
    it('should return true if greater than 50', () => {
      expect(helpers.greaterThanFifty(60)).toBeTruthy()
    })
    it('should return false if less than 50', () => {
      expect(helpers.greaterThanFifty(49)).toBeFalsy()
    })
    it('should return false if no arguments provided', () => {
      expect(helpers.greaterThanFifty()).toBeFalsy()
    })
    it('should return a boolean', () => {
      expect(helpers.greaterThanFifty(49)).toBeBoolean()
    })
  })

  describe('add', () => {
    it('should return a number', () => {
      expect(helpers.add(5)).toBeNumber()
    })
    it('should return ten given two fives', () => {
      expect(helpers.add(5, 5)).toBe(10);
    })
    it('should return NaN if no arguments provided', () => {
      expect(helpers.add()).toBeNaN()
    })
  })

  describe('subtract', () => {
    it('should return a number', () => {
      expect(helpers.subtract(7)).toBeNumber()
    })
    it('should return 10 given 15 and 5', () => {
      expect(helpers.subtract(15, 5)).toBe(10);
    })
    it('should return NaN if no arguments provided', () => {
      expect(helpers.subtract()).toBeNaN()
    })
  })

  describe('divide', () => {
    it('should return a number', () => {
      expect(helpers.divide(25)).toBeNumber()
    })
    it('should return 10 given 100 and 10', () => {
      expect(helpers.divide(100, 10)).toBe(10);
    })
    it('should return NaN if no arguments provided', () => {
      expect(helpers.divide()).toBeNaN()
    })
  })

  describe('multiply', () => {
    it('should return a number', () => {
      expect(helpers.multiply(25)).toBeNumber()
    })
    it('should return 25 given 5 and 5', () => {
      expect(helpers.multiply(5, 5)).toBe(25);
    })
    it('should return NaN if no arguments provided', () => {
      expect(helpers.multiply()).toBeNaN()
    })
  })

  describe('getRemainder', () => {
    it('should return a number', () => {
      expect(helpers.getRemainder(25)).toBeNumber()
    })
    it('should return 0 given 25 and 5', () => {
      expect(helpers.getRemainder(5, 5)).toBe(0);
    })
    it('should return 1 given 22 and 7', () => {
      expect(helpers.getRemainder(22, 7)).toBe(1);
    })
    it('should return NaN if no arguments provided', () => {
      expect(helpers.getRemainder()).toBeNaN()
    })
  })


})
