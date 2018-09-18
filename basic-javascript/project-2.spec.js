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
    describe('greeting', () => {
        const greet = funcs.greeting;

        const result1 = greet();

        it('should return a greeting in specified language', () => {
            expect(result1).toBe('Hello!');
        })
    })
    describe('Ten or Five', () => {
        const tenFive = funcs.isTenOrFive;

        const result1 = tenFive();

        it('should return true if number is either 10 or 5', () => {
            expect(result1).toBe(false);
        })
    })
    describe('Is in Range', () => {
        const inRange = funcs.isInRange;

        const result1 = inRange();

        it('should return true if the number is in range', () => {
            expect(result1).toBe(false);
        })
    })
})