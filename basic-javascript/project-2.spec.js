const funcs = require('./project-2');

describe('project 2 tests', () => {
    it ('should getBiggest', () => {
        expect(funcs.getBiggest(10, 100)).toBe(100)
    })

    it ('should greet by language', () => {
        expect(funcs.greeting('Telugu')).toBe('Namaste')
    })

    it ('should check if 10 or 5', () => {
        expect(funcs.isTenOrFive(10)).toBe(true)
        expect(funcs.isTenOrFive(1)).toBe(false)
    })

    it ('should check if is range', () => {
        expect(funcs.isInRange(20)).toBe(false)
        expect(funcs.isInRange(49)).toBe(true)
    })

    it ('should check if integer', () => {
        expect(funcs.isInteger(10)).toBe(true)
    })

    it ('should retrun fizz or buzz', () => {
        expect(funcs.fizzBuzz(5)).toBe('buzz')
    })

    it ('should check if is prime', () => {
        expect(funcs.isPrime(1)).toBe(false)
    })

    it ('should return the first element of array', () => {
        expect(funcs.returnFirst([1,2,2])).toBe(1)
    })

    it ('should return last element of array', () => {
        expect(funcs.returnLast([1])).toBe(1)
    })

    it ('should return array length', () => {
        expect(funcs.getArrayLength([])).toBe(0)
    })

    it ('should increment by one', () => {
        expect(funcs.incrementByOne([2,2])).toContainEqual(3)
    })

    it ('should add item to array', () => {
        expect(funcs.addItemToArray([12,13], 10)).toContain(10)
    })

    it ('should item to front', () => {
        const newArra = funcs.addItemToFront([10, 20], 1)
        expect(newArra[0]).toBe(1)
    })

    it ('should convert words to sentence', () => {
        expect(funcs.wordsToSentence(['hello','world'])).toBe('hello world')
    })

    it ('should contain the number in arr', () => {
        expect(funcs.contains([1,2,3], 3)).toBe(true)
    })

    it ('should add number', () => {
        expect(funcs.addNumbers([10, 10, 3])).toBe(23)
    })

    it ('should return average test score', () => {
        expect(funcs.averageTestScore(10, 15, 20)).toBeNaN()
        expect(funcs.averageTestScore([10, 15, 20])).toBe(15)
    })

    it ('should return largest number', () => {
        expect(funcs.largestNumber([10, 50, 20])).toBe(50)
    })
})