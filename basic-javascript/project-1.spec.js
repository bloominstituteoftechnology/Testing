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
});
