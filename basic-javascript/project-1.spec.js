const helpers = require('./project-1');

// start testing!

describe ('project-1', () => {
// it ('runs the tests', () => {});
    describe('multiplyByTen', () => {
      it('should return the number multiplied by 10', () => {
        expect(helpers.multiplyByTen(1)).toEqual(10);

      });
    });

		describe('subtractFive', () => {
      it('should return the given number minus 5', () => {
        expect(helpers.subtractFive(5)).toEqual(0);
        expect(helpers.subtractFive(10)).toEqual(5);

      });
    });

    describe('areSameLength', () => {
      it('returns true if lengths are the same', () => {
        expect(helpers.areSameLength(true, false)).toBeTruthy();
      });
    });
     describe('areEqual', () => {
      it('returns true if deeply equal', () => {
        expect(helpers.areEqual(1, 1)).toBeTruthy();
        expect(helpers.areEqual(null, null)).toEqual(true);

      });
    });

    describe('lessThanNinety', () => {
      it('returns true if less than ninety', () => {
        expect(helpers.lessThanNinety(50)).toBeTruthy();
        expect(helpers.lessThanNinety(89)).toBeTruthy();
      });
    });

    describe('greaterThanFifty', () => {
      it('returns true if value is greater than fifty', () => {
        expect(helpers.greaterThanFifty(51)).toBeTruthy();
      });
    });

    describe('add', () => {
      it('returns sum of two numbers', () => {
        expect(helpers.add(100,100)).toEqual(200);

      });
    });

    describe('subtract', () => {
      it('returns difference of two numbers', () => {
        expect(helpers.subtract(100,100)).toEqual(0);
      });
    });

    describe('divide', () => {
      it('returns quotient of two numbers', () => {
        expect(helpers.divide(100,100)).toEqual(1);
      });
    });

    describe('multiply', () => {
      it('returns product of two numbers', () => {
        expect(helpers.multiply(100,100)).toEqual(10000);
      });
    });

    describe('project-1', () => {
    describe('getRemainder', () => {
        it('should return the remainder of two numbers', () => {
            expect(helpers.getRemainder(9, 2)).toBe(1);
        });
    });
});


    describe('isEven', () => {
        it('should return boolean indicates the given number is even', () => {
            expect(helpers.isEven(2)).toBe(true);
            expect(helpers.isEven(3)).toBe(false);
        });
    });


    describe('isOdd', () => {
        it('should return boolean indicate the given number is odd', () => {
            expect(helpers.isOdd(2)).toBe(false);
            expect(helpers.isOdd(3)).toBe(true);
        });
    });



    describe('square', () => {
        it('should return square of the given number', () => {
            expect(helpers.square(5)).toBe(25);
        });
    });



    describe('cube', () => {
        it('should return cube of the given number', () => {
            expect(helpers.cube(4)).toBe(64);
        });
    });



    describe('raiseToPower', () => {
        it('should return the given number powered by the given exponent', () => {
            expect(helpers.raiseToPower(8, 2)).toBe(64);
        });
    });



    describe('roundNumber', () => {
        it('should return the rounded given number', () => {
            expect(helpers.roundNumber(8.4)).toBe(8);
        });
    });


    describe('roundUp', () => {
        it('should return the rounded up given number', () => {
            expect(helpers.roundUp(8.4)).toBe(9);
        });
    });



    describe('addExclamationPoint', () => {
        it('should return the given string followed by an exclamation', () => {
            expect(helpers.addExclamationPoint('hello')).toBe('hello!');
        });
    });


    describe('combineNames', () => {
        it('should return a combined string of the first and second given strings', () => {
            expect(helpers.combineNames('thuy', 'pham')).toBe('thuy pham');
        });
    });


    describe('getGreeting', () => {
        it('should return a greeting includes a name', () => {
            expect(helpers.getGreeting('thuy')).toBe('Hello thuy!');
        });
    });


    describe('getRectangleArea', () => {
        it('should return area of a rectangle by its length and width', () => {
            expect(helpers.getRectangleArea(8, 5)).toBe(40);
        });
    });

    describe('getCircleArea', () => {
        it('should return area of a circle by its radius', () => {
            expect(helpers.getCircleArea(8)).toBeCloseTo(201, 0);
        });
    });

    describe('getRectangularPrismVolume', () => {
        it('should return volume of a rectangle by its length, width and height', () => {
            expect(helpers.getRectangularPrismVolume(10, 5, 2)).toBe(100);
        });
    });

});
