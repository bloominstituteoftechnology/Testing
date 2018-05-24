const funcs = require('./project-1');

// write your tests here
describe('Testing test!', () => {
  it('Checking that test runs.', () => {});
});


// multiplyByTen,
it('multiply a number by ten', () => {
  // arrange
  const multTen = funcs.multiplyByTen;
  // act
  const forty = multTen(4);
  // assert
  expect(forty).toBe(40);
});

// subtractFive,
it('subtract five from a number', () => {
  // arrange
  const subFive = funcs.subtractFive;
  // act
  const five = subFive(10);
  const negTwo = subFive(3);
  // assert
  expect(five).toBe(5);
  expect(negTwo).toBe(-2);
});

// areSameLength,
it('two strings are the same length', () => {
  // arrange
  const areSameLength = funcs.areSameLength;
  // act
  const isTrue = areSameLength('Same length string', 'Same length string');
  const isFalse = areSameLength('Is not the', 'same length of string');
  // assert
  expect(isTrue).toBeTruthy();
  expect(isFalse).toBeFalsy();
});

// areEqual,
it('two inputs are the same', () => {
  // arrange
  const areEqual = funcs.areEqual;
  // act
  const isTrue1 = areEqual('SameString', 'SameString');
  const isTrue2 = areEqual(3, 3);
  const isTrue3 = areEqual(true, true);
  const isFalse1 = areEqual('ThisString', 'DifferentString');
  const isFalse2 = areEqual(3, 4);
  const isFalse3 = areEqual(true, false);
  // assert
  expect(isTrue1).toBe(true);
  expect(isTrue2).toBe(true);
  expect(isTrue3).toBe(true);
  expect(isFalse1).toBe(false);
  expect(isFalse2).toBe(false);
  expect(isFalse3).toBe(false);
});

// lessThanNinety,
it('number is less than 90', () => {
  // arrange
  const lessThanNinety = funcs.lessThanNinety;
  // act
  const eighty = lessThanNinety(80);
  const ninetySeven = lessThanNinety(97);
  // assert
  expect(eighty).toBeTruthy();
  expect(ninetySeven).toBeFalsy();
});

// greaterThanFifty,
it('number is greater than 50', () => {
  // arrange
  const greaterThanFifty = funcs.greaterThanFifty;
  // act
  const forty = greaterThanFifty(40);
  const sixty = greaterThanFifty(60);
  // assert
  expect(forty).toBeFalsy();
  expect(sixty).toBeTruthy();
});

// add,
it('add two numbers together', () => {
  // arrange
  const add = funcs.add;
  // act
  const ten = add(7, 3);
  const four = add(8, -4);
  // assert
  expect(ten).toBe(10);
  expect(four).toBe(4);
});

// subtract,
it('subtract y from x given (x,y)', () => {
  // arrange
  const subtract = funcs.subtract;
  // act
  const seven = subtract(10, 3);
  // assert
  expect(seven).toBe(7);
});

// divide,
it('divide x into y, given (x,y)', () => {
  // arrange
  const divide = funcs.divide;
  // act
  const three = divide(24, 8);
  // assert
  expect(three).toBe(3);
});

// multiply,
it('multiply two numbers', () => {
  // arrange
  const multiply = funcs.multiply;
  // act
  const fifteen = multiply(5, 3);
  // assert
  expect(fifteen).toBe(15);
});

// getRemainder,
it('get the remainder of x/y, given (x, y)', () => {
  // arrange
  const getRemainder = funcs.getRemainder;
  // act
  const three = getRemainder(18, 5);
  // assert
  expect(three).toBe(3);
});

// isEven,
it('return true if number is even', () => {
  // arrange
  const isEven = funcs.isEven;
  // act
  const four = isEven(4);
  const three = isEven(3);
  // assert
  expect(four).toBeTruthy();
  expect(three).toBeFalsy();
});

// isOdd,
it('return true if number is odd', () => {
  // arrange
  const isOdd = funcs.isOdd;
  // act
  const four = isOdd(4);
  const three = isOdd(3);
  // assert
  expect(four).toBeFalsy();
  expect(three).toBeTruthy();
});

// square,
it('return the square of a number', () => {
  // arrange
  const square = funcs.square;
  // act
  const sixteen = square(4);
  // assert
  expect(sixteen).toBe(16);
});

// cube,
it('return the cube of a number', () => {
  // arrange
  const cube = funcs.cube;
  // act
  const sixtyFour = cube(4);
  // assert
  expect(sixtyFour).toBe(64);
});

// raiseToPower,
it('raise number x to a power of y, given (x, y)', () => {
  // arrange
  const raiseToPower = funcs.raiseToPower;
  // act
  const threeToFourth = raiseToPower(3, 4);
  // assert
  expect(threeToFourth).toBe(81);
});

// roundNumber,
it('Should round a number', () => {
  // arrange
  const roundNumber = funcs.roundNumber;
  // act
  const threeQuarters = roundNumber(1.75);
  const oneQuarter = roundNumber(1.25);
  // assert
  expect(threeQuarters).toBe(2);
  expect(oneQuarter).toBe(1);
});

// roundUp,
it('Should round a number up', () => {
  // arrange
  const roundUp = funcs.roundUp;
  // act
  const threeQuarters = roundUp(1.75);
  const oneQuarter = roundUp(1.25);
  // assert
  expect(threeQuarters).toBe(2);
  expect(oneQuarter).toBe(2);
});

// addExclamationPoint,
it('Should add an exclamation point at the end of the string', () => {
  // arrange
  const addExclamationPoint = funcs.addExclamationPoint;
  // act
  const myString = addExclamationPoint('This is my string');
  // assert
  expect(myString).toBe('This is my string!');
});

// combineNames,
it('Should combine a first name string with a last name string', () => {
  // arrange
  const combineNames = funcs.combineNames;
  // act
  const georgeWashington = combineNames('George', 'Washington');
  // assert
  expect(georgeWashington).toBe('George Washington');
});

// getGreeting,
it('should say hello to a name string', () => {
  // arrange
  const getGreeting = funcs.getGreeting;
  // act
  const george = getGreeting('George');
  // assert
  expect(george).toBe('Hello George!');
});

// getRectangleArea,
it('should return area of a rectangle given length and width', () => {
  // arrange
  const getRectangleArea = funcs.getRectangleArea;
  // act
  const fifteen = getRectangleArea(5, 3);
  // assert
  expect(fifteen).toBe(15);
});

// getTriangleArea,
it('should return area of a triangle given base and height', () => {
  // arrange
  const getTriangleArea = funcs.getTriangleArea;
  // act
  const fifteen = getTriangleArea(5, 6);
  // assert
  expect(fifteen).toBe(15);
});

// getCircleArea,
it('should return the area of a circle given the radius', () => {
  // arrange
  const getCircleArea = funcs.getCircleArea;
  // act
  const circleArea = getCircleArea(5);
  // assert
  expect(circleArea).toBe(78.53981633974483);
});

// getRectangularPrismVolume
it('should return the volume of a rectangular prism given length, width, height', () => {
  // arrange
  const getRecPrismVol = funcs.getRectangularPrismVolume;
  // act
  const sixty = getRecPrismVol(3, 4, 5);
  // assert
  expect(sixty).toBe(60);
});