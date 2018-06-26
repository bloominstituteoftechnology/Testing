const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('getBiggest', () => {
    it('returns x if bigger than y', () => {
        expect(funcs.getBiggest(20, 10)).toBe(20);
        expect(funcs.getBiggest(-20, -30)).toBe(-20);
    })
    it('returns y if bigger than x', () => {
        expect(funcs.getBiggest(20, 30)).toBe(30);
        expect(funcs.getBiggest(-20, -10)).toBe(-10);
    })
    it('returns either if they are the same number', () => {
        expect(funcs.getBiggest(100, 100)).toBe(100);
    })
    it('returns NaN when given a non numeric value', () => {
        expect(funcs.getBiggest(NaN, NaN)).toBeNaN();
    })
    it('returns undefined if any number is undefined', () => {
        expect(funcs.getBiggest(undefined, undefined)).toBeUndefined()
    })
})

describe('greeting', () => {
    it('returns \'Guten Tag!\' for German', () => {
        expect(funcs.greeting('German')).toBe('Guten Tag!');
    })
    it('returns \'Hola!\' for Spanish', () => {
        expect(funcs.greeting('Spanish')).toBe('Hola!');
    })
    it('returns \'Hello!\' for null or other languages passes in', () => {
        expect(funcs.greeting(null)).toBe('Hello!');
        expect(funcs.greeting('Japanese')).toBe('Hello!');
    })
})

describe('isTenOrFive', () => {
    it('returns TRUE if num is 10 or 5', () => {
        expect(funcs.isTenOrFive(10)).toBeTruthy();
        expect(funcs.isTenOrFive(5)).toBeTruthy();
    })
    it('returns FALSE if num is NOT 10 or 5', () => {
        expect(funcs.isTenOrFive(20)).toBeFalsy();
        expect(funcs.isTenOrFive(7)).toBeFalsy();
    })
    it('returns FALSE if no number passed or NaN', () => {
        expect(funcs.isTenOrFive()).toBeFalsy();
        expect(funcs.isTenOrFive(NaN)).toBeFalsy();
    })
})

describe('isInRange', () => {
    it('returns TRUE if num is in range 20 - 50', () => {
        expect(funcs.isInRange(21)).toBeTruthy();
        expect(funcs.isInRange(49)).toBeTruthy();
        expect(funcs.isInRange(30)).toBeTruthy();
        expect(funcs.isInRange(49.99999)).toBeTruthy();
    })
    it('returns FALSE if num is NOT in range 20 - 50', () => {
        expect(funcs.isInRange(19)).toBeFalsy();
        expect(funcs.isInRange(51)).toBeFalsy();
        expect(funcs.isInRange(-2)).toBeFalsy();
    })
    it('returns FALSE if 0 or NaN or undefined', () => {
        expect(funcs.isInRange(0)).toBeFalsy();
        expect(funcs.isInRange(NaN)).toBeFalsy();
        expect(funcs.isInRange(undefined)).toBeFalsy();
    })
})

describe('isInteger', () => {
    it('returns TRUE if num is interger', () => {
        expect(funcs.isInteger(5)).toBeTruthy();
        expect(funcs.isInteger(0)).toBeTruthy();
        expect(funcs.isInteger(-10)).toBeTruthy();
    })
    it('returns FALSE if num is interger', () => {
        expect(funcs.isInteger(3.14)).toBeFalsy();
        expect(funcs.isInteger(0.99999)).toBeFalsy();
        expect(funcs.isInteger(-4.75)).toBeFalsy();
    })
    it('returns FALSE if NaN or undefined', () => {
        expect(funcs.isInteger(NaN)).toBeFalsy();
        expect(funcs.isInteger(undefined)).toBeFalsy();
    })
})

describe('fizzBuzz', () => {
    it('returns fizzbuzz if num is divided by 3 and 5', () => {
        expect(funcs.fizzBuzz(30)).toBe('fizzbuzz');
    })
    it('returns fizz if num is divided by 3', () => {
        expect(funcs.fizzBuzz(9)).toBe('fizz');
    })
    it('returns fizzbuzz if num is divided by5', () => {
        expect(funcs.fizzBuzz(10)).toBe('buzz');
    })
    it('returns the given number if not divisible by 3 or 5', () => {
        expect(funcs.fizzBuzz(8)).toBe(8);
    })
})

describe('isPrime', () => {
    it('returns TRUE if the number is prime', () => {
        expect(funcs.isPrime(7)).toBeTruthy();
        expect(funcs.isPrime(23)).toBeTruthy();
        expect(funcs.isPrime(2)).toBeTruthy();
    })
    it('returns FALSE if the number is NOT prime', () => {
        expect(funcs.isPrime(15)).toBeFalsy();
        expect(funcs.isPrime(100)).toBeFalsy();
        expect(funcs.isPrime(0)).toBeFalsy();
    })
})

describe('returnFirst', () => {
    it('returns the first item of array', () => {
        expect(funcs.returnFirst([1,2,3])).toBe(1);
        expect(funcs.returnFirst([-5, 100, 3.147])).toBe(-5);
        expect(funcs.returnFirst([0])).toBe(0);
        expect(funcs.returnFirst(['How', 'are', 'you'])).toBe('How');
    })
    it('return undefined if it is empty array', () => {
        expect(funcs.returnFirst([])).toBeUndefined();
    })
})

describe('returnLast', () => {
    it('returns the last item of array', () => {
        expect(funcs.returnLast([1,2,3])).toBe(3);
        expect(funcs.returnLast([-5, 100, 3.147])).toBe(3.147);
        expect(funcs.returnLast([0])).toBe(0);
        expect(funcs.returnLast(['How', 'are', 'you'])).toBe('you');
    })
    it('return undefined if it is empty array', () => {
        expect(funcs.returnLast([])).toBeUndefined();
    })
})

describe('getArrayLength', () => {
    it('returns the length of array', () => {
        expect(funcs.getArrayLength([7, 8, 9])).toBe(3);
        expect(funcs.getArrayLength(['How', 'are', 'you', '?'])).toBe(4);
        expect(funcs.getArrayLength([])).toBe(0);
         //try to use .toHaveLength(3), it said undefined
    })
})



