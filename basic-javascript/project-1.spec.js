const helpers = require('./project-1');

// Arrange, Act, Assert

// Numbers, Strings, Array, Boolean, Object, NaN

describe('Project 1', () => {
  describe('multiplyByTen', () => {
    it('Returns number multiplied by 10 when given a numeric value', () => {
      const expected = 30;
      const actual = helpers.multiplyByTen(3);
      expect(actual).toBe(expected);
    });

    it('Returns number multiplied by 10 when given a number as a string', () => {
      const expected = 50;
      const actual = helpers.multiplyByTen('5');
      expect(actual).toBe(expected);
    });

    it('Returns 0 when given an empty string', () => {
      const expected = 0;
      const actual = helpers.multiplyByTen('');
      expect(actual).toBe(expected);
    });

    it('Returns NaN when given a non-numeric string', () => {
      const expected = NaN;
      const actual = helpers.multiplyByTen('Hello');
      expect(actual).toBe(expected);
    });

    it('Returns NaN when called without an argument', () => {
      const expected = NaN;
      const actual = helpers.multiplyByTen();
      expect(actual).toBe(expected);
    });

    it('Returns 10 when given true', () => {
      const expected = 10;
      const actual = helpers.multiplyByTen(true);
      expect(actual).toBe(expected);
    });

    it('Returns 0 when given false', () => {
      const expected = 0;
      const actual = helpers.multiplyByTen(false);
      expect(actual).toBe(expected);
    });

    it('Returns NaN when given an array of values', () => {
      const expected = NaN;
      const actual = helpers.multiplyByTen([3, 2]);
      expect(actual).toBe(expected);
    });

    it('Returns NaN when given undefined', () => {
      const expected = NaN;
      const actual = helpers.multiplyByTen(undefined);
      expect(actual).toBe(expected);
    });

    it('Returns 0 when given null', () => {
      const expected = 0;
      const actual = helpers.multiplyByTen(null);
      expect(actual).toBe(expected);
    });
  });

  // describe('subtractFive', () => {});

  // describe('areSameLength', () => {});

  // describe('areEqual', () => {});

  // describe('lessThanNinety', () => {});

  // describe('greaterThanFifty', () => {});

  // describe('add', () => {});

  // describe('subtract', () => {});

  // describe('divide', () => {});

  // describe('multiply', () => {});

  // describe('getRemainder', () => {});

  // describe('isEven', () => {});

  // describe('isOdd', () => {});

  // describe('square', () => {});

  // describe('cube', () => {});

  // describe('raiseToPower', () => {});

  // describe('roundNumber', () => {});

  // describe('roundUp', () => {});

  // describe('addExclamationPoint', () => {});

  // describe('combineNames', () => {});

  // describe('getGreeting', () => {});

  // describe('getRectangleArea', () => {});

  // describe('getTriangleArea', () => {});

  // describe('getCircleArea', () => {});

  // describe('getRectangularPrismVolume', () => {});
});