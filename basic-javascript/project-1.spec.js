const helpers = require('./project-1');

// start testing!

describe('project-1', () => {
    describe('multplyByTen', () => {
        it('returns NaN when given a non-numeric value', () => {
            expect(helpers.multiplyByTen(undefined)).toBeNaN();
            expect(helpers.multiplyByTen('two')).toBeNaN();
        });
        it('should return the given number multiplied by 10', () => {});
    });
});

describe('subtractFive', () => {
    it('returns NaN when given a non-numeric value', () => {
        expect(helpers.subtractFive(undefined)).toBeNaN();
        expect(helpers.subtractFive('seven')).toBeNaN();
        expect(helpers.subtractFive(false)).toBeNaN();
        expect(helpers.subtractFive(true)).toBeNaN();
    });
    it('should return the given number subtracted by 5', () => {});
});

describe('areSameLength', () => {
    it('returns true when string1.length equals string2.length', () => {
        expect(helpers.areSameLength('test', 'test')).toBeTruthy();
        expect(helpers.areSameLength('tests', 'test')).toBeFalsy();
    });
});

describe('areEqual', () => {
    it('should return true if numbers are equal', () => {
        expect(helpers.areEqual(4, 4)).toBe(true);
    })
})

describe('isEven', () => {
    it.only('should return true for even numbers', () => {
        expect(helpers.isEven(4)).toBeTruthy();
        expect(helpers.isEven(0)).toBeTruthy();
    });
    it.only('should return false for odd numbers', () => {
        expect(helpers.isEven(3)).toBeFalsy();
        expect(helpers.isEven(-1)).toBeFalsy();
    });
});