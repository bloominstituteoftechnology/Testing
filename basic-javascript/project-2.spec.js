const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('get biggest function', () => {
    it('should return x if x > y', () => {
        const getBiggest = funcs.getBiggest;
        const actual = getBiggest(4, 2);
        expect(actual).toBe(4);
    });
    it('should return y if x = y', () => {
        const getBiggest = funcs.getBiggest;
        const actual = getBiggest(3, 5);
        expect(actual).toBe(5);
    });
    it('should return y if y > x', () => {
        const getBiggest = funcs.getBiggest;
        const actual = getBiggest(2, 6);
        expect(actual).toBe(6);
    });
});

describe('greeting function', () => {
    it('should return Guten Tag!', () => {
        const greeting = funcs.greeting;
        const actual = greeting('German');
        expect(actual).toBe('Guten Tag!');
    });
    it('should return Hola!', () => {
        const greeting = funcs.greeting;
        const actual = greeting('Spanish');
        expect(actual).toBe('Hola!');
    });
    it('should return Hello!', () => {
        const greeting = funcs.greeting;
        const actual = greeting('Default');
        expect(actual).toBe('Hello!');
    });
});

describe('is ten or five function', () => {
    it('should return true if num is either 10 or 5', () => {
        const isTenOrFive = funcs.isTenOrFive;
        const actual = isTenOrFive(10, 2);
        expect(actual).toBe(true);
    });
    it('should return false if num is not 10 or 5', () => {
        const isTenOrFive = funcs.isTenOrFive;
        const actual = isTenOrFive(2, 3);
        expect(actual).toBe(false);
    });
});

describe('is in range function', () => {
    it('should return true if num is in range', () => {
        const isInRange = funcs.isInRange;
        const actual = isInRange(30);
        expect(actual).toBe(true);
    });
    it('should return false if num is not in range', () => {
        const isInRange = funcs.isInRange;
        const actual = isInRange(10);
        expect(actual).toBe(false);
    });
});

describe('is integer function', () => {
    it('should return true if num is an integer', () => {
        const isInteger = funcs.isInteger;
        const actual = isInteger(4);
        expect(actual).toBe(true);
    });
    it('should return false if num is not an integer', () => {
        const isInteger = funcs.isInteger;
        const actual = isInteger(3.52);
        expect(actual).toBe(false);
    });
});

describe('fizzBuzz function', () => {
    it('should return fizzbuzz', () => {
        const fizzBuzz = funcs.fizzBuzz;
        const actual = fizzBuzz(15);
        expect(actual).toBe('fizzbuzz');
    });
    it('should return buzz', () => {
        const fizzBuzz = funcs.fizzBuzz;
        const actual = fizzBuzz(10);
        expect(actual).toBe('buzz');
    });
    it('should return fizz', () => {
        const fizzBuzz = funcs.fizzBuzz;
        const actual = fizzBuzz(6);
        expect(actual).toBe('fizz');
    });
});

describe('is prime function', () => {
    it('should return false', () => {
        const isPrime = funcs.isPrime;
        const actual = isPrime(0);
        expect(actual).toBe(false);
    });
    it('should return true', () => {
        const isPrime = funcs.isPrime;
        const actual = isPrime(3);
        expect(actual).toBe(true);
    });
});

describe('return first function', () => {
    it('should return the first item in array', () => {
        const returnFirst = funcs.returnFirst;
        const actual = returnFirst(['elephant', 'tiger', 'cat']);
        expect(actual).toBe('elephant');
    });
});

describe('return last function', () => {
    it('should return the last item in the array', () => {
        const returnLast = funcs.returnLast;
        const actual = returnLast(['elephant', 'tiger', 'cat']);
        expect(actual).toBe('cat');
    });
});

describe('get array length function', () => {
    it('should return the length of the array', () => {
        const getArrayLength = funcs.getArrayLength;
        const actual = getArrayLength(['elephant', 'tiger', 'cat']);
        expect(actual).toBe(3);
    });
});

describe('increment by one function', () => {
    it('should return the array incremented by one', () => {
        const incrementByOne = funcs.incrementByOne;
        const actual = incrementByOne([3, 4, 5]);
        expect(actual).toEqual([4, 5, 6]);
    });
});

describe('add item to array function', () => {
    it('should return the new array with new item added', () => {
        const addItemToArray = funcs.addItemToArray;
        const actual = addItemToArray(['elephant', 'tiger', 'cat', 'lion'], 'dog');
        expect(actual).toEqual(['elephant', 'tiger', 'cat', 'lion', 'dog']);
    });
});

describe('add item to front of the array', () => {
    it('should return new array with added item in front', () => {
        const addItemToFront = funcs.addItemToFront;
        const actual = addItemToFront(['elephant', 'tiger', 'cat'], 'lion');
        expect(actual).toEqual(['lion', 'elephant', 'tiger', 'cat']);
    });
});

describe('words to sentence function', () => {
    it('should return newSentence', () => {
        const wordsToSentence = funcs.wordsToSentence;
        const actual = wordsToSentence(['Hello', 'World']);
        expect(actual).toEqual('Hello World');
    });
});

describe('contains function', () => {
    it('should return true', () => {
        const contains = funcs.contains;
        const actual = contains([1, 2, 4], 2);
        expect(actual).toBe(true);
    });
    it('should return false', () => {
        const contains = funcs.contains;
        const actual = contains([1, 3, 4], 2);
        expect(actual).toBe(false);
    });
});

describe('add numbers function', () => {
    it('should return sumOfNumbers', () => {
        const addNumbers = funcs.addNumbers;
        const actual = addNumbers([3, 4, 5]);
        expect(actual).toBe(12);
    });
});

describe('average test score function', () => {
    it('should return totalSumScores / numberOfScores', () => {
        const averageTestScore = funcs.averageTestScore;
        const actual = averageTestScore([10, 15, 5]);
        expect(actual).toBe(10);
    });
});

describe('largest number function', () => {
    it('should return the largest integer', () => {
        const largestNumber = funcs.largestNumber;
        const actual = largestNumber([10, 3, 15]);
        expect(actual).toBe(15);
    });
});