const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('jest', () => {
    test('Jest runs', () => {

    });
});

describe('funcs', () => {
    // beforeEach(() => {
    //     console.log('running');
    // })

    describe('getBiggest', () => {
        test('get the biggest number', () => {
            expect(funcs.getBiggest(5, 3)).toBe(5);
            expect(funcs.getBiggest(8, 8)).toBe(8);
            expect(funcs.getBiggest(2, 4)).toBe(4);
        });
    })

    describe('greeting', () => {
        test('get a greeting in different language', () => {
            expect(funcs.greeting('German')).toBe('Guten Tag!');
            expect(funcs.greeting('Spanish')).toBe('Hola!');
            expect(funcs.greeting('English')).toBe('Hello!');
        });
    })

    describe('isTenOrFive', () => {
        test('is it 10 or 5', () => {
            expect(funcs.isTenOrFive(5)).toBeTruthy();

        });
    })

    describe('isInRange', () => {
        test('is it in range', () => {
            expect(funcs.isInRange(30)).toBeTruthy();

        });
    })

    describe('isInteger', () => {
        test('is it a integer', () => {
            expect(funcs.isInteger(30)).toBeTruthy();

        });
    })
    
    describe('fizzBuzz', () => {
        test('is it a fizzbuzz!', () => {
            expect(funcs.fizzBuzz(15)).toBe('fizzbuzz');
            expect(funcs.fizzBuzz(5)).toBe('buzz');
            expect(funcs.fizzBuzz(3)).toBe('fizz');
        });
    })

    describe('isPrime', () => {
        test('is prime!', () => {
            expect(funcs.isPrime(-1)).toBeFalsy();
            expect(funcs.isPrime(1)).toBeFalsy();
            expect(funcs.isPrime(2)).toBeTruthy();
        });
    })

    describe('returnFirst', () => {
        test('return first!', () => {
            expect(funcs.returnFirst([0,1,2,3])).toBe(0);
        });
    })

    describe('returnLast', () => {
        test('return last!', () => {
            expect(funcs.returnLast([0,1,2,3])).toBe(3);
        });
    })

    
    describe('getArrayLength', () => {
        test('get length of array!', () => {
            expect(funcs.getArrayLength([0,1,2,3])).toBe(4);
        });
    })

    describe('incrementByOne', () => {
        test('increment!', () => {
            expect(funcs.incrementByOne([0,1,2,3])).toEqual([1,2,3,4]);
        });
    })
})