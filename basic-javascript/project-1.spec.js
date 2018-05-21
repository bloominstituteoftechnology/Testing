const funcs = require("./project-1");

describe("multiply testing", () => {
  it("multiply by ten ", () => {
    const multiplyByTen = funcs.multiplyByTen;
    const actual = multiplyByTen(3);
    expect(actual).toBe(30);
  });
});
describe("subtract testing", () => {
  it("Subtract five  ", () => {
    const subtractFive = funcs.subtractFive;
    const actual = subtractFive(15);
    expect(actual).toBe(10);
  });
});

describe("length testing", () => {
  it(" is the same length? ", () => {
    const areSameLength = funcs.areSameLength;
    const actual = areSameLength("bill", "bill");
    expect(actual).toBeTruthy();
  });
  it(" is not the same length? ", () => {
    const areSameLength = funcs.areSameLength;
    const actual = areSameLength("hilal0", "filal");
    expect(actual).toBeFalsy;
  });
});
describe("equality", () => {
  it(" are equal? ", () => {
    const areEqual = funcs.areEqual;
    const actual = areEqual(12, 12);
    expect(actual).toBeTruthy();
  });

  it(" are not equal? ", () => {
    const areEqual = funcs.areEqual;
    const actual = areEqual(12, 2);
    expect(actual).toBeFalsy();
  });
});
describe("less then 90 ", () => {
  it(" < 90  ", () => {
    const lessThanNinety = funcs.lessThanNinety;
    const actual = lessThanNinety(80);
    expect(actual).toBeTruthy();
  });

  it(" > 90  ", () => {
    const lessThanNinety = funcs.lessThanNinety;
    const actual = lessThanNinety(100);
    expect(actual).toBeFalsy();
  });
});

describe("greater  then 50 ", () => {
  it(" < 50  ", () => {
    const greaterThanFifty = funcs.greaterThanFifty;
    const actual = greaterThanFifty(80);
    expect(actual).toBeTruthy();
  });

  it(" > 50 ", () => {
    const greaterThanFifty = funcs.greaterThanFifty;
    const actual = greaterThanFifty(40);
    expect(actual).toBeFalsy();
  });
});
describe("adding ", () => {
  it(" < 50  ", () => {
    const add = funcs.add;
    const actual = add(80, 20);
    expect(actual).toBe(100);
  });

  it(" > 50 ", () => {
    const add = funcs.add;
    const actual = add(40, 20);
    expect(actual).toBe(60);
  });
});
describe("subtracting ", () => {
  it(" -  60 ", () => {
    const subtract = funcs.subtract;
    const actual = subtract(80, 20);
    expect(actual).toBe(60);
  });

  it(" - 50", () => {
    const subtract = funcs.subtract;
    const actual = subtract(70, 20);
    expect(actual).toBe(50);
  });
});

describe("dividing ", () => {
  it(" /4", () => {
    const divide = funcs.divide;
    const actual = divide(80, 20);
    expect(actual).toBe(4);
  });
});
describe("multiplying ", () => {
  it(" multiply", () => {
    const multiply = funcs.multiply;
    const actual = multiply(7, 5);
    expect(actual).toBe(35);
  });
});
describe("getRemaindering  ", () => {
  it(" getRemainder ", () => {
    const getRemainder = funcs.getRemainder;
    const actual = getRemainder(7, 5);
    expect(actual).toBe(2);
  });
});

describe("is even ", () => {
  it(" is even ", () => {
    const isEven = funcs.isEven;
    const actual = isEven(8);
    expect(actual).toBeTruthy();
  });
});
describe("is odd ", () => {
  it(" is odd ", () => {
    const isOdd = funcs.isOdd;
    const actual = isOdd(9);
    expect(actual).toBeTruthy();
  });
});
describe("squaring  ", () => {
  it(" square", () => {
    const square = funcs.square;
    const actual = square(4);
    expect(actual).toBe(16);
  });
});
describe("cubing ", () => {
  it(" cube ", () => {
    const cube = funcs.cube;
    const actual = cube(3);
    expect(actual).toBe(27);
  });
});
describe("cubing ", () => {
  it(" cube ", () => {
    const cube = funcs.cube;
    const actual = cube(3);
    expect(actual).toBe(27);
  });
});
describe("raise to power  ", () => {
  it(" exponential  ", () => {
    const raiseToPower = funcs.raiseToPower;
    const actual = raiseToPower(3, 2);
    expect(actual).toBe(9);
  });
});
describe(" rounding   ", () => {
  it(" round number   ", () => {
    const roundNumber = funcs.roundNumber;
    const actual = roundNumber(9.3);
    expect(actual).toBe(9);
  });
});
describe(" rounding up    ", () => {
  it(" round up    ", () => {
    const roundUp = funcs.roundUp;
    const actual = roundUp(8.3);
    expect(actual).toBe(9);
  });
});
describe(" adding exclamation point    ", () => {
  it(" round up    ", () => {
    const addExclamationPoint = funcs.addExclamationPoint;
    const actual = addExclamationPoint("hilal");
    expect(actual).toBe("hilal!");
  });
});
describe(" combine names     ", () => {
  it(" combine names    ", () => {
    const combineNames = funcs.combineNames;
    const actual = combineNames("hilal", "bilal");
    expect(actual).toBe("hilal bilal");
  });
});

describe(" greeting     ", () => {
  it(" greeting    ", () => {
    const getGreeting = funcs.getGreeting;
    const actual = getGreeting("hilal");
    expect(actual).toBe("Hello hilal!");
  });
});
describe(" get rectangle area    ", () => {
  it(" getRectangleArea    ", () => {
    const getRectangleArea = funcs.getRectangleArea;
    const actual = getRectangleArea(3, 5);
    expect(actual).toBe(15);
  });
});
describe(" get rectangle area    ", () => {
  it(" getRectangleArea    ", () => {
    const getRectangleArea = funcs.getRectangleArea;
    const actual = getRectangleArea(3, 5);
    expect(actual).toBe(15);
  });
});

describe(" getTriangleArea   ", () => {
  it(" getTriangleArea    ", () => {
    const getRectangleArea = funcs.getTriangleArea;
    const actual = getRectangleArea(6, 5);
    expect(actual).toBe(15);
  });
});
describe(" ggetCircleArea   ", () => {
  it(" getCircleArea   ", () => {
    const getCircleArea = funcs.getCircleArea;
    const actual = getCircleArea(3);
    expect(actual).toBe(28.274333882308138);
  });
});
describe(" getRectangularPrismVolume   ", () => {
  it(" getCircleArea   ", () => {
    const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
    const actual = getRectangularPrismVolume(2, 3, 4);
    expect(actual).toBe(24);
  });
});
