const helpers = require("./project-1");
const faker = require("faker");

randomNumber = faker.random.number();
randomNumber2 = faker.random.number();
randomNumber3 = faker.random.number();
randomString = faker.random.words();
randomFirstName = faker.name.firstName();
randomLastName = faker.name.lastName();

// start testing!
describe("multiplyByTen", () => {
  it("should multiply by 10", () => {
    actual = helpers.multiplyByTen(randomNumber);
    expected = randomNumber * 10;
    expect(actual).toEqual(expected);
  });
});

describe("subtractFive", () => {
  it("should subtract 5", () => {
    actual = helpers.subtractFive(randomNumber);
    expected = randomNumber - 5;
    expect(actual).toEqual(expected);
  });
});

describe("areSameLength", () => {
  it("should be same length", () => {
    actual = helpers.areSameLength(randomString, randomString);
    expected = true;
    expect(actual).toEqual(expected);
  });
});

describe("areEqual", () => {
  it("should be equal", () => {
    actual = helpers.areEqual(randomNumber, randomNumber);
    expected = actual;
    expect(actual).toEqual(expected);
  });
});

describe("lessThanNinety", () => {
  it("should be less than 90", () => {
    actual = helpers.lessThanNinety(randomNumber);
    expected = randomNumber < 90;
    expect(actual).toEqual(expected);
  });
});

describe("greaterThanFifty", () => {
  it("should be greater than 50", () => {
    actual = helpers.greaterThanFifty(randomNumber);
    expected = randomNumber > 50;
    expect(actual).toEqual(expected);
  });
});

describe("add", () => {
  it("should add 2 numbers", () => {
    actual = helpers.add(randomNumber, randomNumber2);
    expected = randomNumber + randomNumber2;
    expect(actual).toEqual(expected);
  });
});

describe("subtract", () => {
  it("should subtract 2 numbers", () => {
    actual = helpers.subtract(randomNumber, randomNumber2);
    expected = randomNumber - randomNumber2;
    expect(actual).toEqual(expected);
  });
});

describe("divide", () => {
  it("should divide 2 numbers", () => {
    actual = helpers.divide(randomNumber, randomNumber2);
    expected = randomNumber / randomNumber2;
    expect(actual).toEqual(expected);
  });
});

describe("multiply", () => {
  it("should multiply 2 numbers", () => {
    actual = helpers.multiply(randomNumber, randomNumber2);
    expected = randomNumber * randomNumber2;
    expect(actual).toEqual(expected);
  });
});

describe("getRemainder", () => {
  it("should get remainder of 2 numbers", () => {
    actual = helpers.getRemainder(randomNumber, randomNumber2);
    expected = randomNumber % randomNumber2;
    expect(actual).toEqual(expected);
  });
});

describe("isEven", () => {
  it("should be even", () => {
    actual = helpers.isEven(randomNumber);
    expected = randomNumber % 2 === 0;
    expect(actual).toEqual(expected);
  });
});

describe("isOdd", () => {
  it("should be odd", () => {
    actual = helpers.isOdd(randomNumber);
    expected = randomNumber % 2 !== 0;
    expect(actual).toEqual(expected);
  });
});

describe("square", () => {
  it("should square a number", () => {
    actual = helpers.square(randomNumber);
    expected = randomNumber ** 2;
    expect(actual).toEqual(expected);
  });
});

describe("cube", () => {
  it("should cube a number", () => {
    actual = helpers.cube(randomNumber);
    expected = randomNumber ** 3;
    expect(actual).toEqual(expected);
  });
});

describe("raiseToPower", () => {
  it("should raise a number to the 2nd argument's power", () => {
    actual = helpers.raiseToPower(randomNumber, randomNumber2);
    expected = randomNumber ** randomNumber2;
    expect(actual).toEqual(expected);
  });
});

describe("roundNumber", () => {
  it("should round number", () => {
    actual = helpers.roundNumber(randomNumber);
    expected = Math.round(randomNumber);
    expect(actual).toEqual(expected);
  });
});

describe("roundUp", () => {
  it("should round number up", () => {
    actual = helpers.roundUp(randomNumber);
    expected = Math.ceil(randomNumber);
    expect(actual).toEqual(expected);
  });
});

describe("addExclamationPoint", () => {
  it("should add an exclamation point", () => {
    actual = helpers.addExclamationPoint(randomString);
    expected = randomString += "!";
    expect(actual).toEqual(expected);
  });
});

describe("combineNames", () => {
  it("should combine first and last names", () => {
    actual = helpers.combineNames(randomFirstName, randomLastName);
    expected = `${randomFirstName} ${randomLastName}`;
    expect(actual).toEqual(expected);
  });
});

describe("getGreeting", () => {
  it("should greet by first name", () => {
    actual = helpers.getGreeting(randomFirstName);
    expected = `Hello ${randomFirstName}!`;
    expect(actual).toEqual(expected);
  });
});

describe("getRectangleArea", () => {
  it("should get rectangle area", () => {
    actual = helpers.getRectangleArea(randomNumber, randomNumber2);
    expected = randomNumber * randomNumber2;
    expect(actual).toEqual(expected);
  });
});

describe("getTriangleArea", () => {
  it("should get triangle area", () => {
    actual = helpers.getTriangleArea(randomNumber, randomNumber2);
    expected = 0.5 * randomNumber * randomNumber2;
    expect(actual).toEqual(expected);
  });
});

describe("getCircleArea", () => {
  it("should get circle area", () => {
    actual = helpers.getCircleArea(randomNumber);
    expected = Math.PI * randomNumber * randomNumber;
    expect(actual).toEqual(expected);
  });
});

describe("getRetangularPrismVolume", () => {
  it("should get rectangular prism volume", () => {
    actual = helpers.getRectangularPrismVolume(
      randomNumber,
      randomNumber2,
      randomNumber3
    );
    expected = randomNumber * randomNumber2 * randomNumber3;
    expect(actual).toEqual(expected);
  });
});
