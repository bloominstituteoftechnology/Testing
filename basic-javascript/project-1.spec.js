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
  expect(
    helpers.areSameLength("razzle dazzle", "something something")
  ).toBeDefined();
});
it("Should compare any two items and check if they are equal", () => {
  const expected = false;
  const actual = helpers.areEqual([123, 234, 45], [7, 8, 0]);
  expect(actual).toBeFalsy();
  expect(actual).toBe(false);
  expect(
    helpers.areEqual(
      [[1, 2, 3], [3456, 45], { a: [4, 5, 6, 7, 9, { 5: 23 }] }],
      [[1, 2, 3], [3456, 45], { a: [4, 5, 6, 7, 9, { 5: 23 }] }]
    )
  ).toBeTruthy();
  expect(
    helpers.areEqual(
      [[1, 2, 3], [3459, 45], { a: [4, 5, 6, 7, 9, { 5: 23 }] }],
      [[1, 2, 3], [3456, 45], { a: [4, 5, 6, 7, 9, { 5: 23 }] }]
    )
  ).toBeFalsy();
  expect(helpers.areEqual("yes", "yes")).toBe(true);
  expect(helpers.areEqual(1, "1")).toBeFalsy();
});
it("should check if a number is less than 90", () => {
  expect(helpers.lessThanNinety(80)).toBe(true);
  expect(helpers.lessThanNinety(90)).toBeFalsy();
  expect(helpers.lessThanNinety(89.9)).toBeTruthy();
  expect(helpers.lessThanNinety("23")).toBeTruthy();
  expect(helpers.lessThanNinety("nothing")).toBeTruthy();
});
it("should check if value is greater than 50", () => {
  expect(helpers.greaterThanFifty(75)).toBe(true);
  expect(helpers.greaterThanFifty(99)).toBeTruthy();
  expect(helpers.greaterThanFifty("55")).toBe(true);
  expect(helpers.greaterThanFifty("50")).toBeFalsy();
  expect(helpers.greaterThanFifty("nothing")).toBeFalsy();
});
it('take to whole numbers and then add them together', () => {
  expect(helpers.add(5,9)).toBe(14);
  expect(helpers.add("12", "23")).toBe(35);
  expect(helpers.add(45, "56")).toBe(101);
  expect(helpers.add("23", "something")).toBe(23);
  expect(helpers.add("23r","56kd")).toBe(0);
});
