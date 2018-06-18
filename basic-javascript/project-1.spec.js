const helpers = require('./project-1');

// start testing!
describe.only('project-1', () => {
    describe('multiplyByTen', () => {
        it('returns NaN when there is a non numerical value', () => {
            expect(helpers.multiplyByTen(undefined)).toBeNaN();
            expect(helpers.multiplyByTen('two')).toBeNaN();
            expect(helpers.multiplyByTen(false)).toEqual(0);
            expect(helpers.multiplyByTen(true)).toEqual(10);
        })
        it('should return the given number multiplied by 10', () => {
        })
    })
})

describe.only('project-1', () => {
    describe('subtractFive', () => {
        it('returns NaN when there is a non numerical value', () => {
            expect(helpers.subtractFive(undefined)).toBeNaN();
            expect(helpers.subtractFive('five')).toBeNaN();
            expect(helpers.subtractFive(false)).toEqual(-5);
            expect(helpers.subtractFive(true)).toEqual(-4);
        })
        it('should return the given number subtracted by 5', () => {
        })
    })
})

describe.only('project-1', () => {
    describe('areSameLength', () => {
        it('returns NaN when there is a non numerical value', () => {
            expect(helpers.areSameLength(1, 13)).toBeTruthy();
            expect(helpers.areSameLength('1', 'Aa')).toBeFalsy();
            expect(helpers.areSameLength('1', '1')).toBeTruthy();
        })
        it('should return the same length', () => {
        })
    })
})

describe.only('project-1', () => {
    describe('areEqual', () => {
        it('returns NaN when there is a non numerical value', () => {
            expect(helpers.areEqual(undefined, undefined)).toBeTruthy();
            expect(helpers.areEqual(1, 3)).toBeFalsy();
            expect(helpers.areEqual('x', 'y')).toBeFalsy();
            expect(helpers.areEqual('x', 'x')).toBeTruthy();
        })
        it('should return the given number that are equal', () => {
        })
    })
})

describe.only('project-1', () => {
    describe('lessThanNinety', () => {
        it('returns NaN when there is a non numerical value', () => {
            expect(helpers.lessThanNinety(undefined)).toBeNaN();
            expect(helpers.lessThanNinety('five')).toBeNaN();
            expect(helpers.lessThanNinety(false)).toEqual(-5);
            expect(helpers.lessThanNinety(true)).toEqual(-4);
        })
        it('should return the given number subtracted by 5', () => {
        })
    })
})