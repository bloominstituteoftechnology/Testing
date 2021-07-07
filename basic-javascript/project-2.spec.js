const funcs = require('./project-2');

describe('project-2', () => {
    describe('getBiggest', () => {
        it('returns getBiggest', () => {
            expect(funcs.getBiggest(3,4)).toEqual(4)
        })
    })

    describe('greeting', () => {
        it('returns greeting', () => {
            expect(funcs.greeting("German")).toEqual("Guten Tag!")
        })
        it('returns greeting', () => {
            expect(funcs.greeting("boom")).toEqual("Hello!")
        })
    })

    describe('isTenOrFive', () => {
        it('returns isTenOrFive', () => {
            expect(funcs.isTenOrFive(4)).toEqual(false)
            expect(funcs.isTenOrFive(5)).toEqual(true)
        })
    })

    describe('isInRange', () => {
        it('returns isInRange', () => {
            expect(funcs.isInRange(21)).toEqual(true)
            expect(funcs.isInRange(5)).toEqual(false)
        })
    })

    describe('isInteger', () => {
        it('returns isInteger', () => {
            expect(funcs.isInteger(4.3)).toEqual(false)
            expect(funcs.isInteger(5)).toEqual(true)
        })
    })

    describe('fizzBuzz', () => {
        it('returns fizzBuzz', () => {
            expect(funcs.fizzBuzz(60)).toEqual("fizzbuzz")
            expect(funcs.fizzBuzz(5)).toEqual("buzz")
            expect(funcs.fizzBuzz(3)).toEqual("fizz")
        })
    })

    describe('isPrime', () => {
        it('returns isPrime', () => {
            expect(funcs.isPrime(3)).toEqual(true)
            expect(funcs.isPrime(6)).toEqual(false)
            expect(funcs.isPrime(7)).toEqual(true)
        })
    })

    describe('returnFirst', () => {
        it('returns returnFirst', () => {
            expect(funcs.returnFirst([4,5,6])).toEqual(4)
        })
    })

    describe('returnLast', () => {
        it('returns returnLast', () => {
            expect(funcs.returnLast([4,5,6])).toEqual(6)
        })
    })

    describe('getArrayLength', () => {
        it('returns getArrayLength', () => {
            expect(funcs.getArrayLength([4,5,6])).toEqual(3)
        })
    })


    describe('incrementByOne', () => {
        it('returns incrementByOne', () => {
            expect(funcs.incrementByOne([5])).toEqual([6])
            expect(funcs.incrementByOne([5,6])).toEqual([6,7])
        })
    })

    describe('addItemToArray', () => {
        it('returns addItemToArray', () => {
            expect(funcs.addItemToArray([5,6], 8)).toEqual([5,6,8])
        })
    })

    describe('addItemToFront', () => {
        it('returns addItemToFront', () => {
            expect(funcs.addItemToFront([5,6], 8)).toEqual([8,5,6])
        })
    })


    describe('wordsToSentence', () => {
        it('returns wordsToSentence', () => {
            expect(funcs.wordsToSentence(["doggo", "cat"])).toEqual("doggo cat")
        })
    })

    describe('contains', () => {
        it('returns contains', () => {
            expect(funcs.contains([5,6,7], 6)).toEqual(true)
            expect(funcs.contains([5,6,7], 8)).toEqual(false)
        })
    })


    describe('addNumbers', () => {
        it('returns addNumbers', () => {
            expect(funcs.addNumbers([4,5])).toEqual(9)
            expect(funcs.addNumbers([6,4])).toEqual(10)
        })
    })

    describe('averageTestScore', () => {
        it('returns averageTestScore', () => {
            expect(funcs.averageTestScore([4,5])).toEqual(4.5)
            expect(funcs.averageTestScore([6,4])).toEqual(5)
        })
    })

    describe('largestNumber', () => {
        it('returns largestNumber', () => {
            expect(funcs.largestNumber([4,5])).toEqual(5)
            expect(funcs.largestNumber([6,4])).toEqual(6)
        })
    })


})
// whoops.. there is no test suite for this file. You'll simply just have to create one :/
