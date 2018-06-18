const helpers = require('./project-1');

// start testing!
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
        });
    });
    // describe('roundUp', () => {
    //     it('', () => {

    //     });
    // });
    // describe('addExclamationPoint', () => {
    //     it('', () => {

    //     });
    // });
    // describe('combineNames', () => {
    //     it('', () => {

    //     });
    // });
    // describe('getGreeting', () => {
    //     it('', () => {

    //     });
    // });
    // describe('getRectangleArea', () => {
    //     it('', () => {

    //     });
    // });
    // describe('getTriangleArea', () => {
    //     it('', () => {

    //     });
    // });
    // describe('getCircleArea', () => {
    //     it('', () => {

    //     });
    // });
    // describe('getRectangularPrismVolume', () => {
    //     it('', () => {

    //     });
    // });
})