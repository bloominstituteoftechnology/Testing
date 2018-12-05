const helpers = require('./project-1');

// start testing!
describe('project-1.js', () => {
  describe('multiplyByTen()', () => {
    it('should multiply provided number by 10', () => {
      expect(helpers.multiplyByTen(10)).toEqual(100);
    });
    it('should return zero when called with no value', () => {
      expect(helpers.multiplyByTen()).toBe(0);
    });
  });
  describe('subtractFive()', () => {
    it('should return provided number minus 5', () => {
      expect(helpers.subtractFive(10)).toEqual(5);
      expect(helpers.subtractFive(1)).toEqual(-4);
    });
  });
  describe('areSameLength()', () => {
    it('should return true if strings are same length', () => {
      expect(helpers.areSameLength('hi', 'ho')).toBeTruthy();
      expect(helpers.areSameLength('hi', 'hey')).toBeFalsy();
    });
  });
  describe('areEqual', () => {
    it('should return true if equal and false if not', () => {
      expect(helpers.areEqual(3, 3)).toBeTruthy();
      expect(helpers.areEqual(3, 4)).toBeFalsy();
    });
  });
  describe('lessThanNinety', () => {
    it('should return true if equal and false if not', () => {
      expect(helpers.lessThanNinety(88)).toBeTruthy();
      expect(helpers.lessThanNinety(91)).toBeFalsy();
    });
  });
  describe('greaterThanFifty', () => {
    it('should return true if equal and false if not', () => {
      expect(helpers.greaterThanFifty(88)).toBeTruthy();
      expect(helpers.greaterThanFifty(45)).toBeFalsy();
    });
  });
  describe('add()', () => {
    it('shoud add two values', () => {
      expect(helpers.add(1, 2)).toBe(3);
    });
  });
  describe('subtract()', () => {
    it('shoud subtract two values', () => {
      expect(helpers.subtract(5, 2)).toBe(3);
    });
  });
  describe('divide()', () => {
    it('shoud divide two values', () => {
      expect(helpers.divide(6, 2)).toBe(3);
    });
  });
  describe('multiply()', () => {
    it('shoud multiply two values', () => {
      expect(helpers.multiply(1, 3)).toBe(3);
    });
  });
  describe('getRemainder()', () => {
    it('shoud get the remainder of two values', () => {
      expect(helpers.getRemainder(4, 2)).toBe(0);
    });
  });
  describe('isEven()', () => {
    it('shoud check if the value is even', () => {
      expect(helpers.isEven(4)).toBeTruthy();
      expect(helpers.isEven(3)).toBeFalsy();
    });
  });
  describe('isOdd()', () => {
    it('shoud check if the value is odd', () => {
      expect(helpers.isOdd(3)).toBeTruthy();
      expect(helpers.isOdd(4)).toBeFalsy();
    });
  });
  describe('square()', () => {
    it('shoud square the value', () => {
      expect(helpers.square(3)).toBe(9);
      expect(helpers.square(-3)).toBe(9);
    });
  });
  describe('cube()', () => {
    it('shoud cube the value', () => {
      expect(helpers.cube(3)).toBe(27);
      expect(helpers.cube(-3)).toBe(-27);
    });
  });
  describe('raiseToPower()', () => {
    it('shoud raise the value to power', () => {
      expect(helpers.raiseToPower(3, 3)).toBe(27);
      expect(helpers.raiseToPower(3, -3)).toBe(27);
    });
  });
  describe('roundNumber()', () => {
    it('should round to nearest whole number', () => {
      expect(helpers.roundNumber(3.4)).toBe(3);
      expect(helpers.roundNumber(3.6)).toBe(4);
    });
  });
  describe('roundUp()', () => {
    it('should round up to nearest', () => {
      expect(helpers.roundUp(3.4)).toBe(4);
      expect(helpers.roundUp(3.6)).toBe(4);
    });
  });
  describe('addExclamationPoint()', () => {
    it('should add exclaimation point to end of string', () => {
      expect(helpers.addExclamationPoint('hi')).toBe('hi!');
    });
  });
  describe('combineNames()', () => {
    it('should combine first name and last name', () => {
      expect(helpers.combineNames('Ryan', 'Walker')).toBe('Ryan Walker');
    });
  });
  describe('getGreeting()', () => {
    it('should return greeting', () => {
      expect(helpers.getGreeting('Ryan')).toBe('Hello Ryan!');
    });
  });
  describe('getGreeting()', () => {
    it('should return greeting', () => {
      expect(helpers.getGreeting('Ryan')).toBe('Hello Ryan!');
    });
  });
  describe('getRectangleArea()', () => {
    it('should return rectangle area', () => {
      expect(helpers.getRectangleArea(3, 4)).toBe(12);
    });
    it('should convert negative param to absolute', () => {
      expect(helpers.getRectangleArea(-3, 4)).toBe(12);
    });
  });
  describe('getTriangleArea()', () => {
    it('should return triangle area', () => {
      expect(helpers.getTriangleArea(3, 4)).toBe(6);
    });
    it('should convert negative param to absolute', () => {
      expect(helpers.getTriangleArea(-3, 4)).toBe(6);
    });
  });
  describe('getCircleArea()', () => {
    it('should return triangle area with two decimal places', () => {
      expect(helpers.getCircleArea(3)).toBe(28.27);
    });
    it('should treat negative param values as positive', () => {
      expect(helpers.getCircleArea(-3)).toBe(28.27);
    });
  });
  describe('getRectangularPrismVolume()', () => {
    it('should return volume', () => {
      expect(helpers.getRectangularPrismVolume(3, 3, 3)).toBe(27);
    });
    it('should treat negative param values as positive', () => {
      expect(helpers.getRectangularPrismVolume(3, 3, -3)).toBe(27);
    });
  });
});
