const helpers = require('./project-1');

// start testing!

describe('project-1.js', () => {
	describe('multiplyByTen()', () => {
		// const multiplyByTen = (num) => {
		// 	return num * 10;
		// };
		// expected multiplication
		it('should multiply provided num by ten', () => {
			const expected = 20;
			const actual = helpers.multiplyByTen(2);
			expect(actual).toEqual(expected);
		});

		// input null
		it('should throw an error when called with no value', () => {
			expect(() => {
				helpers.multiplyByTen();
			}).toThrow();
		});

		// input string
		it('should throw error when called with a string', () => {
			expect(() => {
				helpers.multiplyByTen('five');
			}).toThrow();
		});
	});

	describe('subtractFive()', () => {
		// const subtractFive = (num) => {
		// 	return num - 5;
		// };
		// expected subtraction
		it('should subtract five from provided number', () => {
			const expected = 6;
			const actual = helpers.subtractFive(11);
			expect(actual).toEqual(expected);
		});

		// input null
		it('should throw an error when called with no value', () => {
			expect(() => {
				helpers.subtractFive();
			}).toThrow();
		});

		// input string
		it('should throw error when called with a string', () => {
			expect(() => {
				helpers.subtractFive('eleven');
			}).toThrow();
		});
	});

	describe('areSameLength()', () => {
		// const areSameLength = (str1, str2) => {
		// 	return str1.length === str2.length;
		// };
		// true
		it('should return true when provided two strings of equal length', () => {
			const lengthEqual = helpers.areSameLength('str1', 'str2');
			expect(lengthEqual).toEqual(true);
		});

		// false
		it('should return false when provided two strings of unequal length', () => {
			const lengthUnequal = helpers.areSameLength('str1aaaaaaa', 'str2');
			expect(lengthUnequal).toEqual(false);
		});

		// input null
		it('should throw an error when called with no value', () => {
			expect(() => {
				helpers.areSameLength('str1');
			}).toThrow();
		});

		// input not string
		it('should throw error when called with a non-string', () => {
			expect(() => {
				helpers.areSameLength(42, 'as');
			}).toThrow();
		});
	});

	// const areEqual = (x, y) => {
	// 	return x === y;
	// };

	// const lessThanNinety = (num) => {
	// 	if (num < 90) {
	// 		return true;
	// 	}
	// 	return false;
	// };

	// const greaterThanFifty = (num) => {
	// 	if (num > 50) {
	// 		return true;
	// 	}
	// 	return false;
	// };

	// const add = (x, y) => {
	// 	return x + y;
	// };

	// const subtract = (x, y) => {
	// 	return x - y;
	// };

	// const divide = (x, y) => {
	// 	return x / y;
	// };

	// const multiply = (x, y) => {
	// 	return x * y;
	// };

	// const getRemainder = (x, y) => {
	// 	return x % y;
	// };

	// const isEven = (num) => {
	// 	if (num % 2 === 0) {
	// 		return true;
	// 	}
	// 	return false;
	// };

	// const isOdd = (num) => {
	// 	if (num % 2 === 0) {
	// 		return false;
	// 	}
	// 	return true;
	// };

	// const square = (num) => {
	// 	return num * num;
	// };

	// const cube = (num) => {
	// 	return num * num * num;
	// };

	// const raiseToPower = (num, exponent) => {
	// 	return num ** exponent;
	// };

	// const roundNumber = (num) => {
	// 	return Math.round(num);
	// };

	// const roundUp = (num) => {
	// 	return Math.ceil(num);
	// };

	// const addExclamationPoint = (str) => {
	// 	return (str += '!');
	// };

	// const combineNames = (firstName, lastName) => {
	// 	return `${firstName} ${lastName}`;
	// };

	// const getGreeting = (name) => {
	// 	return `Hello ${name}!`;
	// };

	// const getRectangleArea = (length, width) => {
	// 	return length * width;
	// };

	// const getTriangleArea = (base, height) => {
	// 	return 0.5 * base * height;
	// };

	// const getCircleArea = (radius) => {
	// 	return Math.PI * radius * radius;
	// };

	// const getRectangularPrismVolume = (length, width, height) => {
	// 	return width * height * length;
	// };
});
