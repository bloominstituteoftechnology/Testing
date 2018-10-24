const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
// TODO: Remove the .only when done writing all the tests
describe.only('project-2.js', () => {
	describe('', () => {
		// const getBiggest = (x, y) => {
		// 	if (x > y) {
		// 		return x;
		// 	} else if (x === y) {
		// 		return y;
		// 	}
		// 	return y;
		// };
		// expected larger value
		it('should return the larger of the provided values', () => {
			const actual = funcs.getBiggest(2, 4);
			expect(actual).toEqual(4);
		});

		// when equal
		it('should return the second value when passed two equal values', () => {
			const actual = funcs.getBiggest(3, 3);
			expect(actual).toEqual(3);
		});

		// null or non-numeric values
		it('should throw an error when passed a non-numeric value', () => {
			expect(() => {
				funcs.getBiggest(null, 3);
				funcs.getBiggest('3', 2);
				funcs.getBiggest(42, {});
			}).toThrowError();
		});
	});

	describe('greeting()', () => {
		// const greeting = (language) => {
		// 	switch (language) {
		// 		case 'German':
		// 			return 'Guten Tag!';
		// 		case 'Spanish':
		// 			return 'Hola!';
		// 		default:
		// 			return 'Hello!';
		// 	}
		// };
		// german & spanish
		it('should return passed language', () => {
			const german = funcs.greeting('German');
			const spanish = funcs.greeting('Spanish');

			expect(german).toMatch(/^Guten Tag!$/);
			expect(spanish).toMatch(/^Hola!$/);
		});

		// default
		it('should return a default value when not passed a defined language', () => {
			const gibberish = funcs.greeting(() => {});
			expect(gibberish).toMatch(/^Hello!$/);
		});
	});

	describe('isTenOrFive()', () => {
		// const isTenOrFive = (num) => {
		// 	if (num === 10 || num === 5) {
		// 		return true;
		// 	}
		// 	return false;
		// };
		// true if 10 or 5
		it('should return true if passed value is 10 or 5', () => {
			const ten = funcs.isTenOrFive(10);
			const five = funcs.isTenOrFive(5);

			expect(ten).toBe(true);
			expect(five).toBe(true);
		});

		// false if not 10 or 5
		it('should return false if passed value is not 10 or 5', () => {
			const three = funcs.isTenOrFive(3);
			const str = funcs.isTenOrFive('two');
			const func = funcs.isTenOrFive(() => {});
			const arr = funcs.isTenOrFive([]);

			expect(three).toBe(false);
			expect(str).toBe(false);
			expect(func).toBe(false);
			expect(arr).toBe(false);
		});
	});

	describe('isInRange()', () => {
		// const isInRange = (num) => {
		// 	if (num < 50 && num > 20) {
		// 		return true;
		// 	}
		// 	return false;
		// };
		// in range
		it('should return true if 20 < num < 50', () => {
			const actual = funcs.isInRange(42);
			expect(actual).toBe(true);
		});

		// out of range
		it('should return false if not between 20 and 50 or is non-numeric', () => {
			const oor = funcs.isInRange(50);
			const func = funcs.isInRange(() => {});
			const str = funcs.isInRange('forty-two');

			expect(oor).toBe(false);
			expect(func).toBe(false);
			expect(str).toBe(false);
		});
	});

	describe('isInteger()', () => {
		// const isInteger = (num) => {
		// 	if (Math.floor(num) === num) {
		// 		return true;
		// 	}
		// 	return false;
		// };
		// is int
		it('should return true if passed an integer', () => {
			const int = funcs.isInteger(42);
			expect(int).toBe(true);
		});

		// isn't int
		it('should return false if not an integer', () => {
			const dec = funcs.isInteger(3.141592653);
			const func = funcs.isInteger(() => {});
			const str = funcs.isInteger('7');

			expect(dec).toBe(false);
			expect(func).toBe(false);
			expect(str).toBe(false);
		});
	});

	describe('fizzBuzz()', () => {
		// const fizzBuzz = (num) => {
		// 	if (num % 5 === 0 && num % 3 === 0) {
		// 		return 'fizzbuzz';
		// 	} else if (num % 5 === 0) {
		// 		return 'buzz';
		// 	} else if (num % 3 === 0) {
		// 		return 'fizz';
		// 	}
		// 	return num;
		// };
		// expected string
		it('should return the expected string if a multiple of 3 and/or 5', () => {
			const fizzbuzz = funcs.fizzBuzz(15);
			const fizz = funcs.fizzBuzz(9);
			const buzz = funcs.fizzBuzz(10);

			expect(fizzbuzz).toMatch(/^fizzbuzz$/);
			expect(fizz).toMatch(/^fizz$/);
			expect(buzz).toMatch(/^buzz$/);
		});

		// num
		it('should return the input value if not a multiple of 3 and/or 5', () => {
			const seven = funcs.fizzBuzz(7);
			expect(seven).toEqual(7);
		});

		// input non-numeric
		it('should throw an error if input is non-numeric', () => {
			expect(() => funcs.fizzBuzz('7')).toThrowError();
			expect(() => funcs.fizzBuzz(() => {})).toThrowError();
			expect(() => funcs.fizzBuzz(null)).toThrowError();
		});
	});

	describe('isPrime()', () => {
		// const isPrime = (num) => {
		// 	if (num < 0) {
		// 		return false;
		// 	}
		// 	if (num === 1 || num === 0) {
		// 		return false;
		// 	}
		// 	for (let i = 2; i < num; i++) {
		// 		if (num % i === 0) {
		// 			return false;
		// 		}
		// 	}
		// 	return true;
		// };
		// is prime
		it('should return true if value is prime', () => {
			const eleven = funcs.isPrime(11);
			expect(eleven).toBe(true);
		});

		// isn't prime
		it("should return false if value isn't prime", () => {
			const nine = funcs.isPrime(9);
			expect(nine).toBe(false);
		});

		// is non-numeric
		it('should throw an error if value is non-numeric', () => {
			expect(() => funcs.isPrime('7')).toThrowError();
			expect(() => funcs.isPrime(() => {})).toThrowError();
			expect(() => funcs.isPrime(undefined)).toThrowError();
		});
	});

	describe('returnFirst()', () => {
		// const returnFirst = (arr) => {
		// 	return arr[0];
		// };
		// returns first element
		it('should return the first element of a passed array', () => {
			const arr = funcs.returnFirst([0, 1, 2, 3, 4]);

			expect(arr).toEqual(0);
		});

		// empty array
		it('should return undefined if passed an empty array', () => {
			const empty = funcs.returnFirst([]);
			expect(empty).toBeUndefined();
		});

		// value is non-array
		it('should throw an error if passed a non-array', () => {
			expect(() => funcs.returnFirst('0, 1, 2, 3')).toThrowError();
			expect(() => funcs.returnFirst(() => {})).toThrowError();
			expect(() => funcs.returnFirst(null)).toThrowError();
		});
	});

	describe('returnLast()', () => {
		// const returnLast = (arr) => {
		// 	return arr[arr.length - 1];
		// };
		// returns last element
		it('should return the last element of a passed array', () => {
			const arr = funcs.returnLast([0, 1, 2, 3, 4]);

			expect(arr).toEqual(4);
		});

		// empty array
		it('should return undefined if passed an empty array', () => {
			const empty = funcs.returnLast([]);
			expect(empty).toBeUndefined();
		});

		// value is non-array
		it('should throw an error if passed a non-array', () => {
			expect(() => funcs.returnLast('0, 1, 2, 3')).toThrowError();
			expect(() => funcs.returnLast(() => {})).toThrowError();
			expect(() => funcs.returnLast(null)).toThrowError();
		});
	});

	describe('getArrayLength()', () => {
		// const getArrayLength = (arr) => {
		// 	return arr.length;
		// };
		it('should return length a passed array', () => {
			const arr = funcs.getArrayLength([0, 1, 2, 3, 4]);

			expect(arr).toEqual(5);
		});

		// empty array
		it('should return undefined if passed an empty array', () => {
			const empty = funcs.getArrayLength([]);
			expect(empty).toBeUndefined();
		});

		// value is non-array
		it('should throw an error if passed a non-array', () => {
			expect(() => funcs.getArrayLength('0, 1, 2, 3')).toThrowError();
			expect(() => funcs.getArrayLength(() => {})).toThrowError();
			expect(() => funcs.getArrayLength(null)).toThrowError();
		});
	});

	describe('incrementByOne()', () => {
		// const incrementByOne = (arr) => {
		// 	for (let i = 0; i < arr.length; i++) {
		// 		arr[i]++;
		// 	}
		// 	return arr;
		// };
		// array values++
		it('should return the array with incremented values', () => {
			const arr = funcs.incrementByOne([0, 1, 2, 3]);
			expect(arr).toEqual([1, 2, 3, 4]);
		});

		// empty array
		it('should return undefined if passed an empty array', () => {
			const empty = funcs.incrementByOne([]);
			expect(empty).toBeUndefined();
		});

		// value is non-array
		it('should throw an error when passed a non-array', () => {
			expect(() => funcs.incrementByOne(null)).toThrowError();
			expect(() => funcs.incrementByOne(() => {})).toThrowError();
			expect(() => funcs.incrementByOne({ arr: [] })).toThrowError();
		});
	});

	describe('addItemToArray()', () => {
		// const addItemToArray = (arr, item) => {
		// 	arr.push(item);
		// 	return arr;
		// };
		// arr length++ and arr.length-1 === item
		it('should return the array passed with a new value at the end', () => {
			const arr = [0, 1, 2, 3, 4];
			const arrPlusOne = funcs.addItemToArray(arr, 5);
			const aPOL = arrPlusOne.length;

			expect(aPOL).toEqual(6);
			expect(arrPlusOne[aPOL - 1]).toEqual(5);
		});

		// arr isn't an array
		// item quirks
		it("should throw an error if arr or item aren't expected datatypes", () => {
			const arr = [0, 1, 2, 3, 4];

			expect(() => funcs.addItemToArray(arr, null)).toThrowError();
			expect(() => funcs.addItemToArray(arr, () => {})).toThrowError();
			expect(() => funcs.addItemToArray('1, 2, 3', 'four')).toThrowError();
			expect(() => funcs.addItemToArray({ arr }, 5)).toThrowError();
		});
	});

	describe('addItemToFront()', () => {
		// const addItemToFront = (arr, item) => {
		// 	arr.unshift(item);
		// 	return arr;
		// };
		// arr length++ and arr[0] === item
		it('should return the array passed with a new value at the beginning', () => {
			const arr = [0, 1, 2, 3, 4];
			const arrAtFront = funcs.addItemToFront(arr, -1);
			const aAFL = arrAtFront.length;

			expect(aAFL).toEqual(6);
			expect(arrAtFront[0]).toEqual(-1);
		});

		// arr isn't an array
		// item quirks
		it("should throw an error if arr or item aren't expected datatypes", () => {
			const arr = [0, 1, 2, 3, 4];

			expect(() => funcs.addItemToFront(arr, null)).toThrowError();
			expect(() => funcs.addItemToFront(arr, () => {})).toThrowError();
			expect(() => funcs.addItemToFront('1, 2, 3', 'four')).toThrowError();
			expect(() => funcs.addItemToFront({ arr }, 5)).toThrowError();
		});
	});

	describe('wordsToSentence()', () => {
		// const wordsToSentence = (words) => {
		// 	let newSentence = '';
		// 	for (let i = 0; i < words.length; i++) {
		// 		if (i === 0) {
		// 			newSentence += `${words[i]}`;
		// 		} else {
		// 			newSentence += ` ${words[i]}`;
		// 		}
		// 	}
		// 	return newSentence;
		// };
		// returns expected string based on array
		it('should return a sentence based on the contents of "words"', () => {
			const arr = ['Hi,', 'my', 'name', 'is', 'Vera!'];
			const sentence = funcs.wordsToSentence(arr);
			expect(sentence).toMatch(/^Hi, my name is Vera!$/);
			// expect(sentence).toEqual('Hi, my name is Vera!');
		});

		// 'words' isn't an array
		// 'words' values aren't alpha-numeric
		it('should throw an error if "words" isn\'t an array or if its values aren\'t alpha-numeric', () => {
			expect(() => funcs.wordsToSentence(() => {})).toThrowError();
			expect(() => funcs.wordsToSentence({ Array: ["I'm", 'a', 'little', 'teapot,', 'short', 'and', 'stout!'] })).toThrowError();
			expect(() => funcs.wordsToSentence(['Hello,', null, "I'm", 'Mrs.', 'Wonderful.'])).toThrowError();
			expect(() => funcs.wordsToSentence([() => {}, 'A', 'wild', 'sentence', 'appears!'])).toThrowError();
		});
	});

	describe('contains()', () => {
		// const contains = (arr, item) => {
		// 	let itemCounter = 0;
		// 	for (let i = 0; i < arr.length; i++) {
		// 		if (arr[i] === item) {
		// 			itemCounter++;
		// 		}
		// 	}
		// 	if (itemCounter > 0) {
		// 		return true;
		// 	}
		// 	return false;
		// };
		// item match
		it('should return true if item is in arr at least once', () => {
			const arr = [1, 'string', { keey: 'valuee' }, [1, 2]];
			const itemExists = funcs.contains(arr, 'string');
			expect(itemExists).toBe(true);
		});

		// item not in arr
		it('should return false if item is not in arr or not alpha-numeric', () => {
			const arr = [1, 'string', { keey: 'valuee' }, [1, 2]];
			const itemExists = funcs.contains(arr, 'q');
			expect(itemExists).toBe(false);
		});

		// arr not array
		it("should throw an error if arr isn't an array", () => {
			expect(() => funcs.contains(() => {})).toThrowError();
		});
	});

	describe('addNumbers()', () => {
		// const addNumbers = (numbers) => {
		// 	let sumOfNumbers = 0;
		// 	for (let i = 0; i < numbers.length; i++) {
		// 		sumOfNumbers += numbers[i];
		// 	}
		// 	return sumOfNumbers;
		// };
		// expected sum
		it('should return the sum of all numbers in the array', () => {
			const numbers = [0, 1, 2, 3, 4];
			const numbersPlus = [0, 1, 2, '4', 3];
			const test1 = funcs.addNumbers(numbers);
			const test2 = funcs.addNumbers(numbersPlus);

			expect(test1).toEqual(10);
			expect(test2).toEqual(6);
		});

		// input not array
		it('should throw an error if "numbers" isn\'t an array', () => {
			expect(() => funcs.addNumbers('0, 1, 2, 3, 4')).toThrowError();
		});
	});

	describe('averageTestScore()', () => {
		// const averageTestScore = (testScores) => {
		// 	let totalSumScores = 0;
		// 	let numberOfScore = 0;
		// 	for (let i = 0; i < testScores.length; i++) {
		// 		totalSumScores += testScores[i];
		// 		numberOfScore++;
		// 	}
		// 	return totalSumScores / numberOfScore;
		// };
		// expected average
		it('should return the average of the values in the array', () => {
			const cleanScores = [99, 82, 73, 89];
			const dirtyScores = [52, { item: 'value' }, 73, 49, () => {}, 12];
			const avgClean = funcs.averageTestScore(cleanScores);
			const avgDirty = funcs.averageTestScore(dirtyScores);

			expect(avgClean).toBeCloseTo(85.75);
			expect(avgDirty).toBeCloseTo(46.5);
		});

		// input not array
		it('should throw an error if "testScores" is not an array', () => {
			expect(() => funcs.averageTestScore('array')).toThrowError();
		});
	});

	describe('largestNumber()', () => {
		// const largestNumber = (numbers) => {
		// 	let biggestInteger = 0;
		// 	for (let i = 0; i < numbers.length; i++) {
		// 		if (numbers[i] > biggestInteger) {
		// 			biggestInteger = numbers[i];
		// 		}
		// 	}
		// 	return biggestInteger;
		// };
		// largest number from array
		it('should return the largest numerical value in an array', () => {
			const numbers = [2, 27, 42, 5, 666, 9001, 13];
			const dirtyNumbers = [2, 27, '13', 42, {}, 5, 666, () => {}, 9005, 13];
			const biggest = funcs.largestNumber(numbers);
			const dirtyBiggest = funcs.largestNumber(dirtyNumbers);

			expect(biggest).toEqual(9001);
			expect(dirtyBiggest).toEqual(9005);
		});

		// no value in 'numbers' is a number
		it('should return null if none of the array values are numbers', () => {
			const badNumbers = ['13', {}, 'hiiiii', [1, 2, 3]];
			const badBiggest = funcs.largestNumber(badNumbers);

			expect(badBiggest).toBeNull();
		});

		// input is not array
		it('should throw an error if "numbers" is not an array', () => {
			expect(() => funcs.largestNumber({ obj: 'value', obj2: 'value2' })).toThrowError();
		});
	});
});
