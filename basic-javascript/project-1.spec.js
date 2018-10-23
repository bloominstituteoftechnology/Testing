const helpers = require('./project-1');

// start testing!

describe.skip('project-1.js', () => {
  describe('jest', () => {
    test('should run tests', () => {
      // test all the things
    });

    it('should run tests using it() in addition to test()', () => {
      // Arrange : setup the world
      // Act : execute the code you're testing
      // Assert : check that it works
    });
  });

  describe('multiplyByTen()', () => {
    it('should multiply provided number by ten', () => {
      const expected = 100;

      const actual = helpers.multiplyByTen(10);

      expect(actual).toEqual(expected);
    });

    it('should return 0 when called with no value', () => {
      const product = helpers.multiplyByTen();

      expect(product).toBe(0);
    });

    it('should throw error when called with a string', () => {
      expect(() => {
        helpers.multiplyByTen('five');
      }).toThrow();
    });
  });

  describe('subtractFive()', () => {
    it('should subtract 5 from provided number', () => {
      const expected = 25;

      const actual = helpers.subtractFive(30);

      expect(actual).toEqual(expected);
    });

    it('should return 0 when called with no value', () => {
      const difference = helpers.subtractFive();

      expect(difference).toBe(0);
    });

    it('should throw error when called with a string', () => {
      expect(() => {
        helpers.subtractFive('twenty five');
      }).toThrow();
    });
  });

  describe('areSameLength()', () => {
    it('should show that both strings are the same length', () => {
      const expected = true;

      const actual = helpers.areSameLength('hello', 'there');

      expect(actual).toBe(expected);
    });

    it('should throw error when called with something is not a string', () => {
      expect(() => {
        helpers.areSameLength(365);
      }).toThrow();
    });
  });

  describe('areEqual()', () => {
    it('should check for deep equality', () => {
      const x = { are: 'the same' };
      const y = { are: 'the same' };

      expect(x).toEqual(y);
    });
  });

  describe('lessThanNinety()', () => {
    it('should say true if provided number is less than ninety otherwise it should say false', () => {
      const expected = true;

      const actual = helpers.lessThanNinety(55);

      expect(expected).toBe(actual);
    });

    it('should throw error when called with a string', () => {
      expect(() => {
        helpers.lessThanNinety('fifty five');
      }).toThrow();
    });
  });

  describe('greaterThanFifty()', () => {
    it('should say true if provided number is greater than ninety otherwise it should say false', () => {
      const expected = true;

      const actual = helpers.greaterThanFifty(105);

      expect(expected).toBe(actual);
    });

    it('should throw error when called with a string', () => {
      expect(() => {
        helpers.greaterThanFifty('one hundred five');
      }).toThrow();
    });
  });

  describe('add()', () => {
    it('should add provided numbers', () => {
      const expected = 15;

      const actual = helpers.add(8, 7);

      expect(actual).toEqual(expected);
    });

    it('should return 0 when called with no value', () => {
      const result = helpers.add();

      expect(result).toBe(0);
    });

    it('should throw error when called with a string', () => {
      expect(() => {
        helpers.add('eight', 'seven');
      }).toThrow();
    });
  });

  describe('subtract()', () => {
    it('should subtract provided numbers', () => {
      const expected = 200;

      const actual = helpers.subtract(205, 5);

      expect(actual).toEqual(expected);
    });

    it('should return 0 when called with no value', () => {
      const result = helpers.subtract();

      expect(result).toBe(0);
    });

    it('should throw error when called with a string', () => {
      expect(() => {
        helpers.subtract('two hundred five', 'five');
      }).toThrow();
    });
  });

  describe('divide()', () => {
    it('should divide provided numbers', () => {
      const expected = 5;

      const actual = helpers.divide(10, 2);

      expect(actual).toEqual(expected);
    });

    it('should return 0 when called with no value', () => {
      const result = helpers.divide();

      expect(result).toBe(0);
    });

    it('should throw error when called with a string', () => {
      expect(() => {
        helpers.divide('ten', 'two');
      }).toThrow();
    });
  });

  describe('multiply()', () => {
    it('should multiply provided numbers', () => {
      const expected = 500;

      const actual = helpers.multiply(5, 100);

      expect(actual).toEqual(expected);
    });

    it('should return 0 when called with no value', () => {
      const result = helpers.multiply();

      expect(result).toBe(0);
    });

    it('should throw error when called with a string', () => {
      expect(() => {
        helpers.multiply('five', 'one hundred');
      }).toThrow();
    });
  });

  describe('getRemainder()', () => {
    it('should get the remainder after dividing the provided numbers', () => {
      const expected = 3;

      const actual = helpers.getRemainder(13, 5);

      expect(actual).toEqual(expected);
    });

    it('should return 0 when called with no value', () => {
      const result = helpers.getRemainder();

      expect(result).toBe(0);
    });

    it('should throw error when called with a string', () => {
      expect(() => {
        helpers.getRemainder('thirteen', 'five');
      }).toThrow();
    });
  });

  describe('isEven()', () => {
    it('should say true when the remainder is 0 after dividing the provided numbers', () => {
      const expected = true;

      const actual = helpers.isEven(1000);

      expect(actual).toEqual(expected);
    });

    it('should say false when the remainder is greater than 0 after dividing the provided numbers', () => {
      const expected = false;

      const actual = helpers.isEven(1001);

      expect(actual).toEqual(expected);
    });

    it('should return 0 when called with no value', () => {
      const result = helpers.isEven();

      expect(result).toBe(0);
    });

    it('should throw error when called with a string', () => {
      expect(() => {
        helpers.isEven('one thousand');
      }).toThrow();
    });
  });

  describe('isOdd()', () => {
    it('should say true when the remainder is greater than 0 after dividing the provided numbers', () => {
      const expected = true;

      const actual = helpers.isOdd(153);

      expect(actual).toEqual(expected);
    });

    it('should say false when the remainder is 0 after dividing the provided numbers', () => {
      const expected = false;

      const actual = helpers.isOdd(10);

      expect(actual).toEqual(expected);
    });

    it('should return 0 when called with no value', () => {
      const result = helpers.isOdd();

      expect(result).toBe(0);
    });

    it('should throw error when called with a string', () => {
      expect(() => {
        helpers.isEven('one hundered fifty three');
      }).toThrow();
    });
  });

  describe('square()', () => {
    it('should multiply the provided number by itself', () => {
      const expected = 25;

      const actual = helpers.square(5);

      expect(actual).toEqual(expected);
    });

    it('should return 0 when called with no value', () => {
      const result = helpers.square();

      expect(result).toBe(0);
    });

    it('should throw error when called with a string', () => {
      expect(() => {
        helpers.square('five');
      }).toThrow();
    });
  });

  describe('cube()', () => {
    it('should multiply the provided number by it times itself 3 times', () => {
      const expected = 8;

      const actual = helpers.cube(2);

      expect(actual).toEqual(expected);
    });

    it('should return 0 when called with no value', () => {
      const result = helpers.cube();

      expect(result).toBe(0);
    });

    it('should throw error when called with a string', () => {
      expect(() => {
        helpers.cube('two');
      }).toThrow();
    });
  });

  describe('raiseToPower()', () => {
    it('should raise the first provided number to the power of the second provided number', () => {
      const expected = 64;

      const actual = helpers.raiseToPower(2,6);

      expect(actual).toEqual(expected);
    });
  });

  describe('roundNumber()', () => {
    it('should round the provided number', () => {
      const expected = 77;

      const actual = helpers.roundNumber(77.15266);

      expect(actual).toEqual(expected);
    });
  });

  describe('roundUp()', () => {
    it('should round the provided number up', () => {
      const expected = 44;

      const actual = helpers.roundUp(43.3568);

      expect(actual).toEqual(expected);
    });
  });

  describe('addExclamationPoint()', () => {
    it('should add an exclamation point to the end of the provided string', () => {
      const expected = 'Woohoo!';

      const actual = helpers.addExclamationPoint('Woohoo');

      expect(actual).toBe(expected);
    });
  });

  describe('combineNames()', () => {
    it('should combine firstname and lastname into a string', () => {
      const expected = 'John Smith';

      const actual = helpers.combineNames('John', 'Smith');

      expect(actual).toBe(expected);
    });
  });

  describe('getGreeting()', () => {
    it('should combine Hello and lastname into a string with an exclamation point at the end', () => {
      const expected = 'Hello Dolly!';

      const actual = helpers.getGreeting('Dolly');

      expect(actual).toBe(expected);
    });
  });

  describe('getRectangleArea()', () => {
    it('should multiply length by width to get the area of a rectangle', () => {
      const expected = 72;

      const actual = helpers.getRectangleArea(9, 8);

      expect(actual).toEqual(expected);
    });
  });

  describe('getTriangleArea()', () => {
    it('should multiply 0.5 by base by height to get the area of a triangle', () => {
      const expected = 656;

      const actual = helpers.getTriangleArea(32, 41);

      expect(actual).toEqual(expected);
    });
  });

  describe('getCircleArea()', () => {
    it('should multiply 3.1415 by radius squared to get the area of a circle', () => {
      const expected = 16286.016316209487;

      const actual = helpers.getCircleArea(72);

      expect(actual).toEqual(expected);
    });
  });

  describe('getRectangularPrismVolume()', () => {
    it('should multiply width by height by length to get the volume of a rectangular prism', () => {
      const expected = 396;

      const actual = helpers.getRectangularPrismVolume(3,6,22);

      expect(actual).toEqual(expected);
    });
  });
});

