const funcs = require("./project-2");

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe("default", () => {
  it("run the tests", () => {});
});

describe("getBiggest", () => {
  it("should get biggest", () => {
    const getBiggest = funcs.getBiggest;

    const actual = getBiggest(4, 3);

    expect(actual).toBe(4);
  });
});

describe("greeting", () => {
  it("should return corresponding language greeting", () => {
    const greeting = funcs.greeting;

    const Spanish = greeting("Spanish");
    const German = greeting("German");
    const English = greeting("English");

    expect(Spanish).toBe("Hola!");
    expect(German).toBe("Guten Tag!");
    expect(English).toBe("Hello!");
  });
});
