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
test('is prime', () => {
    const num = 7
    expect(isPrime(num)).toBeTruthy()
})
test('return first index of array', () => {
    const arr = ['one', 'two', 'three']
    expect(returnFirst(arr)).toBe(arr[0])
})
test('return last item in an array', () => {
    const arr = ['one', 'two', 'three']
    expect(returnLast(arr)).toBe(arr[arr.length-1])
})
test('get array length', () => {
    const arr = ['one', 'two', 'three']
    expect(getArrayLength(arr)).toBe(arr.length)
})
test('increment by one', () => {
    const arr = [1,2,3]
    expect(incrementByOne(arr)).toEqual([2,3,4])
})
test('add item to array', () => {
    const arr = ['one', 'two', 'three']
    const item = 'four'
    expect(addItemToArray(arr, item)).toEqual([...arr])
})
test('add item to array', () => {
    const arr = ['one', 'two', 'three']
    const item = 'zero'
    expect(addItemToFront(arr, item)).toEqual([...arr])
})