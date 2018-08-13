const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('gets the biggest number', () => {
    it('returns the largest or two ints', () => {
        expect(funcs.getBiggest(10,5)).toEqual(10)
    })
    it('Accounts for floating point values', () => {
        expect(funcs.getBiggest(10.2,10.3)).toEqual(10.3)
    })
    it('handles undefined values', () => {
        expect(funcs.getBiggest(undefined, 5)).toEqual(undefined)
        expect(funcs.getBiggest(10, undefined)).toEqual(undefined)
    })
})

describe('Offers a greeting in Spanish, German or default (English)', () => {
    it('Hello in German', () => {
        expect(funcs.greeting('German')).toMatch('Guten Tag!')
    })
    it('Hello in Spanish', () => {
        expect(funcs.greeting('Spanish')).toMatch('Hola')
    })
    it('handles undefined values', () => {
        expect(funcs.greeting(undefined)).toMatch('Hello!')
    })
})

describe('Checks if num is 10 or 5', () => {
    it('Checks for 5', () => {
        expect(funcs.isTenOrFive(5)).toBeTruthy()
        expect(funcs.isTenOrFive(2)).toBeFalsy()
    })
    it('Checks for 10', () => {
        expect(funcs.isTenOrFive(10)).toBeTruthy()
        expect(funcs.isTenOrFive(2)).toBeFalsy()
    })
    it('handles undefined values', () => {
        expect(funcs.isTenOrFive(undefined)).toBeFalsy()
    })
})

describe('Checks if number is in range from 20 to 50', () => {
    it('Checks for less than or equal to 20', () => {
        expect(funcs.isInRange(20)).toBeFalsy()
        expect(funcs.isInRange(10)).toBeFalsy()
    })
    it('Checks greater or equal to 50', () => {
        expect(funcs.isInRange(50)).toBeFalsy()
        expect(funcs.isInRange(100)).toBeFalsy()
    })
    it('Check within range', () => {
        expect(funcs.isInRange(21)).toBeTruthy()
        expect(funcs.isInRange(49)).toBeTruthy()
    })
})

describe('Checks if number is an integer', () => {
    it('returns true if integer', () => {
        expect(funcs.isInteger(10)).toBeTruthy()
        expect(funcs.isInteger(10)).toBeTruthy()
    })
    it('returns false if float', () => {
        expect(funcs.isInteger(50.2)).toBeFalsy()
        expect(funcs.isInteger(100.5)).toBeFalsy()
    })
    it('Returns falsy on string input', () => {
        expect(funcs.isInteger('hello')).toBeFalsy()
    })
})

describe('Fizzes and Buzzes (checks divisible by 3, 5 or both)', () => {
    it('Divisible by 3', () => {
        expect(funcs.fizzBuzz(3)).toMatch('fizz')
        expect(funcs.fizzBuzz(9)).toMatch('fizz')
    })
    it('divisible by 5', () => {
        expect(funcs.fizzBuzz(100)).toMatch('buzz')
        expect(funcs.fizzBuzz(5)).toMatch('buzz')
    })
    it('divisible by both 5 and 3', () => {
        expect(funcs.fizzBuzz(15)).toMatch('fizzbuzz')
        expect(funcs.fizzBuzz(30)).toMatch('fizzbuzz')
    })
})

describe('Checks if a number is prime', () => {
    it('Returns true if prime number', () => {
        expect(funcs.isPrime(17)).toBeTruthy()
        expect(funcs.isPrime(61)).toBeTruthy()
    })
    it('returns false if not', () => {
        expect(funcs.isPrime(100)).toBeFalsy()
        expect(funcs.isPrime(25)).toBeFalsy()
    })
    it('Returns falsy on string input', () => {
        expect(funcs.isPrime('hello')).toBeFalsy()
    })
})

