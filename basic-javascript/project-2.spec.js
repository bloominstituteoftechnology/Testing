const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('getBiggest()', () => {
    test('x bigger than y', () => {
        expect(funcs.getBiggest(10, 9)).toBe(10)
    });
    test('y bigger than x', () => {
        expect(funcs.getBiggest(1, 3)).toBe(3)
    });
})