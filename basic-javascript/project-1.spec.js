const helpers = require('./project-1');

describe('project-1', () => {
    describe('multiplyByTen', () => {
        it('can multiply by ten', () => {
            expect(helpers.multiplyByTen(5)).toEqual(50);
        });
    });
    describe('subtractFive', () => {
        it('can subtract by five', () => {
            expect(helpers.subtractFive(20)).toEqual(15);
        });
    });
    describe('areSameLength', () => {
        it('has two strings that are the same length', () => {
            expect(helpers.areSameLength('hello', 'world')).toBe(true);
        });
    });
    describe('areEqual', () => {
        it('has two equal values', () => {
            expect(helpers.areEqual(4, 4)).toBe(true);
        });
    });
    describe('lessThanNinety', () => {
        it('num is less than 90', () => {
            expect(helpers.lessThanNinety(51)).toBe(true);
        });
    });
    describe('greaterThanFifty', () => {
        it('num is greater than 50', () => {
            expect(helpers.greaterThanFifty(51)).toBe(true);
        });
    });
    describe('add', () => {
        it('can add two numbers', () => {
            expect(helpers.add(40, 2)).toEqual(42);
        });
    });
    describe('subtract', () => {
        it('can subtract two numbers', () => {
            expect(helpers.subtract(20, 10)).toEqual(10);
        });
    });
    describe('divide', () => {
        it('can divide two numbers', () => {
            const expected = 2;
            const actual = helpers.divide(20, 10);
            expect(actual).toEqual(expected);
        });
    });
    describe('multiply', () => {
        it('can multiply two numbers', () => {
            const expected = 200;
            const actual = helpers.multiply(20, 10);
            expect(actual).toEqual(expected);
        });
    });
    describe('getRemainder', () => {
        it('should get the remainder', () => {
            const expected = 3;
            const actual = helpers.getRemainder(3, 7);
            expect(actual).toEqual(expected);
        });
    });
    describe('isEven', () => {
        it('should be true if even', () => {
            const expected = true;
            const actual = helpers.isEven(2);
            expect(actual).toEqual(expected);
        });
    });
    describe('isOdd', () => {
        it('should be true if odd', () => {
            const expected = false;
            const actual = helpers.isOdd(2);
            expect(actual).toEqual(expected);
        });
    });
    describe('square', () => {
        it('should properly square a number', () => {
            const expected = 16;
            const actual = helpers.square(4);
            expect(actual).toEqual(expected);
        });
    });
    describe('cube', () => {
        it('should properly cube a number', () => {
            expect(helpers.cube(4)).toEqual(64);
        });
    });
    describe('raiseToPower', () => {
        it('accept a number and raise it by the exponent', () => {
            expect(helpers.raiseToPower(5, 3)).toEqual(125);
        });
    });
    describe('roundNumber', () => {
        it('should round a number with a decimal', () => {
            expect(helpers.roundNumber(4.67)).toBe(5);
            expect(helpers.roundNumber(4.32)).toBe(4);
        });
    });
    describe('roundUp', () => {
        it('should round a number up', () => {
            expect(helpers.roundUp(4.67)).toBe(5);
        });
    });
    describe('addExclamationPoint', () => {
        it('should add an exclamation point to a string', () => {
            expect(helpers.addExclamationPoint('hello world')).toBe('hello world!')
        });
    });
    describe('combineNames', () => {
        it('should combine two inputs into a stingle string', () => {
            expect(helpers.combineNames('andrew', 'kolumbic')).toBe('andrew kolumbic');
        });
    });
    describe('getGreeting', () => {
        it('should return a greeting with a dynamic name', () => {
            expect(helpers.getGreeting('andrew')).toBe('Hello andrew!');
            expect(helpers.getGreeting('AgHTgLe')).toBe('Hello AgHTgLe!');
        });
    });
    describe('getRectangleArea', () => {
        it('should return the area of a rectangle', () => {
            expect(helpers.getRectangleArea(4, 6)).toEqual(24);
        });
    });
    describe('getTriangleArea', () => {
        it('should return the area of a triangle', () => {
            expect(helpers.getTriangleArea(4, 5)).toEqual(10);
        });
    });
    describe('getCircleArea', () => {
        it('should get the area of a circle', () => {
            expect(helpers.getCircleArea(1)).toEqual(3.141592653589793);
        });
    });
    describe('getRectangularPrismVolume', () => {
        it('should return the prism volume of a rectangle', () => {
            expect(helpers.getRectangularPrismVolume(1,2,3)).toEqual(6);
        });
    });
});