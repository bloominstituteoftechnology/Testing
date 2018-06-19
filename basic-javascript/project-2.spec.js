const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Project-2', () => {
    describe('getBiggest', () => {
        it('returns the bigger of two numbers', () => {
            expect(funcs.getBiggest(14, 12)).toBe(14);
            expect(funcs.getBiggest(-40, 18)).toBe(18);
        })
        it('returns the second parameter if they are equal', () => {
            expect(funcs.getBiggest(7, 7)).toBe(7);
        })
        it.skip('', () => {
            expect(funcs.getBiggest('words', 'wordsssss')).toBeNaN();
        })
    })
    describe('greeting', () => {
        it('returns greeting in given language', () => {
            expect(funcs.greeting('German')).toBe('Guten Tag!');
            expect(funcs.greeting('Spanish')).toBe('Hola!');
            expect(funcs.greeting()).toBe('Hello!');
        })
    })
    describe('isTenOrFive', () => {
        it('returns true when 10 or 5, else false', () => {
          expect(funcs.isTenOrFive(10)).toBe(true);
          expect(funcs.isTenOrFive(5)).toBe(true);
          expect(funcs.isTenOrFive(56)).toBe(false);
        })
    })
    describe('isInRange', () => {
        it('returns true when given number between 20 and 50', () => {
          expect(funcs.isInRange(30)).toBe(true);
          expect(funcs.isInRange(36)).toBe(true);
          expect(funcs.isInRange(20)).toBe(false);
          expect(funcs.isInRange(-30)).toBe(false);
          expect(funcs.isInRange(50)).toBe(false);
          expect(funcs.isInRange(5)).toBe(false);
        })
    })
    describe('isInteger', () => {
        it('returns true if given whole number', () => {
            expect(funcs.isInteger(4)).toBeTruthy();
            expect(funcs.isInteger(100029374)).toBeTruthy();
            expect(funcs.isInteger(4.0205)).toBeFalsy();
            expect(funcs.isInteger(4.000000000001)).toBeFalsy();
        })
    })
    describe('fizzbuzz', () => {
        it('returns fizzbuzz if divisible by 3 and 5', () => {
            expect(funcs.fizzBuzz(15)).toBe('fizzbuzz');
            expect(funcs.fizzBuzz(30)).toBe('fizzbuzz');
        })
        it('return fizz if divisible by 3 and not 5', () => {
            expect(funcs.fizzBuzz(9)).toBe('fizz');
            expect(funcs.fizzBuzz(21)).toBe('fizz');
        })
        it('returns buzz if divisble by 5 and not 3', () => {
            expect(funcs.fizzBuzz(10)).toBe('buzz');
        })
    })
    describe('isPrime', () => {
        it('return false if negative number', () => {
            expect(funcs.isPrime(-7)).toBeFalsy();
        })
        it('returns false if 1 or 0', () => {
            expect(funcs.isPrime(0)).toBeFalsy();
            expect(funcs.isPrime(1)).toBeFalsy();
        })
        it('returns false if not prime', () => {
            expect(funcs.isPrime(4)).toBeFalsy();
            expect(funcs.isPrime(9)).toBeFalsy();
            expect(funcs.isPrime(10)).toBeFalsy();
        })
        it('returns true if prime', () => {
            expect(funcs.isPrime(7)).toBeTruthy();
            expect(funcs.isPrime(19)).toBeTruthy();
        })
    })
    describe('returnFirst', () => {
        it('returns the first item in array', () => {
          expect(funcs.returnFirst(['words', 'stuff', 'other'])).toBe('words');
        })
    })
    describe('retrunLast', () => {
        it('returns last item in array', () => {
            expect(funcs.returnLast(['words', 'stuff', 'other'])).toBe('other');
        })
    })
    describe('getArrayLength', () => {
        it('returns the length of an array', () => {
          expect(funcs.getArrayLength(['words', 'stuff', 'other'])).toBe(3);
        })
    })
    describe('incrementByOne', () => {
        it('returns array with values increased by one', () => {
          expect(funcs.incrementByOne([0, 1, 2])).toEqual([1, 2, 3]);
        })
    })
    describe('addItemToArray', () => {
        it('should add given to end of array', () => {
          expect(funcs.addItemToArray(['bob', 'linda', 'tina', 'gene'], 'louise')).toEqual(['bob', 'linda', 'tina', 'gene', 'louise']);
        })
    })
    describe('addItemtoFront', () => {
        it('adds given item to beginning of array', () => {
          expect(funcs.addItemToFront([1,2,3], 0)).toEqual([0,1,2,3]);
        })
    })
    describe('wordsToSentence', () => {
        it('it creates a sentence from an array of words', () => {
          expect(funcs.wordsToSentence(['why', 'hello', 'there'])).toBe('why hello there');
        })
    })
    describe('contains', () => {
        it('counts the number of times an item appears in array', () => {
            expect(funcs.contains([1, 2, 3, 4, 5], 5)).toBe(true);
            expect(funcs.contains([1, 2, 3, 4, 5], 9)).toBe(false);
        })
    })
    describe('addNumbers', () => {
        it('adds numbers in array', () => {
          expect(funcs.addNumbers([1,7,8,4])).toEqual(20);
        })
    })
    describe('averageTestScores', () => {
        it('returns the average of numbers in an array', () => {
          expect(funcs.averageTestScore([0, 100])).toEqual(50);
        })
    })
    describe('largestNumber', () => {
        it('returns the largest number in an array', () => {
          expect(funcs.largestNumber([17, 26, 97, 1, 56])).toEqual(97);
        })
    })
})