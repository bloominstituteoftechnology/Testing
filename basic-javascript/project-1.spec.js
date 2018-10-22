const helpers = require('./project-1');

const {
	nonNumberTypeTests,
	nonStringTypeTests,
} = require('./nonTypeTests.js/index.js');

// start testing!
describe('Testing project-1.js', () => {
	const {
		multiplyByTen,
		subtractFive,
		areSameLength,
	} = helpers;

	describe('Testing multiplyByTen()', () => {
		describe('Calling with non-number types', () => {
			nonNumberTypeTests(multiplyByTen);
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

	describe('Testing subtractFive()', () => {
		describe('Calling with non-number types', () => {
			nonNumberTypeTests(subtractFive);
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

	describe('Testing areSameLength()', () => {
		describe('Calling with non-string types', () => {
			nonStringTypeTests(areSameLength);
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
});
