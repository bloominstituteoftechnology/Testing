const funcs = require("./project-1");

//TRAIN OF THOUGHT
//Arrange: set up the world
//Act: execute the tested code
//Assert: check the results are correct

//THINGS TO LOOK FOR
//what if one of the values is undefined
// undefined + value = ?
//what if one of the values is null
// null + value = ?
//what if on eof the values is negative
//what if both values are undefined
// undefined + undefined = ?
// what if float passes and round the result to 1 decimal
// what if the sum is larger than Number.MAX_VALUE
// what if one the values is a string

// start testing!

it("multiply by 10", () => {
  const expected = 30;
  const multiplyByTen = funcs.multiplyByTen;

  const actual = multiplyByTen(3);

  expect(actual).toBe(30);
});

it("subtract 5", () => {
  const subtractFive = funcs.subtractFive;
  const expected = 5;

  const actual = subtractFive(10);

  expect(actual).toBe(5);
});

it("string same length", () => {
  const expected = true;
  const areSameLength = funcs.areSameLength;

  const actual = areSameLength("hello", "hello");
  const wrong = areSameLength("hello", "bye");

  expect(actual).toBe(true);
  expect(wrong).not.toBe(true);
});
//^^^^^ this test?

it("", () => {
  const expected = true;
  const areEqual = funcs.areEqual;

  const actual = areEqual(1, 1);

  expect(actual).toBe(true);
});

it("", () => {
  const expected = true;
  const lessThanNinety = funcs.lessThanNinety;

  const actual = lessThanNinety(89);

  expect(actual).toBe(true);
});

it("", () => {
  const expected = true;
  const greaterThanFifty = funcs.greaterThanFifty;

  const actual = greaterThanFifty(501);

  expect(actual).toBe(true);
});

it("", () => {
  // const expected = 10;
  const add = funcs.add;

  const ten = add(1, 9);
  const five = add(4, 1);
  const eight = add(4, 4);

  expect(ten).toBe(10);
  expect(five).toBe(5);
  expect(eight).toBe(8);
});

it("", () => {
  const subtract = funcs.subtract;

  const ten = subtract(20, 10);
  const five = subtract(10, 5);

  expect(ten).toBe(10);
  expect(five).toBe(5);
});

it("", () => {
  const divide = funcs.divide;

  const ten = divide(100, 10);
  const five = divide(25, 5);
  const one = divide(5, 5);

  expect(ten).toBe(10);
  expect(five).toBe(5);
  expect(one).toBe(1);
});

it("", () => {
  const multiply = funcs.multiply;

  const ten = multiply(2, 5);
  const five = multiply(1, 5);
  const one = multiply(1, 1);

  expect(ten).toBe(10);
  expect(five).toBe(5);
  expect(one).toBe(1);
});

it("", () => {
  const getRemainder = funcs.getRemainder;

  const zero = getRemainder(5, 5);
  const two = getRemainder(5, 3);
  const one = getRemainder(5, 4);

  expect(zero).toBe(0);
  expect(two).toBe(2);
  expect(one).toBe(1);
});

it("", () => {
  const isEven = funcs.isEven;

  const five = isEven(5);
  const four = isEven(4);
  const six = isEven(6);

  expect(five).toBe(false);
  expect(four).toBe(true);
  expect(six).toBe(true);
});

it("", () => {
  const isOdd = funcs.isOdd;

  const five = isOdd(5);
  const four = isOdd(4);
  const six = isOdd(6);

  expect(five).toBe(true);
  expect(four).toBe(false);
  expect(six).toBe(false);
});

it("", () => {
  const expected = 4;
  const square = funcs.square;

  const actual = square(2);

  expect(actual).toBe(4);
});

it("", () => {
  const expected = 8;
  const cube = funcs.cube;

  const actual = cube(2);

  expect(actual).toBe(8);
});

it("", () => {
  const expected = 4;
  const raiseToPower = funcs.raiseToPower;

  const actual = raiseToPower(2, 2);

  expect(actual).toBe(4);
});

it("", () => {
  const expected = 10;
  const roundNumber = funcs.roundNumber;

  const actual = roundNumber(9.8);

  expect(actual).toBe(10);
});

it("", () => {
  const expected = 10;
  const roundUp = funcs.roundUp;

  const actual = roundUp(9.1);

  expect(actual).toBe(10);
});

it("", () => {
  const expected = "hi!";
  const addExclamationPoint = funcs.addExclamationPoint;

  const actual = addExclamationPoint("hi");

  expect(actual).toBe("hi!");
});

it("", () => {
  const expected = "David Pok";
  const combineNames = funcs.combineNames;

  const actual = combineNames("David", "Pok");

  expect(actual).toBe("David Pok");
});

it("", () => {
  const expected = "Hello David!";
  const getGreeting = funcs.getGreeting;

  const actual = getGreeting("David");

  expect(actual).toBe("Hello David!");
});

it("", () => {
  const expected = 10;
  const getRectangleArea = funcs.getRectangleArea;

  const actual = getRectangleArea(2, 5);

  expect(actual).toBe(10);
});

it("", () => {
  const expected = 6;
  const getTriangleArea = funcs.getTriangleArea;

  const actual = getTriangleArea(4, 3);

  expect(actual).toBe(6);
});

it("", () => {
  const expected = 12.56;
  const getCircleArea = funcs.getCircleArea;

  const actual = getCircleArea(2);

  expect(actual).toBeCloseTo(12.56, 1);
});

it("", () => {
  const expected = 24;
  const getRectangularPrismVolume = funcs.getRectangularPrismVolume;

  const actual = getRectangularPrismVolume(4, 3, 2);

  expect(actual).toBe(24);
});


//THIS WILL TEST A STRING AND CONVERT IT
// function add(a = 0,b = 0){
//   let v1 = a
//   let v2 = b  

//   if(typeof a === 'string'){
//     if(!Number(a)){
//       return false
//     } else {
//       v1 = Number(a); 
//     }
//   }
//   if(typeof b === 'string'){
//     if(!Number(b)){
//       return false; 
//     } else {
//       v2 = Number(b); 
//     }
//   }
//   return v1 + v2; 
// }