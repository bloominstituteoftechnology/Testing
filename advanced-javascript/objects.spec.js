const objectFunctions = require("./objects");

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe("Objects", () => {
  describe("keys", () => {
    let obj = {
      key: "value"
    };
    it("keys", () => {
      const keys = objectFunctions.keys;
      expect(keys(obj)).toEqual(Object.keys(obj));
    });
  });
  describe("values", () => {
    let obj = {
      key: "value"
    };
    it("values", () => {
      const values = objectFunctions.values;
      expect(values(obj)).toEqual(Object.values(obj));
    });
  });
  describe("mapObject", () => {
    let obj = {
      key: "value",
      secondkey: "secondvalue"
    };
    it("mapObject", () => {
      const mapObject = objectFunctions.mapObject;
      expect(mapObject(obj, item => "word")).toEqual({
        key: "word",
        secondkey: "word"
      });
    });
  });
  describe("pairs", () => {
    let obj = {
      key: "value",
      secondkey: "secondvalue"
    };
    it("pairs", () => {
      const pairs = objectFunctions.pairs;
      expect(pairs(obj)).toEqual([
        ["key", "value"],
        ["secondkey", "secondvalue"]
      ]);
    });
  });
  describe("invert", () => {
    let obj = {
      key: "value",
      secondkey: "secondvalue"
    };
    it("invert", () => {
      const invert = objectFunctions.invert;
      expect(invert(obj)).toEqual({
        value: "key",
        secondvalue: "secondkey"
      });
    });
  });
  describe("defaults", () => {
    let obj = {
      key: "value",
      secondkey: "default"
    };
    it("defaults", () => {
      const defaults = objectFunctions.defaults;
      expect(defaults(obj, "de")).toEqual({
        "0": "d",
        "1": "e",
        key: "value",
        secondkey: "default"
      });
    });
  });
});
