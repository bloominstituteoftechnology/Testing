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
	each,
	map,
	reduce,
	find,
	filter,
	flatten,
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
	// each()
	describe('each', () => {
		it('should be a function', () => {
			expect(typeof each).toBe('function');
		});

		describe('calling with a non empty array as first arg and function as second arg', () => {
			it('should return undefined since it is just a helper function and shouldn\'t return anything', () => {
				expect(each([ 1, 2, 3 ], () => {})).toEqual(undefined);
			});
		});

		argCheckForFuncsWithBasic2Params(each);
	});

	// map()
	describe('map', () => {
		it('should be a function', () => {
			expect(typeof map).toBe('function');
		});

		describe('calling with a non empty array as first arg and function as second arg', () => {
			it('should double each number in the array given', () => {
				expect(map([ 1, 2, 3 ], (num) => { return num * 2; })).toEqual([ 2, 4, 6 ]);
			});

			it('should turn each letter in the array given to uppercase', () => {
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
			it('should reduce all the items in the array to one string seperated by the word and', () => {
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
			it('should find the fruit in the array that is the color red', () => {
				expect(find([
					{ fruit: 'banana', color: 'yellow'},
					{ fruit: 'apple', color: 'red'},
					{ fruit: 'orange', color: 'orange'}
				], (fruit) => { return fruit.color === 'red'; })).toEqual('apple');
			});
		});

		argCheckForFuncsWithBasic2Params(find);
	});

	// filter()
	describe('filter', () => {
		it('should be a function', () => {
			expect(typeof filter).toBe('function');
		});

		describe('calling with a non empty array as first arg and function as second arg', () => {
			it('should filter the numbers in the array and return the ones > 50', () => {
				expect(filter([ 1, 49, 50, 51, 100 ], (num) => { return num > 50; })).toEqual([ 51, 100 ]);
			});

			it('should filter the words in the array and return the ones whose length is >= 5', () => {
				expect(filter([ 'one', 'table', 'lamp', 'burger' ], (word) => { return word.length >= 5; })).toEqual([ 'table', 'burger' ]);
			});
		});

		argCheckForFuncsWithBasic2Params(filter);
	});

	// flatten()
	describe('flatten', () => {
		it('should be a function', () => {
			expect(typeof flatten).toBe('function');
		});

		describe('calling with a non empty array', () => {
			it('should flatten the array elements in the array given and concats them together', () => {
				expect(flatten([ [ 'one', [ 'two', [ 'three', 'four' ] ] ], 'five' ])).toEqual([ 'one', 'two', 'three', 'four', 'five' ]);
			});
		});

		describe('calling an empty array', () => {
			it('should throw an error', () => {
				expect(() => { flatten([], () => {}); }).toThrow(emptyArrayError);
			});
		});

		describe('calling with non array type', () => {
			it('should throw an error', () => {
				expect(() => { flatten(1, () => {}); }).toThrow(nonArrayTypeError);
				expect(() => { flatten(NaN, () => {}); }).toThrow(nonArrayTypeError);
				expect(() => { flatten('', () => {}); }).toThrow(nonArrayTypeError);
				expect(() => { flatten(false, () => {}); }).toThrow(nonArrayTypeError);
				expect(() => { flatten({}, () => {}); }).toThrow(nonArrayTypeError);
				expect(() => { flatten(() => {}, () => {}); }).toThrow(nonArrayTypeError);
				expect(() => { flatten(null, () => {}); }).toThrow(nonArrayTypeError);
				expect(() => { flatten(undefined, () => {}); }).toThrow(nonArrayTypeError);
			});
		});
	});
});
