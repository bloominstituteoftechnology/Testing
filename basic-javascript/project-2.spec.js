const helpers = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('getBiggest', () => {
    it('should return biggest number', () => {
        expect(helpers.getBiggest(4, 5)).toBe(5)
    })
    it('should return y if numbers are same', () => {
        expect(helpers.getBiggest(5, 5)).toBe(5)
    })
})

describe('greeting', () => {
    it('should return Hola!', () => {
        expect(helpers.greeting('Spanish')).toBe('Hola!')
    })
    it('should return Guten Tag', () => {
        expect(helpers.greeting('German')).toBe('Guten Tag!')
    })
    it('should return Hello', () => {
        expect(helpers.greeting('asdasd')).toBe('Hello!')
    })
})

describe('isTenOrFive', () => {
    it('should return true if number is 10 or 5', () => {
        expect(helpers.isTenOrFive(10)).toEqual(true)
    })
})

describe('isInRange', () => {
    it('should return true if between 20 and 50', () => {
        expect(helpers.isInRange(30)).toEqual(true)
    })
})

describe('isInteger', () => {
    it('should return true if input is number', () => {
        expect(helpers.isInteger(5)).toEqual(true)
    })
    it('should return false if input is string', () => {
        expect(helpers.isInteger('hi')).toEqual(false)
    })
})

describe('fizzBuzz', () => {
    it('should return fizzbuzz if divisible by 5 and 3', () => {
        expect(helpers.fizzBuzz(15)).toBe('fizzbuzz')
    })
})

describe('isPrime', () => {
    it('should return true if number is prime', () => {
        expect(helpers.isPrime(7)).toBe(true)
        expect(helpers.isPrime(8)).toBe(false)
    })
})

describe('returnFirst', () => {
    it('should return first element of array', () => {
        expect(helpers.returnFirst([1, 2, 3, 4, 5])).toBe(1)
    })
})

describe('returnLast', () => {
    it('should return last element of array', () => {
        expect(helpers.returnLast([1, 2, 3, 4, 5, 6])).toBe(6)
    })
})

describe('getArrayLength', () => {
    it('should return length of array', () => {
        expect(helpers.getArrayLength([1, 2, 3, 4, 5])).toBe(5)
    })
})

describe('incrementByOne', () => {
    it('should return array with each value increased by 1', () => {
        expect(helpers.incrementByOne([1, 2, 3])).toEqual([2, 3, 4])
    })
})

describe('addItemToArray', () => {
    it('should push new item into array', () => {
        expect(helpers.addItemToArray([1, 2, 3], 4)).toEqual([1, 2, 3, 4])
    })
})

describe('addItemToFront', () => {
    it('should unshift item to front of array', () => {
        expect(helpers.addItemToFront([1, 2, 3], 0)).toEqual([0, 1, 2, 3])
    })
})

describe('wordsToSentence', () => {
    it('should put words into new sentence', () => {
        expect(helpers.wordsToSentence('welcometobarstow')).toEqual('w e l c o m e t o b a r s t o w')
    })
})

describe('contains', () => {
    it('should return true if array has item in it', () => {
        expect(helpers.contains([1, 2, 3], 2)).toEqual(true)
    })
})

describe('addNumbers', () => {
    it('should add all numbers in array', () => {
        expect(helpers.addNumbers([1,2,3])).toBe(6)
    })
})

describe('averageTestScore', () => {
    it('should return average of array', () => {
        expect(helpers.averageTestScore([1,2,3])).toBe(2)
    })
})

describe('largestNumber', () => {
    it('should return largest number of array', () => {
        expect(helpers.largestNumber([1,2,3,4,5])).toBe(5)
    })
})