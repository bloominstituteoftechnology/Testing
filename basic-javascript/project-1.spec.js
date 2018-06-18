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
    describe('lessThanNinety', () => {
        it('returns true when a number is less than 90', () => {
            expect(helpers.lessThanNinety(12)).toBeTruthy();
            expect(helpers.lessThanNinety(37)).toBeTruthy();
            expect(helpers.lessThanNinety(-58)).toBeTruthy();
            expect(helpers.lessThanNinety(0)).toBeTruthy();
            expect(helpers.lessThanNinety(89)).toBeTruthy();
            expect(helpers.lessThanNinety(89.999)).toBeTruthy();
        })
        it('returns false when a string', () => {
            expect(helpers.lessThanNinety('numbers')).toBeFalsy();
            expect(helpers.lessThanNinety('')).toBeTruthy();
        })
        it('returns false when number is 90 or bigger', () => {
            expect(helpers.lessThanNinety(90)).toBeFalsy();
            expect(helpers.lessThanNinety(90.1)).toBeFalsy();
            expect(helpers.lessThanNinety(99)).toBeFalsy();
            expect(helpers.lessThanNinety(9000)).toBeFalsy();
        })
    })
    describe('greaterThanFifty', () => {
        it('returns true when number is greater than 50, false if not', () => {
            expect(helpers.greaterThanFifty(89)).toBeTruthy();
            expect(helpers.greaterThanFifty(50.1)).toBeTruthy();
            expect(helpers.greaterThanFifty(50.000001)).toBeTruthy();
            expect(helpers.greaterThanFifty(49.999)).toBeFalsy();
            expect(helpers.greaterThanFifty(49)).toBeFalsy();
            expect(helpers.greaterThanFifty(-50)).toBeFalsy();
        })  
        it('returns false when a string', () => {
            expect(helpers.lessThanNinety('numbers')).toBeFalsy();
            expect(helpers.lessThanNinety('')).toBeTruthy();
        })
    })
    describe('add', () => {
        it('adds two numbers together', () => {
            expect(helpers.add(1,2)).toBe(3);
            expect(helpers.add(11,2)).toBe(13);
            expect(helpers.add(15+4, 7)).toBe(26);
            expect(helpers.add(-1,2)).toBe(1);
        })
        it('combines two strings', () => {
            expect(helpers.add('one', 'two')).toBe('onetwo');
            expect(helpers.add('', '')).toBe('');
        })
        it('treats flase as 0 and true as 1', () => {
            expect(helpers.add(true, true)).toBe(2);
            expect(helpers.add(true, false)).toBe(1);
            expect(helpers.add(false, false)).toBe(0);
        })
    })
})