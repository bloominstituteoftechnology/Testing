const funcs = require('./project-1');
const num = 13;
const altNum = 21;
//notes to c&p for understanding
// arrange

// act

// assert

// it('', () => {
//   const expected = ;
//   const = funcs.
//   const actual = ()
//   expect(actual).toBe(expected)
// });

it('Runs the tests', () => {});

describe('Function: multiplyByTen', () => {
  const numbers = num;
  it('Multiplies by 10', () => {
    // arrange
    const expected = 130;
    const alt = 210;
    const multiplyByTen = funcs.multiplyByTen;
    // act
    const actual = multiplyByTen(num);
    const actualAlt = multiplyByTen(altNum)
    // assert
    expect(actual).toBe(expected);
  });
  it('Checks identity', () => {
    
    const actual = numbers;
    expect(numbers).toBe(actual)
  }) 
  it('checks that it is a string', () => {
    expect(typeof 'num').toBe('string')
  })
});

describe('Function: subtractFive', () => {
  it('Should subtract five from num', () => {
    const expected = 42;
    const alt = 29;
    const subtractFive = funcs.subtractFive;
    const actual = subtractFive(47);
    const actualAlt = subtractFive(34)
    expect(actual).toBe(expected);
  });
});

describe('Function: areSameLength', () => {
  it('Strings are same length', () => {
    const expected = true;
    const alt = false;
    const areSameLength = funcs.areSameLength;
    const actual = areSameLength('liz', 'lol');
    const actualAlt = areSameLength('Alex', 'Elizabeth');
    expect(actual).toBe(expected);
    expect(actualAlt).toBe(alt);
  });
});

describe('Function: areEqual', () => {
  it('Numbers are equal', () => {
    const expected = true;
    const areEqual = funcs.areEqual;
    const actual = areEqual(12, 12);
    expect(actual).toBe(expected);
  });
});

describe('Function: lessThanNinety', () => {
  it('Number is less than 90', () => {
    const expected = false;
    const lessThanNinety = funcs.lessThanNinety;
    const actual = lessThanNinety(99);
    expect(actual).toBe(expected);
  });
});

describe('Function: greaterThanFifty', () => {
  it('Should return true if number is greater than fifty', () => {
    const expected = true;
    const greaterThanFifty = funcs.greaterThanFifty;
    const actual = greaterThanFifty(52);
    expect(actual).toBe(expected);
  });
});

describe('Function: add', () => {
  it('Should add two numbers', () => {
    const expected = 42;
    const add = funcs.add;
    const actual = add(7, 35);
    expect(actual).toBe(expected);
  });
});

describe('Function: subtract', () => {
  it('Should subtract two numbers', () => {
    const expected = 21;
    const subtract = funcs.subtract;
    const actual = subtract(42, 21);
    expect(actual).toBe(expected);
  });
});

describe('Function: divide', () => {
  it('Should divide two numbers', () => {
    const expected = 1;
    const divide = funcs.divide;
    const actual = divide(7, 7);
    expect(actual).toBe(expected);
  });
});

describe('Function: multiply', () => {
  it('Should multiply two numbers', () => {
    const expected = 12;
    const multiply = funcs.multiply;
    const actual = multiply(3, 4);
    expect(actual).toBe(expected);
  });
});

describe('Function: getRemainder', () => {
  it('Should get the remainder', () => {
    const expected = 3;
    const getRemainder = funcs.getRemainder;
    const actual = (11, 3);
    expect(actual).toBe(expected);
  });
});

describe('Function: isEven', () => {
  it('Should return true if number is even', () => {
    const expected = true;
    const isEven = funcs.isEven;
    const actual = isEven(8);
    expect(actual).toBe(expected);
  });
});

describe('Function: isOdd', () => {
  it('Should return true if number is odd', () => {
    const expected = true;
    const isOdd = funcs.isOdd;
    const actual = isOdd(3);
    expect(actual).toBe(expected);
  });
});

describe('Function: square', () => {
  it('Should return num squared', () => {
    const expected = 144;
    const square = funcs.square;
    const actual = square(12);
    expect(actual).toBe(expected);
  });
});

describe('Function: cube', () => {
  it('Should return num cubed', () => {
    const expected = 8;
    const cube = funcs.cube;
    const actual = cube(2);
    expect(actual).toBe(expected);
  });
});

describe('Function: raiseToPower', () => {
  it('Should raise num the power of the exponent', () => {
    const expected = 8;
    const raiseToPower = funcs.raiseToPower;
    const actual = raiseToPower(2, 3);
    expect(actual).toBe(expected);
  });
});

describe('Function: roundNumber', () => {
  it('Should round number to the closest whole number', () => {
    const expected = 42;
    const roundNumber = funcs.roundNumber;
    const actual = roundNumber(42.42);
    expect(actual).toBe(expected);
  });
});

describe('Function: roundUp', () => {
  it('Should round number up', () => {
    const expected = 42;
    const roundUp = funcs.roundUp;
    const actual = roundUp(41.42);
    expect(actual).toBe(expected);
  });
});

describe('Function: addExclamationPoint', () => {
  it('Should add an exclamation Point', () => {
    const expected = 'ModestMouse!';
    const addExclamationPoint = funcs.addExclamationPoint;
    const actual = addExclamationPoint('ModestMouse');
    expect(actual).toBe(expected);
  });
});

describe('Function: areSameLength', () => {
  it('Should combine the given names', () => {
    const expected = 'modest mouse';
    const combineNames = funcs.combineNames;
    const actual = combineNames('modest', 'mouse');
    expect(actual).toBe(expected);
  });
});

describe('Function: getGreeting', () => {
  it('getGreeting', () => {
    const expected = 'Hello Liz!';
    const getGreeting = funcs.getGreeting;
    const actual = getGreeting('Liz');
    expect(actual).toBe(expected);
  });
});

describe('Function: getRectangleArea', () => {
  it('Should return the area of a rectangle', () => {
    const expected = 120;
    const getRectangleArea = funcs.getRectangleArea;
    const actual = getRectangleArea(12, 10);
    expect(actual).toBe(expected);
  });
});

describe('Function: getTriangleArea', () => {
  it('Should return the area of a triangle', () => {
    const expected = 136.5;
    const getTriangleArea = funcs.getTriangleArea;
    const actual = getTriangleArea(13, 21);
    expect(actual).toBe(expected);
  });
});

describe('Function: getCircleArea', () => {
  it('Should return the area of a circle', () => {
    const expected = 1385.442360233099;
    const getCircleArea = funcs.getCircleArea;
    const actual = getCircleArea(21, 7);
    expect(actual).toBe(expected);
  });
});

describe('Function: getRectangularPrismVolume', () => {
  it('Should get the volume of a rectangular prism', () => {
    const expected = 23.4375;
    const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
    const actual = getRectangularPrismVolume(5, 1.25, 3.75);
    expect(actual).toBe(expected);
  });
});
