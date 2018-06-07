const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('default', () => {
    it('default test', () => {});
});

describe('functions', () => {
    describe('getBiggest', () => {
        const getBiggest = funcs.getBiggest;
        it('should return 15', () => {
            const expected = 15;
            const actual = getBiggest(15, 1);
            expect(actual).toBe(expected);
        });
        it('should be 9', () => {
            const expected = 9;
            const actual = getBiggest(3, 9);
            expect(actual).toBe(expected);
        });
    });

    describe('greeting', () => {
        const greeting = funcs.greeting;
        it('should return Hello!', () => {
            const expected = 'Hello!';
            const actual = greeting();
            expect(actual).toBe(expected);
        });
        it('should be hello!', () => {
            const actual = greeting();
            expect(actual.toLocaleLowerCase()).toEqual('hello!');
        });
    });

    describe('isTenOrFive', () => {
        const isTenOrFive = funcs.isTenOrFive;
        it('should return false', () => {
            const expected = false;
            const actual = isTenOrFive(15);
            expect(actual).toBe(expected);
        });
        it('should be true', () => {
            const expected = true;
            const actual = isTenOrFive(10);
            expect(actual).toBe(expected);
        });
    });

    describe('isInRange', () => {
        const isInRange = funcs.isInRange;
        it('should return false', () => {
            const expected = false;
            const actual = isInRange(15);
            expect(actual).toBe(expected);
        });
        it('should be true', () => {
            const expected = true;
            const actual = isInRange(30);
            expect(actual).toBe(expected);
        });
    });

    describe('isInteger', () => {
        const isInteger = funcs.isInteger;
        it('should return false', () => {
            const expected = false;
            const actual = isInteger(1.5);
            expect(actual).toBe(expected);
        });
        it('should be true', () => {
            const expected = true;
            const actual = isInteger(3.0);
            expect(actual).toBe(expected);
        });
    });

    describe('fizzBuzz', () => {
        const fizzBuzz = funcs.fizzBuzz;
        it('should return fizz', () => {
            const expected = 'fizz';
            const actual = fizzBuzz(3);
            expect(actual).toBe(expected);
        });
        it('should be buzz', () => {
            const expected = 'buzz';
            const actual = fizzBuzz(10);
            expect(actual).toBe(expected);
        });
        it('it should be fizzbuzz', () => {
            const expected = 'fizzbuzz';
            const actual = fizzBuzz(15);
            expect(actual).toBe(expected);
        });
    });

    describe('isPrime', () => {
        const isPrime = funcs.isPrime;
        it('should return true', () => {
            const expected = true;
            const actual = isPrime(7);
            expect(actual).toBe(expected);
        });
        it('should be false', () => {
            const expected = false;
            const actual = isPrime(9);
            expect(actual).toBe(expected);
        });
    });

    describe('returnFirst', () => {
        const returnFirst = funcs.returnFirst;
        it('should return 15', () => {
            const expected = 15;
            const actual = returnFirst([15, true]);
            expect(actual).toBe(expected);
        });
        it('should be false', () => {
            const expected = false;
            const actual = returnFirst([false, 'works']);
            expect(actual).toBe(expected);
        });
    });

    describe('returnLast', () => {
        const returnLast = funcs.returnLast;
        it('should return true', () => {
            const expected = true;
            const actual = returnLast([15, true]);
            expect(actual).toBe(expected);
        });
        it('should be works', () => {
            const expected = 'works';
            const actual = returnLast([false, 'works']);
            expect(actual).toBe(expected);
        });
    });

    describe('getArrayLength', () => {
        const getArrayLength = funcs.getArrayLength;
        it('should return 2', () => {
            const expected = 2;
            const actual = getArrayLength([15, true]);
            expect(actual).toBe(expected);
        });
        it('should be 3', () => {
            const expected = 3;
            const actual = getArrayLength([false, 'works', 7]);
            expect(actual).toBe(expected);
        });
    });

    describe('incrementByOne', () => {
        const incrementByOne = funcs.incrementByOne;
        it('should return [2, 3, 4]', () => {
            const expected = [2, 3, 4];
            const actual = incrementByOne([1, 2, 3]);
            expect(actual).toEqual(expected);
        });
        it('should be [7, 8]', () => {
            const expected = [7, 8];
            const actual = incrementByOne([6, 7]);
            expect(actual).toEqual(expected);
        });
    });

    describe('addItemToArray', () => {
        const addItemToArray = funcs.addItemToArray;
        it('should return nope', () => {
            const expected = 'nope';
            const actual = addItemToArray([15, true], 'nope');
            expect(actual[actual.length - 1]).toBe(expected);
        });
        it('should be [false, works, true]', () => {
            const expected = [false, 'works', true];
            const actual = addItemToArray([false, 'works'], true);
            expect(actual).toEqual(expected);
        });
    });

    describe('addItemToFront', () => {
        const addItemToFront = funcs.addItemToFront;
        it('should return 15', () => {
            const expected = 15;
            const actual = addItemToFront([7, true], 15);
            expect(actual[0]).toBe(expected);
        });
        it('should be 0', () => {
            const expected = 0;
            const actual = addItemToFront([false, 'works'], 0);
            expect(actual[0]).toBe(expected);
        });
    });

    describe('wordsToSentence', () => {
        const wordsToSentence = funcs.wordsToSentence;
        it('should return hello world', () => {
            const expected = 'hello world';
            const actual = wordsToSentence(['hello', 'world']);
            expect(actual).toBe(expected);
        });
        it('should be fal se', () => {
            const expected = 'fal se';
            const actual = wordsToSentence(['fal', 'se']);
            expect(actual).toBe(expected);
        });
    });

    describe('contains', () => {
        const contains = funcs.contains;
        it('should return false', () => {
            const expected = false;
            const actual = contains(15, 15);
            expect(actual).toBe(expected);
        });
        it('should be false', () => {
            const expected = false;
            const actual = contains(1, 5);
            expect(actual).toBe(expected);
        });
    });

    describe('addNumbers', () => {
        const addNumbers = funcs.addNumbers;
        it('should return 15', () => {
            const expected = 15;
            const actual = addNumbers([1, 2, 3, 4, 5]);
            expect(actual).toBe(expected);
        });
        it('should be 10', () => {
            const expected = 10;
            const actual = addNumbers([3, 3, 4]);
            expect(actual).toBe(expected);
        });
    });

    describe('averageTestScore', () => {
        const averageTestScore = funcs.averageTestScore;
        it('should return 3', () => {
            const expected = 3;
            const actual = averageTestScore([1, 2, 3, 4, 5]);
            expect(actual).toBe(expected);
        });
        it('should be 5', () => {
            const expected = 5;
            const actual = averageTestScore([6, 5, 4]);
            expect(actual).toBe(expected);
        });
    });

    describe('largestNumber', () => {
        const largestNumber = funcs.largestNumber;
        it('should return 5', () => {
            const expected = 5;
            const actual = largestNumber([1, 2, 3, 4, 5]);
            expect(actual).toBe(expected);
        });
        it('should be 10.5', () => {
            const expected = 10.5;
            const actual = largestNumber([3, 3, 4, 10.5]);
            expect(actual).toBe(expected);
        });
    });

});