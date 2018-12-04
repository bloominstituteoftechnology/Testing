const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('project-2', () => {
    // getBiggest
    describe('getBiggest', () => {
        it('returns larger of two numbers', () => {
            expect(funcs.getBiggest(10, 5)).toEqual(10);
        });
    });

    // greeting
    describe('greeting', () => {
        it('returns German or Spanish greeting based on argument, English default', () => {
            expect(funcs.greeting('German')).toEqual('Guten Tag!');
        });
    });

    // isTenOrFive
    describe('isTenOrFive', () => {
        it('returns true if number is 10 or 5', () => {
            expect(funcs.isTenOrFive(5)).toBe(true);
        });
    });

    // isInRange
    describe('isInRange', () => {
        it('true if number between 20 and 50, non-inclusive', () => {
            expect(funcs.isInRange(30)).toBe(true);
        });
    });

    // isInteger
    describe('isInteger', () => {
        it('true if number is integer', () => {
            expect(funcs.isInteger(2)).toBe(true);
        });
    });

    // fizzBuzz
    describe('fizzBuzz', () => {
        it('fizzbuzz if divisible by 15, buzz divisible by 5, fizz divisible by 3', () => {
            expect(funcs.fizzBuzz(15)).toEqual('fizzbuzz');
        });
    });

    // isPrime
    describe('isPrime', () => {
        it('returns true if prime', () => {
            expect(funcs.isPrime(13)).toEqual(true);
        });
    });

    // returnFirst
    describe('returnFirst', () => {
        it('returns first element of array', () => {
            expect(funcs.returnFirst([1, 2, 3])).toEqual(1);
        })
    })

    // returnLast
    describe('returnLast', () => {
        it('returns last element of array', () => {
            expect(funcs.returnLast([1, 2, 3])).toEqual(3);
        });
    });

    // getArrayLength
    describe('getArrayLength', () => {
        it('returns length of array', () => {
            expect(funcs.getArrayLength([1, 2, 3])).toEqual(3);
        });
    });

    // incrementByOne
    describe('incrementByOne', () => {
        it('increases all elements in array by 1', () => {
            expect(funcs.incrementByOne([0, 1, 2])).toEqual([1, 2, 3]);
        });
    });

    // addItemToArray
    describe('addItemToArray', () => {
        it('should add new element to end of array', () => {
            expect(funcs.addItemToArray([1, 2], 3)).toEqual([1, 2, 3]);
        });
    });

    // addItemToFront
    describe('addItemToFront', () => {
        it('should add new element to front of array', () => {
            expect(funcs.addItemToFront([2, 3], 1)).toEqual([1, 2, 3]);
        });
    });

    // wordsToSentence
    describe('wordsToSentence', () => {
        it('should concatenate words in array', () => {
            expect(funcs.wordsToSentence(['I', 'love', 'dogs!'])).toEqual('I love dogs!');
        });
    });

    // contains
    describe('contains', () => {
        it('should return true if item exists in array', () => {
            expect(funcs.contains([1, 2, 3], 2)).toBe(true);
        });
    });

    // addNumbers
    describe('addNumbers', () => {
        it('should sum numbers in array', () => {
            expect(funcs.addNumbers([1, 2, 3])).toEqual(6);
        });
    });

    // averageTestScore
    describe('averageTestScore', () => {
        it('should return average of numbers in array', () => {
            expect(funcs.averageTestScore([1, 2, 3])).toEqual(2);
        });
    });

    // largestNumber
    describe('largestNumber', () => {
        it('should return largest number in array', () => {
            expect(funcs.largestNumber([1, 2, 3])).toEqual(3);
        });
    });
});