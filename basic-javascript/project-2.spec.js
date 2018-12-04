const {
    getBiggest,
    greeting,
    isTenOrFive,
    isInRange,
    isInteger,
    fizzBuzz,
    isPrime,
    returnFirst,
    returnLast,
    getArrayLength,
    incrementByOne,
    addItemToArray,
    addItemToFront,
    wordsToSentence,
    contains,
    addNumbers,
    averageTestScore,
    largestNumber
} = require('./project-2')

test('jest working', () => {})

describe('project 2 functions', () => {
    describe('getBiggest', () => {
        it('should return greatest number', () => {
            expect(getBiggest(0, 5)).toBe(5)
            expect(getBiggest(-100, 100)).toBe(100)
        })
    	it('should return longest array', () => {
        	expect(getBiggest([1,2], [1,2,3])).toEqual([1,2,3])
    	})
		it('should return string with highest unicode value', () => {
			expect(getBiggest('infinite', 'jest')).toBe('jest')
		})
		it('should return undefined for falsy arguments', () => {
			expect(getBiggest(null)).toBe(undefined)
			expect(getBiggest(undefined, undefined)).toBe(undefined)
			expect(getBiggest({})).toBe(undefined)
    	})
  	})
  	describe('greeting', () => {
		it('should return greeting in correct language', () => {
			expect(greeting()).toBe('Hello!')
			expect(greeting('Japanese')).toBe('Hello!')
			expect(greeting('German')).toBe('Guten Tag!')
			expect(greeting('Spanish')).toBe('Hola!')
		})
	  })
	describe('isTenOrFive', () => {
		it('should return true for 10 or 5', () => {
			expect(isTenOrFive(10)).toBe(true)
			expect(isTenOrFive(5)).toBe(true)
		})
		it('should return false for anything else', () => {
			expect(isTenOrFive(3)).toBe(false)
			expect(isTenOrFive('')).toBe(false)
			expect(isTenOrFive(undefined)).toBe(false)
		})
	})
	describe('isInRange', () => {
		it('should return true if in range', () => {
			expect(isInRange(49)).toBe(true)
		})
		it('should return false if out of range', () => {
			expect(isInRange(20)).toBe(false)
			expect(isInRange('!')).toBe(false)
			expect(isInRange([])).toBe(false)
		})
	})
	describe('isInteger', () => {
		it('should return true if integer', () => {
			expect(isInteger(-1)).toBe(true)
		})
		it('should return false if not integer', () => {
			expect(isInteger('tofu')).toBe(false)
			expect(isInteger(3.14)).toBe(false)
			expect(isInteger(NaN)).toBe(false)
		})
	})
	describe('fizzBuzz', () => {
		it('should return fizzbuzz if divisible by 5 & 3', () => {
			expect(fizzBuzz(30)).toBe('fizzbuzz')
		})
		it('should return buzz if divisble by 5 & not 3', () => {
			expect(fizzBuzz(25)).toBe('buzz')
		})
		it('should return fizz if divisble by 3 & not 5', () => {
			expect(fizzBuzz(9)).toBe('fizz')
		})
		it('should return input if divisble by neither 5 or 3', () => {
			expect(fizzBuzz(1)).toBe(1)
			expect(fizzBuzz('hello')).toBe('hello')
		})
	})
	describe('isPrime', () => {
		it('should return true if prime', () => {
			expect(isPrime(3)).toBe(true)
		})
		it('should return false if composite', () => {
			expect(isPrime(4)).toBe(false)
		})
		it('should throw error for non number inputs', () => {
			expect(() => isPrime('mango')).toThrow()
			expect(() => isPrime(NaN)).toThrow()
		})
	})
	describe('returnFirst', () => {
		it('should return first item in array', () => {
			expect(returnFirst([1,2,3])).toBe(1)
		})
		it('should return first letter in string', () => {
			expect(returnFirst('hi')).toBe('h')
		})
		it('should return undefined for invalid input', () => {
			expect(returnFirst(123)).toBe(undefined)
			expect(returnFirst('')).toBe(undefined)
		})
	})
	describe('returnLast', () => {
		it('should return last item in array', () => {
			expect(returnLast([1,2,3])).toBe(3)
		})
		it('should return last letter in string', () => {
			expect(returnLast('hi')).toBe('i')
		})
		it('should return undefined for invalid input', () => {
			expect(returnLast(123)).toBe(undefined)
			expect(returnLast('')).toBe(undefined)
		})
	})
	describe('getArrayLength', () => {
		it('should return correct length', () => {
			expect(getArrayLength([1,2,3])).toBe(3)
		})
		it('should return undefined for invalid input', () => {
			expect(getArrayLength(0)).toBe(undefined)
		})
	})
	describe('incrementByOne', () => {
		it('should return incremented array', () => {
			expect(incrementByOne([1,2,3])).toEqual([2,3,4])
		})
		it('should return input for non-array input', () => {
			expect(incrementByOne('latke')).toBe('latke')
			expect(incrementByOne(NaN)).toBe(NaN)
		})
	})
	describe('addItemToArray', () => {
		it('should return array with added item', () => {
			expect(addItemToArray([1,2,3], 4)).toEqual([1,2,3,4])
		})
		it('should throw errow for non-array input', () => {
			expect(() => addItemToArray('latke', NaN)).toThrow()
		})
	})
	describe('addItemToFront', () => {
		it('should return array with added item to front', () => {
			expect(addItemToFront([1,2,3], 4)).toEqual([4,1,2,3])
		})
		it('should throw errow for non-array input', () => {
			expect(() => addItemToFront('latke', NaN)).toThrow()
		})
	})
	describe('wordsToSentence', () => {
		it('should return sentence', () => {
			expect(wordsToSentence(['hello','my','friend'])).toEqual('hello my friend')
			expect(wordsToSentence('hello')).toEqual('h e l l o')

		})
		it('should return empty string for invalid input', () => {
			expect(wordsToSentence(35)).toBe('')

		})
	})
	describe('contains', () => {
		it('should return true if item is in array', () => {
			expect(contains([1,2,3], 3)).toBe(true)
		})
		it('should return false if item is not in array', () => {
			expect(contains([1,2,3], 4)).toBe(false)
		})
		it('should throw error for falsy input', () => {
			expect(() => contains(null,1)).toThrow()
		})
	})
	describe('addNumbers', () => {
		it('should return sum', () => {
			expect(addNumbers([1,2,3])).toBe(6)
		})
		it('should throw error for falsy input', () => {
			expect(() => addNumbers(undefined)).toThrow()
		})
	})
	describe('averageTestScore', () => {
		it('should return average score', () => {
			expect(averageTestScore([70,80,90])).toBe(80)
		})
		it('should throw error for falsy input', () => {
			expect(() => averageTestScore(undefined)).toThrow()
		})
	})
	describe('largestNumber', () => {
		it('should return the largest number', () => {
			expect(largestNumber([0,0,1])).toBe(1)
		})
		it('should throw error for falsy input', () => {
			expect(() => largestNumber(undefined)).toThrow()
		})
	})
})
