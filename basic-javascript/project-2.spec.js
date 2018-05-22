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
  it("should return true only if the argument is either 10 or 5", () => {
    const ten = funcs.isTenOrFive(10);
    const five = funcs.isTenOrFive(5);
    const thirty = funcs.isTenOrFive(30);

    expect(ten).toBe(true);
    expect(five).toBe(true);
    expect(thirty).toBe(false);
  });
  it("should return true only if the argument is greater than 20 and less than 50", () => {
    const ten = funcs.isInRange(10);
    const fiftyfive = funcs.isInRange(55);
    const thirty = funcs.isInRange(30);

    expect(ten).toBe(false);
    expect(fiftyfive).toBe(false);
    expect(thirty).toBe(true);
  });
});
