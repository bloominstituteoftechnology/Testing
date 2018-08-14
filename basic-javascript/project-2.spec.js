const funcs = require('./project-2');

describe('Get Biggest', () => {
  test('Should return the larger of the numbers', () => {
    expect(funcs.getBiggest(489, 723)).toEqual(723)
  })
  test('Should return false if value is undefined', () => {
    expect(funcs.getBiggest(undefined, 723)).toEqual(false)
  })
})
describe('Get greeting', () => {
  test('Should return Hello in said language', () => {
    expect(funcs.greeting('German')).toEqual('Guten Tag!')
  })
  test('Should return false if value is undefined', () => {
    expect(funcs.greeting()).toEqual('Hello!')
  })
})
describe('Number is ten or five', () => {
  test('Should return true if number is ten or five', () => {
    expect(funcs.isTenOrFive(5)).toEqual(true)
  })
  test('Should return false if value is undefined', () => {
    expect(funcs.isTenOrFive(undefined)).toEqual(false)
  })
})
describe('Number is in range', () => {
  test('Should return true if number is >20 and <50', () => {
    expect(funcs.isInRange(23)).toEqual(true)
  })
  test('Should return false if value is undefined', () => {
    expect(funcs.isInRange(undefined)).toEqual(false)
  })
})
describe('Number is integer', () => {
  test('Should return true if number is whole integer', () => {
    expect(funcs.isInteger(23)).toEqual(true)
  })
  test('Should return false if value is undefined', () => {
    expect(funcs.isInteger(undefined)).toEqual(false)
  })
})
describe('Number is fizzBuzz', () => {
  test('Should return fizzBuzz if number % 5 and 3', () => {
    expect(funcs.fizzBuzz(15)).toEqual('fizzbuzz')
  })
  test('Should return buzz if number % 5', () => {
    expect(funcs.fizzBuzz(10)).toEqual('buzz')
  })
  test('Should return fizz if number % 3', () => {
    expect(funcs.fizzBuzz(9)).toEqual('fizz')
  })
  test('Should return number if number is not % 5 and 3', () => {
    expect(funcs.fizzBuzz(16)).toEqual(16)
  })
  test('Should return false if value is undefined', () => {
    expect(funcs.fizzBuzz(undefined)).toEqual(false)
  })
})
describe('Number is Prime', () => {
  test('Should return true if number is prime', () => {
    expect(funcs.isPrime(29)).toEqual(true)
    expect(funcs.isPrime(18)).toEqual(false)
  })
  test('Should return false if value is undefined', () => {
    expect(funcs.isPrime(undefined)).toEqual(false)
  })
})
describe('Return first number', () => {
  test('Should return the first number in an array', () => {
    expect(funcs.returnFirst([4,9,2,7])).toEqual(4)
  })
  test('Should return false if value is undefined', () => {
    expect(funcs.returnFirst(undefined)).toEqual(false)
  })
})
describe('Return last number', () => {
  test('Should return the last number in an array', () => {
    expect(funcs.returnLast([4,9,2,7])).toEqual(7)
  })
  test('Should return false if value is undefined', () => {
    expect(funcs.returnLast(undefined)).toEqual(false)
  })
})
describe('Return array length', () => {
  test('Should return the length of an array', () => {
    expect(funcs.getArrayLength([4,9,2,7])).toEqual(4)
  })
  test('Should return false if value is undefined', () => {
    expect(funcs.getArrayLength(undefined)).toEqual(false)
  })
})
describe('Increment by one', () => {
  test('Should increment each item of an array by 1', () => {
    expect(funcs.incrementByOne([4,9,2,7])).toEqual([5,10,3,8])
  })
  test('Should return false if value is undefined', () => {
    expect(funcs.incrementByOne(undefined)).toEqual(false)
  })
})
describe('Add item to array', () => {
  test('Should add item to the array', () => {
    expect(funcs.addItemToArray([4,9,2,7], 8)).toEqual([4,9,2,7,8])
  })
  test('Should return false if value is undefined', () => {
    expect(funcs.addItemToArray(undefined)).toEqual(false)
  })
})
describe('Add item to front of array', () => {
  test('Should add item to the front of the array', () => {
    expect(funcs.addItemToFront([4,9,2,7], 8)).toEqual([8,4,9,2,7])
  })
  test('Should return false if value is undefined', () => {
    expect(funcs.addItemToFront(undefined)).toEqual(false)
  })
})
describe('Words to Scentence', () => {
  test('Should add all word in array together to one string', () => {
    expect(funcs.wordsToSentence(['Hello', 'my', 'name', 'is', 'John!'])).toEqual('Hello my name is John!')
  })
  test('Should return false if value is a number', () => {
    expect(funcs.wordsToSentence(['Hello', 'my', 2, 'is', 'John!'])).toEqual(false)
  })
})
describe('Array contains', () => {
  test('Should return true if array contains the item', () => {
    expect(funcs.contains(['Hello', 'my', 'name', 'is', 'John!'], 'John!')).toEqual(true)
  })
  test('Should return false if array does not contain the item', () => {
    expect(funcs.contains(['Hello', 'my', 'name', 'is', 'John!'], 'Sally!')).toEqual(false)
  })
})
describe('Array sum', () => {
  test('Should return the sum of all items in the array', () => {
    expect(funcs.addNumbers([4,7,3,9,2])).toEqual(25)
  })
  test('Should return false if array does not contain the item', () => {
    expect(funcs.addNumbers(undefined)).toEqual(false)
  })
})
describe('Test Score Average', () => {
  test('Should return the average of all test scores in the array', () => {
    expect(funcs.averageTestScore([90, 93, 86, 91, 89])).toEqual(89.8)
  })
  test('Should return false if array does not contain the item', () => {
    expect(funcs.averageTestScore(undefined)).toEqual(false)
  })
})
describe('Largest Number', () => {
  test('Should return the largest number in the array', () => {
    expect(funcs.largestNumber([90, 93, 86, 91, 89])).toEqual(93)
  })
  test('Should return false if array does not contain the item', () => {
    expect(funcs.largestNumber(undefined)).toEqual(false)
  })
})
