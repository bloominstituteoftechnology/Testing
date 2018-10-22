const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe("objects", () => {
  it("should check object keys", () => {
    expect(objectFunctions.keys({ a: "1", b: "2", c:"3" })).toEqual(["a", "b", "c"]);
  });

  it("should check object values", () => {
    expect(objectFunctions.values({ a: "1", b: "2",c:"3" })).toEqual(["1", "2", "3"]);
  });

  it("should map objects", () => {
    expect(objectFunctions.mapObject({ a: 1, b: 2, c:3 }, num => num + 1)).toEqual(
      { a: 2, b: 3, c:4}
    );
  });

  it("should make obj pairs", () => {
    expect(objectFunctions.pairs({ a: 1, b: 2, c:3 })).toEqual([
      ["a", 1],
      ["b", 2],
      ["c", 3]
    ]);
  });

  it("should map objects", () => {
    expect(objectFunctions.invert({ a: 1, b: 2, c: 3 })).toEqual({
      1: "a",
      2: "b",
      3: "c"
    });
  });

  it("should add defaults if not there", () => {
    expect(
      objectFunctions.defaults({ a: 1, b: 2 }, { c: 3, d: 4 })
    ).toEqual({ a: 1, b: 2, c: 3, d: 4 });
  });
});