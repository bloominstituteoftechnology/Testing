const funcs = require('./project-2');

// errors
const {
	nonNumberTypeError,
	nonStringTypeError,
	nonArrayTypeError,
	emptyArrayError,
	undefinedArgumentError,
} = require('../errors/index.js');

describe('project-2.js', () => {
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
	describe('getBiggest()', () => {
		describe('Calling with a string, null or undefined type', () => {
			describe('Calling with number type', () => {
				it('should return the biggest number', () => {
					expect(getBiggest(0, 0)).toBe(0);
					expect(getBiggest(0, 1)).toBe(1);
					expect(getBiggest(0.1, 0.2)).toBe(0.2);
					expect(getBiggest(-1, 2)).toBe(2);
					expect(getBiggest(-2, -1)).toBe(-1);
				});
			});

			describe('Calling with non number type', () => {
				it('should throw an error', () => {
					expect(() => { getBiggest(NaN, 1); }).toThrow(nonNumberTypeError);
					expect(() => { getBiggest('', 1); }).toThrow(nonNumberTypeError);
					expect(() => { getBiggest(false, 1); }).toThrow(nonNumberTypeError);
					expect(() => { getBiggest([], 1); }).toThrow(nonNumberTypeError);
					expect(() => { getBiggest({}, 1); }).toThrow(nonNumberTypeError);
					expect(() => { getBiggest(() => {}, 1); }).toThrow(nonNumberTypeError);
					expect(() => { getBiggest(null, 1); }).toThrow(nonNumberTypeError);
					expect(() => { getBiggest(undefined, 1); }).toThrow(nonNumberTypeError);
	
					expect(() => { getBiggest(1, NaN); }).toThrow(nonNumberTypeError);
					expect(() => { getBiggest(1, ''); }).toThrow(nonNumberTypeError);
					expect(() => { getBiggest(1, false); }).toThrow(nonNumberTypeError);
					expect(() => { getBiggest(1, []); }).toThrow(nonNumberTypeError);
					expect(() => { getBiggest(1, {}); }).toThrow(nonNumberTypeError);
					expect(() => { getBiggest(1, () => {}); }).toThrow(nonNumberTypeError);
					expect(() => { getBiggest(1, null); }).toThrow(nonNumberTypeError);
					expect(() => { getBiggest(1, undefined); }).toThrow(nonNumberTypeError);
				});
			});
		});
	});

	// greeting()
	describe('greeting()', () => {
		describe('Calling with string type', () => {
			it('should return hello in the language given', () => {
				expect(greeting('Spanish')).toBe('Hola!');
				expect(greeting('English')).toBe('Hello!');
			});
		});

		describe('Calling with non string type', () => {
			it('should throw an error', () => {
				expect(() => { greeting(1); }).toThrow(nonStringTypeError);
				expect(() => { greeting(NaN); }).toThrow(nonStringTypeError);
				expect(() => { greeting(false); }).toThrow(nonStringTypeError);
				expect(() => { greeting([]); }).toThrow(nonStringTypeError);
				expect(() => { greeting({}); }).toThrow(nonStringTypeError);
				expect(() => { greeting(() => {}); }).toThrow(nonStringTypeError);
				expect(() => { greeting(null); }).toThrow(nonStringTypeError);
				expect(() => { greeting(undefined); }).toThrow(nonStringTypeError);
			});
		});
	});

	// isTenOrFive()
	describe('isTenOrFive()', () => {
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

		describe('Calling with non number type', () => {
			it('should throw an error', () => {
				expect(() => { isTenOrFive(NaN); }).toThrow(nonNumberTypeError);
				expect(() => { isTenOrFive(''); }).toThrow(nonNumberTypeError);
				expect(() => { isTenOrFive(false); }).toThrow(nonNumberTypeError);
				expect(() => { isTenOrFive([]); }).toThrow(nonNumberTypeError);
				expect(() => { isTenOrFive({}); }).toThrow(nonNumberTypeError);
				expect(() => { isTenOrFive(() => {}); }).toThrow(nonNumberTypeError);
				expect(() => { isTenOrFive(null); }).toThrow(nonNumberTypeError);
				expect(() => { isTenOrFive(undefined); }).toThrow(nonNumberTypeError);
			});
		});
	});

	// isInRange()
	describe('isInRange()', () => {
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

		describe('Calling with non number type', () => {
			it('should throw an error', () => {
				expect(() => { isInRange(NaN); }).toThrow(nonNumberTypeError);
				expect(() => { isInRange(''); }).toThrow(nonNumberTypeError);
				expect(() => { isInRange(false); }).toThrow(nonNumberTypeError);
				expect(() => { isInRange([]); }).toThrow(nonNumberTypeError);
				expect(() => { isInRange({}); }).toThrow(nonNumberTypeError);
				expect(() => { isInRange(() => {}); }).toThrow(nonNumberTypeError);
				expect(() => { isInRange(null); }).toThrow(nonNumberTypeError);
				expect(() => { isInRange(undefined); }).toThrow(nonNumberTypeError);
			});
		});
	});

	// isInteger()
	describe('isInteger()', () => {
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

		describe('Calling with non number type', () => {
			it('should throw an error', () => {
				expect(() => { isInteger(NaN); }).toThrow(nonNumberTypeError);
				expect(() => { isInteger(''); }).toThrow(nonNumberTypeError);
				expect(() => { isInteger(false); }).toThrow(nonNumberTypeError);
				expect(() => { isInteger([]); }).toThrow(nonNumberTypeError);
				expect(() => { isInteger({}); }).toThrow(nonNumberTypeError);
				expect(() => { isInteger(() => {}); }).toThrow(nonNumberTypeError);
				expect(() => { isInteger(null); }).toThrow(nonNumberTypeError);
				expect(() => { isInteger(undefined); }).toThrow(nonNumberTypeError);
			});
		});
	});

	// fizzBuzz()
	describe('fizzBuzz()', () => {
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

		describe('Calling with non number type', () => {
			it('should throw an error', () => {
				expect(() => { fizzBuzz(NaN); }).toThrow(nonNumberTypeError);
				expect(() => { fizzBuzz(''); }).toThrow(nonNumberTypeError);
				expect(() => { fizzBuzz(false); }).toThrow(nonNumberTypeError);
				expect(() => { fizzBuzz([]); }).toThrow(nonNumberTypeError);
				expect(() => { fizzBuzz({}); }).toThrow(nonNumberTypeError);
				expect(() => { fizzBuzz(() => {}); }).toThrow(nonNumberTypeError);
				expect(() => { fizzBuzz(null); }).toThrow(nonNumberTypeError);
				expect(() => { fizzBuzz(undefined); }).toThrow(nonNumberTypeError);
			});
		});
	});

	// isPrime()
	describe('isPrime()', () => {
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

		describe('Calling with non number type', () => {
			it('should throw an error', () => {
				expect(() => { isPrime(NaN); }).toThrow(nonNumberTypeError);
				expect(() => { isPrime(''); }).toThrow(nonNumberTypeError);
				expect(() => { isPrime(false); }).toThrow(nonNumberTypeError);
				expect(() => { isPrime([]); }).toThrow(nonNumberTypeError);
				expect(() => { isPrime({}); }).toThrow(nonNumberTypeError);
				expect(() => { isPrime(() => {}); }).toThrow(nonNumberTypeError);
				expect(() => { isPrime(null); }).toThrow(nonNumberTypeError);
				expect(() => { isPrime(undefined); }).toThrow(nonNumberTypeError);
			});
		});
	});

	// returnFirst()
	describe('returnFirst()', () => {
		describe('Calling with array type', () => {
			it('should return the first value of the array', () => {
				expect(returnFirst([ 1, 2 ])).toBe(1);
				expect(returnFirst([ { one: 1 }, 2 ])).toEqual({ one: 1 });
				expect(returnFirst([ [ 1, 2 ], 2 ])).toEqual([ 1, 2 ]);
			});

			it('should throw an error if the array is empty', () => {
				expect(() => {
					returnFirst([]);
				}).toThrow(emptyArrayError);
			});
		});

		describe('Calling with non array type', () => {
			it('should throw an error', () => {
				expect(() => { returnFirst(1); }).toThrow(nonArrayTypeError);
				expect(() => { returnFirst(NaN); }).toThrow(nonArrayTypeError);
				expect(() => { returnFirst(''); }).toThrow(nonArrayTypeError);
				expect(() => { returnFirst(false); }).toThrow(nonArrayTypeError);
				expect(() => { returnFirst({}); }).toThrow(nonArrayTypeError);
				expect(() => { returnFirst(() => {}); }).toThrow(nonArrayTypeError);
				expect(() => { returnFirst(null); }).toThrow(nonArrayTypeError);
				expect(() => { returnFirst(undefined); }).toThrow(nonArrayTypeError);
			});
		});
	});

	// returnLast()
	describe('returnLast()', () => {
		describe('Calling with array type', () => {
			it('should return the last value of the array', () => {
				expect(returnLast([ 1, 2 ])).toBe(2);
				expect(returnLast([ 2, { one: 1 } ])).toEqual({ one: 1 });
				expect(returnLast([ 2, [ 1, 2 ] ])).toEqual([ 1, 2 ]);
			});

			it('should throw an error if the array is empty', () => {
				expect(() => {
					returnLast([]);
				}).toThrow(emptyArrayError);
			});
		});

		describe('Calling with non array type', () => {
			it('should throw an error', () => {
				expect(() => { returnLast(1); }).toThrow(nonArrayTypeError);
				expect(() => { returnLast(NaN); }).toThrow(nonArrayTypeError);
				expect(() => { returnLast(''); }).toThrow(nonArrayTypeError);
				expect(() => { returnLast(false); }).toThrow(nonArrayTypeError);
				expect(() => { returnLast({}); }).toThrow(nonArrayTypeError);
				expect(() => { returnLast(() => {}); }).toThrow(nonArrayTypeError);
				expect(() => { returnLast(null); }).toThrow(nonArrayTypeError);
				expect(() => { returnLast(undefined); }).toThrow(nonArrayTypeError);
			});
		});
	});

	// getArrayLength()
	describe('getArrayLength()', () => {
		describe('Calling with array type', () => {
			it('should return the length of the array', () => {
				expect(getArrayLength([])).toBe(0);
				expect(getArrayLength([ 2, { one: 1 } ])).toBe(2);
				expect(getArrayLength([ 2, [ 1, 2 ], 'three' ])).toBe(3);
			});
		});

		describe('Calling with non array type', () => {
			it('should throw an error', () => {
				expect(() => { getArrayLength(1); }).toThrow(nonArrayTypeError);
				expect(() => { getArrayLength(NaN); }).toThrow(nonArrayTypeError);
				expect(() => { getArrayLength(''); }).toThrow(nonArrayTypeError);
				expect(() => { getArrayLength(false); }).toThrow(nonArrayTypeError);
				expect(() => { getArrayLength({}); }).toThrow(nonArrayTypeError);
				expect(() => { getArrayLength(() => {}); }).toThrow(nonArrayTypeError);
				expect(() => { getArrayLength(null); }).toThrow(nonArrayTypeError);
				expect(() => { getArrayLength(undefined); }).toThrow(nonArrayTypeError);
			});
		});
	});

	// incrementByOne()
	describe('incrementByOne()', () => {
		describe('Calling with array type', () => {
			it('should return the length of the array', () => {
				expect(incrementByOne([ 0, 1 ])).toEqual([ 1, 2 ]);
				expect(incrementByOne([ -2, -5.1 ])).toEqual([ -1, -4.1 ]);
			});

			it('should throw an error if the array is empty', () => {
				expect(() => {
					incrementByOne([]);
				}).toThrow(emptyArrayError);
			});

			describe('Calling with a non number type in the array', () => {
				it('should throw an error', () => {
					expect(() => { incrementByOne([ NaN ]); }).toThrow(nonNumberTypeError);
					expect(() => { incrementByOne([ '' ]); }).toThrow(nonNumberTypeError);
					expect(() => { incrementByOne([ false ]); }).toThrow(nonNumberTypeError);
					expect(() => { incrementByOne([ [] ]); }).toThrow(nonNumberTypeError);
					expect(() => { incrementByOne([ {} ]); }).toThrow(nonNumberTypeError);
					expect(() => { incrementByOne([ () => {} ]); }).toThrow(nonNumberTypeError);
					expect(() => { incrementByOne([ null ]); }).toThrow(nonNumberTypeError);
					expect(() => { incrementByOne([ undefined ]); }).toThrow(nonNumberTypeError);
				});
			});
		});

		describe('Calling with non array type', () => {
			it('should throw an error', () => {
				expect(() => { incrementByOne(1); }).toThrow(nonArrayTypeError);
				expect(() => { incrementByOne(NaN); }).toThrow(nonArrayTypeError);
				expect(() => { incrementByOne(''); }).toThrow(nonArrayTypeError);
				expect(() => { incrementByOne(false); }).toThrow(nonArrayTypeError);
				expect(() => { incrementByOne({}); }).toThrow(nonArrayTypeError);
				expect(() => { incrementByOne(() => {}); }).toThrow(nonArrayTypeError);
				expect(() => { incrementByOne(null); }).toThrow(nonArrayTypeError);
				expect(() => { incrementByOne(undefined); }).toThrow(nonArrayTypeError);
			});
		});
	});

	// addItemToArray()
	describe('addItemToArray()', () => {
		describe('Calling with array as first arg and non undefined, null, or NaN type as second arg', () => {
			it('should return the array with the item pushed onto it', () => {
				expect(addItemToArray([], 1)).toEqual([ 1 ]);
				expect(addItemToArray([ 'one' ], 'two')).toEqual([ 'one', 'two' ]);
				expect(addItemToArray([ { 'one': 1 }, { 'two': 2 } ], { 'three': 3 })).toEqual([ { 'one': 1 }, { 'two': 2 }, { 'three': 3 } ]);
			});
		});

		describe('Calling with non array type as the first arg', () => {
			it('should throw an error', () => {
				expect(() => { addItemToArray(1, 'item'); }).toThrow(nonArrayTypeError);
				expect(() => { addItemToArray(NaN, 'item'); }).toThrow(nonArrayTypeError);
				expect(() => { addItemToArray('', 'item'); }).toThrow(nonArrayTypeError);
				expect(() => { addItemToArray(false, 'item'); }).toThrow(nonArrayTypeError);
				expect(() => { addItemToArray({}, 'item'); }).toThrow(nonArrayTypeError);
				expect(() => { addItemToArray(() => {}, 'item'); }).toThrow(nonArrayTypeError);
				expect(() => { addItemToArray(null, 'item'); }).toThrow(nonArrayTypeError);
				expect(() => { addItemToArray(undefined, 'item'); }).toThrow(nonArrayTypeError);
			});
		});

		describe('Calling with an undefined, null, or NaN type for the second arg', () => {
			it('should throw an error', () => {
				expect(() => { addItemToArray([], undefined); }).toThrow(undefinedArgumentError);
				expect(() => { addItemToArray([], null); }).toThrow(undefinedArgumentError);
				expect(() => { addItemToArray([], NaN); }).toThrow(undefinedArgumentError);
			});
		});
	});

	// addItemToFront()
	describe('addItemToFront()', () => {
		describe('Calling with array as first arg and non undefined, null, or NaN type as second arg', () => {
			it('should return the array with the item unshifted to the front of it', () => {
				expect(addItemToFront([], 1)).toEqual([ 1 ]);
				expect(addItemToFront([ 'one' ], 'two')).toEqual([ 'two', 'one' ]);
				expect(addItemToFront([ { 'one': 1 }, { 'two': 2 } ], { 'three': 3 })).toEqual([ { 'three': 3 }, { 'one': 1 }, { 'two': 2 } ]);
			});
		});

		describe('Calling with non array type as the first arg', () => {
			it('should throw an error', () => {
				expect(() => { addItemToFront(1, 'item'); }).toThrow(nonArrayTypeError);
				expect(() => { addItemToFront(NaN, 'item'); }).toThrow(nonArrayTypeError);
				expect(() => { addItemToFront('', 'item'); }).toThrow(nonArrayTypeError);
				expect(() => { addItemToFront(false, 'item'); }).toThrow(nonArrayTypeError);
				expect(() => { addItemToFront({}, 'item'); }).toThrow(nonArrayTypeError);
				expect(() => { addItemToFront(() => {}, 'item'); }).toThrow(nonArrayTypeError);
				expect(() => { addItemToFront(null, 'item'); }).toThrow(nonArrayTypeError);
				expect(() => { addItemToFront(undefined, 'item'); }).toThrow(nonArrayTypeError);
			});
		});

		describe('Calling with an undefined, null, or NaN type for the second arg', () => {
			it('should throw an error', () => {
				expect(() => { addItemToFront([], undefined); }).toThrow(undefinedArgumentError);
				expect(() => { addItemToFront([], null); }).toThrow(undefinedArgumentError);
				expect(() => { addItemToFront([], NaN); }).toThrow(undefinedArgumentError);
			});
		});
	});

	// wordsToSentence()
	describe('wordsToSentence()', () => {
		describe('Calling with an array type', () => {
			it('should return a string with all the words in the array joined by a space', () => {
				expect(wordsToSentence(['This', 'is', 'a', 'sentence.'])).toBe('This is a sentence.');
			});

			it('should throw an error if the array is empty', () => {
				expect(() => {
					wordsToSentence([]);
				}).toThrow(emptyArrayError);
			});

			describe('Calling with non string type as an element in the array', () => {
				it('should throw an error', () => {
					expect(() => { wordsToSentence([ 1 ]); }).toThrow(nonStringTypeError);
					expect(() => { wordsToSentence([ NaN ]); }).toThrow(nonStringTypeError);
					expect(() => { wordsToSentence([ false ]); }).toThrow(nonStringTypeError);
					expect(() => { wordsToSentence([ [] ]); }).toThrow(nonStringTypeError);
					expect(() => { wordsToSentence([ {} ]); }).toThrow(nonStringTypeError);
					expect(() => { wordsToSentence([ () => {} ]); }).toThrow(nonStringTypeError);
					expect(() => { wordsToSentence([ null ]); }).toThrow(nonStringTypeError);
					expect(() => { wordsToSentence([ undefined ]); }).toThrow(nonStringTypeError);
				});
			});
		});

		describe('Calling with non array type', () => {
			it('should throw an error', () => {
				expect(() => { wordsToSentence(1); }).toThrow(nonArrayTypeError);
				expect(() => { wordsToSentence(NaN); }).toThrow(nonArrayTypeError);
				expect(() => { wordsToSentence(''); }).toThrow(nonArrayTypeError);
				expect(() => { wordsToSentence(false); }).toThrow(nonArrayTypeError);
				expect(() => { wordsToSentence({}); }).toThrow(nonArrayTypeError);
				expect(() => { wordsToSentence(() => {}); }).toThrow(nonArrayTypeError);
				expect(() => { wordsToSentence(null); }).toThrow(nonArrayTypeError);
				expect(() => { wordsToSentence(undefined); }).toThrow(nonArrayTypeError);
			});
		});
	});

	// contains()
	describe('contains()', () => {
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

		describe('Calling with non array type as the first arg', () => {
			it('should throw an error', () => {
				expect(() => { contains(1, 'item'); }).toThrow(nonArrayTypeError);
				expect(() => { contains(NaN, 'item'); }).toThrow(nonArrayTypeError);
				expect(() => { contains('', 'item'); }).toThrow(nonArrayTypeError);
				expect(() => { contains(false, 'item'); }).toThrow(nonArrayTypeError);
				expect(() => { contains({}, 'item'); }).toThrow(nonArrayTypeError);
				expect(() => { contains(() => {}, 'item'); }).toThrow(nonArrayTypeError);
				expect(() => { contains(null, 'item'); }).toThrow(nonArrayTypeError);
				expect(() => { contains(undefined, 'item'); }).toThrow(nonArrayTypeError);
			});
		});

		describe('Calling with an undefined, null, or NaN type for the second arg', () => {
			it('should throw an error', () => {
				expect(() => { contains([], undefined); }).toThrow(undefinedArgumentError);
				expect(() => { contains([], null); }).toThrow(undefinedArgumentError);
				expect(() => { contains([], NaN); }).toThrow(undefinedArgumentError);
			});
		});
	});

	// addNumbers()
	describe('addNumbers()', () => {
		describe('Calling with an array type', () => {
			it('should return the sum of the numbers in the array', () => {
				expect(addNumbers([ 1, 2 ])).toBe(3);
				expect(addNumbers([ 0, -2, 2 ])).toBe(0);
				expect(addNumbers([ 0.1, 0.2 ])).toBeCloseTo(0.3);
			});

			it('should return 0 if the array is empty', () => {
				expect(addNumbers([])).toBe(0);
			});

			describe('Calling with non number type as an element in the array', () => {
				it('should throw an error', () => {
					expect(() => { addNumbers([ '' ]); }).toThrow(nonNumberTypeError);
					expect(() => { addNumbers([ NaN ]); }).toThrow(nonNumberTypeError);
					expect(() => { addNumbers([ false ]); }).toThrow(nonNumberTypeError);
					expect(() => { addNumbers([ [] ]); }).toThrow(nonNumberTypeError);
					expect(() => { addNumbers([ {} ]); }).toThrow(nonNumberTypeError);
					expect(() => { addNumbers([ () => {} ]); }).toThrow(nonNumberTypeError);
					expect(() => { addNumbers([ null ]); }).toThrow(nonNumberTypeError);
					expect(() => { addNumbers([ undefined ]); }).toThrow(nonNumberTypeError);
				});
			});
		});

		describe('Calling with non array type', () => {
			it('should throw an error', () => {
				expect(() => { addNumbers(1); }).toThrow(nonArrayTypeError);
				expect(() => { addNumbers(NaN); }).toThrow(nonArrayTypeError);
				expect(() => { addNumbers(''); }).toThrow(nonArrayTypeError);
				expect(() => { addNumbers(false); }).toThrow(nonArrayTypeError);
				expect(() => { addNumbers({}); }).toThrow(nonArrayTypeError);
				expect(() => { addNumbers(() => {}); }).toThrow(nonArrayTypeError);
				expect(() => { addNumbers(null); }).toThrow(nonArrayTypeError);
				expect(() => { addNumbers(undefined); }).toThrow(nonArrayTypeError);
			});
		});
	});

	// averageTestScore()
	describe('averageTestScore()', () => {
		describe('Calling with an array type', () => {
			it('should return the average of the numbers in the array', () => {
				expect(averageTestScore([ 1, 2, 3 ])).toBe(2);
				expect(averageTestScore([ 0 ])).toBe(0);
				expect(averageTestScore([ 0.1, 0.2 ])).toBeCloseTo(0.15);
				expect(averageTestScore([ 0.1, -0.2 ])).toBe(-0.05);
				expect(averageTestScore([ -0.1, -0.2 ])).toBeCloseTo(-0.15);
			});

			it('should return 0 if the array is empty', () => {
				expect(averageTestScore([])).toBe(0);
			});

			describe('Calling with non number type as an element in the array', () => {
				it('should throw an error', () => {
					expect(() => { averageTestScore([ '' ]); }).toThrow(nonNumberTypeError);
					expect(() => { averageTestScore([ NaN ]); }).toThrow(nonNumberTypeError);
					expect(() => { averageTestScore([ false ]); }).toThrow(nonNumberTypeError);
					expect(() => { averageTestScore([ [] ]); }).toThrow(nonNumberTypeError);
					expect(() => { averageTestScore([ {} ]); }).toThrow(nonNumberTypeError);
					expect(() => { averageTestScore([ () => {} ]); }).toThrow(nonNumberTypeError);
					expect(() => { averageTestScore([ null ]); }).toThrow(nonNumberTypeError);
					expect(() => { averageTestScore([ undefined ]); }).toThrow(nonNumberTypeError);
				});
			});
		});

		describe('Calling with non array type', () => {
			it('should throw an error', () => {
				expect(() => { averageTestScore(1); }).toThrow(nonArrayTypeError);
				expect(() => { averageTestScore(NaN); }).toThrow(nonArrayTypeError);
				expect(() => { averageTestScore(''); }).toThrow(nonArrayTypeError);
				expect(() => { averageTestScore(false); }).toThrow(nonArrayTypeError);
				expect(() => { averageTestScore({}); }).toThrow(nonArrayTypeError);
				expect(() => { averageTestScore(() => {}); }).toThrow(nonArrayTypeError);
				expect(() => { averageTestScore(null); }).toThrow(nonArrayTypeError);
				expect(() => { averageTestScore(undefined); }).toThrow(nonArrayTypeError);
			});
		});
	});

	// largestNumber()
	describe('largestNumber()', () => {
		describe('Calling with an array type', () => {
			it('should return the biggest of the numbers in the array', () => {
				expect(largestNumber([ 1, 2, 3 ])).toBe(3);
				expect(largestNumber([ 0 ])).toBe(0);
				expect(largestNumber([ 0.1, 0.2 ])).toBe(0.2);
				expect(largestNumber([ 0.1, -0.2 ])).toBe(0.1);
				expect(largestNumber([ -0.1, -0.2 ])).toBe(-0.1);
			});

			it('should throw an error if the array is empty', () => {
				expect(() => {
					largestNumber([]);
				}).toThrow(emptyArrayError);
			});

			describe('Calling with non number type as an element in the array', () => {
				it('should throw an error', () => {
					expect(() => { largestNumber([ '' ]); }).toThrow(nonNumberTypeError);
					expect(() => { largestNumber([ NaN ]); }).toThrow(nonNumberTypeError);
					expect(() => { largestNumber([ false ]); }).toThrow(nonNumberTypeError);
					expect(() => { largestNumber([ [] ]); }).toThrow(nonNumberTypeError);
					expect(() => { largestNumber([ {} ]); }).toThrow(nonNumberTypeError);
					expect(() => { largestNumber([ () => {} ]); }).toThrow(nonNumberTypeError);
					expect(() => { largestNumber([ null ]); }).toThrow(nonNumberTypeError);
					expect(() => { largestNumber([ undefined ]); }).toThrow(nonNumberTypeError);
				});
			});
		});

		describe('Calling with non array type', () => {
			it('should throw an error', () => {
				expect(() => { largestNumber(1); }).toThrow(nonArrayTypeError);
				expect(() => { largestNumber(NaN); }).toThrow(nonArrayTypeError);
				expect(() => { largestNumber(''); }).toThrow(nonArrayTypeError);
				expect(() => { largestNumber(false); }).toThrow(nonArrayTypeError);
				expect(() => { largestNumber({}); }).toThrow(nonArrayTypeError);
				expect(() => { largestNumber(() => {}); }).toThrow(nonArrayTypeError);
				expect(() => { largestNumber(null); }).toThrow(nonArrayTypeError);
				expect(() => { largestNumber(undefined); }).toThrow(nonArrayTypeError);
			});
		});
	});
});
