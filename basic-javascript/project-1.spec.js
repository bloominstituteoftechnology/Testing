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

    it('Returns false when called without an argument', () => {
      const actual = helpers.multiplyByTen();
      expect(actual).toBeFalsy();
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

    describe('Returns false when given a non-numeric value:', () => {
      it('A string', () => {
        const actual = helpers.multiplyByTen('Hello');
        expect(actual).toBeFalsy();
      });

      it('An array of values', () => {
        const actual = helpers.multiplyByTen([3, 2]);
        expect(actual).toBeFalsy();
      });

      it('null', () => {
        const actual = helpers.multiplyByTen(null);
        expect(actual).toBeFalsy();
      });

      it('undefined', () => {
        const actual = helpers.multiplyByTen(undefined);
        expect(actual).toBeFalsy();
      });
    });
  });

  describe('subtractFive', () => {
    it('Returns number minus 5 when given a numeric value', () => {
      const expected = 0;
      const actual = helpers.subtractFive(5);
      expect(actual).toBe(expected);
    });

    it('Returns number minus 5 when given a numeric string', () => {
      const expected = 0;
      const actual = helpers.subtractFive('5');
      expect(actual).toBe(expected);
    });

    it('Returns false when called without an argument', () => {
      const actual = helpers.subtractFive();
      expect(actual).toBeFalsy();
    });

    it('Returns -4 when given true', () => {
      const expected = -4;
      const actual = helpers.subtractFive(true);
      expect(actual).toBe(expected);
    });

    it('Returns -5 when given false', () => {
      const expected = -5;
      const actual = helpers.subtractFive(false);
      expect(actual).toBe(expected);
    });

    describe('Returns false when given a non-numeric value:', () => {
      it('A string', () => {
        const actual = helpers.subtractFive('Hello');
        expect(actual).toBeFalsy();
      });

      it('An array of values', () => {
        const expected = false;
        const actual = helpers.subtractFive([3, 2]);
        expect(actual).toBeFalsy();
      });

      it('null', () => {
        const expected = false;
        const actual = helpers.subtractFive(null);
        expect(actual).toBeFalsy();
      });

      it('undefined', () => {
        const expected = false;
        const actual = helpers.subtractFive(undefined);
        expect(actual).toBeFalsy();
      });
    });
  });

  // describe('areSameLength', () => {});

  // describe('areEqual', () => {});

  // describe('lessThanNinety', () => {});

  // describe('greaterThanFifty', () => {});

  describe('add', () => {
    it('Return the sum of the arguments when given two numbers', () => {
      const expected = 8;
      const actual = helpers.add(4, 4);
      expect(actual).toBe(expected);
    });

    it('Return the concatenation of the arguments when given two numeric strings', () => {
      const expected = '52';
      const actual = helpers.add('5', '2');
      expect(actual).toBe(expected);
    });

    it('Converts true and false to 1 and 0 and calculates the sum', () => {
      const expected = 1;
      const actual = helpers.add(true, false);
      expect(actual).toBe(expected);
    });

    it('Returns false when called without an argument', () => {
      const actual = helpers.add();
      expect(actual).toBeFalsy();
    });

    it('Returns false when given undefined', () => {
      const actual = helpers.add(undefined);
      expect(actual).toBeFalsy();
    });

    it('Returns false when given null', () => {
      const actual = helpers.add(null);
      expect(actual).toBeFalsy();
    });
  });

  describe('subtract', () => {
    it('Return the difference of the arguments when given two numbers', () => {
      const expected = 4;
      const actual = helpers.subtract(10, 6);
      expect(actual).toBe(expected);
    });

    it('Return the difference of the arguments when given two numeric strings', () => {
      const expected = 3;
      const actual = helpers.subtract('5', '2');
      expect(actual).toBe(expected);
    });

    it('Converts true and false to 1 and 0 and calculates the difference', () => {
      const expected = 1;
      const actual = helpers.subtract(true, false);
      expect(actual).toBe(expected);
    });

    it('Returns false when called without an argument', () => {
      const actual = helpers.subtract();
      expect(actual).toBeFalsy();
    });

    it('Returns false when given undefined', () => {
      const actual = helpers.subtract(undefined);
      expect(actual).toBeFalsy();
    });

    it('Returns false when given null', () => {
      const actual = helpers.subtract(null);
      expect(actual).toBeFalsy();
    });
  });

  describe('divide', () => {
    it('Return the quotient of the arguments when given two numbers', () => {
      const expected = 6;
      const actual = helpers.divide(36, 6);
      expect(actual).toBe(expected);
    });

    it('Return the quotient of the arguments when given two numeric strings', () => {
      const expected = 5;
      const actual = helpers.divide('50', '10');
      expect(actual).toBe(expected);
    });

    it('Converts true and false to 1 and 0 and calculates the quotient', () => {
      const expected = 1;
      const actual = helpers.divide(true, true);
      expect(actual).toBe(expected);
    });

    it('Returns false when called without an argument', () => {
      const actual = helpers.divide();
      expect(actual).toBeFalsy();
    });

    it('Returns false when given undefined', () => {
      const actual = helpers.divide(undefined);
      expect(actual).toBeFalsy();
    });

    it('Returns false when given null', () => {
      const actual = helpers.divide(null);
      expect(actual).toBeFalsy();
    });
  });

  describe('multiply', () => {
    it('Return the product of the arguments when given two numbers', () => {
      const expected = 50;
      const actual = helpers.multiply(10, 5);
      expect(actual).toBe(expected);
    });

    it('Return the product of the arguments when given two numeric strings', () => {
      const expected = 16;
      const actual = helpers.multiply('2', '8');
      expect(actual).toBe(expected);
    });

    it('Converts true and false to 1 and 0 and calculates the product', () => {
      const expected = 0;
      const actual = helpers.multiply(false, true);
      expect(actual).toBe(expected);
    });

    it('Returns false when called without an argument', () => {
      const actual = helpers.multiply();
      expect(actual).toBeFalsy();
    });

    it('Returns false when given undefined', () => {
      const actual = helpers.multiply(undefined);
      expect(actual).toBeFalsy();
    });

    it('Returns false when given null', () => {
      const actual = helpers.multiply(null);
      expect(actual).toBeFalsy();
    });
  });

  describe('getRemainder', () => {
    it('Return the remainder of the arguments when given two numbers', () => {
      const expected = 0;
      const actual = helpers.getRemainder(10, 5);
      expect(actual).toBe(expected);
    });

    it('Return the remainder of the arguments when given two numeric strings', () => {
      const expected = 1;
      const actual = helpers.getRemainder('11', '2');
      expect(actual).toBe(expected);
    });

    it('Converts true and false to 1 and 0 and calculates the remainder', () => {
      const expected = 0;
      const actual = helpers.getRemainder(true, true);
      expect(actual).toBe(expected);
    });

    it('Returns false when called without an argument', () => {
      const actual = helpers.getRemainder();
      expect(actual).toBeFalsy();
    });

    it('Returns false when given undefined', () => {
      const actual = helpers.getRemainder(undefined);
      expect(actual).toBeFalsy();
    });

    it('Returns false when given null', () => {
      const actual = helpers.getRemainder(null);
      expect(actual).toBeFalsy();
    });
  });

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
