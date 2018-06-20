const helpers = require('./project-1');

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

  describe('areSameLength', () => {
    it('Returns true when given two strings of equal length', () => {
      const actual = helpers.areSameLength('hello', 'world');
      expect(actual).toBeTruthy();
    });

    it('Returns false when given two strings of different lengths', () => {
      const actual = helpers.areSameLength('hey', 'danny');
      expect(actual).toBeFalsy();
    });

    it('Returns false when passing no arguments', () => {
      const actual = helpers.areSameLength();
      expect(actual).toBeFalsy();
    });

    describe('Returns false for any value type other than strings:', () => {
      it('Numbers', () => {
        const actual = helpers.areSameLength(3, 1);
        expect(actual).toBeFalsy();
      });

      it('Undefined', () => {
        const actual = helpers.areSameLength(undefined, undefined);
        expect(actual).toBeFalsy();
      });

      it('Null', () => {
        const actual = helpers.areSameLength(null, null);
        expect(actual).toBeFalsy();
      });
    });
  });

  describe('areEqual', () => {
    it('Returns true when given two identical numbers', () => {
      const actual = helpers.areEqual(33, 33);
      expect(actual).toBeTruthy();
    });

    it('Returns false when given two different numbers', () => {
      const actual = helpers.areEqual(12, 16);
      expect(actual).toBeFalsy();
    });

    it('Returns true when given two identical decimals', () => {
      const actual = helpers.areEqual(2.2, 2.2);
      expect(actual).toBeTruthy();
    });

    it('Returns false when given two different decimals', () => {
      const actual = helpers.areEqual(1.6, 2.56);
      expect(actual).toBeFalsy();
    });

    it('Returns true when given two identical strings', () => {
      const actual = helpers.areEqual('cs10', 'cs10');
      expect(actual).toBeTruthy();
    });

    it('Returns false when given two different strings', () => {
      const actual = helpers.areEqual('Lambda', 'School');
      expect(actual).toBeFalsy();
    });

    it('Returns true when given two identical booleans', () => {
      const actual = helpers.areEqual('true', 'true');
      expect(actual).toBeTruthy();
    });

    it('Returns false when given two different booleans', () => {
      const actual = helpers.areEqual('true', 'false');
      expect(actual).toBeFalsy();
    });

    it('Returns false when given two arrays', () => {
      const actual = helpers.areEqual('true', 'false');
      expect(actual).toBeFalsy();
    });

    it('Returns false when given two objects', () => {
      const actual = helpers.areEqual('true', 'false');
      expect(actual).toBeFalsy();
    });
  });

  describe('lessThanNinety', () => {
    it('Returns true when given a number less than 90', () => {
      const actual = helpers.lessThanNinety(88);
      expect(actual).toBeTruthy();
    });

    it('Returns true when given a numerical string less than 90', () => {
      const actual = helpers.lessThanNinety('88');
      expect(actual).toBeTruthy();
    });

    it('Returns false when given a number greater than 90', () => {
      const actual = helpers.lessThanNinety(101);
      expect(actual).toBeFalsy();
    });

    it('Returns false when given a numerical string greater than 90', () => {
      const actual = helpers.lessThanNinety('101');
      expect(actual).toBeFalsy();
    });

    it('Returns false when given no arguments', () => {
      const actual = helpers.lessThanNinety();
      expect(actual).toBeFalsy();
    });

    it('Returns true when given a boolean', () => {
      const actual = helpers.lessThanNinety(true);
      expect(actual).toBeTruthy();
    });

    it('Returns false when given undefined', () => {
      const actual = helpers.lessThanNinety(undefined);
      expect(actual).toBeFalsy();
    });

    it('Returns false when given null', () => {
      const actual = helpers.lessThanNinety(null);
      expect(actual).toBeFalsy();
    });
  });

  describe('greaterThanFifty', () => {
    it('Returns true when given a number greater than 50', () => {
      const actual = helpers.greaterThanFifty(88);
      expect(actual).toBeTruthy();
    });

    it('Returns true when given a numerical string greater than 50', () => {
      const actual = helpers.greaterThanFifty('88');
      expect(actual).toBeTruthy();
    });

    it('Returns false when given a number less than 50', () => {
      const actual = helpers.greaterThanFifty(0);
      expect(actual).toBeFalsy();
    });

    it('Returns false when given a numerical string less than 50', () => {
      const actual = helpers.greaterThanFifty('0');
      expect(actual).toBeFalsy();
    });

    it('Returns false when given no arguments', () => {
      const actual = helpers.greaterThanFifty();
      expect(actual).toBeFalsy();
    });

    it('Returns false when given a boolean', () => {
      const actual = helpers.greaterThanFifty(true);
      expect(actual).toBeFalsy();
    });

    it('Returns false when given undefined', () => {
      const actual = helpers.greaterThanFifty(undefined);
      expect(actual).toBeFalsy();
    });

    it('Returns false when given null', () => {
      const actual = helpers.greaterThanFifty(null);
      expect(actual).toBeFalsy();
    });
  });

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

  describe('isEven', () => {
    it('Returns true when given an even number', () => {
      const actual = helpers.isEven(2);
      expect(actual).toBeTruthy();
    });

    it('Returns true when given an even number as a string', () => {
      const actual = helpers.isEven('2');
      expect(actual).toBeTruthy();
    });

    it('Returns false when given an odd number', () => {
      const actual = helpers.isEven(3);
      expect(actual).toBeFalsy();
    });

    it('Returns false when given an odd number as a string', () => {
      const actual = helpers.isEven('3');
      expect(actual).toBeFalsy();
    });

    it('Returns true when given false', () => {
      const actual = helpers.isEven(false);
      expect(actual).toBeTruthy();
    });

    it('Returns false when given true', () => {
      const actual = helpers.isEven(true);
      expect(actual).toBeFalsy();
    });

    it('Returns false when given no arguments', () => {
      const actual = helpers.isEven();
      expect(actual).toBeFalsy();
    });

    it('Returns false when given a string', () => {
      const actual = helpers.isEven('hey');
      expect(actual).toBeFalsy();
    });

    it('Returns false when given undefined', () => {
      const actual = helpers.isEven(undefined);
      expect(actual).toBeFalsy();
    });

    it('Returns false when given null', () => {
      const actual = helpers.isEven(null);
      expect(actual).toBeFalsy();
    });
  });

  describe('isOdd', () => {
    it('Returns true when given an odd number', () => {
      const actual = helpers.isOdd(11);
      expect(actual).toBeTruthy();
    });

    it('Returns true when given an odd number as a string', () => {
      const actual = helpers.isOdd('11');
      expect(actual).toBeTruthy();
    });

    it('Returns false when given an even number', () => {
      const actual = helpers.isOdd(16);
      expect(actual).toBeFalsy();
    });

    it('Returns false when given an even number as a string', () => {
      const actual = helpers.isOdd('16');
      expect(actual).toBeFalsy();
    });

    it('Returns false when given false', () => {
      const actual = helpers.isOdd(false);
      expect(actual).toBeFalsy();
    });

    it('Returns true when given true', () => {
      const actual = helpers.isOdd(true);
      expect(actual).toBeTruthy();
    });

    it('Returns false when given no arguments', () => {
      const actual = helpers.isOdd();
      expect(actual).toBeFalsy();
    });

    it('Returns false when given a string', () => {
      const actual = helpers.isOdd('hey');
      expect(actual).toBeFalsy();
    });

    it('Returns false when given undefined', () => {
      const actual = helpers.isOdd(undefined);
      expect(actual).toBeFalsy();
    });

    it('Returns false when given null', () => {
      const actual = helpers.isOdd(null);
      expect(actual).toBeFalsy();
    });
  });

  describe('square', () => {
    it('Return the square when given a number', () => {
      const expected = 9;
      const actual = helpers.square(3);
      expect(actual).toBe(expected);
    });

    it('Return the square when given a numeric string', () => {
      const expected = 100;
      const actual = helpers.square('10');
      expect(actual).toBe(expected);
    });

    it('Returns 0 when given false', () => {
      const expected = 0;
      const actual = helpers.square(false);
      expect(actual).toBe(expected);
    });

    it('Returns 1 when given true', () => {
      const expected = 1;
      const actual = helpers.square(true);
      expect(actual).toBe(expected);
    });

    it('Returns false when called without an argument', () => {
      const actual = helpers.square();
      expect(actual).toBeFalsy();
    });

    it('Returns false when given undefined', () => {
      const actual = helpers.square(undefined);
      expect(actual).toBeFalsy();
    });

    it('Returns false when given null', () => {
      const actual = helpers.square(null);
      expect(actual).toBeFalsy();
    });
  });

  describe('cube', () => {
    it('Return the cube when given a number', () => {
      const expected = 64;
      const actual = helpers.cube(4);
      expect(actual).toBe(expected);
    });

    it('Return the cube when given a numeric string', () => {
      const expected = 27;
      const actual = helpers.cube('3');
      expect(actual).toBe(expected);
    });

    it('Returns 0 when given false', () => {
      const expected = 0;
      const actual = helpers.cube(false);
      expect(actual).toBe(expected);
    });

    it('Returns 1 when given true', () => {
      const expected = 1;
      const actual = helpers.cube(true);
      expect(actual).toBe(expected);
    });

    it('Returns false when called without an argument', () => {
      const actual = helpers.cube();
      expect(actual).toBeFalsy();
    });

    it('Returns false when given undefined', () => {
      const actual = helpers.cube(undefined);
      expect(actual).toBeFalsy();
    });

    it('Returns false when given null', () => {
      const actual = helpers.cube(null);
      expect(actual).toBeFalsy();
    });
  });

  describe('raiseToPower', () => {
    it('Return the value raised to the power of when given a number and an exponent', () => {
      const expected = 16;
      const actual = helpers.raiseToPower(4, 2);
      expect(actual).toBe(expected);
    });

    it('Return the value raised to the power of when given a numerical string and exponent', () => {
      const expected = 16;
      const actual = helpers.raiseToPower('4', '2');
      expect(actual).toBe(expected);
    });

    it('Converts false/true to 0/1 and calculates first arg to the power of the second arg', () => {
      const expected = 1;
      const actual = helpers.raiseToPower(true, true);
      expect(actual).toBe(expected);
    });

    it('Returns false when called without an argument', () => {
      const actual = helpers.raiseToPower();
      expect(actual).toBeFalsy();
    });

    it('Returns false when given undefined', () => {
      const actual = helpers.raiseToPower(undefined);
      expect(actual).toBeFalsy();
    });

    it('Returns false when given null', () => {
      const actual = helpers.raiseToPower(null);
      expect(actual).toBeFalsy();
    });
  });

  describe('roundNumber', () => {
    it('Return the rounded value when given a number', () => {
      const expected = 5;
      const actual = helpers.roundNumber(5.4);
      expect(actual).toBe(expected);
    });

    it('Return the rounded value when given a numerical string', () => {
      const expected = 5;
      const actual = helpers.roundNumber('5.4');
      expect(actual).toBe(expected);
    });

    it('Returns 0 when given false', () => {
      const expected = 0;
      const actual = helpers.roundNumber(false);
      expect(actual).toBe(expected);
    });

    it('Returns 1 when given true', () => {
      const expected = 1;
      const actual = helpers.roundNumber(true);
      expect(actual).toBe(expected);
    });

    it('Returns false when called without an argument', () => {
      const actual = helpers.roundNumber();
      expect(actual).toBeFalsy();
    });

    it('Returns false when given undefined', () => {
      const actual = helpers.roundNumber(undefined);
      expect(actual).toBeFalsy();
    });

    it('Returns false when given null', () => {
      const actual = helpers.roundNumber(null);
      expect(actual).toBeFalsy();
    });
  });

  describe('roundUp', () => {
    it('Return the rounded up value when given a number', () => {
      const expected = 10;
      const actual = helpers.roundUp(9.8);
      expect(actual).toBe(expected);
    });

    it('Return the rounded up value when given a numerical string', () => {
      const expected = 10;
      const actual = helpers.roundUp('9.8');
      expect(actual).toBe(expected);
    });

    it('Returns 0 when given false', () => {
      const expected = 0;
      const actual = helpers.roundUp(false);
      expect(actual).toBe(expected);
    });

    it('Returns 1 when given true', () => {
      const expected = 1;
      const actual = helpers.roundUp(true);
      expect(actual).toBe(expected);
    });

    it('Returns false when called without an argument', () => {
      const actual = helpers.roundUp();
      expect(actual).toBeFalsy();
    });

    it('Returns false when given undefined', () => {
      const actual = helpers.roundUp(undefined);
      expect(actual).toBeFalsy();
    });

    it('Returns false when given null', () => {
      const actual = helpers.roundUp(null);
      expect(actual).toBeFalsy();
    });
  });

  describe('addExclamationPoint', () => {
    it('Returns string with exclamation point on end when given a string', () => {
      const expected = /Hey you!$/;
      const actual = helpers.addExclamationPoint('Hey you');
      expect(actual).toMatch(expected);
    });

    it('Returns false when passing no argument', () => {
      const actual = helpers.addExclamationPoint();
      expect(actual).toBeFalsy();
    });

    describe('Returns false for any value type other than strings:', () => {
      it('Numbers', () => {
        const actual = helpers.addExclamationPoint(3, 1);
        expect(actual).toBeFalsy();
      });

      it('Undefined', () => {
        const actual = helpers.addExclamationPoint(undefined, undefined);
        expect(actual).toBeFalsy();
      });

      it('Null', () => {
        const actual = helpers.addExclamationPoint(null, null);
        expect(actual).toBeFalsy();
      });
    });
  });

  describe('combineNames', () => {
    it('Returns concatenation when given two strings', () => {
      const expected = /Danny Vail/;
      const actual = helpers.combineNames('Danny', 'Vail');
      expect(actual).toMatch(expected);
    });

    it('Returns false when passing no arguments', () => {
      const actual = helpers.combineNames();
      expect(actual).toBeFalsy();
    });

    describe('Returns false for any value type other than strings:', () => {
      it('Numbers', () => {
        const actual = helpers.combineNames(3, 1);
        expect(actual).toBeFalsy();
      });

      it('Undefined', () => {
        const actual = helpers.combineNames(undefined, undefined);
        expect(actual).toBeFalsy();
      });

      it('Null', () => {
        const actual = helpers.combineNames(null, null);
        expect(actual).toBeFalsy();
      });
    });
  });

  describe('getGreeting', () => {
    it('Returns greeting when given a string', () => {
      const expected = /Hello Danny/;
      const actual = helpers.getGreeting('Danny');
      expect(actual).toMatch(expected);
    });

    it('Returns false when passing no argument', () => {
      const actual = helpers.getGreeting();
      expect(actual).toBeFalsy();
    });

    describe('Returns false for any value type other than strings:', () => {
      it('Numbers', () => {
        const actual = helpers.getGreeting(3, 1);
        expect(actual).toBeFalsy();
      });

      it('Undefined', () => {
        const actual = helpers.getGreeting(undefined, undefined);
        expect(actual).toBeFalsy();
      });

      it('Null', () => {
        const actual = helpers.getGreeting(null, null);
        expect(actual).toBeFalsy();
      });
    });
  });

  describe('getRectangleArea', () => {
    it('Return the area when given length and height', () => {
      const expected = 64;
      const actual = helpers.getRectangleArea(8, 8);
      expect(actual).toBe(expected);
    });

    it('Return the area when given length and height as strings', () => {
      const expected = 6;
      const actual = helpers.getRectangleArea('3', '2');
      expect(actual).toBe(expected);
    });

    it('Converts true and false to 1 and 0 and calculates the area', () => {
      const expected = 1;
      const actual = helpers.getRectangleArea(true, true);
      expect(actual).toBe(expected);
    });

    it('Returns false when called without an argument', () => {
      const actual = helpers.getRectangleArea();
      expect(actual).toBeFalsy();
    });

    it('Returns false when given undefined', () => {
      const actual = helpers.getRectangleArea(undefined);
      expect(actual).toBeFalsy();
    });

    it('Returns false when given null', () => {
      const actual = helpers.getRectangleArea(null);
      expect(actual).toBeFalsy();
    });
  });

  describe('getTriangleArea', () => {
    it("Return the triangle's area when given base and height", () => {
      const expected = 6;
      const actual = helpers.getTriangleArea(3, 4);
      expect(actual).toBe(expected);
    });

    it("Return the triangle's area when given base and height as strings", () => {
      const expected = 24;
      const actual = helpers.getTriangleArea('6', '8');
      expect(actual).toBe(expected);
    });

    it("Converts true and false to 1 and 0 and calculates the triangle's area", () => {
      const expected = 0.5;
      const actual = helpers.getTriangleArea(true, true);
      expect(actual).toBe(expected);
    });

    it('Returns false when called without an argument', () => {
      const actual = helpers.getTriangleArea();
      expect(actual).toBeFalsy();
    });

    it('Returns false when given undefined', () => {
      const actual = helpers.getTriangleArea(undefined);
      expect(actual).toBeFalsy();
    });

    it('Returns false when given null', () => {
      const actual = helpers.getTriangleArea(null);
      expect(actual).toBeFalsy();
    });
  });

  describe('getCircleArea', () => {
    it("Return the circle's area when given the radius", () => {
      const expected = 28.27;
      const actual = helpers.getCircleArea(3);
      expect(actual).toBeCloseTo(expected);
    });

    it("Return the circle's area when given the radius", () => {
      const expected = 452.39;
      const actual = helpers.getCircleArea('12');
      expect(actual).toBeCloseTo(expected);
    });

    it('Returns 3.14 when given true', () => {
      const expected = 3.14;
      const actual = helpers.getCircleArea(true);
      expect(actual).toBeCloseTo(expected);
    });

    it('Returns 0 when given false', () => {
      const expected = 0;
      const actual = helpers.getCircleArea(false);
      expect(actual).toBe(expected);
    });

    it('Returns false when called without an argument', () => {
      const actual = helpers.getCircleArea();
      expect(actual).toBeFalsy();
    });

    it('Returns false when given undefined', () => {
      const actual = helpers.getCircleArea(undefined);
      expect(actual).toBeFalsy();
    });

    it('Returns false when given null', () => {
      const actual = helpers.getCircleArea(null);
      expect(actual).toBeFalsy();
    });
  });

  describe('getRectangularPrismVolume', () => {
    it('Returns the volume when given a length, width, and height', () => {
      const expected = 6;
      const actual = helpers.getRectangularPrismVolume(1, 2, 3);
      expect(actual).toBe(expected);
    });

    it('Returns the volume when given a length, width, and height as strings', () => {
      const expected = 480;
      const actual = helpers.getRectangularPrismVolume('6', '8', '10');
      expect(actual).toBe(expected);
    });

    it('Converts true and false to 1 and 0 and calculates the volume', () => {
      const expected = 1;
      const actual = helpers.getRectangularPrismVolume(true, true, true);
      expect(actual).toBe(expected);
    });

    it('Returns false when called without an argument', () => {
      const actual = helpers.getRectangularPrismVolume();
      expect(actual).toBeFalsy();
    });

    it('Returns false when given undefined', () => {
      const actual = helpers.getRectangularPrismVolume(undefined);
      expect(actual).toBeFalsy();
    });

    it('Returns false when given null', () => {
      const actual = helpers.getRectangularPrismVolume(null);
      expect(actual).toBeFalsy();
    });
  });
});
