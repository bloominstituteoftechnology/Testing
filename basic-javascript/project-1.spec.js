const funcs = require("./project-1");

describe("multiplyByTen function", () => {
	// arrange
	const expected = 50;
	// act
	const multiplyByTen = funcs.multiplyByTen(5);
	// assert
	it("multiply a number by 10", () => {
		expect(multiplyByTen).toBe(expected);
	});
});

describe("subtractFive function", () => {
	// arrange
	const expected = 10;
	// act
	const subtractFive = funcs.subtractFive(15);
	// assert
	it("subtract a number by 5", () => {
		expect(subtractFive).toBe(expected);
	});
});

describe("areSameLength function", () => {
	// arrange
	const expected = true;
	// act
	const areSameLength = funcs.areSameLength("abc", "def");
	// assert
	it("check if strings are the same length", () => {
		expect(areSameLength).toBe(expected);
	});
});

describe("areEqual function", () => {
	// arrange
	const expected = true;
	// act
	const areEqual = funcs.areEqual(10, 10);
	// assert
	it("both both arguments should be equal", () => {
		expect(areEqual).toEqual(expected);
	});
});

describe("lessThanNinety function", () => {
	// arrange
	const expected = true;
	// act
	const lessThanNinety = funcs.lessThanNinety(50);
	// assert
	it("check if arg is less than 90", () => {
		expect(lessThanNinety).toBe(expected);
	});
});

describe("greaterThanFifty function", () => {
	// arrange
	const expected = true;
	// act
	const greaterThanFifty = funcs.greaterThanFifty(55);
	// assert
	it("check if arg is greater than 50", () => {
		expect(greaterThanFifty).toBe(expected);
	});
});

describe("add function", () => {
	// arrange
	const expected = 11;
	// act
	const add = funcs.add(3, 8);
	// assert
	it("check if args add up correctly", () => {
		expect(add).toBe(expected);
	});
});

describe("subtract function", () => {
	// arrange
	const expected = 3;
	// act
	const subtract = funcs.subtract(9, 6);
	// assert
	it("check if args subtract correctly", () => {
		expect(subtract).toBe(expected);
	});
});

describe("divide function", () => {
	// arrange
	const expected = 2;
	// act
	const divide = funcs.divide(10, 5);
	// assert
	it("check if args divide correctly", () => {
		expect(divide).toBe(expected);
	});
});

describe("multiply function", () => {
	// arrange
	const expected = 100;
	// act
	const multiply = funcs.multiply(10, 10);
	// assert
	it("check if args multiply correctly", () => {
		expect(multiply).toBe(expected);
	});
});

describe("remainder function", () => {
	// arrange
	const expected = 1;
	// act
	const getRemainder = funcs.getRemainder(10, 3);
	// assert
	it("check if args getRemainder correctly", () => {
		expect(getRemainder).toBe(expected);
	});
});

describe("even function", () => {
	// arrange
	const expected = true;
	// act
	const isEven = funcs.isEven(10);
	// assert
	it("check if args isEven correctly", () => {
		expect(isEven).toBe(expected);
	});
});

describe("odd function", () => {
	// arrange
	const expected = true;
	// act
	const isOdd = funcs.isOdd(9);
	// assert
	it("check if args isOdd correctly", () => {
		expect(isOdd).toBe(expected);
	});
});

describe("square function", () => {
	// arrange
	const expected = 100;
	// act
	const square = funcs.square(10);
	// assert
	it("check if args square correctly", () => {
		expect(square).toBe(expected);
	});
});

describe("cube function", () => {
	// arrange
	const expected = 1000;
	// act
	const cube = funcs.cube(10);
	// assert
	it("check if args cube correctly", () => {
		expect(cube).toBe(expected);
	});
});

describe("raiseToPower function", () => {
	// arrange
	const expected = 1000;
	// act
	const raisedToPower = funcs.raiseToPower(10, 3);
	// assert
	it("check if args raisedToPower correctly", () => {
		expect(raisedToPower).toBe(expected);
	});
});

describe("roundNumber function", () => {
	// arrange
	const expected = 4;
	// act
	const roundNumber = funcs.roundNumber(3.8);
	// assert
	it("check if args roundNumber correctly", () => {
		expect(roundNumber).toBe(expected);
	});
});

describe("roundUp function", () => {
	// arrange
	const expected = 4;
	// act
	const roundUp = funcs.roundUp(3.3);
	// assert
	it("check if args roundUp correctly", () => {
		expect(roundUp).toBe(expected);
	});
});
