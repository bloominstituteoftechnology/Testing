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
		// return true
		it('should return true when provided two strings of equal length', () => {
			const lengthEqual = helpers.areSameLength('str1', 'str2');
			expect(lengthEqual).toEqual(true);
		});

		// return false
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

	describe('areEqual()', () => {
		// const areEqual = (x, y) => {
		// 	return x === y;
		// };
		// are equal
		it('should return true if values are equal', () => {
			const actual = helpers.areEqual(4, 4);
			expect(actual).toEqual(true);
		});

		// not equal
		it('should return false if values are not equal', () => {
			const actual = helpers.areEqual(2, 4);
			expect(actual).toEqual(false);
		});

		// input null
		it('should throw an error if one or both values are null', () => {
			expect(() => {
				helpers.areEqual(3);
			}).toThrow();
		});

		// input not number
		it('should throw an error if one or both values are not a number', () => {
			expect(() => {
				helpers.areEqual('3', '4');
			}).toThrow();
		});
	});

	describe('lessThanNinety()', () => {
		// const lessThanNinety = (num) => {
		// 	if (num < 90) {
		// 		return true;
		// 	}
		// 	return false;
		// };
		// less than 90
		it('should return true if input is less than ninety', () => {
			const actual = helpers.lessThanNinety(42);
			expect(actual).toEqual(true);
		});

		// greater than or equal to 90
		it('should return false if input is greater than eighty-nine', () => {
			const actual = helpers.lessThanNinety(90);
			expect(actual).toEqual(false);
		});

		// input null
		it('should throw an error if input is null', () => {
			expect(() => {
				helpers.lessThanNinety();
			}).toThrow();
		});

		// input not number
		it('should throw an error if input is not a number', () => {
			expect(() => {
				helpers.lessThanNinety('3');
			}).toThrow();
		});
	});

	describe('greaterThanFifty()', () => {
		// const greaterThanFifty = (num) => {
		// 	if (num > 50) {
		// 		return true;
		// 	}
		// 	return false;
		// };
		// greater than 50
		it('should return true if input is greater than fifty', () => {
			const actual = helpers.greaterThanFifty(51);
			expect(actual).toEqual(true);
		});

		// less than 50
		it('should return false if input is less than 51', () => {
			const actual = helpers.greaterThanFifty(50);
			expect(actual).toEqual(false);
		});

		// input null
		it('should throw an error if input is null', () => {
			expect(() => {
				helpers.greaterThanFifty();
			}).toThrow();
		});

		// input not a number
		it('should throw an error if the input is not a number', () => {
			expect(() => {
				helpers.greaterThanFifty('42');
			}).toThrow();
		});
	});

	describe('add()', () => {
		// const add = (x, y) => {
		// 	return x + y;
		// };
		// expected addition
		it('should add provided nums together', () => {
			const actual = helpers.add(2, 3);
			expect(actual).toEqual(5);
		});

		// input null
		it('should throw an error when called with no value', () => {
			expect(() => {
				helpers.add(4);
			}).toThrow();
		});

		// input string
		it('should throw error when called with a string', () => {
			expect(() => {
				helpers.add('5', 4);
			}).toThrow();
		});
	});

	describe('subtract()', () => {
		// const subtract = (x, y) => {
		// 	return x - y;
		// };
		// expected subtraction
		it('should subtract provided nums', () => {
			const actual = helpers.subtract(10, 5);
			expect(actual).toEqual(5);
		});

		// input null
		it('should throw an error when called with no values', () => {
			expect(() => {
				helpers.subtract(11);
			}).toThrow();
		});

		// input string
		it('should throw an error when called with a string', () => {
			expect(() => {
				helpers.add(4, '4');
			}).toThrow();
		});
	});

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
