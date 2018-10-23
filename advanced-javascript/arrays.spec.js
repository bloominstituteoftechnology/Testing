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
	reduce,
	find,
} = arrayFunctions;

// helper
const argCheckForFuncsWithBasic2Params = (func) => {
	// this will check the arguments for every function that has the
	// basic (elems, cb) parameters
	describe('calling an empty array as the first arg', () => {
		it('should throw an error', () => {
			expect(() => { func([], () => {}); }).toThrow(emptyArrayError);
		});
	});

	describe('calling with non array type as the first arg', () => {
		it('should throw an error', () => {
			expect(() => { func(1, () => {}); }).toThrow(nonArrayTypeError);
			expect(() => { func(NaN, () => {}); }).toThrow(nonArrayTypeError);
			expect(() => { func('', () => {}); }).toThrow(nonArrayTypeError);
			expect(() => { func(false, () => {}); }).toThrow(nonArrayTypeError);
			expect(() => { func({}, () => {}); }).toThrow(nonArrayTypeError);
			expect(() => { func(() => {}, () => {}); }).toThrow(nonArrayTypeError);
			expect(() => { func(null, () => {}); }).toThrow(nonArrayTypeError);
			expect(() => { func(undefined, () => {}); }).toThrow(nonArrayTypeError);
		});
	});

	describe('calling with non function type as the second arg', () => {
		it('should throw an error', () => {
			expect(() => { func([ 1 ], 1); }).toThrow(nonFunctionTypeError);
			expect(() => { func([ 1 ], NaN); }).toThrow(nonFunctionTypeError);
			expect(() => { func([ 1 ], ''); }).toThrow(nonFunctionTypeError);
			expect(() => { func([ 1 ], false); }).toThrow(nonFunctionTypeError);
			expect(() => { func([ 1 ], []); }).toThrow(nonFunctionTypeError);
			expect(() => { func([ 1 ], {}); }).toThrow(nonFunctionTypeError);
			expect(() => { func([ 1 ], null); }).toThrow(nonFunctionTypeError);
			expect(() => { func([ 1 ], undefined); }).toThrow(nonFunctionTypeError);
		});
	});
};


describe('Arrays', () => {
	// map()
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

		argCheckForFuncsWithBasic2Params(map);
	});

	// reduce()
	describe('reduce', () => {
		it('should be a function', () => {
			expect(typeof reduce).toBe('function');
		});

		describe('calling with a non empty array as first arg and function as second arg', () => {
			it('should reduce all the items in the array given according to the function given', () => {
				expect(reduce([ 'take a walk', 'cook dinner', 'go to sleep' ], (memo, item) => { return `${ memo }, and ${ item }`; })).toEqual('take a walk, and cook dinner, and go to sleep');
			});
		});

		describe('calling an empty array as the first arg', () => {
			it('should throw an error', () => {
				expect(() => { reduce([], () => {}); }).toThrow(emptyArrayError);
			});
		});

		describe('calling with non array type as the first arg', () => {
			it('should throw an error', () => {
				expect(() => { reduce(1, () => {}, ''); }).toThrow(nonArrayTypeError);
				expect(() => { reduce(NaN, () => {}, ''); }).toThrow(nonArrayTypeError);
				expect(() => { reduce('', () => {}, ''); }).toThrow(nonArrayTypeError);
				expect(() => { reduce(false, () => {}, ''); }).toThrow(nonArrayTypeError);
				expect(() => { reduce({}, () => {}, ''); }).toThrow(nonArrayTypeError);
				expect(() => { reduce(() => {}, () => {}, ''); }).toThrow(nonArrayTypeError);
				expect(() => { reduce(null, () => {}, ''); }).toThrow(nonArrayTypeError);
				expect(() => { reduce(undefined, () => {}, ''); }).toThrow(nonArrayTypeError);
			});
		});

		describe('calling with non function type as the second arg', () => {
			it('should throw an error', () => {
				expect(() => { reduce([ 'one' ], 1); }).toThrow(nonFunctionTypeError);
				expect(() => { reduce([ 'one' ], NaN); }).toThrow(nonFunctionTypeError);
				expect(() => { reduce([ 'one' ], ''); }).toThrow(nonFunctionTypeError);
				expect(() => { reduce([ 'one' ], false); }).toThrow(nonFunctionTypeError);
				expect(() => { reduce([ 'one' ], []); }).toThrow(nonFunctionTypeError);
				expect(() => { reduce([ 'one' ], {}); }).toThrow(nonFunctionTypeError);
				expect(() => { reduce([ 'one' ], null); }).toThrow(nonFunctionTypeError);
				expect(() => { reduce([ 'one' ], undefined); }).toThrow(nonFunctionTypeError);
			});
		});
	});

	// find()
	describe('find', () => {
		it('should be a function', () => {
			expect(typeof find).toBe('function');
		});

		describe('calling with a non empty array as first arg and function as second arg', () => {
			it('should find the item in the array given according to the function given', () => {
				expect(find([
					{ fruit: 'banana', color: 'yellow'},
					{ fruit: 'apple', color: 'red'},
					{ fruit: 'orange', color: 'orange'}
				], (fruit) => { return fruit.color === 'red'; })).toEqual('apple');
			});
		});

		argCheckForFuncsWithBasic2Params(find);
	});
});
