const { getBiggest,
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
    largestNumber} = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('getBiggest(x, y)', () => {
    it('returns the larger number of x and y', () => {
        expect(getBiggest(1, 2)).toBe(2);
        expect(getBiggest(2, 1)).toBe(2);
        expect(getBiggest(1, 1)).toBe(1);
    })
})

describe('greeting(language)', () => {
    it('should return \'Guten Tag!\' if case is German', () => {
        expect(greeting('German')).toBe('Guten Tag!');
    })
    it('should return \'Hola!\' if case is Spanish', () => {
        expect(greeting('Spanish')).toBe('Hola!');
    })
    it('should return \'Hello!\' if case is default', () => {
        expect(greeting()).toBe('Hello!');
        expect(greeting('English')).toBe('Hello!');
    })
})

describe('isTenOrFive()', () => {
    it('will return true if the argument is ten', () => {
        expect(isTenOrFive(10)).toBe(true);
    })
    it('will return true if the argument is five', () => {
        expect(isTenOrFive(5)).toBe(true);
    })
    it('will return false if the argument is not ten or five', () => {
        expect(isTenOrFive(4)).toBe(false);
    })
})

describe('isInRange(num)', () => {
    it('will return true if the argument is between 20 and 50', () => {
        expect(isInRange(35)).toBe(true);
    })
    it('will return false if the argument is not between 20 and 50', () => {
        expect(isInRange(51)).toBe(false);
    })
    it('will return false if the argument is equal to 20 or 50', () => {
        expect(isInRange(20)).toBe(false);
    })
})

describe('isInteger(num)', () => {
    it('will return true if the argument is an integer', () => {
        expect(isInteger(1)).toBe(true)
    })
    it('will return false if the argument is not an integer', () => {
        expect(isInteger(1.01)).toBe(false)
    })
})

describe('fizzBuzz(num)', () => {
    it('will return fizzBuzz if the argument is a multiple of both 3 and 5', () => {
        expect(fizzBuzz(15)).toBe('fizzBuzz');
    })
    it('will return fizz if the argument is a multiple of 3', () => {
        expect(fizzBuzz(9)).toBe('fizz');
    })
    it('will return buzz if the argument is a multiple of 5', () => {
        expect(fizzBuzz(10)).toBe('buzz');
    })
    it('will return num if the argument is not a multiple of 3 or 5', () => {
        expect(fizzBuzz(7)).toBe(7);
    })
})

describe('isPrime(num)', () => {
    it('should return false if the argument is less than 0', () => {
        expect(isPrime(-2)).toBe(false)
    })
    it('should return false if the argument is 1 or 0', () => {
        expect(isPrime(0)).toBe(false)
        expect(isPrime(1)).toBe(false)
    })
    it('should return true if the argument is a prime number', () => {
        expect(isPrime(7)).toBe(true)
    })
})

describe('returnFirst(arr)', () => {
    it('should return the first element of the array', () => {
        expect(returnFirst([7,8,6,5])).toBe(7)
    })
})

describe('returnLast(arr)', () => {
    it('should return the last element of the array', () => {
        expect(returnLast([7,8,6,5])).toBe(5)
    })
})

describe('getArrayLength(arr)', () => {
    it('should return the number of items in an array', () => {
        expect(getArrayLength([7,8,6,5])).toBe(4)
    })
})

describe('incrementByOne(arr)', () => {
    it('array should increase by one', () => {
        expect(incrementByOne([1,2,3])).toEqual([2,3,4])
    })
})

describe('addItemToArray(arr, item)', () => {
    it('should add an item to the end of an array', () => {
        expect(addItemToArray([1,2,3], 4)).toEqual([1,2,3,4])
    })
})

describe('addItemToFront(arr, item)', () => {
    it('should add an item to the front of an array', () => {
        expect(addItemToFront([4,6,8], 2)).toEqual([2,4,6,8])
    })
})

describe('wordsToSentence(words)', () => {
    it('should return a string of words', () => {
        expect(wordsToSentence(['this', 'assignment', 'sucks'])).toBe('this assignment sucks')
    })
})

describe('contains(arr, item)', () => {
    it('should return true if the array contains a certain item', () => {
        expect(contains(['this', 'assignment', 'sucks'], 'sucks')).toBe(true)
        expect(contains(['this', 'assignment', 'sucks'], 'doesnt suck')).toBe(false)
    })
})

describe('addNumbers(numbers', () => {
    it('should return the numbers added together', () => {
        expect(addNumbers([1,2,3])).toBe(6)
    })
})

describe('averageTestScore(testScores)', () => {
    it('should return the sum of scores divided by the number of scores', () => {
        expect(averageTestScore([100, 90, 80, 70])).toBe(85)
    })
})

describe('largestNumber(numbers)', () => {
    it('should return the largest integer in an array', () => {
        expect(largestNumber([3,5,8,13])).toBe(13)
    })
})