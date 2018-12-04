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
test('is ten or five', () => {
    const num = 10
    expect(isTenOrFive(num)).toBeTruthy()
})
test('is in range', () => {
    const num = 40
    expect(isInRange(num)).toBeTruthy()
})
test('is integer', () => {
    const num = 3
    expect(isInteger(num)).toBeTruthy()
})
test('fizz buzz', () => {
    const num = 20
    expect(fizzBuzz(num)).toBeTruthy()
})