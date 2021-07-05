const helpers = require('./project-1');

// start testing!
describe('multiplyByTen', () => {
  it('should multiply the number passed by ten', () => {
   expect(helpers.multiplyByTen(5)).toEqual(50);
   expect(helpers.multiplyByTen(10)).toEqual(100);
   expect(helpers.multiplyByTen(0)).toEqual(0);
  })
})

describe('subtractFive', () => {
  it('should subtract from the number passed by 5', () => {
    expect(helpers.subtractFive(10)).toEqual(5);
    expect(helpers.subtractFive(7)).toEqual(2);
    expect(helpers.subtractFive(0)).toEqual(-5);
  })
})

describe('areSameLength', () => {
  it('should evaluate if 2 strings passed are the same length', () => {
    expect(helpers.areSameLength('AA', 'BB')).toBe(true);
    expect(helpers.areSameLength('AA', 'B')).toBe(false);
  })
})

describe('areEqual', () => {
  it('should evaluate if both arguments passed are equal', () => {
    expect(helpers.areEqual(true, true)).toBe(true);
    expect(helpers.areEqual(2, 2)).toBe(true);
    expect(helpers.areEqual('A', 'A')).toBe(true);
    expect(helpers.areEqual(true, false)).toBe(false);
    expect(helpers.areEqual(1, 2)).toBe(false);
    expect(helpers.areEqual('A', 'B')).toBe(false);
  })
})

describe('lessThanNinety', () => {
  it('should evaluate if the number passed is less than 90', () => {
    expect(helpers.lessThanNinety(89.9)).toBe(true);
    expect(helpers.lessThanNinety(90.1)).toBe(false);
  })
})

describe('greaterThanFifty', () => {
  it('should evaluate if the number passed is greater than 50', () => {
    expect(helpers.greaterThanFifty(50.1)).toBe(true);
    expect(helpers.greaterThanFifty(49.9)).toBe(false);
  })
})

describe('add', () => {
  it('should add the 2 numbers passed into a sum', () => {
    expect(helpers.add(2, 2)).toEqual(4);
    expect(helpers.add(15, 4)).toEqual(19);
    expect(helpers.add(4, -2)).toEqual(2);
  })
})

describe('subtract', () => {
  it('should find the difference between the 2 numbers passed', () => {
    expect(helpers.subtract(4, 2)).toEqual(2);
    expect(helpers.subtract(19, 4)).toEqual(15);
    expect(helpers.subtract(2, -2)).toEqual(4);
  })
})

describe('divide', () => {
  it('should find the quotient of the 2 numbers passed', () => {
    expect(helpers.divide(10, 5)).toEqual(2);
    expect(helpers.divide(10, -5)).toEqual(-2);
    expect(helpers.divide(10, 0)).toEqual(Infinity);
  })
})

describe('multiply', () => {
  it('should find the product of the 2 numbers passed', () => {
    expect(helpers.multiply(2, 2)).toEqual(4);
    expect(helpers.multiply(5, 10)).toEqual(50);
    expect(helpers.multiply(2, -2)).toEqual(-4);
  })
})

describe('getRemainder', () => {
  it('should find the remainder of the 2 passed numbers', () => {
    expect(helpers.getRemainder(10, 8)).toEqual(2);
    expect(helpers.getRemainder(10, -8)).toEqual(2);
  })
})

describe('isEven', () => {
  it('should evaluate if the number passed is even', () => {
    expect(helpers.isEven(4)).toBe(true);
    expect(helpers.isEven(5)).toBe(false);
  })
})

describe('isOdd', () => {
  it('should evaluate if the number passed is odd', () => {
    expect(helpers.isOdd(5)).toBe(true);
    expect(helpers.isOdd(4)).toBe(false);
  })
})

describe('square', () => {
  it('should return the number passed squared', () => {
    expect(helpers.square(10)).toEqual(100);
    expect(helpers.square(-10)).toEqual(100);
  })
})

describe('cube', () => {
  it('should return the number passed cubed', () => {
    expect(helpers.cube(10)).toEqual(1000);
    expect(helpers.cube(-10)).toEqual(-1000);
  })
})

describe('raiseToPower', () => {
  it('should raise the passed in number to the power of the passed in exponent', () => {
    expect(helpers.raiseToPower(10, 2)).toEqual(100);
    expect(helpers.raiseToPower(10, -2)).toEqual(0.01);
  })
})

describe('roundNumber', () => {
  it('should round the passed in number', () => {
    expect(helpers.roundNumber(1.5)).toEqual(2);
    expect(helpers.roundNumber(1.4)).toEqual(1);
    expect(helpers.roundNumber(-1.5)).toEqual(-1);
    expect(helpers.roundNumber(-1.6)).toEqual(-2);
  })
})

describe('roundUp', () => {
  it('should kill the weeds in your garden', () => {
    expect(helpers.roundUp(1.1)).toEqual(2);
    expect(helpers.roundUp(-0.5)).toEqual(-0);
  })
})

describe('addExclamationPoint', () => {
  it('should add ! to the passed in string', () => {
    expect(helpers.addExclamationPoint('Hello, world')).toBe('Hello, world!');
    expect(helpers.addExclamationPoint('')).toBe('!');
  })
})

describe('combineNames', () => {
  it('should combine the first and last name passed into one string', () => {
    expect(helpers.combineNames('Mark', 'Hermansen')).toBe('Mark Hermansen');
  })
})

describe('getGreeting', () => {
  it('should interpolate the passed in string to the greeting', () => {
    expect(helpers.getGreeting('Mark')).toBe('Hello Mark!');
  })
})

describe('getRectangleArea', () => {
  it('should return the product of the passed in length and width', () => {
    expect(helpers.getRectangleArea(2, 4)).toEqual(8);
  })
})

describe('getTriangleArea', () => {
  it('should return the product of the passed in base and height by 0.5', () => {
    expect(helpers.getTriangleArea(2, 4)).toEqual(4);
  })
})

describe('getCircleArea', () => {
  it('should return Pi * the passed in radius squared', () => {
    expect(helpers.getCircleArea(3)).toEqual(28.274333882308138);
  })
})

describe('getRectangularPrismVolume', () => {
  it('should return the product of the passed in width, height and length', () => {
    expect(helpers.getRectangularPrismVolume(2, 5, 10)).toEqual(100);
  })
})