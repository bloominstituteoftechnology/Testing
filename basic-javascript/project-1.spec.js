const helpers = require('./project-1');

// errors
const {
	nonNumberTypeError,
	nonStringTypeError,
	emptyStringError,
	divideByZeroError,
	negativeDimensionError,
} = require('../errors/index.js');

// start testing!
describe('project-1.js', () => {
	const {
		multiplyByTen,
		subtractFive,
		areSameLength,
		areEqual,
		lessThanNinety,
		greaterThanFifty,
		add,
		subtract,
		divide,
		multiply,
		getRemainder,
		isEven,
		isOdd,
		square,
		cube,
		raiseToPower,
		roundNumber,
		roundUp,
		addExclamationPoint,
		combineNames,
		getGreeting,
		getRectangleArea,
		getTriangleArea,
		getCircleArea,
		getRectangularPrismVolume,
	} = helpers;

	// multiplyByTen()
	describe('multiplyByTen()', () => {
		describe('Calling with number type', () => {
			it('should multiply given number by 10', () => {
				expect(multiplyByTen(0)).toBe(0);
				expect(multiplyByTen(1)).toBe(10);
				expect(multiplyByTen(5)).toBe(50);
				expect(multiplyByTen(0.55)).toBe(5.5);
				expect(multiplyByTen(-11.25)).toBe(-112.5);
			});
		});

		describe('Calling with non number type', () => {
			it('should throw an error', () => {
				expect(() => { multiplyByTen(NaN); }).toThrow(nonNumberTypeError);
				expect(() => { multiplyByTen(''); }).toThrow(nonNumberTypeError);
				expect(() => { multiplyByTen(false); }).toThrow(nonNumberTypeError);
				expect(() => { multiplyByTen([]); }).toThrow(nonNumberTypeError);
				expect(() => { multiplyByTen({}); }).toThrow(nonNumberTypeError);
				expect(() => { multiplyByTen(() => {}); }).toThrow(nonNumberTypeError);
				expect(() => { multiplyByTen(null); }).toThrow(nonNumberTypeError);
				expect(() => { multiplyByTen(undefined); }).toThrow(nonNumberTypeError);
			});
		});
	});

	// subtractByFive()
	describe('subtractFive()', () => {
		describe('Calling with number type', () => {
			it('should subtract 5 from given number', () => {
				expect(subtractFive(0)).toBe(-5);
				expect(subtractFive(1)).toBe(-4);
				expect(subtractFive(5)).toBe(0);
				expect(subtractFive(0.55)).toBe(-4.45);
				expect(subtractFive(-11.25)).toBe(-16.25);
			});
		});

		describe('Calling with non number type', () => {
			it('should throw an error', () => {
				expect(() => { subtractFive(NaN); }).toThrow(nonNumberTypeError);
				expect(() => { subtractFive(''); }).toThrow(nonNumberTypeError);
				expect(() => { subtractFive(false); }).toThrow(nonNumberTypeError);
				expect(() => { subtractFive([]); }).toThrow(nonNumberTypeError);
				expect(() => { subtractFive({}); }).toThrow(nonNumberTypeError);
				expect(() => { subtractFive(() => {}); }).toThrow(nonNumberTypeError);
				expect(() => { subtractFive(null); }).toThrow(nonNumberTypeError);
				expect(() => { subtractFive(undefined); }).toThrow(nonNumberTypeError);
			});
		});
	});

	// areSameLength()
	describe('areSameLength()', () => {
		describe('Calling with string types', () => {
			it('should return true if strings are the same length', () => {
				expect(areSameLength('str', 'one')).toBe(true);
				expect(areSameLength('', '')).toBe(true);
			});

			it('should return false if strings are different lengths', () => {
				expect(areSameLength('one', 'three')).toBe(false);
				expect(areSameLength('one', '')).toBe(false);
			});
		});

		describe('Calling with non string type', () => {
			it('should throw an error', () => {
				expect(() => { areSameLength(1); }).toThrow(nonStringTypeError);
				expect(() => { areSameLength(NaN); }).toThrow(nonStringTypeError);
				expect(() => { areSameLength(false); }).toThrow(nonStringTypeError);
				expect(() => { areSameLength([]); }).toThrow(nonStringTypeError);
				expect(() => { areSameLength({}); }).toThrow(nonStringTypeError);
				expect(() => { areSameLength(() => {}); }).toThrow(nonStringTypeError);
				expect(() => { areSameLength(null); }).toThrow(nonStringTypeError);
				expect(() => { areSameLength(undefined); }).toThrow(nonStringTypeError);
			});
		});
	});

	// areEqual()
	describe('areEqual()', () => {
		it('should return true if they are equal', () => {
			expect(areEqual(1, 1)).toBe(true);
			expect(areEqual('', '')).toBe(true);
			expect(areEqual(null, null)).toBe(true);
			expect(areEqual({}, {})).toBe(true);
			expect(areEqual(() => {}, () => {})).toBe(true);
			expect(areEqual(function(a = 1) { return a; }, function(a = 1) { return a; })).toBe(true);
		});

		it('should return false if they are not equal', () => {
			expect(areEqual(1, 2)).toBe(false);
			expect(areEqual('str', 'str1')).toBe(false);
			expect(areEqual(NaN, NaN)).toBe(false);
			expect(areEqual([''], [])).toBe(false);
			expect(areEqual(function(a = 1) { return a; }, function(b = 2) { return b; })).toBe(false);
		});
	});

	// lessThanNinety()
	describe('lessThanNinety()', () => {
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

		describe('Calling with non number type', () => {
			it('should throw an error', () => {
				expect(() => { lessThanNinety(NaN); }).toThrow(nonNumberTypeError);
				expect(() => { lessThanNinety(''); }).toThrow(nonNumberTypeError);
				expect(() => { lessThanNinety(false); }).toThrow(nonNumberTypeError);
				expect(() => { lessThanNinety([]); }).toThrow(nonNumberTypeError);
				expect(() => { lessThanNinety({}); }).toThrow(nonNumberTypeError);
				expect(() => { lessThanNinety(() => {}); }).toThrow(nonNumberTypeError);
				expect(() => { lessThanNinety(null); }).toThrow(nonNumberTypeError);
				expect(() => { lessThanNinety(undefined); }).toThrow(nonNumberTypeError);
			});
		});
	});

	// greaterThanFifty()
	describe('greaterThanFifty()', () => {
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

		describe('Calling with non number type', () => {
			it('should throw an error', () => {
				expect(() => { greaterThanFifty(NaN); }).toThrow(nonNumberTypeError);
				expect(() => { greaterThanFifty(''); }).toThrow(nonNumberTypeError);
				expect(() => { greaterThanFifty(false); }).toThrow(nonNumberTypeError);
				expect(() => { greaterThanFifty([]); }).toThrow(nonNumberTypeError);
				expect(() => { greaterThanFifty({}); }).toThrow(nonNumberTypeError);
				expect(() => { greaterThanFifty(() => {}); }).toThrow(nonNumberTypeError);
				expect(() => { greaterThanFifty(null); }).toThrow(nonNumberTypeError);
				expect(() => { greaterThanFifty(undefined); }).toThrow(nonNumberTypeError);
			});
		});
	});

	// add()
	describe('add()', () => {
		describe('Calling with number type', () => {
			it('should return the sum of both numbers', () => {
				expect(add(1, 2)).toBe(3);
				expect(add(0, 0)).toBe(0);
				expect(add(-10, 3)).toBe(-7);
				expect(add(2.2, -5.5)).toBe(-3.3);
			});
		});

		describe('Calling with non number type', () => {
			it('should throw an error', () => {
				expect(() => { add(NaN, 1); }).toThrow(nonNumberTypeError);
				expect(() => { add('', 1); }).toThrow(nonNumberTypeError);
				expect(() => { add(false, 1); }).toThrow(nonNumberTypeError);
				expect(() => { add([], 1); }).toThrow(nonNumberTypeError);
				expect(() => { add({}, 1); }).toThrow(nonNumberTypeError);
				expect(() => { add(() => {}, 1); }).toThrow(nonNumberTypeError);
				expect(() => { add(null, 1); }).toThrow(nonNumberTypeError);
				expect(() => { add(undefined, 1); }).toThrow(nonNumberTypeError);

				expect(() => { add(1, NaN); }).toThrow(nonNumberTypeError);
				expect(() => { add(1, ''); }).toThrow(nonNumberTypeError);
				expect(() => { add(1, false); }).toThrow(nonNumberTypeError);
				expect(() => { add(1, []); }).toThrow(nonNumberTypeError);
				expect(() => { add(1, {}); }).toThrow(nonNumberTypeError);
				expect(() => { add(1, () => {}); }).toThrow(nonNumberTypeError);
				expect(() => { add(1, null); }).toThrow(nonNumberTypeError);
				expect(() => { add(1, undefined); }).toThrow(nonNumberTypeError);
			});
		});
	});

	// subtract()
	describe('subtract()', () => {
		describe('Calling with number type', () => {
			it('should return the subtraction of both numbers', () => {
				expect(subtract(1, 2)).toBe(-1);
				expect(subtract(0, 0)).toBe(0);
				expect(subtract(-10, 3)).toBe(-13);
				expect(subtract(5.5, 2.2)).toBe(3.3);
			});
		});

		describe('Calling with non number type', () => {
			it('should throw an error', () => {
				expect(() => { subtract(NaN, 1); }).toThrow(nonNumberTypeError);
				expect(() => { subtract('', 1); }).toThrow(nonNumberTypeError);
				expect(() => { subtract(false, 1); }).toThrow(nonNumberTypeError);
				expect(() => { subtract([], 1); }).toThrow(nonNumberTypeError);
				expect(() => { subtract({}, 1); }).toThrow(nonNumberTypeError);
				expect(() => { subtract(() => {}, 1); }).toThrow(nonNumberTypeError);
				expect(() => { subtract(null, 1); }).toThrow(nonNumberTypeError);
				expect(() => { subtract(undefined, 1); }).toThrow(nonNumberTypeError);

				expect(() => { subtract(1, NaN); }).toThrow(nonNumberTypeError);
				expect(() => { subtract(1, ''); }).toThrow(nonNumberTypeError);
				expect(() => { subtract(1, false); }).toThrow(nonNumberTypeError);
				expect(() => { subtract(1, []); }).toThrow(nonNumberTypeError);
				expect(() => { subtract(1, {}); }).toThrow(nonNumberTypeError);
				expect(() => { subtract(1, () => {}); }).toThrow(nonNumberTypeError);
				expect(() => { subtract(1, null); }).toThrow(nonNumberTypeError);
				expect(() => { subtract(1, undefined); }).toThrow(nonNumberTypeError);
			});
		});
	});

	// divide()
	describe('divide()', () => {
		describe('Calling with number type', () => {
			it('should return the division of both numbers', () => {
				expect(divide(1, 2)).toBe(0.5);
				expect(divide(-10, 2)).toBe(-5);
				expect(divide(-10, -2)).toBe(5);
				expect(divide(6.6, 2.2)).toBeCloseTo(3);
			});

			it('should throw an error when dividing by 0', () => {
				expect(() => {
					divide(0, 0);
				}).toThrow(divideByZeroError);
			});
		});

		describe('Calling with non number type', () => {
			it('should throw an error', () => {
				expect(() => { divide(NaN, 1); }).toThrow(nonNumberTypeError);
				expect(() => { divide('', 1); }).toThrow(nonNumberTypeError);
				expect(() => { divide(false, 1); }).toThrow(nonNumberTypeError);
				expect(() => { divide([], 1); }).toThrow(nonNumberTypeError);
				expect(() => { divide({}, 1); }).toThrow(nonNumberTypeError);
				expect(() => { divide(() => {}, 1); }).toThrow(nonNumberTypeError);
				expect(() => { divide(null, 1); }).toThrow(nonNumberTypeError);
				expect(() => { divide(undefined, 1); }).toThrow(nonNumberTypeError);

				expect(() => { divide(1, NaN); }).toThrow(nonNumberTypeError);
				expect(() => { divide(1, ''); }).toThrow(nonNumberTypeError);
				expect(() => { divide(1, false); }).toThrow(nonNumberTypeError);
				expect(() => { divide(1, []); }).toThrow(nonNumberTypeError);
				expect(() => { divide(1, {}); }).toThrow(nonNumberTypeError);
				expect(() => { divide(1, () => {}); }).toThrow(nonNumberTypeError);
				expect(() => { divide(1, null); }).toThrow(nonNumberTypeError);
				expect(() => { divide(1, undefined); }).toThrow(nonNumberTypeError);
			});
		});
	});

	// multiply()
	describe('multiply()', () => {
		describe('Calling with number type', () => {
			it('should return the division of both numbers', () => {
				expect(multiply(1, 2)).toBe(2);
				expect(multiply(0, 0)).toBe(0);
				expect(multiply(-10, 2)).toBe(-20);
				expect(multiply(-10, -2)).toBe(20);
				expect(multiply(0.1, 0.2)).toBeCloseTo(0.02);
			});
		});

		describe('Calling with non number type', () => {
			it('should throw an error', () => {
				expect(() => { multiply(NaN, 1); }).toThrow(nonNumberTypeError);
				expect(() => { multiply('', 1); }).toThrow(nonNumberTypeError);
				expect(() => { multiply(false, 1); }).toThrow(nonNumberTypeError);
				expect(() => { multiply([], 1); }).toThrow(nonNumberTypeError);
				expect(() => { multiply({}, 1); }).toThrow(nonNumberTypeError);
				expect(() => { multiply(() => {}, 1); }).toThrow(nonNumberTypeError);
				expect(() => { multiply(null, 1); }).toThrow(nonNumberTypeError);
				expect(() => { multiply(undefined, 1); }).toThrow(nonNumberTypeError);

				expect(() => { multiply(1, NaN); }).toThrow(nonNumberTypeError);
				expect(() => { multiply(1, ''); }).toThrow(nonNumberTypeError);
				expect(() => { multiply(1, false); }).toThrow(nonNumberTypeError);
				expect(() => { multiply(1, []); }).toThrow(nonNumberTypeError);
				expect(() => { multiply(1, {}); }).toThrow(nonNumberTypeError);
				expect(() => { multiply(1, () => {}); }).toThrow(nonNumberTypeError);
				expect(() => { multiply(1, null); }).toThrow(nonNumberTypeError);
				expect(() => { multiply(1, undefined); }).toThrow(nonNumberTypeError);
			});
		});
	});

	// getRemainder()
	describe('getRemainder()', () => {
		describe('Calling with number type', () => {
			it('should return the remainder of the division of the numbers given', () => {
				expect(getRemainder(1, 2)).toBe(1);
				expect(getRemainder(2, 1)).toBe(0);
				expect(getRemainder(-10, 2)).toBe(0);
				expect(getRemainder(10, -2)).toBe(0);
				expect(getRemainder(0.1, 0.2)).toBe(0.1);
				expect(getRemainder(0.2, 0.1)).toBe(0);
			});

			it('should throw an error when dividing by 0', () => {
				expect(() => {
					divide(0, 0);
				}).toThrow(divideByZeroError);
			});
		});

		describe('Calling with non number type', () => {
			it('should throw an error', () => {
				expect(() => { getRemainder(NaN, 1); }).toThrow(nonNumberTypeError);
				expect(() => { getRemainder('', 1); }).toThrow(nonNumberTypeError);
				expect(() => { getRemainder(false, 1); }).toThrow(nonNumberTypeError);
				expect(() => { getRemainder([], 1); }).toThrow(nonNumberTypeError);
				expect(() => { getRemainder({}, 1); }).toThrow(nonNumberTypeError);
				expect(() => { getRemainder(() => {}, 1); }).toThrow(nonNumberTypeError);
				expect(() => { getRemainder(null, 1); }).toThrow(nonNumberTypeError);
				expect(() => { getRemainder(undefined, 1); }).toThrow(nonNumberTypeError);

				expect(() => { getRemainder(1, NaN); }).toThrow(nonNumberTypeError);
				expect(() => { getRemainder(1, ''); }).toThrow(nonNumberTypeError);
				expect(() => { getRemainder(1, false); }).toThrow(nonNumberTypeError);
				expect(() => { getRemainder(1, []); }).toThrow(nonNumberTypeError);
				expect(() => { getRemainder(1, {}); }).toThrow(nonNumberTypeError);
				expect(() => { getRemainder(1, () => {}); }).toThrow(nonNumberTypeError);
				expect(() => { getRemainder(1, null); }).toThrow(nonNumberTypeError);
				expect(() => { getRemainder(1, undefined); }).toThrow(nonNumberTypeError);
			});
		});
	});

	// isEven()
	describe('isEven()', () => {
		describe('Calling with number type', () => {
			it('should return true if the number is even', () => {
				expect(isEven(0)).toBe(true);
				expect(isEven(2)).toBe(true);
				expect(isEven(-2)).toBe(true);
			});

			it('should return false if the number is not even', () => {
				expect(isEven(1)).toBe(false);
				expect(isEven(-3)).toBe(false);
				expect(isEven(1.1)).toBe(false);
				expect(isEven(-2.2)).toBe(false);
			});
		});

		describe('Calling with non number type', () => {
			it('should throw an error', () => {
				expect(() => { isEven(NaN); }).toThrow(nonNumberTypeError);
				expect(() => { isEven(''); }).toThrow(nonNumberTypeError);
				expect(() => { isEven(false); }).toThrow(nonNumberTypeError);
				expect(() => { isEven([]); }).toThrow(nonNumberTypeError);
				expect(() => { isEven({}); }).toThrow(nonNumberTypeError);
				expect(() => { isEven(() => {}); }).toThrow(nonNumberTypeError);
				expect(() => { isEven(null); }).toThrow(nonNumberTypeError);
				expect(() => { isEven(undefined); }).toThrow(nonNumberTypeError);
			});
		});
	});

	// isOdd()
	describe('isOdd()', () => {
		describe('Calling with number type', () => {
			it('should return true if the number is odd', () => {
				expect(isOdd(1)).toBe(true);
				expect(isOdd(3)).toBe(true);
				expect(isOdd(-3)).toBe(true);
			});

			it('should return false if the number is not odd', () => {
				expect(isOdd(0)).toBe(false);
				expect(isOdd(4)).toBe(false);
				expect(isOdd(-2)).toBe(false);
				expect(isOdd(-2.2)).toBe(false);
			});
		});

		describe('Calling with non number type', () => {
			it('should throw an error', () => {
				expect(() => { isOdd(NaN); }).toThrow(nonNumberTypeError);
				expect(() => { isOdd(''); }).toThrow(nonNumberTypeError);
				expect(() => { isOdd(false); }).toThrow(nonNumberTypeError);
				expect(() => { isOdd([]); }).toThrow(nonNumberTypeError);
				expect(() => { isOdd({}); }).toThrow(nonNumberTypeError);
				expect(() => { isOdd(() => {}); }).toThrow(nonNumberTypeError);
				expect(() => { isOdd(null); }).toThrow(nonNumberTypeError);
				expect(() => { isOdd(undefined); }).toThrow(nonNumberTypeError);
			});
		});
	});

	// square()
	describe('square()', () => {
		describe('Calling with number type', () => {
			it('should return the square of the number', () => {
				expect(square(0)).toBe(0);
				expect(square(1)).toBe(1);
				expect(square(-2)).toBe(4);
				expect(square(-0.2)).toBeCloseTo(0.04);
			});
		});

		describe('Calling with non number type', () => {
			it('should throw an error', () => {
				expect(() => { square(NaN); }).toThrow(nonNumberTypeError);
				expect(() => { square(''); }).toThrow(nonNumberTypeError);
				expect(() => { square(false); }).toThrow(nonNumberTypeError);
				expect(() => { square([]); }).toThrow(nonNumberTypeError);
				expect(() => { square({}); }).toThrow(nonNumberTypeError);
				expect(() => { square(() => {}); }).toThrow(nonNumberTypeError);
				expect(() => { square(null); }).toThrow(nonNumberTypeError);
				expect(() => { square(undefined); }).toThrow(nonNumberTypeError);
			});
		});
	});

	// cube()
	describe('cube()', () => {
		describe('Calling with number type', () => {
			it('should return the cube of the number', () => {
				expect(cube(0)).toBe(0);
				expect(cube(1)).toBe(1);
				expect(cube(-2)).toBe(-8);
				expect(cube(-0.2)).toBeCloseTo(-0.008);
			});
		});

		describe('Calling with non number type', () => {
			it('should throw an error', () => {
				expect(() => { cube(NaN); }).toThrow(nonNumberTypeError);
				expect(() => { cube(''); }).toThrow(nonNumberTypeError);
				expect(() => { cube(false); }).toThrow(nonNumberTypeError);
				expect(() => { cube([]); }).toThrow(nonNumberTypeError);
				expect(() => { cube({}); }).toThrow(nonNumberTypeError);
				expect(() => { cube(() => {}); }).toThrow(nonNumberTypeError);
				expect(() => { cube(null); }).toThrow(nonNumberTypeError);
				expect(() => { cube(undefined); }).toThrow(nonNumberTypeError);
			});
		});
	});

	// raiseToPower()
	describe('raiseToPower()', () => {
		describe('Calling with number type', () => {
			it('should return the value of num raised to the value of exponent', () => {
				expect(raiseToPower(0, 1)).toBe(0);
				expect(raiseToPower(1, 0)).toBe(1);
				expect(raiseToPower(-2, -2)).toBe(0.25);
				expect(raiseToPower(4, -.5)).toBeCloseTo(0.5);
			});
		});

		describe('Calling with non number type', () => {
			it('should throw an error', () => {
				expect(() => { raiseToPower(NaN, 1); }).toThrow(nonNumberTypeError);
				expect(() => { raiseToPower('', 1); }).toThrow(nonNumberTypeError);
				expect(() => { raiseToPower(false, 1); }).toThrow(nonNumberTypeError);
				expect(() => { raiseToPower([], 1); }).toThrow(nonNumberTypeError);
				expect(() => { raiseToPower({}, 1); }).toThrow(nonNumberTypeError);
				expect(() => { raiseToPower(() => {}, 1); }).toThrow(nonNumberTypeError);
				expect(() => { raiseToPower(null, 1); }).toThrow(nonNumberTypeError);
				expect(() => { raiseToPower(undefined, 1); }).toThrow(nonNumberTypeError);

				expect(() => { raiseToPower(1, NaN); }).toThrow(nonNumberTypeError);
				expect(() => { raiseToPower(1, ''); }).toThrow(nonNumberTypeError);
				expect(() => { raiseToPower(1, false); }).toThrow(nonNumberTypeError);
				expect(() => { raiseToPower(1, []); }).toThrow(nonNumberTypeError);
				expect(() => { raiseToPower(1, {}); }).toThrow(nonNumberTypeError);
				expect(() => { raiseToPower(1, () => {}); }).toThrow(nonNumberTypeError);
				expect(() => { raiseToPower(1, null); }).toThrow(nonNumberTypeError);
				expect(() => { raiseToPower(1, undefined); }).toThrow(nonNumberTypeError);
			});
		});
	});

	// roundNumber()
	describe('roundNumber()', () => {
		describe('Calling with number type', () => {
			it('should return the value of num rounded to the nearest integer', () => {
				expect(roundNumber(0)).toBe(0);
				expect(roundNumber(1)).toBe(1);
				expect(roundNumber(0.2)).toBe(0);
				expect(roundNumber(-0.9)).toBeCloseTo(-1);
				expect(roundNumber(-1.54)).toBeCloseTo(-2);
			});
		});

		describe('Calling with non number type', () => {
			it('should throw an error', () => {
				expect(() => { roundNumber(NaN); }).toThrow(nonNumberTypeError);
				expect(() => { roundNumber(''); }).toThrow(nonNumberTypeError);
				expect(() => { roundNumber(false); }).toThrow(nonNumberTypeError);
				expect(() => { roundNumber([]); }).toThrow(nonNumberTypeError);
				expect(() => { roundNumber({}); }).toThrow(nonNumberTypeError);
				expect(() => { roundNumber(() => {}); }).toThrow(nonNumberTypeError);
				expect(() => { roundNumber(null); }).toThrow(nonNumberTypeError);
				expect(() => { roundNumber(undefined); }).toThrow(nonNumberTypeError);
			});
		});
	});

	// roundUp()
	describe('roundUp()', () => {
		describe('Calling with number type', () => {
			it('should return the value of num rounded upward to the nearest integer', () => {
				expect(roundUp(0)).toBe(0);
				expect(roundUp(1)).toBe(1);
				expect(roundUp(0.2)).toBe(1);
				expect(roundUp(-0.9)).toBeCloseTo(0);
				expect(roundUp(-1.54)).toBeCloseTo(-1);
			});
		});

		describe('Calling with non number type', () => {
			it('should throw an error', () => {
				expect(() => { roundUp(NaN); }).toThrow(nonNumberTypeError);
				expect(() => { roundUp(''); }).toThrow(nonNumberTypeError);
				expect(() => { roundUp(false); }).toThrow(nonNumberTypeError);
				expect(() => { roundUp([]); }).toThrow(nonNumberTypeError);
				expect(() => { roundUp({}); }).toThrow(nonNumberTypeError);
				expect(() => { roundUp(() => {}); }).toThrow(nonNumberTypeError);
				expect(() => { roundUp(null); }).toThrow(nonNumberTypeError);
				expect(() => { roundUp(undefined); }).toThrow(nonNumberTypeError);
			});
		});
	});

	// addExclamationPoint()
	describe('addExclamationPoint()', () => {
		describe('Calling with string types', () => {
			it('should return the string with an exclamation point at the end', () => {
				expect(addExclamationPoint('')).toBe('!');
				expect(addExclamationPoint('Hello')).toBe('Hello!');
				expect(addExclamationPoint('1')).toBe('1!');
			});
		});

		describe('Calling with non string type', () => {
			it('should throw an error', () => {
				expect(() => { addExclamationPoint(1); }).toThrow(nonStringTypeError);
				expect(() => { addExclamationPoint(NaN); }).toThrow(nonStringTypeError);
				expect(() => { addExclamationPoint(false); }).toThrow(nonStringTypeError);
				expect(() => { addExclamationPoint([]); }).toThrow(nonStringTypeError);
				expect(() => { addExclamationPoint({}); }).toThrow(nonStringTypeError);
				expect(() => { addExclamationPoint(() => {}); }).toThrow(nonStringTypeError);
				expect(() => { addExclamationPoint(null); }).toThrow(nonStringTypeError);
				expect(() => { addExclamationPoint(undefined); }).toThrow(nonStringTypeError);
			});
		});
	});

	// combineNames()
	describe('combineNames()', () => {
		describe('Calling with string types', () => {
			it('should return the first and last names joined by a space', () => {
				expect(combineNames('Alice', 'Johnson')).toBe('Alice Johnson');
			});

			it('should throw an error if a name is an empty string', () => {
				expect(() => {
					combineNames('', 'Johnson');
				}).toThrow(emptyStringError);

				expect(() => {
					combineNames('Alice', '');
				}).toThrow(emptyStringError);
			});
		});

		describe('Calling with non string type', () => {
			it('should throw an error', () => {
				expect(() => { combineNames(1, 'Alice'); }).toThrow(nonStringTypeError);
				expect(() => { combineNames(NaN, 'Alice'); }).toThrow(nonStringTypeError);
				expect(() => { combineNames(false, 'Alice'); }).toThrow(nonStringTypeError);
				expect(() => { combineNames([], 'Alice'); }).toThrow(nonStringTypeError);
				expect(() => { combineNames({}, 'Alice'); }).toThrow(nonStringTypeError);
				expect(() => { combineNames(() => {}, 'Alice'); }).toThrow(nonStringTypeError);
				expect(() => { combineNames(null, 'Alice'); }).toThrow(nonStringTypeError);
				expect(() => { combineNames(undefined, 'Alice'); }).toThrow(nonStringTypeError);

				expect(() => { combineNames('Alice', 1); }).toThrow(nonStringTypeError);
				expect(() => { combineNames('Alice', NaN); }).toThrow(nonStringTypeError);
				expect(() => { combineNames('Alice', false); }).toThrow(nonStringTypeError);
				expect(() => { combineNames('Alice', []); }).toThrow(nonStringTypeError);
				expect(() => { combineNames('Alice', {}); }).toThrow(nonStringTypeError);
				expect(() => { combineNames('Alice', () => {}); }).toThrow(nonStringTypeError);
				expect(() => { combineNames('Alice', null); }).toThrow(nonStringTypeError);
				expect(() => { combineNames('Alice', undefined); }).toThrow(nonStringTypeError);
			});
		});
	});

	// getGreeting()
	describe('getGreeting()', () => {
		describe('Calling with string types', () => {
			it('should return the appropriate greeting given the name', () => {
				expect(getGreeting('Alice')).toBe('Hello Alice!');
			});

			it('should throw an error if name is an empty string', () => {
				expect(() => {
					getGreeting('');
				}).toThrow(emptyStringError);
			});
		});

		describe('Calling with non string type', () => {
			it('should throw an error', () => {
				expect(() => { getGreeting(1); }).toThrow(nonStringTypeError);
				expect(() => { getGreeting(NaN); }).toThrow(nonStringTypeError);
				expect(() => { getGreeting(false); }).toThrow(nonStringTypeError);
				expect(() => { getGreeting([]); }).toThrow(nonStringTypeError);
				expect(() => { getGreeting({}); }).toThrow(nonStringTypeError);
				expect(() => { getGreeting(() => {}); }).toThrow(nonStringTypeError);
				expect(() => { getGreeting(null); }).toThrow(nonStringTypeError);
				expect(() => { getGreeting(undefined); }).toThrow(nonStringTypeError);
			});
		});
	});

	// getRectangleArea()
	describe('getRectangleArea()', () => {
		describe('Calling with number types', () => {
			it('should return the area of the rectangle with the given dimensions', () => {
				expect(getRectangleArea(0, 0)).toBe(0);
				expect(getRectangleArea(0, 1)).toBe(0);
				expect(getRectangleArea(2, 1)).toBe(2);
				expect(getRectangleArea(0.2, 0.1)).toBeCloseTo(0.02);
			});

			it('should throw an error if a dimension is negative', () => {
				expect(() => {
					getRectangleArea(-1, 2);
				}).toThrow(negativeDimensionError);

				expect(() => {
					getRectangleArea(1, -2);
				}).toThrow(negativeDimensionError);
			});
		});

		describe('Calling with non number type', () => {
			it('should throw an error', () => {
				expect(() => { getRectangleArea(NaN, 1); }).toThrow(nonNumberTypeError);
				expect(() => { getRectangleArea('', 1); }).toThrow(nonNumberTypeError);
				expect(() => { getRectangleArea(false, 1); }).toThrow(nonNumberTypeError);
				expect(() => { getRectangleArea([], 1); }).toThrow(nonNumberTypeError);
				expect(() => { getRectangleArea({}, 1); }).toThrow(nonNumberTypeError);
				expect(() => { getRectangleArea(() => {}, 1); }).toThrow(nonNumberTypeError);
				expect(() => { getRectangleArea(null, 1); }).toThrow(nonNumberTypeError);
				expect(() => { getRectangleArea(undefined, 1); }).toThrow(nonNumberTypeError);

				expect(() => { getRectangleArea(1, NaN); }).toThrow(nonNumberTypeError);
				expect(() => { getRectangleArea(1, ''); }).toThrow(nonNumberTypeError);
				expect(() => { getRectangleArea(1, false); }).toThrow(nonNumberTypeError);
				expect(() => { getRectangleArea(1, []); }).toThrow(nonNumberTypeError);
				expect(() => { getRectangleArea(1, {}); }).toThrow(nonNumberTypeError);
				expect(() => { getRectangleArea(1, () => {}); }).toThrow(nonNumberTypeError);
				expect(() => { getRectangleArea(1, null); }).toThrow(nonNumberTypeError);
				expect(() => { getRectangleArea(1, undefined); }).toThrow(nonNumberTypeError);
			});
		});
	});

	// getTriangleArea()
	describe('getTriangleArea()', () => {
		describe('Calling with number types', () => {
			it('should return the area of the triangle with the given dimensions', () => {
				expect(getTriangleArea(0, 0)).toBe(0);
				expect(getTriangleArea(0, 1)).toBe(0);
				expect(getTriangleArea(2, 1)).toBe(1);
				expect(getTriangleArea(0.2, 0.1)).toBeCloseTo(0.01);
			});

			it('should throw an error if a dimension is negative', () => {
				expect(() => {
					getTriangleArea(-1, 2);
				}).toThrow(negativeDimensionError);

				expect(() => {
					getTriangleArea(1, -2);
				}).toThrow(negativeDimensionError);
			});
		});

		describe('Calling with non number type', () => {
			it('should throw an error', () => {
				expect(() => { getTriangleArea(NaN, 1); }).toThrow(nonNumberTypeError);
				expect(() => { getTriangleArea('', 1); }).toThrow(nonNumberTypeError);
				expect(() => { getTriangleArea(false, 1); }).toThrow(nonNumberTypeError);
				expect(() => { getTriangleArea([], 1); }).toThrow(nonNumberTypeError);
				expect(() => { getTriangleArea({}, 1); }).toThrow(nonNumberTypeError);
				expect(() => { getTriangleArea(() => {}, 1); }).toThrow(nonNumberTypeError);
				expect(() => { getTriangleArea(null, 1); }).toThrow(nonNumberTypeError);
				expect(() => { getTriangleArea(undefined, 1); }).toThrow(nonNumberTypeError);

				expect(() => { getTriangleArea(1, NaN); }).toThrow(nonNumberTypeError);
				expect(() => { getTriangleArea(1, ''); }).toThrow(nonNumberTypeError);
				expect(() => { getTriangleArea(1, false); }).toThrow(nonNumberTypeError);
				expect(() => { getTriangleArea(1, []); }).toThrow(nonNumberTypeError);
				expect(() => { getTriangleArea(1, {}); }).toThrow(nonNumberTypeError);
				expect(() => { getTriangleArea(1, () => {}); }).toThrow(nonNumberTypeError);
				expect(() => { getTriangleArea(1, null); }).toThrow(nonNumberTypeError);
				expect(() => { getTriangleArea(1, undefined); }).toThrow(nonNumberTypeError);
			});
		});
	});

	// getCircleArea()
	describe('getCircleArea()', () => {
		describe('Calling with number types', () => {
			it('should return the area of the circle with the given radius', () => {
				expect(getCircleArea(0)).toBe(0);
				expect(getCircleArea(2)).toBe(12.566370614359172);
				expect(getCircleArea(0.2)).toBeCloseTo(0.12566370614359174);
			});

			it('should throw an error if a dimension is negative', () => {
				expect(() => {
					getCircleArea(-1);
				}).toThrow(negativeDimensionError);
			});
		});

		describe('Calling with non number type', () => {
			it('should throw an error', () => {
				expect(() => { getCircleArea(NaN); }).toThrow(nonNumberTypeError);
				expect(() => { getCircleArea(''); }).toThrow(nonNumberTypeError);
				expect(() => { getCircleArea(false); }).toThrow(nonNumberTypeError);
				expect(() => { getCircleArea([]); }).toThrow(nonNumberTypeError);
				expect(() => { getCircleArea({}); }).toThrow(nonNumberTypeError);
				expect(() => { getCircleArea(() => {}); }).toThrow(nonNumberTypeError);
				expect(() => { getCircleArea(null); }).toThrow(nonNumberTypeError);
				expect(() => { getCircleArea(undefined); }).toThrow(nonNumberTypeError);
			});
		});
	});

	// getRectangularPrismVolume()
	describe('getRectangularPrismVolume()', () => {
		describe('Calling with number types', () => {
			it('should return the volume of the prism with the given dimensions', () => {
				expect(getRectangularPrismVolume(0, 0, 0)).toBe(0);
				expect(getRectangularPrismVolume(1, 2, 3)).toBe(6);
				expect(getRectangularPrismVolume(0.2, 0.1, 0.1)).toBeCloseTo(0.002);
			});

			it('should throw an error if a dimension is negative', () => {
				expect(() => {
					getRectangularPrismVolume(-1, 1, 1);
				}).toThrow(negativeDimensionError);

				expect(() => {
					getRectangularPrismVolume(1, -1, 1);
				}).toThrow(negativeDimensionError);

				expect(() => {
					getRectangularPrismVolume(1, 1, -1);
				}).toThrow(negativeDimensionError);
			});
		});

		describe('Calling with non number type', () => {
			it('should throw an error', () => {
				expect(() => { getRectangularPrismVolume(NaN, 1, 1); }).toThrow(nonNumberTypeError);
				expect(() => { getRectangularPrismVolume('', 1, 1); }).toThrow(nonNumberTypeError);
				expect(() => { getRectangularPrismVolume(false, 1, 1); }).toThrow(nonNumberTypeError);
				expect(() => { getRectangularPrismVolume([], 1, 1); }).toThrow(nonNumberTypeError);
				expect(() => { getRectangularPrismVolume({}, 1, 1); }).toThrow(nonNumberTypeError);
				expect(() => { getRectangularPrismVolume(() => {}, 1, 1); }).toThrow(nonNumberTypeError);
				expect(() => { getRectangularPrismVolume(null, 1, 1); }).toThrow(nonNumberTypeError);
				expect(() => { getRectangularPrismVolume(undefined, 1, 1); }).toThrow(nonNumberTypeError);

				expect(() => { getRectangularPrismVolume(1, NaN, 1); }).toThrow(nonNumberTypeError);
				expect(() => { getRectangularPrismVolume(1, '', 1); }).toThrow(nonNumberTypeError);
				expect(() => { getRectangularPrismVolume(1, false, 1); }).toThrow(nonNumberTypeError);
				expect(() => { getRectangularPrismVolume(1, [], 1); }).toThrow(nonNumberTypeError);
				expect(() => { getRectangularPrismVolume(1, {}, 1); }).toThrow(nonNumberTypeError);
				expect(() => { getRectangularPrismVolume(1, () => {}, 1); }).toThrow(nonNumberTypeError);
				expect(() => { getRectangularPrismVolume(1, null, 1); }).toThrow(nonNumberTypeError);
				expect(() => { getRectangularPrismVolume(1, undefined, 1); }).toThrow(nonNumberTypeError);

				expect(() => { getRectangularPrismVolume(1, 1, NaN); }).toThrow(nonNumberTypeError);
				expect(() => { getRectangularPrismVolume(1, 1, ''); }).toThrow(nonNumberTypeError);
				expect(() => { getRectangularPrismVolume(1, 1, false); }).toThrow(nonNumberTypeError);
				expect(() => { getRectangularPrismVolume(1, 1, []); }).toThrow(nonNumberTypeError);
				expect(() => { getRectangularPrismVolume(1, 1, {}); }).toThrow(nonNumberTypeError);
				expect(() => { getRectangularPrismVolume(1, 1, () => {}); }).toThrow(nonNumberTypeError);
				expect(() => { getRectangularPrismVolume(1, 1, null); }).toThrow(nonNumberTypeError);
				expect(() => { getRectangularPrismVolume(1, 1, undefined); }).toThrow(nonNumberTypeError);
			});
		});
	});
});
