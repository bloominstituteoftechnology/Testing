const objectFunctions = require('./objects');

// errors
const {
	nonFunctionTypeError,
	nonObjectTypeError,
	emptyObjectError,
} = require('../errors/index.js');

const {
	keys,
	values,
	mapObject,
	pairs,
	invert,
	defaults,
} = objectFunctions;

const testsForFuncsWithSingleObjArg = func => {
	describe('calling with empty object', () => {
		it('should throw an error', () => {
			expect(() => { func({}); }).toThrow(emptyObjectError);
		});
	});

	describe('calling with non object type', () => {
		it('should throw an error', () => {
			expect(() => { func(1); }).toThrow(nonObjectTypeError);
			expect(() => { func(NaN); }).toThrow(nonObjectTypeError);
			expect(() => { func(''); }).toThrow(nonObjectTypeError);
			expect(() => { func(false); }).toThrow(nonObjectTypeError);
			expect(() => { func([]); }).toThrow(nonObjectTypeError);
			expect(() => { func(() => {}); }).toThrow(nonObjectTypeError);
			expect(() => { func(null); }).toThrow(nonObjectTypeError);
			expect(() => { func(undefined); }).toThrow(nonObjectTypeError);
		});
	});
};


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

		testsForFuncsWithSingleObjArg(keys);
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

		testsForFuncsWithSingleObjArg(values);
	});

	// mapObject()
	describe('mapObject', () => {
		it('should be a function', () => {
			expect(typeof mapObject).toBe('function');
		});

		describe('calling with non empty object', () => {
			it('should return the obj with its keys transformed by the cb function given', () => {
				expect(mapObject({
					1: 'one',
					2: 'two',
					3: 'three',
				}, (value) => { return value.toUpperCase(); })).toEqual({
					1: 'ONE',
					2: 'TWO',
					3: 'THREE',
				});
			});
		});

		describe('calling with empty object as first arg', () => {
			it('should throw an error', () => {
				expect(() => { mapObject({}, () => {}); }).toThrow(emptyObjectError);
			});
		});

		describe('calling with non object type as first arg', () => {
			it('should throw an error', () => {
				expect(() => { mapObject(1, () => {}); }).toThrow(nonObjectTypeError);
				expect(() => { mapObject(NaN, () => {}); }).toThrow(nonObjectTypeError);
				expect(() => { mapObject('', () => {}); }).toThrow(nonObjectTypeError);
				expect(() => { mapObject(false, () => {}); }).toThrow(nonObjectTypeError);
				expect(() => { mapObject([], () => {}); }).toThrow(nonObjectTypeError);
				expect(() => { mapObject(() => {}, () => {}); }).toThrow(nonObjectTypeError);
				expect(() => { mapObject(null, () => {}); }).toThrow(nonObjectTypeError);
				expect(() => { mapObject(undefined, () => {}); }).toThrow(nonObjectTypeError);
			});
		});

		describe('calling with non function type as second arg', () => {
			it('should throw an error', () => {
				expect(() => { mapObject({ 'one': 1 }, 1); }).toThrow(nonFunctionTypeError);
				expect(() => { mapObject({ 'one': 1 }, NaN); }).toThrow(nonFunctionTypeError);
				expect(() => { mapObject({ 'one': 1 }, ''); }).toThrow(nonFunctionTypeError);
				expect(() => { mapObject({ 'one': 1 }, false); }).toThrow(nonFunctionTypeError);
				expect(() => { mapObject({ 'one': 1 }, []); }).toThrow(nonFunctionTypeError);
				expect(() => { mapObject({ 'one': 1 }, {}); }).toThrow(nonFunctionTypeError);
				expect(() => { mapObject({ 'one': 1 }, null); }).toThrow(nonFunctionTypeError);
				expect(() => { mapObject({ 'one': 1 }, undefined); }).toThrow(nonFunctionTypeError);
			});
		});
	});

	// pairs()
	describe('pairs', () => {
		it('should be a function', () => {
			expect(typeof pairs).toBe('function');
		});

		describe('calling with non empty object', () => {
			it('should return an array of arrays of the object\'s key/value pairs', () => {
				expect(pairs({
					'one': 1,
					'two': 2,
					'three': 3,
				})).toEqual([ [ 'one', 1 ], [ 'two', 2 ], [ 'three', 3 ] ]);
			});
		});

		testsForFuncsWithSingleObjArg(pairs);
	});

	// invert()
	describe('invert', () => {
		it('should be a function', () => {
			expect(typeof invert).toBe('function');
		});

		describe('calling with non empty object', () => {
			it('should return the obj with its key/value pairs inverted', () => {
				expect(invert({
					'one': 1,
					'two': 2,
					'three': 3,
				})).toEqual({ 1: 'one', 2: 'two', 3: 'three' });
			});
		});

		testsForFuncsWithSingleObjArg(invert);
	});

	// defaults()
	describe('defaults', () => {
		it('should be a function', () => {
			expect(typeof defaults).toBe('function');
		});

		describe('calling with non empty object', () => {
			it('should return the first obj with any extra key/value pairs it doesn\'t have from the second obj', () => {
				expect(defaults({
					1: 'one',
					2: 'two',
					3: 'three',
				}, {
					3: 'three',
					4: 'four',
					5: 'five',
				})).toEqual({
					1: 'one',
					2: 'two',
					3: 'three',
					4: 'four',
					5: 'five',
				});
			});
		});

		describe('calling with empty object as first or second arg', () => {
			it('should throw an error', () => {
				expect(() => { defaults({}, { 'one': 1 }); }).toThrow(emptyObjectError);
			});

			it('should throw an error', () => {
				expect(() => { defaults({ 'one': 1 }, {}); }).toThrow(emptyObjectError);
			});
		});

		describe('calling with non object type as first arg', () => {
			it('should throw an error', () => {
				expect(() => { defaults(1, { 'one': 1 }); }).toThrow(nonObjectTypeError);
				expect(() => { defaults(NaN, { 'one': 1 }); }).toThrow(nonObjectTypeError);
				expect(() => { defaults('', { 'one': 1 }); }).toThrow(nonObjectTypeError);
				expect(() => { defaults(false, { 'one': 1 }); }).toThrow(nonObjectTypeError);
				expect(() => { defaults([], { 'one': 1 }); }).toThrow(nonObjectTypeError);
				expect(() => { defaults(() => {}, { 'one': 1 }); }).toThrow(nonObjectTypeError);
				expect(() => { defaults(null, { 'one': 1 }); }).toThrow(nonObjectTypeError);
				expect(() => { defaults(undefined, { 'one': 1 }); }).toThrow(nonObjectTypeError);
			});
		});

		describe('calling with non object type as second arg', () => {
			it('should throw an error', () => {
				expect(() => { defaults({ 'one': 1 }, 1); }).toThrow(nonObjectTypeError);
				expect(() => { defaults({ 'one': 1 }, NaN); }).toThrow(nonObjectTypeError);
				expect(() => { defaults({ 'one': 1 }, ''); }).toThrow(nonObjectTypeError);
				expect(() => { defaults({ 'one': 1 }, false); }).toThrow(nonObjectTypeError);
				expect(() => { defaults({ 'one': 1 }, []); }).toThrow(nonObjectTypeError);
				expect(() => { defaults({ 'one': 1 }, () => {}); }).toThrow(nonObjectTypeError);
				expect(() => { defaults({ 'one': 1 }, null); }).toThrow(nonObjectTypeError);
				expect(() => { defaults({ 'one': 1 }, undefined); }).toThrow(nonObjectTypeError);
			});
		});
	});
});
