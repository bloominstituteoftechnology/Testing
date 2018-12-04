const helpers = require("./project-1");

// start testing!
/*
- Use `yarn` to install the necessary dependencies 
from the `package.json` file.
- type `yarn test` to start the test runner.
- open the `basic-javascript` folder and use `
project-1.spec.js` to write tests for the functions 
inside `project-1.js`.
- use `project-2.spec.js` to write tests for the 
functions inside `project-2.js`.

As you write your tests, bugs in the code may be 
revealed, feel free to correct and _refactor_ the 
source code to satisfy your tests.
*/
describe("multipliesByTen", () => {
  test("multiplies properly", () => {
    const answer = helpers.multiplyByTen(2, 10);

    expect(answer).toBe(20);
  });
});
// hey
describe("subtractFive", () => {
  test("subtracts by five", () => {
    const answer = helpers.subtractFive(10);

    expect(answer).toBe(5);
  });
});

describe("areSameLength", () => {
  test("strings are same length", () => {
    const answer = helpers.areSameLength("asdf", "zcvv");

    expect(answer).toBe(true);
  });

  test("is a string", () => {
    expect(() => helpers.areSameLength("hello")).toThrow();
  });
});

describe("areEqual", () => {
  test("variables are equal", () => {
    const answer = helpers.areEqual(1, 1);

    expect(answer).toBe(true);
  });
});

describe("lessThanNinety", () => {
  test("is less than ninety", () => {
    const answer = helpers.lessThanNinety(80);

    expect(answer).toBe(true);
  });
});

describe("greaterThanFifty", () => {
  test("is greater than fifty", () => {
    const answer = helpers.greaterThanFifty(51);

    expect(answer).toBe(true);
  });
});

describe("add", () => {
  const nameOfTest = "adds two numbers";
  const callback = () => {
    const sum = helpers.add(25, 5);

    expect(sum).toBe(30);
  };
  test(nameOfTest, callback);
});

describe("subrtract", () => {
  const difference = helpers.subtract(10, 5);

  expect(difference).toBe(5);
});

describe("divide", () => {
  const dividen = helpers.divide(10, 5);

  expect(dividen).toBe(2);
});

describe("multiply", () => {
  const product = helpers.multiply(10, 5);

  expect(product).toBe(50);
});

describe("getRemainder", () => {
  const remainder = helpers.getRemainder(10, 3);

  expect(remainder).toEqual(1);
});

describe("isEven", () => {
  const even = helpers.isEven(68);

  expect(even).toBe(true);
});

describe("isOdd", () => {
  const odd = helpers.isOdd(69);

  expect(odd).toBe(true);
});

describe("square", () => {
  const square = helpers.square(12);

  expect(square).toEqual(144);
});

describe("cube", () => {
  const cube = helpers.cube(3);

  expect(cube).toEqual(27);
});

describe("raiseToPower", () => {
  const answer = helpers.raiseToPower(3, 3);

  expect(answer).toEqual(27);
});

describe("roundNumber", () => {
  const round = helpers.roundNumber(3.5);

  expect(round).toEqual(4);
});

describe("roundUp", () => {
  const roundUp = helpers.roundUp(3.3);

  expect(roundUp).toEqual(4);
});

describe("addExclamationPoint", () => {
  const resultString = helpers.addExclamationPoint("hello world");

  expect(resultString).toEqual("hello world!");
});

describe("combineNames", () => {
  const combinedNames = helpers.combineNames("Chance", "Halo");

  expect(combinedNames).toEqual("Chance Halo");
});

describe("getGreeting", () => {
  const greeting = helpers.getGreeting("Chance");

  expect(greeting).toEqual("Hello Chance!");
});

describe("getRectangeArea", () => {
  const area = helpers.getRectangleArea(2, 4);

  expect(area).toEqual(8);
});

describe("getTriangleArea", () => {
  const area = helpers.getTriangleArea(2, 4);

  expect(area).toEqual(4);
});

describe("getCircleArea", () => {
  const area = helpers.getCircleArea(2);

  expect(area).toEqual(4 * Math.PI);
});

describe("getRectangularPrismVolume", () => {
  const volume = helpers.getRectangularPrismVolume(2, 3, 4);

  expect(volume).toBe(24);
});
