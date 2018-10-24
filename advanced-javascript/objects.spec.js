const objectFunctions = require('./objects');

// errors
const {
	nonObjectTypeError,
	emptyObjectError,
} = require('../errors/index.js');

const {
	keys,
	values,
} = objectFunctions;


describe('objects', () => {
	// keys()
	describe('keys', () => {
		it('should be a function', () => {
			expect(typeof keys).toBe('function');
		});

		describe('calling with non empty object', () => {
			it('should return an array of the object\'s keys', () => {
				expect(keys({
					'one': 1,
					'two': 2,
					'three': 3,
				})).toEqual([ 'one', 'two', 'three' ]);
			});
		});

		describe('calling with empty object', () => {
			it('should throw an error', () => {
				expect(() => { keys({}); }).toThrow(emptyObjectError);
			});
		});

		describe('calling with non object type', () => {
			it('should throw an error', () => {
				expect(() => { keys(1); }).toThrow(nonObjectTypeError);
				expect(() => { keys(NaN); }).toThrow(nonObjectTypeError);
				expect(() => { keys(''); }).toThrow(nonObjectTypeError);
				expect(() => { keys(false); }).toThrow(nonObjectTypeError);
				expect(() => { keys([]); }).toThrow(nonObjectTypeError);
				expect(() => { keys(() => {}); }).toThrow(nonObjectTypeError);
				expect(() => { keys(null); }).toThrow(nonObjectTypeError);
				expect(() => { keys(undefined); }).toThrow(nonObjectTypeError);
			});
		});
	});

	// values()
	describe('values', () => {
		it('should be a function', () => {
			expect(typeof values).toBe('function');
		});

		describe('calling with non empty object', () => {
			it('should return an array of the object\'s values', () => {
				expect(values({
					'one': 1,
					'two': 2,
					'three': 3,
				})).toEqual([ 1, 2, 3 ]);
			});
		});

		describe('calling with empty object', () => {
			it('should throw an error', () => {
				expect(() => { values({}); }).toThrow(emptyObjectError);
			});
		});

		describe('calling with non object type', () => {
			it('should throw an error', () => {
				expect(() => { values(1); }).toThrow(nonObjectTypeError);
				expect(() => { values(NaN); }).toThrow(nonObjectTypeError);
				expect(() => { values(''); }).toThrow(nonObjectTypeError);
				expect(() => { values(false); }).toThrow(nonObjectTypeError);
				expect(() => { values([]); }).toThrow(nonObjectTypeError);
				expect(() => { values(() => {}); }).toThrow(nonObjectTypeError);
				expect(() => { values(null); }).toThrow(nonObjectTypeError);
				expect(() => { values(undefined); }).toThrow(nonObjectTypeError);
			});
		});
	});
});
