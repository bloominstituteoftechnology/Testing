//system under test
const sut = require("../index");

it("run the tests", () => {});

it("should add two numbers", () => {
  // //arrange
  // const expected = 7;
  // const add = sut.add;
  // //act
  // const actual = add(3, 4);
  // //assert
  // expect(actual).toBe(expected);

  const add = sut.add;

  const seven = add(3, 4);
  const four = add(0, 4);
  const minusThree = add(1, -4);

  expect(seven).toBe(7);
  expect(four).toBe(4);
  expect(minusThree).toBe(-3);
});
