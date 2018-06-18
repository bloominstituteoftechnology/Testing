const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Project-2', () => {
    describe('getBiggest', () => {
        it('returns the bigger of two numbers', () => {
            expect(funcs.getBiggest(14, 12)).toBe(14);
            expect(funcs.getBiggest(-40, 18)).toBe(18);
        })
        it('returns the second parameter if they are equal', () => {
            expect(funcs.getBiggest(7, 7)).toBe(7);
        })
    })
})