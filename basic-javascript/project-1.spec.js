const helpers = require('./project-1');

// start testing!

describe('project-1.js', () => {
  describe('multiplyByTen()', () => {
    it('should multiply provided number by 10', () => {
      const expected = 80;
      const actual = helpers.multiplyByTen(8);
      expect(actual).toEqual(expected);
    });
  });
  describe('subtractFive()', () => {
    it('should subtract provided number by 5', () => {
      const expected = 15;
      const actual = helpers.subtractFive(20);
      expect(actual).toEqual(expected);
    });
  });
  describe('areSameLength()', () => {
    it('should check if strings are equal lengths', () => {
      const expected = true;
      const actual = helpers.areSameLength('Football', 'Baseball');
      expect(actual).toEqual(expected);
    });
  });
  describe('lessThanNinety()', () => {
    it('should check if number is less than 90', () => {
      const expected = true;
      const actual = helpers.lessThanNinety(75);
      expect(actual).toBe(expected);
    });
  });
  describe('greaterThanFifty()', () => {
    it('should check if number is more than 50', () => {
      const expected = true;
      const actual = helpers.greaterThanFifty(75);
      expect(actual).toBe(expected);
    });
  });
  describe('add()', () => {
    it('should add two numbers together', () => {
      const expected = 10;
      const actual = helpers.add(5, 5);
      expect(actual).toBe(expected);
    });
  });
  describe('subtract()', () => {
    it('should subtract 2nd number from 1st number', () => {
      const expected = 10;
      const actual = helpers.subtract(11, 1);
      expect(actual).toBe(expected);
    });
  });
  describe('divide()', () => {
    it('should divide 2nd number from 1st number', () => {
      const expected = 10;
      const actual = helpers.divide(20, 2);
      expect(actual).toBe(expected);
    });
  });
  describe('multiply()', () => {
    it('should multiply two numbers together', () => {
      const expected = 1000;
      const actual = helpers.multiply(100, 10);
      expect(actual).toBe(expected);
    });
  });
  describe('getRemainder()', () => {
    it('should get a remainder after 1st number divided by 2nd number', () => {
      const expected = 2;
      const actual = helpers.getRemainder(20, 3);
      expect(actual).toBe(expected);
    });
  });
  describe('isEven()', () => {
    it('should check if number is even', () => {
      const expected = true;
      const actual = helpers.isEven(30);
      expect(actual).toBe(expected);
    });
  });
  describe('isOdd()', () => {
    it('should check if number is odd', () => {
      const expected = true;
      const actual = helpers.isOdd(49);
      expect(actual).toBe(expected);
    });
  });
  describe('square()', () => {
    it('should square a number', () => {
      const expected = 100;
      const actual = helpers.square(10);
      expect(actual).toBe(expected);
    });
  });
  describe('cube()', () => {
    it('should cube a number', () => {
      const expected = 27;
      const actual = helpers.cube(3);
      expect(actual).toBe(expected);
    });
  });
  describe('raiseToPower()', () => {
    it('should raise a number to the power of 2nd number', () => {
      const expected = 1000;
      const actual = helpers.raiseToPower(10, 3);
      expect(actual).toBe(expected);
    });
  });
  describe('roundNumber()', () => {
    it('should round a number to closest integer', () => {
      const expected = 10;
      const actual = helpers.roundNumber(9.5);
      expect(actual).toBe(expected);
    });
  });
  describe('roundUp()', () => {
    it('should round a number up to closest integer', () => {
      const expected = 20;
      const actual = helpers.roundUp(19.3);
      expect(actual).toBe(expected);
    });
  });
  describe('addExclamationPoint()', () => {
    it('should add an exclaimation point to the end of a string', () => {
      const expected = 'spikeball!';
      const actual = helpers.addExclamationPoint('spikeball');
      expect(actual).toBe(expected);
    });
  });
  describe('combineNames()', () => {
    it('should combine the first and last name', () => {
      const expected = 'Kevin Sooter';
      const actual = helpers.combineNames('Kevin', 'Sooter');
      expect(actual).toBe(expected);
    });
  });
  describe('getGreeting()', () => {
    it('should greet the name', () => {
      const expected = 'Hello Kevin Sooter!';
      const actual = helpers.getGreeting('Kevin Sooter');
      expect(actual).toBe(expected);
    });
  });
  describe('getRectangleArea()', () => {
    it('should get area given the length and width', () => {
      const expected = 120;
      const actual = helpers.getRectangleArea(12, 10);
      expect(actual).toBe(expected);
    });
  });
  describe('getTriangleArea()', () => {
    it('should get area given the base and height', () => {
      const expected = 50;
      const actual = helpers.getTriangleArea(10, 10);
      expect(actual).toBe(expected);
    });
  });
  describe('getCircleArea()', () => {
    it('should get area given the base and height', () => {
      const expected = 5 ** 2 * Math.PI;
      const actual = helpers.getCircleArea(5);
      expect(actual).toBe(expected);
    });
  });
  describe('getRectangularPrismVolume()', () => {
    it('should get area given the length, width, and height', () => {
      const expected = 1000;
      const actual = helpers.getRectangularPrismVolume(10, 10, 10);
      expect(actual).toBe(expected);
    });
  });
});
