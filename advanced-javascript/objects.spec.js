const objectFunctions = require("./objects");

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe("objects", () => {
  const keys = objectFunctions.keys;
  const values = objectFunctions.values;
  const mapObject = objectFunctions.mapObject;
  const pairs = objectFunctions.pairs;
  const invert = objectFunctions.invert;
  const defaults = objectFunctions.defaults;

  describe("object", () => {
    const object = { name: "jack" };
    const object1 = { age: 23, gender: "male" };

    const test = keys(object);
    const test1 = keys(object1);

    it("should be an object", () => {
      expect(typeof test).toBe("object");
      expect(typeof object1).toBe("object");
    });

    it("should return keys of object", () => {
      expect(test).toEqual(["name"]);
      expect(test1).toEqual(["age", "gender"]);
    });
  });

  describe("values", () => {
    const object = { name: "jack" };
    const object1 = { age: 23, gender: "male" };

    const test = values(object);
    const test1 = values(object1);

    it("should be an object", () => {
      expect(typeof test).toBe("object");
      expect(typeof object1).toBe("object");
    });

    it("should return keys of object", () => {
      expect(test).toEqual(["jack"]);
      expect(test1).toEqual([23, "male"]);
    });
  });

  describe("mapObject", () => {
    const object = { name: "jack", age: 23, gender: "male" };
    const object1 = { start: 1, middle: 56, finish: 125 };

    const mockCallback = jest.fn(val => val);
    const mockCallback1 = jest.fn(val => val * 2);

    const test = mapObject(object, mockCallback);
    const test1 = mapObject(object1, mockCallback1);

    it("should be an object", () => {
      expect(typeof test).toBe("object");
      expect(typeof test1).toBe("object");
    });

    it("should return mapped objects with new values", () => {
      expect(test).toEqual({ age: 23, gender: "male", name: "jack" });
      expect(test1).toEqual({ finish: 250, middle: 112, start: 2 });
    });
  });
});
