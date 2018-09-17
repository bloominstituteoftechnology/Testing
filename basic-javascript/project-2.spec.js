const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
it('should return the greater of two numbers', () => {
    expect(funcs.getBiggest(4, 7)).toBe(7)
    expect(funcs.getBiggest(-7, -4)).toBe(-4)
});

it('should return a greeting in a given language', () => {
    expect(funcs.greeting('Spanish')).toBe('Hola!')
    expect(funcs.greeting()).toBe('Hello!')
});

it('should check if a number is 5 or 10', () => {
    expect(funcs.isTenOrFive(5)).toBeTruthy()
    expect(funcs.isTenOrFive('10')).toBeFalsy()
});

it('should check if a number between 20 and 50', () => {
    expect(funcs.isInRange(37)).toBeTruthy()
    expect(funcs.isInRange(5)).toBeFalsy()
});

it('should check if a number is a whole number', () => {
    expect(funcs.isInteger(37)).toBeTruthy()
    expect(funcs.isInteger(5.4)).toBeFalsy()
});

it('should check if a number is divisible by 3 or 5 or both', () => {
    expect(funcs.fizzBuzz(15)).toBe('fizzbuzz')
    expect(funcs.fizzBuzz(5)).toBe('buzz')
    expect(funcs.fizzBuzz(12)).toBe('fizz')
    expect(funcs.fizzBuzz(13)).toBe(13)
});

it('should check if a number is prime', () => {
    expect(funcs.isPrime(19)).toBeTruthy()
    expect(funcs.isPrime(22)).toBeFalsy()
});

it('should return the first item in an array', () => {
    let a = [5, 6 , 7]
    let b = ['a', 'b', 'c']
    let c = []
    expect(funcs.returnFirst(a)).toBe(5)
    expect(funcs.returnFirst(b)).toBe('a')
    expect(funcs.returnFirst(c)).toBe(null)
});

it('should return the last item in an array', () => {
    let a = [5, 6, 7]
    let b = ['a', 'b', 'c']
    let c = []
    expect(funcs.returnLast(a)).toBe(7)
    expect(funcs.returnLast(b)).toBe('c')
    expect(funcs.returnLast(c)).toBe(null)
});

it('should check the length of an array', () => {
    let a = [5, 6, 7]
    let c = []
    expect(funcs.getArrayLength(a)).toBe(3)
    expect(funcs.getArrayLength(c)).toBe(0)
});

it('should increment every number in an array by 1', () => {
    let a = [5, 6, 7]
    let b = ['a', 'b', 'c']
    expect(funcs.incrementByOne(a)).toEqual([6, 7, 8])
    expect(funcs.incrementByOne(b)).toBe(b)
});

it('should add an item to the end of an array', () => {
    let a = [5, 6, 7]
    let b = ['a', 'b', 'c']
    expect(funcs.addItemToArray(a, 8)).toEqual([5, 6, 7, 8])
    expect(funcs.addItemToArray(b, 'd')).toEqual(['a', 'b', 'c', 'd'])
});

it('should add an item to the front of an array', () => {
    let a = [5, 6, 7]
    let b = ['a', 'b', 'c']
    expect(funcs.addItemToFront(a, 8)).toEqual([8, 5, 6, 7])
    expect(funcs.addItemToFront(b, 'd')).toEqual(['d', 'a', 'b', 'c'])
});

it('should add an array of words to a sentence', () => {
    let a = ['this', 'is', 'a', 'new', 'sentence']
    let b = [2, 'and', 2, 'equals', 4]
    expect(funcs.wordsToSentence(a)).toBe('this is a new sentence')
    expect(funcs.wordsToSentence(b)).toBe('2 and 2 equals 4')
});

it('should check if an array contains an item', () => {
    let a = ['dog', 'cat', 'mouse']
    expect(funcs.contains(a, 'cat')).toBe(true)
});

it('should add all numbers in an array', () => {
    let a = [5, 6, 'eight', 1]
    expect(funcs.addNumbers(a)).toBe(12)
});

it('should return the average test score of an array', () => {
    let a = [51, 62, 75]
    expect(funcs.averageTestScore(a)).toBeCloseTo(62.67)
});

it('should return the largest number in an array', () => {
    let a = [5, 6, 1]
    expect(funcs.largestNumber(a)).toBe(6)
});