const helpers = require('./project-1');

// start testing!
describe('project-1.js', () => {
  describe('multiplyByTen()', () => {
    it('should multiply intake number by 10', () => {
      const expected = 20;
      const actual = helpers.multiplyByTen(2);
      expect(actual).toEqual(expected);
    })
  })
  describe('subtractFive()', () => {
    it('should subtract intake number by 5', () => {
      const expected = 5;
      const actual = helpers.subtractFive(10);
      expect(actual).toEqual(expected);
    })
  })
  describe('areSameLength()', () => {
    it('should check if strings are equal lengths', () => {
      const expected = true;
      const actual = helpers.areSameLength("hello", "howdy");
      expect(actual).toEqual(expected);
    })
  })
  describe('lessThanNinety()', () => {
    it('should check if number is less than 90', () => {
      const expected = true;
      const actual = helpers.lessThanNinety(89);
      expect(actual).toBe(expected);
    })
  })
  describe('greaterThanFifty()', () => {
    it('should check if number is more than 50', () => {
      const expected = true;
      const actual = helpers.greaterThanFifty(51);
      expect(actual).toBe(expected);
    })
  })
  describe('add()', () => {
    it('should add two numbers together', () => {
      const expected = 3;
      const actual = helpers.add(1, 2);
      expect(actual).toBe(expected);
    })
  })
  describe('subtract()', () => {
    it('should subtract 2nd argument from 1st argument', () => {
      const expected = 1;
      const actual = helpers.subtract(3, 2);
      expect(actual).toBe(expected);
    })
  })
  describe('divide()', () => {
    it('should divide 2nd argument from 1st argument', () => {
      const expected = 3;
      const actual = helpers.divide(6, 2);
      expect(actual).toBe(expected);
    })
  })
  describe('multiply()', () => {
    it('should multiply two numbers together', () => {
      const expected = 9;
      const actual = helpers.multiply(3, 3);
      expect(actual).toBe(expected);
    })
  })
  describe('getRemainder()', () => {
    it('should get remainder after 1st argument divided by 2nd', () => {
      const expected = 1;
      const actual = helpers.getRemainder(10, 3);
      expect(actual).toBe(expected);
    })
  })
  describe('isEven()', () => {
    it('should check if number is even', () => {
      const expected = true;
      const actual = helpers.isEven(10);
      expect(actual).toBe(expected);
    })
  })
  describe('isOdd()', () => {
    it('should check if number is even', () => {
      const expected = true;
      const actual = helpers.isOdd(9);
      expect(actual).toBe(expected);
    })
  })
  describe('square()', () => {
    it('should square a number', () => {
      const expected = 64;
      const actual = helpers.square(8);
      expect(actual).toBe(expected);
    })
  })
  describe('cube()', () => {
    it('should cube a number', () => {
      const expected = 8;
      const actual = helpers.cube(2);
      expect(actual).toBe(expected);
    })
  })
  describe('raiseToPower()', () => {
    it('should raise a number to the power of 2nd argument', () => {
      const expected = 8;
      const actual = helpers.raiseToPower(2, 3);
      expect(actual).toBe(expected);
    })
  })
  describe('roundNumber()', () => {
    it('should round a number to closest integer', () => {
      const expected = 8;
      const actual = helpers.roundNumber(8.4);
      expect(actual).toBe(expected);
    })
  })
  describe('roundUp()', () => {
    it('should round a number up to closest integer', () => {
      const expected = 9;
      const actual = helpers.roundUp(8.1);
      expect(actual).toBe(expected);
    })
  })
  describe('addExclamationPoint()', () => {
    it('should add an exclaimation point to string', () => {
      const expected = "dog!";
      const actual = helpers.addExclamationPoint("dog");
      expect(actual).toBe(expected);
    })
  })
  describe('combineNames()', () => {
    it('should combine the first and last name', () => {
      const expected = "Bruce Wayne";
      const actual = helpers.combineNames("Bruce", "Wayne");
      expect(actual).toBe(expected);
    })
  })
  describe('getGreeting()', () => {
    it('should greet the name', () => {
      const expected = "Hello Clark Kent!";
      const actual = helpers.getGreeting("Clark Kent");
      expect(actual).toBe(expected);
    })
  })
  describe('getRectangleArea()', () => {
    it('should get area given length and width', () => {
      const expected = 36;
      const actual = helpers.getRectangleArea(6, 6);
      expect(actual).toBe(expected);
    })
  })
  describe('getTriangleArea()', () => {
    it('should get area given base and height', () => {
      const expected = 18;
      const actual = helpers.getTriangleArea(6, 6);
      expect(actual).toBe(expected);
    })
  })
  describe('getCircleArea()', () => {
    it('should get area given base and height', () => {
      const expected = (3 ** 2) * Math.PI;
      const actual = helpers.getCircleArea(3);
      expect(actual).toBe(expected);
    })
  })
  describe('getRectangularPrismVolume()', () => {
    it('should get area given length, width, and height', () => {
      const expected = 216;
      const actual = helpers.getRectangularPrismVolume(6, 6, 6);
      expect(actual).toBe(expected);
    })
  })
})

