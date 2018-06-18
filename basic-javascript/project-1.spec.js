const helpers = require('./project-1');

// start testing!
describe('isEven', () => {
    it.only('should return true for even numbers', () => {
      expect(helpers.isEven(4)).toBeTruthy();
      expect(helpers.isEven(0)).toBeTruthy();
    });
    it.only('should return false for odd numbers', () => {
      expect(helpers.isEven(3)).toBeFalsy();
      expect(helpers.isEven(-1)).toBeFalsy();
    });
  });

  describe('isOdd', () => {
      it.only('should return true for odd numbers', () => {
        expect(helpers.isOdd(9)).toBeTruthy();
      });
      it.only('should return false for even numbers', () => {
        expect(helpers.isOdd(8)).toBeFalsy();
      });
  });

  describe('divide', () => {
    it.only('should divide numbers', () => {
        const expected = 2;
        const actual = (4, 2);
        expect(actual).toEqual(expected)
    });
  });
  
  describe('multiply', () => {
    it.only('should multiply numbers', () => {
        const expected = 12;
        const actual = (3,4);
        expect(helpers.multiply(actual)).toEqual(expected);
    });
  });

  describe('getRemainder', () => {
    it.only('should return the remainder', () => {
        const expected = 2;
        const actual = (10,8);
        expect(actual).toEqual(expected);
    });
  });
