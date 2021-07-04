const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('project-2', () => {
    describe('getBiggest', () => {
        it('should return y if x is equal y or less than y', () => {
            expect(funcs.getBiggest(['str', 3], 5)).toBe(5)
            expect(funcs.getBiggest(-2, 7)).toBe(7)

            expect(funcs.getBiggest(-2, 0)).toBe(0)
        })
        it('should return  x  if x is the biggest number', () => {
            expect(funcs.getBiggest(2, 90)).toBe(90)
            expect(funcs.getBiggest(4, 1)).toBe(4)
        });
    })
    describe('greeting', () => {
        it('should return greeting in provided language', () => {
            expect(funcs.greeting('German')).toBe("Guten Tag!")
            expect(funcs.greeting('Spanish')).toBe('Hola!')
        })
        it('should return  "Hello!" as a default', () => {
            expect(funcs.greeting(6)).toBe('Hello!')
            expect(funcs.greeting('false')).toBe('Hello!')
        });
    })
    describe('isTenOrFive', () => {
        it('should return true if a number is ten of five', () => {
            expect(funcs.isTenOrFive(10)).toBe(true)
            expect(funcs.isTenOrFive(5)).toBe(true)
        })
        it('should return  false if a number neither 10 nor 5', () => {
            expect(funcs.isTenOrFive(6)).toBe(false)
            expect(funcs.isTenOrFive('hj')).toBe(false)
        });
    })
    describe('isInRange', () => {
        it('should return true if a number is in the range between 20 and 50', () => {
            expect(funcs.isInRange(47)).toBe(true)
            expect(funcs.isInRange(21)).toBe(true)
        })
        it('should return  false if a number out of the range', () => {
            expect(funcs.isInRange(6)).toBe(false)
            expect(funcs.isInRange('hj')).toBe(false)
        });
    })
    describe('isInteger', () => {
        it('should return true if a number is an integer', () => {
            expect(funcs.isInteger(47)).toBeTruthy()
            expect(funcs.isInteger(-21)).toBeTruthy()
        })
        it('should return  false if a number is not an integer or NaN', () => {
            expect(funcs.isInteger('6')).toBeFalsy()
            expect(funcs.isInteger(1.3)).toBeFalsy()
        });
    })
    describe('fizzBuzz', () => {
        it('should return "fizzbuzz" if a number is divisible by 5 or 3', () => {
            expect(funcs.fizzBuzz(45)).toBe('fizzbuzz')
            expect(funcs.fizzBuzz(60)).toBe('fizzbuzz')
        })
        it('should return  "buzz" if a number is divisible by 5 only', () => {
            expect(funcs.fizzBuzz(-10)).toBe('buzz')
            expect(funcs.fizzBuzz(100)).toBe('buzz')
        });
        it('should return  "fizz" if a number is divisible by 3 only', () => {
            expect(funcs.fizzBuzz(6)).toBe('fizz')
            expect(funcs.fizzBuzz(-21)).toBe('fizz')
        });
        it('should return  number itself if it is not divisible by 3 or 5', () => {
            expect(funcs.fizzBuzz(-7)).toBe(-7)
        });
    })
    describe('isPrime', () => {
        it('should return false if a number is not a prime', () => {
            expect(funcs.isPrime(45)).toBeFalsy()
            expect(funcs.isPrime(-60)).toBeFalsy()
        })
        it('should return  true if a number is prime', () => {
            expect(funcs.isPrime(11)).toBeTruthy();
            expect(funcs.isPrime(101)).toBeTruthy()
        })
    })
    describe('returnFirst', () => {
        it('should return the first char in an array', () => {
            expect(funcs.returnFirst(['first', 'sec', 'third'])).toBe('first')
            expect(funcs.returnFirst([35, 64, 3, 4])).toBe(35)
        })
    })
    describe('getArrayLength', () => {
        it('should return the length of an array', () => {
            expect(funcs.getArrayLength(['first', 'sec', 'third'])).toBe(3)
            expect(funcs.getArrayLength([35, 64, 3, 4])).toBe(4)
        })
    })
    describe('incrementByOne', () => {
        it('should return an array with each value incremented by one', () => {
            expect(funcs.incrementByOne([1, 2, 3])).toEqual([2, 3, 4])
            expect(funcs.incrementByOne([35, 64, 3, 4])).toEqual([36, 65, 4, 5])
        })
    })
    describe('addItemToArray', () => {
        it('should add an item to the end of an array', () => {
            expect(funcs.addItemToArray([1, 2, 3], 7)).toEqual([1, 2, 3, 7])
            expect(funcs.addItemToArray([35, 64, 3, 4], 'a')).toEqual([35, 64, 3, 4, 'a'])
        })
    })
    describe('addItemToFront', () => {
        it('should add an item at the beginning of an array', () => {
            expect(funcs.addItemToFront([1, 2, 3], 7)).toEqual([7, 1, 2, 3])
            expect(funcs.addItemToFront([35, 64, 3, 4], 'a')).toEqual(['a', 35, 64, 3, 4])
        })
    })
    describe('wordsToSentence', () => {
        it('should concat all items in an array', () => {
            expect(funcs.wordsToSentence([1, 2, 3])).toEqual('1 2 3')
            expect(funcs.wordsToSentence(['h', 'e', 'l', 'l', 'o'])).toBe('h e l l o')
        })
    })
    describe('contains', () => {
        it('should return true if an array includes the given item', () => {
            expect(funcs.contains([1, 2, 3], 3)).toBe(true)
            expect(funcs.contains(['h', 'e', 'l', 'l', 'o'], 'l')).toBe(true)
        })
        it('should return false if an array does not include the given item', () => {
            expect(funcs.contains([1, 2, 3], 8)).toBeFalsy()
            expect(funcs.contains(['h', 'e', 'l', 'l', 'o'], 'm')).toBeFalsy();
        })
    })
    describe('addNumbers', () => {
        it('should return the sum of all numbers in an array', () => {
            expect(funcs.addNumbers([1, 2, 3])).toEqual(6)
            expect(funcs.addNumbers([5, 8, 7, 2])).toEqual(22)
        })
    })
    describe('averageTestScore', () => {
        it('should return the average score of all numbers', () => {
            expect(funcs.averageTestScore([1, 2, 3])).toEqual(2)
            expect(funcs.averageTestScore([5, 8, 7, 2, 3])).toEqual(5)
        })
    })
    describe('largestNumber', () => {
        it('should return the largest number', () => {
            expect(funcs.largestNumber([1, 2, 3])).toEqual(3)
            expect(funcs.largestNumber([5, 8, 7, 2, 3])).toEqual(8)
        })
    })

})