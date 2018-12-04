const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('project-2.js', () => {
    
    //TEST FOR FUNCTION ** getBiggest **
    describe('getBiggest', () => {
        it('should return biggest number out of two numbers', () => {
            const expected = 20;
            const actual = funcs.getBiggest(10, 20);
            expect(actual).toBe(expected);
        });
        
        it('should return null when any of arguments are not number', () => {
            expect(funcs.getBiggest({}, 'ty')).toBe(null)
            expect(funcs.getBiggest('s', [])).toBe(null)
            expect(funcs.getBiggest('s', 'ty')).toBe(null)
        })

        it('should return undefined when any of arguments is not entered..', () => {
            expect(funcs.getBiggest()).toBe(undefined);
            expect(funcs.getBiggest(20)).toBe(undefined)
        })
    });

    //TEST FOR FUNCTION ** greeting **
    describe('greeting', () => {
        it('should greet according to language entered..', () => {
            const expected = 'Guten Tag!';
            const actual = funcs.greeting('German');
            expect(actual).toBe(expected);
        });

        it('should return only Hello! if entered other language than GERMAN and SPANISH', () => {
            expect(funcs.greeting('English')).toBe('Hello!')
        });
    });

    //TEST FOR FUNCTION ** isTenOrFive **
    describe('isTenOrFive', () => {
        it('should return true if number 5 or 10', () => {
            const expected = true;
            const actual = funcs.isTenOrFive(10);
            expect(actual).toBe(expected);
        });
        
        it('should return false if number is not 5 or 10', () => {
            expect(funcs.isTenOrFive(9)).toBe(false);
        })

        it('should return undefined when any of arguments is not entered..', () => {
            expect(funcs.isTenOrFive()).toBe(undefined);
        })
    });

    //TEST FOR FUNCTION ** isInRange **
    describe('isInRange', () => {
        it('should return true if number < 50 ond > 20', () => {
            const expected = true;
            const actual = funcs.isInRange(40);
            expect(actual).toBe(expected);
        });
        
        it('should return false if number is not <50 and > 20', () => {
            expect(funcs.isInRange(80)).toBe(false);
        })

        it('should return undefined when any of arguments is not entered..', () => {
            expect(funcs.isInRange()).toBe(undefined);
        })
    });

    //TEST FOR FUNCTION ** isInRange **
    describe('isInteger', () => {
        it('should return true if number is integer', () => {
            const expected = true;
            const actual = funcs.isInteger(40);
            expect(actual).toBe(expected);
        });
        
        it('should return false if number is not integer', () => {
            expect(funcs.isInteger(80.5)).toBe(false);
        })

        it('should return undefined when any of arguments is not entered..', () => {
            expect(funcs.isInteger()).toBe(undefined);
        })
    });

    //TEST FOR FUNCTION ** fizzBuzz **
    describe('fizzBuzz', () => {
        it('should return fizzbuzz if number is divisible by 5 and 3', () => {
            const expected = 'fizzbuzz';
            const actual = funcs.fizzBuzz(15);
            expect(actual).toBe(expected);
        });
        
        it('should return buzz if number is divisible by 5 only', () => {
            expect(funcs.fizzBuzz(50)).toBe('buzz');
        })

        it('should return buzz if number is divisible by 3 only', () => {
            expect(funcs.fizzBuzz(6)).toBe('fizz');
        })
    });

    //TEST FOR FUNCTION ** isPrime **
    describe('isInteger', () => {
        it('should return true if number is prime', () => {
            const expected = true;
            const actual = funcs.isPrime(17);
            expect(actual).toBe(expected);
        });
        
        it('should return false if number is not prime', () => {
            expect(funcs.isPrime(80)).toBe(false);
        })

        it('should return false if number is less than 2', () => {
            expect(funcs.isPrime(0)).toBe(false);
            expect(funcs.isPrime(1)).toBe(false);
            //expect(funcs.isPrime(0.3)).toBe(false);
        })
    });
//returnFirst


});

