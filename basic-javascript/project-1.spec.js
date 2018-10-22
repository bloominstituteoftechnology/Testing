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