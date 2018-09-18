const helpers = require("./project-1");

it("should multiply a number by 10", () => {
  const expected = 100;
  const actual = helpers.multiplyByTen(10);

  expect(helpers.multiplyByTen("something")).toBe(0);
  expect(actual).toBe(expected);
  expect(helpers.multiplyByTen(20)).toBe(200);
  expect(helpers.multiplyByTen("5")).toBe(50);
  expect(helpers.multiplyByTen("34a")).toBe(0);
});

it("should take a number and subtract 5 from it", () => {
  const expected = 10;
  const actual = helpers.subtractFive(15);
  expect(actual).toBe(expected); 
  expect(helpers.subtractFive("something")).toBe(-5);
  expect(helpers.subtractFive("345")).toBe(340);
  expect(helpers.subtractFive(23)).toBe(18);
  expect(helpers.subtractFive(-90)).toBe(-95);

});

// start testing!
it("should take two strings and compare their length", () => {
  const expected = false; 
  const actual = helpers.areSameLength("jonathan", "jason");
  expect(actual).toBe(expected);
  expect(actual).toBeFalsy(); 
  expect(helpers.areSameLength("23", "ab")).toBe(true);
  expect(helpers.areSameLength("ab", 23)).toBeTruthy();
  expect(helpers.areSameLength("razzle dazzle", "something something")).toBeDefined();

})
