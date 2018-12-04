const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('helper2.js', () => {
	describe('getBiggest', () => {
		test('gets the biggest variable', () => {
			const biggest = funcs.getBiggest(2, 3);

			expect(biggest).toBe(3);
		});
	});

	describe('greeting', () => {
		test('greets in the appropriate language', () => {
			const language = funcs.greeting('Spanish');

			expect(language).toBe('Hola!');
		});
	});

	describe('isTenOrFive', () => {
		test('isTenOrFive', () => {
			const someNum = funcs.isTenOrFive(5);
			expect(someNum).toBe(true);
		});
	});

	describe('isInRange', () => {
		test('if num is between 20 and 50', () => {
			const awesomeNum = funcs.isInRange(32);
			expect(awesomeNum).toBe(true);
		});
	});

	describe('isInteger', () => {
		test('Should be a whole number and return true', () => {
			const intThing = funcs.isInteger(4);
			expect(intThing).toBe(true);
		});
	});

	describe('fizzBuzz', () => {
		test('if number is divisible by 3 return fizz', () => {
			const fizzySticks = funcs.fizzBuzz(12);
			expect(fizzySticks).toBe('fizz');
		});
	});

	describe('isPrime', () => {
		test('number should return true if prime', () => {
			const optimusPRIMEnumber = funcs.isPrime(23);
			expect(optimusPRIMEnumber).toBe(true);
		});
	});

	describe('returnFirst', () => {
		test('should return the first item in the array', () => {
			const superCoolArrayLazorBlaster = funcs.returnFirst([ 'seals', 'dragons', 'waifu' ]);
			expect(superCoolArrayLazorBlaster).toBe('seals');
		});
	});

	describe('returnLast', () => {
		test('should return last item in arry', () => {
			const notSoCoolArryPeaShooter = funcs.returnFirst([ 'Dr Strange', 'Random Cat', 'Dirty Underwear' ]);
			expect(notSoCoolArryPeaShooter).toBe('Dr Strange');
		});
	});

	describe('getArrayLentgh', () => {
		test('should get the length of the array', () => {
			const boringArray = funcs.getArrayLength([ 'hello', 'bye', 'ok' ]);
			expect(boringArray).toBe(3);
		});
	});

	describe('incrementByOne', () => {
		test('should incrament through the array for no reason', () => {
			const whyWeIncramentingTho = funcs.incrementByOne([ 1, 2 ]);
			expect(whyWeIncramentingTho).toEqual([ 2, 3 ]);
		});
	});

	describe('addItemToArray', () => {
		test('Should add an item to the array', () => {
			const yabbadabbado = funcs.addItemToArray([ 1, 2 ], 3);
			expect(yabbadabbado).toEqual([ 1, 2, 3 ]);
		});
	});

	describe('addItemToFront', () => {
		test('Should push an item to the front of the array', () => {
			const waifu = funcs.addItemToFront([ '1', '2' ], '3');
			expect(waifu).toEqual([ '3', '1', '2' ]);
		});
	});

	describe('wordsToSentence', () => {
		test('Should concatinate words together', () => {
			const words = funcs.wordsToSentence([ 'hello', 'my', 'friend' ]);
			expect(words).toEqual('hello my friend');
		});
	});

	describe('contains', () => {
		test('should return true array contains item', () => {
			const ugghh = funcs.contains([ 0, 1, 2, 3 ], 3);
			expect(ugghh).toBe(true);
		});
	});

	describe('averageTestScore', () => {
		test('gets the average of all test scores', () => {
			const yup = funcs.averageTestScore([ 20, 13, 43 ]);
			expect(yup).toEqual(25);
		});
	});

	describe('largestNumber', () => {
		test('should find the largest number in an array', () => {
			const woah = funcs.largestNumber([ 1, 3, 1000, 2 ]);
			expect(woah).toEqual(1000);
		});
	});
});
