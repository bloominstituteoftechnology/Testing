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

  describe("pairs", () => {
    const object = { age: 23, gender: "male", name: "jack" };
    const object1 = { start: 1, middle: 56, finish: 125 };

    const test = pairs(object);
    const test1 = pairs(object1);

    it("should be an object", () => {
      expect(typeof test).toBe("object");
      expect(typeof test1).toBe("object");
    });

    it("should be a list in an array", () => {
      expect(Array.isArray(test)).toBe(true);
      expect(Array.isArray(test1)).toBe(true);
    });

    it("should return array of [key, value] pair list", () => {
      expect(test).toEqual([["age", 23], ["gender", "male"], ["name", "jack"]]);
      expect(test1).toEqual([["start", 1], ["middle", 56], ["finish", 125]]);
    });
  });

  describe("invert", () => {
    const object = { age: 23, gender: "male", name: "jack" };
    const object1 = { start: 1, middle: 56, finish: 125 };

    const test = invert(object);
    const test1 = invert(object1);

    it("should be an object", () => {
      expect(typeof test).toBe("object");
      expect(typeof test1).toBe("object");
    });

    it("should return swapped keys and values for each objects", () => {
      expect(test).toEqual({ "23": "age", jack: "name", male: "gender" });
      expect(test1).toEqual({ "1": "start", "125": "finish", "56": "middle" });
    });
  });

  describe("defaults", () => {
    // const object = { age: 23, gender: "male", name: "jack" };
    const object = { a: "c" };
    const object1 = { trial: "error", mass: "effect" };

    const mockDefaultProps = { a: "bbb", d: "c" };
    const mockDefaultProps1 = { trial: "success", weight: "high" };

    // const test = defaults(object);
    const test = defaults(object, mockDefaultProps);
    const test1 = defaults(object1, mockDefaultProps1);

    it("should be an object", () => {
      expect(typeof test).toBe("object");
      expect(typeof test1).toBe("object");
    });

    it("should return swapped keys and values for each objects", () => {
      expect(test).toEqual({ a: "c", d: "c" });
      expect(test1).toEqual({
        mass: "effect",
        trial: "error",
        weight: "high"
      });
    });
  });
});
