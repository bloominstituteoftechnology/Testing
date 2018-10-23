const arrayFunctions = require('./arrays.js');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

// errors
const {
	nonArrayTypeError,
	nonFunctionTypeError,
	emptyArrayError,
} = require('../errors/index.js');

const {
	map,
} = arrayFunctions;

describe('Arrays', () => {
	describe('map', () => {
		it('should be a function', () => {
			expect(typeof map).toBe('function');
		});

		describe('calling with a non empty array as first arg and function as second arg', () => {
			it('should map each item in the array given according to the function given', () => {
				expect(map([ 1, 2, 3 ], (num) => { return num * 2; })).toEqual([ 2, 4, 6 ]);
				expect(map([ 'a', 'b', 'c' ], (letter) => { return letter.toUpperCase(); })).toEqual([ 'A', 'B', 'C' ]);
			});
		});

		describe('calling an empty array as the first arg', () => {
			it('should throw an error', () => {
				expect(() => { map([], () => {}); }).toThrow(emptyArrayError);
			});
		});

		describe('calling with non array type as the first arg', () => {
			it('should throw an error', () => {
				expect(() => { map(1, () => {}); }).toThrow(nonArrayTypeError);
				expect(() => { map(NaN, () => {}); }).toThrow(nonArrayTypeError);
				expect(() => { map('', () => {}); }).toThrow(nonArrayTypeError);
				expect(() => { map(false, () => {}); }).toThrow(nonArrayTypeError);
				expect(() => { map({}, () => {}); }).toThrow(nonArrayTypeError);
				expect(() => { map(() => {}, () => {}); }).toThrow(nonArrayTypeError);
				expect(() => { map(null, () => {}); }).toThrow(nonArrayTypeError);
				expect(() => { map(undefined, () => {}); }).toThrow(nonArrayTypeError);
			});
		});

		describe('calling with non function type as the second arg', () => {
			it('should throw an error', () => {
				expect(() => { map([ 1 ], 1); }).toThrow(nonFunctionTypeError);
				expect(() => { map([ 1 ], NaN); }).toThrow(nonFunctionTypeError);
				expect(() => { map([ 1 ], ''); }).toThrow(nonFunctionTypeError);
				expect(() => { map([ 1 ], false); }).toThrow(nonFunctionTypeError);
				expect(() => { map([ 1 ], []); }).toThrow(nonFunctionTypeError);
				expect(() => { map([ 1 ], {}); }).toThrow(nonFunctionTypeError);
				expect(() => { map([ 1 ], null); }).toThrow(nonFunctionTypeError);
				expect(() => { map([ 1 ], undefined); }).toThrow(nonFunctionTypeError);
			});
		});
	});
});
