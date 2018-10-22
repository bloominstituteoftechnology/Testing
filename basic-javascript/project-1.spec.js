const helpers = require('./project-1');

// start testing!
describe('project-1.js', () => {
    describe('multiplyByTen()', () => {
        it('Should multiply the number by 10.', () => {
            const actual = helpers.multiplyByTen(4);
            const expected = 40;
            expect(actual).toEqual(expected);
        });
        it('Should throw error when called with no value.', () => {
            const actual = () => helpers.multiplyByTen();
            expect(actual).toThrow();
        });
        it('Should throw error when called with a string', () => {
            const actual = () => helpers.multiplyByTen('25');
            expect(actual).toThrow();
        });
    });
    describe('subtractFive()', () => {
        it('Should subtract the number by 5.', () => {
            const actual = helpers.subtractFive(4);
            const expected = -1;
            expect(actual).toEqual(expected);
        });
        it('Should throw error when called with no value.', () => {
            const actual = () => helpers.multiplyByTen();
            expect(actual).toThrow();
        });
        it('Should throw error when called with a string', () => {
            const actual = () => helpers.multiplyByTen('25');
            expect(actual).toThrow();
        });
    });
    describe('areSameLength()', () =>{
        const apple = 'apple';
        const guava = 'guava';
        const pear = 'pear';
        it('Should return true if called with 2 strings of same length', () => {
            const actual = helpers.areSameLength(apple, guava);
            const expected = true;
            expect(actual).toBe(expected);
        });
    });
});