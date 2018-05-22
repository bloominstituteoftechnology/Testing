const arrayFunctions = require("../advanced-javascript/arrays");
const objectFunctions = require("../advanced-javascript/objects");

const testAll = test => {
  Object.keys(arrayFunctions).forEach(key => describe(key, test(key)));
};

const shouldBeFunction = name => () => {
  it("should be a function", () => {
    expect(typeof arrayFunctions[name]).toBe("function");
  });
};

module.exports = {
  testAll,
  shouldBeFunction
};
