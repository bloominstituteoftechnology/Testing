const funcs = require("./project-1");

describe("project-1 tests", () => {
  it("should multiply by ten", () => {
    const twenty = funcs.multiplyByTen(2);

    expect(twenty).toBe(20);
  });
  it("should subtract five", () => {
    const six = funcs.subtractFive(11);

    expect(six).toBe(6);
  });
});
