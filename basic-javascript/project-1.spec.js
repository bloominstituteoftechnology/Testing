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
		describe('Calling with number, null or undefined types', () => {
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

	// add()
	describe('Testing add()', () => {
		describe('Calling with a string, null or undefined type', () => {
			it('should throw an error', () => {
				expect(() => {
					add('one', 2);
				}).toThrow(nonNumberTypeError);

				expect(() => {
					add(1, null);
				}).toThrow(nonNumberTypeError);
	
				expect(() => {
					add(undefined, 1);
				}).toThrow(nonNumberTypeError);
			});
		});

		describe('Calling with number type', () => {
			it('should return the sum of both numbers', () => {
				expect(add(1, 2)).toBe(3);
				expect(add(0, 0)).toBe(0);
				expect(add(-10, 3)).toBe(-7);
				expect(add(2.2, -5.5)).toBe(-3.3);
			});
		});
	});

	// subtract()
	describe('Testing subtract()', () => {
		describe('Calling with a string, null or undefined type', () => {
			it('should throw an error', () => {
				expect(() => {
					subtract('one', 2);
				}).toThrow(nonNumberTypeError);

				expect(() => {
					subtract(1, null);
				}).toThrow(nonNumberTypeError);
	
				expect(() => {
					subtract(undefined, 1);
				}).toThrow(nonNumberTypeError);
			});
		});

		describe('Calling with number type', () => {
			it('should return the subtraction of both numbers', () => {
				expect(subtract(1, 2)).toBe(-1);
				expect(subtract(0, 0)).toBe(0);
				expect(subtract(-10, 3)).toBe(-13);
				expect(subtract(5.5, 2.2)).toBe(3.3);
			});
		});
	});

	// divide()
	describe('Testing divide()', () => {
		describe('Calling with a string, null or undefined type', () => {
			it('should throw an error', () => {
				expect(() => {
					divide('one', 2);
				}).toThrow(nonNumberTypeError);

				expect(() => {
					divide(1, null);
				}).toThrow(nonNumberTypeError);
	
				expect(() => {
					divide(undefined, 1);
				}).toThrow(nonNumberTypeError);
			});
		});

		describe('Calling with number type', () => {
			it('should throw an error when dividing by 0', () => {
				expect(() => {
					divide(0, 0);
				}).toThrow('Cannot divide by zero.');
			});

			it('should return the division of both numbers', () => {
				expect(divide(1, 2)).toBe(0.5);
				expect(divide(-10, 2)).toBe(-5);
				expect(divide(-10, -2)).toBe(5);
				expect(divide(6.6, 2.2)).toBeCloseTo(3);
			});
		});
	});

	// multiply()
	describe('Testing multiply()', () => {
		describe('Calling with a string, null or undefined type', () => {
			it('should throw an error', () => {
				expect(() => {
					multiply('one', 2);
				}).toThrow(nonNumberTypeError);

				expect(() => {
					multiply(1, null);
				}).toThrow(nonNumberTypeError);
	
				expect(() => {
					multiply(undefined, 1);
				}).toThrow(nonNumberTypeError);
			});
		});

		describe('Calling with number type', () => {
			it('should return the division of both numbers', () => {
				expect(multiply(1, 2)).toBe(2);
				expect(multiply(0, 0)).toBe(0);
				expect(multiply(-10, 2)).toBe(-20);
				expect(multiply(-10, -2)).toBe(20);
				expect(multiply(0.1, 0.2)).toBeCloseTo(0.02);
			});
		});
	});

	// getRemainder()
	describe('Testing getRemainder()', () => {
		describe('Calling with a string, null or undefined type', () => {
			it('should throw an error', () => {
				expect(() => {
					getRemainder('one', 2);
				}).toThrow(nonNumberTypeError);

				expect(() => {
					getRemainder(1, null);
				}).toThrow(nonNumberTypeError);
	
				expect(() => {
					getRemainder(undefined, 1);
				}).toThrow(nonNumberTypeError);
			});
		});

		describe('Calling with number type', () => {
			it('should throw an error when dividing by 0', () => {
				expect(() => {
					divide(0, 0);
				}).toThrow('Cannot divide by zero.');
			});

			it('should return the remainder of the division of the numbers given', () => {
				expect(getRemainder(1, 2)).toBe(1);
				expect(getRemainder(2, 1)).toBe(0);
				expect(getRemainder(-10, 2)).toBe(0);
				expect(getRemainder(10, -2)).toBe(0);
				expect(getRemainder(0.1, 0.2)).toBe(0.1);
				expect(getRemainder(0.2, 0.1)).toBe(0);
			});
		});
	});

	// isEven()
	describe('Testing isEven()', () => {
		describe('Calling with a string, null or undefined type', () => {
			it('should throw an error', () => {
				expect(() => {
					isEven('one');
				}).toThrow(nonNumberTypeError);

				expect(() => {
					isEven(null);
				}).toThrow(nonNumberTypeError);
	
				expect(() => {
					isEven(undefined);
				}).toThrow(nonNumberTypeError);
			});
		});

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
	});

	// isOdd()
	describe('Testing isOdd()', () => {
		describe('Calling with a string, null or undefined type', () => {
			it('should throw an error', () => {
				expect(() => {
					isOdd('one');
				}).toThrow(nonNumberTypeError);

				expect(() => {
					isOdd(null);
				}).toThrow(nonNumberTypeError);
	
				expect(() => {
					isOdd(undefined);
				}).toThrow(nonNumberTypeError);
			});
		});

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
			});
		});
	});

	// square()
	describe('Testing square()', () => {
		describe('Calling with a string, null or undefined type', () => {
			it('should throw an error', () => {
				expect(() => {
					square('one');
				}).toThrow(nonNumberTypeError);

				expect(() => {
					square(null);
				}).toThrow(nonNumberTypeError);
	
				expect(() => {
					square(undefined);
				}).toThrow(nonNumberTypeError);
			});
		});

		describe('Calling with number type', () => {
			it('should return the square of the number', () => {
				expect(square(0)).toBe(0);
				expect(square(1)).toBe(1);
				expect(square(-2)).toBe(4);
				expect(square(-0.2)).toBeCloseTo(0.04);
			});
		});
	});

	// cube()
	describe('Testing cube()', () => {
		describe('Calling with a string, null or undefined type', () => {
			it('should throw an error', () => {
				expect(() => {
					cube('one');
				}).toThrow(nonNumberTypeError);

				expect(() => {
					cube(null);
				}).toThrow(nonNumberTypeError);
	
				expect(() => {
					cube(undefined);
				}).toThrow(nonNumberTypeError);
			});
		});

		describe('Calling with number type', () => {
			it('should return the cube of the number', () => {
				expect(cube(0)).toBe(0);
				expect(cube(1)).toBe(1);
				expect(cube(-2)).toBe(-8);
				expect(cube(-0.2)).toBeCloseTo(-0.008);
			});
		});
	});

	// raiseToPower()
	describe('Testing raiseToPower()', () => {
		describe('Calling with a string, null or undefined type', () => {
			it('should throw an error', () => {
				expect(() => {
					raiseToPower('one', 2);
				}).toThrow(nonNumberTypeError);

				expect(() => {
					raiseToPower(1, null);
				}).toThrow(nonNumberTypeError);
	
				expect(() => {
					raiseToPower(undefined, 1);
				}).toThrow(nonNumberTypeError);
			});
		});

		describe('Calling with number type', () => {
			it('should return the value of num raised to the value of exponent', () => {
				expect(raiseToPower(0, 1)).toBe(0);
				expect(raiseToPower(1, 0)).toBe(1);
				expect(raiseToPower(-2, -2)).toBe(0.25);
				expect(raiseToPower(4, -.5)).toBeCloseTo(0.5);
			});
		});
	});

	// roundNumber()
	describe('Testing roundNumber()', () => {
		describe('Calling with a string, null or undefined type', () => {
			it('should throw an error', () => {
				expect(() => {
					roundNumber('one');
				}).toThrow(nonNumberTypeError);

				expect(() => {
					roundNumber(null);
				}).toThrow(nonNumberTypeError);
	
				expect(() => {
					roundNumber(undefined);
				}).toThrow(nonNumberTypeError);
			});
		});

		describe('Calling with number type', () => {
			it('should return the value of num rounded to the nearest integer', () => {
				expect(roundNumber(0)).toBe(0);
				expect(roundNumber(1)).toBe(1);
				expect(roundNumber(0.2)).toBe(0);
				expect(roundNumber(-0.9)).toBeCloseTo(-1);
				expect(roundNumber(-1.54)).toBeCloseTo(-2);
			});
		});
	});

	// roundUp()
	describe('Testing roundUp()', () => {
		describe('Calling with a string, null or undefined type', () => {
			it('should throw an error', () => {
				expect(() => {
					roundUp('one');
				}).toThrow(nonNumberTypeError);

				expect(() => {
					roundUp(null);
				}).toThrow(nonNumberTypeError);
	
				expect(() => {
					roundUp(undefined);
				}).toThrow(nonNumberTypeError);
			});
		});

		describe('Calling with number type', () => {
			it('should return the value of num rounded upward to the nearest integer', () => {
				expect(roundUp(0)).toBe(0);
				expect(roundUp(1)).toBe(1);
				expect(roundUp(0.2)).toBe(1);
				expect(roundUp(-0.9)).toBeCloseTo(0);
				expect(roundUp(-1.54)).toBeCloseTo(-1);
			});
		});
	});

	// addExclamationPoint()
	describe('Testing addExclamationPoint()', () => {
		describe('Calling with a number, null or undefined type', () => {
			it('should throw an error', () => {
				expect(() => {
					addExclamationPoint(1);
				}).toThrow(nonStringTypeError);

				expect(() => {
					addExclamationPoint(null);
				}).toThrow(nonStringTypeError);

				expect(() => {
					addExclamationPoint(undefined);
				}).toThrow(nonStringTypeError);
			});
		});

		describe('Calling with string types', () => {
			it('should return the string with an exclamation point at the end', () => {
				expect(addExclamationPoint('')).toBe('!');
				expect(addExclamationPoint('Hello')).toBe('Hello!');
				expect(addExclamationPoint('1')).toBe('1!');
			});
		});
	});

	// combineNames()
	describe('Testing combineNames()', () => {
		describe('Calling with a number, null or undefined type', () => {
			it('should throw an error', () => {
				expect(() => {
					combineNames(1);
				}).toThrow(nonStringTypeError);

				expect(() => {
					combineNames(null);
				}).toThrow(nonStringTypeError);

				expect(() => {
					combineNames(undefined);
				}).toThrow(nonStringTypeError);
			});
		});

		describe('Calling with string types', () => {
			it('should throw an error if a name is an empty string', () => {
				expect(() => {
					combineNames('', 'Johnson');
				}).toThrow('Names cannot be empty.');

				expect(() => {
					combineNames('Alice', '');
				}).toThrow('Names cannot be empty.');
			});

			it('should return the first and last names joined by a space', () => {
				expect(combineNames('Alice', 'Johnson')).toBe('Alice Johnson');
			});
		});
	});

	// getGreeting()
	describe('Testing getGreeting()', () => {
		describe('Calling with a number, null or undefined type', () => {
			it('should throw an error', () => {
				expect(() => {
					getGreeting(1);
				}).toThrow(nonStringTypeError);

				expect(() => {
					getGreeting(null);
				}).toThrow(nonStringTypeError);

				expect(() => {
					getGreeting(undefined);
				}).toThrow(nonStringTypeError);
			});
		});

		describe('Calling with string types', () => {
			it('should throw an error if name is an empty string', () => {
				expect(() => {
					getGreeting('');
				}).toThrow('Name cannot be empty.');
			});

			it('should return the appropriate greeting given the name', () => {
				expect(getGreeting('Alice')).toBe('Hello Alice!');
			});
		});
	});

	// getRectangleArea()
	describe('Testing getRectangleArea()', () => {
		describe('Calling with a string, null or undefined type', () => {
			it('should throw an error', () => {
				expect(() => {
					getRectangleArea(1, 'one');
				}).toThrow(nonNumberTypeError);

				expect(() => {
					getRectangleArea(null, 1);
				}).toThrow(nonNumberTypeError);

				expect(() => {
					getRectangleArea(1, undefined);
				}).toThrow(nonNumberTypeError);
			});
		});

		describe('Calling with number types', () => {
			it('should throw an error if a dimension is negative', () => {
				expect(() => {
					getRectangleArea(-1, 2);
				}).toThrow('Rectangle dimension cannot have negative values.');

				expect(() => {
					getRectangleArea(1, -2);
				}).toThrow('Rectangle dimension cannot have negative values.');
			});

			it('should return the area of the rectangle with the given dimensions', () => {
				expect(getRectangleArea(0, 0)).toBe(0);
				expect(getRectangleArea(0, 1)).toBe(0);
				expect(getRectangleArea(2, 1)).toBe(2);
				expect(getRectangleArea(0.2, 0.1)).toBeCloseTo(0.02);
			});
		});
	});

	// getTriangleArea()
	describe('Testing getTriangleArea()', () => {
		describe('Calling with a string, null or undefined type', () => {
			it('should throw an error', () => {
				expect(() => {
					getTriangleArea(1, 'one');
				}).toThrow(nonNumberTypeError);

				expect(() => {
					getTriangleArea(null, 1);
				}).toThrow(nonNumberTypeError);

				expect(() => {
					getTriangleArea(1, undefined);
				}).toThrow(nonNumberTypeError);
			});
		});

		describe('Calling with number types', () => {
			it('should throw an error if a dimension is negative', () => {
				expect(() => {
					getTriangleArea(-1, 2);
				}).toThrow('Triangle dimension cannot have negative values.');

				expect(() => {
					getTriangleArea(1, -2);
				}).toThrow('Triangle dimension cannot have negative values.');
			});

			it('should return the area of the triangle with the given dimensions', () => {
				expect(getTriangleArea(0, 0)).toBe(0);
				expect(getTriangleArea(0, 1)).toBe(0);
				expect(getTriangleArea(2, 1)).toBe(1);
				expect(getTriangleArea(0.2, 0.1)).toBeCloseTo(0.01);
			});
		});
	});

	// getCircleArea()
	describe('Testing getCircleArea()', () => {
		describe('Calling with a string, null or undefined type', () => {
			it('should throw an error', () => {
				expect(() => {
					getCircleArea('one');
				}).toThrow(nonNumberTypeError);

				expect(() => {
					getCircleArea(null);
				}).toThrow(nonNumberTypeError);

				expect(() => {
					getCircleArea(undefined);
				}).toThrow(nonNumberTypeError);
			});
		});

		describe('Calling with number types', () => {
			it('should throw an error if a dimension is negative', () => {
				expect(() => {
					getCircleArea(-1);
				}).toThrow('Radius cannot have negative values.');
			});

			it('should return the area of the circle with the given radius', () => {
				expect(getCircleArea(0)).toBe(0);
				expect(getCircleArea(0)).toBe(0);
				expect(getCircleArea(2)).toBe(12.566370614359172);
				expect(getCircleArea(0.2)).toBeCloseTo(0.12566370614359174);
			});
		});
	});

	// getRectangularPrismVolume()
	describe('Testing getRectangularPrismVolume()', () => {
		describe('Calling with a string, null or undefined type', () => {
			it('should throw an error', () => {
				expect(() => {
					getRectangularPrismVolume('one');
				}).toThrow(nonNumberTypeError);

				expect(() => {
					getRectangularPrismVolume(null);
				}).toThrow(nonNumberTypeError);

				expect(() => {
					getRectangularPrismVolume(undefined);
				}).toThrow(nonNumberTypeError);
			});
		});

		describe('Calling with number types', () => {
			it('should throw an error if a dimension is negative', () => {
				expect(() => {
					getRectangularPrismVolume(-1, 1, 1);
				}).toThrow('Prism dimensions cannot have negative values.');

				expect(() => {
					getRectangularPrismVolume(1, -1, 1);
				}).toThrow('Prism dimensions cannot have negative values.');

				expect(() => {
					getRectangularPrismVolume(1, 1, -1);
				}).toThrow('Prism dimensions cannot have negative values.');
			});

			it('should return the volume of the prism with the given dimensions', () => {
				expect(getRectangularPrismVolume(0, 0, 0)).toBe(0);
				expect(getRectangularPrismVolume(1, 2, 3)).toBe(6);
				expect(getRectangularPrismVolume(0.2, 0.1, 0.1)).toBeCloseTo(0.002);
			});
		});
	});
});
