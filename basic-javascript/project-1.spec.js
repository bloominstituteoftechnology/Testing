const helpers = require('./project-1');

// Arrange: setup the world
// Act: execute the code you're testing
// Assert: check that it works

describe('project-1.js', () => {
    // multiplyByTen  
    describe('multipyByTen', () => {
        it('should multipy provided number by ten', () => {
            const expected = 100; // expected = 101 --> FAIL
            const actual = helpers.multiplyByTen(10);
            expect(actual).toEqual(expected);
        });

        it('boolean argument', () => {
            expect(helpers.multiplyByTen(true)).toEqual('Not a valid number');
        });

        it('valid string argument', () => {
            expect(helpers.multiplyByTen('33')).toEqual(330);
        });

        it('invalid string argument', () => {
            expect(helpers.multiplyByTen('33dd')).toEqual('Not a valid number');
        });

        it('empty string argument', () => {
            expect(helpers.multiplyByTen('')).toEqual('Not a valid number');
        });

        it('Infinity as string argument', () => {
            expect(helpers.multiplyByTen('Infinity')).toEqual(Infinity);
        });

        it('no argument', () => {
            expect(helpers.multiplyByTen()).toEqual('Not a valid number');
        });
    });

    // subtractFive
    describe('subtractFive', () => {
        it('should subtract five from provided number', () => {
            const expected = 25;
            const actual = helpers.subtractFive(30);
            expect(actual).toEqual(expected);
        });
    });

    // areSameLength
    describe('areSameLength', () => {
        it('should return true if the arguments are the same length, else false', () => {
            const actual = helpers.areSameLength('test', 'tests');
            expect(actual).toBe(false);
        });
    });

    // areEqual
    describe('areEqual', () => {
        it('should return true if arguments are deep equal', () => {
            const actual = helpers.areEqual({ name: 'Sarah'}, { name: 'Sarah'});
            expect(actual).toBe(false);
        });
    });

    // lessThanNinety
    describe('lessThanNinety', () => {
        it('should return true if number less than 90', () => {
            expect(helpers.lessThanNinety(89)).toBe(true);
        });
    });

    // greaterThanFifty
    describe('greaterThanFifty', () => {
        it('should return true if greater than 50', () => {
            expect(helpers.greaterThanFifty(49)).toBe(false);
        });
    });

    // add
    describe('add', () => {
        it('should sum arguments', () => {
            expect(helpers.add(10, 20)).toEqual(30);
        });
    });

    // subtract
    describe('subtract', () => {
        it('should subtract second number from first', () => {
            expect(helpers.subtract(10, 5)).toEqual(5);
        });
    });

    // divide
    describe('divide', () => {
        it('should return first number divided by second', () => {
            expect(helpers.divide(10, 5)).toEqual(2);
        });
    });

    // multiply
    describe('multiply', () => {
        it('should multiply two numbers together', () => {
            expect(helpers.multiply(10, 5)).toEqual(50);
        });
    });

    // getRemainder
    describe('getRemainder', () => {
        it('should return remainder of first number divided by second', () => {
            expect(helpers.getRemainder(11, 5)).toEqual(1);
        });
    });

    describe('isEven', () => {
        it('returns true if number is even', () => {
            expect(helpers.isEven(4)).toBe(true);
        });
    });

    describe('isOdd', () => {
        it('returns true if number is odd', () => {
            expect(helpers.isOdd(4)).toBe(false);
        });
    });

    describe('square', () => {
        it('returns square of number', () => {
            expect(helpers.square(2)).toEqual(4);
        });
    });

    describe('cube', () => {
        it('returns cube of number', () => {
            expect(helpers.cube(2)).toEqual(8);
        });
    });

    describe('raiseToPower', () => {
        it('returns first number to the power of the second number', () => {
            expect(helpers.raiseToPower(2, 3)).toEqual(8);
        });
    });

    describe('roundNumber', () => {
        it('returns Math.round() applied to number', () => {
            expect(helpers.roundNumber(1.8)).toEqual(2);
        });
    });

    describe('roundUp', () => {
        it('rounds number to next highest integer', () => {
            expect(helpers.roundUp(-3.33)).toEqual(-3);
        });
    });

    describe('addExclamationPoint', () => {
        it('returns string with ! added to end', () => {
            expect(helpers.addExclamationPoint('Hello')).toEqual('Hello!');
        });
    });

    describe('combineNames', () => {
        it('returns concatenation of first and second strings with space separator ', () => {
            expect(helpers.combineNames('Sarah', 'Tennis')).toEqual('Sarah Tennis');
        });
    });

    describe('getGreeting', () => {
        it('returns greeting string, adds "Hello " to front and "!" to end of argument', () => {
            expect(helpers.getGreeting('Sarah')).toEqual('Hello Sarah!');
        });
    });

    describe('getRectangleArea', () => {
        it('returns area of rectangle given side lengths', () => {
            expect(helpers.getRectangleArea(10, 5)).toEqual(50);
        });
    });

    describe('getTriangleArea', () => {
        it('returns area of triangle given length of base and height', () => {
            expect(helpers.getTriangleArea(10, 5)).toEqual(25);
        });
    });

    describe('getCircleArea', () => {
        it('returns area of circle given radius', () => {
            expect(helpers.getCircleArea(1)).toEqual(3.14);
        });
    });

    describe('getRectangularPrismVolume', () => {
        it('returns volume of rectangular prism ', () => {
            expect(helpers.getRectangularPrismVolume(2, 2, 2)).toEqual(8);
        });
    });
});