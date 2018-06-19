const helpers = require('./project-1');

// start testing!

describe('project-1', () => {
    describe('multiplyByTen(num)', () => {
        it('return NaN when given a non numeric value', () => {
            expect(helpers.multiplyByTen(undefined)).toBeNaN();
            expect(helpers.multiplyByTen('ten')).toBeNaN();
            expect(helpers.multiplyByTen(false)).toEqual(0);
            expect(helpers.multiplyByTen(true)).toEqual(10);
        });

        it('should return the given number multiplied by 10', () => {
            // arrange
            const expected = 30;
            // act
            const actual = helpers.multiplyByTen(3)
            // assert 
            expect(actual).toEqual(expected);

            // expect(helpers.multiplyByTen(2)).toBe(20);
        });
    });

    describe('subtractFive(num)', () => {
        it('returns NaN when not given a integer', () => {
            expect(helpers.subtractFive(undefined)).toBeNaN();
            expect(helpers.subtractFive('six')).toBeNaN();
        });

        it('returns the number argument minus 5', () => {
            // arrange
            const expected = 1; 
            // act 
            const actual = helpers.subtractFive(6);
            // assert
            expect(actual).toEqual(expected);
        })
    });

    describe('areSameLength(str1, str2)', () => {
        it('returns true if the two string arguments given are the same length', () => {
            expect(helpers.areSameLength('Vamos', 'Argentina')).toBeFalsy(); 
            expect(helpers.areSameLength('cat', 'dog')).toBeTruthy();
        });
    });

    describe('areEqual(x, y)', () => {
        it('returns true if both arguments give are strictly equal', () => {
            expect(helpers.areEqual(3, 9)).toBe(false);
            expect(helpers.areEqual(33, 33)).toBe(true);
            expect(helpers.areEqual('test', 'test')).toBe(true);
        });
    });

    describe('lessThanNinety(num)', () => {
        it('should return true if argument is less than ninety', () => {
            expect(helpers.lessThanNinety(333)).toBe(false);
            expect(helpers.lessThanNinety(9)).toBe(true);
            expect(helpers.lessThanNinety(90)).toBe(false);
        });
    });

    describe('greaterThanFifty(num)', () => {
        it('should return true if argument is greater than fifty', () => {
            expect(helpers.greaterThanFifty(50)).toBe(false);
            expect(helpers.greaterThanFifty(100)).toBe(true);
            expect(helpers.greaterThanFifty(33)).toBe(false);
        });
    });

    describe('add(x, y)', () => {
        it('should return the sum of the two arguments', () => {
          expect(helpers.add(5, 5)).toBe(10);
          expect(helpers.add(-1, 5)).toBe(4);
        });
      });
    
      describe('subtract(x, y)', () => {
        it('should return the difference of the two arguments', () => {
          expect(helpers.subtract(5, 5)).toBe(0);
          expect(helpers.subtract(-1, 5)).toBe(-6);
          expect(helpers.subtract(5, -5)).toBe(10);
          expect(helpers.subtract(0, 0)).toBe(0);
        });
      });
    
      describe('divide(x, y)', () => {
        it('should return the quotient of the two arguments', () => {
          expect(helpers.divide(5, 5)).toBe(1);
          expect(helpers.divide(10, 5)).toBe(2);
          expect(helpers.divide(11, 2)).toBe(5.5);
        });
      });
    
      describe('multiply(x, y)', () => {
        it('should return the product of the two arguments', () => {
          expect(helpers.multiply(5, 5)).toBe(25);
          expect(helpers.multiply(10, -5)).toBe(-50);
          expect(helpers.multiply(11, 0)).toBe(0);
        });
      });
    
      describe('getRemainder(x, y)', () => {
        it('should return the division remainder of the two arguments', () => {
          expect(helpers.getRemainder(5, 5)).toBe(0);
          expect(helpers.getRemainder(10, 5)).toBe(0);
          expect(helpers.getRemainder(11, 2)).toBe(1);
        });
      });
    
      describe('isEven(num)', () => {
        it('should return the bool true if the argument is even, false otherwise', () => {
          expect(helpers.isEven(6)).toBe(true);
          expect(helpers.isEven(7)).toBe(false);
          expect(helpers.isEven(0)).toBe(true);
        });
      });
    
      describe('isOdd(num)', () => {
        it('should return the bool true if the argument is odd, false otherwise', () => {
          expect(helpers.isOdd(6)).toBe(false);
          expect(helpers.isOdd(7)).toBe(true);
          expect(helpers.isOdd(0)).toBe(false);
        });
      });
    
      describe('square(num)', () => {
        it('should return the argument after squaring it', () => {
          expect(helpers.square(6)).toBe(36);
          expect(helpers.square(7)).toBe(49);
          expect(helpers.square(0)).toBe(0);
          expect(helpers.square(-5)).toBe(25);
        });
      });
    
      describe('cube(num)', () => {
        it('should return the argument after cubing it', () => {
          expect(helpers.cube(3)).toBe(27);
          expect(helpers.cube(0)).toBe(0);
          expect(helpers.cube(-5)).toBe(-125);
        });
      });
    
      describe('raiseToPower(num, exponent)', () => {
        it('should return the argument after raising it to the exponent\'s power', () => {
          expect(helpers.raiseToPower(2, 2)).toBe(4);
          expect(helpers.raiseToPower(2, 3)).toBe(8);
          expect(helpers.raiseToPower(0, 5)).toBe(0);
          expect(helpers.raiseToPower(10, 1)).toBe(10);
        });
      });
    
      describe('roundNumber(num)', () => {
        it('should return the argument after rounding it', () => {
          expect(helpers.roundNumber(1.5)).toBe(2);
          expect(helpers.roundNumber(2)).toBe(2);
          expect(helpers.roundNumber(0.1)).toBe(0);
        });
      });
    
      describe('roundUp(num)', () => {
        it('should return the argument after rounding it up', () => {
          expect(helpers.roundUp(1.5)).toBe(2);
          expect(helpers.roundUp(2)).toBe(2);
          expect(helpers.roundUp(0.1)).toBe(1);
        });
      });
    
      describe('addExclamationPoint(str)', () => {
        it('should add an exclamation point to the end of the string', () => {
          expect(helpers.addExclamationPoint('hello world')).toBe('hello world!');
          expect(helpers.addExclamationPoint('LambdaSchool')).toBe('LambdaSchool!');
        });
      });
    
      describe('combineNames(firstName, lastName)', () => {
        it('should return the two strings combined into one with a space separating them', () => {
          expect(helpers.combineNames('hello', 'world')).toBe('hello world');
          expect(helpers.combineNames('Lambda', 'School')).toBe('Lambda School');
        });
      });
    
      describe('getGreeting(name)', () => {
        it('should return the string \'Hello {name}!\'', () => {
          expect(helpers.getGreeting('Ben')).toBe('Hello Ben!');
          expect(helpers.getGreeting('LambdaSchool')).toBe('Hello LambdaSchool!');
        });
      });
    
      describe('getRectangleArea(length, width)', () => {
        it('should return the correct area', () => {
          expect(helpers.getRectangleArea(2, 2)).toBe(4);
          expect(helpers.getRectangleArea(3, 6)).toBe(18);
          expect(helpers.getRectangleArea(0, 2)).toBe(0);
        });
      });
    
      describe('getTriangleArea(base, height)', () => {
        it('should return the correct area', () => {
          expect(helpers.getTriangleArea(2, 2)).toBe(2);
          expect(helpers.getTriangleArea(0, 2)).toBe(0);
        });
      });
    
      describe('getCircleArea(radius)', () => {
        it('should return the correct area', () => {
          let radius = 6; 
          let area = radius * radius * Math.PI;
          expect(helpers.getCircleArea(radius)).toEqual(area);
        });
      });
    
      describe('getRectangularPrismVolume(length, width, height)', () => {
        it('should return the correct volume', () => {
          expect(helpers.getRectangularPrismVolume(0, 10, 20)).toEqual(0);
          expect(helpers.getRectangularPrismVolume(4, 4, 4)).toEqual(64);
        });
      });
});






