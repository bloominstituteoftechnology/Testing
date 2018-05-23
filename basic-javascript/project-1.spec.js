const funcs = require('./project-1');

// write your tests here
describe('multiplyByTen', () => {
  it('should multiply by 10', () => {
    const expected = 70;
    const multiply = funcs.multiplyByTen;
    
    const actual = multiply(7);
    
    expect(actual).toBe(expected);
  });
});

describe('subtractFive', () => {
  it('should subtract 5', () => {
    const expected = 344;
    const subtract = funcs.subtractFive;
    
    const actual = subtract(349);
    
    expect(actual).toEqual(expected);
  });
});

describe('areSameLength', () => {
  it('should have the same length', () => {
    const expected = 8;
    const areSameLength = funcs.areSameLength;
    
    const actual = 'myString';
    
    expect(actual).toHaveLength(expected);
  });
});

describe('areEqual', () => {
  it('should be equal', () => {
    const expected = false;
    const areEqual = funcs.areEqual;
    
    const actual = areEqual('string', 'myString');
    
    expect(actual).toEqual(expected);
  });
});

describe('lessThanNinety', () => {
  it('should be less than 90', () => {
    const expected = true;
    const lessThanNinety = funcs.lessThanNinety;
    
    const actual = lessThanNinety(56);
    
    expect(actual).toEqual(expected);
  });
});

describe('greaterThanFifty', () => {
  it('should be less than 90', () => {
    const expected = true;
    const greaterThanFifty = funcs.greaterThanFifty;
    
    const actual = greaterThanFifty(66);
    
    expect(actual).toEqual(expected);
  });
});

describe('add', () => {
  it('should add properly', () => {
    const expected = 46
    
    const add = funcs.add;
    
    const actual = add(17, 29);
    
    expect(actual).toBe(expected);
  });
});

describe('subtract', () => {
  it('should subtract properly', () => {
    const expected = 78;
    
    const subtract = funcs.subtract;
    
    const actual = subtract(123, 45);
    
    expect(actual).toBe(expected);
  });
});

describe('divide', () => {
  it('should divide properly', () => {
    const expected = 30
    
    const divide = funcs.divide;
    
    const actual = divide(660, 22);
    
    expect(actual).toBe(expected);
  });
});

describe('multiply', () => {
  it('should multiply properly', () => {
    const expected = 30
    
    const multiply = funcs.multiply;
    
    const actual = multiply(3, 10);
    
    expect(actual).toBe(expected);
  });
});

describe('getRemainder', () => {
  it('should getRemainder', () => {
    const expected = 3;
    
    const getRemainder = funcs.getRemainder;
    
    const actual = getRemainder(33, 10);
    
    expect(actual).toBe(expected);
  });
});

describe('isEven', () => {
  it('should check if number is even', () => {
    const expected = true;
    
    const isEven = funcs.isEven;
    
    const actual = isEven(30);
    
    expect(actual).toBe(expected);
  });
});

describe('isOdd', () => {
  it('should check if number is odd', () => {
    const expected = true;
    
    const isOdd = funcs.isOdd;
    
    const actual = isOdd(33);
    
    expect(actual).toBe(expected);
  });
});

describe('square', () => {
  it('should square any number', () => {
    const expected = 9;
    
    const square = funcs.square;
    
    const actual = square(3);
    
    expect(actual).toBe(expected);
  });
});

describe('cube', () => {
  it('should cube any number', () => {
    const expected = 27;
    
    const cube = funcs.cube;
    
    const actual = cube(3);
    
    expect(actual).toBe(expected);
  });
});

describe('raiseToPower', () => {
  it('should raiseToPower given exponent', () => {
    const expected = 81;
    
    const raiseToPower = funcs.raiseToPower;
    
    const actual = raiseToPower(3, 4);
    
    expect(actual).toBe(expected);
  });
});

describe('roundNumber', () => {
  it('should roundNumber any number', () => {
    const expected = 45;
    
    const roundNumber = funcs.roundNumber;
    
    const actual = roundNumber(45.1);
    
    expect(actual).toBe(expected);
  });
});

describe('roundUp', () => {
  it('should roundUp any number', () => {
    const expected = 787;
    
    const roundUp = funcs.roundUp;
    
    const actual = roundUp(786.1);
    
    expect(actual).toBe(expected);
  });
});

describe('addExclamationPoint', () => {
  it('should add Exclamation Point', () => {
    const expected = '!';
    
    const addExclamationPoint = funcs.addExclamationPoint;
    
    const actual = addExclamationPoint('Hello World');
    
    expect(actual).toContain(expected);
  });
});

describe('combineNames', () => {
  it('should add combineNames', () => {
    const expected = 'Hello World';
    
    const combineNames = funcs.combineNames;
    
    const actual = combineNames('Hello', 'World');
    
    expect(actual).toEqual(expected);
  });
});

describe('getGreeting', () => {
  it('should greet', () => {
    const expected = 'Hello stranger!';
    
    const getGreeting = funcs.getGreeting;
    
    const actual = getGreeting('stranger');
    
    expect(actual).toEqual(expected);
  });
});

describe('getRectangleArea', () => {
  it('should get Rectangle Area', () => {
    const expected = 66;
    
    const getRectangleArea = funcs.getRectangleArea;
    
    const actual = getRectangleArea(22, 3);
    
    expect(actual).toEqual(expected);
  });
});

describe('getTriangleArea', () => {
  it('should get Triangle Area', () => {
    const expected = 44;
    
    const getTriangleArea = funcs.getTriangleArea;
    
    const actual = getTriangleArea(22, 4);
    
    expect(actual).toEqual(expected);
  });
});

describe('getCircleArea', () => {
  it('should get get Circle Area ', () => {
    const expected = 1134;
    
    const getCircleArea = funcs.getCircleArea;
    
    const actual = getCircleArea(19);
    
    expect(actual).toBeCloseTo(expected, 0);
  });
});

describe('getRectangularPrismVolume', () => {
  it('should getRectangularPrismVolume', () => {
    const expected = 60;
    
    const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
    
    const actual = getRectangularPrismVolume(5, 3, 4);
    
    expect(actual).toBeCloseTo(expected, 0);
  });
});
