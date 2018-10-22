const funcs = require('./project-2');

const nonNumberTypeError = 'Value must be a number.';

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Testing project-2.js', () => {
	const {
		getBiggest,
	} = funcs;

	// getBiggest()
	describe('Testing getBiggest()', () => {
		describe('Calling with a string, null or undefined type', () => {
			it('should throw an error', () => {
				expect(() => {
					getBiggest('one', 1);
				}).toThrow(nonNumberTypeError);

				expect(() => {
					getBiggest(1, null);
				}).toThrow(nonNumberTypeError);
	
				expect(() => {
					getBiggest(undefined, 1);
				}).toThrow(nonNumberTypeError);
			});
		});

		describe('Calling with number type', () => {
			it('should return the biggest number', () => {
				expect(getBiggest(0, 0)).toBe(0);
				expect(getBiggest(0, 1)).toBe(1);
				expect(getBiggest(0.1, 0.2)).toBe(0.2);
				expect(getBiggest(-1, 2)).toBe(2);
				expect(getBiggest(-2, -1)).toBe(-1);
			});
		});
	});
});
