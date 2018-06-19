const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/


describe('project-1', () => {

    describe('getBiggest', () => {
        it('should return the bigger of the two given numbers', () => {
            expect(funcs.getBiggest(10, 20)).toBe(20)
            expect(funcs.getBiggest(-3, -5)).toBe(-3);
            expect(funcs.getBiggest('test', -5)).toBe(-5);
            expect(funcs.getBiggest(undefined, -5)).toBe(-5);
        })
    })
});