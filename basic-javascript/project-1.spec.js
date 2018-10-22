const helpers = require('./project-1');

// start testing!

describe('tests for multiplyByTen()', () => {

  test('should multiply provided number by 10', () => {
    const expected = 50;
    const actual = helpers.multiplyByTen(5);

    expect(actual).toEqual(expected);
  });

  test('should return NaN when called with no value', () => {
    const product = helpers.multiplyByTen();

    expect(product).toBe(NaN);

    // not changing the code for this one; NaN makes more sense to me than 0 when given no input
  });

  // testing a few different input types; should throw error for any non-number

  test('should throw error when called with a string', () => {
    expect(() => {
      helpers.multiplyByTen('string');
    }).toThrow();
  });

  test('should throw error when called with a boolean', () => {
    expect(() => {
      helpers.multiplyByTen(true);
    }).toThrow();
  });

  test('should throw error when called with undefined variables', () => {
    expect(() => {
      helpers.multiplyByTen(undefinedVariable);
    }).toThrow();
  });

});

describe('tests for subtractFive()', () => {
  test('should return given number minus five', () => {
    const expected = 45;
    const actual = helpers.subtractFive(50);

    expect(actual).toEqual(expected);
  });

  test('should return NaN when called with no value', () => {
      const difference = helpers.subtractFive();

      expect(difference).toBe(NaN);
  });

  // same type-checking tests as multiplyByTen()

  test('should throw error when called with a string', () => {
    expect(() => {
      helpers.subtractFive('string');
    }).toThrow();
  });

  test('should throw error when called with a boolean', () => {
    expect(() => {
      helpers.subtractFive(true);
    }).toThrow();
  });

  test('should throw error when called with undefined variables', () => {
    expect(() => {
      helpers.subtractFive(undefinedVariable);
    }).toThrow();
  });

});

// starting with single tests from here on out in the interest of time

describe('tests of equality and inequality', () => {

  test('should return strings of same length', () => {
    const one = 'testone';
    const two = 'testtwo';
    const equal = helpers.areSameLength(one.length, two.length);

    expect(equal).toBe(true);
  });

  test('should return numbers of equal value', () => {
    const x = 3;
    const y = 3;
    const equalValue = helpers.areEqual(x, y);

    expect(x).toEqual(y);
  });

  test('should be true when given number is less than 90', () => {
    const isLess = helpers.lessThanNinety(45);

    expect(isLess).toBe(true);
  });

  test('should be true when given number is greater than 50', () => {
    const isGreater = helpers.greaterThanFifty(55);

    expect(isGreater).toBe(true);
  });

}); // equality/inequality

describe('basic math operations', () => {

  test('should return the sum of two numbers', () => {
    const x = 10;
    const y = 5;
    const sum = helpers.add(x, y);

    expect(sum).toBe(15);

  });

  test('should return the difference between two numbers', () => {
    const x = 10;
    const y = 5;
    const difference = helpers.subtract(x, y);

    expect(difference).toBe(5);
  });

  test('should return the product of two numbers', () => {
    const x = 10;
    const y = 5;
    const product = helpers.multiply(x, y);

    expect(product).toBe(50);
  });

  test('should return the quotient of two numbers', () => {
    const x = 10;
    const y = 5;
    const quotient = helpers.divide(x, y);

    expect(quotient).toBe(2);
  });

  test('should return the remainder after dividing two numbers', () => {
    const x = 10;
    const y = 3;
    const modulus = helpers.getRemainder(x, y);

    expect(modulus).toBe(1);
  });

}); // basic math operations

describe('even and odd tests', () => {

  test('should return true if a number is even', () => {
    const num = 4;
    const even = helpers.isEven(num);

    expect(even).toBe(true);
  });

  test('should return true if a number is odd', () => {
    const num = 11;
    const odd = helpers.isOdd(num);

    expect(odd).toBe(true);
  });

});

describe('exponential operations', () => {

  test('should return the square of a given number', () => {
    const num = 3;
    const squared = helpers.square(num);

    expect(squared).toBe(9);
  });

  test('should return the cube of a given number', () => {
    const num = 4;
    const cubed = helpers.cube(num);

    expect(cubed).toBe(64);
  });

  test('should raise the number to the power of the given exponent', () => {
      const num = 3;
      const raiseTo = 4;
      const raised = helpers.raiseToPower(num, raiseTo);

      expect(raised).toBe(81);
  });

}); // exponential operations

describe('rounding operations', () => {

  test('should round the number', () => {
    const num = 9.7;
    const numDown = 9.2; // testing rounding down as well
    const rounded = helpers.roundNumber(num);
    const roundedDown = helpers.roundNumber(numDown);

    expect(rounded).toBe(10);
    expect(roundedDown).toBe(9);
  });

  test('should round the number upwards only', () => {
    const num = 9.7;
    const numStillUp = 4.2;
    const rounded = helpers.roundUp(num);
    const roundedLower = helpers.roundUp(numStillUp);

    expect(rounded).toBe(10);
    expect(roundedLower).toBe(5);
  });

}); // rounding operations

describe('simple string operations', () => {

  test('should add an exclamation point at the end of a given string', () => {
    const string = 'exclamify me';
    const withExcl = helpers.addExclamationPoint(string);

    expect(withExcl).toBe('exclamify me!');
  });

  test('should return two names concatenated', () => {
    const nameOne = 'Evan';
    const nameTwo = 'EvanAgain';
    const combined = helpers.combineNames(nameOne, nameTwo);

    expect(combined).toBe('Evan EvanAgain');
  });

  test('should return a personalized greeting with user name', () => {
    const name = 'Evan';
    const greeting = helpers.getGreeting(name);

    expect(greeting).toBe('Hello Evan!');
  });

}); // simple string operations

describe('geometrical operations', () => {

  test('should return the area of a rectangle with given length and width', () => {
    const length = 5;
    const width = 6;
    const area = helpers.getRectangleArea(length, width);

    expect(area).toEqual(30);
  });

  test('should return the area of a triangle with given base and height', () => {
    const base = 3;
    const height = 4;
    const area = helpers.getTriangleArea(base, height);

    expect(area).toEqual(6);
  });

  test('should return the area of a circle with given radius', () => {
    const radius = 10;
    const area = helpers.getCircleArea(radius);

    expect(area).toEqual(314.1592653589793); // with more time, will add other tests to simplify this number
  });

  test('should return the volume of a rectangular prism with given width, height, and length', () => {
    const width = 5;
    const height = 3;
    const length = 5;
    const volume = helpers.getRectangularPrismVolume(length, width, height);

    expect(volume).toEqual(75);
  });

}); // geometrical operations
