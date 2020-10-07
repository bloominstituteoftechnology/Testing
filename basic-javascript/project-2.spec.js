const {
	getBiggest,
	greeting,
	isTenOrFive,
	isInRange,
	isInteger,
	fizzBuzz,
	isPrime,
	returnFirst,
	returnLast,
	getArrayLength,
	incrementByOne,
	addItemToArray,
	addItemToFront,
	wordsToSentence,
	contains,
	addNumbers,
	averageTestScore,
	largestNumber,
} = require('./project-2');

describe('project-2 tests', () => {
	test('getBiggest returns biggest input', () => {
		expect(getBiggest(5, 22)).toBe(22);
	});

	test('greeting returns correct greeting for entered language', () => {
		expect(greeting('German')).toEqual('Guten Tag!');
		expect(greeting('Spanish')).toEqual('Hola!');
		expect(greeting()).toEqual('Hello!');
	});

	test('isTenOrFive returns true for input of 10 or 5', () => {
		expect(isTenOrFive(10)).toBeTruthy();
		expect(isTenOrFive(5)).toBeTruthy();
		expect(isTenOrFive(15)).toBeFalsy();
	});

	test('isInRange returns correct Boolean', () => {
		expect(isInRange(23)).toBeTruthy();
		expect(isInRange(49)).toBeTruthy();
		expect(isInRange(100)).toBeFalsy();
		expect(isInRange(10)).toBeFalsy();
	});

	test('isInteger returns correct Boolean', () => {
		expect(isInteger(23)).toBeTruthy();
		expect(isInteger(2.5)).toBeFalsy();
	});

	test('fizzBuzz returns correct String', () => {
		expect(fizzBuzz(15)).toEqual('fizzbuzz');
		expect(fizzBuzz(10)).toEqual('buzz');
		expect(fizzBuzz(6)).toEqual('fizz');
		expect(fizzBuzz(7)).toBe(7);
	});

	test('isPrime returns correct boolean', () => {
		expect(isPrime(4)).toBeFalsy();
		expect(isPrime(1)).toBeFalsy();
		expect(isPrime(3)).toBeTruthy();
		expect(isPrime(97)).toBeTruthy();
	});

	test('returnFirst returns first item of array', () => {
		const array = [1, 3, 7];
		expect(returnFirst(array)).toBe(1);
		expect(returnFirst(array)).not.toBe(7);
	});

	test('returnLast returns last item of array', () => {
		const array = [1, 3, 7];
		expect(returnLast(array)).toBe(7);
		expect(returnLast(array)).not.toBe(1);
	});

	test('getArrayLength returns correct length', () => {
		const array = [1, 5, 9, 2];
		expect(getArrayLength(array)).toBe(4);
	});

	test('incrementByOne increments all items in array by 1', () => {
		const array = [1, 2, 3];
		expect(incrementByOne(array)).toEqual([2, 3, 4]);
	});

	test('addItemToArray adds item to end of array', () => {
		const array = [1, 2, 3];
		expect(addItemToArray(array, 4)).toEqual([1, 2, 3, 4]);
	});

	test('addItemToFront adds item to beginning of array', () => {
		const array = [1, 2, 3];
		expect(addItemToFront(array, 0)).toEqual([0, 1, 2, 3]);
	});

	test('wordsToSentence creates a new string from an array of words', () => {
		const wordArray = ['maybe', 'something', 'else'];
		expect(wordsToSentence(wordArray)).toEqual('maybe something else');
	});

	test('contains tells us if an array contains an item', () => {
		const array = [1, 3, 9, 2];
		expect(contains(array, 3)).toBeTruthy();
		expect(contains(array, 5)).toBeFalsy();
	});

	test('addNumbers returns the correct sum', () => {
		const numArray = [1, 2, 3];
		expect(addNumbers(numArray)).toBe(6);
	});

	test('averageTestScore returns correct average', () => {
		expect(averageTestScore([90, 80, 77, 80])).toBe(81.75);
	});

	test('largestNumber returns largest number in array', () => {
		const numArray = [100, 45, 32, 98];
		expect(largestNumber(numArray)).toBe(100);
	});
});
