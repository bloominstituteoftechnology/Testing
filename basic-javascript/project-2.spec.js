const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('project-2 testing', () => {
    it('find the largest number', () => {
        expect(funcs.getBiggest(10, 8)).toBe(10);
        expect(funcs.getBiggest(8, 12)).toBe(12);
    });
});