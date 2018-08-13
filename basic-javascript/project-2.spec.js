const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('getBiggest', () => {
    it('should return the biggest num', () => {
        expect(funcs.getBiggest(1, 2)).toEqual(2);
    });
});

describe('greeting', () => {
    it('should return German greeting', () => {
        expect(funcs.greeting('German')).toEqual('Guten Tag!');
    });
    it('should return Spanish greeting', () => {
        expect(funcs.greeting('Spanish')).toEqual('Hola!');
    });
    it('should return default greeting', () => {
        expect(funcs.greeting('English')).toEqual('Hello!');
    });
});

describe('isTenOrFive', () => {
    it('should return true if num is 10', () => {
        expect(funcs.isTenOrFive(10)).toEqual(true);
    });
    it('should return true if num is 5', () => {
        expect(funcs.isTenOrFive(5)).toEqual(true);
    });
    it('should return false otherwise', () => {
        expect(funcs.isTenOrFive(1)).toEqual(false);
    });
});

describe('isInRange', () => {
    it('should return true if num is in range', () => {
        expect(funcs.isInRange(35)).toEqual(true);
    });
    it('should return false if num is out of range', () => {
        expect(funcs.isInRange(1)).toEqual(false);
        expect(funcs.isInRange(100)).toEqual(false);
    });
});

describe('isInteger', () => {
    it('should return true if num is an int', () => {
        expect(funcs.isInteger(5)).toEqual(true);
    });
    it('should return false if num is not an int', () => {
        expect(funcs.isInteger(5.5)).toEqual(false);
    });
});

describe('fizzBuzz', () => {
    it('should return fizz if num is a multiple of 3', () => {
        expect(funcs.fizzBuzz(3)).toEqual('fizz');
    });
    it('should return buzz if num is a multiple of 5', () => {
        expect(funcs.fizzBuzz(5)).toEqual('buzz');
    });
    it('should return fizzbuzz if num is a multiple of 3 and 5', () => {
        expect(funcs.fizzBuzz(15)).toEqual('fizzbuzz');
    });
    it('should return num otherwise', () => {
        expect(funcs.fizzBuzz(1)).toEqual(1);
    });
});

describe('isPrime', () => {
    it('should return true if num is a prime', () => {
        expect(funcs.isPrime(5)).toEqual(true);
    });
    it('should return false if num is not a prime', () => {
        expect(funcs.isPrime(-1)).toEqual(false);
        expect(funcs.isPrime(0)).toEqual(false);
        expect(funcs.isPrime(1)).toEqual(false);
    });
});

describe('returnFirst', () => {
    it('should return first element in array', () => {
        expect(funcs.returnFirst([0])).toEqual(0);
    });
});

describe('returnLast', () => {
    it('should return last element in array', () => {
        expect(funcs.returnLast([0, 1])).toEqual(1);
    });
});

describe('getArrayLength', () => {
    it('should return array length', () => {
        expect(funcs.getArrayLength([1])).toEqual(1);
    });
});

describe('incrementByOne', () => {
    it('should increment each element in array by one', () => {
        expect(funcs.incrementByOne([0, 1])).toEqual([1, 2]);
    });
});

describe('addItemToArray', () => {
    it('should add item to array', () => {
        expect(funcs.addItemToArray([0, 1], 2)).toEqual([0, 1, 2]);
    });
});

describe('addItemToFront', () => {
    it('should add item to the front of array', () => {
        expect(funcs.addItemToFront([0, 1], 2)).toEqual([2, 0, 1]);
    });
});

describe('wordsToSentence', () => {
    it('should return sentence from array of words', () => {
        expect(funcs.wordsToSentence(['Hello', 'World'])).toEqual('Hello World');
    });
});

describe('contains', () => {
    it('should return true if item is in array', () => {
        expect(funcs.contains([0, 1], 0)).toEqual(true);
    });
    it('should return false if item is not in array', () => {
        expect(funcs.contains([0, 1], 2)).toEqual(false);
    });
});

describe('addNumbers', () => {
    it('should return sum of array', () => {
        expect(funcs.addNumbers([0, 1])).toEqual(1);
    });
});

describe('averageTestScore', () => {
    it('should return average of array test scores', () => {
        expect(funcs.averageTestScore([1, 1])).toEqual(1);
    });
});

describe('largestNumber', () => {
    it('should return the largest number in the array', () => {
        expect(funcs.largestNumber([0, 1])).toEqual(1);
    });
});
