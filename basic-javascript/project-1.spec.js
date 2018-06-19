const helpers = require('./project-1');

describe('project-1', () => {
    describe('multiplyByTen', () => {
        it('returns NaN for a non-numerical parameter', () => {
            expect(helpers.multiplyByTen(undefined)).toBeNaN();
            expect(helpers.multiplyByTen('two')).toBeNaN();
            expect(helpers.multiplyByTen(true)).toEqual(10);
            expect(helpers.multiplyByTen(false)).toEqual(0);
        });
        it('returns the given number multiplied by 10', () => {
            expect(helpers.multiplyByTen(10)).toEqual(100);
            expect(helpers.multiplyByTen(-10)).toEqual(-100);
        });
    });

    describe('subtractFive', () => {
        it('returns NaN for a non-numerical parameter', () => {
            expect(helpers.subtractFive(undefined)).toBeNaN();
            expect(helpers.subtractFive('two')).toBeNaN();
            expect(helpers.subtractFive(true)).toEqual(-4);
            expect(helpers.subtractFive(false)).toEqual(-5);
        });
        it('returns 5 less than the given number', () => {
            expect(helpers.subtractFive(10)).toEqual(5);
            expect(helpers.subtractFive(-10)).toEqual(-15);
        });
    });

    describe('areSameLength', () => {
        it('returns NaN for a non-String parameter', () => {
            expect(helpers.areSameLength(true, true)).toBeTruthy();
            expect(helpers.areSameLength(false, true)).toBeTruthy();
            expect(helpers.areSameLength(0, 0)).toBeTruthy();
        });
        it('returns Boolean based on input length', () => {
            expect(helpers.areSameLength(`10`, `10`)).toBeTruthy();
            expect(helpers.areSameLength(`aba`, `a`)).toBeFalsy();
        });
    });

    describe('areEqual', () => {
        it('returns Boolean based on input value', () => {
            expect(helpers.areEqual(true, true)).toBeTruthy();
            expect(helpers.areEqual(false, true)).toBeFalsy();
            expect(helpers.areEqual(undefined, undefined)).toBeTruthy();
            expect(helpers.areEqual(null, undefined)).toBeFalsy();
            expect(helpers.areEqual(0, "0")).toBeFalsy();
            expect(helpers.areEqual(0, 0)).toBeTruthy();
        });
    });

    describe('lessThanNinety', () => {
        it('returns true if less than 90', () => {
            expect(helpers.lessThanNinety(0)).toBeTruthy();
            expect(helpers.lessThanNinety(false)).toBeTruthy();
            expect(helpers.lessThanNinety(null)).toBeTruthy();
            expect(helpers.lessThanNinety(-91)).toBeTruthy();
        });
        it('returns false if greater than 90', () => {
            expect(helpers.lessThanNinety(91)).toBeFalsy();
            expect(helpers.lessThanNinety(Math.max)).toBeFalsy();
        });
    });

    describe('greaterThanFifty', () => {
        it('returns false if less than 50', () => {
            expect(helpers.greaterThanFifty(0)).toBeFalsy();
            expect(helpers.greaterThanFifty(false)).toBeFalsy();
            expect(helpers.greaterThanFifty(null)).toBeFalsy();
            expect(helpers.greaterThanFifty(-50)).toBeFalsy();
        });
        it('returns true if greater than 50', () => {
            expect(helpers.greaterThanFifty(91)).toBeTruthy();
        });
    });

    describe('add', () => {
        it('returns NaN if undefined is passed', () => {
            expect(helpers.add(undefined, 1)).toBeNaN();
        });
        it('returns the sum of two parameters', () => {
            expect(helpers.add(0, 1)).toBe(1);
            expect(helpers.add(false, 1)).toBe(1);
            expect(helpers.add(true, 1)).toBe(2);
            expect(helpers.add(null, 1)).toBe(1);
            expect(helpers.add('abc', 1)).toBe('abc1');
            expect(helpers.add('abc', 'def')).toBe('abcdef');
        });
    });

    describe('subtract', () => {
        it('returns NaN if certain types are passed', () => {
            expect(helpers.subtract(undefined, 1)).toBeNaN();
            expect(helpers.subtract('abc', 1)).toBeNaN();
            expect(helpers.subtract('abc', 'def')).toBeNaN();
        });
        it('returns the difference between two parameters', () => {
            expect(helpers.subtract(0, 1)).toBe(-1);
            expect(helpers.subtract(false, 1)).toBe(-1);
            expect(helpers.subtract(true, 1)).toBe(0);
            expect(helpers.subtract(null, 1)).toBe(-1);
        });
    });

    describe('divide', () => {
        it('returns NaN if certain types are passed', () => {
            expect(helpers.divide(undefined, 1)).toBeNaN();
            expect(helpers.divide('abc', 1)).toBeNaN();
            expect(helpers.divide('abc', 'def')).toBeNaN();
        });
        it('returns the quotient of two parameters', () => {
            expect(helpers.divide(0, 1)).toBe(0);
            expect(helpers.divide(9, -3)).toBe(-3);
            expect(helpers.divide(false, 1)).toBe(0);
            expect(helpers.divide(true, 1)).toBe(1);
            expect(helpers.divide(null, 1)).toBe(0);
        });
    });

    describe('multiply', () => {
        it('returns NaN if certain types are passed', () => {
            expect(helpers.multiply(undefined, 1)).toBeNaN();
            expect(helpers.multiply('abc', 1)).toBeNaN();
            expect(helpers.multiply('abc', 'def')).toBeNaN();
        });
        it('returns the quotient of two parameters', () => {
            expect(helpers.multiply(0, 1)).toBe(0);
            expect(helpers.multiply(9, -3)).toBe(-27);
            expect(helpers.multiply(false, 1)).toBe(0);
            expect(helpers.multiply(true, 1)).toBe(1);
            expect(helpers.multiply(null, 1)).toBe(0);
        });
    });

    describe('getRemainder', () => {
        it('returns NaN if certain types are passed', () => {
            expect(helpers.getRemainder(undefined, 1)).toBeNaN();
            expect(helpers.getRemainder('abc', 1)).toBeNaN();
            expect(helpers.getRemainder('abc', 'def')).toBeNaN();
        });
        it('returns the remainder of two parameters', () => {
            expect(helpers.getRemainder(0, 1)).toBe(0);
            expect(helpers.getRemainder(9, -2)).toBe(1);
            expect(helpers.getRemainder(false, 1)).toBe(0);
            expect(helpers.getRemainder(true, 1)).toBe(0);
            expect(helpers.getRemainder(null, 1)).toBe(0);
        });
    });

    describe('isEven', () => {
        it('returns false if certain conditions are met', () => {
            expect(helpers.isEven(undefined)).toBeFalsy();
            expect(helpers.isEven('abc')).toBeFalsy();
            expect(helpers.isEven(1)).toBeFalsy();
            expect(helpers.isEven(-1)).toBeFalsy();
            expect(helpers.isEven(true)).toBeFalsy();
        });
        it('returns true if certain conditions are met', () => {
            expect(helpers.isEven(0)).toBeTruthy();
            expect(helpers.isEven(2)).toBeTruthy();
            expect(helpers.isEven(false)).toBeTruthy();
            expect(helpers.isEven(null)).toBeTruthy();
        });
    });

    describe('isOdd', () => {
        it('returns false if certain conditions are met', () => {
            expect(helpers.isOdd(2)).toBeFalsy();
            expect(helpers.isOdd(-2)).toBeFalsy();
            expect(helpers.isOdd(false)).toBeFalsy();
            expect(helpers.isOdd(null)).toBeFalsy();
        });
        it('returns true if certain conditions are met', () => {
            expect(helpers.isOdd('abcd')).toBeTruthy();
            expect(helpers.isOdd(undefined)).toBeTruthy();
            expect(helpers.isOdd(1)).toBeTruthy();
            expect(helpers.isOdd(-1)).toBeTruthy();
            expect(helpers.isOdd(true)).toBeTruthy();
        });
    });

    describe('square', () => {
        it('returns NaN if certain types are passed', () => {
            expect(helpers.square(undefined)).toBeNaN();
        });
        it('returns the square of the number passed', () => {
            expect(helpers.square('1')).toBe(1);
            expect(helpers.square(1)).toBe(1);
            expect(helpers.square(true)).toBe(1);
            expect(helpers.square(false)).toBe(0);
            expect(helpers.square(null)).toBe(0);
            expect(helpers.square(3)).toBe(9);
            expect(helpers.square(-3)).toBe(9);
        });
    });

    describe('cube', () => {
        it('returns NaN if certain types are passed', () => {
            expect(helpers.cube(undefined)).toBeNaN();
        });
        it('returns the cube of the number passed', () => {
            expect(helpers.cube('1')).toBe(1);
            expect(helpers.cube(1)).toBe(1);
            expect(helpers.cube(false)).toBe(0);
            expect(helpers.cube(null)).toBe(0);
            expect(helpers.cube(true)).toBe(1);
            expect(helpers.cube(3)).toBe(27);
            expect(helpers.cube(-3)).toBe(-27);
        });
    });

    describe('raiseToPower', () => {
        it('returns NaN if certain types are passed', () => {
            expect(helpers.raiseToPower(undefined)).toBeNaN();
        });
        it('returns the power of the number passed', () => {
            expect(helpers.raiseToPower('1', '5')).toBe(1);
            expect(helpers.raiseToPower(-1, 3)).toBe(-1);
            expect(helpers.raiseToPower(null, 3)).toBe(0);
            expect(helpers.raiseToPower(true, false)).toBe(1);
            expect(helpers.raiseToPower(3, false)).toBe(1);
            expect(helpers.raiseToPower(3, 3)).toBe(27);
            expect(helpers.raiseToPower(-3, -3)).toBe(-0.037037037037037035);
        });
    });

    describe('roundNumber', () => {
        it('returns NaN if certain types are passed', () => {
            expect(helpers.roundNumber(undefined)).toBeNaN();
        });
        it('returns the number rounded of the number passed', () => {
            expect(helpers.roundNumber('1.3')).toBe(1);
            expect(helpers.roundNumber(1.3)).toBe(1);
            expect(helpers.roundNumber(-1.3)).toBe(-1);
            expect(helpers.roundNumber(0)).toBe(0);
            expect(helpers.roundNumber(false)).toBe(0);
            expect(helpers.roundNumber(null)).toBe(0);
            expect(helpers.roundNumber(true)).toBe(1);
        });
    });

    describe('roundUp', () => {
        it('returns NaN if certain types are passed', () => {
            expect(helpers.roundUp(undefined)).toBeNaN();
        });
        it('returns the number rounded of the number passed', () => {
            expect(helpers.roundUp('1.3')).toBe(2);
            expect(helpers.roundUp(1.3)).toBe(2);
            expect(helpers.roundUp(-1.3)).toBe(-1);
            expect(helpers.roundUp(0)).toBe(0);
            expect(helpers.roundUp(false)).toBe(0);
            expect(helpers.roundUp(null)).toBe(0);
            expect(helpers.roundUp(true)).toBe(1);
        });
    });

    describe('addExclamationPoint', () => {
        it('returns a string with an ! added at the end', () => {
            expect(helpers.addExclamationPoint(undefined)).toBe('undefined!');
            expect(helpers.addExclamationPoint('1.3')).toBe('1.3!');
            expect(helpers.addExclamationPoint(1.3)).toBe('1.3!');;
            expect(helpers.addExclamationPoint(false)).toBe('false!');
            expect(helpers.addExclamationPoint(null)).toBe('null!');
            expect(helpers.addExclamationPoint(true)).toBe('true!');
        });
    });

    describe('combineNames', () => {
        it('returns a string with firstName & lastName', () => {
            expect(helpers.combineNames('1', '5')).toBe('1 5');
            expect(helpers.combineNames(-1, 3)).toBe('-1 3');
            expect(helpers.combineNames(null, 3)).toBe('null 3');
            expect(helpers.combineNames(true, false)).toBe('true false');
            expect(helpers.combineNames(undefined, false)).toBe('undefined false');
        });
    });

    describe('getGreeting', () => {
        it('returns a string with Hello at the beginning and an ! at the end', () => {
            expect(helpers.getGreeting(undefined)).toBe('Hello undefined!');
            expect(helpers.getGreeting('1.3')).toBe('Hello 1.3!');
            expect(helpers.getGreeting(1.3)).toBe('Hello 1.3!');;
            expect(helpers.getGreeting(false)).toBe('Hello false!');
            expect(helpers.getGreeting(null)).toBe('Hello null!');
            expect(helpers.getGreeting(true)).toBe('Hello true!');
        });
    });

    describe('getRectangleArea', () => {
        it('returns NaN according to specific conditions', () => {
            expect(helpers.getRectangleArea(undefined, 1)).toBeNaN();
        });
        it('returns the area from two parameters', () => {
            expect(helpers.getRectangleArea('1.3', 1)).toBe(1.3);
            expect(helpers.getRectangleArea(2, -3)).toBe(-6);
            expect(helpers.getRectangleArea('2', false)).toBe(0);
            expect(helpers.getRectangleArea(null, null)).toBe(0);
            expect(helpers.getRectangleArea(true, true)).toBe(1);
        });
    });

    describe('getTriangleArea', () => {
        it('returns NaN according to specific conditions', () => {
            expect(helpers.getTriangleArea(undefined, 1)).toBeNaN();
        });
        it('returns the triangle area from two parameters', () => {
            expect(helpers.getTriangleArea('1.3', 1)).toBe(0.65);
            expect(helpers.getTriangleArea(2, -3)).toBe(-3);
            expect(helpers.getTriangleArea('2', false)).toBe(0);
            expect(helpers.getTriangleArea(null, null)).toBe(0);
            expect(helpers.getTriangleArea(true, true)).toBe(0.5);
        });
    });

    describe('getCircleArea', () => {
        it('returns NaN according to specific conditions', () => {
            expect(helpers.getCircleArea(undefined, 1)).toBeNaN();
        });
        it('returns the circle area from one radius', () => {
            expect(helpers.getCircleArea('1.3', 1)).toBe(5.3092915845667505);
            expect(helpers.getCircleArea(2, -3)).toBe(12.566370614359172);
            expect(helpers.getCircleArea('2', false)).toBe(12.566370614359172);
            expect(helpers.getCircleArea(null, null)).toBe(0);
            expect(helpers.getCircleArea(true, true)).toBe(3.141592653589793);
        });
    });

    describe('getRectangularPrismVolume', () => {
        it('returns NaN according to specific conditions', () => {
            expect(helpers.getRectangularPrismVolume(undefined, 1, 3)).toBeNaN();
        });
        it('returns the prism volume of a rectangle', () => {
            expect(helpers.getRectangularPrismVolume('1.3', 1, '2')).toBe(2.6);
            expect(helpers.getRectangularPrismVolume(2, -3, 10)).toBe(-60);
            expect(helpers.getRectangularPrismVolume('2', false, true)).toBe(0);
            expect(helpers.getRectangularPrismVolume(null, null, null)).toBe(0);
            expect(helpers.getRectangularPrismVolume(true, true, true)).toBe(1);
        });
    });
});