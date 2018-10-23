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
