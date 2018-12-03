const helpers = require('./project-1');

// start testing!

describe('helpers.js', () => {
	describe('multiplyByTen()', () => {
		it('should multiplyByTen', () => {
			const expected = 100; // only 100 will pass
			const actual = helpers.multiplyByTen(10);
			expect(actual).toEqual(expected);
		});
	});

	describe('subtractFive()', () => {
		it('should subtractFive', () => {
			const expected = 5; // only 5 will pass
			const actual = helpers.subtractFive(10);
			expect(actual).toEqual(expected);
		});
	});

	describe('areSameLength', () => {
		it('should have the same length', () => {
			const actual = helpers.areSameLength('sfds', 'fgdg');
			expect(actual).toBe(true);
		});
	});

	describe('areEqual', () => {
		it('Should check if both values are the same', () => {
			const actual = helpers.areEqual('hi', 'hi');
			expect(actual).toBe(true);
		});
	});

	describe('lessThanNinety', () => {
		it('Should test if num is less than 90', () => {
			const actual = helpers.lessThanNinety(70);
			expect(actual).toBe(true);
		});
	});

	describe('greaterThanFifty', () => {
		it('Should test if num is greater than fifty', () => {
			const actual = helpers.greaterThanFifty(55);
			expect(actual).toBe(true);
		});
	});

	describe('add', () => {
		it('Should add numbers', () => {
			const actual = helpers.add(4, 5);
			expect(actual).toBe(9);
		});
	});

	describe('subtract', () => {
		it('Should subtract x minus y', () => {
			const actual = helpers.subtract(10, 5);
			expect(actual).toBe(5);
		});
	});

	describe('divide', () => {
		it('Should divide between x and y', () => {
			const actual = helpers.divide(10, 5);
			expect(actual).toBe(2);
		});
	});

	describe('multiply', () => {
		it('Should multiply x and y', () => {
			const actual = helpers.multiply(10, 5);
			expect(actual).toBe(50);
		});
	});

	describe('getRemainder', () => {
		it('Should get the remainder of x and y', () => {
			const actual = helpers.getRemainder(13, 5);
			expect(actual).toBe(3);
		});
	});

	describe('isEven', () => {
		it('it should check if num is even', () => {
			const actual = helpers.isEven(12);
			expect(actual).toBe(true);
		});
	});

	describe('isOdd', () => {
		it('Should test if num is odd', () => {
			const actual = helpers.isOdd(11);
			expect(actual).toBe(true);
		});
	});

	describe('square', () => {
		it('Should check if the given value is the sqrt of num', () => {
			const actual = helpers.square(4);
			expect(actual).toBe(16);
		});
	});

	describe('cube', () => {
		it('should check if the given value is the cube of num', () => {
			const actual = helpers.cube(2);
			expect(actual).toBe(8);
		});
	});

	describe('raiseToPower', () => {
		it('should raise num to a given exponent', () => {
			const actual = helpers.raiseToPower(3, 3);
			expect(actual).toBe(27);
		});
	});

	describe('roundNumber', () => {
		it('should round num', () => {
			const actual = helpers.roundNumber(3.5);
			expect(actual).toBe(4);
		});
	});

	describe('roundUp', () => {
		it('should round a number up', () => {
			const actual = helpers.roundUp(2.1);
			expect(actual).toBe(3);
		});
	});

	describe('addExclamationPoint', () => {
		it('should add an exclamation at the end', () => {
			const actual = helpers.addExclamationPoint('sfsfsd');
			expect(actual).toBe('sfsfsd!');
		});
	});

	describe('combineNames', () => {
		it('should combine a firstname and lastname', () => {
			const actual = helpers.combineNames('carlos', 'lantigua');
			expect(actual).toBe('carlos lantigua');
		});
	});

	describe('getGreeting', () => {
		it('Should put your name into a greeting', () => {
			const actual = helpers.getGreeting('Carlos');
			expect(actual).toBe('Hello Carlos!');
		});
	});

	describe('getRectangleArea', () => {
		it('Should get the area of a rectangle', () => {
			const actual = helpers.getRectangleArea(3, 10);
			expect(actual).toBe(30);
		});
	});

	describe('getTriangleArea', () => {
		it('should get the rectangle area of a shape', () => {
			const actual = helpers.getTriangleArea(3, 4);
			expect(actual).toBe(6);
		});
	});

	describe('getRectangularPrismVolume', () => {
		it('should get the rectangular prism volume', () => {
			const actual = helpers.getRectangularPrismVolume(2, 2, 2);
			expect(actual).toBe(8);
		});
	});
});
