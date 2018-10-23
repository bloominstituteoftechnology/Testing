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
      expect(helpers.lessThanNinety(10)).toBeTruthy();
    });

    it('checks to see if the number is higher than 90 is false', () => {
      expect(helpers.lessThanNinety(100)).toBeFalsy();
      expect(helpers.lessThanNinety(110)).toBeFalsy();
    });

    it('checks to see if the number is greater than 50 is true', () => {
      expect(helpers.greaterThanFifty(70)).toBeTruthy();
      expect(helpers.greaterThanFifty(100)).toBeTruthy();
    });

    it('checks to see if the number is less than 50 is false', () => {
      expect(helpers.greaterThanFifty(40)).toBeFalsy();
      expect(helpers.greaterThanFifty(22)).toBeFalsy();
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

    it('if parameters are not numbers or a number is missing return null', () => {
      expect(helpers.add(2, '5')).toBeNull();
      expect(helpers.add(2)).toBeNull();
      expect(helpers.subtract(2, [6])).toBeNull();
      expect(helpers.subtract()).toBeNull();
      expect(helpers.multiply([], 2)).toBeNull();
      expect(helpers.divide([6], [8])).toBeNull();
      expect(helpers.divide(2)).toBeNull();
      expect(helpers.divide()).toBeNull();
      expect(helpers.getRemainder(2, '5')).toBeNull();
      expect(helpers.getRemainder([4], 8)).toBeNull();
    });
  });

  describe('checks even numbers', () => {
    it('true for even numbers', () => {
      expect(helpers.isEven(6)).toBeTruthy();
      expect(helpers.isEven(20)).toBeTruthy();
    });

    it('false for odd numbers', () => {
      expect(helpers.isEven(5)).toBeFalsy();
      expect(helpers.isEven(11)).toBeFalsy();
    });
  });

  describe('checks odd numbers', () => {
    it('true for odd numbers', () => {
      expect(helpers.isOdd(3)).toBeTruthy();
      expect(helpers.isOdd(19)).toBeTruthy();
    });

    it('false for even numbers', () => {
      expect(helpers.isOdd(8)).toBeFalsy();
      expect(helpers.isOdd(12)).toBeFalsy();
    });
  });

  describe('finding area', () => {
    it('get the area for a square', () => {
      expect(helpers.square(5)).toBe(25);
    });

    it('get the area of a cube', () => {
      expect(helpers.cube(3)).toBe(27);
    });

    it('check if they are numbers, if not null', () => {
      expect(helpers.square('5')).toBeNull();
      expect(helpers.square([5])).toBeNull();

      expect(helpers.cube('3')).toBeNull();
      expect(helpers.cube({ number: 6 })).toBeNull();
    });
  });

  describe('raise to power', () => {
    it('returns a number for powers', () => {
      expect(helpers.raiseToPower(4, 2)).toBe(16);
      expect(helpers.raiseToPower(2, 2)).toBe(4);
    });

    it('returns null if arguments are not numbers', () => {
      expect(helpers.raiseToPower(4, [2])).toBeNull();
      expect(helpers.raiseToPower('2', '5')).toBeNull();
    });
  });

  describe('rounding number', () => {
    it('checks roundNumber and roundUp', () => {
      expect(helpers.roundNumber(0.5)).toBe(1);

      expect(helpers.roundUp(1.3)).toBe(2);
    });

    it('returns null if argument is not a number', () => {
      expect(helpers.roundNumber([2])).toBeNull();
      expect(helpers.roundNumber('5')).toBeNull();

      expect(helpers.roundUp([2])).toBeNull();
      expect(helpers.roundUp('5')).toBeNull();
    });
  });

  describe('string functions', () => {
    describe('add exvlamation point', () => {
      it('return string with an exclamation point', () => {
        expect(helpers.addExclamationPoint('Hi')).toBe('Hi!');
      });

      it('returns null if not a string', () => {
        expect(helpers.addExclamationPoint(89)).toBeNull();
      });
    });

    describe('combines name', () => {
      it('returns first and last name', () => {
        const first = 'James';
        const last = 'Bond';
        expect(helpers.combineNames(first, last)).toBe('James Bond');
      });

      it('returns null if missing first or last name', () => {
        const first = undefined;
        const last = 'Bond';
        expect(helpers.combineNames(first, last)).toBeNull();
      });

      it('returns null if first or last name is not a string', () => {
        const first = 78;
        const last = 'Bond';
        expect(helpers.combineNames(first, last)).toBeNull();
      });
    });

    describe('get a greeting', () => {
      it('get a greeting', () => {
        const name = 'Bob';
        expect(helpers.getGreeting(name)).toBe('Hello Bob!');
      });

      it('returns null if name is not a string', () => {
        expect(helpers.getGreeting({ name: 'Patrick' })).toBeNull();
      });
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

    it('if argument is not a number or missing an argument returns null', () => {
      expect(helpers.getRectangleArea([3, 4, 3])).toBeNull();
      expect(helpers.getRectangleArea(3)).toBeNull();

      expect(helpers.getTriangleArea(3, {})).toBeNull();
      expect(helpers.getTriangleArea(5)).toBeNull();

      expect(helpers.getCircleArea([3])).toBeNull();
      expect(helpers.getCircleArea('9')).toBeNull();
    });
  });

  describe('rectangular prism volume', () => {
    it('get the volume for a rectangular prism', () => {
      expect(helpers.getRectangularPrismVolume(2, 3, 6)).toBe(36);
    });

    it('if argument is not a number or missing an argument returns null', () => {
      expect(helpers.getRectangularPrismVolume([2, 3, 6])).toBeNull();
      expect(helpers.getRectangularPrismVolume(5, 6, undefined)).toBeNull();
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
