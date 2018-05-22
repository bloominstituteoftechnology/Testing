const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('project-2 tests', () => {
	it('should return the bigger number', () => {
		const big = funcs.getBiggest(7, 2);

		expect(big).toBe(7);
	});
	it('should return the proper greeting', () => {
		const german = funcs.greeting('German');
		const spanish = funcs.greeting('Spanish');
		const generic = funcs.greeting();

		expect(german).toBe('Guten Tag!');
		expect(spanish).toBe('Hola!');
		expect(generic).toBe('Hello!');
	});
	it('should return true only if the argument is either 10 or 5', () => {
		const ten = funcs.isTenOrFive(10);
		const five = funcs.isTenOrFive(5);
		const thirty = funcs.isTenOrFive(30);

		expect(ten).toBe(true);
		expect(five).toBe(true);
		expect(thirty).toBe(false);
	});
	it('should return true only if the argument is greater than 20 and less than 50', () => {
		const ten = funcs.isInRange(10);
		const fiftyfive = funcs.isInRange(55);
		const thirty = funcs.isInRange(30);

		expect(ten).toBe(false);
		expect(fiftyfive).toBe(false);
		expect(thirty).toBe(true);
	});
	it('should return true only if the argument is an integer', () => {
		const ten = funcs.isInteger(10);
		const letter = funcs.isInteger('a');

		expect(ten).toBe(true);
		expect(letter).toBe(false);
	});
	it('checks if the number is divisible by 3 and/or 5 with no remainer', () => {
		const fizz = funcs.fizzBuzz(3);
		const buzz = funcs.fizzBuzz(5);
		const fizzbuzz = funcs.fizzBuzz(15);
		const fuzzbizz = funcs.fizzBuzz(14);

		expect(fizz).toBe('fizz');
		expect(buzz).toBe('buzz');
		expect(fizzbuzz).toBe('fizzbuzz');
		expect(fuzzbizz).toBe(14);
	});
	it('should check if the number if prime', () => {
		const prime = funcs.isPrime(13);
		const notPrime = funcs.isPrime(12);

		expect(prime).toBe(true);
		expect(notPrime).toBe(false);
	});
	it('should return the first item in an array', () => {
		const arr = [1, 2, 3, 4, 5, 6, 7];
		const one = funcs.returnFirst(arr);

		expect(one).toBe(1);
	});
	it('should return the last item in an array', () => {
		const arr = [1, 2, 3, 4, 5, 6, 7];
		const last = funcs.returnLast(arr);

		expect(last).toBe(7);
	});
	it('should return the length of an array', () => {
		const arr = [1, 2, 3, 4, 5, 6, 7];
		const length = funcs.getArrayLength(arr);

		expect(length).toBe(7);
	});
	it('should add one to each number in an array', () => {
		const before = [1, 2, 3, 4, 5, 6, 7];
		const after = [2, 3, 4, 5, 6, 7, 8];
		const increment = funcs.incrementByOne(before);

		expect(increment).toEqual(after);
	});
	it('should add an item to the end of the array', () => {
		const arr = [1, 2, 3];
		const arr2 = [1, 2, 3, 4];
		const checkArr = funcs.addItemToArray(arr, 4);

		expect(checkArr).toEqual(arr2);
	});
	it('should add an item to the front of the array', () => {
		const arr = [1, 2, 3];
		const arr2 = [4, 1, 2, 3];
		const checkArr = funcs.addItemToFront(arr, 4);

		expect(checkArr).toEqual(arr2);
	});
	it('should concat words in an array into a sentence', () => {
		const wordArray = ['You', 'shall', 'not', 'pass'];
		const sentence = 'You shall not pass';
		const concat = funcs.wordsToSentence(wordArray);

		expect(concat).toBe(sentence);
	});
	it('should have an item in an array', () => {
		const arr = [1, 'foo'];
		const searchArr = funcs.contains(arr, 'foo');

		expect(searchArr).toBe(true);
	});
	it('should return sum of items in an array', () => {
		const arr = [1, 2, 3];
		const total = 6;
		const sum = funcs.addNumbers(arr);

		expect(sum).toBe(6);
	});
	it('should return the average test score', () => {
		const scores = [90, 85, 60, 15, 0];
		const average = funcs.averageTestScore(scores);

		expect(average).toBe(50);
	});
	it('should return the largest number in an array', () => {
		const arr = [1, 2, 3, 4, 5];
		const biggest = funcs.largestNumber(arr);

		expect(biggest).toBe(5);
	});
});
