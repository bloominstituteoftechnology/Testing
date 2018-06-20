const objectFunctions = require("./objects");

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe("objects", () => {
  describe("keys", () => {
    it("should be an function", () => {
      expect(typeof objectFunctions.keys).toEqual("function");
    });
    it("should return the object keys", () => {
      expect(
        objectFunctions.keys({
          windows: "10",
          make: "toyota",
          model: "prius",
          firstName: "Bill"
        })
      ).toEqual(["windows", "make", "model", "firstName"]);
    });
  });

  describe("values", () => {
    it("should be an function", () => {
      expect(typeof objectFunctions.values).toEqual("function");
    });
    it("should return the object values", () => {
      expect(
        objectFunctions.values({
          windows: "10",
          make: "toyota",
          model: "prius",
          firstName: "Bill"
        })
      ).toEqual(["10", "toyota", "prius", "Bill"]);
    });
  });
});
