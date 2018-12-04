const helpers = require("./project-1");
describe("multiply by ten", () => {
  test("multiply by ten", () => {
    const test = 5;
    const result = helpers.multiplyByTen(test);
    expect(result).toBe(50);
  });
});
describe("subtract by 5", () => {
  test("subtract 5", () => {
    const result = helpers.subtractFive(15);
    expect(result).toBe(10);
  });
});
describe("areSameLength", () => {
  test(" areSameLength true", () => {
    const result = helpers.areSameLength("poppy", "lucky");
    expect(result).toBe(true);
  });
  test(" areSameLength false", () => {
    const result = helpers.areSameLength("popp", "lucky");
    expect(result).toBe(false);
  });
});
describe("areEqual", () => {
  test(" areEqualString false", () => {
    const result = helpers.areEqual("poppy", "lucky");
    expect(result).toBe(false);
  });
  test(" areEqualString true", () => {
    const result = helpers.areEqual("poppy", "poppy");
    expect(result).toBe(true);
  });
  test("areEqualIntTrue", ()=>{
      const result= helpers.areEqual(5,5);
      expect(result).toBe(true)
  })
  test("areEqualFalse", ()=>{
      expect(helpers.areEqual(4,5)).toBe(false)
  })
});

// start testing!
