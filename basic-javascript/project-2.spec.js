const funcs = require('./project-2');

// start testing!
test('Jest runs', () => {

});

describe('project-2', () => {

    describe('getBiggest', () => {
        it('return larger number', () => {
            expect(funcs.getBiggest(10,5)).toEqual(10)
        })
    })

    describe('greeting', () => {
        it('return greeting in given language', () => {
            expect(funcs.greeting('German')).toEqual('Guten Tag!')
        })
    })

    describe('isTenOrFive', () => {
        it('returns true if number is 10 or 5', () => {
            expect(funcs.isTenOrFive(10)).toBeTruthy()
        })
    })

    describe('isInRange', () => {
        it('returns true if number is between 20 and 50', () => {
            expect(funcs.isInRange(30)).toBeTruthy()
        })
    })

    describe('isInteger', () => {
        it('returns true if number is a whole number', () => {
            expect(funcs.isInteger(30)).toBeTruthy()
        })
    })

    describe('fizzBuzz', () => {
        it('fizzbuzz if divisible by 15, buzz divisible by 5, fizz divisible by 3', () => {
            expect(funcs.fizzBuzz(30)).toBe('fizzbuzz')
        })
    })

    describe('isPrime', () => {
        it('returns true if prime', () => {
            expect(funcs.isPrime(31)).toBeTruthy()
        })
    })

    describe('returnFirst', () => {
        it('returns first item in array', () => {
            expect(funcs.returnFirst([4,3,5,7,5,6,7])).toEqual(4)
        })
    })

    describe('returnLast', () => {
        it('returns last item in array', () => {
            expect(funcs.returnLast([4,3,5,7,5,6,7])).toEqual(7)
        })
    })

    describe('getArrayLength', () => {
        it('returns length of array', () => {
            expect(funcs.getArrayLength([4,3,5,7,5,6,7])).toEqual(7)
        })
    })

    describe('incrementByOne', () => {
        it('returns all numbers in array + 1', () => {
            expect(funcs.incrementByOne([4,5,6,7])).toEqual([5,6,7,8])
        })
    })

    describe('addItemToArray', () => {
        it('returns array + item', () => {
            expect(funcs.addItemToArray([4,5,6,7], 8)).toEqual([4,5,6,7,8])
        })
    })

    describe('addItemToFront', () => {
        it('returns array + item added to begining', () => {
            expect(funcs.addItemToFront([4,5,6,7], 8)).toEqual([8,4,5,6,7])
        })
    })

    describe('wordsToSentence', () => {
        it('returnsadded words', () => {
            expect(funcs.wordsToSentence('this is awesome')).toBe('this is awesome')
        })
    })

    describe('contains', () => {
        it('if array contains number, returns true', () => {
            expect(funcs.contains([1,2,3,4,5],5)).toBeTruthy()
        })
    })

    describe('contains', () => {
        it('if array contains number, returns true', () => {
            expect(funcs.contains([1,2,3,4,5],5)).toBeTruthy()
        })
    })
})
