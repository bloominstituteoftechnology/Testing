const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('getBiggest', () => {
    it('returns bigger number', () => {
        expect(funcs.getBiggest(5, 6)).toBe(6);
        expect(funcs.getBiggest(6, 5)).toBe(6);
        expect(funcs.getBiggest(5, 5)).toBe(5);
    });
});

describe('greeting', () => {
    it('returns greeting by language', () => {
        expect(funcs.greeting('German')).toBe('Guten Tag!');
        expect(funcs.greeting('Spanish')).toBe('Hola!');
        expect(funcs.greeting()).toBe("Hello!");
    });
});

describe('isTenOrFive', () => {
    it('returns true if input is 10 or 5', () => {
        expect(funcs.isTenOrFive(7)).toBe(false);
        expect(funcs.isTenOrFive(10)).toBe(true);
        expect(funcs.isTenOrFive(5)).toBe(true);
    });
});

describe('isInRange', () => {
    it('returns true if input is between 20 and 50', () => {
        expect(funcs.isInRange(40)).toBe(true);
        expect(funcs.isInRange(10)).toBe(false);
        expect(funcs.isInRange(-5)).toBe(false);
    });
});

describe('isInteger', () => {
    it('returns true if input is int', () => {
        expect(funcs.isInteger(40)).toBe(true);
        expect(funcs.isInteger(1.5)).toBe(false);
        expect(funcs.isInteger(-5)).toBe(true);
    });
});

describe('fizzBuzz', () => {
    it('fizzybuzzy', () => {
        expect(funcs.fizzBuzz(15)).toBe('fizzbuzz');
        expect(funcs.fizzBuzz(10)).toBe('buzz');
        expect(funcs.fizzBuzz(9)).toBe('fizz');
    });
});

describe('isPrime', () => {
    it('returns true if num is prime', () => {
        expect(funcs.isPrime(1)).toBe(false);
        expect(funcs.isPrime(-1)).toBe(false);
        expect(funcs.isPrime(3)).toBe(true);
    });
});

describe('returnFirst', () => {
    it('returns first elem in array', () => {
        expect(funcs.returnFirst([1, 2, 3])).toBe(1);
        expect(funcs.returnFirst(['a', 'b', 'c'])).toBe('a');
        expect(funcs.returnFirst([3, 4, 5])).toBe(3);
    });
});

describe('returnLast', () => {
    it('returns last elem in array', () => {
        expect(funcs.returnLast([1, 2, 3])).toBe(3);
        expect(funcs.returnLast(['a', 'b', 'c'])).toBe('c');
        expect(funcs.returnLast([3, 4, 5])).toBe(5);
    });
});

describe('getArrayLength', () => {
    it('returns length of array', () => {
        expect(funcs.getArrayLength([1, 2, 3])).toBe(3);
        expect(funcs.getArrayLength(['a', 'b', 'c', 'f'])).toBe(4);
        expect(funcs.getArrayLength([])).toBe(0);
    });
});

describe('incrementByOne', () => {
    it('increments each array element by 1', () => {
        expect(funcs.incrementByOne([1, 2, 3])).toEqual([2, 3, 4]);
        expect(funcs.incrementByOne([-1, 0, 98])).toEqual([0, 1, 99]);
        expect(funcs.incrementByOne([3])).toEqual([4]);
    });
});

describe('addItemToArray', () => {
    it('increments each array element by 1', () => {
        expect(funcs.incrementByOne([1, 2, 3])).toEqual([2, 3, 4]);
        expect(funcs.incrementByOne([-1, 0, 98])).toEqual([0, 1, 99]);
        expect(funcs.incrementByOne([3])).toEqual([4]);
    });
});

describe('addItemToFront', () => {
    it('adds item to front if array', () => {
        expect(funcs.addItemToFront([1, 2, 3], 0)).toEqual([0, 1, 2, 3]);
        expect(funcs.addItemToFront([-1, 0, 98], 'hi')).toEqual(['hi', -1, 0, 98]);
        expect(funcs.addItemToFront([3], 'bye')).toEqual(['bye', 3]);
    });
});

describe('wordsToSentence', () => {
    it('converts array of words to sentence', () => {
        expect(funcs.wordsToSentence(['hello', 'whats', 'up'])).toEqual('hello whats up');
        expect(funcs.wordsToSentence(['goodbye', 'now'])).toEqual('goodbye now');
    });
});

describe('contains', () => {
    it('return true if item is in array', () => {
        expect(funcs.contains(['hello', 'whats', 'up'], 'hello')).toBeTruthy();
        expect(funcs.contains(['goodbye', 'now'], 'now')).toBeTruthy();
        expect(funcs.contains(['goodbye', 'now'], 'ow')).toBeFalsy();
    });
});

describe('addNumbers', () => {
    it('returns sum of numbers', () => {
        expect(funcs.addNumbers([8, 2, 5])).toBe(15);
        expect(funcs.addNumbers([1, 2, 7])).toBe(10);
        expect(funcs.addNumbers([0, -10, -3])).toBe(-13);
    });
});

describe('averageTestScore', () => {
    it('return true if item is in array', () => {
        expect(funcs.averageTestScore([100, 90, 95])).toBe(95);
        expect(funcs.averageTestScore([105, 100, 95])).toBe(100);
        expect(funcs.averageTestScore([-5, 0, 5])).toBe(0);
    });
});

describe('largestNumber', () => {
    it('return largest number', () => {
        expect(funcs.largestNumber([1, 2, 3])).toBe(3);
        expect(funcs.largestNumber([-1, 0, 1])).toBe(1);
        expect(funcs.largestNumber([-72, 56, 108])).toBe(108);
    });
});