const funcs = require('../project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('full test suite', () => {

  it('should return largest of two numbers', () => {
    const expected = 110
    const actual = funcs.getBiggest(110, -109)
    expect(actual).toBe(expected);
  })

  it('should greet you in a different language ', () => {
    const expected = 'Guten Tag!'
    const actual = funcs.greeting('German')
    expect(actual).toBe(expected);
  })

  it('should return true if number is 10 or 5', () => {
    const expected = false
    const actual = funcs.isTenOrFive(11)
    expect(actual).toBe(expected);
  })

  it('should return true if number is between 20 and 50 (both not included)', () => {
    const expected = true
    const actual = funcs.isInRange(35)
    expect(actual).toBe(expected);
  })

  it('should return true if num is an integer ', () => {
    const expected = true
    const actual = funcs.isInteger(11)
    expect(actual).toBe(expected);
  })

  it('should pass the fizzbuzz test', () => {
    const expected = 'fizzbuzz'
    const actual = funcs.fizzBuzz(15)
    expect(actual).toBe(expected);
  })

  it('should return true if num is prime ', () => {
    const expected = true
    const actual = funcs.isPrime(11)
    expect(actual).toBe(expected);
  })

  it('should return the first item in the array', () => {
    const expected = 110
    const actual = funcs.returnFirst([110, 111, 112, 113])
    expect(actual).toBe(expected);
  })

  it('should return the last item in the array ', () => {
    const expected = 113
    const actual = funcs.returnLast([110, 111, 112, 113])
    expect(actual).toBe(expected);
  })

  it('should return the lenght of the aray ', () => {
    const expected = 4
    const actual = funcs.getArrayLength([110, 111, 112, 113])
    expect(actual).toBe(expected);
  })

  it('should increment all numbers in the array by 1', () => {
    const expected = [111, 112, 113, 114]
    const actual = funcs.incrementByOne([110, 111, 112, 113])
    expect(actual).toEqual(expected);
  })


  it('should add the item to the end of the array', () => {
    const expected = [111, 112, 113, 114]
    const actual = funcs.addItemToArray([111, 112, 113], 114)
    expect(actual).toEqual(expected);
  })

  it('should add the item to the beginning of the array', () => {
    const expected = [110, 111, 112, 113]
    const actual = funcs.addItemToFront([111, 112, 113], 110)
    expect(actual).toEqual(expected);
  })

  it('should create a sentence from an array of words', () => {
    const expected = 'What a nice sentence!'
    const actual = funcs.wordsToSentence(['What', 'a', 'nice', 'sentence!'])
    expect(actual).toBe(expected);
  })

  it('should return true if the specified item is in the array', () => {
    const expected = true
    const actual = funcs.contains([110, 111, 112, 113], 113)
    expect(actual).toBe(expected);
  })


  it('should add all numbers in the array', () => {
    const expected = 446
    const actual = funcs.addNumbers([110, 111, 112, 113])
    expect(actual).toBe(expected);
  })

  it('should give you the average of the array', () => {
    const expected = 55.833
    const actual = funcs.averageTestScore([0, 25, 50, 75, 100, 85])
    expect(actual).toBeCloseTo(expected, 3);
  })

  it('should return the largest number in the array', () => {
    const expected = 113
    const actual = funcs.largestNumber([110, 111, 112, 113])
    expect(actual).toBe(expected);
  })

})
