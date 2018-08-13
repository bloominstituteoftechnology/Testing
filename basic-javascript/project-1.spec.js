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


})