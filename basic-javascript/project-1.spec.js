const helpers = require('./project-1');

// start testing!
describe('project-1', () => {
    describe('multiplyByTen', () => {
        if ('returns NaN when given a non numeric value', () => {
            expect(helpers.multiplyByTen(undefined)).toBeNaN();
            expect(helpers.multiplyByTen('two')).toBeNaN();
            expect(helpers.multiplyByTen(false)).toEqual(0);
            expect(helpers.multiplyByTen(true)).toEqual(10);
        })
            it('should return the given number multiplied be 10', () => {
                //arrange
                const expected = 40;
                //act
                const actual = helpers.multiplyByTen(4, 10);
                //assert
                expect(actual).toEqual(expected);
                expect(helpers.multiplyByTen(2)).toBe(20)
                expect(helpers.multiplyByTen(-2)).toBe(-20)
                expect(helpers.multiplyByTen(0)).toBe(0)
            });
    })

    describe('substactFive', () => {
        it('should substract five from a given number', () => {
            const expected = 13;
            const actual = helpers.subtractFive(18);
            expect(actual).toEqual(expected);
            expect(helpers.subtractFive(-5)).toBe(-10)
            expect(helpers.subtractFive(0)).toBe(-5)
        })
        it('should return NaN when given NaN value', () => {
            expect(helpers.subtractFive(NaN)).toBe(NaN);
            expect(helpers.subtractFive('wer')).toBeNaN();

        })
    })
    describe('areSameLength', () => {
        it('should return true if the   lengths of the strings are the same', () => {
            expect(helpers.areSameLength(['sdfj', 'dfs', 'sdfag', 'sfoee'], 'four')).toBeTruthy();
            expect(helpers.areSameLength('four', [4, 6, 3432, 656])).toBeTruthy()
        })
        it('should return false when given non-string values', () => {
            expect(helpers.areSameLength(NaN, '')).toBe(false);
            expect(helpers.areSameLength('wer', 4)).toBe(false);

        })
    })
    describe('areEqual', () => {
        it('should return true if two values are strictly equivalent', () => {
            expect(helpers.areEqual('four', 'four')).toBeTruthy();
            expect(helpers.areEqual(false, false)).toBeTruthy()
        })
        it('should return false if two values are not strictly equivalent', () => {
            expect(helpers.areEqual(4, '4')).toBeFalsy();
            expect(helpers.areEqual(true, false)).toBeFalsy();

        })
    })
    describe('lessThanNinety', () => {
        it('should return true if the given number is less than 90', () => {
            expect(helpers.lessThanNinety(1)).toBeTruthy();
            expect(helpers.lessThanNinety(0)).toBeTruthy()
        })
        it('should return false the given number is NaN or more than 90', () => {
            expect(helpers.lessThanNinety('4oo')).toBeFalsy();
            expect(helpers.lessThanNinety(90)).toBeFalsy();

        })
    })
    describe('greaterThanFifty', () => {
        it('should return true if the given number is greater than 50', () => {
            expect(helpers.greaterThanFifty(51)).toBeTruthy();
            expect(helpers.greaterThanFifty(100)).toBeTruthy()
        })
        it('should return false the given number is NaN or less than 50', () => {
            expect(helpers.greaterThanFifty('4oo')).toBeFalsy();
            expect(helpers.greaterThanFifty(0)).toBeFalsy();

        })
    })
    describe('add', () => {
        it('should return correct sum of two given numbers', () => {
            expect(helpers.add(51, -2)).toBe(49);
            expect(helpers.add(true, true)).toBe(2)
        })
        it('should return NaN if a value is undefined', () => {
            expect(helpers.add(undefined, undefined)).toBeNaN();
            expect(helpers.add(undefined, 2)).toBeNaN();

        })
    })
    describe('subtract', () => {
        it('should return the correct difference of two given numbers', () => {
            expect(helpers.subtract(51, -2)).toBe(53);
            expect(helpers.subtract(true, true)).toBe(0)
        })
        it('should return NaN if a value is undefined', () => {
            expect(helpers.subtract(undefined, undefined)).toBeNaN();
            expect(helpers.subtract(undefined, 2)).toBeNaN();

        })
    })
    describe('divide', () => {
        it('should return the correct quotient of two given numbers', () => {
            expect(helpers.divide(52, -2)).toBe(-26);
            expect(helpers.divide(45, 9)).toBe(5)
        })
        it('should return NaN if a value is non-numeric', () => {
            expect(helpers.divide(undefined, undefined)).toBeNaN();
            expect(helpers.divide('undefined', 2)).toBeNaN();

        })
    })
    describe('multiply', () => {
        it('should return the correct product of two given numbers', () => {
            expect(helpers.multiply(-2, -2)).toBe(4);
            expect(helpers.multiply(-1, 9)).toBe(-9)
        })
        it('should return NaN if a value is non-numeric', () => {
            expect(helpers.multiply(true, undefined)).toBeNaN();
            expect(helpers.multiply('undefined', 2)).toBeNaN();

        })
    })

    describe('isEven', () => {
        it('should return true for even numbers', () => {
            expect(helpers.isEven(4)).toBeTruthy();
            expect(helpers.isEven(0)).toBeTruthy();
        })
        it('should return false for odd numbers', () => {
            expect(helpers.isEven(3)).toBeFalsy();
            expect(helpers.isEven(-1)).toBeFalsy();
        })
    })
})