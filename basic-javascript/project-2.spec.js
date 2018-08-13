const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('getBiggest(x, y)', () => {
    it('should return the larger of two integers', () => {
        expect(funcs.getBiggest(38, 29)).toBe(38);
        expect(funcs.getBiggest(3, 29)).toBe(29);
        expect(funcs.getBiggest(38, 38)).toBe(38);
    })
})

describe('greeting(language)', () => {
    it('should return \'Guten Tag!\' if German', () => {
        expect(funcs.greeting('German')).toBe('Guten Tag!');
    })
    it('should return \'Hola!\' if Spanish', () => {
        expect(funcs.greeting('Spanish')).toBe('Hola!');
    })
    it('should return \'Hello!\' if default', () => {
        expect(funcs.greeting()).toBe('Hello!');
    })
})

describe('isTenOrFive(num)', () => {
    it('should return true if num equals five or ten', () => {
        expect(funcs.isTenOrFive(5)).toBe(true);
        expect(funcs.isTenOrFive(10)).toBe(true);
        expect(funcs.isTenOrFive(7)).toBe(false);
        expect(funcs.isTenOrFive(undefined)).toBe(false);
    })
})

describe('isInRange(num)', () => {
    it('should return true if num is greater than 20 and less than 50', () => {
        expect(funcs.isInRange(45)).toBe(true);
        expect(funcs.isInRange(10)).toBe(false);
        expect(funcs.isInRange(20)).toBe(false);
        expect(funcs.isInRange(undefined)).toBe(false);
    })
})

describe('isInteger(num)', () => {
    it('should return true if num an integer', () => {
        expect(funcs.isInteger(45)).toBe(true);
        expect(funcs.isInteger(10.25)).toBe(false);
        expect(funcs.isInRange(undefined)).toBe(false);
    })
})

describe('fizzBuzz(num)', () => {
    it('should return \'fizz\' if num is divisible by 3', () => {
        expect(funcs.fizzBuzz(12)).toBe('fizz');
    })
    it('should return \'buzz\' if num is divisible by 5', () => {
        expect(funcs.fizzBuzz(10)).toBe('buzz');
    })
    it('should return \'fizzbuzz\' if num is divisible by 3 and 5', () => {
        expect(funcs.fizzBuzz(15)).toBe('fizzbuzz');
    })
    it('should return num if num is not divisible by 3 or 5', () => {
        expect(funcs.fizzBuzz(14)).toBe(14);
    })
})

describe('isPrime(num)', () => {
    it('should return true if num is a prime number', () => {
        expect(funcs.isPrime(11)).toBe(true);
        expect(funcs.isPrime(10)).toBe(false);
    })
    it('should return false if num is less than or equal to 1', () => {
        expect(funcs.isPrime(1)).toBe(false);
        expect(funcs.isPrime(0)).toBe(false);
        expect(funcs.isPrime(-10)).toBe(false);
    })
})

describe('returnFirst(arr)', () => {
    it('should return the first item in an array', () => {
        expect(funcs.returnFirst([3, 4, 3, 8])).toBe(3);
    })
})

describe('returnLast(arr)', () => {
    it('should return the last item in an array', () => {
        expect(funcs.returnLast([3, 4, 3, 8])).toBe(8);
    })
})

describe('getArrayLength(arr)', () => {
    it('should return the number of items in an array', () => {
        expect(funcs.getArrayLength([3, 4, 3, 8])).toBe(4);
    })
})

describe('incrementByOne(arr)', () => {
    it('should return array with each number incremented by 1', () => {
        expect(funcs.incrementByOne([1, 2, 3])).toEqual([2, 3, 4]);
    })
})

describe('addItemToArray(arr, item)', () => {
    it('should return array with item added', () => {
        expect(funcs.addItemToArray([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4, 5]);
    })
})

describe('addItemToFront(arr, item)', () => {
    it('should return array with item added at index 0', () => {
        expect(funcs.addItemToFront([1, 2, 3, 4], 5)).toEqual([5, 1, 2, 3, 4]);
    })
})

describe('wordsToSentence(words)', () => {
    it('should return new string with words added', () => {
        expect(funcs.wordsToSentence(['hello', 'world'])).toEqual('hello world');
    })
})

describe('contains(arr, item)', () => {
    it('should return true if the array contains the item', () => {
        expect(funcs.contains([1, 2, 3, 4], 5)).toEqual(false);
        expect(funcs.contains([1, 2, 3, 4], 3)).toEqual(true);
        expect(funcs.contains(['a', 'b', 'c', 'd'], 'c')).toEqual(true);
    })
})

describe('addNumbers(numbers)', () => {
    it('should return the sum of all numbers in an array', () => {
        expect(funcs.addNumbers([1, 2, 3, 4])).toBe(10);
    })
})

describe('averageTestScore(textScores)', () => {
    it('should return the average of an array of numbers', () => {
        expect(funcs.averageTestScore([81, 92, 73, 84])).toBe(82.5);
    })
})

describe('largestNumber(numbers)', () => {
    it('should return the largest in an array of numbers', () => {
        expect(funcs.largestNumber([81, 92, 73, 84])).toBe(92);
    })
})