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
    const object1 = { age: 23 };
    const object2 = { gender: "male" };

    const test = keys(object);
    const test1 = keys(object1);
    const test2 = keys(object2);

    it("should be an object", () => {
      expect(typeof test).toBe("object");
      expect(typeof object1).toBe("object");
      expect(typeof object2).toBe("object");
    });

    it("should return keys of object", () => {
      expect(test).toEqual(["name"]);
      expect(test1).toEqual(["age"]);
      expect(test2).toEqual(["gender"]);
    });
  });

  describe("values", () => {
    const object = { name: "jack" };
    const object1 = { age: 23 };
    const object2 = { gender: "male" };

    const test = values(object);
    const test1 = values(object1);
    const test2 = values(object2);

    it("should be an object", () => {
      expect(typeof test).toBe("object");
      expect(typeof object1).toBe("object");
      expect(typeof object2).toBe("object");
    });

    it("should return keys of object", () => {
      expect(test).toEqual(["jack"]);
      expect(test1).toEqual([23]);
      expect(test2).toEqual(["male"]);
    });
  });
  describe("values", () => {
    const object = { name: "jack" };
    const object1 = { age: 23 };
    const object2 = { gender: "male" };

    const test = values(object);
    const test1 = values(object1);
    const test2 = values(object2);

    it("should be an object", () => {
      expect(typeof test).toBe("object");
      expect(typeof object1).toBe("object");
      expect(typeof object2).toBe("object");
    });

    it("should return keys of object", () => {
      expect(test).toEqual(["jack"]);
      expect(test1).toEqual([23]);
      expect(test2).toEqual(["male"]);
    });
  });
});
