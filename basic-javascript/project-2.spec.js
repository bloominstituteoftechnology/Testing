const { getBiggest, greeting, isTenOrFive, isInRange, isInteger, fizzBuzz, isPrime, returnFirst, returnLast, getArrayLength, incrementByOne, addItemToArray, addItemToFront, wordsToSentence, contains, addNumbers, averageTestScore, largestNumber } = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('get biggest', () => {
    test('numbers work', () => {
        const x = 'string'
        const y = 1
        expect(getBiggest(x.length, y)).toBeTruthy()
    })
    test('is a number', () => {
        const x = 1
        const y = {}
        expect(getBiggest(x,y)).toBe(null)
    })
})