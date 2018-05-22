const funcs = require('./project-1');

describe('project-1 tests', () => {
	it('should multiply by ten', () => {
		const twenty = funcs.multiplyByTen(2);

		expect(twenty).toBe(20);
	});
	it('should subtract five', () => {
		const minus5 = funcs.subtractFive;

		const three = funcs.subtractFive(3);
		const five = funcs.subtractFive(5);
		const ten = funcs.subtractFive(10);

		expect(three).toBe(-2);
		expect(five).toBe(0);
		expect(ten).toBe(5);
	});
	it('areSameLength', () => {
		const sameLength = funcs.areSameLength('str1', 'str2');
		const diffLength = funcs.areSameLength('str11', 'str2');

		expect(sameLength).toBe(true);
		expect(diffLength).toBe(false);
	});
	it('areEqual', () => {
		const isEqual = funcs.areEqual(1, 1);

		expect(isEqual).toBe(true);
	});
	it('lessThanNinety', () => {
		const ninetyLess = funcs.lessThanNinety(89);

		expect(ninetyLess).toBe(true);
	});
	it('greaterThanFifty', () => {
		const fiftyMore = funcs.greaterThanFifty(89);

		expect(fiftyMore).toBe(true);
	});
	it('add', () => {
		const addition = funcs.add(8, 9);

		expect(addition).toBe(17);
	});
	it('subtract', () => {
		const sub = funcs.subtract(10, 9);

		expect(sub).toBe(1);
	});
	it('divide', () => {
		const quotient = funcs.divide(10, 2);

		expect(quotient).toBe(5);
	});
	it('multiply', () => {
		const product = funcs.multiply(10, 2);

		expect(product).toBe(20);
	});
	it('getRemainder', () => {
		const remain = funcs.getRemainder(11, 2);

		expect(remain).toBe(1);
	});
	it('isEven', () => {
		const even = funcs.isEven(11);

		expect(even).toBe(false);
	});
	it('isOdd', () => {
		const odd = funcs.isOdd(11);

		expect(odd).toBe(true);
	});
	it('square', () => {
		const squared = funcs.square(11);

		expect(squared).toBe(121);
	});
	it('cube', () => {
		const cubed = funcs.cube(2);

		expect(cubed).toBe(8);
	});
	it('raiseToPower', () => {
		const power = funcs.raiseToPower(2, 2);

		expect(power).toBe(4);
	});
	it('roundNumber', () => {
		const round = funcs.roundNumber(2.2);

		expect(round).toBe(2);
	});

	it('addExclamationPoint', () => {
		const exclamation = funcs.addExclamationPoint('string');

		expect(exclamation).toBe('string!');
	});

	it('combineNames', () => {
		const combine = funcs.combineNames('First', 'Last');

		expect(combine).toBe('First Last');
	});
	it('getGreeting', () => {
		const greet = funcs.getGreeting('Name');

		expect(greet).toBe('Hello Name!');
	});
	it('getRectangleArea', () => {
		const rectangle = funcs.getRectangleArea(5, 4);

		expect(rectangle).toBe(20);
	});
	it('getTriangleArea', () => {
		const triangle = funcs.getTriangleArea(5, 4);

		expect(triangle).toBe(10);
	});
	it('getCircleArea', () => {
		const circle = funcs.getCircleArea(1);

		expect(circle).toBe(3.141592653589793);
	});
	it('getRectangularPrismVolume', () => {
		const prism = funcs.getRectangularPrismVolume(1, 2, 3);

		expect(prism).toBe(6);
	});
});
