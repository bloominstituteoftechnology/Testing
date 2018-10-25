const funcs = require('./project-2');

describe('project-2.js', () => {
	describe('getBiggest()', () => {
		it('should throw an error when called with a non number argument', () => {
			expect(() => funcs.getBiggest()).toThrow();
			expect(() => funcs.getBiggest(1)).toThrow();
			expect(() => funcs.getBiggest(undefined, 1)).toThrow();
			expect(() => funcs.getBiggest(1, null)).toThrow();
			expect(() => funcs.getBiggest(null, 1)).toThrow();
			expect(() => funcs.getBiggest(1, true)).toThrow();
			expect(() => funcs.getBiggest(false, 1)).toThrow();
			expect(() => funcs.getBiggest(1, 'a')).toThrow();
			expect(() => funcs.getBiggest('a', 1)).toThrow();
			expect(() => funcs.getBiggest(1, [])).toThrow();
			expect(() => funcs.getBiggest([], 1)).toThrow();
			expect(() => funcs.getBiggest(1, {})).toThrow();
			expect(() => funcs.getBiggest({}, 1)).toThrow();
		});

		it('should return the larger of two values', () => {
			expect(funcs.getBiggest(1, 2)).toBe(2);
			expect(funcs.getBiggest(0, 1)).toBe(1);
			expect(funcs.getBiggest(0, -1)).toBe(0);
		});
	});

	describe('greeting()', () => {
		it('should throw an error when called with a non string argument', () => {
			expect(() => funcs.greeting()).toThrow();
			expect(() => funcs.greeting(null)).toThrow();
			expect(() => funcs.greeting(true)).toThrow();
			expect(() => funcs.greeting(1)).toThrow();
			expect(() => funcs.greeting([])).toThrow();
			expect(() => funcs.greeting({})).toThrow();
		});

		it('should return "Guten Tag!" when called with the string "German"', () => {
			expect(funcs.greeting('German')).toBe('Guten Tag!');
		});

		it('should return "Hola!" when called with the string "Spanish"', () => {
			expect(funcs.greeting('Spanish')).toBe('Hola!');
		});

		it('should return "Guten Tag!" when called with any other string', () => {
			expect(funcs.greeting('Klingon')).toBe('Hello!');
		});
	});

	describe('isTenOrFive()', () => {
		it('should throw an error when called with a non number argument', () => {
			expect(() => funcs.isTenOrFive()).toThrow();
			expect(() => funcs.isTenOrFive(null)).toThrow();
			expect(() => funcs.isTenOrFive(true)).toThrow();
			expect(() => funcs.isTenOrFive('a')).toThrow();
			expect(() => funcs.isTenOrFive([])).toThrow();
			expect(() => funcs.isTenOrFive({})).toThrow();
		});

		it('should return true when called with the number 10 or 5', () => {
			expect(funcs.isTenOrFive(5)).toBe(true);
			expect(funcs.isTenOrFive(10)).toBe(true);
		});

		it('should return false when called with the number other than 10 or 5', () => {
			expect(funcs.isTenOrFive(6)).toBe(false);
			expect(funcs.isTenOrFive(-10)).toBe(false);
		});
	});

	describe('isInRange()', () => {
		it('should throw an error when called with a non number argument', () => {
			expect(() => funcs.isInRange()).toThrow();
			expect(() => funcs.isInRange(null)).toThrow();
			expect(() => funcs.isInRange(true)).toThrow();
			expect(() => funcs.isInRange('a')).toThrow();
			expect(() => funcs.isInRange([])).toThrow();
			expect(() => funcs.isInRange({})).toThrow();
		});

		it('should return true when called with a number between 20 & 50 exclusive', () => {
			expect(funcs.isInRange(21)).toBe(true);
			expect(funcs.isInRange(49)).toBe(true);
		});

		it('should return false when called with a number not between 20 & 50 exclusive', () => {
			expect(funcs.isInRange(20)).toBe(false);
			expect(funcs.isInRange(19)).toBe(false);
			expect(funcs.isInRange(50)).toBe(false);
			expect(funcs.isInRange(51)).toBe(false);
		});
	});

	describe('isInteger()', () => {
		it('should throw an error when called with a non number argument', () => {
			expect(() => funcs.isInteger()).toThrow();
			expect(() => funcs.isInteger(null)).toThrow();
			expect(() => funcs.isInteger(true)).toThrow();
			expect(() => funcs.isInteger('a')).toThrow();
			expect(() => funcs.isInteger([])).toThrow();
			expect(() => funcs.isInteger({})).toThrow();
		});

		it('should return true when called with a number that is an integer', () => {
			expect(funcs.isInteger(0)).toBe(true);
			expect(funcs.isInteger(13)).toBe(true);
		});

		it('should return false when called with a number that is not an integer', () => {
			expect(funcs.isInteger(0.5)).toBe(false);
			expect(funcs.isInteger(435.781)).toBe(false);
		});
	});

	describe('fizzBuzz()', () => {
		it('should throw an error when called with a non number argument', () => {
			expect(() => funcs.fizzBuzz()).toThrow();
			expect(() => funcs.fizzBuzz(null)).toThrow();
			expect(() => funcs.fizzBuzz(true)).toThrow();
			expect(() => funcs.fizzBuzz('a')).toThrow();
			expect(() => funcs.fizzBuzz([])).toThrow();
			expect(() => funcs.fizzBuzz({})).toThrow();
		});

		it('should return "fizz" when called with a number that is divisible by 3', () => {
			expect(funcs.fizzBuzz(3)).toBe('fizz');
			expect(funcs.fizzBuzz(21)).toBe('fizz');
		});

		it('should return "buzz" when called with a number that is divisible by 5', () => {
			expect(funcs.fizzBuzz(5)).toBe('buzz');
			expect(funcs.fizzBuzz(20)).toBe('buzz');
		});

		it('should return "fizzbuzz" when called with a number that is divisible by 3 and 5', () => {
			expect(funcs.fizzBuzz(15)).toBe('fizzbuzz');
			expect(funcs.fizzBuzz(75)).toBe('fizzbuzz');
		});

		it('should return the number it was called with if the number is not divisible by 3 or 5', () => {
			expect(funcs.fizzBuzz(2)).toBe(2);
			expect(funcs.fizzBuzz(13)).toBe(13);
		});
	});

	describe('isPrime()', () => {
		it('should throw an error when called with a non number argument', () => {
			expect(() => funcs.isPrime()).toThrow();
			expect(() => funcs.isPrime(null)).toThrow();
			expect(() => funcs.isPrime(true)).toThrow();
			expect(() => funcs.isPrime('a')).toThrow();
			expect(() => funcs.isPrime([])).toThrow();
			expect(() => funcs.isPrime({})).toThrow();
		});

		it('should return true when called with a number that is prime', () => {
			expect(funcs.isPrime(7)).toBe(true);
			expect(funcs.isPrime(13)).toBe(true);
		});

		it('should return false when called with a number that is not prime', () => {
			expect(funcs.isPrime(0)).toBe(false);
			expect(funcs.isPrime(-1)).toBe(false);
			expect(funcs.isPrime(8)).toBe(false);
		});
	});

	describe('returnFirst()', () => {
		it('should throw an error when called with a non array argument', () => {
			expect(() => funcs.returnFirst()).toThrow();
			expect(() => funcs.returnFirst(null)).toThrow();
			expect(() => funcs.returnFirst(true)).toThrow();
			expect(() => funcs.returnFirst('a')).toThrow();
			expect(() => funcs.returnFirst(1)).toThrow();
			expect(() => funcs.returnFirst({})).toThrow();
		});

		it('should return the first element of the array it was called with', () => {
			expect(funcs.returnFirst([0])).toBe(0);
			expect(funcs.returnFirst(['a', 13])).toBe('a');
		});
	});

	describe('returnLast()', () => {
		it('should throw an error when called with a non array argument', () => {
			expect(() => funcs.returnLast()).toThrow();
			expect(() => funcs.returnLast(null)).toThrow();
			expect(() => funcs.returnLast(true)).toThrow();
			expect(() => funcs.returnLast('a')).toThrow();
			expect(() => funcs.returnLast(1)).toThrow();
			expect(() => funcs.returnLast({})).toThrow();
		});

		it('should return the last element of the array it was called with', () => {
			expect(funcs.returnLast([0])).toBe(0);
			expect(funcs.returnLast(['a', 13])).toBe(13);
		});
	});

	describe('getArrayLength()', () => {
		it('should throw an error when called with a non array argument', () => {
			expect(() => funcs.getArrayLength()).toThrow();
			expect(() => funcs.getArrayLength(null)).toThrow();
			expect(() => funcs.getArrayLength(true)).toThrow();
			expect(() => funcs.getArrayLength('a')).toThrow();
			expect(() => funcs.getArrayLength(1)).toThrow();
			expect(() => funcs.getArrayLength({})).toThrow();
		});

		it('should return the length of the array it was called with', () => {
			expect(funcs.getArrayLength([])).toBe(0);
			expect(funcs.getArrayLength([0])).toBe(1);
			expect(funcs.getArrayLength(['a', 13])).toBe(2);
		});
	});

	describe('incrementByOne()', () => {
		it('should throw an error when called with a non array argument', () => {
			expect(() => funcs.incrementByOne()).toThrow();
			expect(() => funcs.incrementByOne(null)).toThrow();
			expect(() => funcs.incrementByOne(true)).toThrow();
			expect(() => funcs.incrementByOne('a')).toThrow();
			expect(() => funcs.incrementByOne(1)).toThrow();
			expect(() => funcs.incrementByOne({})).toThrow();
		});

		it('should throw an error when called an array with non number elements', () => {
			expect(() => funcs.incrementByOne([])).toThrow();
			expect(() => funcs.incrementByOne(['a'])).toThrow();
			expect(() => funcs.incrementByOne([1, 5, {}])).toThrow();
			expect(() => funcs.incrementByOne([42, true, 17])).toThrow();
		});

		it('when called with an array, should return that array with each element incremented by 1', () => {
			expect(funcs.incrementByOne([0])).toEqual([1]);
			expect(funcs.incrementByOne([4, 13])).toEqual([5, 14]);
		});
	});
	// end
});
