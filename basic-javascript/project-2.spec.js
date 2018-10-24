const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe.skip('project-2.js', () => {
    describe('getBiggest()', () =>{
        it('Should return biggest value between 2 arguments.', () => {
            const actual = funcs.getBiggest(4, 5);
            const expected = 5;
            expect(actual).toBe(expected);
        });
    });
    describe('greeting()', () =>{
        it('Should return German greeting.', () => {
            const actual = funcs.greeting('German');
            const expected = 'Guten Tag!';
            expect(actual).toBe(expected);
        });
        it('Should return Spanish greeting.', () => {
            const actual = funcs.greeting('Spanish');
            const expected = 'Hola!';
            expect(actual).toBe(expected);
        });
        it('Should return default greeting.', () => {
            const actual = funcs.greeting('Japanese');
            const expected = 'Hello!';
            expect(actual).toBe(expected);
        });
    });
    describe('isTenOrFive()', () =>{
        it('Should return true if argument is 10 or 5: 5', () => {
            const actual = funcs.isTenOrFive(5);
            const expected = true;
            expect(actual).toBe(expected);
        });
        it('Should return true if argument is 10 or 5: 10', () => {
            const actual = funcs.isTenOrFive(10);
            const expected = true;
            expect(actual).toBe(expected);
        });
        it('Should return false', () => {
            const actual = funcs.isTenOrFive(1738);
            const expected = false;
            expect(actual).toBe(expected);
        });
    });
    describe('isInRange()', () => {
        it('Should return true if argument is in range of 20 and 50 exclusively.', () => {
            const actual = funcs.isInRange(25);
            const expected = true;
            expect(actual).toBe(expected);
        });
        it('Should return false if argument is outside range of 20 and 50 exclusively:10', () => {
            const actual = funcs.isInRange(10);
            const expected = false;
            expect(actual).toBe(expected);
        });
        it('Should return false if argument is outside range of 20 and 50 exclusively:100', () => {
            const actual = funcs.isInRange(100);
            const expected = false;
            expect(actual).toBe(expected);
        });
    });
    describe('isInteger()', () => {
        it('Should return true if argument is an integer.', () => {
            const actual = funcs.isInteger(25);
            const expected = true;
            expect(actual).toBe(expected);
        });
        it('Should return false if argument is not an integer.', () => {
            const actual = funcs.isInteger(17.38);
            const expected = false;
            expect(actual).toBe(expected);
        });
    });
    describe('fizzBuzz()', () => {
        it('Should return fizzbuzz if argument fizzbuzzes.', () => {
            const actual = funcs.fizzBuzz(15);
            const expected = 'fizzbuzz';
            expect(actual).toBe(expected);
        });
        it('Should return fizz if argument fizzes.', () => {
            const actual = funcs.fizzBuzz(9);
            const expected = 'fizz';
            expect(actual).toBe(expected);
        });
        it('Should return buzz if argument buzzes.', () => {
            const actual = funcs.fizzBuzz(20);
            const expected = 'buzz';
            expect(actual).toBe(expected);
        });
    });
    describe('isPrime()', () => {
        it('Should return true if argument is a prime number.', () => {
            const actual = funcs.isPrime(7);
            const expected = true;
            expect(actual).toBe(expected);
        });
        it('Should return false if argument is not a prime number.', () => {
            const actual = funcs.isPrime(4);
            const expected = false;
            expect(actual).toBe(expected);
        });
    });
    describe('returnFirst()', () => {
        it('Should return the first element of the array argument.', () => {
            const actual = funcs.returnFirst([0,1,2,3,4,5]);
            const expected = 0;
            expect(actual).toBe(expected);
        });
    });
    describe('returnFirst()', () => {
        it('Should return the last element of the array argument.', () => {
            const actual = funcs.returnLast([0,1,2,3,4,5]);
            const expected = 5;
            expect(actual).toBe(expected);
        });
    });
    describe('getArrayLength()', () => {
        it('Should return the length of the array argument.', () => {
            const actual = funcs.getArrayLength([0,1,2,3,4,5]);
            const expected = 6;
            expect(actual).toBe(expected);
        });
    });
    describe('incrementByOne()', () => {
        it('Should return an array of all the elements of the array argument incremented by 1.', () => {
            const actual = funcs.incrementByOne([0,1,2,3,4,5]);
            const expected = [1,2,3,4,5,6];
            expect(actual).toEqual(expected);
        });
    });
    describe('addItemToArray()', () => {
        it('Should return an array that is the array that is the first argument with the addition of the item that is the second argument.', () => {
            const actual = funcs.addItemToArray([0,1,2,3,4,5], 6);
            const expected = [0,1,2,3,4,5,6];
            expect(actual).toEqual(expected);
        });
        it('Should work with strings.', () => {
            const actual = funcs.addItemToArray(['a','b','c'], 'd');
            const expected = ['a','b','c','d'];
            expect(actual).toEqual(expected);
        });
    });
    describe('addItemToFront()', () => {
        it('Should return an array that is the array that is the first argument with the addition of the item that is the second argument in the front.', () => {
            const actual = funcs.addItemToFront([0,1,2,3,4,5], 6);
            const expected = [6,0,1,2,3,4,5];
            expect(actual).toEqual(expected);
        });
        it('Should work with strings.', () => {
            const actual = funcs.addItemToFront(['a','b','c'], 'd');
            const expected = ['d','a','b','c'];
            expect(actual).toEqual(expected);
        });
    });
    describe('wordsToSentence()', () => {
        it('Should return a string composed of the strings in an array with spaces in between.', () => {
            const actual = funcs.wordsToSentence(['GATA','attitude']);
            const expected = 'GATA attitude';
            expect(actual).toBe(expected);
        });
    });
    describe('contains()', () => {
        it('Should return true if the array, that is the first argument, contains the second argument.', () => {
            const actual = funcs.contains(['GATA','attitude'], 'GATA');
            const expected = true;
            expect(actual).toBe(expected);
        });
    });
    describe('addNumbers()', () => {
        it('Should return the sum of the elements of the array argument.', () => {
            const actual = funcs.addNumbers([0,1,2]);
            const expected = 3;
            expect(actual).toBe(expected);
        });
    });
    describe('averageTestScore()', () => {
        it('Should return the average of the elements of the array argument.', () => {
            const actual = funcs.averageTestScore([0,1,2]);
            const expected = 1;
            expect(actual).toBe(expected);
        });
    });
    describe('largestNumber()', () => {
        it('Should return the largest number out of the numbers in the array argument.', () => {
            const actual = funcs.largestNumber([0,1,3,2]);
            const expected = 3;
            expect(actual).toBe(expected);
        });
    });
});