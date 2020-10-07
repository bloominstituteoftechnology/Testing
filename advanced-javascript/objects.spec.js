const {
	keys,
	values,
	mapObject,
	pairs,
	invert,
	defaults,
} = require('./objects');

const exampleObject = {
	foo: 'bar',
	bar: 'baz',
	x: 17,
	y: true,
};

const exampleObjectTwo = {
	a: 'b',
	c: 'd',
	e: 'f',
	g: 'h',
};

beforeEach(() => {
	exampleObject.foo = 'bar';
	exampleObject.bar = 'baz';
	exampleObject.x = 17;
	exampleObject.y = true;
});

describe('objects', () => {
	describe('keys', () => {
		it('should be a function', () => {
			expect(typeof keys).toBe('function');
		});
		it('should return an array all keys in object', () => {
			const actual = keys(exampleObject);
			const expected = ['foo', 'bar', 'x', 'y'];

			expect(actual).toEqual(expected);
		});
	});

	describe('values', () => {
		it('should be a function', () => {
			expect(typeof values).toBe('function');
		});

		it('should return an array of values in object', () => {
			const actual = values(exampleObject);
			const expected = ['bar', 'baz', 17, true];
			expect(actual).toEqual(expected);
		});
	});

	describe('mapObject', () => {
		it('should be a function', () => {
			expect(typeof mapObject).toBe('function');
		});

		it('should correctly map an object based on callback', () => {
			const callback = (element) => element + ' mapped!';
			const actual = mapObject(exampleObject, callback);
			const expected = {
				bar: 'baz mapped!',
				foo: 'bar mapped!',
				x: '17 mapped!',
				y: 'true mapped!',
			};
			expect(actual).toEqual(expected);
		});
	});

	describe('pairs', () => {
		it('should be a function', () => {
			expect(typeof pairs).toBe('function');
		});
		it('should return an array of key/value pairs', () => {
			const actual = pairs(exampleObject);
			const expected = [
				['foo', 'bar'],
				['bar', 'baz'],
				['x', 17],
				['y', true],
			];
			expect(actual).toEqual(expected);
		});
	});

	describe('invert', () => {
		it('should be a function', () => {
			expect(typeof invert).toBe('function');
		});

		it('should reverse the keys and values or each property', () => {
			const actual = invert(exampleObjectTwo);
			const expected = { b: 'a', d: 'c', f: 'e', h: 'g' };
			expect(actual).toEqual(expected);
		});
	});

	describe('defaults', () => {
		it('should be a function', () => {
			expect(typeof defaults).toBe('function');
		});

		it('should add property from defaultProps to obj only if property is not already declared', () => {
			const actual = defaults(exampleObject, {
				x: 12,
				newProp: 'new prop',
			});
			expect(actual).toEqual({
				bar: 'baz',
				foo: 'bar',
				newProp: 'new prop',
				x: 17,
				y: true,
			});
		});
	});
});
