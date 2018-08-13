const helpers = require('./project-1');

// start testing!
describe('Project 1 Assessment', () => {
    it('runs the tests', () => {
        expect(true).toBe(true);
    })

    describe('Multiple by Ten', () => {
        it('should multiple the number passed by ten.', () => {
            expect(helpers.multiplyByTen(1)).toBe(10);
            expect(helpers.multiplyByTen(0)).toBe(0);
        })
    })

    describe('Subtract 5', () => {
        it('should subtract 5 from the number passed.', () => {
            expect(helpers.subtractFive(5)).toBe(0);
            expect(helpers.subtractFive(10)).toBe(5);
        })
    })

    describe('Are Same Length', () => {
        it('should return true if lengths of 2 strings are the same.', () => {
            expect(helpers.areSameLength('abc', 'dcf')).toBe(true);
            expect(helpers.areSameLength('1234', 'dcff')).toBe(true);
            expect(helpers.areSameLength('', '')).toBe(true);
        })

        it('should return false if lengths of 2 strings are different.', () => {
            expect(helpers.areSameLength('abc', 'dcfa')).toBe(false);
            expect(helpers.areSameLength('12345', 'dcff')).toBe(false);
            expect(helpers.areSameLength('', 'a')).toBe(false);
        })
    })

    describe('Are Equal', () => {
        it('should return true if 2 values are equal', () => {
            expect(helpers.areEqual('abc', 'abc')).toBe(true);
            expect(helpers.areEqual(5, 5)).toBe(true);
        })

        it('should return false if 2 values are not equal', () => {
            expect(helpers.areEqual('abc', 'abcd')).toBe(false);
            expect(helpers.areEqual(4, 5)).toBe(false);
        })
    })


})