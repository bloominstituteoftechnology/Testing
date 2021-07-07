const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('project-2', () => {
    describe('getBiggest', () => {
        it ('returns largest among two numbers', () => {
            expect(funcs.getBiggest(10, 3)).toBe(10);
            expect(funcs.getBiggest(1, 100)).toEqual(100);
        });
    });

    describe('isPrime', () => {
        it ('will return true if the number is prime', () => {
            expect(funcs.isPrime(13)).toBe(true);
        });
    });

    describe('returnFalse', () => {
        it ('will return the first element in an array', () => {
            expect(funcs.returnFirst([0,1,2,3])).toBe(0);
        });
    });

    describe('incrementByOne', () => {
        it ('will return array for each element that is incremented', () => {
            expect(funcs.incrementByOne([1,2,3])).toEqual([2,3,4]);
        });

    });
});
