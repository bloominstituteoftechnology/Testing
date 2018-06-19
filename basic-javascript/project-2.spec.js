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