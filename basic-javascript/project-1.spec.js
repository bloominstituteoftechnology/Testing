const helpers = require('./project-1');

// start testing!

describe('project-1.js', () => {
  describe('multiply by ten', () => {
    it('should multiply provided number by ten', () => {
      const expected = 100;

      const actual = helpers.multiplyByTen(10);

      expect(actual).toEqual(expected);
    });
  }); //End of multiply by ten describe

  describe('subtract five', () => {
    it('should subtract 5 with the number recieved', () => {
      expect(helpers.subtractFive(10)).toEqual(5);
      expect(helpers.subtractFive(0)).toEqual(-5);
    });
  }); //End of subtract five describe

  describe('are same length', () => {
    it('check if the strings are the same length either true or false', () => {
      const arr1 = ['1', '2'];
      const arr2 = ['5', '6'];
      const arr3 = ['1'];

      expect(helpers.areSameLength(arr1, arr2)).toBeTruthy();
      expect(helpers.areSameLength(arr1, arr3)).toBeFalsy();
    });

    it('check if the strings are the same either true or false', () => {
      expect(helpers.areEqual(1, 1)).toBeTruthy();
      expect(helpers.areEqual(1, 2)).toBeFalsy();
    });
  });

  describe('values greater or equal to number', () => {
    it('checks to see if the number is below 90 is true', () => {
      expect(helpers.lessThanNinety(70)).toBeTruthy();
      expect(helpers.lessThanNinety(100)).toBeFalsy();
    });

    it('checks to see if the number is greater than 50 is true', () => {
      expect(helpers.greaterThanFifty(70)).toBeTruthy();
      expect(helpers.greaterThanFifty(40)).toBeFalsy();
    });
  });

  describe('add, subtract, divide, multiply, get remainder numbers', () => {
    it('add the numbers and gives an answer', () => {
      expect(helpers.add(1, 5)).toBe(6);
    });

    it('subtract the numbers and give an answer', () => {
      expect(helpers.subtract(5, 1)).toBe(4);
    });

    it('multiply the numbers and give an answer', () => {
      expect(helpers.multiply(1, 5)).toBe(5);
    });

    it('divide the numbers and give an answer', () => {
      expect(helpers.divide(12, 2)).toBe(6);
    });

    it('get remainder and give an answer', () => {
      expect(helpers.getRemainder(10, 2)).toBe(0);
    });
  });

  describe('checks to see even and odd numbers', () => {
    it('true or false for even and odd numbers', () => {
      expect(helpers.isEven(6)).toBeTruthy();
      expect(helpers.isEven(5)).toBeFalsy();
    });

    it('true or false for odd number', () => {
      expect(helpers.isOdd(3)).toBeTruthy();
      expect(helpers.isOdd(6)).toBeFalsy();
    });
  });

  describe('finding area', () => {
    it('get the area for a square', () => {
      expect(helpers.square(5)).toBe(25);
    });

    it('get the area of a cube', () => {
      expect(helpers.cube(3)).toBe(27);
    });
  });

  describe('raise to power', () => {
    it('returns a number for powers', () => {
      expect(helpers.raiseToPower(4, 2)).toBe(16);
    });
  });

  describe('rounding number', () => {
    it('checks roundNumber and roundUp', () => {
      expect(helpers.roundNumber(0.5)).toBe(1);

      expect(helpers.roundUp(1.3)).toBe(2);
    });
  });

  describe('string functions', () => {
    it('add a exclamation point', () => {
      expect(helpers.addExclamationPoint('Hi')).toBe('Hi!');
    });

    it('combines name', () => {
      const first = 'James';
      const last = 'Bond';
      expect(helpers.combineNames(first, last)).toBe('James Bond');
    });

    it('get a greeting', () => {
      const name = 'Bob';

      expect(helpers.getGreeting(name)).toBe('Hello Bob!');
    });
  });

  describe('get area of shapes', () => {
    it('get retangular area', () => {
      expect(helpers.getRectangleArea(2, 5)).toBe(10);
    });

    it('get triangular area', () => {
      expect(helpers.getTriangleArea(5, 4)).toBe(10);
    });

    it('get circular area', () => {
      expect(helpers.getCircleArea(5)).toBeCloseTo(78.5398, 4);
    });
  });

  describe('rectangular prism volume', () => {
    it('get the volume for a rectangular prism', () => {
      expect(helpers.getRectangularPrismVolume(2, 3, 6)).toBe(36);
    });
  });

  describe('tests used on multiple functions', () => {
    it('should return 0 when called with no value', () => {
      expect(helpers.multiplyByTen()).toBe(0);
      expect(helpers.subtractFive()).toBe(0);
    });

    it('should throw error when called with a string', () => {
      expect(() => {
        helpers.multiplyByTen('five');
      }).toThrow();
      expect(() => {
        helpers.subtractFive('five');
      }).toThrow();
    });
  }); //End of multi function testing
}); //End of project-1.js describe
