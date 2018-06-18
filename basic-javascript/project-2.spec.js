const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('project-2', () => {
    describe('getBiggest', () => {
        it('returns the biggest number', () => {
            expect(funcs.getBiggest(1, 2)).toBe(2);
            expect(funcs.getBiggest(5033, -30346523)).toBe(5033);
            expect(funcs.getBiggest(undefined, -30)).toBe(-30);
            expect(funcs.getBiggest(true, false)).toBe(true);
        });
    });

    describe('greeting', () => {
        it('returns a greeting in the specified language', () => {
            expect(funcs.greeting('English')).toBe('Hello!');
            expect(funcs.greeting('German')).toBe('Guten Tag!');
            expect(funcs.greeting('Spanish')).toBe('Hola!');
            expect(funcs.greeting('zoop')).toBe('Hello!');
            expect(funcs.greeting(undefined)).toBe('Hello!');
        });
    });

    describe('isTenOrFive', () => {
        it('returns true if the number is ten or five', () => {
            expect(funcs.isTenOrFive(10)).toBe(true);
            expect(funcs.isTenOrFive(5)).toBe(true);
            expect(funcs.isTenOrFive(100)).toBe(false);
            expect(funcs.isTenOrFive('five')).toBe(false);
            expect(funcs.isTenOrFive(undefined)).toBe(false);
        });
    });

    describe('isInRange', () => {
        it('returns true if the number is between 20 and 50', () => {
            expect(funcs.isInRange(10)).toBe(false);
            expect(funcs.isInRange(20)).toBe(false);
            expect(funcs.isInRange(30)).toBe(true);
            expect(funcs.isInRange(50)).toBe(false);
            expect(funcs.isInRange(60)).toBe(false);
            expect(funcs.isInRange('String')).toBe(false);
            expect(funcs.isInRange(true)).toBe(false);
            expect(funcs.isInRange(undefined)).toBe(false);
        });
    });
    
    describe('isInteger', () => {
        it('returns true if provided object is an integer', () => {
            expect(funcs.isInteger(10)).toBe(true);
            expect(funcs.isInteger('String')).toBe(false);
            expect(funcs.isInteger(undefined)).toBe(false);
            expect(funcs.isInteger(true)).toBe(false);
        });
    });

    describe('fizzBuzz', () => {
        it('returns fizz if the number is divisible by 3 and buzz if by 5, returns the number if not by anything', () => {
            expect(funcs.fizzBuzz(10)).toBe('buzz');
            expect(funcs.fizzBuzz(9)).toBe('fizz');
            expect(funcs.fizzBuzz(7)).toBe(7);
            expect(funcs.fizzBuzz(false)).toBe('fizzbuzz');
            expect(funcs.fizzBuzz(true)).toBe(true);
            expect(funcs.fizzBuzz(null)).toBe('fizzbuzz');
            expect(funcs.fizzBuzz(undefined)).toBe(undefined);
        });
    });

    describe('isPrime', () => {
        it('returns true if the number is prime', () => {
            expect(funcs.isPrime(10)).toBe(false);
            expect(funcs.isPrime(3)).toBe(true);
            expect(funcs.isPrime(103)).toBe(true);
            expect(funcs.isPrime(false)).toBe(true);
            expect(funcs.isPrime(true)).toBe(true);
            expect(funcs.isPrime(undefined)).toBe(true);
        });
    });

    describe('returnFirst', () => {
        it('returns the first item in the array', () => {
            expect(funcs.returnFirst([1, 2, 3])).toBe(1);
            expect(funcs.returnFirst(false)).toBe(undefined);
        });
    });

    describe('returnLast', () => {
        it('returns the last item in the array', () => {
            expect(funcs.returnLast([1, 2, 3])).toBe(3);
        });
    });

    describe('getArrayLength', () => {
        it('returns the length of the array', () => {
            expect(funcs.getArrayLength([1, 2, 3])).toBe(3);
            expect(funcs.getArrayLength(4)).toBe(undefined);
            expect(funcs.getArrayLength(true)).toBe(undefined);
        });
    });

    describe('incrementByOne', () => {
        it('returns each item in the array increased by one', () => {
            expect(funcs.incrementByOne([1, 2, 3])).toEqual([2, 3, 4]);
        });
    });

    describe('addItemToArray', () => {
        it('returns the array with the given item added last', () => {
            expect(funcs.addItemToArray([1, 2, 3], 4)).toEqual([1, 2, 3 ,4]);
        });
    });

    describe('addItemToFront', () => {
        it('returns the array with the given item added first', () => {
            expect(funcs.addItemToFront([1, 2, 3], 0)).toEqual([0, 1, 2, 3]);
        });
    });

    describe('wordsToSentence', () => {
        it('returns the array of words combined into one String', () => {
            expect(funcs.wordsToSentence(['This', 'is', 'a', 'sentence'])).toBe('This is a sentence');
            expect(funcs.wordsToSentence(['Oneword'])).toBe('Oneword');
            expect(funcs.wordsToSentence(false)).toBe('');
        });
    });

    describe('contains', () => {
        it('returns true if the given item is in the given arrray', () => {
            expect(funcs.contains([1, 2, 3, 4], 4)).toBe(true);
            expect(funcs.contains([1, 2, 3, 4], 5)).toBe(false);
            expect(funcs.contains([1, 2, 3, 4], true)).toBe(false);
            expect(funcs.contains([1, 2, 3, 4], undefined)).toBe(false);
        });
    });

    describe('addNumbers', () => {
        it('returns all of the numbers added up', () => {
            expect(funcs.addNumbers([1, 2, 3, 4])).toBe(10);
            expect(funcs.addNumbers([1, 2, true, 4])).toBe(8);
            expect(funcs.addNumbers([1, undefined, 3, 4])).toBeNaN();
        });
    });
    
    describe('averageTestScore', () => {
        it('returns the average of all numbers provided', () => {
            expect(funcs.averageTestScore([1, 2, 3, 4])).toBe(2.5);
            expect(funcs.averageTestScore([1, 2, false, 4])).toBe(1.75);
            expect(funcs.averageTestScore([1, undefined, 3, 4])).toBeNaN();
        });
    });

    describe.only('largestNumber', () => {
        it('returns the largest number from the set', () => {
            expect(funcs.largestNumber([1, 2, 4, 4])).toBe(4);
            expect(funcs.largestNumber([1, 2, 20, 4])).toBe(20);
            expect(funcs.largestNumber([true, false])).toBe(true);
            expect(funcs.largestNumber([false, -5])).toBe(0);
        });
    });
});