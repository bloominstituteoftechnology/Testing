const helpers = require('./project-1');

// start testing!
describe('Jest', () => {
    test('Jest runs', () => {});
});

describe('multiplyByTen', () => {
    test('1x10=10', () => {
        const result = helpers.multiplyByTen(1);
        expect(result).toBe(10);
    })
});

describe('subtractFive', () => {
    test('5-5=0', () => {
        const result = helpers.subtractFive(5);
        expect(result).toBe(0);
    })
});

describe('areSameLength', () => {
    test('fox=box', () => {
        const result = helpers.areSameLength('fox', 'box');
        expect(result).toBe(true);
    })
});

describe('areEqual', () => {
    test('objectsNotEqual', () => {
        const result = helpers.areEqual({}, {});
        expect(result).toBe(false);
    })
});

describe('lessThanNinety', () => {
    test('89<90', () => {
        const result = helpers.lessThanNinety(89);
        expect(result).toBe(true);
    })
});

describe('greaterThanFifty', () => {
    test('51>50', () => {
        const result = helpers.greaterThanFifty(51);
        expect(result).toBe(true);
    })
});

describe('add', () => {
    test('objectsNotEqual', () => {
        const result = helpers.areEqual({}, {});
        expect(result).toBe(false);
    })
});