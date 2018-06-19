const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('getBiggest', () => {
    const testFunc = funcs.getBiggest;

    it('returns type number given type numbers', () => {
        const expected = "number";
        const actual = typeof testFunc(5, 7);
        expect(actual).toBe(expected);
    });

    describe('identifies bigger number', () => {
        it('returns 5 given -1, 5', () => {
            const expected = 5;
            const actual = testFunc(-1, 5);
            expect(actual).toBe(expected);
        });
        it('returns -3 given -11, ', () => {
            const expected = -3;
            const actual = testFunc(-3, -11);
            expect(actual).toBe(expected);
        });
    });
});

describe('project-2', () => {
    describe('greeting', () => {
        it('returns type string', () => {
            expect(funcs.greeting('str')).toBe('Hello!');
        });
    });
})


describe('project-2', () => {
    describe('isTenOfFive', () => {
        it('if num is non-numeric', () => {
            expect(funcs.isTenOrFive('str')).toBeFalsy();
            expect(funcs.isTenOrFive(undefined)).toBeFalsy();
        })
        it('num is any number beisde 10 or 5', () => {
            expect(funcs.isTenOrFive(2)).toBeFalsy();
        })
        it(' if num is 5 or 10', () => {})
    })
})


describe('project-2', () => {
    describe('isInRange', () => {
        it('if num is non-numeric', () => {
            expect(funcs.isTenOrFive('str')).toBeFalsy();
            expect(funcs.isTenOrFive(undefined)).toBeFalsy();
        })
        it('if num was greater than 50', () => {
            expect(funcs.isInRange(51)).toBeFalsy();
        })
        it('if num was less than 20', () => {
            expect(funcs.isInRange(19)).toBeFalsy();
        })
        it(' if number is greater than 20 or less than 50', () => {})
    })
})

describe('project-2', () => {
    describe('isInRange', () => {
        it('if num is non-numeric', () => {
            expect(funcs.isTenOrFive('str')).toBeFalsy();
            expect(funcs.isTenOrFive(undefined)).toBeFalsy();
        })
        it('num is not the floor of the given number', () => {
            expect(funcs.isInteger(5.6)).toBeFalsy();
        })
        it('num is the floor of the given integer', () => {})
    })
})

describe('project-2', () => {
    describe('fizzBuzz', () => {
        it('returns a non-numeric value that is the argument given', () => {
            expect(funcs.fizzBuzz('str')).toBe('str');
            expect(funcs.fizzBuzz(2)).toBe(2);
        })
        it('returns a undefined', () => {
            expect(funcs.fizzBuzz(undefined)).toBeUndefined();
        })
        it('returns a undefined', () => {
            expect(funcs.fizzBuzz(undefined)).toBeUndefined();
        })
        it('returns a value of buzz if divisible by 5 ', () => {
            expect(funcs.fizzBuzz(5)).toBe('buzz');
        })
        it('returns a value of buzz if divisible by 3 ', () => {
            expect(funcs.fizzBuzz(3)).toBe('fizz');
        })
        it('num is divisible by 3 or 5, return fizzbuzz', () => {})
    })
})

describe('project-2', () => {
    describe('isPrime', () => {
        it('returns a non-numeric value that is the argument given', () => {
            expect(funcs.isPrime('str')).toBeTruthy();
            expect(funcs.isPrime(2)).toBeTruthy();
        })
        it('if num is 1 or 0', () => {
            expect(funcs.isPrime(0)).toBeFalsy();
        })
        it('if num is divided by num', () => {
            expect(funcs.isPrime(5)).toBeTruthy();
        })
    })
})
