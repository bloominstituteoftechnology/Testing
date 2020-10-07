const {
	multiplyByTen,
	subtractFive,
	areSameLength,
	areEqual,
	lessThanNinety,
	greaterThanFifty,
	add,
	subtract,
	divide,
	multiply,
	getRemainder,
	isEven,
	isOdd,
	square,
	cube,
	raiseToPower,
	roundNumber,
	roundUp,
	addExclamationPoint,
	combineNames,
	getGreeting,
	getRectangleArea,
	getTriangleArea,
	getCircleArea,
	getRectangularPrismVolume,
} = require('./project-1');

describe('project 1', () => {
	test('multiplyByTen correctly multiplies a number by 10', () => {
		expect(multiplyByTen(5)).toBe(50);
		expect(multiplyByTen(100)).toBe(1000);
	});

	test('subtractFive correctly subtracts 5 from number', () => {
		expect(subtractFive(9)).toBe(4);
		expect(subtractFive(4)).toBe(-1);
	});

	test('areSameLength returns correct boolean', () => {
		expect(areSameLength('String One', 'String Two')).toBeTruthy();
		expect(areSameLength('String One', 'String Two???')).toBeFalsy();
	});

	test('areEqual returns correct boolean', () => {
		expect(areEqual(4, 4)).toBeTruthy();
		expect(areEqual(3, 7)).toBeFalsy();
	});

	test('lessThanNinety returns correct boolean', () => {
		expect(lessThanNinety(85)).toBeTruthy();
		expect(lessThanNinety(90)).toBeFalsy();
		expect(lessThanNinety(95)).toBeFalsy();
	});

	test('greaterThanFifty returns correct Boolean', () => {
		expect(greaterThanFifty(72)).toBeTruthy();
		expect(greaterThanFifty(50)).toBeFalsy();
		expect(greaterThanFifty(32)).toBeFalsy();
	});

	test('add returns correct result', () => {
		expect(add(3, 4)).toBe(7);
		expect(add(3, 4)).not.toBe(4);
	});

	test('subtract returns correct result', () => {
		expect(subtract(3, 4)).toBe(-1);
		expect(subtract(9, 4)).not.toBe(7);
	});

	test('divide returns correct result', () => {
		expect(divide(100, 10)).toBe(10);
		expect(divide(4, 2)).not.toBe(3);
	});

	test('multiply returns correct result', () => {
		expect(multiply(3, 4)).toBe(12);
		expect(multiply(5, 4)).not.toBe(18);
	});

	test('getRemainder returns correct result', () => {
		expect(getRemainder(4, 3)).toBe(1);
		expect(add(4, 3)).not.toBe(3);
	});

	test('isEven returns correct boolean', () => {
		expect(isEven(3)).toBeFalsy;
		expect(isEven(6)).toBeTruthy;
	});

	test('isOdd returns correct boolean', () => {
		expect(isOdd(10)).toBeFalsy;
		expect(isOdd(7)).toBeTruthy;
	});

	test('square returns correct result', () => {
		expect(square(4)).toBe(16);
		expect(square(9)).toBe(81);
	});

	test('cube returns correct result', () => {
		expect(cube(3)).toBe(27);
		expect(cube(2)).toBe(8);
	});

	test('raiseToPower returns correct result', () => {
		expect(raiseToPower(3, 4)).toBe(81);
		expect(raiseToPower(10, -2)).toBe(0.01);
	});

	test('roundNumber correctly rounds number', () => {
		expect(roundNumber(4.7)).toBe(5);
		expect(roundNumber(4.3)).toBe(4);
	});

	test('roundUp rounds all floats up', () => {
		expect(roundUp(4.3)).toBe(5);
		expect(roundUp(4.9)).toBe(5);
	});

	test('addExclamationPoint returns string with exclamation added', () => {
		expect(addExclamationPoint('Testing')).toEqual('Testing!');
		expect(addExclamationPoint('Testing!')).toEqual('Testing!!');
	});

	test('combineNames correctly combines names passed in', () => {
		expect(combineNames('Jason', 'Duncan')).toEqual('Jason Duncan');
	});

	test('getGreeting returns correct greeting', () => {
		expect(getGreeting('Bill')).toEqual('Hello Bill!');
	});

	test('getRectangleArea returns correct area of a rectangle', () => {
		expect(getRectangleArea(5, 4)).toBe(20);
		expect(getRectangleArea(10, 10)).toBe(100);
	});

	test('getTriangleArea returns correct area', () => {
		expect(getTriangleArea(10, 10)).toBe(50);
	});

	test('getCircleArea returns correct area', () => {
		expect(getCircleArea(20)).toBe(1256.6370614359173);
	});

	test('getRectangularPrismVolume returns correct volume', () => {
		expect(getRectangularPrismVolume(3, 3, 3)).toBe(27);
	});
});
