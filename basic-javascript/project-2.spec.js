const { getBiggest, greeting, isTenOrFive, isInRange, isInteger, fizzBuzz, isPrime, returnFirst, returnLast, getArrayLength, incrementByOne, addItemToArray, addItemToFront, wordsToSentence, contains, addNumbers, averageTestScore, largestNumber } = require('./project-2');


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
test('receives greeting', () => {
    const language = 'german'
    expect(greeting(language)).toBeTruthy()
})