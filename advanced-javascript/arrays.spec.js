const { each, map, reduce, find, filter, flatten } = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('Arrays', () => {
	describe('map', () => {
		it('should be a function', () => {
			expect(typeof map).toBe('function');
		});

		it('should return each number in an array plus one with supplied callback', () => {
			const callback = (num) => num + 1;
			const numArray = [1, 2, 3, 4];
			const actual = map(numArray, callback);
			const expected = [2, 3, 4, 5];

			expect(actual).toEqual(expected);
		});

		it('should return an empty array when passed same', () => {
			const callback = (num) => num + 1;
			expect(map([], callback)).toEqual([]);
		});
	});

	describe('each', () => {
		it('should be a function', () => {
			expect(typeof each).toBe('function');
		});

		it('should return undefined', () => {
			const callback = (num) => num + 1;
			const numArray = [1, 2, 3, 4];
			expect(each(numArray, callback)).toBe(undefined);
		});

		it('should run provided callback once for each element', () => {
			let actual = [];
			const callback = (arr, i) => actual.push(arr);
			const numArray = [1, 2, 3, 4];
			each(numArray, callback);

			expect(actual).toEqual(numArray);
		});
	});

	describe('reduce', () => {
		it('should be a function', () => {
			expect(typeof each).toBe('function');
		});

		it('should return 10 when passed an array that adds up to 10', () => {
			const numArray = [1, 2, 3, 4];
			const callback = (acc, cur) => acc + cur;
			const actual = reduce(numArray, callback);
			expect(actual).toBe(10);
		});

		it('should not return an array', () => {
			const numArray = [1, 2, 3, 4];
			const callback = (acc, cur) => acc + cur;
			const actual = reduce(numArray, callback);
			expect(typeof actual).not.toBe('array');
		});
	});

	describe('find', () => {
		it('should be a function', () => {
			expect(typeof find).toBe('function');
		});

		it('should return the correct word', () => {
			const callback = (element) => element === 'butter';
			const wordArr = ['seasoning', 'worker', 'butter'];
			const actual = find(wordArr, callback);

			expect(actual).toBeTruthy();
		});

		it('should return undefined if the word isnt in array', () => {
			const callback = (element) => element === 'butter';
			const wordArr = ['seasoning', 'worker', 'salmon'];
			const actual = find(wordArr, callback);

			expect(actual).toBe(undefined);
		});
	});

	describe('filter', () => {
		it('should be a function', () => {
			expect(typeof filter).toBe('function');
		});

		it('should filter out the correct elements', () => {
			const callback = (element) => element !== 'butter';
			const wordArr = ['seasoning', 'workers', 'butter'];
			const actual = filter(wordArr, callback);

			expect(actual).toEqual(['seasoning', 'workers']);
		});

		it('should return the full array if element not found', () => {
			const callback = (element) => element !== 'butter';
			const wordArr = ['seasoning', 'workers', 'cheese'];
			const actual = filter(wordArr, callback);

			expect(actual).toEqual(['seasoning', 'workers', 'cheese']);
		});
	});

	describe('flatten', () => {
		it('should be a function', () => {
			expect(typeof flatten).toBe('function');
		});

		it('should return a flattened array', () => {
			const arr = [['this', 'is'], ['my', 'array'], '!!!'];
			const actual = flatten(arr);
			expect(actual).toEqual(['this', 'is', 'my', 'array', '!!!']);
		});
	});
});
