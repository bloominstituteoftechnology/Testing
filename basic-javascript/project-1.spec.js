const helpers = require('./project-1');

// start testing!
describe('Jest', () => {
  test('jest runs', () => {});
});

describe('multiplyByTen', () => {
  it('should multiply input by ten', () => {
    // arrange
    const multiplyByTen = helpers.multiplyByTen;

    //act
    const twenty = multiplyByTen(2);

    //assert
    expect(twenty).toEqual(20);
  });
});

describe('subtractFive', () => {
  it('should subtract 5 from input', () => {
    // arrange
    const subtractFive = helpers.subtractFive;

    //act
    const negativeThree = subtractFive(2);

    //assert
    expect(negativeThree).toEqual(-3);
  });
});

describe('areSameLength', () => {
  it('check if two strings are the same length', () => {
    // arrange
    const areSameLength = helpers.areSameLength;

    //act
    const stringOne = '1fishy';
    const stringTwo = 'sticks';

    const checkLength = areSameLength(stringOne, stringTwo);

    //assert
    expect(checkLength).toBe(true);
  });
});

describe('areSameLength', () => {
  it('check if two strings are the same length', () => {
    // arrange
    const areSameLength = helpers.areSameLength;

    //act
    const stringOne = '1fishy';
    const stringTwo = 'sticks';

    const checkLength = areSameLength(stringOne, stringTwo);

    //assert
    expect(checkLength).toBe(true);
  });
});

describe('areEqual', () => {
  it('check if two numbers are equal', () => {
    // arrange
    const areEqual = helpers.areEqual;

    //act
    const numOne = 7;
    const numTwo = 7;

    const checkSameNum = areEqual(numOne, numTwo);

    //assert
    expect(checkSameNum).toBe(true);
  });
});

describe('lessThanNinety', () => {
  it('check if num is <90', () => {
    // arrange
    const lessThanNinety = helpers.lessThanNinety;

    //act
    const numOne = 89;

    const lessThanNinetyCheck = lessThanNinety(numOne);

    //assert
    expect(lessThanNinetyCheck).toBe(true);
  });
});

describe('greaterThanFifty', () => {
  it('check if num is >50', () => {
    // arrange
    const greaterThanFifty = helpers.greaterThanFifty;

    //act
    const numOne = 51;

    const lessThanFiftyCheck = greaterThanFifty(numOne);

    //assert
    expect(lessThanFiftyCheck).toBe(true);
  });
});

describe('add', () => {
  it('adds two numbers', () => {
    // arrange
    const add = helpers.add;

    //act
    const numOne = 51;
    const numTwo = 2;

    const fiftyThree = add(numOne, numTwo);

    //assert
    expect(fiftyThree).toEqual(53);
  });
});

describe('add', () => {
  it('adds two numbers', () => {
    // arrange
    const add = helpers.add;

    //act
    const numOne = 51;
    const numTwo = 2;

    const fiftyThree = add(numOne, numTwo);

    //assert
    expect(fiftyThree).toEqual(53);
  });
});

describe('subtract', () => {
  it('subtracts two numbers', () => {
    // arrange
    const subtract = helpers.subtract;

    //act
    const numOne = 55;
    const numTwo = 2;

    const fiftyThree = subtract(numOne, numTwo);

    //assert
    expect(fiftyThree).toEqual(53);
  });
});

describe('divide', () => {
  it('divides two numbers', () => {
    // arrange
    const divide = helpers.divide;

    //act
    const numOne = 10;
    const numTwo = 2;

    const five = divide(numOne, numTwo);

    //assert
    expect(five).toEqual(5);
  });
});

describe('multiply', () => {
  it('multiplies two numbers', () => {
    // arrange
    const multiply = helpers.multiply;

    //act
    const numOne = 10;
    const numTwo = 2;

    const twenty = multiply(numOne, numTwo);

    //assert
    expect(twenty).toEqual(20);
  });
});

describe('getRemainder', () => {
  it('gets the Remainder of two numbers', () => {
    // arrange
    const getRemainder = helpers.getRemainder;

    //act
    const numOne = 10;
    const numTwo = 3;

    const one = getRemainder(numOne, numTwo);

    //assert
    expect(one).toEqual(1);
  });
});

describe('isEven', () => {
  it('checks if a number is even', () => {
    // arrange
    const isEven = helpers.isEven;

    //act
    const numOne = 10;

    const trueifEven = isEven(numOne);

    //assert
    expect(trueifEven).toEqual(true);
  });
});

describe('isOdd', () => {
  it('checks if a number is odd', () => {
    // arrange
    const isOdd = helpers.isOdd;

    //act
    const numOne = 11;

    const trueifOdd = isOdd(numOne);

    //assert
    expect(trueifOdd).toEqual(true);
  });
});

describe('square', () => {
  it('returns a number squared', () => {
    // arrange
    const square = helpers.square;

    //act
    const numOne = 3;

    const nine = square(numOne);

    //assert
    expect(nine).toEqual(9);
  });
});

describe('cube', () => {
  it('returns a number cubed', () => {
    // arrange
    const cube = helpers.cube;

    //act
    const numOne = 3;

    const twentySeven = cube(numOne);

    //assert
    expect(twentySeven).toEqual(27);
  });
});

describe('raiseToPower', () => {
  it('returns a num raised to an exponent', () => {
    // arrange
    const raiseToPower = helpers.raiseToPower;

    //act
    const numOne = 3;
    const exponentOne = 3;

    const twentySeven = raiseToPower(numOne, exponentOne);

    //assert
    expect(twentySeven).toEqual(27);
  });
});

describe('roundNumber', () => {
  it('returns a whole number given a number', () => {
    // arrange
    const roundNumber = helpers.roundNumber;

    //act
    const numOne = 3.25;

    const three = roundNumber(numOne);

    //assert
    expect(three).toEqual(3);
  });
});

describe('roundUp', () => {
  it('returns a whole number given a number, rounding up', () => {
    // arrange
    const roundUp = helpers.roundUp;

    //act
    const numOne = 3.25;

    const four = roundUp(numOne);

    //assert
    expect(four).toEqual(4);
  });
});

describe('addExclamationPoint', () => {
  it('Adds an exclamation point to a string and returns new string', () => {
    // arrange
    const addExclamationPoint = helpers.addExclamationPoint;

    //act
    const strOne = "You're the best";

    const exclamationAdded = addExclamationPoint(strOne);

    //assert
    expect(exclamationAdded).toBe("You're the best!");
  });
});

describe('combineNames', () => {
  it('Given two strings it combines and returns them as one', () => {
    // arrange
    const combineNames = helpers.combineNames;

    //act
    const strOne = "You're the best";
    const strTwo = 'around!';

    const oneName = combineNames(strOne, strTwo);

    //assert
    expect(oneName).toBe("You're the best around!");
  });
});

describe('getGreeting', () => {
  it(`Adds 'hello' in front of input string`, () => {
    // arrange
    const getGreeting = helpers.getGreeting;

    //act
    const strOne = 'Baloney';

    const helloName = getGreeting(strOne);

    //assert
    expect(helloName).toBe('Hello Baloney!');
  });
});

describe('getRectangleArea', () => {
  it(`multiplies two nums`, () => {
    // arrange
    const getRectangleArea = helpers.getRectangleArea;

    //act
    const numOne = 5;
    const numTwo = 3;

    const fifteen = getRectangleArea(numOne, numTwo);

    //assert
    expect(fifteen).toEqual(15);
  });
});

describe('getTriangleArea', () => {
  it(`multiplies base * height * 0.5`, () => {
    // arrange
    const getTriangleArea = helpers.getTriangleArea;

    //act
    const numOne = 5;
    const numTwo = 2;

    const five = getTriangleArea(numOne, numTwo);

    //assert
    expect(five).toEqual(5);
  });
});

describe('getCircleArea', () => {
  it(`multiplies pi * radius squared`, () => {
    // arrange
    const getCircleArea = helpers.getCircleArea;

    //act
    const numOne = 5;

    const areaOfCircleWithRadiusFive = getCircleArea(numOne);

    //assert
    expect(areaOfCircleWithRadiusFive).toEqual(78.53981633974483);
  });
});

describe('getRectangularPrismVolume', () => {
  it(`multiplies three nums together`, () => {
    // arrange
    const getRectangularPrismVolume = helpers.getRectangularPrismVolume;

    //act
    const numOne = 5;
    const numTwo = 2;
    const numThree = 3;

    const thirty = getRectangularPrismVolume(numOne, numTwo, numThree);

    //assert
    expect(thirty).toEqual(30);
  });
});
