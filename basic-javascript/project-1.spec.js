const helpers = require("./project-1");

// start testing!
describe("Project-1", () => {
  describe("multiplyByTen method", () => {
    test("Multiply by 10", () => {
      expect(helpers.multiplyByTen(1)).toEqual(10);
    });
  })

  describe("subtractFive method", () => {
    test("Subtract by 5", () => {
      expect(helpers.subtractFive(10)).toEqual(5);
    });
  });

  describe("areSameLength method", () => {
    test("Same length", () => {
      expect(helpers.areSameLength("hello", "three"));
    });
  });

  


}); // Project 1
