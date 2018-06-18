const { multiplyByTen,
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

// start testing!
describe('project 1', () => {
  it('should multiply number by ten', () => {
    const num = multiplyByTen(-3);
    const num2  = multiplyByTen(13);
 
    expect(num).toBe(-30);
    expect(num2).toBe(130);
  });

  it('subtracts five from any number', () => {
    const negOne = subtractFive(-1);
    const fifteen = subtractFive(15);

    expect(negOne).toBe(-6);
    expect(fifteen).toBe(10);
  });

  it('compares length of two strings', () => {
    const string = areSameLength('bbbbb', '987');
    const string2 = areSameLength('xyz', 'abc');

    expect(string).toEqual(false);
    expect(string2).toEqual(true);
  });

  it('compares two numbers', () => {
    const num = areEqual(-3, -3);
    const num2 = areEqual (73,703);

    expect(num).toEqual(true);
    expect(num2).toEqual(false);
  });

  it('tests whether number is less than ninety', () => {
    const num = lessThanNinety(637);
    const num2 = lessThanNinety(82);

    expect(num).toEqual(false);
    expect(num2).toEqual(true);
  });

  it('checks whether number is greater than fifty', () => {
    const num = greaterThanFifty(82);
    const num2 = greaterThanFifty(0);

    expect(num).toEqual(true);
    expect(num2).toEqual(false);
  });

  it('adds two numbers together', () => {
    const num = add(-3,9);
    const num2 = add(0,0);

    expect(num).toBe(6);
    expect(num2).toBe(0);
  });

  it('subtracts one number from another', () => {
    const num = subtract(15,3);
    const num2 = subtract(3,15);

    expect(num).toBe(12);
    expect(num2).toBe(-12);

  });
  
  it('divides one number by another', () => {
    const num = divide(15,3);
    const num2 = divide(27,0);

    expect(num).toBe(5);
    expect(num2).toBe(Infinity);
  });

  it('multiplies two numbers together', () => {
    const num = multiply(6,8);
    const num2 = multiply(-5,3);

    expect(num).toBe(48);
    expect(num2).toBe(-15);
  });

  it('divides two numbers and returns the remainder', () => {
    const num = getRemainder(64,7);
    const num2 = getRemainder(3,1);

    expect(num).toBe(1);
    expect(num2).toBe(0);
  });

  it('finds out whether a number is even', () => {
    const num = isEven(-6);
    const num2 = isEven(15);

    expect(num).toEqual(true);
    expect(num2).toEqual(false);
  });

  it('finds out whether a number is odd', () => {
    const num = isOdd(27);
    const num2 = isOdd(-4);

    expect(num).toEqual(true);
    expect(num2).toEqual(false);
  });

  it('returns the square of a number', () => {
    const num = square(4);
    const num2 = square(-2);

    expect(num).toBe(16);
    expect(num2).toBe(4);
  });

  it('returns the cube of a number', () => {
    const num = cube(4);
    const num2 = cube(-2);

    expect(num).toBe(64);
    expect(num2).toBe(-8);
  });

  it('raises a number to a certain power', () => {
    const num = raiseToPower(3,1);
    const num2 = raiseToPower(2,-2);

    expect(num).toBe(3);
    expect(num2).toBe(0.25);
  });

  it('rounds a number off', () => {
    const num = roundNumber(7.363);
    const num2 = roundNumber(97.5);

    expect(num).toBe(7);
    expect(num2).toBe(98);
  });

  it('rounds a number up', () => {
    const num = roundUp(7.363);
    const num2 = roundUp(97.5);

    expect(num).toBe(8);
    expect(num2).toBe(98);
  });

  it('adds an exclamation point', () => {
    const str = addExclamationPoint('hello');

    expect(str).toBe('hello!');
  });

  it('combines first and last names', () => {
    const str = combineNames('Pablo', 'Escobar');

    expect(str).toBe('Pablo Escobar');
  });

  it('greets user', () => {
    const str = getGreeting('Pablo');

    expect(str).toBe('Hello Pablo!');
  });

  it('calculates area of rectangle', () => {
    const num = getRectangleArea(7,3);
    const num2 = getRectangleArea(5,6);

    expect(num).toBe(21);
    expect(num2).toBe(30);
  });

  it('calculates area of triangle', () => {
    const num = getTriangleArea(3,5);
    const num2 = getTriangleArea(4,8);

    expect(num).toBe(7.5);
    expect(num2).toBe(16);
  });

  it('calculates area of circle', () => {
    const num = getCircleArea(3);

    expect(num).toBe(28.274333882308138);
  });

  it('calculates rectangle prism volume', () => {
    const num = getRectangularPrismVolume(3,4,5);

    expect(num).toBe(60);
  });
  
});
