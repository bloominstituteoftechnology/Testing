const helpers = require('./project-1');

describe('helpers.js', () => {
	describe('multiplyByTen()', () => {
		it('should multiply provided number by ten', () => {
			const expected = 100;

			const actual = helpers.multiplyByTen(10);

			expect(actual).toEqual(expected);
		});

		it('should return 0 when called with no value', () => {
			const product = helpers.multiplyByTen();

			expect(product).toBe(0);
		});

		it('should throw an error when called with anything other than a number', () => {
			expect(() => {
				helpers.multiplyByTen('2');
			}).toThrow();
		});
	});

	describe('subtractFive()', () => {
		it('should subtract five from the provided number', () => {
			const expected = 4;

			const actual = helpers.subtractFive(9);

			expect(actual).toEqual(expected);
		});

		it('should return -5 when called with no value', () => {
			const product = helpers.subtractFive();

			expect(product).toBe(-5);
		});

		it('should throw error when called with anything other than a number', () => {
			expect(() => {
				helpers.subtractFive('2');
			}).toThrow();
		});
	});

	describe('areSameLength()', () => {
		it('should return true when called with two strings that are the same length', () => {
			const expected = true;

			const actual = helpers.areSameLength('string', 'cheese');

			expect(actual).toEqual(expected);
		});

		it("should throw error when called with any values that aren't strings", () => {
			expect(() => {
				helpers.areSameLength('string', ['string']);
			}).toThrow();
		});
	});

	describe('areEqual()', () => {
		it('should return true when called with two values that are equal', () => {
			const expected = true;

			const actual = helpers.areEqual('string', 'string');

			expect(actual).toEqual(expected);
		});

		it("should return false when called with two values that aren't equal", () => {
			const expected = false;

			const actual = helpers.areEqual(23, 56);

			expect(actual).toEqual(expected);
		});
	});

	describe('lessThanNinety()', () => {
		it('should return true when called with a value that is less than 90', () => {
			const expected = true;

			const actual = helpers.lessThanNinety(89);

			expect(actual).toEqual(expected);
		});

		it('should return false when called with a value that is equal to 90', () => {
			const expected = false;

			const actual = helpers.lessThanNinety(90);

			expect(actual).toEqual(expected);
		});

		it('should return false when called with a value that is greater than 90', () => {
			const expected = false;

			const actual = helpers.lessThanNinety(91);

			expect(actual).toEqual(expected);
		});

		it('should return true when called with no value', () => {
			const product = helpers.lessThanNinety();

			expect(product).toBe(true);
		});

		it('should throw error when called with anything other than a number', () => {
			expect(() => {
				helpers.lessThanNinety('90');
			}).toThrow();
		});
	});

	describe('greaterThanFifty()', () => {
		it('should return true when called with a value that is greater than 50', () => {
			const expected = true;

			const actual = helpers.greaterThanFifty(51);

			expect(actual).toEqual(expected);
		});

		it('should return false when called with a value that is equal to 50', () => {
			const expected = false;

			const actual = helpers.greaterThanFifty(50);

			expect(actual).toEqual(expected);
		});

		it('should return false when called with a value that is less than 50', () => {
			const expected = false;

			const actual = helpers.greaterThanFifty(49);

			expect(actual).toEqual(expected);
		});

		it('should return false when called with no value', () => {
			const product = helpers.greaterThanFifty();

			expect(product).toBe(false);
		});

		it('should throw error when called with anything other than a number', () => {
			expect(() => {
				helpers.greaterThanFifty('50');
			}).toThrow();
		});
	});

	describe('add()', () => {
		it('should return the sum of the values', () => {
			const expected = 7;

			const actual = helpers.add(3, 4);

			expect(actual).toEqual(expected);
		});

		it('should throw error when called with anything other than a number', () => {
			expect(() => {
				helpers.add(1, '2');
			}).toThrow();
		});
	});

	describe('subtract()', () => {
		it('should return the difference of the values', () => {
			const expected = -1;

			const actual = helpers.subtract(3, 4);

			expect(actual).toEqual(expected);
		});

		it('should throw error when called with anything other than a number', () => {
			expect(() => {
				helpers.subtract(1, '2');
			}).toThrow();
		});
	});

	// NO MORE TYPEOF CHECKS FROM HERE ONWARD

	describe('add()', () => {
		it('should return the sum of the values', () => {
			const expected = 7;

			const actual = helpers.add(3, 4);

			expect(actual).toEqual(expected);
		});

		it('should throw error when called with anything other than a number', () => {
			expect(() => {
				helpers.add(1, '2');
			}).toThrow();
		});
	});
});
