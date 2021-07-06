const helpers = require('./project-1');

// start testing!

describe('project-1', () => {
    describe('multplyByTen', () => {
        it('returns NaN when given a non-numeric value', () => {
            expect(helpers.multiplyByTen(undefined)).toBeNaN();
            expect(helpers.multiplyByTen('two')).toBeNaN();
        });
        it('should return the given number multiplied by 10', () => {});
    });
    
    describe('subtractFive', () => {
        it('returns NaN when given a non-numeric value', () => {
            expect(helpers.subtractFive(undefined)).toBeNaN();
            expect(helpers.subtractFive('seven')).toBeNaN();
            expect(helpers.subtractFive(false)).not.toBeNaN();
            expect(helpers.subtractFive(true)).not.toBeNaN();
        });
        it('should return the given number subtracted by 5', () => {});
    });
    
    describe('areSameLength', () => {
        it('returns true when string1.length equals string2.length', () => {
            expect(helpers.areSameLength('test', 'test')).toBeTruthy();
            expect(helpers.areSameLength('tests', 'test')).toBeFalsy();
        });
    });
    
    
    describe('areEqual', () => {
        it('should return true if numbers are equal', () => {
            expect(helpers.areEqual(4, 4)).toBe(true);
            expect(helpers.areEqual(4, '4')).toBe(false);
        });
    });
    
    describe('lessThanNinety', () => {
        it('should return true if the given number is less than ninety', () => {
            expect(helpers.lessThanNinety(89)).toBeTruthy();
            expect(helpers.lessThanNinety(90)).toBeFalsy();
        });
    });
    
    describe('greaterThanFifty', () => {
        it('should return true if the given number is greater than fifty', () => {
            expect(helpers.greaterThanFifty(51)).toBeTruthy();
            expect(helpers.greaterThanFifty(49)).toBeFalsy();
        });
    });

    describe('add', () => {
        it('can add two numbers together', () => {
            expect(helpers.add(50, 5)).toEqual(55);
        });
    });

    describe('subtract', () => {
        it('can subtract two numbers', () => {
            expect(helpers.subtract(10, 5)).toBe(5);
        });
    });

    describe('divide', () => {
        it('divide two numbers and return the quotient', () => {
            expect(helpers.divide(10, 5)).toEqual(2);
        });
    });

    describe('multipy', () => {
        it('multiplies two numbers and returns the product', () => {
            expect(helpers.multiply(2, 2)).toBe(4);
        });
    });
    
    describe('getRemainder', () => {
        it('returns the remainder of two numbers', () => {
            expect(helpers.getRemainder(10, 3)).toBe(1);
            expect(helpers.getRemainder(10, 5)).toBe(0);
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
            expect(helpers.isOdd(312432349)).toBeTruthy();
        });
        it('should return false for even numbers', () => {
            expect(helpers.isOdd(10)).toBeFalsy();
            expect(helpers.isOdd(1239484)).toBeFalsy();
        });
    });

    describe('square', () => {
        it('should return a number multiplied by itself', () => {
            expect(helpers.square(5)).toEqual(25);
        });
    });

    describe('cube', () => {
        it('should return a number cubed (ex: 3 * 3 * 3)', () => {
            expect(helpers.cube(3)).toBe(27);
        });
    });

    describe('raiseToPower', () => {
        it('should raise the first number to the power of the second number', () => {
            expect(helpers.raiseToPower(3, 2)).toBe(9);
        });
    });

    describe('roundNumber', () => {
        it('should round a given number up to the nearest single place', () => {
            expect(helpers.roundNumber(19.5)).toBe(20);
        });
    });

    describe('roundUp', () => {
        it('should round a number up one place if it is greater than just the integer itself', () => {
            expect(helpers.roundUp(9.000001)).toEqual(10);
        });
    });

    describe('addExclamationPoint', () => {
        it('should add a ! at the end of a given string', () => {
            expect(helpers.addExclamationPoint('Hello world')).toBe('Hello world!');
        });
    });

    describe('combineNames', () => {
        it('should combine two names passed in', () => {
            expect(helpers.combineNames('Chris', 'Honda')).toEqual('Chris Honda');
        });
    });

    describe('getGreeting', () => {
        it('should return the phrase "Hello ${name}', () => {
            expect(helpers.getGreeting('Molly')).toBe('Hello Molly!');
        });
    });

    describe('getRectangleArea', () => {
        it('should take in a height and a length set of parameters, and return the area of a rectangle', () => {
            expect(helpers.getRectangleArea(10, 10)).toEqual(100);
        });
    });

    describe('getTriangleArea', () => {
        it('should take in base and height params, multiply them, and divide the result by 2', () => {
            expect(helpers.getTriangleArea(10, 10)).toEqual(50);
        });
    });

    describe('getCircle', () => {
        it('should take a radius param, square it, and multiply by pi', () => {
            expect(helpers.getCircleArea(10)).toBeCloseTo(314.16);
        });
    });

    describe('getRectangularPrismVolume', () => {
        it('should take in width, height, and length params, multiply them, and return product', () => {
            expect(helpers.getRectangularPrismVolume(10, 10, 10)).toBe(1000);
        });
    });

});