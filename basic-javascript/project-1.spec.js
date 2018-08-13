const helpers = require('./project-1');

// start testing!
describe('project-1', () => {
    describe.only('multiplyByTen', () => {
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
            });
    })
})

describe('isEven', () => {
    it('should return true for even numbers', () => {
        expect(helpers.isEven(4)).toBeTruthy();
        expect(helpers.isEven(3)).toBeFalse();
        expect(helpers.isEven(0)).toBeTruthy();
        expect(helpers.isEven(-1)).toBeFalsy();
    })
    it('should return false for odd numbers', () => {
        expect(helpers.isEven(3)).toBeFalse();
        expect(helpers.isEven(-1)).toBeFalsy();
    })
})