const funcs = require('./project-2');

// getBiggest Function Test Suite
describe('getBiggest test suite', () => {
    test('getBiggest works properly', () => {
        const input1 = 8
        const input2 = 3
        const expected = 8
        const actual = funcs.getBiggest(input1, input2)
        expect(expected).toBe(actual)
    })
})

// greeting Function Test Suite
describe('greeting test suite', () => {
    test('greeting in german', () => {
        const input1 = 'German'
        const expected = 'Guten Tag!'
        const actual = funcs.greeting(input1)
        expect(expected).toBe(actual)
    })

    test('greeting in spanish', () => {
        const input2 = 'Spanish'
        const expected = 'Hola!'
        const actual = funcs.greeting(input2)
        expect(expected).toBe(actual)
    })

    test('default greeting', () => {
        const input3 = 'Anything'
        const expected = 'Hello!'
        const actual = funcs.greeting(input3)
        expect(expected).toBe(actual)
    })
})


// isTenOrFive Function Test Suite
describe('isTenOrFive test suite', () => {
    test('if arg is 10 return true', () => {
        expect(funcs.isTenOrFive(10)).toBe(true)
    })
    test('if arg is 5 return true', () => {
        expect(funcs.isTenOrFive(5)).toBe(true)
    })
    test('if arg is any other number return false', () => {
        expect(funcs.isTenOrFive(6)).toBe(false)
    })
})


// isInRange Function Test Suite
describe('isInRange test suite', () => {
    it('if between 21 and 49 return true', () => {
      expect(funcs.isInRange(39)).toBe(true)
    })
})

// isInteger Function Test Suite
describe('isInteger test suite', () => {
    it('if arg is a whole integer return true', () => {
        expect(funcs.isInteger(4)).toBe(true)
    })
    it('if arg is not a whole integer return false', () => {
        expect(funcs.isInteger(4.5)).toBe(false)
        expect(funcs.isInteger('string')).toBe(false)
    })
})

// fizzBuzz Function Test Suite
describe('fizzBuzz test suite', () => {
    it('if arg is divisible by both 3 and 5 return fizzbuzz', () => {
        expect(funcs.fizzBuzz(15)).toBe('fizzbuzz')
    })
    it('if arg is not divisble by both 3 and 5, just 3, or just 5, return arg', () => {
        expect(funcs.fizzBuzz(8)).toBe(8)
    })
    it('if arg is divisible only by 3 return fizz', () => {
        expect(funcs.fizzBuzz(9)).toBe('fizz')
    })
    it('if arg is divisible only by 5 return fizz', () => {
        expect(funcs.fizzBuzz(10)).toBe('buzz')
    })
})

// isPrime Function Test Suite
describe('isPrime test suite', () => {
    it('if arg is less than 0 return false', () => {
        expect(funcs.isPrime(-1)).toBe(false)
    })
    it('if arg is 0 return false', () => {
        expect(funcs.isPrime(0)).toBe(false)
    })
    it('if arg is 1 return false', () => {
        expect(funcs.isPrime(1)).toBe(false)
    })
    it('if arg is 2 or higher return true', () => {
        expect(funcs.isPrime(2)).toBe(true)
    })  
    it('if arg is 2 or higher return true', () => {
        expect(funcs.isPrime(3)).toBe(true)
    })   
})


// returnFirst Function Test Suite
describe('returnFirst test suite', () => {
    it('should return first item in array', () => {
        expect(funcs.returnFirst([1, 2, 3, 4])).toBe(1)
    })
})

// returnLast Function Test Suite
describe('returnLast test suite', () => {
    it('should return last item in array', () => {
        expect(funcs.returnLast([1, 2, 3, 4])).toBe(4)
    })
})

// getArrayLength Function Test Suite
describe('getArrayLength test suite', () => {
    it('should return number of items in array', () => {
        expect(funcs.getArrayLength([1, 2, 3, 4])).toBe(4)
    })
})

// incrementByOne Function Test Suite
describe('incrementByOne test suite', () => {
    it('takes in array of numbers, returns array with each number incremented by one', () => {
        expect(funcs.incrementByOne([1, 2, 3])).toEqual([2, 3, 4])
    })
})

// addItemToArray Function Test Suite
describe('addItemToArray test suite', () => {
    it('takes in array, and an item and adds that item to the end of the array given in the argument', () => {
        expect(funcs.addItemToArray([1, 2, 3], 4)).toEqual([1, 2, 3, 4])
    })
})

// addItemToFront Function Test Suite
describe('addItemToFront test suite', () => {
    it('takes in array, and an item and adds that item to the zeroeth position of the array given in the argument', () => {
        expect(funcs.addItemToFront([1, 2, 3], 4)).toEqual([4, 1, 2, 3])
    })
})

// wordsToSentence Function Test Suite
describe('wordsToSentence test suite', () => {
    it('takes in array of words and returns them as a concatenated string.', () => {
        expect(funcs.wordsToSentence(['This', 'is', 'his', 'dog'])).toBe('This is his dog')
    })
})

// contains Function Test Suite
describe('contains test suite', () => {
    it('takes in array as first arg, and an item in second arg, if item in second arg matches any values in first arg, return true', () => {
        expect(funcs.contains([1, 2, 3, 4, 4], 4)).toBe(true)
    })
    it('takes in array as first arg, and an item in second arg, if item in second arg does not match any values in first arg, return false', () => {
        expect(funcs.contains([1, 2, 3, 4, 4], 6)).toBe(false)
    })
})

// averageTestScore Function Test Suite
describe('averageTestScore test suite', () => {
    it('Takes in array of test scores, sums the total score values then divides total score value by number of scores.', () => {
        expect(funcs.averageTestScore([80, 67, 40, 30])).toBe(54.25)
    })
})

// largestNumber Function Test Suite
describe('largestNumber test suite', () => {
    it('takes in array of numbers, should return largest number in array', () => {
        expect(funcs.largestNumber([80, 67, 40, 30])).toBe(80)
    })
})

