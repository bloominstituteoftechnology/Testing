const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('project-2', () => {
    describe('getBiggest', () => {
        it('should return the biggest number', () => {
            const biggest = funcs.getBiggest(1,2);
            expect(biggest).toBe(2);
        })
    })

    describe('greeting', () => {
        it('should return a greetings message of entered language', () => {
            const german = funcs.greeting('German');
            const spanish = funcs.greeting('Spanish');
            const english = funcs.greeting('English');
            const korean = funcs.greeting('Korean');

            expect(german).toBe('Guten Tag!');
            expect(spanish).toBe('Hola!');
            expect(english).toBe('Hello!');
            expect(korean).toBe('Hello!');

        })
    })

    describe('isTenOrFive', () => {
        it('should return true if entered number is 5 or 10', () => {
            expect(funcs.isTenOrFive(5)).toBeTruthy();
            expect(funcs.isTenOrFive(10)).toBeTruthy();
        })

        it('should return false if entered number is NOT 5 or 10', () => {
            expect(funcs.isTenOrFive(-5)).toBeFalsy();
            expect(funcs.isTenOrFive(-10)).toBeFalsy();
            expect(funcs.isTenOrFive(0)).toBeFalsy();
            expect(funcs.isTenOrFive(1)).toBeFalsy();
        })
    })

    describe('isInRange', () => {
        it('should return true if the entered number is in range of from 20 to 50', () => {
            expect(funcs.isInRange(21)).toBeTruthy();
            expect(funcs.isInRange(49)).toBeTruthy();
        })

        it('should return false if the entered number is not in range of from 20 to 50', () => {
            expect(funcs.isInRange(20)).toBeFalsy();
            expect(funcs.isInRange(50)).toBeFalsy();
            expect(funcs.isInRange(0)).toBeFalsy();
            expect(funcs.isInRange(-5)).toBeFalsy();
        })
    })

    describe('isInteger', () => {
        it('should return true if the entered number is an integer', () => {
            expect(funcs.isInteger(1)).toBeTruthy();
            expect(funcs.isInteger(0)).toBeTruthy();
        })

        it('should return false if the entered number is not an integer', () => {
            expect(funcs.isInteger(1.1)).toBeFalsy();
            expect(funcs.isInteger(0.1)).toBeFalsy();
            expect(funcs.isInteger(-0.1)).toBeFalsy();
        })
    })

    describe('fizzBuzz', () => {
        it('should return fizzbuzz if entered number is the common multiple of 3 and 5', () => {
            const fizzbuzz1 = funcs.fizzBuzz(15);
            const fizzbuzz2 = funcs.fizzBuzz(30);
            const fizzbuzz0 = funcs.fizzBuzz(0);

            expect(fizzbuzz1).toBe('fizzbuzz');
            expect(fizzbuzz2).toBe('fizzbuzz');
            expect(fizzbuzz0).toBe('fizzbuzz');
        })

        it('should return buzz if entered number is the multiple of 5', () => {
            const buzz1 = funcs.fizzBuzz(5);
            const buzz2 = funcs.fizzBuzz(10);

            expect(buzz1).toBe('buzz');
            expect(buzz2).toBe('buzz');
        })

        it('should return fizz if entered number is the multiple of 3', () => {
            const fizz1 = funcs.fizzBuzz(3);
            const fizz2 = funcs.fizzBuzz(6);

            expect(fizz1).toBe('fizz');
            expect(fizz2).toBe('fizz');
        })


    })

    describe('isPrime', () => {
        it('should return true if entered number is prime', () => {
            expect(funcs.isPrime(2)).toBeTruthy();
            expect(funcs.isPrime(3)).toBeTruthy();
            expect(funcs.isPrime(13)).toBeTruthy();
        })

        it('should return false if entered number is not prime', () => {
            expect(funcs.isPrime(0)).toBeFalsy();
            expect(funcs.isPrime(1)).toBeFalsy();
            expect(funcs.isPrime(4)).toBeFalsy();
            expect(funcs.isPrime(-1)).toBeFalsy();
        })
    })

    describe('returnFirst', () => {
        const array1 = [8,7,6,5,4];
        const array2 = ['asdf', 'dfse', '3575'];
        const array0 = [];

        it('should return the first element', () => {
            expect(funcs.returnFirst(array1)).toBe(8);
            expect(funcs.returnFirst(array2)).toBe('asdf');
            expect(funcs.returnFirst(array0)).toBe(undefined);
        })
    })

    describe('returnLast', () => {
        const array1 = [8,7,6,5,4];
        const array2 = ['asdf', 'dfse', '3575'];
        const array0 = [];

        it('should return the last element', () => {
            expect(funcs.returnLast(array1)).toBe(4);
            expect(funcs.returnLast(array2)).toBe('3575');
            expect(funcs.returnLast(array0)).toBe(undefined);
        })
    })

    describe('getArrayLength', () => {
        const array1 = [8,7,6,5,4];
        const array2 = ['asdf', 'dfse', '3575'];
        const array0 = [];

        it('should return the length of array', () => {
            expect(funcs.getArrayLength(array1)).toBe(5);
            expect(funcs.getArrayLength(array2)).toBe(3);
            expect(funcs.getArrayLength(array0)).toBe(0);

        })
    })

    describe('incrementByOne', () => {
        const array1 = [8,7,6,5,4];
        const array0 = [];

        it('should return an array after add 1 to each elements', () => {
            expect(funcs.incrementByOne(array1)).toEqual([9,8,7,6,5]);
            expect(funcs.incrementByOne(array0)).toEqual([]);
        })
    })

    describe('addItemToArray', () => {
        const array1 = [8,7,6,5,4];
        const array2 = ['asdf', 'dfse', '3575'];
        const array0 = [];

        it('should add an item and return the array', () => {
            expect(funcs.addItemToArray(array1, 'item')).toEqual([8,7,6,5,4,'item']);
            expect(funcs.addItemToArray(array2, 'item')).toEqual(['asdf', 'dfse', '3575', 'item']);
            expect(funcs.addItemToArray(array0, 'item')).toEqual(['item']);
        })
    })

    describe('addItemToFront', () => {
        const array1 = [8,7,6,5,4];
        const array2 = ['asdf', 'dfse', '3575'];
        const array0 = [];

        it('should add an item and return the array', () => {
            expect(funcs.addItemToFront(array1, 'item')).toEqual(['item', 8,7,6,5,4,]);
            expect(funcs.addItemToFront(array2, 'item')).toEqual(['item', 'asdf', 'dfse', '3575']);
            expect(funcs.addItemToFront(array0, 'item')).toEqual(['item']);
        })
    })

    describe('wordsToSentence', () => {
        const arr = ['Space,', 'the', 'final', 'frontier.']

        it('should combine words and return a sentence', () => {
            expect(funcs.wordsToSentence(arr)).toEqual('Space, the final frontier.');
        })
    })

    describe('contains', () => {
        const arr = ['captain', 'Picard', 'Bald'];
        const item1 = 'bald';
        const item2 = 'hair'

        it('should return true if the array contains the item', () => {
            expect(funcs.contains(arr, item1)).toBeTruthy;
        })

        it('should return false if the array does not contain the item', () => {
            expect(funcs.contains(arr, item2)).toBeFalsy;
        })

    })

    describe('addNumbers', () => {
        const arr0 = [];
        const arr1 = [1, 2, 3];
        const arr2 = [100, 300, -100];

        it('should add all the numbers in array and return', () => {
            expect(funcs.addNumbers(arr0)).toEqual(0);
            expect(funcs.addNumbers(arr1)).toEqual(6);
            expect(funcs.addNumbers(arr2)).toEqual(300);
        })
    })

    describe('averageTestScore', () => {
        it('should return average test score', () => {
            const arr0 = [];
            const arr1 = [1, 2, 3];
            const arr2 = [5, 5, 5];

            expect(funcs.averageTestScore(arr0)).toEqual(NaN);
            expect(funcs.averageTestScore(arr1)).toEqual(2);
            expect(funcs.averageTestScore(arr2)).toEqual(5);

        })
    })

    describe('largestNumber', () => {
        it('should return the largest number in array', () => {
            const arr0 = [];
            const arr1 = [1, 2, 3];
            const arr2 = [100, 300, -100];

            expect(funcs.largestNumber(arr0)).toEqual(0);
            expect(funcs.largestNumber(arr1)).toEqual(3);
            expect(funcs.largestNumber(arr2)).toEqual(300);
        })
    })


    // function addItem(arr, item) {
    //     arr.push(item);
    // }
    
    // it('should return string', () => {
    //     expect(typeof funcs.name('World')).toEqual('string');
    // });
})