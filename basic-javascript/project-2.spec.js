// {
//     getBiggest,
//     greeting,
//     isTenOrFive,
//     isInRange,
//     isInteger,
//     fizzBuzz,
//     isPrime,
//     returnFirst,
//     returnLast,
//     getArrayLength,
//     incrementByOne,
//     addItemToArray,
//     addItemToFront,
//     wordsToSentence,
//     contains,
//     addNumbers,
//     averageTestScore,
//     largestNumber
// }

const funcs = require('./project-2');

describe('project-2', () => {
    describe('getBiggest', () => {
        it ('returns largest of two numbers', () => {
            expect(funcs.getBiggest(5, 2)).toBe(5);
            expect(funcs.getBiggest(1, 200)).toEqual(200);
        })
        it ('returns second number if they are equal', () => {
            expect(funcs.getBiggest(4, '4')).toBe('4');
        })
        it ('returns the second arg if values are undefined', () => {
            expect(funcs.getBiggest(undefined, undefined)).toBe(undefined);
            expect(funcs.getBiggest(undefined, null)).toBe(null);
            expect(funcs.getBiggest(undefined, null)).not.toBe(undefined);
        })
    })

    describe('isPrime', () => {
        it ('returns true if number is prime', () => {
            expect(funcs.isPrime(7)).toBe(true);
            expect(funcs.isPrime(11)).toBeTruthy();
            expect(funcs.isPrime(2)).toBeTruthy();
        })
        it ('returns false if number is not prime', () => {
            expect(funcs.isPrime(0)).toBeFalsy();
            expect(funcs.isPrime(9)).toEqual(false);
        })
    })

    describe('returnFalse', () => {
        it ('returns the first element in an array', () => {
            expect(funcs.returnFirst([0,1,2,3])).toBe(0);
            expect(funcs.returnFirst([null, NaN, undefined])).toBe(null);
            expect(funcs.returnFirst(['z','x','y'])).toBe('z');
        })
    })

    describe('incrementByOne', () => {
        it ('returns the array with each element incremented', () => {
            expect(funcs.incrementByOne([1,2,3])).toEqual([2,3,4]);
            expect(funcs.incrementByOne(['1','2','3'])).toEqual([2,3,4]);
        })
        it ('returns NaN if given non-numeric inputs', () => {
            expect(funcs.incrementByOne(['one', 'two', 'three'])).toEqual([NaN,NaN,NaN]);
        })
    })
})
