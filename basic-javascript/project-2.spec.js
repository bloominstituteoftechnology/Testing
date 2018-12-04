const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('getBiggest', () => {
    const y = 3;
    const x = 3;

    test('returns x when biggest', () => {
        expect(funcs.getBiggest(x, 2)).toBe(x)
    })

    test('returns y when biggest', () => {
        expect(funcs.getBiggest(2, y)).toBe(y)
    })

    test('returns y when same values', () => {
        expect(funcs.getBiggest(3, y)).toBe(y)
    })
})

describe('greeting', () => {

    test('expected return for german', () => {
        expect(funcs.greeting('German')).toBe('Guten Tag!')
    })

    test('expected return for spanish', () => {
        expect(funcs.greeting('Spanish')).toBe('Hola!')
    })

    test('expected default return', () => {
        expect(funcs.greeting()).toBe('Hello!')
    })
})

describe('isTenOrFive', () => {

    test('returns expected for num value 5', () => {
        expect(funcs.isTenOrFive(5)).toBe(true)
    })

    test('returns expected for num value 10', () => {
        expect(funcs.isTenOrFive(10)).toBe(true)
    })

    test('returns false when not 5 or 10', () => {
        expect(funcs.isTenOrFive(1)).toBe(false)
    })
})

describe('isInRange', () => {
    test('returns true if within range of 21-49', () => {
        expect(funcs.isInRange(30)).toBe(true)
    })

    test('returns false if not within range', () => {
        expect(funcs.isInRange(51)).toBe(false)
    })

    test('returns null if params are not numbers', () => {
        expect(funcs.isInRange('string')).toBe(null)
    })

    test('returns undefined if no param is passed', () => {
        expect(funcs.isInRange()).toBe(undefined)
    })
})

describe('isInteger', () => {
    test('returns true if rounded number is the same as the number', () => {
        expect(funcs.isInteger(30)).toBe(true)
    })

    test('returns false if rounded number is not the same as number', () => {
        expect(funcs.isInteger(51.2)).toBe(false)
    })

    test('returns null if params are not numbers', () => {
        expect(funcs.isInteger('string')).toBe(null)
    })

    test('returns undefined if no param is passed', () => {
        expect(funcs.isInteger()).toBe(undefined)
    })
})

describe('fizzBuzz', () => {
    test('returns fizzbuzz if modulus 5 and 3 of the number is 0', () => {
        expect(funcs.fizzBuzz(15)).toBe('fizzbuzz')
    })

    test('returns buzz if only modulus 5 of number is 0', () => {
        expect(funcs.fizzBuzz(20)).toBe('buzz')
    })

    test('returns fizz if only modulus 3 of number is 0', () => {
        expect(funcs.fizzBuzz(9)).toBe('fizz')
    })

    test('returns null if params are not numbers', () => {
        expect(funcs.fizzBuzz('string')).toBe(null)
    })

    test('returns undefined if no param is passed', () => {
        expect(funcs.fizzBuzz()).toBe(undefined)
    })
})

describe('isPrime', () => {
    test('returns false if num is 1 or 0', () => {
        expect(funcs.isPrime(1)).toBe(false);
        expect(funcs.isPrime(0)).toBe(false);
    })

    test('returns false if num is negative', () => {
        expect(funcs.isPrime(-1)).toBe(false)
    })

    test('returns false if num is not prime', () => {
        expect(funcs.isPrime(4)).toBe(false)
    })

    test('returns null if params are not numbers', () => {
        expect(funcs.isPrime('string')).toBe(null)
    })

    test('returns undefined if no param is passed', () => {
        expect(funcs.isPrime()).toBe(undefined)
    })
})

describe('returnFirst', () => {
    test('returns first item in array', () => {
        expect(funcs.returnFirst([1,2,3])).toBe(1);
    })

    test('returns null if param is not an array', () => {
        expect(funcs.returnFirst('string')).toBe(null)
    })

    test('returns undefined if no param is passed', () => {
        expect(funcs.returnFirst()).toBe(undefined)
    })
})

describe('returnLast', () => {
    test('returns last item in the array', () => {
        expect(funcs.returnLast([1,2,3])).toBe(3);
    })

    test('returns null if param is not an array', () => {
        expect(funcs.returnLast('string')).toBe(null)
    })

    test('returns undefined if no param is passed', () => {
        expect(funcs.returnLast()).toBe(undefined)
    })
})

describe('getArrayLength', () => {
    test('returns the length of an array', () => {
        expect(funcs.getArrayLength([1,2,3])).toBe(3);
    })

    test('returns null if param is not an array', () => {
        expect(funcs.getArrayLength('string')).toBe(null)
    })

    test('returns undefined if no param is passed', () => {
        expect(funcs.getArrayLength()).toBe(undefined)
    })
})

describe('incrementByOne', () => {
    test('returns the array with all values increased by 1', () => {
        expect(funcs.incrementByOne([1,2,3])).toEqual([2,3,4]);
    })

    test('returns null if param is not an array', () => {
        expect(funcs.incrementByOne('string')).toBe(null)
    })

    test('returns undefined if no param is passed', () => {
        expect(funcs.incrementByOne()).toBe(undefined)
    })
})

describe('addItemToArray', () => {
    test('returns array with item at the end of it', () => {
        expect(funcs.addItemToArray([1,2,3], 'string')).toEqual([1,2,3,'string']);
    })

    test('returns null if param is not an array', () => {
        expect(funcs.addItemToArray('string', 'string')).toBe(null)
    })

    test('returns undefined if no param is passed', () => {
        expect(funcs.addItemToArray()).toBe(undefined)
    })
})

describe('addItemToFront', () => {
    test('returns array with item at front of it', () => {
        expect(funcs.addItemToFront([1,2,3], 'string')).toEqual(['string',1,2,3]);
    })

    test('returns null if param is not an array', () => {
        expect(funcs.addItemToFront('string', 'string')).toBe(null)
    })

    test('returns undefined if no param is passed', () => {
        expect(funcs.addItemToFront()).toBe(undefined)
    })
})

describe('wordsToSentence', () => {
    test('returns sentence made up of values in array', () => {
        expect(funcs.wordsToSentence(['h','e','l','l','o'])).toBe('h e l l o');
    })

    test('returns null if param is not an array', () => {
        expect(funcs.wordsToSentence('string')).toBe(null)
    })

    test('returns undefined if no param is passed', () => {
        expect(funcs.wordsToSentence()).toBe(undefined)
    })
})



