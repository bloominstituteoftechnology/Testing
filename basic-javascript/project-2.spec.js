const {
    getBiggest,
    greeting,
    isTenOrFive,
    isInRange,
    isInteger,
    fizzBuzz,
    isPrime,
    returnFirst,
    returnLast,
    getArrayLength,
    incrementByOne,
    addItemToArray,
    addItemToFront,
    wordsToSentence,
    contains,
    addNumbers,
    averageTestScore,
    largestNumber
} = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project 2', () => {
    describe('1-6', () => {
        // 1.
        test('getBiggest', () => {
            const actual = getBiggest(3, 4);
            expect(actual).toBe(4);
        });

        // 2.
        describe('greeting', () => {
            test('German', () => {
                const actual = greeting('German');
                expect(actual).toBe('Guten Tag!');
            });
            test('Spanish', () => {
                const actual = greeting('Spanish');
                expect(actual).toBe('Hola!');
            });
            test('Default', () => {
                const actual = greeting('default');
                expect(actual).toBe('Hello!');
            });
        });

        // 3.
        describe('isTenOrFive', () => {
            test('is ten', () => {
                const actual = isTenOrFive(10);
                expect(actual).toBeTruthy();
            });
            test('is five', () => {
                const actual = isTenOrFive(5);
                expect(actual).toBeTruthy();
            });
            test('is not ten or five', () => {
                const actual = isTenOrFive(7);
                expect(actual).toBeFalsy();
            });
        });

        // 4.
        describe('isInRange', () => {
            test('is in range', () => {
                const actual = isInRange(25);
                expect(actual).toBeTruthy();
            });
            test('not in range', () => {
                const actual = isInRange(51);
                expect(actual).toBeFalsy();
            });
        });

        // 5.
        describe('isInteger', () => {
            test('is integer', () => {
                const actual = isInteger(5);
                expect(actual).toBeTruthy();
            });
            test('is not integer', () => {
                const actual = isInteger(5.4);
                expect(actual).toBeFalsy();
            });
        });

        // 6.
        describe('fizzBuzz', () => {
            test('returns fizzbuzz', () => {
                const actual = fizzBuzz(15);
                expect(actual).toBe('fizzbuzz');
            });
            test('returns buzz', () => {
                const actual = fizzBuzz(5);
                expect(actual).toBe('buzz');
            });
            test('returns fizz', () => {
                const actual = fizzBuzz(3);
                expect(actual).toBe('fizz');
            });
            test('returns number', () => {
                const actual = fizzBuzz(2);
                expect(actual).toBe(2);
            });
        });
    });

    describe('7-12', () => {
        // 7.
        describe('isPrime', () => {
            test('is prime', () => {
                const actual = isPrime(5);
                expect(actual).toBeTruthy();
            });
            test('is not prime', () => {
                const actual = isPrime(10);
                expect(actual).toBeFalsy();
            });
        });

        // 8.
        test('returnFirst', () => {
            const actual = returnFirst([5,9,10]);
            expect(actual).toBe(5);
        });

        // 9.
        test('returnLast', () => {
            const actual = returnLast([5,9,10]);
            expect(actual).toBe(10);
        });

        // 10.
        test('getArrayLength', () => {
            const actual = getArrayLength([5,9,10]);
            expect(actual).toBe(3);
        });

        // 11.
        test('incrementByOne', () => {
            const actual = incrementByOne([5,9,10]);
            expect(actual).toEqual([6,10,11]);
        });

        // 12.
        test('addItemToArray', () => {
            const actual = addItemToArray([5,9,10], 11);
            expect(actual).toEqual([5,9,10,11]);
        });
    });

    describe('13-18', () => {
        // 13.
        test('addItemToFront', () => {
            const actual = addItemToFront([5,9,10], 11);
            expect(actual).toEqual([11,5,9,10]);
        });

        // 14.
        test('wordsToSentence', () => {
            const actual = wordsToSentence(['Hello', 'how', 'are', 'you?']);
            expect(actual).toBe('Hello how are you?');
        });

        // 15.
        describe('contains', () => {
            test('does contain', () => {
                const actual = contains([1,2,3], 3);
                expect(actual).toBeTruthy();
            });
            test('does not contain', () => {
                const actual = contains([1,2,3], 4);
                expect(actual).toBeFalsy();
            });
        });

        // 16.
        test('addNumbers', () => {
            const actual = addNumbers([2,5,3]);
            expect(actual).toBe(10);
        });

        // 17.
        test('averageTestScore', () => {
            const actual = averageTestScore([100,80,90]);
            expect(actual).toBe(90);
        });

        // 18.
        test('largestNumber', () => {
            const actual = largestNumber([20,50,100]);
            expect(actual).toBe(100);
        });
    });
});