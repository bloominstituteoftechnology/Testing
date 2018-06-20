const objectFunctions = require("./objects");

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe("objects", () => {
  describe("each", () => {
    it("should return the keys of the object", () => {
      const keys = objectFunctions.keys;
      expect(typeof keys).toBe("function");
      let testVar = "";

      expect(
        keys({ a: "what", b: "is", c: "the", d: "frequency", e: "Kenneth?" })
      ).toEqual(["a", "b", "c", "d", "e"]);
    });
  });

  describe("each", () => {
    it("should return the keys of the object", () => {
      const keys = objectFunctions.keys;
      expect(typeof keys).toBe("function");
      let testVar = "";

      expect(
        keys({ a: "what", b: "is", c: "the", d: "frequency", e: "Kenneth?" })
      ).toEqual(["a", "b", "c", "d", "e"]);
    });
  });
});
