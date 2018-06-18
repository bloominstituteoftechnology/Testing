const helpers = require('./project-1');

// start testing!

describe('project-1', () => {
    describe('multiplyByTen', () => {
        it('return NaN when given a non-numeric value', () => {
            expect(helpers.multiplyByTen(undefined)).toBeNaN();
            expect(helpers.multiplyByTen('words')).toBeNaN();
        })
        it('returns the number multiplied by 10', () => {
            expect(helpers.multiplyByTen(2)).toBe(20);
            expect(helpers.multiplyByTen(1)).toBe(10);
            expect(helpers.multiplyByTen(0)).toBe(0);
            expect(helpers.multiplyByTen(10)).toBe(100);
            expect(helpers.multiplyByTen(2.5)).toBe(25);
            expect(helpers.multiplyByTen(0.001)).toBe(0.01);
        })
    })
    describe('subtractFive', () => {
        it('return NaN when given a non-numeric value', () => {
            expect(helpers.subtractFive(undefined)).toBeNaN();
            expect(helpers.subtractFive('words')).toBeNaN();
        })
        it('subtracts 5 from a number', () => {
            expect(helpers.subtractFive(5)).toBe(0);
            expect(helpers.subtractFive(1)).toBe(-4);
            expect(helpers.subtractFive(26)).toBe(21);
        })
    })
})