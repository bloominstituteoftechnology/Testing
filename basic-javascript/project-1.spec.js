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
		// input string
		it('should throw an error when called with no value or string value', () => {
			expect(() => {
				helpers.multiplyByTen();
				helpers.multiplyByTen('five');
			}).toThrowError();
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
		// input string
		it('should throw an error when called with no value or string value', () => {
			expect(() => {
				helpers.subtractFive();
				helpers.subtractFive('eleven');
			}).toThrowError();
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
		// input not string
		it('should throw an error when called with no value or non-string value', () => {
			expect(() => {
				helpers.areSameLength('str1');
				helpers.areSameLength(42, 'as');
			}).toThrowError();
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
		// input not number
		it('should throw an error if one or both values are null or not a number', () => {
			expect(() => {
				helpers.areEqual(3);
				helpers.areEqual('3', '4');
			}).toThrowError();
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
		// input not number
		it('should throw an error if input is null or not a number', () => {
			expect(() => {
				helpers.lessThanNinety();
				helpers.lessThanNinety('3');
			}).toThrowError();
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
		// input not a number
		it('should throw an error if input is null or not a number', () => {
			expect(() => {
				helpers.greaterThanFifty();
				helpers.greaterThanFifty('42');
			}).toThrowError();
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
		// input string
		it('should throw an error when called with no value or a string', () => {
			expect(() => {
				helpers.add(4);
				helpers.add('5', 4);
			}).toThrowError();
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
		// input string
		it('should throw an error when called with no values or a string', () => {
			expect(() => {
				helpers.subtract(11);
				helpers.subtract(4, '4');
			}).toThrowError();
		});
	});

	describe('divide()', () => {
		// const divide = (x, y) => {
		// 	return x / y;
		// };
		// expected division
		it('should divide the provided numbers', () => {
			const actual = helpers.divide(20, 4);
			expect(actual).toEqual(5);
		});

		// input null
		// input string
		it('should throw an error when called with no values or a string', () => {
			expect(() => {
				helpers.divide(3);
				helpers.divide(10, '2');
			}).toThrowError();
		});
	});

	describe('multiply()', () => {
		// const multiply = (x, y) => {
		// 	return x * y;
		// };
		// expected multiplication
		it('should multiply the provided numbers', () => {
			const actual = helpers.multiply(20, 5);
			expect(actual).toEqual(100);
		});

		// input null
		// input string
		it('should throw an error when called with no values or a string', () => {
			expect(() => {
				helpers.multiply(10);
				helpers.multiply(10, '5');
			}).toThrowError();
		});
	});

	describe('getRemainder()', () => {
		// const getRemainder = (x, y) => {
		// 	return x % y;
		// };
		// expected remainder
		it('should return remainder of provided numbers', () => {
			const actual = helpers.getRemainder(20, 3);
			expect(actual).toEqual(2);
		});

		// input null
		// input string
		it('should throw an error when called with no values', () => {
			expect(() => {
				helpers.getRemainder(4);
				helpers.getRemainder(20, '3');
			}).toThrowError();
		});
	});

	describe('isEven()', () => {
		// const isEven = (num) => {
		// 	if (num % 2 === 0) {
		// 		return true;
		// 	}
		// 	return false;
		// };
		// expected bool
		it('should return true if input is even', () => {
			const actual = helpers.isEven(42);
			expect(actual).toEqual(true);
		});

		// input null
		// input string
		it('should throw an error when called with no value', () => {
			expect(() => {
				helpers.isEven();
				helpers.isEven('42');
			}).toThrowError();
		});
	});

	describe('isOdd()', () => {
		// const isOdd = (num) => {
		// 	if (num % 2 === 0) {
		// 		return false;
		// 	}
		// 	return true;
		// };
		// expected bool
		it('should return true if input is odd', () => {
			const actual = helpers.isOdd(13);
			expect(actual).toEqual(true);
		});

		// input null
		// input string
		it('should throw an error if input is null/undefined or a string', () => {
			expect(() => {
				helpers.isOdd();
				helpers.isOdd('27');
			}).toThrowError();
		});
	});

	describe('square()', () => {
		// const square = (num) => {
		// 	return num * num;
		// };
		// expected squared number
		it('should return the square of the value provided', () => {
			const actual = helpers.square(3);
			expect(actual).toEqual(9);
		});

		// input null
		// input string
		it('should throw an error when input is null/undefined or a string', () => {
			expect(() => {
				helpers.square();
				helpers.square('4');
			}).toThrowError();
		});
	});

	describe('cube()', () => {
		// const cube = (num) => {
		// 	return num * num * num;
		// };
		// expected cubed number
		it('should return the cube of the number provided', () => {
			const actual = helpers.cube(3);
			expect(actual).toEqual(27);
		});

		// input null
		// input string
		it('should throw an error when provided a null value or a string', () => {
			expect(() => {
				helpers.cube();
				helpers.cube('4');
			}).toThrowError();
		});
	});

	describe('raiseToPower()', () => {
		// const raiseToPower = (num, exponent) => {
		// 	return num ** exponent;
		// };
		// expected number
		it('should return a number raised to the specified power', () => {
			const actual = helpers.raiseToPower(3, 3);
			expect(actual).toEqual(27);
		});

		// input null
		// input string
		it('should throw an error when provided null or string input', () => {
			expect(() => {
				helpers.raiseToPower(4);
				helpers.raiseToPower(2, '4');
			}).toThrowError();
		});
	});

	describe('roundNumber()', () => {
		// const roundNumber = (num) => {
		// 	return Math.round(num);
		// };
		// expected rounded number
		it('should return the rounded version of the provided input', () => {
			const actual = helpers.roundNumber(5.6);
			expect(actual).toEqual(6);
		});

		// input null
		// input string
		it('should throw an error when provided null or string input', () => {
			expect(() => {
				helpers.roundNumber();
				helpers.roundNumber('3.141592653');
			}).toThrowError();
		});
	});

	describe('roundUp()', () => {
		// const roundUp = (num) => {
		// 	return Math.ceil(num);
		// };
		// expected rounded up number
		it('should return the provided value rounded up to the next whole number', () => {
			const actual = helpers.roundUp(3.33333333);
			expect(actual).toEqual(4);
		});

		// input null
		// input string
		it('should throw an error when provided null or string input', () => {
			expect(() => {
				helpers.roundUp();
				helpers.roundUp('2.222222222');
			}).toThrowError();
		});
	});

	describe('addExclamationPoint()', () => {
		// const addExclamationPoint = (str) => {
		// 	return (str += '!');
		// };
		// expected string with !
		it('should return a string ending in !', () => {
			const actual = helpers.addExclamationPoint("I'm a little teapot, short and stout");
			expect(actual).toMatch(/!$/);
		});

		// input null
		it('should throw an error when provided null input', () => {
			expect(() => {
				helpers.addExclamationPoint();
			}).toThrowError();
		});

		// no check for numbers. how do I know whether someone is really excited about pi or such?
	});

	describe('combineNames()', () => {
		// const combineNames = (firstName, lastName) => {
		// 	return `${firstName} ${lastName}`;
		// };
		// expected concated strings
		it('should return the names provided concatenated', () => {
			const actual = helpers.combineNames('Vera', 'Simon');
			expect(actual).toMatch(/Vera Simon/);
		});

		// input null
		// input number
		it('should throw an error when provided null or numeric input', () => {
			expect(() => {
				helpers.combineNames('Yoko');
				helpers.combineNames(13, 'Yeah!');
			}).toThrowError();
		});
	});

	describe('getGreeting()', () => {
		// const getGreeting = (name) => {
		// 	return `Hello ${name}!`;
		// };
		// expected greeting string
		it('should return a string like "Hello Dolly!"', () => {
			const actual = helpers.getGreeting('Vera');
			expect(actual).toMatch(/^Hello Vera!$/);
		});

		// input null
		// input number
		it('should throw an error when provided null or non-string input', () => {
			expect(() => {
				helpers.getGreeting();
				helpers.getGreeting(42);
			}).toThrowError();
		});
	});

	describe('getRectangleArea()', () => {
		// const getRectangleArea = (length, width) => {
		// 	return length * width;
		// };
		// expected computed area of rectangle
		it('should return the area of a rectangle based on the provided length and width', () => {
			const actual = helpers.getRectangleArea(4, 4);
			expect(actual).toEqual(16);
		});

		// input null
		// input string
		it('should throw an error when provided null/undefined or non-numeric input', () => {
			expect(() => {
				helpers.getRectangleArea(3);
				helpers.getRectangleArea(5, '5');
			}).toThrowError();
		});
	});

	describe('getTriangleArea()', () => {
		// const getTriangleArea = (base, height) => {
		// 	return 0.5 * base * height;
		// };
		// expected computed triangle area
		it('should return the area of a triangle based on the provided base and height', () => {
			const actual = helpers.getTriangleArea(2, 2);
			expect(actual).toEqual(2);
		});

		// input null
		// input string
		it('should throw an error when provided null or non-numeric input', () => {
			expect(() => {
				helpers.getTriangleArea(3);
				helpers.getTriangleArea(3, '3');
			}).toThrowError();
		});
	});

	describe('getCircleArea()', () => {
		// const getCircleArea = (radius) => {
		// 	return Math.PI * radius * radius;
		// };
		// expected circle area
		it('should return the area of a circle based on the provided radius', () => {
			const actual = helpers.getCircleArea(2);
			expect(actual).toBeCloseTo(12.5663);
		});

		// input null
		// input string
		it('should throw an error when provided null or non-numeric input', () => {
			expect(() => {
				helpers.getCircleArea();
				helpers.getCircleArea('3.141592653');
			}).toThrowError();
		});
	});

	describe('getRectangularPrismVolume()', () => {
		// const getRectangularPrismVolume = (length, width, height) => {
		// 	return width * height * length;
		// };
		// expected prism volume
		it('should return the volume of the prism based on the provided values', () => {
			const actual = helpers.getRectangularPrismVolume(2, 2, 2);
			expect(actual).toEqual(8);
		});

		// input null
		// input string
		it('should throw an error when provided null or non-numeric values', () => {
			expect(() => {
				helpers.getRectangularPrismVolume(1, 3);
				helpers.getRectangularPrismVolume(1, '2', 3);
			}).toThrowError();
		});
	});
});
