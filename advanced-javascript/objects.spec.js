const objectFunctions = require("./objects");

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe("objects", () => {
  it("should be an object", () => {});
});

describe("keys", () => {
  test("returns keys of object", () => {
    expect(objectFunctions.keys({ lambda: 1, school: 2 })).toEqual([
      "lambda",
      "school"
    ]);
  });
});

describe("value", () => {
  test("returns values of object", () => {
    expect(objectFunctions.values({ lambda: 1, school: 2 })).toEqual([1, 2]);
  });
});

describe("pairs", () => {
  test("returns pairs of object", () => {
    expect(objectFunctions.pairs({ lambda: 1, school: 2 })).toEqual([
      ["lambda", 1],
      ["school", 2]
    ]);
  });
});

describe("invert", () => {
  test("returns invert of object", () => {
    expect(objectFunctions.invert({ lambda: 1, school: 2 })).toEqual({
      1: "lambda",
      2: "school"
    });
  });
});
