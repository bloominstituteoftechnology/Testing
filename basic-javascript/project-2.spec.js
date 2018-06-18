const funcs = require('./project-2');

describe.only('project-2', () => { //remember to remove the .only when done
    describe('getBiggest', () => {
        it('should return the larger of two numbers', () => {
           expect(funcs.getBiggest(1, 9)).toBe(9); 
        })
        it('works with decimals', () => {
            expect(funcs.getBiggest(1.22, 4.22)).toBe(4.22);
        })
    });
    describe('greeting', () => {
        it('should return the proper greeting',() => {
            expect(funcs.greeting('German')).toBe('Guten Tag!');
            expect(funcs.greeting('Spanish')).toBe('Hola!');
            expect(funcs.greeting('English')).toBe('Hello!');
            expect(funcs.greeting('sdfgdfg')).toBe('Hello!');                 
        })
    });
    describe('isTenOrFive', () => {
        it('should be true if 10 or 5 is entered', () => {
            expect(funcs.isTenOrFive(10)).toBe(true);
            expect(funcs.isTenOrFive(5)).toBe(true);
            expect(funcs.isTenOrFive(1)).toBe(false);
            expect(funcs.isTenOrFive(100)).toBe(false);
        })
    });
    describe('isInRange', () => {
        it('should accept a number between 20 and 50', () => {
            expect(funcs.isInRange(10)).toBe(false);
            expect(funcs.isInRange(53)).toBe(false);
            expect(funcs.isInRange(42)).toBe(true);
        })
    });
    describe('isInteger', () => {
        it('returns true if num is an integer', () => {
            expect(funcs.isInteger(10.234)).toBe(false);
            expect(funcs.isInteger(10)).toBe(true);
        })
    });
    describe('fizzBuzz', () => {
        it('should return the correct corresponding word', () => {
            expect(funcs.fizzBuzz(15)).toBe('fizzbuzz');
            expect(funcs.fizzBuzz(5)).toBe('buzz');
            expect(funcs.fizzBuzz(3)).toBe('fizz');
            expect(funcs.fizzBuzz(1)).toBe(1);
        })
    });
    describe('isPrime', () => {
        it('should be true if the number is prime', () => {
            expect(funcs.isPrime(2)).toBe(true);
            expect(funcs.isPrime(23)).toBe(true);
            expect(funcs.isPrime(9349535)).toBe(false);
        })
    });
    describe('returnFirst', () => {
        it('should return the first index of an array', () => {
            expect(funcs.returnFirst([1, 2, 3, 4, 5])).toEqual(1);
            expect(funcs.returnFirst([3, 2, 6, 4, 8])).toEqual(3);
        })
    });
    // describe('returnLast', () => {
    //     it('', () => {

    //     })
    // });
    // describe('getArrayLength', () => {
    //     it('', () => {

    //     })
    // });
    // describe('incrementByOne', () => {
    //     it('')
    // });
    // describe('addItemToArray', () => {
    //     it('', () => {

    //     })
    // });
    // describe('addItemToFront', () => {
    //     it('', () => {

    //     })
    // });
    // describe('wordsToSentence', () => {
    //     it('', () => {

    //     })
    // });
    // describe('contains', () => {
    //     it('', () => {

    //     })
    // });
    // describe('addNumbers', () => {
    //     it('', () => {

    //     })
    // });
    // describe('averageTestScores', () => {
    //     it('', () => {

    //     })
    // });
    // describe('largestNumber', () => {
    //     it('', () => {

    //     })
    // });
});