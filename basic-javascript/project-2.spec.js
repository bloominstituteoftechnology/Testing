const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('project-2', () => {
    describe('getBiggest function', () => {
        it('If x is bigger than y, it should return x', () => {
            expect(funcs.getBiggest(5,1)).toBe(5);
        })
        it('If y is bigger than x, it should return y', () => {
            expect(funcs.getBiggest(1,5)).toBe(5);
        })
        it('If x is equal to y, it should return y', () => {
            expect(funcs.getBiggest(5,5)).toBe(5);
        })
        it('If x or y is NaN, it shold return null', () => {
            expect(funcs.getBiggest('5',5)).toBe(null);
        })
    })
})