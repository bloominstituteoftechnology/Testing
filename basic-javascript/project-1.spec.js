const helpers = require('./project-1');

// start testing!
describe('project-1.js', () => {
  describe('mutiplyByTen', () => {
    it('should multiply num by 10', () => {
      const expected = 30;
      const actual = helpers.multiplyByTen(3);
      expect(actual).toEqual(expected);
    });
  });

  describe('subtractFive', () => {
    it('should subtract 5 from num', () => {
      const expected = 30;
      const actual = helpers.subtractFive(35);
      expect(actual).toEqual(expected);
    });
  });

  describe('areSameLength', () => {
    it('should return true if strings are equal length', () => {
      const expected = true;
      const actual = helpers.areSameLength('str1', 'abcd');
      expect(actual).toEqual(expected);
    });
    it('should return false if strings are not equal length', () => {
      const expected = false;
      const actual = helpers.areSameLength('not equal', 'longer string');
      expect(actual).toEqual(expected);
    });
  });

  describe('areEqual', () => {
    it('should return true if numbers are equal', () => {
      const expected = true;
      const actual = helpers.areEqual(3, 4 - 1);
      expect(actual).toEqual(expected);
    });
    it('should false if numbers are not equal', () => {
      const expected = false;
      const actual = helpers.areEqual(3, 4);
      expect(actual).toEqual(expected);
    });
  });

  describe('lessThanNinety', () => {
    it('should return true if num is less than 90', () => {
      const expected = true;
      const actual = helpers.lessThanNinety(89);
      expect(actual).toEqual(expected);
    });
    it('should return false if num is less than 90', () => {
      const expected = false;
      const actual = helpers.lessThanNinety(91);
      expect(actual).toEqual(expected);
    });
  });

  describe('greaterThanFifty', () => {
    it('should return true if num is less than 50', () => {
      const expected = false;
      const actual = helpers.greaterThanFifty(49);
      expect(actual).toEqual(expected);
    });
    it('should return true if num is greater than 50', () => {
      const expected = true;
      const actual = helpers.greaterThanFifty(51);
      expect(actual).toEqual(expected);
    });
  });

  describe('add', () => {
    it('should add 2 numbers together', () => {
      const expected = 9;
      const actual = helpers.add(6, 3);
      expect(actual).toEqual(expected);
    });
  });

  describe('subtract', () => {
    it('should subtract second number from first number', () => {
      const expected = 9;
      const actual = helpers.subtract(18, 9);
      expect(actual).toEqual(expected);
    });
  });

  describe('divide', () => {
    it('should divide first number by second number', () => {
      const expected = 9;
      const actual = helpers.divide(90, 10);
      expect(actual).toEqual(expected);
    });
  });

  describe('multiply', () => {
    it('should multiply 2 numbers', () => {
      const expected = 22;
      const actual = helpers.multiply(11, 2);
      expect(actual).toEqual(expected);
    });
  });

  describe('getRemainder', () => {
    it('should return remainder of quotient', () => {
      const expected = 9;
      const actual = helpers.getRemainder(99, 10);
      expect(actual).toEqual(expected);
    });
  });

  describe('isEven', () => {
    it('should return true if num is even', () => {
      const expected = true;
      const actual = helpers.isEven(8);
      expect(actual).toEqual(expected);
    });
    it('should return false if num is odd', () => {
      const expected = false;
      const actual = helpers.isEven(51);
      expect(actual).toEqual(expected);
    });
  });

  describe('isOdd', () => {
    it('should return true if num is odd', () => {
      const expected = true;
      const actual = helpers.isOdd(9);
      expect(actual).toEqual(expected);
    });
    it('should return false if num is even', () => {
      const expected = false;
      const actual = helpers.isOdd(50);
      expect(actual).toEqual(expected);
    });
  });

  describe('square', () => {
    it('should return num squared', () => {
      const expected = 64;
      const actual = helpers.square(8);
      expect(actual).toEqual(expected);
    });
  });

  describe('cube', () => {
    it('should return num cubed', () => {
      const expected = 64;
      const actual = helpers.cube(4);
      expect(actual).toEqual(expected);
    });
  });

  describe('raiseToPower', () => {
    it('should return number raised to nth power', () => {
      const expected = 4096;
      const actual = helpers.raiseToPower(4, 6);
      expect(actual).toEqual(expected);
    });
  });

  describe('roundNumber', () => {
    it('should round number to nearest integer', () => {
      const expected = 4;
      const actual = helpers.roundNumber(3.6);
      expect(actual).toEqual(expected);
    });
  });

  describe('roundUp', () => {
    it('should round number up', () => {
      const expected = 4;
      const actual = helpers.roundUp(3.2);
      expect(actual).toEqual(expected);
    });
  });

  describe('addExclamationPoint', () => {
    it('should add exclamation point to string', () => {
      const expected = 'Hello!';
      const actual = helpers.addExclamationPoint('Hello');
      expect(actual).toEqual(expected);
    });
  });

  describe('combineNames', () => {
    it('should return first and last name in one string', () => {
      const expected = 'Caleb Kirkwood';
      const actual = helpers.combineNames('Caleb', 'Kirkwood');
      expect(actual).toEqual(expected);
    });
  });

  describe('getGreeting', () => {
    it('should return say hello to name entered', () => {
      const expected = 'Hello Caleb!';
      const actual = helpers.getGreeting('Caleb');
      expect(actual).toEqual(expected);
    });
  });

  describe('getRectangleArea', () => {
    it('should return area of rectangle', () => {
      const expected = 40;
      const actual = helpers.getRectangleArea(4, 10);
      expect(actual).toEqual(expected);
    });
  });

  describe('getTriangleArea', () => {
    it('should return area of triangle', () => {
      const expected = 40;
      const actual = helpers.getTriangleArea(4, 20);
      expect(actual).toEqual(expected);
    });
  });

  describe('getCircleArea', () => {
    it('should return area of circle', () => {
      const expected = 28.274333882308138;
      const actual = helpers.getCircleArea(3);
      expect(actual).toEqual(expected);
    });
  });

  describe('getRectangularPrismVolume', () => {
    it('should return area of triangle', () => {
      const expected = 480;
      const actual = helpers.getRectangularPrismVolume(4, 20, 6);
      expect(actual).toEqual(expected);
    });
  });
});
