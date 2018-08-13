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
            expect(helpers.subtractFive(NaN)).toBe(NaN)
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