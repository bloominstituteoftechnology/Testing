const objectFunctions = require("./objects");

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe("objects", () => {
  it("should be an object", () => {});
});

describe("keys", () => {
  test("this should return the keys of an object", () => {
    expect(objectFunctions.keys({ dave: 1, bob: 2, jim: 3, steve: 4 })).toEqual(
      ["dave", "bob", "jim", "steve"]
    );
  });
});

describe("mapObject", () => {
  test("this should map over object and return 2 * key", () => {
    expect(
      objectFunctions.mapObject(
        { age: 12, dobinseconds: 400, height: 200 },
        num => {
          return num * 2;
        }
      )
    ).toEqual({ age: 24, dobinseconds: 800, height: 400 });
  });
});
