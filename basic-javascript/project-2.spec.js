const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('getBiggest()', () => {
    test('x bigger than y', () => {
        expect(funcs.getBiggest(10, 9)).toBe(10)
    });
    test('y bigger than x', () => {
        expect(funcs.getBiggest(1, 3)).toBe(3)
    });
})
describe('greeting', () => {
    test("default", () => {
		expect(funcs.greeting()).toBe("Hello!");
	});
	test("Spanish", () => {
		expect(funcs.greeting("Spanish")).toBe("Hola!");
	});
	test("German", () => {
		expect(funcs.greeting("German")).toBe("Guten Tag!");
	});
	test("Default unknown language", () => {
		expect(funcs.greeting("Russian")).toBe("Hello!");
	});
})
describe('Is 10 or 5', () => {
    test('Is 10', () => {
        expect(funcs.isTenOrFive(10)).toBeTruthy()
    })
    test('Is 5', () => {
        expect(funcs.isTenOrFive(5)).toBeTruthy()
    })
    test('Is neither 10 nor 5', () => {
        expect(funcs.isTenOrFive(4)).toBeFalsy()
    })
})
describe('Is in range', () => {
    test('is in range', () => {
        expect(funcs.isInRange(41)).toBeTruthy()
    })
})
describe('Is an integer', () => {
    test('is an integer', () => {
        expect(funcs.isInteger(4)).toBeTruthy()
    })
    test('is not an integer', () => {
        expect(funcs.isInteger(3.3323)).toBeFalsy()
    })
})
describe("fizz buzz", () => {
	test("is divisible by 3 and 5", () => {
		expect(funcs.fizzBuzz(15)).toBe("fizzbuzz");
	});
	test("is divisible by 3", () => {
		expect(funcs.fizzBuzz(6)).toBe("fizz");
	});
	test("is divisible by 5", () => {
		expect(funcs.fizzBuzz(20)).toBe("buzz");
	});
});
describe("is prime", () => {
	test("if number is less than 0", () => {
		expect(funcs.isPrime(-3)).toBe(false);
	});
	test("if number is 1 or 0", () => {
		expect(funcs.isPrime(1)).toBe(false);
	});
	test("is prime", () => {
		expect(funcs.isPrime(17)).toBe(true);
	});
	test("is not prime", () => {
		expect(funcs.isPrime(20)).toBe(false);
	});
});
describe("array tests", () => {
	let arr = [1, 2, 3, 4, 5];
	let arruno = [1, 2, 3, 4, 5];
	let arrdos = [1, 2, 3, 4, 5];
	let arrAddEnd = [1, 2, 3, 4, 5, 6];
	let arrAddFront = [0, 1, 2, 3, 4, 5];
	let arrOne = [2, 3, 4, 5, 6];

	test("first item in array", () => {
		expect(funcs.returnFirst(arr)).toBe(1);
	});
	test("return last item in array", () => {
		expect(funcs.returnLast(arr)).toBe(5);
	});
	test("get array length", () => {
		expect(funcs.getArrayLength(arr)).toBe(5);
	});
	test("increment all elements in array by one", () => {
		expect(funcs.incrementByOne(arr)).toEqual(arrOne);
	});
	test("add item to array", () => {
		expect(funcs.addItemToArray(arruno, 6)).toEqual(arrAddEnd);
	});
	test("add item to front of array", () => {
		expect(funcs.addItemToFront(arrdos, 0)).toEqual(arrAddFront);
	});
});
describe('Words to Sentence', () => {
    test('random words', () => {
        expect(funcs.wordsToSentence(['the', 'dog'])).toBe('the dog')
    })
})
//contains test
it('should return correct boolean', () => {
	//Arrange
	const expected1 = true;
	const expected2 = false;
	//Act
	const actual1 = funcs.contains([1,2,3], 2)
	const actual2 = funcs.contains([1,2,3], 5)
	//Assert
	expect(actual1).toBe(expected1)
	expect(actual2).toBe(expected2)
})

//addNumbers test
it('adds all numbers in the array', () => {
	//Arrange
	const expected = 10
	//Act
	const actual = funcs.addNumbers([2,2,2,4])
	//Assert
	expect(actual).toBe(expected)
})

//averageTestScore test
it('should return the average number', () => {
	//Arrange
	const expected = 17
	//Act
	const actual = funcs.averageTestScore([30,10,20,5,20])
	//Assert
	expect(actual).toBe(expected)
})

//largestNumber test
it('returns the largest number from array', () => {
	//Arrange
	const expected = 10
	//Act
	const actual = funcs.largestNumber([2,3,10,3,6])
	//Assert
	expect(actual).toBe(expected)
})