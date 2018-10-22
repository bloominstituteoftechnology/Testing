const funcs = require('./project-2');

const nonNumberTypeError = 'Value must be a number.';
const nonStringTypeError = 'Value must be a string.';

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Testing project-2.js', () => {
	const {
		getBiggest,
		greeting,
		isTenOrFive,
		isInRange,
		isInteger,
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
});
