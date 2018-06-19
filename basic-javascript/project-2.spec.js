const funcs = require('./project-2');

describe('project-2', () => {
    describe('getBiggest', () => {
        it('returns undefined if certain conditions are met', () => {
            expect(funcs.getBiggest(undefined, undefined)).toBeUndefined();
        });
        it('returns null if certain conditions are met', () => {
            expect(funcs.getBiggest(undefined, null)).toBeNull();
        });
        it('returns false if certain conditions are met', () => {
            expect(funcs.getBiggest(undefined, false)).toBeFalsy();
        });
        it('returns true if certain conditions are met', () => {
            expect(funcs.getBiggest(undefined, true)).toBeTruthy();
        });
        it('returns the largest parameter if certain conditions are met', () => {
            expect(funcs.getBiggest(undefined, 1)).toBe(1);
            expect(funcs.getBiggest(undefined, 0)).toBe(0);
            expect(funcs.getBiggest(undefined, -1)).toBe(-1);
            expect(funcs.getBiggest(0, -1)).toBe(0);
            expect(funcs.getBiggest(0, 1)).toBe(1);
            expect(funcs.getBiggest(1, 1)).toBe(1);
            expect(funcs.getBiggest('abc', 'a')).toBe('abc');
        });
        it('returns the second parameter if both parameters match', () => {
            expect(funcs.getBiggest('1', '2')).toBe('2');
            expect(funcs.getBiggest(1, 2)).toBe(2);
        });
    });

    describe('greeting', () => {
        it('returns Hello! if certain parameters are passed', () => {
            expect(funcs.greeting(undefined)).toBe('Hello!');
            expect(funcs.greeting(null)).toBe('Hello!');
            expect(funcs.greeting(true)).toBe('Hello!');
            expect(funcs.greeting(false)).toBe('Hello!');
            expect(funcs.greeting(1)).toBe('Hello!');
            expect(funcs.greeting('1')).toBe('Hello!');
            expect(funcs.greeting('Japanese')).toBe('Hello!');
        });
        it('returns Guten Tag! if German is passed', () => {
            expect(funcs.greeting('German')).toBe('Guten Tag!');
        });
        it('returns Hola! if Spanish is passed', () => {
            expect(funcs.greeting('Spanish')).toBe('Hola!');
        });
    });

    describe('isTenOrFive', () => {
        it('returns false if certain conditions are met', () => {
            expect(funcs.isTenOrFive(false)).toBeFalsy();
            expect(funcs.isTenOrFive(undefined)).toBeFalsy();
            expect(funcs.isTenOrFive(null)).toBeFalsy();
            expect(funcs.isTenOrFive(true)).toBeFalsy();
            expect(funcs.isTenOrFive(1)).toBeFalsy();
            expect(funcs.isTenOrFive('1')).toBeFalsy();
            expect(funcs.isTenOrFive('10')).toBeFalsy();
            expect(funcs.isTenOrFive('5')).toBeFalsy();
        });
        it('returns true if certain conditions are met', () => {
            expect(funcs.isTenOrFive(10)).toBeTruthy();
            expect(funcs.isTenOrFive(5)).toBeTruthy();
        });
    });

    describe('isInRange', () => {
        it('returns false if certain conditions are met', () => {
            expect(funcs.isInRange(false)).toBeFalsy();
            expect(funcs.isInRange(undefined)).toBeFalsy();
            expect(funcs.isInRange(null)).toBeFalsy();
            expect(funcs.isInRange(true)).toBeFalsy();
            expect(funcs.isInRange(10)).toBeFalsy();
            expect(funcs.isInRange(55)).toBeFalsy();
            expect(funcs.isInRange('10')).toBeFalsy();
            expect(funcs.isInRange('55')).toBeFalsy();
        });
        it('returns true if certain conditions are met', () => {
            expect(funcs.isInRange(21)).toBeTruthy();
            expect(funcs.isInRange('21')).toBeTruthy();
            expect(funcs.isInRange(49)).toBeTruthy();
            expect(funcs.isInRange('49')).toBeTruthy();
        });
    });

    describe('isInteger', () => {
        it('returns false if certain conditions are met', () => {
            expect(funcs.isInteger(false)).toBeFalsy();
            expect(funcs.isInteger(undefined)).toBeFalsy();
            expect(funcs.isInteger(null)).toBeFalsy();
            expect(funcs.isInteger(true)).toBeFalsy();
            expect(funcs.isInteger(10.12)).toBeFalsy();
            expect(funcs.isInteger('10')).toBeFalsy();
        });
        it('returns true if certain conditions are met', () => {
            expect(funcs.isInteger(21)).toBeTruthy();
            expect(funcs.isInteger(0)).toBeTruthy();
        });
    });

    describe('fizzBuzz', () => {
        it('returns fizzbuzz if num is divisible by 3 & 5', () => {
            expect(funcs.fizzBuzz(15)).toBe('fizzbuzz');
            expect(funcs.fizzBuzz(0)).toBe('fizzbuzz');
            expect(funcs.fizzBuzz(false)).toBe('fizzbuzz');
            expect(funcs.fizzBuzz(null)).toBe('fizzbuzz');
        });
        it('returns buzz if num is divisible by 5', () => {
            expect(funcs.fizzBuzz(5)).toBe('buzz');
            expect(funcs.fizzBuzz(-25)).toBe('buzz');
        });
        it('returns fizz if num is divisible by 3', () => {
            expect(funcs.fizzBuzz(3)).toBe('fizz');
            expect(funcs.fizzBuzz(-27)).toBe('fizz');
        });
        it('returns num if num is not divisible by 3 or 5', () => {
            expect(funcs.fizzBuzz(2)).toBe(2);
            expect(funcs.fizzBuzz(true)).toBe(true);
            expect(funcs.fizzBuzz(undefined)).toBe(undefined);
        });
    });

    describe('isPrime', () => {
        it('returns false if certain conditions are met', () => {
            expect(funcs.isPrime(-10)).toBeFalsy();
            expect(funcs.isPrime('-10')).toBeFalsy();
            expect(funcs.isPrime(0)).toBeFalsy();
            expect(funcs.isPrime(1)).toBeFalsy();
            expect(funcs.isPrime(4)).toBeFalsy();
        });
        it('returns true if certain conditions are met', () => {
            expect(funcs.isPrime(17)).toBeTruthy();
            expect(funcs.isPrime('17')).toBeTruthy();
            expect(funcs.isPrime(false)).toBeTruthy();
            expect(funcs.isPrime(undefined)).toBeTruthy();
            expect(funcs.isPrime(null)).toBeTruthy();
            expect(funcs.isPrime(true)).toBeTruthy();
            expect(funcs.isPrime('0')).toBeTruthy();
            expect(funcs.isPrime('1')).toBeTruthy();
        });
    });

    describe('returnFirst', () => {
        it('returns the first item in an array', () => {
            expect(funcs.returnFirst([1, 2, 3])).toBe(1);
            expect(funcs.returnFirst([null, undefined])).toBeNull();
            expect(funcs.returnFirst([{}, []])).toEqual({});
        });
        it('returns undefined if no item exists in an array', () => {
            expect(funcs.returnFirst([])).toBeUndefined();
        });
    });

    describe('returnLast', () => {
        it('returns the last item in an array', () => {
            expect(funcs.returnLast([1, 2, 3])).toBe(3);
            expect(funcs.returnLast([null, undefined])).toBeUndefined();
            expect(funcs.returnLast([{}, []])).toEqual([]);
        });
        it('returns undefined if no item exists in an array', () => {
            expect(funcs.returnLast([])).toBeUndefined();
        });
    });

    describe('getArrayLength', () => {
        it('returns the length of an array', () => {
            expect(funcs.getArrayLength([1, 2, 3])).toBe(3);
            expect(funcs.getArrayLength([null, undefined])).toBe(2);
            expect(funcs.getArrayLength([{}, []])).toBe(2);
            expect(funcs.getArrayLength([])).toBe(0);
        });
    });

    describe('incrementByOne', () => {
        it('returns each value of array and adds one', () => {
            expect(funcs.incrementByOne([1, 2, 3])).toEqual([2, 3, 4]);
            expect(funcs.incrementByOne(['1', '2', 3])).toEqual([2, 3, 4]);
            expect(funcs.incrementByOne(['a', 'b', 'c'])).toEqual([NaN, NaN, NaN]);
            expect(funcs.incrementByOne([null, undefined])).toEqual([1, NaN]);
            expect(funcs.incrementByOne([{}, []])).toEqual([NaN, 1]);
            expect(funcs.incrementByOne([])).toEqual([]);
        });
    });

    describe('addItemToArray', () => {
        it('returns an array with a value added to the end', () => {
            expect(funcs.addItemToArray([1, 2, 3], 4)).toEqual([1, 2, 3, 4]);
            expect(funcs.addItemToArray([null, undefined], null)).toEqual([null, undefined, null]);
            expect(funcs.addItemToArray([{}, []], 1)).toEqual([{}, [], 1]);
            expect(funcs.addItemToArray([], [])).toEqual([[]]);
        });
    });

    describe('addItemToFront', () => {
        it('returns an array with a value added to the beginning', () => {
            expect(funcs.addItemToFront([1, 2, 3], 4)).toEqual([4, 1, 2, 3]);
            expect(funcs.addItemToFront([null, undefined], null)).toEqual([null, null, undefined]);
            expect(funcs.addItemToFront([{}, []], 1)).toEqual([1, {}, []]);
            expect(funcs.addItemToFront([], [])).toEqual([[]]);
        });
    });

    describe('wordsToSentence', () => {
        it('returns a string made up of the words passed to it', () => {
            expect(funcs.wordsToSentence(['new', 'sentence'])).toBe('new sentence');
            expect(funcs.wordsToSentence(['new'])).toBe('new');
            expect(funcs.wordsToSentence(true)).toBe('');
            expect(funcs.wordsToSentence(false)).toBe('');
        });
    });

    describe('contains', () => {
        it('returns true if certain conditions are met', () => {
            expect(funcs.contains(['new', 'sentence'], 'new')).toBeTruthy();
            expect(funcs.contains([null], null)).toBeTruthy();
            expect(funcs.contains([true, false, true], true)).toBeTruthy();
        });
        it('returns false if certain conditions are met', () => {
            expect(funcs.contains(['new', 'sentence'], 2)).toBeFalsy();
            expect(funcs.contains(['new'], null)).toBeFalsy();
            expect(funcs.contains([true], undefined)).toBeFalsy();
            expect(funcs.contains([false], 2)).toBeFalsy();
            expect(funcs.contains([false, {}], {})).toBeFalsy();
        });
    });

    describe('addNumbers', () => {
        it('returns the sum of numbers in an array', () => {
            expect(funcs.addNumbers([1, 2, 3])).toBe(6);
            expect(funcs.addNumbers([true, false, true])).toBe(2);
        });
        it('returns NaN if a number in the array is not defined', () => {
            expect(funcs.addNumbers([null, 1, undefined])).toBeNaN();
        });
    });

    describe('averageTestScore', () => {
        it('returns the sum of numbers in an array', () => {
            expect(funcs.averageTestScore([1, 2, 3])).toBe(2);
            expect(funcs.averageTestScore([true, false, true])).toBe(0.6666666666666666);
        });
        it('returns NaN if a number in the array is not defined', () => {
            expect(funcs.averageTestScore([null, 1, undefined])).toBeNaN();
        });
    });

    describe('largestNumber', () => {
        it('returns the sum of numbers in an array', () => {
            expect(funcs.largestNumber([1, 2, 3])).toBe(3);
            expect(funcs.largestNumber([0, 0, 0])).toBe(0);
        });
        it('returns NaN if a number in the array is not defined', () => {
            expect(funcs.largestNumber([null, 1, undefined])).toBe(1);
        });
    });
});
