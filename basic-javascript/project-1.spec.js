const helpers = require('./project-1');

// start testing!


test('multiplyByTen', () => {
    // Arrange
    const input = 5;
    const expected = 50;

    // Act
    let actual = helpers.multiplyByTen(input);

    // Assert
    expect(actual).toBe(expected);
});

test('subtractFive', () => {
    // Arrange
    const input = 50;
    const expected = 45;

    // Act
    let actual = helpers.subtractFive(input);

    // Assert
    expect(actual).toBe(expected);
});

test('areSameLength', () => {
    // Arrange
    const input1 = "wow";
    const input2 = "who";
    const expected = true;

    // Act
    let actual = helpers.areSameLength(input1, input2);

    // Assert
    expect(actual).toBe(expected);
});

test("strict equals", () => {
    const x = 10;
    const y = 10;
  
    expect(helpers.areEqual(x, y)).toBe(true);
  });

describe("lessThanNinety", () => {
    test("70 < 90", () => {
      expect(helpers.lessThanNinety(70)).toBe(true);
    });
    test("100 < 90", () => {
      expect(helpers.lessThanNinety(100)).toBe(false);
    });
  });
  
  describe("greaterThanFifty", () => {
    test("100 > 50", () => {
      expect(helpers.greaterThanFifty(100)).toBe(true);
    });
    test("10 > 50", () => {
      expect(helpers.greaterThanFifty(10)).toBe(false);
    });
  });
  
  test("add 2 + 3", () => {
    expect(helpers.add(2, 3)).toBe(5);
  });
  
  test("subtract 10 - 7", () => {
    expect(helpers.subtract(10, 7)).toBe(3);
  });
  
  test("divide 100 / 4", () => {
    expect(helpers.divide(100, 4)).toBe(25);
  });
  
  test("multiply 5 * 5", () => {
    expect(helpers.multiply(5, 5)).toBe(25);
  });
  
  test("remainder 10 % 7", () => {
    expect(helpers.getRemainder(10, 7)).toBe(3);
  });
  
  describe("isEven", () => {
    test("10", () => {
      expect(helpers.isEven(10)).toBe(true);
    });
    test("7", () => {
      expect(helpers.isEven(7)).toBe(false);
    });
  });
  
  describe("isOdd", () => {
    test("10", () => {
      expect(helpers.isOdd(10)).toBe(false);
    });
    test("7", () => {
      expect(helpers.isOdd(7)).toBe(true);
    });
  });
  
  test("square 5 is 25", () => {
    expect(helpers.square(5)).toBe(25);
  });
  
  test("cube 5 is 125", () => {
    expect(helpers.cube(5)).toBe(125);
  });
  
  test("power 2**4 is 16", () => {
    expect(helpers.raiseToPower(2, 4)).toBe(16);
  });
  
  test("round 9.9 is 10", () => {
    expect(helpers.roundNumber(9.9)).toBe(10);
  });
  
  test("roundUp 1.1 is 2", () => {
    expect(helpers.roundUp(1.1)).toBe(2);
  });
  
  test("add exclamation to Welcome", () => {
    const str = "Welcome";
    const endStr = "Welcome!";
  
    expect(helpers.addExclamationPoint(str)).toBe(endStr);
  });
  
  test("combine names ed jeong", () => {
    const fname = "ed";
    const lname = "jeong";
    const fullname = "ed jeong";
  
    expect(helpers.combineNames(fname, lname)).toBe(fullname);
  });
  
  test("add greeting to ed", () => {
    const name = "ed";
    const greeting = "Hello ed!";
  
    expect(helpers.getGreeting(name)).toBe(greeting);
  });
  
  test("rect area l=2 h=2", () => {
    expect(helpers.getRectangleArea(2, 2)).toBe(4);
  });
  
  test("tri area b=2 h=3", () => {
    expect(helpers.getTriangleArea(2, 3)).toBe(3);
  });
  
  test("circle area r=2", () => {
    const area = Math.PI * 2 * 2;
  
    expect(helpers.getCircleArea(2)).toBe(area);
  });
  
  test("rect vol l=2 h=4 w=1", () => {
    expect(helpers.getRectangularPrismVolume(2, 1, 4)).toBe(8);
  });