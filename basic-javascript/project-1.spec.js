const helpers = require('./project-1');

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
    it('should return true if no arguments', () => {
      expect(helpers.areEqual()).toBeTruthy
    })
  })

  describe('lessThanNinety', () => {
    it('should return true if less')
  })
  
})


