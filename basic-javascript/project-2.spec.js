const funcs = require('./project-2');

const nonNumberTypeError = 'Value must be a number.';
const nonStringTypeError = 'Value must be a string.';
const nonArrayTypeError = 'Value must be an array.';

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
				}).toThrow('Array cannot be empty.');
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
				}).toThrow('Array cannot be empty.');
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
				}).toThrow('Array cannot be empty.');
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
});
