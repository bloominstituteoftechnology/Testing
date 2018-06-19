const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/


describe('project-1', () => {

    describe('getBiggest', () => {
        it('should return the bigger of the two given numbers', () => {
            expect(funcs.getBiggest(10, 20)).toBe(20)
            expect(funcs.getBiggest(-3, -5)).toBe(-3);
            expect(funcs.getBiggest('test', -5)).toBe(-5);
            expect(funcs.getBiggest(undefined, -5)).toBe(-5);
        })
    })

    describe('greeting', () => {
        it('should return a greeting that corresponds to given language', () => {
            expect(funcs.greeting('German')).toBe('Guten Tag!')
            expect(funcs.greeting('Spanish')).toBe('Hola!')
            expect(funcs.greeting(undefined)).toBe('Hello!')
        })
    })

    describe('isTenOrFive', () => {
        it('should return true if given number is 10 or 5', () => {
            expect(funcs.isTenOrFive(5)).toBeTruthy();
            expect(funcs.isTenOrFive(10)).toBeTruthy();
            expect(funcs.isTenOrFive('5')).toBe(undefined)
        })
        it('should return undefined if for non-numeric inputs', () => {
            expect(funcs.isTenOrFive('5')).toBe(undefined)
        })
    })

    describe('isInRange', () => {
        it('should return true if given number is within the range of 20-50', () => {
            expect(funcs.isInRange(55)).toBeFalsy()
            expect(funcs.isInRange(50)).toBeFalsy()
            expect(funcs.isInRange(49)).toBeTruthy()
        })
        it('should return undefined if for non-numeric inputs', () => {
            expect(funcs.isInRange('test')).toBe(undefined)
        })
    })

    describe('isInteger', () => {
        it('should return true if given number is an integer', () => {
            expect(funcs.isInteger(3.5)).toBeFalsy()
            expect(funcs.isInteger(3)).toBeTruthy()

        })
    })

    describe('fizzBuzz', () => {
        it('should return fizzbuzz if num is divisible by 5 & 3, buzz if divisible by 5, fizz if divisible by 3', () => {
            expect(funcs.fizzBuzz(5)).toBe('buzz')
            expect(funcs.fizzBuzz(3)).toBe('fizz')
            expect(funcs.fizzBuzz(15)).toBe('fizzbuzz')
            expect(funcs.fizzBuzz(22)).toBe(22)
        })
    })

    describe('isPrime', () => {
        it('should return false for numbers <= 0 or numbers === 1 and all other non-prime numbers and true for primes', () => {
            expect(funcs.isPrime(0)).toBeFalsy()
            expect(funcs.isPrime(-5)).toBeFalsy()
            expect(funcs.isPrime(1)).toBeFalsy()
            expect(funcs.isPrime(21)).toBeFalsy()
            expect(funcs.isPrime(5)).toBeTruthy()
        })
    })

    describe('returnFirst', () => {
        it('should return first item in the array', () => {
            expect(funcs.returnFirst([0,1,2,3])).toBe(0)
            expect(funcs.returnFirst(['a','b','c','d'])).toBe('a')
            expect(funcs.returnFirst([5,'b',1,'d'])).toBe(5)
            expect(funcs.returnFirst([undefined,'b','c','d'])).toBe(undefined)
            expect(funcs.returnFirst([[1, 2],'b','c','d'])).toEqual([1, 2]) // can not use .toBe (strict equality) with arrays
        })
    })

});