const funcs = require("./project-1");

// write your tests here

describe("default", () => {
  it("run the tests", () => {});
});

describe("Multiply by ten", () => {
  it("Should multiply by ten", () => {
    // arrange
    const multiplyByTen = funcs.multiplyByTen;

    // act
    const hundred = multiplyByTen(10);
    const zero = multiplyByTen(0);
    const twenty = multiplyByTen(2);

    // assert
    expect(hundred).toBe(100);
    expect(zero).toBe(0);
    expect(twenty).toBe(20);
  });
});

describe("Subtract by five", () => {
  it("Should multiply by ten", () => {
    // arrange
    const subtractFive = funcs.subtractFive;

    // act
    const twnetyEight = subtractFive(33);
    const zero = subtractFive(5);
    const negThree = subtractFive(2);

    // assert
    expect(twnetyEight).toBe(28);
    expect(zero).toBe(0);
    expect(negThree).toBe(-3);
  });
});

describe("Are same length", () => {
  it("Should have same string length", () => {
    // arrange
    const areSameLength = funcs.areSameLength;

    // act
    const length1 = areSameLength("james", "jason");
    const length2 = areSameLength("bourne", "bond");
    const length3 = areSameLength("herdy", "gerdies");

    // assert
    expect(length1).toBe(true);
    expect(length2).toBe(false);
    expect(length3).toBe(false);
  });
});

describe("Have same value", () => {
  it("Both should have same value", () => {
    // arrange
    const areEqual = funcs.areEqual;

    // act
    const equal1 = areEqual(1, 1);
    const equal2 = areEqual(1, -1);
    const equal3 = areEqual(24, 42);
    const equal4 = areEqual(0, 0);

    // assert
    expect(equal1).toBe(true);
    expect(equal2).toBe(false);
    expect(equal3).toBe(false);
    expect(equal4).toBe(true);
  });
});

describe("Is less than ninety", () => {
  it("Value is less than ninety", () => {
    // arrange
    const lessThanNinety = funcs.lessThanNinety;

    // act
    const lessNinety1 = lessThanNinety(89);
    const lessNinety2 = lessThanNinety(91);
    const lessNinety3 = lessThanNinety(90);
    const lessNinety4 = lessThanNinety(1000);
    const lessNinety5 = lessThanNinety(-2);

    // assert
    expect(lessNinety1).toBe(true);
    expect(lessNinety2).toBe(false);
    expect(lessNinety3).toBe(false);
    expect(lessNinety4).toBe(false);
    expect(lessNinety5).toBe(true);
  });
});

// describe("Is less than ninety", () => {
//   it("Value is less than ninety", () => {
//     // arrange
//     const lessThanNinety = funcs.lessThanNinety;

//     // act
//     const lessNinety1 = lessThanNinety(89);
//     const lessNinety2 = lessThanNinety(91);
//     const lessNinety3 = lessThanNinety(90);
//     const lessNinety3 = lessThanNinety(1000);
//     const lessNinety4 = lessThanNinety(-2);

//     // assert
//     expect(lessNinety1).toBe(true);
//     expect(lessNinety2).toBe(false);
//     expect(lessNinety3).toBe(false);
//     expect(lessNinety3).toBe(false);
//     expect(lessNinety4).toBe(true);
//   });
// });
