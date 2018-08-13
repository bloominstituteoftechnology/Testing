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
        it('should return true if 2 values are equal.', () => {
            expect(helpers.areEqual('abc', 'abc')).toBe(true);
            expect(helpers.areEqual(5, 5)).toBe(true);
        })

        it('should return false if 2 values are not equal.', () => {
            expect(helpers.areEqual('abc', 'abcd')).toBe(false);
            expect(helpers.areEqual(4, 5)).toBe(false);
        })
    })

    describe('Less Than 90', () => {
        it('should return true if number is less than 90.', () => {
            expect(helpers.lessThanNinety(10)).toBe(true);
            expect(helpers.lessThanNinety(20)).toBe(true);
        })

        it('should return false if number is greater than 90.', () => {
            expect(helpers.lessThanNinety(91)).toBe(false);
            expect(helpers.lessThanNinety(100)).toBe(false);
        })
    })

    describe('Greater Than 50', () => {
        it('should return false if number is less than 50.', () => {
            expect(helpers.greaterThanFifty(10)).toBe(false);
            expect(helpers.greaterThanFifty(20)).toBe(false);
        })

        it('should return true if number is greater than 50.', () => {
            expect(helpers.greaterThanFifty(91)).toBe(true);
            expect(helpers.greaterThanFifty(100)).toBe(true);
        })
    })

    describe('Add', () => {
        it('should return the sum of 2 numbers.', () => {
            expect(helpers.add(1,2)).toBe(3);
            expect(helpers.add(-1,2)).toBe(1);
            expect(helpers.add(-1,-1)).toBe(-2);
        })
    })

    describe('Subtract', () => {
        it('should return the different of 2 numbers.', () => {
            expect(helpers.subtract(1,2)).toBe(-1);
            expect(helpers.subtract(-1,2)).toBe(-3);
            expect(helpers.subtract(-1,-1)).toBe(0);
        })
    })

    // describe('Add', () => {
    //     it('should return the sum of 2 number.', () => {
    //         expect(helpers.add(1,2)).toBe(3);
    //         expect(helpers.add(-1,2)).toBe(1);
    //         expect(helpers.add(-1,-1)).toBe(-2);
    //     })
    // })

    // describe('Add', () => {
    //     it('should return the sum of 2 number.', () => {
    //         expect(helpers.add(1,2)).toBe(3);
    //         expect(helpers.add(-1,2)).toBe(1);
    //         expect(helpers.add(-1,-1)).toBe(-2);
    //     })
    // })
})