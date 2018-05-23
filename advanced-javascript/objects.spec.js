const objectFunctions = require("./objects");

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe("keys", () => {
  it("should return an array of object keys", () => {
    const keys = objectFunctions.keys;

    const actual = keys({ one: "two", three: "four" });

    expect(actual).toEqual(["one", "three"]);
  });
});

describe("values", () => {
  it("should return an array of object values", () => {
    const values = objectFunctions.values;

    const actual = values({ one: "two", three: "four" });

    expect(actual).toEqual(["two", "four"]);
  });
});

describe("mapObject", () => {
  it("should perform a callback function on a given object", () => {
    const mapObject = objectFunctions.mapObject;
    function addOne(value) {
      return (value += 1);
    }

    const actual = mapObject({ one: "two", three: 2 }, addOne);

    expect(actual).toEqual({ one: "two1", three: 3 });
  });
});

describe("pairs", () => {
  it("should return an array of key value pairs", () => {
    const pairs = objectFunctions.pairs;

    const actual = pairs({ one: "two", three: "four" });

    expect(actual).toEqual([["one", "two"], ["three", "four"]]);
  });
});

describe("invert", () => {
  it("keys and values should be switched", () => {
    const invert = objectFunctions.invert;

    const actual = invert({
      hi: "cheese",
      pie: { hi: "tacos", cheesey: "pies" }
    });

    expect(actual).toEqual({ cheese: "hi", "[object Object]": "pie" });
  });
});
