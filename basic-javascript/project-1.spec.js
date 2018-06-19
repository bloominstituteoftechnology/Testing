const helpers = require('./project-1');

// start testing!
describe('project-1', () => {
    describe('multiplyByTen', () => {
        it('It should return NaN when given a value of undefined or non-empty string.', () => {
            expect(helpers.multiplyByTen(undefined)).toBeNaN();
            expect(helpers.multiplyByTen('two')).toBeNaN();
        })

        it('it should return 0 when given an empty string, false or null value.', () => {
            expect(helpers.multiplyByTen('')).toEqual(0);
            expect(helpers.multiplyByTen(false)).toEqual(0);
            expect(helpers.multiplyByTen(null)).toEqual(0);
        })

        it('It should return the given value multiplied by 10.', () => {
            expect(helpers.multiplyByTen(1)).toBe(10);
            expect(helpers.multiplyByTen(5)).toEqual(50);
            expect(helpers.multiplyByTen(-1)).toEqual(-10);
            expect(helpers.multiplyByTen(10)).toEqual(100);
            expect(helpers.multiplyByTen(true)).toEqual(10);
        });
    })

    describe('subtractFive', () => {
        it('It should return NaN when given a non numeric value.', () => {
            expect(helpers.subtractFive(undefined)).toBeNaN();
            expect(helpers.subtractFive('two')).toBeNaN();
        })


        it('it should return -5 when given an empty string, false or null value.', () => {
            expect(helpers.subtractFive('')).toEqual(-5);
            expect(helpers.subtractFive(false)).toEqual(-5);
            expect(helpers.subtractFive(null)).toEqual(-5);
        })

        it('It should return the correct result of num minus 5.', () => {
            expect(helpers.subtractFive(5)).toEqual(0);
            expect(helpers.subtractFive(1)).toEqual(-4);
            expect(helpers.subtractFive(2)).toEqual(-3);
            expect(helpers.subtractFive(3)).toEqual(-2);
            expect(helpers.subtractFive(true)).toEqual(-4);
        })
    })

    describe('areSameLength', () => {
        it('It should return true if the lengths of both str1 and str2 are equal or false if they are not.', () => {
            expect(helpers.areSameLength('', 'test')).toBeFalsy();
            expect(helpers.areSameLength('test', 'test')).toBeTruthy();
            expect(helpers.areSameLength('test', [1, 2, 3])).toBeFalsy();
            expect(helpers.areSameLength('test', [1, 2, 3, 4])).toBeTruthy();
        })
    })

    describe('areEqual', () => {
        it('It should return true if both x and y are equal or false if they are not.', () => {
            expect(helpers.areEqual(true, true)).toBeTruthy();
            expect(helpers.areEqual(undefined, null)).toBeFalsy();
            expect(helpers.areEqual(6, 6)).toBeTruthy();
            expect(helpers.areEqual('test', 'tset')).toBeFalsy();
        })
    })

    describe('lessThanNinety', () => {
        it('It should return false when given a value of undefined or a non-empty string.', () => {
            expect(helpers.lessThanNinety(undefined)).toEqual(false);
            expect(helpers.lessThanNinety('test')).toEqual(false);
        })

        it('It should return true if num is less than 90 or false if it is not.', () => {
            expect(helpers.lessThanNinety('')).toEqual(true);
            expect(helpers.lessThanNinety(90)).toEqual(false);
            expect(helpers.lessThanNinety(1)).toEqual(true);
            expect(helpers.lessThanNinety(91)).toEqual(false);
            expect(helpers.lessThanNinety(null)).toEqual(true);
        })
    })

    describe('greaterThanFifty', () => {
        it('It should return false when given a value of undefined or a non-empty string.', () => {
            expect(helpers.greaterThanFifty(undefined)).toEqual(false);
            expect(helpers.greaterThanFifty('test')).toEqual(false);
        })

        it('It should return true if num is greater than 50 or false if it is not.', () => {
            expect(helpers.greaterThanFifty(51)).toEqual(true);
            expect(helpers.greaterThanFifty('')).toEqual(false);
            expect(helpers.greaterThanFifty(500)).toEqual(true);
            expect(helpers.greaterThanFifty(null)).toEqual(false);
            expect(helpers.greaterThanFifty(100)).toEqual(true);
        })
    })

    describe('add', () => {
        it('It should return NaN when x and/or y has a value of undefined.', () => {
            expect(helpers.add(undefined, undefined)).toBeNaN();
            expect(helpers.add(undefined, 1)).toBeNaN();
            expect(helpers.add(1, undefined)).toBeNaN();
        })

        it('It should return the correct result of adding x and y', () => {
            expect(helpers.add('', '')).toEqual('');
            expect(helpers.add(1, 3)).toEqual(4);
            expect(helpers.add(true, false)).toEqual(1);
            expect(helpers.add(false, false)).toEqual(0);
            expect(helpers.add(2, 2)).toEqual(4);
        })
    })

    describe('subtract', () => {
        it('It should return NaN when x and/or y has a value of undefined.', () => {

        })

        it('It should return the correct result of subtracting y from x.', () => {

        })
    })

    describe('divide', () => {
        it('It should return NaN when x and/or y has a value of undefined.', () => {

        })

        it('It should return the correct result of dividing x by y.', () => {

        })
    })

    describe('multiply', () => {
        it('It should return NaN when x and/or y has a value of undefined.', () => {

        })

        it('It should return the correct result of multiplying x and y', () => {

        })
    })

    describe('getRemainder', () => {
        it('It should return NaN when x and/or y has a value of undefined.', () => {

        })

        it('It should return the correct remainder when x is divided by y', () => {

        })
    })

    describe('isEven', () => {
        it('It should return false when num has a value of undefined.', () => {

        })

        it('It should return true if num is an even number or false if it is odd.', () => {

        })
    })

    describe('isOdd', () => {
        it('It should return false when num has a value of undefined.', () => {

        })

        it('It should return true if num is an odd number or false if it is an even number.', () => {

        })
    })

    describe('square', () => {
        it('It should return NaN when num has a value of undefined.', () => {

        })

        it('It should return the correct result when num is multiplied by num.', () => {

        })
    })

    describe('cube', () => {
        it('It should return NaN when num has a value of undefined.', () => {

        })

        it('It should return the correct result when num is cubed.', () => {

        })
    })

    describe('raiseToPower', () => {
        it('It should return NaN when num and/or exponent has a value of undefined.', () => {

        })

        it('It should return the correct result when num is raised to the value in exponent.', () => {

        })
    })

    describe('roundNumber', () => {
        it('It should return NaN when num has a value of undefined or non-empty string.', () => {

        })

        it('It should return num rounded to the nearest integer.', () => {

        })
    })

    describe('roundUp', () => {
        it('It should return NaN when num has a value of undefined or non-empty string.', () => {

        })

        it('It should return a number greater than or equal to num.', () => {

        })
    })

    describe('addExclamation', () => {
        it('It should return the value of str with an added excalmation point at the end.', () => {

        })
    })

    describe('combineNames', () => {
        it('It should return the value of firstName and lastName combined into a string.', () => {

        })
    })

    describe('getGreeting', () => {
        it('It should return a string.', () => {

        })
    })

    describe('getRectangleArea', () => {
        it('It should return NaN when length and/or width has a value of undefined.', () => {

        })

        it('It should return the correct result of multiplying length and width', () => {

        })
    })

    describe('getTriangleArea', () => {
        it('It should return NaN when base and/or height has a value of undefined.', () => {

        })

        it('It should return the correct result when 0.5 is multiplied by base and height.', () => {

        })
    })

    describe('getCircleArea', () => {
        it('It should return NaN when radius has a value of undefined.', () => {

        })

        it('It should return the correct result when the value of PI is multiplied by the radius raised to the power of 2.', () => {

        })
    })

    describe('getRectanglePrismVolume', () => {
        it('It should return NaN when width, height and/or height has a value of undefined.', () => {

        })

        it('It should return the correct result when width is multiplied by height and length.', () => {

        })
    })
})



it('isEven should return true for even numbers', () => {
    expect(helpers.isEven(4)).toBeTruthy();
    expect(helpers.isEven(3)).toBeFalsy();
    expect(helpers.isEven(0)).toBeTruthy();
    expect(helpers.isEven(-1)).toBeFalsy();
})

// an idea for a test 
// a NaN value should return the right amount given a numeric value
// another idea