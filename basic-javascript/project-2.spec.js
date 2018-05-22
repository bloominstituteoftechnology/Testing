const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe ('default', () => {
    it('run the tests', () => {});
});

describe ('getBiggest', () => {
    it('return the biggest number out of x and y', () => {

    expect(funcs.getBiggest(10, 9)).toBe(10);
    expect(funcs.getBiggest(10, 10)).toBe(10)
    })
})

describe ('greeting', () => {
    it('return greeting in specified language ending with exclamation point', () => {
    
    expect(funcs.greeting('Spanish')).toBe('Hola!');
    expect(funcs.greeting('German')).toBe('Guten Tag!');
    expect(funcs.greeting()).toMatch('Hello!')
    })
})

describe ('isTenorFive', () => {
    it('return true if number is ten or five, else return false', () => {

    expect(funcs.isTenOrFive(10)).toBe(true);
    expect(funcs.isTenOrFive(5)).toBe(true);
    expect(funcs.isTenOrFive(100)).toBe(false)
    })
})


describe ('isInRange', () => {
    it('return true if number is lesser than 50 and greater than 20, else return false', () => {

    expect(funcs.isInRange(30)).toBe(true);
    expect(funcs.isInRange(10)).toBe(false);
    expect(funcs.isInRange(60)).toBe(false)
    })
})

describe ('isInteger', () => {
    it('return true if number is an integer, else return false', () => {

    expect(funcs.isInteger(10)).toBe(true);
    expect(funcs.isInteger(10.5)).toBe(false);
    })
})

describe ('fizzBuzz', () => {
    it('return fizzbuzz if number is divisible by 5 and 3, return buzz if number is divisible by 5, return fizz if number is divisible by 3', () => {

    expect(funcs.fizzBuzz(15)).toBe('fizzbuzz');
    expect(funcs.fizzBuzz(10)).toBe('buzz');
    expect(funcs.fizzBuzz(9)).toBe('fizz');
    expect(funcs.fizzBuzz(2)).toBe(2)
    })
})

describe ('isPrime', () => {
    it('return false if number is negative, zero, one, or even, else return true', () => {

    expect(funcs.isPrime(-1)).toBe(false);
    expect(funcs.isPrime(0)).toBe(false);
    expect(funcs.isPrime(1)).toBe(false);
    expect(funcs.isPrime(10)).toBe(false);
    expect(funcs.isPrime(5)).toBe(true)
    })
})

describe ('returnFirst', () => {
    it('return first number in an array', () => {

    expect(funcs.returnFirst([0, 1, 2])).toBe(0);
    })
})

describe ('returnLast', () => {
    it('return last number in an array', () => {

    expect(funcs.returnLast([0, 1, 2])).toBe(2);
    })
})

describe ('getArrayLength', () => {
    it('return the length of an array', () => {

    expect(funcs.getArrayLength([0, 1, 2])).toBe(3);
    })
})

describe ('incrementByOne', () => {
    it('return array with values incremented by one', () => {

    expect(funcs.incrementByOne([0, 0])).toEqual([1, 1]);
    })
})

describe ('addItemtoArray', () => {
    it('return an array with item added', () => {

    expect(funcs.addItemToArray([1, 0], 2)).toEqual([1, 0, 2]);
    })
})

describe ('addItemtoFront', () => {
    it('return array with item added to front of array', () => {

    expect(funcs.addItemToFront([1, 0], 2)).toEqual([2, 1, 0]);
    })
})

describe ('wordsToSentence', () => {
    it('return sentence from words', () => {

    expect(funcs.wordsToSentence(['hello', 'there'])).toBe('hello there')
    })
})

describe ('contains', () => {
    it('return true if item is contained in the array, return false if not', () => {

    expect(funcs.contains([1, 2], 2)).toBe(true)
    expect(funcs.contains([1, 2], 3)).toBe(false)
    })
})

describe ('addNumbers', () => {
    it('return sum of numbers added together', () => {

    expect(funcs.addNumbers([5, 6])).toBe(11)
    })
})

describe ('averageTestScore', () => {
    it('return average of all test score sums', () => {

    expect(funcs.averageTestScore([5, 6, 7])).toBe(6)
    })
})

describe ('largestNumber', () => {
    it('return the largest number in an array', () => {
    
    expect(funcs.largestNumber([5, 6, 7, 8])).toBe(8)
    })
})