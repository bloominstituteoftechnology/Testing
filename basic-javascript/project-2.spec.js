const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('project-2', () => {
    describe('getBiggest', () => {
        it('returns NaN when given a non numeric value', () => {
            expect(funcs.getBiggest(0, 4)).toBe(4);
            expect(funcs.getBiggest(4, 4)).toBe(4);
        });

        it('should return the bigger number', () => {});
    });
});
