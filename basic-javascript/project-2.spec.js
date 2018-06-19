const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('project-2', () => {
    describe('getBiggest', () => {
        it('compares two numbers and returns the bigger one', () => {
            expect(funcs.getBiggest(10, 15)).toBe(15);
        });
    });

    describe('greeting', () => {
        it('returns a greeting based on a given language', () => {
            expect(funcs.greeting('Spanish')).toBe('Hola!');
            expect(funcs.greeting('English')).toBe('Hello!');
        });
    });

    describe('isTenOrFive', () => {
        it('returns true if the given number is either 10 or 5', () => {
            expect(funcs.isTenOrFive(10)).toBe(true);
            expect(funcs.isTenOrFive(5)).toBe(true);
            expect(funcs.isTenOrFive(9)).toBe(false);
        });
    });

    describe('isInRange', () => {
        it('returns true if the provided number is less than fifty and greater than twenty', () => {
            expect(funcs.isInRange(20)).toBe(false);
            expect(funcs.isInRange(20)).toBe(false);
            expect(funcs.isInRange(19)).toBe(false);
            expect(funcs.isInRange(51)).toBe(false);
            expect(funcs.isInRange(21)).toBe(true);
            expect(funcs.isInRange(49)).toBe(true);
        });
    });

    describe('isInteger', () => {
        it('returns true if it is a number, false if it is not', () => {
            expect(funcs.isInteger(42)).toBe(true);
            expect(funcs.isInteger('Hello world')).toBe(false);
        });
    });

    describe('fizzBuzz', () => {
        it('returns fizz if num mod 3 is 0', () => {
            expect(funcs.fizzBuzz(10)).toBe('buzz');
            expect(funcs.fizzBuzz(9)).toBe('fizz');
            expect(funcs.fizzBuzz(15)).toBe('fizzbuzz');
        });
        it('returns buzz if num mod 5 is 0', () => {
            expect(funcs.fizzBuzz(10)).toBe('buzz');
            expect(funcs.fizzBuzz(9)).toBe('fizz');
            expect(funcs.fizzBuzz(15)).toBe('fizzbuzz');
        });
        it('returns fizzbuzz if num mod 3 and num mod 5 are 0', () => {
            expect(funcs.fizzBuzz(10)).toBe('buzz');
            expect(funcs.fizzBuzz(9)).toBe('fizz');
            expect(funcs.fizzBuzz(15)).toBe('fizzbuzz');
        });
    });

    describe('isPrime', () => {
        it('returns false if num is less than 0', () => {
            expect(funcs.isPrime(-1)).toEqual(false);
        });
        it('returns false if num is 0 or 1', () => {
            expect(funcs.isPrime(1)).toEqual(false);
            expect(funcs.isPrime(0)).toEqual(false);
        });
        it('returns true if num is prime', () => {
            expect(funcs.isPrime(2)).toEqual(true);
            expect(funcs.isPrime(3)).toEqual(true);
            expect(funcs.isPrime(7)).toEqual(true);
            expect(funcs.isPrime(11)).toEqual(true);         
        });
    });

    describe('returnFirst', () => {
        it('returns the first index of a given array', () => {
            expect(funcs.returnFirst('This is my keyboard')).toBe('T');
        });
    });

    describe('returnLast', () => {
        it('returns the last index of a given array', () => {
            expect(funcs.returnLast('There are many like it, but this one is mine')).toBe('e');
        });
    });

    describe('getArrayLength', () => {
        it('returns the length of the given array', () => {
            expect(funcs.getArrayLength('Hello world')).toBe(11);
        });
    });

    describe('incrementByOne', () => {
        it('increases the given array index by one', () => {
            expect(funcs.incrementByOne([5, 6, 7])).toEqual([6, 7, 8]);
        });
    });

    describe('addItemToArray', () => {
        it('adds an item to the end of the array', () => {
            expect(funcs.addItemToArray(['apple', 'banana', 'orange'], 'berry')).toEqual(['apple', 'banana', 'orange', 'berry']);
        });
    });

    describe('addItemToFront', () => {
        it('adds an item to the beginning of an array', () => {
            expect(funcs.addItemToFront([7, 8, 9], 6)).toEqual([6, 7, 8, 9]);
        });
    });

    describe('wordsToSentence', () => {
        it('adds given words to create a new sentence', () => {
            expect(funcs.wordsToSentence(['Hello', 'world'])).toEqual('Hello world');
        });
    });

    describe('contains', () => {
        it('counts the amount of items in a given array', () => {
            expect(funcs.contains([6, 7, 8, 9], 8)).toBeTruthy();
            expect(funcs.contains([6, 7, 8, 9], 10)).toBeFalsy();
        });
    });

    describe('addNumbers', () => {
        it('continually adds numbers to the given sum', () => {
            expect(funcs.addNumbers([1, 2, 3, 4])).toBe(10);
            expect(funcs.addNumbers([1, 1, 1, 1])).toBe(4);
        });
    });

    describe('averageTestScore', () => {
        it('averages the given test scores', () => {
            expect(funcs.averageTestScore([50, 50, 49, 51, 50])).toEqual(50);
            expect(funcs.averageTestScore([100, 50])).toEqual(75);
        });
    });

    describe('largestNumber', () => {
        it('returns the largest integer in a given array', () => {
            expect(funcs.largestNumber([10, 50, 100, 101])).toBe(101);
        });
    });

});