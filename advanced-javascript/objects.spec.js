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
			it('should return an array of arrays of the object\'s key, value pairs', () => {
				expect(pairs({
					'one': 1,
					'two': 2,
					'three': 3,
				})).toEqual([ [ 'one', 1 ], [ 'two', 2 ], [ 'three', 3 ] ]);
			});
		});

		describe('calling with empty object', () => {
			it('should throw an error', () => {
				expect(() => { pairs({}); }).toThrow(emptyObjectError);
			});
		});

		describe('calling with non object type', () => {
			it('should throw an error', () => {
				expect(() => { pairs(1); }).toThrow(nonObjectTypeError);
				expect(() => { pairs(NaN); }).toThrow(nonObjectTypeError);
				expect(() => { pairs(''); }).toThrow(nonObjectTypeError);
				expect(() => { pairs(false); }).toThrow(nonObjectTypeError);
				expect(() => { pairs([]); }).toThrow(nonObjectTypeError);
				expect(() => { pairs(() => {}); }).toThrow(nonObjectTypeError);
				expect(() => { pairs(null); }).toThrow(nonObjectTypeError);
				expect(() => { pairs(undefined); }).toThrow(nonObjectTypeError);
			});
		});
	});
});
