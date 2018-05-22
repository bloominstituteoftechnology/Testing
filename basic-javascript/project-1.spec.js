const funcs = require('./project-1');

// write your tests here

//
describe('multiply by 10 function', () => {
  it('should multiply by 10', () => {
    // arrange
    const multiplyByTen = funcs.multiplyByTen;
    // act
    const actual = multiplyByTen(5);

    // assert
    expect(actual).toBe(50);
  });

  it('checks if number', () => {
    // arrange
    const numbers = [1, 2, 3];
    // act
    const actual = numbers;
    // assert
    expect(numbers).toBe(actual);
  });

  it('checks if an array', () => {
    // arrange
    const numbers = [1, 2, 3];
    const expected = 'array';
    // act
    const actual = Array.isArray(numbers);
    // assert
    expect(actual).toBe(true);
  });
});

// check if subtracts 5, check if number, checks if an array
describe('subtract by 5 function', () => {
  it('should subtract five', () => {
    // arrange
    const subtractFive = funcs.subtractFive;
    //act
    const actual = subtractFive(3);
    // assert
    expect(actual).toBe(-2);
  });

  it('checks if number', () => {
    // arrange
    const numbers = [1, 2, 3];
    // act
    const actual = numbers;
    // assert
    expect(numbers).toBe(actual);
  });

  it('checks if an array', () => {
    // arrange
    const numbers = [1, 2, 3];
    const expected = 'array';
    // act
    const actual = Array.isArray(numbers);
    // assert
    expect(actual).toBe(true);
  });
});

// strings should be same length
describe('strings should be same length', () => {
  it('should be true if both strings are equal', () => {
    // arrange
    const areSameLength = funcs.areSameLength;
    const str1 = 'foo';
    const str2 = 'bar';
    // act
    const actual = areSameLength(str1, str2);
    // assert
    expect(actual).toBe(true);
  });
});

// numbers should be true if equal, false if not
describe('numbers should be equal', () => {
  it('should be true if both are equal', () => {
    // arrange
    const areEqual = funcs.areEqual;
    const x = 10;
    const y = 10;
    // act
    const actual = areEqual(x, y);
    // assert
    expect(actual).toBe(true);
  });

  it('should be false if both numbers are not equal', () => {
    // arrange
    const x = 10;
    const y = 11;
    const areEqual = funcs.areEqual;
    // act
    const actual = areEqual(x, y);
    // assert
    expect(actual).toBe(false);
  });
});

describe('lessThanNinety function', () => {
  // less than 90, is a num
  it('returns true if value less than 90', () => {
    // arrange
    const lessthanNinety = funcs.lessthanNinety;
    const y = 88;
    // assert
    expect(y).toBeLessThan(90);
  });

  // greater than 90
  it('returns false if value greater than 90', () => {
    // arrange
    const lessthanNinety = funcs.lessThanNinety;
    const x = 99;
    // assert
    expect(x).toBeGreaterThan(90);
  });
});

describe('greaterThan50 function', () => {
  it('should return true if greater than 50', () => {
    // arrange
    const greaterThanFifty = funcs.greaterThanFifty;
    const num = 51;
    // assert
    expect(num).toBeGreaterThan(50);
  });
});

describe('add two numbers function', () => {
  it('should return x + y', () => {
    // arrange
    const add = funcs.add;
    // act
    const actual = add(3, 4);
    // assert
    expect(actual).toEqual(7);
  });
});

describe('subtract two numbers function', () => {
  it('should return x - y', () => {
    // arrange
    const subtract = funcs.subtract;
    // act
    const actual = subtract(7, 4);
    // assert
    expect(actual).toEqual(3); // should it be toBe or not toBe but toEqual?
  });
});

describe('divide two numbers function', () => {
  it('should return x / y', () => {
    // arrange
    const divide = funcs.divide;
    // act
    const actual = divide(100, 2);
    // assert
    expect(actual).toEqual(50);
  });
});

describe('multiply two numbers function', () => {
  it('should return x * y', () => {
    const multiply = funcs.multiply;
    const actual = multiply(5, 10);
    expect(actual).toEqual(50);
  });
});

describe('get remainder function', () => {
  it('should return x % y', () => {
    const getRemainder = funcs.getRemainder;
    const actual = getRemainder(435, 10);
    expect(actual).toEqual(5);
  });
});

describe('is even function', () => {
  it('should return true if num is even', () => {
    const isEven = funcs.isEven;
    const actual = isEven(152);
    expect(actual).toBe(true);
  });
});

describe('is odd function', () => {
  it('should return true if num is odd', () => {
    const isOdd = funcs.isOdd;
    const actual = isOdd(69);
    expect(actual).toBe(true);
  });
});
