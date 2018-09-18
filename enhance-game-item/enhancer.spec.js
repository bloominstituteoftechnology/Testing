const funcs = require('./enhancer.js');

const defaultItem = { level: 0, durability: 100, failCount: 0 };


describe('enhance function', () => {
    it('should increase level by 1', () => {
        const item = defaultItem;

        const actual = funcs.enhance(item); //return an item

        expect(actual.level).toBe(1);
        expect(enhancer.enhance(actual).level).toBe(2);
        expect(enhancer.enhance(actual).level).toBe(3);
    })
});

describe('fail function', () => {
    it('should decrease durabilaty by 10 on failure', () => {
        const item = defaultItem;

        const actual = funcs.fail(item); //return an item

        expect(actual.durabilaty).toBe(90);
    })
});