const objectFunctions = require("./objects");

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe("objects", () => {
  it("should check object keys", () => {
    expect(objectFunctions.keys({ a: "10", b: "20" })).toEqual(["a", "b"]);
  });

  it("should check object values", () => {
    expect(objectFunctions.values({ a: "10", b: "20" })).toEqual(["10", "20"]);
  });

  it("should map objects", () => {
    expect(objectFunctions.mapObject({ a: 10, b: 20 }, num => num + 1)).toEqual(
      { a: 11, b: 21 }
    );
  });

  it("should make obj pairs", () => {
    expect(objectFunctions.pairs({ a: 10, b: 20 })).toEqual([
      ["a", 10],
      ["b", 20]
    ]);
  });

  it("should map objects", () => {
    expect(objectFunctions.invert({ a: 10, b: 20 })).toEqual({
      10: "a",
      20: "b"
    });
  });

  it("should add defaults if not there", () => {
    expect(
      objectFunctions.defaults({ a: 10, b: 20 }, { c: 11, d: 21 })
    ).toEqual({ a: 10, b: 20, c: 11, d: 21 });
  });
});
