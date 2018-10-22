const helpers = require('./project-1');

const nonNumberTypeTests = require('./nonNumberTypeTests.js');

// start testing!
describe('Testing project-1.js', () => {
	const multiplyByTen = helpers.multiplyByTen;

	describe('Testing multiplyByTen()', () => {
		describe('Calling with non-number types', () => {
			nonNumberTypeTests(multiplyByTen);
		});

		describe('Calling with number type', () => {
			it('should multiply given number by 10', () => {
				expect(multiplyByTen(0)).toBe(0);
				expect(multiplyByTen(1)).toBe(10);
				expect(multiplyByTen(5)).toBe(50);
			});
		});
	});
});
