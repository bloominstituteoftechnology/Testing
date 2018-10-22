const helpers = require('./project-1');

// start testing!

describe('multiplyByTen()', () => {
    it('should multiply provided number by ten', () => {
        const expected = 100;
        const actual = helpers.multiplyByTen(10);
        expect(actual).toEqual(expected);
    });

    it('should return 0 when called with no value', () => {
        const product = helpers.multiplyByTen('');
        expect(product).toBe(0);
    });

    it('should throw error when called with a string', () => {
        expect(() => { helpers.multiplyByTen('five') }).toThrow();
    });
});

describe('subtractFive()', () => {
    it('should subtract provided number by five', () => {
        const expected = 95;
        const actual = helpers.subtractFive(100);
        expect(actual).toEqual(expected);
    });
});

describe('areSameLength()', () => {
    it('should return true of both strings are the same length', () => {
        const expected = true;
        const actual = helpers.areSameLength('hello', 'howdy');
        expect(actual).toEqual(expected);
    });
});

describe('areEqual', () => {
    it('should return true if both variables are deep equal', () => {
        const expected = true;
        const a = 'test123';
        const b = 'test123';
        const actual = helpers.areEqual(a, b);
        expect(actual).toEqual(expected);
    });
});