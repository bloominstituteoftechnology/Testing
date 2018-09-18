// requirement
// - item begins at 0. X
// - item fail count begins at 0. X
// - item durability begins at 100. X
// - repairing an item will restore it's durability 10 points at a time until 100.
// - item can be enhanced up to 20.
// - from 1 to 15 use Arabic numerals.
// - from +16 up use Roman numerals (+16 = I, +17 = II, +18 = III, +19 = IV, +20 = V).
// - an enhance attempt can succeed or fail.
// - when an enhancement fails, the "fail count" of the item is increased according to these rules:
//   - from 1 to 15 increase by 1.
//   - at I, increase by 2.
//   - at II, increase by 3.
//   - at III, increase by 4.
//   - at IV, increase by 5.
// - when enhancement succeeds, the fail count is reset to 0 again.
// - when enhancement fails, the durability is decreased by 5.

const enhancer = require("./enhancer.js");

describe("enhancer function", () => {
  // starting prop
  describe("initial starting variables check", () => {
    it("item level starts at 0", () => {
      expect(enhancer.enhancer().item_level).toBe(0);
    });
    it("item fail count level starts at 0", () => {
      expect(enhancer.enhancer().item_fail_count).toBe(0);
    });
    it("item durability level starts at 100", () => {
      expect(enhancer.enhancer().item_durability).toBe(100);
    });
  });
  // item repair
  describe("item repair", () => {
    it("repair raises item durability 10 points", () => {
      // arrange
      const item = {
        item_durability: 0,
      };

      // act
      const actual = enhancer.enhancer().itemRepair(item).item_durability;
      // assert
      expect(actual).toBe(10);
    });
  });
});
