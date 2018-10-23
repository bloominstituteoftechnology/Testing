const funcs = require('./project-2');

const nonNumberTypeError = 'Value must be a number.';
const nonStringTypeError = 'Value must be a string.';
const nonArrayTypeError = 'Value must be an array.';
const emptyArrayError = 'Array cannot be empty.';

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Testing project-2.js', () => {
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
		largestNumber,
	} = funcs;

	// getBiggest()
	describe('Testing getBiggest()', () => {
		describe('Calling with a string, null or undefined type', () => {
			it('should throw an error', () => {
				expect(() => {
					getBiggest('one', 1);
				}).toThrow(nonNumberTypeError);

				expect(() => {
					getBiggest(1, null);
				}).toThrow(nonNumberTypeError);
	
				expect(() => {
					getBiggest(undefined, 1);
				}).toThrow(nonNumberTypeError);
			});
		});

		describe('Calling with number type', () => {
			it('should return the biggest number', () => {
				expect(getBiggest(0, 0)).toBe(0);
				expect(getBiggest(0, 1)).toBe(1);
				expect(getBiggest(0.1, 0.2)).toBe(0.2);
				expect(getBiggest(-1, 2)).toBe(2);
				expect(getBiggest(-2, -1)).toBe(-1);
			});
		});
	});

	// greeting()
	describe('Testing greeting()', () => {
		describe('Calling with a number, null or undefined type', () => {
			it('should throw an error', () => {
				expect(() => {
					greeting(1);
				}).toThrow(nonStringTypeError);

				expect(() => {
					greeting(null);
				}).toThrow(nonStringTypeError);
	
				expect(() => {
					greeting(undefined);
				}).toThrow(nonStringTypeError);
			});
		});

		describe('Calling with string type', () => {
			it('should return hello in the language given', () => {
				expect(greeting('Spanish')).toBe('Hola!');
				expect(greeting('English')).toBe('Hello!');
			});
		});
	});

	// isTenOrFive()
	describe('Testing isTenOrFive()', () => {
		describe('Calling with a string, null or undefined type', () => {
			it('should throw an error', () => {
				expect(() => {
					isTenOrFive('one');
				}).toThrow(nonNumberTypeError);

				expect(() => {
					isTenOrFive(null);
				}).toThrow(nonNumberTypeError);
	
				expect(() => {
					isTenOrFive(undefined);
				}).toThrow(nonNumberTypeError);
			});
		});

		describe('Calling with number type', () => {
			it('should return true if num is 10 or 5', () => {
				expect(isTenOrFive(10)).toBe(true);
				expect(isTenOrFive(5)).toBe(true);
			});

			it('should return false if num is not 10 or 5', () => {
				expect(isTenOrFive(0)).toBe(false);
				expect(isTenOrFive(1)).toBe(false);
				expect(isTenOrFive(0.2)).toBe(false);
				expect(isTenOrFive(-1)).toBe(false);
				expect(isTenOrFive(-0.2)).toBe(false);
			});
		});
	});

	// isInRange()
	describe('Testing isInRange()', () => {
		describe('Calling with a string, null or undefined type', () => {
			it('should throw an error', () => {
				expect(() => {
					isInRange('one');
				}).toThrow(nonNumberTypeError);

				expect(() => {
					isInRange(null);
				}).toThrow(nonNumberTypeError);
	
				expect(() => {
					isInRange(undefined);
				}).toThrow(nonNumberTypeError);
			});
		});

		describe('Calling with number type', () => {
			it('should return true if num is less than 50 and more than 20', () => {
				expect(isInRange(21)).toBe(true);
				expect(isInRange(49)).toBe(true);
			});

			it('should return false if num is not less than 50 and more than 20', () => {
				expect(isInRange(20)).toBe(false);
				expect(isInRange(50)).toBe(false);
				expect(isInRange(-1)).toBe(false);
				expect(isInRange(51)).toBe(false);
				expect(isInRange(0.2)).toBe(false);
			});
		});
	});

	// isInteger()
	describe('Testing isInteger()', () => {
		describe('Calling with a string, null or undefined type', () => {
			it('should throw an error', () => {
				expect(() => {
					isInteger('one');
				}).toThrow(nonNumberTypeError);

				expect(() => {
					isInteger(null);
				}).toThrow(nonNumberTypeError);
	
				expect(() => {
					isInteger(undefined);
				}).toThrow(nonNumberTypeError);
			});
		});

		describe('Calling with number type', () => {
			it('should return true if num is an integer', () => {
				expect(isInteger(0)).toBe(true);
				expect(isInteger(1)).toBe(true);
				expect(isInteger(-1)).toBe(true);
			});

			it('should return false if num is not an integer', () => {
				expect(isInteger(0.1)).toBe(false);
				expect(isInteger(-0.2)).toBe(false);
			});
		});
	});

	// fizzBuzz()
	describe('Testing fizzBuzz()', () => {
		describe('Calling with a string, null or undefined type', () => {
			it('should throw an error', () => {
				expect(() => {
					fizzBuzz('one');
				}).toThrow(nonNumberTypeError);

				expect(() => {
					fizzBuzz(null);
				}).toThrow(nonNumberTypeError);
	
				expect(() => {
					fizzBuzz(undefined);
				}).toThrow(nonNumberTypeError);
			});
		});

		describe('Calling with number type', () => {
			it('should return fizzbuzz if num divisible by both 5 and 3', () => {
				expect(fizzBuzz(0)).toBe('fizzbuzz');
				expect(fizzBuzz(15)).toBe('fizzbuzz');
				expect(fizzBuzz(-15)).toBe('fizzbuzz');
				expect(fizzBuzz(30)).toBe('fizzbuzz');
			});

			it('should return buzz if num divisible by 5 and not 3', () => {
				expect(fizzBuzz(5)).toBe('buzz');
				expect(fizzBuzz(20)).toBe('buzz');
				expect(fizzBuzz(-20)).toBe('buzz');
			});

			it('should return fizz if num divisible by 3 and not 5', () => {
				expect(fizzBuzz(3)).toBe('fizz');
				expect(fizzBuzz(6)).toBe('fizz');
				expect(fizzBuzz(-9)).toBe('fizz');
			});

			it('should return the number if num is not divisible by 3 or 5', () => {
				expect(fizzBuzz(7)).toBe(7);
				expect(fizzBuzz(-7)).toBe(-7);
			});
		});
	});

	// isPrime()
	describe('Testing isPrime()', () => {
		describe('Calling with a string, null or undefined type', () => {
			it('should throw an error', () => {
				expect(() => {
					isPrime('one');
				}).toThrow(nonNumberTypeError);

				expect(() => {
					isPrime(null);
				}).toThrow(nonNumberTypeError);
	
				expect(() => {
					isPrime(undefined);
				}).toThrow(nonNumberTypeError);
			});
		});

		describe('Calling with number type', () => {
			it('should return true if num is prime', () => {
				expect(isPrime(2)).toBe(true);
				expect(isPrime(7)).toBe(true);
			});

			it('should return false if num is not prime', () => {
				expect(isPrime(0)).toBe(false);
				expect(isPrime(1)).toBe(false);
				expect(isPrime(-1)).toBe(false);
			});
		});
	});

	// returnFirst()
	describe('Testing returnFirst()', () => {
		describe('Calling with a string, number, object, null or undefined type', () => {
			it('should throw an error', () => {
				expect(() => {
					returnFirst('one');
				}).toThrow(nonArrayTypeError);

				expect(() => {
					returnFirst(1);
				}).toThrow(nonArrayTypeError);

				expect(() => {
					returnFirst({ 'one': 1 });
				}).toThrow(nonArrayTypeError);

				expect(() => {
					returnFirst(null);
				}).toThrow(nonArrayTypeError);
	
				expect(() => {
					returnFirst(undefined);
				}).toThrow(nonArrayTypeError);
			});
		});

		describe('Calling with array type', () => {
			it('should throw an error if the array is empty', () => {
				expect(() => {
					returnFirst([]);
				}).toThrow(emptyArrayError);
			});

			it('should return the first value of the array', () => {
				expect(returnFirst([ 1, 2 ])).toBe(1);
				expect(returnFirst([ { one: 1 }, 2 ])).toEqual({ one: 1 });
				expect(returnFirst([ [ 1, 2 ], 2 ])).toEqual([ 1, 2 ]);
			});
		});
	});

	// returnLast()
	describe('Testing returnLast()', () => {
		describe('Calling with a string, number, object, null or undefined type', () => {
			it('should throw an error', () => {
				expect(() => {
					returnLast('one');
				}).toThrow(nonArrayTypeError);

				expect(() => {
					returnLast(1);
				}).toThrow(nonArrayTypeError);

				expect(() => {
					returnLast({ 'one': 1 });
				}).toThrow(nonArrayTypeError);

				expect(() => {
					returnLast(null);
				}).toThrow(nonArrayTypeError);
	
				expect(() => {
					returnLast(undefined);
				}).toThrow(nonArrayTypeError);
			});
		});

		describe('Calling with array type', () => {
			it('should throw an error if the array is empty', () => {
				expect(() => {
					returnLast([]);
				}).toThrow(emptyArrayError);
			});

			it('should return the last value of the array', () => {
				expect(returnLast([ 1, 2 ])).toBe(2);
				expect(returnLast([ 2, { one: 1 } ])).toEqual({ one: 1 });
				expect(returnLast([ 2, [ 1, 2 ] ])).toEqual([ 1, 2 ]);
			});
		});
	});

	// getArrayLength()
	describe('Testing getArrayLength()', () => {
		describe('Calling with a string, number, object, null or undefined type', () => {
			it('should throw an error', () => {
				expect(() => {
					getArrayLength('one');
				}).toThrow(nonArrayTypeError);

				expect(() => {
					getArrayLength(1);
				}).toThrow(nonArrayTypeError);

				expect(() => {
					getArrayLength({ 'one': 1 });
				}).toThrow(nonArrayTypeError);

				expect(() => {
					getArrayLength(null);
				}).toThrow(nonArrayTypeError);
	
				expect(() => {
					getArrayLength(undefined);
				}).toThrow(nonArrayTypeError);
			});
		});

		describe('Calling with array type', () => {
			it('should return the length of the array', () => {
				expect(getArrayLength([])).toBe(0);
				expect(getArrayLength([ 2, { one: 1 } ])).toBe(2);
				expect(getArrayLength([ 2, [ 1, 2 ], 'three' ])).toBe(3);
			});
		});
	});

	// incrementByOne()
	describe('Testing incrementByOne()', () => {
		describe('Calling with a string, number, object, null or undefined type', () => {
			it('should throw an error', () => {
				expect(() => {
					incrementByOne('one');
				}).toThrow(nonArrayTypeError);

				expect(() => {
					incrementByOne(1);
				}).toThrow(nonArrayTypeError);

				expect(() => {
					incrementByOne({ 'one': 1 });
				}).toThrow(nonArrayTypeError);

				expect(() => {
					incrementByOne(null);
				}).toThrow(nonArrayTypeError);
	
				expect(() => {
					incrementByOne(undefined);
				}).toThrow(nonArrayTypeError);
			});
		});

		describe('Calling with array type', () => {
			it('should throw an error if the array is empty', () => {
				expect(() => {
					incrementByOne([]);
				}).toThrow(emptyArrayError);
			});

			it('should return the length of the array', () => {
				expect(incrementByOne([ 0, 1 ])).toEqual([ 1, 2 ]);
				expect(incrementByOne([ -2, -5.1 ])).toEqual([ -1, -4.1 ]);
			});
		});
	});

	// addItemToArray()
	describe('Testing addItemToArray()', () => {
		describe('Calling with a string, number, object, null or undefined type for the first argument', () => {
			it('should throw an error', () => {
				expect(() => {
					addItemToArray('one', 1);
				}).toThrow(nonArrayTypeError);

				expect(() => {
					addItemToArray(1, 1);
				}).toThrow(nonArrayTypeError);

				expect(() => {
					addItemToArray({ 'one': 1 }, 1);
				}).toThrow(nonArrayTypeError);

				expect(() => {
					addItemToArray(null, 1);
				}).toThrow(nonArrayTypeError);
	
				expect(() => {
					addItemToArray(undefined, 1);
				}).toThrow(nonArrayTypeError);
			});
		});

		describe('Calling with an undefined type for the second argument', () => {
			it('should throw an error', () => {
				expect(() => {
					addItemToArray([ 'one' ], undefined);
				}).toThrow('Item cannot be undefined.');
			});
		});

		describe('Calling with an array as first argument and a non undefined type as the second argument', () => {
			it('should return the array with the item pushed onto it', () => {
				expect(addItemToArray([], 1)).toEqual([ 1 ]);
				expect(addItemToArray([ 'one' ], 'two')).toEqual([ 'one', 'two' ]);
				expect(addItemToArray([ { 'one': 1 }, { 'two': 2 } ], { 'three': 3 })).toEqual([ { 'one': 1 }, { 'two': 2 }, { 'three': 3 } ]);
			});
		});
	});

	// addItemToFront()
	describe('Testing addItemToFront()', () => {
		describe('Calling with a string, number, object, null or undefined type for the first argument', () => {
			it('should throw an error', () => {
				expect(() => {
					addItemToFront('one', 1);
				}).toThrow(nonArrayTypeError);

				expect(() => {
					addItemToFront(1, 1);
				}).toThrow(nonArrayTypeError);

				expect(() => {
					addItemToFront({ 'one': 1 }, 1);
				}).toThrow(nonArrayTypeError);

				expect(() => {
					addItemToFront(null, 1);
				}).toThrow(nonArrayTypeError);
	
				expect(() => {
					addItemToFront(undefined, 1);
				}).toThrow(nonArrayTypeError);
			});
		});

		describe('Calling with an undefined type for the second argument', () => {
			it('should throw an error', () => {
				expect(() => {
					addItemToFront([ 'one' ], undefined);
				}).toThrow('Item cannot be undefined.');
			});
		});

		describe('Calling with an array as first argument and a non undefined type as the second argument', () => {
			it('should return the array with the item unshifted to the front of it', () => {
				expect(addItemToFront([], 1)).toEqual([ 1 ]);
				expect(addItemToFront([ 'one' ], 'two')).toEqual([ 'two', 'one' ]);
				expect(addItemToFront([ { 'one': 1 }, { 'two': 2 } ], { 'three': 3 })).toEqual([ { 'three': 3 }, { 'one': 1 }, { 'two': 2 } ]);
			});
		});
	});

	// wordsToSentence()
	describe('Testing wordsToSentence()', () => {
		describe('Calling with a string, number, object, null or undefined type', () => {
			it('should throw an error', () => {
				expect(() => {
					wordsToSentence('one', 1);
				}).toThrow(nonArrayTypeError);

				expect(() => {
					wordsToSentence(1, 1);
				}).toThrow(nonArrayTypeError);

				expect(() => {
					wordsToSentence({ 'one': 1 }, 1);
				}).toThrow(nonArrayTypeError);

				expect(() => {
					wordsToSentence(null, 1);
				}).toThrow(nonArrayTypeError);
	
				expect(() => {
					wordsToSentence(undefined, 1);
				}).toThrow(nonArrayTypeError);
			});
		});

		describe('Calling with an array type', () => {
			it('should throw an error if the array is empty', () => {
				expect(() => {
					returnFirst([]);
				}).toThrow(emptyArrayError);
			});

			it('should return a string with all the words in the array joined by a space', () => {
				expect(wordsToSentence(['This', 'is', 'a', 'sentence.'])).toBe('This is a sentence.');
			});
		});
	});

	// contains()
	describe('Testing contains()', () => {
		describe('Calling with a string, number, object, null or undefined type for the first argument', () => {
			it('should throw an error', () => {
				expect(() => {
					contains('one', 1);
				}).toThrow(nonArrayTypeError);

				expect(() => {
					contains(1, 1);
				}).toThrow(nonArrayTypeError);

				expect(() => {
					contains({ 'one': 1 }, 1);
				}).toThrow(nonArrayTypeError);

				expect(() => {
					contains(null, 1);
				}).toThrow(nonArrayTypeError);
	
				expect(() => {
					contains(undefined, 1);
				}).toThrow(nonArrayTypeError);
			});
		});

		describe('Calling with an undefined type for the second argument', () => {
			it('should throw an error', () => {
				expect(() => {
					contains([ 'one' ], undefined);
				}).toThrow('Item cannot be undefined.');
			});
		});

		describe('Calling with an array as first argument and a non undefined type as the second argument', () => {
			it('should return true if item is in array', () => {
				expect(contains([ 1, 2 ], 1)).toBe(true);
				expect(contains([ 'one', 'two' ], 'two')).toBe(true);
			});

			it('should return false if item is not in array', () => {
				expect(contains([], 1)).toBe(false);
				expect(contains([ 1, 2 ], 3)).toBe(false);
			});
		});
	});

	// addNumbers()
	describe('Testing addNumbers()', () => {
		describe('Calling with a string, number, object, null or undefined type', () => {
			it('should throw an error', () => {
				expect(() => {
					addNumbers('one', 1);
				}).toThrow(nonArrayTypeError);

				expect(() => {
					addNumbers(1, 1);
				}).toThrow(nonArrayTypeError);

				expect(() => {
					addNumbers({ 'one': 1 }, 1);
				}).toThrow(nonArrayTypeError);

				expect(() => {
					addNumbers(null, 1);
				}).toThrow(nonArrayTypeError);
	
				expect(() => {
					addNumbers(undefined, 1);
				}).toThrow(nonArrayTypeError);
			});
		});

		describe('Calling with an array type', () => {
			it('should throw an error if a member of the array is not a number', () => {
				expect(() => {
					addNumbers([ 1, 'two' ]);
				}).toThrow(nonNumberTypeError);
			});

			it('should return 0 if the array is empty', () => {
				expect(addNumbers([])).toBe(0);
			});

			it('should return the sum of the numbers in the array', () => {
				expect(addNumbers([ 1, 2 ])).toBe(3);
				expect(addNumbers([ 0, -2, 2 ])).toBe(0);
				expect(addNumbers([ 0.1, 0.2 ])).toBeCloseTo(0.3);
			});
		});
	});

	// averageTestScore()
	describe('Testing averageTestScore()', () => {
		describe('Calling with a string, number, object, null or undefined type', () => {
			it('should throw an error', () => {
				expect(() => {
					averageTestScore('one', 1);
				}).toThrow(nonArrayTypeError);

				expect(() => {
					averageTestScore(1, 1);
				}).toThrow(nonArrayTypeError);

				expect(() => {
					averageTestScore({ 'one': 1 }, 1);
				}).toThrow(nonArrayTypeError);

				expect(() => {
					averageTestScore(null, 1);
				}).toThrow(nonArrayTypeError);
	
				expect(() => {
					averageTestScore(undefined, 1);
				}).toThrow(nonArrayTypeError);
			});
		});

		describe('Calling with an array type', () => {
			it('should throw an error if a member of the array is not a number', () => {
				expect(() => {
					averageTestScore([ 1, 'two' ]);
				}).toThrow(nonNumberTypeError);
			});

			it('should return 0 if the array is empty', () => {
				expect(averageTestScore([])).toBe(0);
			});

			it('should return the average of the numbers in the array', () => {
				expect(averageTestScore([ 1, 2, 3 ])).toBe(2);
				expect(averageTestScore([ 0 ])).toBe(0);
				expect(averageTestScore([ 0.1, 0.2 ])).toBeCloseTo(0.15);
				expect(averageTestScore([ 0.1, -0.2 ])).toBe(-0.05);
				expect(averageTestScore([ -0.1, -0.2 ])).toBeCloseTo(-0.15);
			});
		});
	});

	// largestNumber()
	describe('Testing largestNumber()', () => {
		describe('Calling with a string, number, object, null or undefined type', () => {
			it('should throw an error', () => {
				expect(() => {
					largestNumber('one', 1);
				}).toThrow(nonArrayTypeError);

				expect(() => {
					largestNumber(1, 1);
				}).toThrow(nonArrayTypeError);

				expect(() => {
					largestNumber({ 'one': 1 }, 1);
				}).toThrow(nonArrayTypeError);

				expect(() => {
					largestNumber(null, 1);
				}).toThrow(nonArrayTypeError);
	
				expect(() => {
					largestNumber(undefined, 1);
				}).toThrow(nonArrayTypeError);
			});
		});

		describe('Calling with an array type', () => {
			it('should throw an error if the array is empty', () => {
				expect(() => {
					largestNumber([]);
				}).toThrow(emptyArrayError);
			});

			it('should throw an error if a member of the array is not a number', () => {
				expect(() => {
					largestNumber([ 1, 'two' ]);
				}).toThrow(nonNumberTypeError);
			});

			it('should return the biggest of the numbers in the array', () => {
				expect(largestNumber([ 1, 2, 3 ])).toBe(3);
				expect(largestNumber([ 0 ])).toBe(0);
				expect(largestNumber([ 0.1, 0.2 ])).toBe(0.2);
				expect(largestNumber([ 0.1, -0.2 ])).toBe(0.1);
				expect(largestNumber([ -0.1, -0.2 ])).toBe(-0.1);
			});
		});
	});
});
