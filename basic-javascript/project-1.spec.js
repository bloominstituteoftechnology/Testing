const helpers = require('./project-1');

// start testing!

describe('project-1.js', () => {
    describe('multiplyByTen', () => {
        it('should multiply given value by 10', () => {
            const expected = 90;
            const actual = helpers.multiplyByTen(9);
            expect(actual).toEqual(expected);
        });
    });

    describe('subtractFive', () => {
        it('should subtract 5 from given value', () => {
            const expected = 5;
            const actual = helpers.multiplyByTen(10);
            expect(actual).toEqual(expected);
        });
    });

    describe('areSameLength()', () => {
        it('compares if lengths are of equal value', () => {
          const expected = true;
          const actual = helpers.areSameLength('car', 'auto');
          expect(actual).toEqual(expected);
        });
      });

      describe('lessThanNinety()', () => {
        it('checks if value is less than 90', () => {
          const expected = true;
          const actual = helpers.lessThanNinety(45);
          expect(actual).toBe(expected);
        });
      });

      describe('greaterThanFifty()', () => {
        it('checks if value is greater than 50', () => {
          const expected = true;
          const actual = helpers.greaterThanFifty(80);
          expect(actual).toBe(expected);
        });
      });

      describe('add()', () => {
        it('determines the sum of given values', () => {
          const expected = 24;
          const actual = helpers.add(22, 2);
          expect(actual).toBe(expected);
        });
      });

      describe('subtract()', () => {
        it('determines the difference of given values', () => {
          const expected = 5;
          const actual = helpers.subtract(10, 5);
          expect(actual).toBe(expected);
        });
      });

      describe('divide()', () => {
        it('determines the quotient of divinding first value by second', () => {
          const expected = 5;
          const actual = helpers.divide(20, 4);
          expect(actual).toBe(expected);
        });
      });

      describe('multiply()', () => {
        it('determines the product of multiplying first value by second', () => {
          const expected = 81;
          const actual = helpers.multiply(9, 9);
          expect(actual).toBe(expected);
        });
      });

      describe('getRemainder()', () => {
        it('determines remainder after dividing first value by second', () => {
          const expected = 1;
          const actual = helpers.getRemainder(15, 2);
          expect(actual).toBe(expected);
        });
      });

      describe('isEven()', () => {
        it('determines whether value is an even number', () => {
          const expected = true;
          const actual = helpers.isEven(12);
          expect(actual).toBe(expected);
        });
      });

      describe('isOdd()', () => {
        it('determines whether value is an odd number', () => {
          const expected = true;
          const actual = helpers.isOdd(9);
          expect(actual).toBe(expected);
        });
      });

      describe('square()', () => {
        it('determines the square of given value', () => {
          const expected = 100;
          const actual = helpers.square(10);
          expect(actual).toBe(expected);
        });
      });

      describe('cube()', () => {
        it('cubes the given value', () => {
          const expected = 1000;
          const actual = helpers.cube(10);
          expect(actual).toBe(expected);
        });
      });

      describe('raiseToPower()', () => {
        it('raises first value to the power of the second value', () => {
          const expected = 100;
          const actual = helpers.raiseToPower(10, 2);
          expect(actual).toBe(expected);
        });
      });

      describe('roundNumber()', () => {
        it('rounds value to the closest integer', () => {
          const expected = 6;
          const actual = helpers.roundNumber(5.6);
          expect(actual).toBe(expected);
        });
      });
      describe('roundUp()', () => {
        it('rounds value to the next integer', () => {
          const expected = 12;
          const actual = helpers.roundUp(11.1);
          expect(actual).toBe(expected);
        });
      });

      describe('addExclamationPoint()', () => {
        it('adds exclamation (!) mark to the string', () => {
          const expected = 'hockey!';
          const actual = helpers.addExclamationPoint('hockey');
          expect(actual).toBe(expected);
        });
      });

      describe('combineNames()', () => {
        it('combines values into one string of first and last name', () => {
          const expected = 'Kevin Sooter';
          const actual = helpers.combineNames('Arkadiusz', 'Kusiak');
          expect(actual).toBe(expected);
        });
      });

      describe('getGreeting()', () => {
        it('issues a string greeting with name attached', () => {
          const expected = 'Hello Arkadiusz Kusiak!';
          const actual = helpers.getGreeting('Arkadiusz Kusiak');
          expect(actual).toBe(expected);
        });
      });

      describe('getRectangleArea()', () => {
        it('mutiplies values to determine area of rectangle', () => {
          const expected = 20;
          const actual = helpers.getRectangleArea(5, 4);
          expect(actual).toBe(expected);
        });
      });

      describe('getTriangleArea()', () => {
        it('determines the area of a triangle', () => {
          const expected = 8;
          const actual = helpers.getTriangleArea(4, 4);
          expect(actual).toBe(expected);
        });
      });

      describe('getCircleArea()', () => {
        it('determines the area of a square', () => {
          const expected = 153.94;
          const actual = helpers.getCircleArea(7);
          expect(actual).toBe(expected);
        });
      });

      describe('getRectangularPrismVolume()', () => {
        it('determines volumn of a prism', () => {
          const expected = 1000;
          const actual = helpers.getRectangularPrismVolume(10, 10, 10);
          expect(actual).toBe(expected);
        });
      });
});