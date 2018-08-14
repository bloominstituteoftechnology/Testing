const helpers = require('./project-1');

describe('multiply by ten', () => {
  test('Should multiply a number by ten', () => {
    expect(helpers.multiplyByTen(2)).toBe(20);
    expect(helpers.multiplyByTen(10)).toBe(100);
    expect(helpers.multiplyByTen(8.5)).toBe(85);
    expect(helpers.multiplyByTen(-6)).toBe(-60);
  })
  test('Should return false if value is undefined', () => {
    expect(helpers.multiplyByTen(undefined)).toBe(false)
  })
})

describe('subtract by 5', () => {
  test('Should subtract 5 from a number', () => {
    expect(helpers.subtractFive(25)).toBe(20);
    expect(helpers.subtractFive(105)).toBe(100);
    expect(helpers.subtractFive(90)).toBe(85);
    expect(helpers.subtractFive(-10)).toBe(-15);
  })
  test('Should return false if value is undefined', () => {
    expect(helpers.subtractFive(undefined)).toBe(false)
  })
})

describe('same length', () => {
  test('Strings should be the same length', () => {
    expect(helpers.areSameLength('abc', 'def')).toBe(true);
    expect(helpers.areSameLength('12345', '1234567')).toBe(false);
  })
  test('Should return false if value is undefined', () => {
    expect(helpers.areSameLength(undefined)).toBe(false)
  })
})

describe('are equal', () => {
  test('Numbers should be equal', () => {
    expect(helpers.areEqual(14, 14)).toBe(true);
    expect(helpers.areEqual(1, 23455)).toBe(false);
  })
  test('Should return false if value is undefined', () => {
    expect(helpers.areEqual(undefined)).toBe(false)
  })
})

describe('is less than 90', () => {
  test('Number should be less than 90', () => {
    expect(helpers.lessThanNinety(2)).toBe(true);
    expect(helpers.lessThanNinety(108)).toBe(false);
  })
  test('Should return false if number is undefined', () => {
    expect(helpers.lessThanNinety(undefined)).toBe(false)
  })
})

describe('is greater than 50', () => {
  test('Number should be greater than 50', () => {
    expect(helpers.greaterThanFifty(2)).toBe(false);
    expect(helpers.greaterThanFifty(108)).toBe(true);
  })
  test('Should return false if number is undefined', () => {
    expect(helpers.greaterThanFifty(undefined)).toBe(false)
  })
})

describe('add two numbers', () => {
  test('Should return the sum of two numbers', () => {
    expect(helpers.add(2, 6)).toBe(8);
    expect(helpers.add(0, 44)).toBe(44);
    expect(helpers.add(-10, 5)).toBe(-5);
  })
  test('Should return false if a number is undefined', () => {
    expect(helpers.add(undefined)).toBe(false)
  })
})

describe('subtract two numbers', () => {
  test('Should return the one number after being subtracted from the other', () => {
    expect(helpers.subtract(12, 6)).toBe(6);
    expect(helpers.subtract(0, 44)).toBe(-44);
    expect(helpers.subtract(200, 5)).toBe(195);
  })
  test('Should return false if a number is undefined', () => {
    expect(helpers.subtract(undefined)).toBe(false)
  })
})

describe('divide two numbers', () => {
  test('Should return the quotient of one number from the other', () => {
    expect(helpers.divide(12, 6)).toBe(2);
    expect(helpers.divide(12, 12)).toBe(1);
  })
  test('Should return false if a number is undefined', () => {
    expect(helpers.divide(undefined)).toBe(false)
  })
})

describe('multiply two numbers', () => {
  test('Should return the product of two numbers', () => {
    expect(helpers.multiply(2, 6)).toBe(12);
    expect(helpers.multiply(12, 12)).toBe(144);
  })
  test('Should return false if a number is undefined', () => {
    expect(helpers.multiply(undefined)).toBe(false)
  })
})

describe('remainder of two numbers', () => {
  test('Should return the remainder of two numbers', () => {
    expect(helpers.getRemainder(15, 3)).toBe(0);
    expect(helpers.getRemainder(25, 12)).toBe(1);
    expect(helpers.getRemainder(14, 3)).toBe(2);
  })
  test('Should return false if a number is undefined', () => {
    expect(helpers.getRemainder(undefined)).toBe(false)
  })
})

describe('is the number even', () => {
  test('Should return true if a number is even', () => {
    expect(helpers.isEven(4)).toBe(true);
    expect(helpers.isEven(27)).toBe(false);
    expect(helpers.isEven(144)).toBe(true);
  })
  test('Should return false if the number is undefined', () => {
    expect(helpers.isEven(undefined)).toBe(false)
  })
})

describe('is the number odd', () => {
  test('Should return true if a number is odd', () => {
    expect(helpers.isOdd(4)).toBe(false);
    expect(helpers.isOdd(27)).toBe(true);
    expect(helpers.isOdd(144)).toBe(false);
  })
  test('Should return false if the number is undefined', () => {
    expect(helpers.isOdd(undefined)).toBe(false)
  })
})

describe('square a number', () => {
  test('Should return the number squared', () => {
    expect(helpers.square(8)).toBe(64);
    expect(helpers.square(12)).toBe(144);
  })
  test('Should return false if a number is undefined', () => {
    expect(helpers.square(undefined)).toBe(false)
  })
})

describe('cube a number', () => {
  test('Should return the number cubed', () => {
    expect(helpers.cube(8)).toBe(512);
    expect(helpers.cube(2)).toBe(8);
  })
  test('Should return false if a number is undefined', () => {
    expect(helpers.cube(undefined)).toBe(false)
  })
})

describe('raise a number to the power of another number', () => {
  test('Should return the number raised to the power of the exponent', () => {
    expect(helpers.raiseToPower(8, 2)).toBe(64);
    expect(helpers.raiseToPower(2, 5)).toBe(32);
  })
  test('Should return false if a number is undefined', () => {
    expect(helpers.raiseToPower(undefined)).toBe(false)
  })
})

describe('round number to closest whole number', () => {
  test('Should return the number rounded to the closest whole number', () => {
    expect(helpers.roundNumber(15)).toBe(15);
    expect(helpers.roundNumber(3.1412353212)).toBe(3);
    expect(helpers.roundNumber(3.6412353212)).toBe(4);
  })
  test('Should return false if a number is undefined', () => {
    expect(helpers.roundNumber(undefined)).toBe(false)
  })
})

describe('round number up to closest whole number', () => {
  test('Should return the number rounded up to the closest whole number', () => {
    expect(helpers.roundUp(15)).toBe(15);
    expect(helpers.roundUp(3.1412353212)).toBe(4);
    expect(helpers.roundUp(3.8412353212)).toBe(4);
  })
  test('Should return false if a number is undefined', () => {
    expect(helpers.roundUp(undefined)).toBe(false)
  })
})

describe('add exclamation point to end of string', () => {
  test('Should return the string with an exclamation point added to the end of it', () => {
    expect(helpers.addExclamationPoint('Hello')).toBe('Hello!');
    expect(helpers.addExclamationPoint('Goodbye')).toBe('Goodbye!');
  })
  test('Should return false if a number is undefined', () => {
    expect(helpers.addExclamationPoint(undefined)).toBe(false)
  })
})

describe('add exclamation point to end of string', () => {
  test('Should return the string with an exclamation point added to the end of it', () => {
    expect(helpers.addExclamationPoint('Hello')).toBe('Hello!');
    expect(helpers.addExclamationPoint('Goodbye')).toBe('Goodbye!');
  })
  test('Should return false if a number is undefined', () => {
    expect(helpers.addExclamationPoint(undefined)).toBe(false)
  })
})

describe('add hello to beginning of string', () => {
  test('Should return the string with a Hello at the beginning of it', () => {
    expect(helpers.getGreeting('Paul')).toBe('Hello Paul!');
    expect(helpers.getGreeting('Chuck')).toBe('Hello Chuck!');
  })
  test('Should return false if a number is undefined', () => {
    expect(helpers.getGreeting(undefined)).toBe(false)
  })
})

describe('find area of a rectangle', () => {
  test('Should return the area of a rectangle with the provided length and width', () => {
    expect(helpers.getRectangleArea(3, 6)).toBe(18);
    expect(helpers.getRectangleArea(4, 2)).toBe(8);
  })
  test('Should return false if length or width is undefined', () => {
    expect(helpers.getRectangleArea(undefined)).toBe(false)
  })
})

describe('find area of a triangle', () => {
  test('Should return the area of a triangle with the provided base and height', () => {
    expect(helpers.getTriangleArea(3, 6)).toBe(9);
    expect(helpers.getTriangleArea(4, 2)).toBe(4);
  })
  test('Should return false if base or height is undefined', () => {
    expect(helpers.getTriangleArea(undefined)).toBe(false)
  })
})

describe('find area of a circle', () => {
  test('Should return the area of a circle with the provided radius', () => {
    expect(helpers.getCircleArea(4)).toBe(50.26548245743669);
    expect(helpers.getCircleArea(8)).toBe(201.06192982974676);
  })
  test('Should return false if the radius is undefined', () => {
    expect(helpers.getCircleArea(undefined)).toBe(false)
  })
})

describe('find volume of a rectangular prism', () => {
  test('Should return the volume of a rectangular prism with the provided length, width, and height', () => {
    expect(helpers.getRectangularPrismVolume(5, 12, 2)).toBe(120);
    expect(helpers.getRectangularPrismVolume(2, 4, 1)).toBe(8);
  })
  test('Should return false if the width, height, or length are undefined', () => {
    expect(helpers.getRectangularPrismVolume(undefined)).toBe(false)
  })
})
