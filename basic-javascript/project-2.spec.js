const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

test('should run tests', () => {});

describe('project-1.js', () => {    
    describe('getBiggest', () => {
        it('should get the biggest number', () => {
            expect(funcs.getBiggest(10, 9)).toEqual(10);
        });

        it('should get the biggest number', () => {
            expect(funcs.getBiggest(10, 10)).toEqual(10);
        });
    });
    
    describe('greeting', () => {
        expect(funcs.greeting('German')).toBe('Guten Tag!');
        expect(funcs.greeting('Spanish')).toBe('Hola!');
        expect(funcs.greeting('English')).toBe('Hello!');
        expect(funcs.greeting()).toBe('Hello!');  
    });

    describe('isTenOrFive', () => {
        it('should check if 10 or 5', () => {
            expect(funcs.isTenOrFive(10)).toEqual(true);
        });

        it('should check if 10 or 5', () => {
            expect(funcs.isTenOrFive(4)).toEqual(false);
        });
    });

    describe('isInRange', () => {
        it('should check if it\'s in range', () => {
            expect(funcs.isInRange(30)).toEqual(true);
        });

        it('should check if it\'s in range', () => {
            expect(funcs.isInRange(19)).toEqual(false);
        });
    });

    describe('isInteger', () => {
        it('should check to see if it is an integer', () => {
            expect(funcs.isInteger(10)).toEqual(true);
        });

        it('should check to see if it is an integer', () => {
            expect(funcs.isInteger(10.5)).toEqual(false);
        });
    });

    describe('fizzBuzz', () => {
        it('should return fizz', () => {
            expect(funcs.fizzBuzz(9)).toEqual('fizz');
        });

        it('should return buzz', () => {
            expect(funcs.fizzBuzz(25)).toEqual('buzz');
        });
        
        it('should return fizzbuzz', () => {
            expect(funcs.fizzBuzz(15)).toEqual('fizzbuzz');
        });
    });

    describe('isPrime', () => {
        it('should return false', () => {
            expect(funcs.isPrime(-3)).toEqual(false);
        });

        it('should return false', () => {
            expect(funcs.isPrime(1)).toEqual(false);
        });

        it('should return false', () => {
            expect(funcs.isPrime(15)).toEqual(false);
        });

        it('should return true', () => {
            expect(funcs.isPrime(5)).toEqual(true);
        });
    });

    describe('returnFirst', () => {
        it('should return first item in array', () => {
            expect(funcs.returnFirst(['cool', 'guy'])).toEqual('cool');
        });
    });

    describe('returnLast', () => {
        it('should return last item in array', () => {
            expect(funcs.returnLast(['cool', 'guy'])).toEqual('guy');
        });
    });

    describe('getArrayLength', () => {
        it('should return length of array', () => {
            expect(funcs.getArrayLength(['cool', 'guy'])).toEqual(2);
        });
    });

    describe('incrementByOne', () => {
        it('should increment by one', () => {
            expect(funcs.incrementByOne([3, 4])).toEqual([4, 5]);
        });
    });

    describe('addItemToArray', () => {
        it('should add an item to an array', () => {
            expect(funcs.addItemToArray([1, 2], 3)).toEqual([1, 2, 3]);
        });
    });

    describe('addItemToFront', () => {
        it('should add an item to the front of an array', () => {
            expect(funcs.addItemToFront([1, 2], 3)).toEqual([3, 1, 2]);
        });
    });

    describe('wordsToSentence', () => {
        it('should return a sentence', () => {
            expect(funcs.wordsToSentence(['Good', 'day!'])).toBe('Good day!');
        });
    });

    describe('contains', () => {
        it('should return true', () => {
            expect(funcs.contains([1, 2], 2)).toBe(true);
        });

        it('should return false', () => {
            expect(funcs.contains([1, 2], 3)).toBe(false);
        });
    });

    describe('addNumbers', () => {
        it('should add numbers', () => {
            expect(funcs.addNumbers([1, 2])).toEqual(3);
        });
    });

    describe('averageTestScore', () => {
        it('should get average test score', () => {
            expect(funcs.averageTestScore([50, 100])).toEqual(75);
        });
    });

    describe('largestNumber', () => {
        it('should get largest number', () => {
            expect(funcs.largestNumber([50, 100, 101])).toEqual(101);
        });
    });
});