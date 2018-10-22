const helpers = require('./project-1');

const nonNumberTypeError = 'Value must be a number.';
const nonStringTypeError = 'Value must be a string.';

// start testing!
describe('Testing project-1.js', () => {
	const {
		multiplyByTen,
		subtractFive,
		areSameLength,
		areEqual,
		lessThanNinety,
		greaterThanFifty,
	} = helpers;

	// multiplyByTen()
	describe('Testing multiplyByTen()', () => {
		describe('Calling with a string, null or undefined type', () => {
			it('should throw an error', () => {
				expect(() => {
					multiplyByTen('one');
				}).toThrow(nonNumberTypeError);

				expect(() => {
					multiplyByTen(null);
				}).toThrow(nonNumberTypeError);
	
				expect(() => {
					multiplyByTen(undefined);
				}).toThrow(nonNumberTypeError);
			});
		});

		describe('Calling with number type', () => {
			it('should multiply given number by 10', () => {
				expect(multiplyByTen(0)).toBe(0);
				expect(multiplyByTen(1)).toBe(10);
				expect(multiplyByTen(5)).toBe(50);
				expect(multiplyByTen(0.55)).toBe(5.5);
				expect(multiplyByTen(-11.25)).toBe(-112.5);
			});
		});
	});

	// subtractByFive()
	describe('Testing subtractFive()', () => {
		describe('Calling with a string, null or undefined type', () => {
			it('should throw an error', () => {
				expect(() => {
					subtractFive('one');
				}).toThrow(nonNumberTypeError);

				expect(() => {
					subtractFive(null);
				}).toThrow(nonNumberTypeError);
	
				expect(() => {
					subtractFive(undefined);
				}).toThrow(nonNumberTypeError);
			});
		});

		describe('Calling with number type', () => {
			it('should subtract 5 from given number', () => {
				expect(subtractFive(0)).toBe(-5);
				expect(subtractFive(1)).toBe(-4);
				expect(subtractFive(5)).toBe(0);
				expect(subtractFive(0.55)).toBe(-4.45);
				expect(subtractFive(-11.25)).toBe(-16.25);
			});
		});
	});

	// areSameLength()
	describe('Testing areSameLength()', () => {
		describe('Calling with number types', () => {
			it('should throw an error', () => {
				expect(() => {
					areSameLength(1, 2);
				}).toThrow(nonStringTypeError);
	
				expect(() => {
					areSameLength(null, null);
				}).toThrow(nonStringTypeError);
	
				expect(() => {
					areSameLength(undefined, undefined);
				}).toThrow(nonStringTypeError);
			});
		});

		describe('Calling with string types', () => {
			it('should return true if strings are the same length', () => {
				expect(areSameLength('str', 'one')).toBe(true);
			});

			it('should return false if strings are different lengths', () => {
				expect(areSameLength('one', 'three')).toBe(false);
			});
		});
	});

	// areEqual()
	describe('Testing areEqual()', () => {
		it('should return true if they are equal', () => {
			expect(areEqual(1, 1)).toBe(true);
			expect(areEqual('', '')).toBe(true);
			expect(areEqual(null, null)).toBe(true);
		});

		it('should return false if they are not equal', () => {
			expect(areEqual(1, 2)).toBe(false);
			expect(areEqual('str', 'str1')).toBe(false);
			expect(areEqual(NaN, NaN)).toBe(false);
		});
	});

	// lessThanNinety()
	describe('Testing lessThanNinety()', () => {
		describe('Calling with a string, null or undefined type', () => {
			it('should throw an error', () => {
				expect(() => {
					lessThanNinety('one');
				}).toThrow(nonNumberTypeError);

				expect(() => {
					lessThanNinety(null);
				}).toThrow(nonNumberTypeError);
	
				expect(() => {
					lessThanNinety(undefined);
				}).toThrow(nonNumberTypeError);
			});
		});

		describe('Calling with number type', () => {
			it('should return true if given number is less than ninety', () => {
				expect(lessThanNinety(0)).toBe(true);
				expect(lessThanNinety(89)).toBe(true);
				expect(lessThanNinety(-2)).toBe(true);
			});

			it('should return false if given number is not less than ninety', () => {
				expect(lessThanNinety(90)).toBe(false);
				expect(lessThanNinety(91)).toBe(false);
			});
		});
	});

	// greaterThanFifty()
	describe('Testing greaterThanFifty()', () => {
		describe('Calling with a string, null or undefined type', () => {
			it('should throw an error', () => {
				expect(() => {
					greaterThanFifty('one');
				}).toThrow(nonNumberTypeError);

				expect(() => {
					greaterThanFifty(null);
				}).toThrow(nonNumberTypeError);
	
				expect(() => {
					greaterThanFifty(undefined);
				}).toThrow(nonNumberTypeError);
			});
		});

		describe('Calling with number type', () => {
			it('should return true if given number is greater than fifty', () => {
				expect(greaterThanFifty(51)).toBe(true);
				expect(greaterThanFifty(100)).toBe(true);
			});

			it('should return false if given number is not greater than fifty', () => {
				expect(greaterThanFifty(50)).toBe(false);
				expect(greaterThanFifty(-91)).toBe(false);
			});
		});
	});
});
