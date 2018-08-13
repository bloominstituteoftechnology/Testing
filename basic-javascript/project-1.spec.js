const helpers = require('./project-1');

// start testing!

describe('default', () => {
  it('run the tests', () => { });
})

describe('project 1 testing', () => {
  it('should multiply by 10', () => {
    const multiplyByTen = helpers.multiplyByTen;

    const oneHundred = multiplyByTen(10);
    const oneFifty = multiplyByTen(15);
    const twenty = multiplyByTen(2);

    expect(oneHundred).toBe(100);
    expect(oneFifty).toBe(150);
    expect(twenty).toBe(20);

  })

  it('should subtract 5', () => {
    const subtractFive = helpers.subtractFive;

    const five = subtractFive(10);
    const twenty = subtractFive(25);
    const fifty = subtractFive(55);

    expect(five).toBe(5);
    expect(twenty).toBe(20);
    expect(fifty).toBe(50);

  })

  it('should be the same length', () => {
    const areSameLength = helpers.areSameLength;

    const fruit = "Apple";
    const fish = "Salmon";
    const drink = "Pepsi";

    const isTrue = areSameLength(fruit, drink);
    const isFalse = areSameLength(fish, drink);
    const isAlsoTrue = areSameLength(drink, fruit);

    expect(isTrue).toBe(true);
    expect(isFalse).toBe(false);
    expect(isAlsoTrue).toBe(true);

  })

  it('should be equal', () => {
    const areEqual = helpers.areEqual;

    const isEqual = areEqual(10, 10);
    const isNotEqual = areEqual(25, 20);
    const isAlsoEqual = areEqual(50, 50);

    expect(isEqual).toBe(true);
    expect(isNotEqual).toBe(false);
    expect(isAlsoEqual).toBe(true);

  })

  it('should be less than 90', () => {
    const lessThanNinety = helpers.lessThanNinety;

    const oneHundred = lessThanNinety(100);
    const sixty = lessThanNinety(60);
    const twoHundred = lessThanNinety(200);

    expect(oneHundred).toBe(false);
    expect(sixty).toBe(true);
    expect(twoHundred).toBe(false);

  })

  it('should be greater than fifty', () => {
    const greaterThanFifty = helpers.greaterThanFifty;

    const sixty = greaterThanFifty(60);
    const twenty = greaterThanFifty(20);
    const eighty = greaterThanFifty(80);

    expect(sixty).toBe(true);
    expect(twenty).toBe(false);
    expect(eighty).toBe(true);

  })

  it('should add two numbers', () => {
    const add = helpers.add;

    const sixty = add(20, 40);
    const twenty = add(10, 10);
    const eighty = add(30, 50);

    expect(sixty).toBe(60);
    expect(twenty).toBe(20);
    expect(eighty).toBe(80);

  })

  it('should subtract', () => {
    const subtract = helpers.subtract;

    const sixty = subtract(80, 20);
    const twenty = subtract(30, 10);
    const eighty = subtract(130, 50);

    expect(sixty).toBe(60);
    expect(twenty).toBe(20);
    expect(eighty).toBe(80);

  })

  it('should divide', () => {
    const divide = helpers.divide;

    const sixty = divide(120, 2);
    const twenty = divide(100, 5);
    const eighty = divide(240, 3);

    expect(sixty).toBe(60);
    expect(twenty).toBe(20);
    expect(eighty).toBe(80);

  })

  it('should multiply', () => {
    const multiply = helpers.multiply;

    const sixty = multiply(3, 20);
    const twenty = multiply(5, 4);
    const eighty = multiply(8, 10);

    expect(sixty).toBe(60);
    expect(twenty).toBe(20);
    expect(eighty).toBe(80);

  })

  it('should get remainder', () => {
    const getRemainder = helpers.getRemainder;

    const four = getRemainder(10, 6);
    const one = getRemainder(5, 4);
    const zero = getRemainder(100, 10);

    expect(four).toBe(4);
    expect(one).toBe(1);
    expect(zero).toBe(0);

  })

  it('should be even', () => {
    const isEven = helpers.isEven;

    const sixty = isEven(60);
    const five = isEven(5);
    const eighty = isEven(80);

    expect(sixty).toBe(true);
    expect(five).toBe(false);
    expect(eighty).toBe(true);

  })

  it('should be odd', () => {
    const isOdd = helpers.isOdd;

    const sixty = isOdd(60);
    const five = isOdd(5);
    const eighty = isOdd(80);

    expect(sixty).toBe(false);
    expect(five).toBe(true);
    expect(eighty).toBe(false);

  })

  it('should be squared', () => {
    const square = helpers.square;

    const sixtyFour = square(8);
    const twentyFive = square(5);
    const oneSixtyNine = square(13);

    expect(sixtyFour).toBe(64);
    expect(twentyFive).toBe(25);
    expect(oneSixtyNine).toBe(169);

  })

  it('should be cubed', () => {
    const cube = helpers.cube;

    const eight = cube(2);
    const oneTwentyFive = cube(5);
    const threeFourtyThree = cube(7);

    expect(eight).toBe(8);
    expect(oneTwentyFive).toBe(125);
    expect(threeFourtyThree).toBe(343);

  })

  it('should be raised to the power', () => {
    const raiseToPower = helpers.raiseToPower;

    const eight = raiseToPower(2, 3);
    const oneTwentyFive = raiseToPower(5, 3);
    const threeFourtyThree = raiseToPower(7, 3);

    expect(eight).toBe(8);
    expect(oneTwentyFive).toBe(125);
    expect(threeFourtyThree).toBe(343);

  })

  it('should return the number rounded to the nearest whole number', () => {
    const roundNumber = helpers.roundNumber;

    const eight = roundNumber(7.8);
    const sixteen = roundNumber(16.3);
    const four = roundNumber(4.4999999);

    expect(eight).toBe(8);
    expect(sixteen).toBe(16);
    expect(four).toBe(4);
  })

  it('should return the number rounded up', () => {
    const roundUp = helpers.roundUp;

    const eight = roundUp(7.8);
    const sixteen = roundUp(15.3);
    const four = roundUp(3.4999999);

    expect(eight).toBe(8);
    expect(sixteen).toBe(16);
    expect(four).toBe(4);
  })

  it('should return the string with an ! added on', () => {
    const addExclamationPoint = helpers.addExclamationPoint;

    const eight = addExclamationPoint(8);
    const sixteen = addExclamationPoint('16');
    const city = addExclamationPoint('new york');

    expect(eight).toBe('8!');
    expect(sixteen).toBe('16!');
    expect(city).toBe('new york!');
  })

  it('should return a string with the 2 given names combined', () => {
    const combineNames = helpers.combineNames;

    const justin = combineNames('Justin', 'Mathew');
    const jack = combineNames('jack', 'dawson');
    const jekm = combineNames('je', 'km');

    expect(justin).toBe('Justin Mathew');
    expect(jack).toBe('jack dawson');
    expect(jekm).toBe('je km');
  })

  it('should return a greeting with the given name', () => {
    const getGreeting = helpers.getGreeting;

    const justin = getGreeting('Justin');
    const jack = getGreeting('jack');
    const jekm = getGreeting('jekm');

    expect(justin).toBe('Hello Justin!');
    expect(jack).toBe('Hello jack!');
    expect(jekm).toBe('Hello jekm!');
  })

  it('should return area of the rectangle given', () => {
    const getRectangleArea = helpers.getRectangleArea;

    const twelve = getRectangleArea(4, 3);
    const nine = getRectangleArea(3, 3);
    const fifteen = getRectangleArea(3, 5);

    expect(twelve).toBe(12);
    expect(nine).toBe(9);
    expect(fifteen).toBe(15);
  })

  it('should return area of the triangle given', () => {
    const getTriangleArea = helpers.getTriangleArea;

    const six = getTriangleArea(4, 3);
    const nine = getTriangleArea(3, 6);
    const fifteen = getTriangleArea(3, 10);

    expect(six).toBe(6);
    expect(nine).toBe(9);
    expect(fifteen).toBe(15);
  })

  it('should return area of the circle given', () => {
    const getCircleArea = helpers.getCircleArea;

    const threeSquaredPi = getCircleArea(3);
    const sixSquaredPi = getCircleArea(6);
    const tenSquaredPi = getCircleArea(10);

    expect(threeSquaredPi).toBe(9 * Math.PI);
    expect(sixSquaredPi).toBe(36 * Math.PI);
    expect(tenSquaredPi).toBe(100 * Math.PI);
  })

  it('should return volume of the prism given', () => {
    const getRectangularPrismVolume = helpers.getRectangularPrismVolume;

    const twentySeven = getRectangularPrismVolume(3, 3, 3);
    const thirtySix = getRectangularPrismVolume(6, 3, 2);
    const hundred = getRectangularPrismVolume(10, 5, 2);

    expect(twentySeven).toBe(27);
    expect(thirtySix).toBe(36);
    expect(hundred).toBe(100);
  })

})