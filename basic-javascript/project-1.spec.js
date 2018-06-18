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
    describe('areSameLength', () => {
        it('return true when strings are same length, false if not', () => {
            expect(helpers.areSameLength('a lot of words', 'a lot fo words')).toBeTruthy();
            expect(helpers.areSameLength('', '')).toBeTruthy();
            expect(helpers.areSameLength('', 'wagstaff')).toBeFalsy();
            expect(helpers.areSameLength('Bob', 'Joey Pesto')).toBeFalsy();
            expect(helpers.areSameLength('   ', '   ')).toBeTruthy();  
            expect(helpers.areSameLength('   ', ' ')).toBeFalsy();
        })
    })
    describe('areEqual', () => {
        it('returns false when comparing numbers to strings', () => {
            expect(helpers.areEqual(10, '10')).toBeFalsy();
            expect(helpers.areEqual(10, 'ten')).toBeFalsy();
            expect(helpers.areEqual('linda', 56)).toBeFalsy();
        })
        it('returns true when strings are identical, false if not', () => {
            expect(helpers.areEqual('', '')).toBeTruthy();
            expect(helpers.areEqual('WUB-A-LUB-A-DUB-DUB', 'WUB-A-LUB-A-DUB-DUB')).toBeTruthy();
            expect(helpers.areEqual('heLlo', 'hello')).toBeFalsy();
        })
        it('returns true when numbers/evaluations are the same', () => {
            expect(helpers.areEqual(4, 2+2)).toBeTruthy();
            expect(helpers.areEqual(6, 3*2)).toBeTruthy();
            expect(helpers.areEqual(16, 32/2)).toBeTruthy();
            expect(helpers.areEqual(4, 4)).toBeTruthy();
            expect(helpers.areEqual(4, 2+2)).toBeTruthy();
            expect(helpers.areEqual(0, 12)).toBeFalsy();
        })
        it('returns true when truthiness is same', () => {
            expect(helpers.areEqual(false, false)).toBeTruthy();
            expect(helpers.areEqual(true, true)).toBeTruthy();
            expect(helpers.areEqual(true, false)).toBeFalsy();
        })
    })
})