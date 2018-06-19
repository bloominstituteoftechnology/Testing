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
      } = require('./project-1'); //I got so tired of creating a variable for every test so I decided to import all the functions here

// start testing!
describe('project 1', () => {
  it('should multiply number by ten', () => {
    const num = multiplyByTen(-3);
    const num2  = multiplyByTen(1.3);
    const num3 = multiplyByTen('hello');
    const num4 = multiplyByTen([1,5,9]);
 
    expect(num).toBe(-30);
    expect(num2).toBe(13);
    expect(num3).toBeNaN;
    expect(num4).toBeNaN;
  });

  it('subtracts five from any number', () => {
    const num = subtractFive(-1);
    const num1 = subtractFive(17.422);
    const num2 = subtractFive('hello');

    expect(num).toBe(-6);
    expect(num1).toBe(12.422);
    expect(num2).toBeNaN;
  });

  it('compares length of two strings', () => {
    const string = areSameLength('bbbbb', '987');
    const string2 = areSameLength('xyz', 'abc');

    expect(string).toEqual(false);
    expect(string2).toEqual(true);
  });

  it('compares two numbers - or strings', () => {
    const num = areEqual(-3, -3);
    const num2 = areEqual(73,703);
    const num3 = areEqual('hello', 'kelly');
    const num4 = areEqual(true, true);
    const num5 = areEqual([1,2,3],[3,2,1]); 

    expect(num).toEqual(true);
    expect(num2).toEqual(false);
    expect(num3).toEqual(false);
    expect(num4).toEqual(true);
    expect(num5).toEqual(false);

  });

  it('tests whether number is less than ninety', () => {
    const num = lessThanNinety(637);
    const num2 = lessThanNinety(82);
    const num3 = lessThanNinety('hello');
    const num4 = lessThanNinety(false);

    expect(num).toEqual(false);
    expect(num2).toEqual(true);
    expect(num3).toEqual(false);
    expect(num4).toEqual(true); //this is the most inane result ever but that's what came up
  });

  it('checks whether number is greater than fifty', () => {
    const num = greaterThanFifty(82);
    const num2 = greaterThanFifty(0);
    const num3 = greaterThanFifty('kelly');
    const num4 = greaterThanFifty(true);

    expect(num).toEqual(true);
    expect(num2).toEqual(false);
    expect(num3).toEqual(false);
    expect(num4).toEqual(false);//these booleans will be the death of me
  });

  it('adds two numbers together', () => {
    const num = add(-3,9);
    const num2 = add(0,0);
    const num3 = add('blue','yellow');
    const num4 = add(true, true);
    const num5 = add(1.73, 'green');

    expect(num).toBe(6);
    expect(num2).toBe(0);
    expect(num3).toBeNaN;
    expect(num4).toBeNaN;
    expect(num5).toBeNaN;
  });

  it('subtracts one number from another', () => {
    const num = subtract(15,3);
    const num2 = subtract(0.376,1);
    const num3 = subtract('what','ever');
    const num4 = subtract(true,false);

    expect(num).toBe(12);
    expect(num2).toBe(-0.624);
    expect(num3).toBeNaN;
    expect(num4).toBeNaN;
    
  });
  
  it('divides one number by another', () => {
    const num = divide(15,3);
    const num2 = divide(27,0);
    const num3 = divide('this','sucks');
    const num4 = divide(true,false);

    expect(num).toBe(5);
    expect(num2).toBe(Infinity);
    expect(num3).toBeNaN;
    expect(num4).toBeNaN;
  });

  it('multiplies two numbers together', () => {
    const num = multiply(6,8);
    const num2 = multiply(-5,3);
    const num3 = multiply(.0326, 77893);
    const num4 = multiply(3, 'hello');
    const num5 = multiply(true,false);

    expect(num).toBe(48);
    expect(num2).toBe(-15);
    expect(num3).toBe(2539.3118);
    expect(num4).toBeNaN;
    expect(num5).toBeNaN;
  });

  it('divides two numbers and returns the remainder', () => {
    const num = getRemainder(64,7);
    const num2 = getRemainder(3,1);
    const num3 = getRemainder(.325,.933);
    const num4 = getRemainder('hello','goodbye');
    const num5 = getRemainder(false,false);

    expect(num).toBe(1);
    expect(num2).toBe(0);
    expect(num3).toBe(.325);
    expect(num4).toBeNaN;
    expect(num5).toBeNaN;
  });

  it('finds out whether a number is even', () => {
    const num = isEven(-6);
    const num2 = isEven(15);
    const num3 = isEven(.4444444);
    const num4 = isEven('kelly');
    const num5 = isEven(false);

    expect(num).toEqual(true);
    expect(num2).toEqual(false);
    expect(num3).toEqual(false);
    expect(num4).toEqualNaN;
    expect(num5).toEqualNaN;
  });

  it('finds out whether a number is odd', () => {
    const num = isOdd(27);
    const num2 = isOdd(-4);
    const num3 = isOdd(.333333);
    const num4 = isOdd('hello');
    const num5 = isOdd(true);

    expect(num).toEqual(true);
    expect(num2).toEqual(false);
    expect(num3).toEqual(true);//still trying to figure out how this is possible
    expect(num4).toEqualNaN;
    expect(num5).toEqualNaN;
  });

  it('returns the square of a number', () => {
    const num = square(4);
    const num2 = square(-2);
    const num3 = square(.673);
    const num4 = square('hello');
    const num5 = square(false);

    expect(num).toBe(16);
    expect(num2).toBe(4);
    expect(num3).toBe(0.4529290000000001);
    expect(num4).toBeNaN;
    expect(num5).toBeNaN;
  });

  it('returns the cube of a number', () => {
    const num = cube(4);
    const num2 = cube(-2);
    const num3 = cube(.123);
    const num4 = cube('this');
    const num5 = cube(true);

    expect(num).toBe(64);
    expect(num2).toBe(-8);
    expect(num3).toBe(.001860867);
    expect(num4).toBeNaN;
    expect(num5).toBeNaN;
  });

  it('raises a number to a certain power', () => {
    const num = raiseToPower(3,1);
    const num2 = raiseToPower(2,-2);
    const num3 = raiseToPower(2,.0003929);
    const num4 = raiseToPower(3,false);
    const num5 = raiseToPower('inigo','montoya');

    expect(num).toBe(3);
    expect(num2).toBe(0.25);
    expect(num3).toBe(1.000272374614473);
    expect(num4).toBeNaN;
    expect(num5).toBeNaN;
  });

  it('rounds a number off', () => {
    const num = roundNumber(7.363);
    const num2 = roundNumber(97.5);
    const num3 = roundNumber(-2.0222);
    const num4 = roundNumber(false);
    const num5 = roundNumber('something');

    expect(num).toBe(7);
    expect(num2).toBe(98);
    expect(num3).toBe(-2);
    expect(num4).toBeNaN;
    expect(num5).toBeNaN;
  });

  it('rounds a number up', () => {
    const num = roundUp(7.363);
    const num2 = roundUp(97.5);
    const num3 = roundUp(-2.0222);
    const num4 = roundUp(true);
    const num5 = roundUp('sure');
    
    expect(num).toBe(8);
    expect(num2).toBe(98);
    expect(num3).toBe(-2);
    expect(num4).toBeNaN;
    expect(num5).toBeNaN;
    
  });

  it('adds an exclamation point', () => {
    const str = addExclamationPoint('hello');
    const str2 = addExclamationPoint(1);
    const str3 = addExclamationPoint(true);
    
    expect(str).toBe('hello!');
    expect(str2).toBe('1!');
    expect(str3).toBe('true!');
  });

  it('combines first and last names', () => {
    const str = combineNames('Pablo', 'Escobar');
    const str2 = combineNames('fresh', 'hell');
    const str3 = combineNames(true, false);
    const str4 = combineNames(1,6);

    expect(str).toBe('Pablo Escobar');
    expect(str2).toBe('fresh hell');
    expect(str3).toBe('true false');
    expect(str4).toBe('1 6');
  });

  it('greets user', () => {
    const str = getGreeting('Pablo');
    const str2 = getGreeting(false);
    const str3 = getGreeting(86);

    expect(str).toBe('Hello Pablo!');
    expect(str2).toBe('Hello false!');
    expect(str3).toBe('Hello 86!');
  });

  it('calculates area of rectangle', () => {
    const num = getRectangleArea(7,3);
    const num2 = getRectangleArea(5,-2);
    const num3 = getRectangleArea('hello','kelly');
    const num4 = getRectangleArea(false,true);

    expect(num).toBe(21);
    expect(num2).toBe(-10); //the original function really should be changed so that you cannot enter negative numbers
    expect(num3).toBeNaN;
    expect(num4).toBeNaN;
  });

  it('calculates area of triangle', () => {
    const num = getTriangleArea(3,5);
    const num2 = getTriangleArea(-4,8);
    const num3 = getTriangleArea('square','circle');
    const num4 = getTriangleArea(true,true);

    expect(num).toBe(7.5);
    expect(num2).toBe(-16); //as above, this result makes zero sense in the real world
    expect(num3).toBeNaN;
    expect(num4).toBeNaN;
  });

  it('calculates area of circle', () => {
    const num = getCircleArea(3);
    const num2 = getCircleArea(0);
    const num3 = getCircleArea(-1);
    const num4 = getCircleArea('what');
    const num5 = getCircleArea(false);

    expect(num).toBe(28.274333882308138);
    expect(num2).toBe(0);
    expect(num3).toBe(3.141592653589793); //this gives an ok result bc we square the radius but it still shouldn't accept a negative number
    expect(num4).toBeNaN;
    expect(num5).toBeNaN;
  });

  it('calculates rectangle prism volume', () => {
    const num = getRectangularPrismVolume(3,4,5);
    const num2 = getRectangularPrismVolume(-1,-65,.000394);
    const num3 = getRectangularPrismVolume('w','t','f');
    const num4 = getRectangularPrismVolume(true,true,true);

    expect(num).toBe(60);
    expect(num2).toBe(.025609999999999997);
    expect(num3).toBeNaN;
    expect(num4).toBeNaN;
  });
  
});
