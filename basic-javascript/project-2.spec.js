const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Project 2 Functions', () => {
    describe('getBiggest',() => {

        const biggest = funcs.getBiggest;
        const result1 = biggest(2,4);
        const result2 = biggest('2','4');

        it('should check which is largest', () => {
            expect(result1).toBe(4);
            expect(result2).toBe('both values must be numbers');
        })
    })
})