const helpers = require('./project-1');

// start testing!
describe('project-1', () => {
    describe('multiplyByTen', () => {
      it('returns NaN when given a non numeric value', () => {
        expect(helpers.multiplyByTen(undefined)).toBeNaN();
        expect(helpers.multiplyByTen('two')).toBeNaN();
      });
 
      it('should return the given number multiplied by 10', () => {
          expect(helpers.multiplyByTen(4)).toBe(40);
          expect(helpers.multiplyByTen(0)).toBe(0);
          expect(helpers.multiplyByTen(-1)).toBe(-10);
      });
    });

    describe('subtractFive', () => {
        it('returns NaN when given a non numeric value', () => {
            expect(helpers.subtractFive(undefined)).toBeNaN();
            expect(helpers.subtractFive('two')).toBeNaN();
          });
        it('should subtract by five', () => {
            expect(helpers.subtractFive(0)).toBe(-5);
            expect(helpers.subtractFive(7)).toBe(2);
            expect(helpers.subtractFive(-2)).toBe(-7);
        });
    });

    describe('areSameLength', () => {
        let str1 = 'abcde'
        let str2 = 'fghij'
        let str3 = 'klm'

        it('are same in length', () => {
            expect(helpers.areSameLength(str1, str2)).toBeTruthy();
            expect(helpers.areSameLength(str2, str1)).toBeTruthy();
        });

        it('are not same in length', () => {
            expect(helpers.areSameLength(str1, str3)).toBeFalsy();
            expect(helpers.areSameLength(str3, str2)).toBeFalsy();
        });


    });
    
    describe('areEqual', () => {
        it('are equal', () => {
            expect(helpers.areEqual(0, 0)).toBeTruthy();
            expect(helpers.areEqual(-1, -1)).toBeTruthy();
            expect(helpers.areEqual(+1, +1)).toBeTruthy();
        });
        it('are not equal', () => {
            expect(helpers.areEqual(0, 1)).toBeFalsy();
            expect(helpers.areEqual(-1, 0)).toBeFalsy();
            expect(helpers.areEqual(+1, -1)).toBeFalsy();
        });
    });

    describe('lessThanNinety', () => {
        it('is less than ninety', () => {
            expect(helpers.lessThanNinety(89)).toBeTruthy();
            expect(helpers.lessThanNinety(0)).toBeTruthy();
            expect(helpers.lessThanNinety(-90)).toBeTruthy();
        });
        it('is not less than niety', () => {
            expect(helpers.lessThanNinety(90)).toBeFalsy();
            expect(helpers.lessThanNinety(91)).toBeFalsy();
            expect(helpers.lessThanNinety(90000)).toBeFalsy();
        });
    });

    describe('greaterThanFifty', () => {
        it('is greater than fifty', () => {
            expect(helpers.greaterThanFifty(51)).toBeTruthy();
            expect(helpers.greaterThanFifty(500)).toBeTruthy();
            expect(helpers.greaterThanFifty(5000)).toBeTruthy();
        });
        it('is not greater than fifty', () => {
            expect(helpers.greaterThanFifty(50)).toBeFalsy();
            expect(helpers.greaterThanFifty(0)).toBeFalsy();
            expect(helpers.greaterThanFifty(-50)).toBeFalsy();
        });
    });

    describe('add', () => {
        it('should return the added number', () => {
            expect(helpers.add(-10, -5)).toBe(-15);
            expect(helpers.add(10, 5)).toBe(15);
            expect(helpers.add(0,0)).toBe(0);
        });
    });

    describe('subtract', () => {
        it('should return the subtracted number', () => {
            expect(helpers.subtract(-10,-5)).toBe(-5);
            expect(helpers.subtract(10, 5)).toBe(5);
            expect(helpers.subtract(0, 0)).toBe(0);
        });
    });

    describe('divide', () => {
        it('should be NaN when divid 0 by 0', () => {
            expect(helpers.divide(0, 0)).toBeNaN();
        });
        it('should be infinity when divided by 0', () => {
            expect(helpers.divide(10, 0)).toBe(Infinity);
        });
        it('should return divided number', () => {
            expect(helpers.divide(10, 2)).toBe(5);
            expect(helpers.divide(10, 5)).toBe(2);
            expect(helpers.divide(0, 5)).toBe(0);
        });
    });

    describe('multiply', () => {
        it('should return the multiplied number', () => {
            expect(helpers.multiply(-1, 50)).toBe(-50);
            expect(helpers.multiply(0, 0)).toBe(0);
            expect(helpers.multiply(0, 1)).toBe(0);
        });
    });

    describe('getRemainder', () => {
        it('should be NaN when divide 0 by 0', () => {
            expect(helpers.divide(0, 0)).toBeNaN();
        });
        it('should be infinity when divided by 0', () => {
            expect(helpers.divide(10, 0)).toBe(Infinity);
        });
        it('should return the remainder', () => {
            expect(helpers.getRemainder(5, 2)).toBe(1);
            expect(helpers.getRemainder(7, 9)).toBe(7);
        });
    });
  
    describe('isEven', () => {
        it('should return true for even numbers', () => {
            expect(helpers.isEven(4)).toBeTruthy();
            expect(helpers.isEven(0)).toBeTruthy();
        });
        it('should return false for odd numbers', () => {
            expect(helpers.isEven(3)).toBeFalsy();
            expect(helpers.isEven(-1)).toBeFalsy();
        });
    });

    describe('isOdd', () => {
        it('should return true for odd numbers', () => {
            expect(helpers.isOdd(3)).toBeTruthy();
            expect(helpers.isOdd(-1)).toBeTruthy();
        });
        it('should return false for even numbers', () => {
            expect(helpers.isOdd(4)).toBeFalsy();
            expect(helpers.isOdd(0)).toBeFalsy();
        });
    });

    describe('square', () => {
        it('should return the squred number', () => {
            expect(helpers.square(2)).toBe(4);
            expect(helpers.square(3)).toBe(9);
            expect(helpers.square(-5)).toBe(25);
            expect(helpers.square(0)).toBe(0);
        });
    });

    describe('cube', () => {
        it('should return the cubed number', () => {
            expect(helpers.cube(2)).toBe(8);
            expect(helpers.cube(3)).toBe(27);
            expect(helpers.cube(-5)).toBe(-125);
            expect(helpers.cube(0)).toBe(0);
        });
    });

    describe('raiseToPower', () => {
        it('should return the powered by exponent number', () => {
            expect(helpers.raiseToPower(1, 3)).toBe(1);
            expect(helpers.raiseToPower(1, 0)).toBe(1);
            expect(helpers.raiseToPower(-3, 3)).toBe(-27);
            expect(helpers.raiseToPower(10, -3)).toBe(0.001);
        });
    });

    describe('roundNumber', () => {
       it('should return rounded number', () => {
            expect(helpers.roundNumber(0)).toBe(0);
            expect(helpers.roundNumber(-1.5)).toBe(-1);
            expect(helpers.roundNumber(1.5)).toBe(2);
            expect(helpers.roundNumber(3)).toBe(3);
        });
    });

    describe('roundUp', () => {
        it('should return roundedup number', () => {
            expect(helpers.roundUp(0)).toBe(0);
            expect(helpers.roundUp(-1.1)).toBe(-1);
            expect(helpers.roundUp(1.1)).toBe(2);
            expect(helpers.roundUp(3)).toBe(3);
        });
    });

    describe('addExclamationPoint', () => {
        it('should add an exclamation at the end of a string', () => {
            expect(helpers.addExclamationPoint('Space')).toBe('Space!');
        });
    });

    describe('combineNames', () => {
        it('should return combined string of names', () => {
            expect(helpers.combineNames('Nerys', 'Kira')).toBe('Nerys Kira');
            expect(helpers.combineNames('Worf', 'Son of Mogh')).toBe('Worf Son of Mogh');
            expect(helpers.combineNames('Wesley', 'Crusher')).toBe('Wesley Crusher');
        });
    });

    describe('getGreeting', () => {

        it('should return string', () => {
            expect(typeof helpers.getGreeting('World')).toEqual('string');
        });

        it('should return name with greetings message', () => {
            expect(helpers.getGreeting('World')).toBe('Hello World!');
        });
    });

    describe('getRectangleArea', () => {
        it('should return the area of a rectangle', () => {
            expect(helpers.getRectangleArea(0, 5)).toBe(0);
            expect(helpers.getRectangleArea(0, 0)).toBe(0);
            expect(helpers.getRectangleArea(3, 4)).toBe(12);
            expect(helpers.getRectangleArea(5, 5)).toBe(25);
        });
    });

    describe('getTriangleArea', () => {
        it('should return the area of a triangle', () => {
            expect(helpers.getTriangleArea(0, 4)).toBe(0);
            expect(helpers.getTriangleArea(4, 0)).toBe(0);
            expect(helpers.getTriangleArea(2, 4)).toBe(4);
            expect(helpers.getTriangleArea(4, 4)).toBe(8);
        });
    });

    describe('getCircleArea', () => {
        it('should return the area of a circle', () => {
            expect(helpers.getCircleArea(0)).toBe(0);
            expect(helpers.getCircleArea(10)).toBe(100*Math.PI);
        });
    });

    describe('getRectangularPrismVolume', () => {
        it('should return the volume of a prism', () => {
            expect(helpers.getRectangularPrismVolume(0, 1, 2)).toBe(0);
            expect(helpers.getRectangularPrismVolume(1, 1, 1)).toBe(1);
            expect(helpers.getRectangularPrismVolume(1, 2, 3)).toBe(6);
        });
    });

});

