const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  it('should be an object', () => {});
});
describe("keys", () => {
  it("should return an array of object keys", () => {
    const keys = objectFunctions.keys;

    const actual = keys({ one: "one", three: "threee" });

    expect(actual).toEqual(["two", "four"]);
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

describe('pairs', () => {
  it('should return an array of arrays', () => {
    const obj = {
      cool: 'cool',
    };
    const result = objectMethods.pairs(obj);
    expect(Array.isArray(result)).toBe(true);
    expect(Array.isArray(result[0])).toBe(true);
  });
  it('should return key and properties that match', () => {
    const obj = {
      x: 1,
      y: 2,
      z: 3,
    };
    const result = objectMethods.pairs(obj);
    expect(result).toEqual([['x', 1], ['y', 2], ['z', 3]]);
  });
});

describe('invert', () => {
  it('should return an object', () => {
    const obj = {
      cool: 'cool',
    };
    const result = objectMethods.invert(obj);
    expect(Array.isArray(result)).toBe(false);
    expect(typeof result).toBe('object');
  });
  it('should return an object where the keys and values have been switched', () => {
    const obj = {
      x: 'cool',
      y: 'dope',
      z: 'spoko',
    };
    const result = objectMethods.invert(obj);
    expect(result).toEqual({ cool: 'x', dope: 'y', spoko: 'z' });
  });
});
