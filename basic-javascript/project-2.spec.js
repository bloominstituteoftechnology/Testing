const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('getBiggest', () => {
    it('compares two numbers and returns the largest number', () => {
        expect(funcs.getBiggest(5,2)).toBe(5)
        expect(funcs.getBiggest(-2, -5)).toBe(-2)
        expect(funcs.getBiggest(.2, 5)).toBe(5)
        expect(funcs.getBiggest(0,12)).toBe(12)
        expect(funcs.getBiggest(12,2)).toBe(12)
        expect(funcs.getBiggest(10,10)).toBe(10)
    })
    it('should return NaN if non-numeric values are entered', () => {
        expect(funcs.getBiggest([1,2], [2,3])).toBeNaN()
        expect(funcs.getBiggest({key: 'value'}, {key: 'value'})).toBeNaN()
        expect(funcs.getBiggest(false, false)).toBe(NaN)
        expect(funcs.getBiggest('7', '5')).toBe(NaN)
        expect(funcs.getBiggest(null, null)).toBeNaN()
    })
})

describe('greeting', () => {
    it('should return "Guten Tag!" if "German" is entered', () => {
        expect(funcs.greeting('German')).toBe('Guten Tag!')
    })
    it('should return "Hola!" if "Spanish" is entered', () => {
        expect(funcs.greeting('Spanish')).toBe('Hola!')
    })
    it('should return "Hello!" if any other input is given', () => {
        expect(funcs.greeting('English')).toBe('Hello!')
        expect(funcs.greeting([1,2,3])).toBe('Hello!')
        expect(funcs.greeting(27)).toBe('Hello!')
        expect(funcs.greeting(null)).toBe('Hello!')
        expect(funcs.greeting({key: 'value'})).toBe('Hello!')
        expect(funcs.greeting(true)).toBe('Hello!')
    })
})

describe('isTenOrFive', () => {
    it('should return true if the number entered is 5 or 10', () => {
        expect(funcs.isTenOrFive(5)).toBe(true)
        expect(funcs.isTenOrFive(10)).toBe(true)
        expect(funcs.isTenOrFive(-10)).toBe(false)
        expect(funcs.isTenOrFive(-5)).toBe(false)
    })
    it('should return false if the number entered is not 5 or 10', () => {
        expect(funcs.isTenOrFive(1)).toBe(false)
        expect(funcs.isTenOrFive(.2)).toBe(false)        
        expect(funcs.isTenOrFive(-20)).toBe(false)
    })
    it('should return false if the input was not a number', () => {
        expect(funcs.isTenOrFive({key: 'value'})).toBe(false)
        expect(funcs.isTenOrFive([1,2,3])).toBe(false)
        expect(funcs.isTenOrFive(false)).toBe(false)
        expect(funcs.isTenOrFive('7')).toBe(false)
        expect(funcs.isTenOrFive(null)).toBe(false)

    })
})

describe('isInRange', () => {
    it('should return true if a number is less than 50 and greater than 20', () => {
        expect(funcs.isInRange(23)).toBe(true)
        expect(funcs.isInRange(49)).toBe(true)
        expect(funcs.isInRange(20.000001)).toBe(true)
    })
    it('should return false if number is not less than 50 and greater than 20', () => {
        expect(funcs.isInRange(20)).toBe(false)
        expect(funcs.isInRange(-2)).toBe(false)
    })
    it('should return false if the input is not a number', () => {
        expect(funcs.isInRange([1,2,3])).toBe(false)
        expect(funcs.isInRange({key: 'value'})).toBe(false)
        expect(funcs.isInRange('7')).toBe(false)
        expect(funcs.isInRange(null)).toBe(false)
        expect(funcs.isInRange(false)).toBe(false)
    })
})

describe('isInteger', () => {
    it('should return true if a number is an integer', () => {
        expect(funcs.isInteger(12)).toBe(true)
        expect(funcs.isInteger(21)).toBe(true)
        expect(funcs.isInteger(-21)).toBe(true)
        expect(funcs.isInteger(0)).toBe(true)
    })
    it('should return false if the number is not an integer', () => {
        expect(funcs.isInteger(.2)).toBe(false)
        expect(funcs.isInteger(-.5)).toBe(false)
        expect(funcs.isInteger(Math.pow(2,.2))).toBe(false)
    })
    it('should return false if the input is not a number', () => {
        expect(funcs.isInteger([1,2,3])).toBe(false)
        expect(funcs.isInteger({key: 'value'})).toBe(false)
        expect(funcs.isInteger('7')).toBe(false)
        expect(funcs.isInteger(null)).toBe(false)
        expect(funcs.isInteger(false)).toBe(false)
    })
})

describe('fizzBuzz', () => {
    it('should return "fizzbuzz" if a number is divisible by 5 and 3', () => {
        expect(funcs.fizzBuzz(15)).toBe('fizzbuzz')
        expect(funcs.fizzBuzz(90)).toBe('fizzbuzz')
        expect(funcs.fizzBuzz(-30)).toBe('fizzbuzz')
        expect(funcs.fizzBuzz(-15)).toBe('fizzbuzz')
    })
    it('should return "buzz" if a number is divisible by 5 and not 3', () => {
        expect(funcs.fizzBuzz(-25)).toBe('buzz')
        expect(funcs.fizzBuzz(-5)).toBe('buzz')
    })
    it('should return "fizz" if a number is divisible by 3 but not 5', () => {
        expect(funcs.fizzBuzz(3)).toBe('fizz')
        expect(funcs.fizzBuzz(-9)).toBe('fizz')
    })
    it('should return the number if it is not divisible by 3 or 5', () => {
        expect(funcs.fizzBuzz(.2)).toBe(.2)
        expect(funcs.fizzBuzz(44)).toBe(44)
        expect(funcs.fizzBuzz(-23)).toBe(-23)
        expect(funcs.fizzBuzz(0)).toBeTruthy()
    })
    it('should return NaN if the input is not a number', () => {
        expect(funcs.fizzBuzz('7')).toBe(NaN)
        expect(funcs.fizzBuzz([1,2,3])).toBe(NaN)
        expect(funcs.fizzBuzz({key: 'value'})).toBe(NaN)
        expect(funcs.fizzBuzz(null)).toBeNaN()
        expect(funcs.fizzBuzz(false)).toBeNaN()
    })
})

describe('isPrime', () => {
    it('should test if a number is prime or not', () => {
        expect(funcs.isPrime(2)).toBe(true)
        expect(funcs.isPrime(7)).toBe(true)
        expect(funcs.isPrime(15)).toBe(false)
        expect(funcs.isPrime(-2)).toBe(false)
        expect(funcs.isPrime(0.25)).toBe(false)
        expect(funcs.isPrime(5.2)).toBe(false)
    })
    it('should return false if a non-numeric input was given', () => {
        expect(funcs.isPrime(null)).toBe(false)
        expect(funcs.isPrime([1,2])).toBe(false)
        expect(funcs.isPrime({key: 'value'})).toBe(false)
        expect(funcs.isPrime('7')).toBe(false)
    })
})

describe('returnFirst', () => {
    it('should return the first element in an array', () => {
        expect(funcs.returnFirst([{ key: 'value'}, 1, 2, 3])).toEqual({key: 'value'})
        expect(funcs.returnFirst([7,5,0])).toBe(7)
        expect(funcs.returnFirst(['last', 'first'])).toBe('last')
        expect(funcs.returnFirst([null, undefined])).toBe(null)
        expect(funcs.returnFirst([true, false, true])).toBe(true)
    })
    it('should return the input value if the input was not an array', () => {
        expect(funcs.returnFirst(5)).toBe(5)
        expect(funcs.returnFirst({key: 'value'})).toEqual({key: 'value'})
        expect(funcs.returnFirst('Kittens')).toBe('Kittens')
        expect(funcs.returnFirst(null)).toBe(null)
        expect(funcs.returnFirst(false)).toBe(false)
    })
})

describe('returnLast', () => {
    it('should return the last element in an array', () => {
        expect(funcs.returnLast([{ key: 'value'}, 1, 2, 3])).toEqual(3)
        expect(funcs.returnLast([7,5,0])).toBe(0)
        expect(funcs.returnLast(['last', 'first'])).toBe('first')
        expect(funcs.returnLast([null, undefined])).toBe(undefined)
        expect(funcs.returnLast([true, false, true])).toBe(true)
    })
    it('should return the input value if the input was not an array', () => {
        expect(funcs.returnFirst(.5)).toBe(.5)
        expect(funcs.returnFirst({key: 'value'})).toEqual({key: 'value'})
        expect(funcs.returnFirst('Catnip')).toBe('Catnip')
        expect(funcs.returnFirst(null)).toBe(null)
        expect(funcs.returnFirst(false)).toBe(false)
    })
})

describe('getArrayLength', () => {
    it('should return the length of an array', () => {
        expect(funcs.getArrayLength(['1'])).toBe(1)
        expect(funcs.getArrayLength([1,2,3,5,6])).toBe(5)
        expect(funcs.getArrayLength([{key: 'value'}, {value: 'key'}])).toBe(2)
        expect(funcs.getArrayLength([[[[1]]], [2, 5, 4], 9])).toBe(3)
    })
    it('should return 1 if the input is not an array', () => {
        expect(funcs.getArrayLength(.5)).toBe(1)
        expect(funcs.getArrayLength({key: 'value'})).toEqual(1)
        expect(funcs.getArrayLength('Gato')).toBe(1)
        expect(funcs.getArrayLength(null)).toBe(1)
        expect(funcs.getArrayLength(false)).toBe(1)        
    })
})

describe('incrementByOne', () => {
    it('should return an array where every value has been incremented by 1', () => {
        expect(funcs.incrementByOne([0, 2, 5])).toEqual([1,3,6])
        expect(funcs.incrementByOne([.2, 5, .2])).toEqual([1.2, 6, 1.2])
        expect(funcs.incrementByOne([-2, -10, -3])).toEqual([-1, -9, -2])
    })
    it('should return NaN if the items in the array are not numbers', () => {
        expect(funcs.incrementByOne(['2', '5', '7'])).toBe(NaN)
        expect(funcs.incrementByOne([{key: 'value'}, {secondKey: 'value2'}])).toBe(NaN)
        expect(funcs.incrementByOne([false, true, false])).toBe(NaN)
        expect(funcs.incrementByOne([null])).toBe(NaN)
    })
    it('should return false if the input is not an array', () => {
        expect(funcs.incrementByOne(5, 5, 9)).toBe(false)
        expect(funcs.incrementByOne('732')).toBe(false)
        expect(funcs.incrementByOne({object: 'literally'})).toBe(false)
        expect(funcs.incrementByOne(false)).toBe(false)
        expect(funcs.incrementByOne(null)).toBe(false)
    })
})

describe('addItemToArray', () => {
    it('should add an item to an array', () => {
        expect(funcs.addItemToArray([1,2,3], 4)).toEqual([1,2,3,4])
        expect(funcs.addItemToArray([{key: 'value'}], 7)).toEqual([{key: 'value'}, 7])
        expect(funcs.addItemToArray(['Hello there'], 'world')).toEqual(['Hello there', 'world'])
        expect(funcs.addItemToArray([['a', 'b'],['c', 'd']],['e'])).toEqual([['a', 'b'], ['c','d'],['e']])
    })
    it('should turn the value given for the array as an array with the item added if it was not an array', () => {
        expect(funcs.addItemToArray({key: 'value'}, 12)).toEqual('invalid input')
        expect(funcs.addItemToArray(2, 7)).toBe('invalid input')
        expect(funcs.addItemToArray('string', 'thing')).toBe('invalid input')
        expect(funcs.addItemToArray(null)).toBe('invalid input')
        expect(funcs.addItemToArray(false)).toBe('invalid input')
    })
})

describe('wordsToSentence', () => {
    it('should take an array of strings and return an concatenated string', () => {
        expect(funcs.wordsToSentence(['Kind of', 'worried about', 'doing a', 'brownbag lecture'])).toBe('Kind of worried about doing a brownbag lecture')
        expect(funcs.wordsToSentence(['7', '5', '4'])).toBe('7 5 4') 
    })
    it('should take an array and return "invalid input" if the elements of the array are not strings', () => {
        expect(funcs.wordsToSentence([{key: 'value'}, {secondKey: 'differentValue'}])).toEqual('invalid input')
        expect(funcs.wordsToSentence([1, 2, 3])).toBe('invalid input')
        expect(funcs.wordsToSentence([['2'], ['5']])).toBe('invalid input')
    })
    it('should take any non-array and return it', () => {
        expect(funcs.wordsToSentence('Hey there')).toBe('Hey there')
        expect(funcs.wordsToSentence({key: 'value'})).toEqual({key: 'value'})
        expect(funcs.wordsToSentence(null)).toBe(null)
        expect(funcs.wordsToSentence(false)).toBe(false)
        expect(funcs.wordsToSentence(3)).toBe(3)
    })
})

describe('contains', () => {
    it('should return true if the array contains the item', () => {
        expect(funcs.contains(['two', 'three', 'four', 'five'], 'five')).toBe(true)
        expect(funcs.contains([[0], [2], [3]], 7)).toBe(false)
        expect(funcs.contains([2, 2, '2'], '2')).toBe(true)
    })
    it('should return false if an item in the array is an object', () => {
        expect(funcs.contains([1, {key: 'value'}, {secondKey: 'secondValue}'}], {key: 'value'})).toEqual(false)
    })
    it('should return false if the array does not contain the item', () => {
        expect(funcs.contains([1, 2, 5], 12)).toBe(false)
        expect(funcs.contains([1, 2, 3], '1')).toBeTruthy()
    })
    it('should return false if there is not an array', () => {
        expect(funcs.contains(1,2)).toBe(false)
        expect(funcs.contains({key: 'value'}, 2)).toBe(false)
        expect(funcs.contains(null, null)).toBe(false)
        expect(funcs.contains(true, true)).toBe(false)
    })
})

describe('addNumbers', () => {
    it('should return the sum of the numbers in the array', () => {
        expect(funcs.addNumbers([1,2,3])).toBe(6)
        expect(funcs.addNumbers([-2, 12])).toBe(10)
        expect(funcs.addNumbers([.5, 10])).toBe(10.5)
        expect(funcs.addNumbers([0, -2])).toBe(-2)
    })
    it('should return "invalid input" if the input is not an array', () => {
        expect(funcs.addNumbers(1)).toBe('invalid input')
        expect(funcs.addNumbers({key: 'value'})).toBe('invalid input')
        expect(funcs.addNumbers('17')).toBe('invalid input')
        expect(funcs.addNumbers(null)).toBe('invalid input')
        expect(funcs.addNumbers(2 , 3, 5)).toBe('invalid input')
    })
})

describe('averageTestScore', () => {
    it('should return the average of the numbers in the array', () => {
        expect(funcs.averageTestScore([10,2,5,12])).toBe(7.25)
        expect(funcs.averageTestScore([2.5, 5, 2.5])).toBe(3.3333333333333335)
    })
    it('should return false if the input is not an array', () => {
        expect(funcs.averageTestScore({key: 'value'})).toBe(false)
        expect(funcs.averageTestScore('one', 'five', '2')).toBe(false)
        expect(funcs.averageTestScore(2)).toBe(false)
    })
})

describe('largestNumber', () => {
    it('should look through an array of numbers and return the largest number', () => {
        expect(funcs.largestNumber([2,3,4])).toBe(4)
        expect(funcs.largestNumber([0,-2,-12])).toBe(0)
        expect(funcs.largestNumber([.2, -.5, .9])).toBe(.9)
    })
    it('should return "invalid input" if the input is not an array or if the array is not an array of numbers', () => {
        expect(funcs.largestNumber('27')).toBe('invalid input')
        expect(funcs.largestNumber(null)).toBe('invalid input')
        expect(funcs.largestNumber({key: 'value'})).toBe('invalid input')
        expect(funcs.largestNumber(true)).toBe('invalid input')
        expect(funcs.largestNumber([])).toBeFalsy()
    })
})