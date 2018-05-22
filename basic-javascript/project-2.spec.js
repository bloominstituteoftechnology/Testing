const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
it('getBiggest', () => {
    expect(funcs.getBiggest(6, 8)).toBe(8)
})

describe('greeting', () => {
    it('greeting in German', () => {
        expect(funcs.greeting('German')).toBe('Guten Tag!')
    })
    it('greeting in Spanish', () => {
        expect(funcs.greeting('Spanish')).toBe('Hola!')
    })
    it('greeting by Default', () => {
        expect(funcs.greeting('greeting')).toBe('Hello!')
    })
})

it('isTenOrFive', () => {
    expect(funcs.isTenOrFive(10)).toBe(true)
    expect(funcs.isTenOrFive(5)).toBe(true)
    expect(funcs.isTenOrFive(8)).toBe(false)
})

it('isInRange', () => {
    expect(funcs.isInRange(28)).toBe(true)
    expect(funcs.isInRange(8)).toBe(false)
})

it('isInteger', () => {
    expect(funcs.isInteger(8)).toBe(true)
    expect(funcs.isInteger(88.88)).toBe(false)
    expect(funcs.isInteger('8')).toBe(false)
})

it('fizzBuzz', () => {
    expect(funcs.fizzBuzz(3)).toBe('fizz')
    expect(funcs.fizzBuzz(5)).toBe('buzz')
    expect(funcs.fizzBuzz(15)).toBe('fizzBuzz')
})

it('isPrime', () => {
    expect(funcs.isPrime(3)).toBe(true)
    expect(funcs.isPrime(8)).toBe(false)
})

it('returnFirst', () => {
    expect(funcs.returnFirst([8, 1, 2])).toBe(8)
    expect(funcs.returnFirst('blossum')).toBe('b')
})

it('returnLast', () => {
    expect(funcs.returnLast([2, 1, 8])).toBe(8)
})

it('getArrayLength', () => {
    expect(funcs.getArrayLength('cherry')).toBe(6)
})

it('incrementByOne', () => {
    const arr = [5, 1, 5]
    const expectedArr = [6, 2, 6]
    expect(funcs.incrementByOne(arr)).toEqual(expectedArr)
})

it('addItemToArray', () => {
    const expected = [5, 3, 8]
    expect(funcs.addItemToArray([5, 3], 8)).toEqual(expected)
})

it('addItemToFront', () => {
    const expect = [8, 3, 5]
    expect(funcs.addItemToFront([3, 5], 8)).toEqual(expected)
})

it('wordsToSentence', () => {
    const actual = ['Kenzie', 'is', 'a', 'dog']
    const expected = 'Kenzie is a dog'
    expect(funcs.wordsToSentence(actual)).toBe(expected)
})

it('contains', () => {
    expect(funcs.contains(['Kenzie', 'Dog', 'Hungry'], 'Kenzie')).toBeTruthy()
    expect(funcs.contains(['Kenzie', 'Dog', 'Hungry'], 'Orange')).toBeFalsy()
})

it('addNumber', () => {
    const sum = 8
    expect(funcs.addNumbers([2, 4, 2])).toBe(sum)
})

it('averageTestScore', () => {
    const average = (2 + 4 + 6 + 8) / 4
    expect(funcs.averageTestScore([2, 4, 6, 8])).toBe(average)
})

it('largestNumber', () => {
  const largest = 18
  expect(funcs.largestNumber([2, 4, 6, 8, 18])).toBe(largest)
})