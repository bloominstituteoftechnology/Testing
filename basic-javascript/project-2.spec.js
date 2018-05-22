const funcs = require("./project-2");

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe("project-2 tests", () => {
  it("should return the bigger number", () => {
    const big = funcs.getBiggest(7, 2);

    expect(big).toBe(7);
  });
  it("should return the proper greeting", () => {
    const german = funcs.greeting("German");
    const spanish = funcs.greeting("Spanish");
    const generic = funcs.greeting();

    expect(german).toBe("Guten Tag!");
    expect(spanish).toBe("Hola!");
    expect(generic).toBe("Hello!");
  });
});
