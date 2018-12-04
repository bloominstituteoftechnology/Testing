const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('getBiggest', () => {
    it('if 6 is greater than 3, it should return 6', () => {
        expect(funcs.getBiggest(6,3)).toEqual(6);
        expect(funcs.getBiggest(6, 6)).toEqual(6);
        expect(funcs.getBiggest(5, 6)).toEqual(6);
    })
})

describe('greeting', () => {
    it('it should return the proper greeting for each language', () => {
        expect(funcs.greeting('German')).toEqual('Guten Tag!');
        expect(funcs.greeting('Spanish')).toEqual('Hola!');
        expect(funcs.greeting('')).toEqual('Hello!');
    })
})

describe('isTenOrFive', () => {
    it('It should return true for 5 or 10 and false for 8', () => {
        expect(funcs.isTenOrFive(10)).toBe(true);
        expect(funcs.isTenOrFive(5)).toBe(true);
        expect(funcs.isTenOrFive(8)).toBe(false);
    })
})

describe('isInRange', () => {
    it('It should return true if the number is less than 50 and greater than 20, and false if the number is greater than 50', () => {
        expect(funcs.isInRange(21)).toBe(true);
        expect(funcs.isInRange(49)).toBe(true);
        expect(funcs.isInRange(51)).toBe(false);
    })
})

describe('isInteger', () => {
    it('If the number is not a fixed number, it should return false', () => {
        expect(funcs.isInteger(40)).toBe(true);
        expect(funcs.isInteger(40.5)).toBe(false);
    })
})

describe('fizzBuzz', () => {
    it('multiplies of 3 and 5 should output "fizzbuzz" ', () => {
        expect(funcs.fizzBuzz(30)).toEqual('fizzbuzz');
        expect(funcs.fizzBuzz(15)).toEqual('fizzbuzz');
    })
})

describe('isPrime', () => {
    it('it returns true for prime numbers and false for other numbers', () => {
        expect(funcs.isPrime(37)).toBe(true);
        expect(funcs.isPrime(44)).toBe(false);
    })
})


describe('returnFirst', () => {
    it('it should return the first item in the array', () => {
        expect(funcs.returnFirst( [1, 2, 3] )).toEqual(1);
        expect(funcs.returnFirst([4, 5, 6])).toEqual(4);
    })
})


describe('getArrayLength', () => {
    it('it should return the length of the array', () => {
        expect(funcs.getArrayLength(['a','e','i','o', 'u'])).toEqual(5);
        expect(funcs.getArrayLength(['a'])).toEqual(1);
    })
})

describe('incrementByOne', () => {
    it('it should add 1 to every number in the array', () => {
        expect(funcs.incrementByOne([2,3])).toEqual([3,4]);
    })
})

describe('addItemToArray', () => {
    it('it should add another item to the array', () => {
        expect(funcs.addItemToArray(['one'], 'two')).toEqual(['one', 'two']);
    })
})

describe('addItemToFront', () => {
    it('it should add an item to the front of the array', () => {
        expect(funcs.addItemToFront(['second'], 'first')).toEqual(['first', 'second']);
    })
})

describe('wordsToSentence', () => {
    it('it should return a sentence', () => {
        expect(funcs.wordsToSentence(['I want to', 'sleep'])).toEqual('I want to sleep');
    })
})

describe('contains', () => {
    it('it should return true if the array contains the same item ', () => {
        expect(funcs.contains(['one'], 'one')).toBe(true);
        expect(funcs.contains(['one'], 'two')).toBe(false);
    })
})

describe('addNumbers', () => {
    it('it should add all the numbers in the array', () => {
        expect(funcs.addNumbers([2,4])).toEqual(6);
        expect(funcs.addNumbers([3,8,2])).toEqual(13);
    })
})

describe('averageTestScore', () => {
    it('it should return the average score', () => {
        expect(funcs.averageTestScore([50, 20, 90, 21])).toEqual(45.25);
    })
})

describe('largestNumber', () => {
    it('it should return the largest number in the array', () => {
        expect(funcs.largestNumber([1, 5, 20])).toEqual(20);
    })
})

