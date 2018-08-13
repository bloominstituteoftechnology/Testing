const helpers = require("./project-1");

// start testing!
it("runs the tests", () => {
  expect(true).toBe(true);
});

describe("multiply by ten function", () => {
  it("should multiply a number by ten", () => {
    expect(helpers.multiplyByTen(4)).toEqual(40);
    expect(helpers.multiplyByTen(-4)).toEqual(-40);
  });
  it("should return false when the value is undefined", () => {
    expect(helpers.multiplyByTen(undefined)).toEqual(false);
  });
  //should test for NaN
  //test for stings ans booleans
});

describe("subtractFive function", () => {
  it("should subtract a number by five", () => {
    expect(helpers.subtractFive(10)).toEqual(5);
    expect(helpers.subtractFive(0)).toEqual(-5);
  });
  it("should return false when the value is undefined", () => {
    expect(helpers.subtractFive(undefined)).toEqual(false);
  });
});

describe("areSameLength function", () => {
  it("should return true if the strings are the same length", () => {
    expect(helpers.areSameLength("String 1", "String 2")).toEqual(true);
    expect(helpers.areSameLength("String 111", "String 2")).toEqual(false);
  });
  it("should return null if one of the value length is zero", () => {
    expect(helpers.areSameLength(undefined, "String")).toEqual(null);
  });
});

describe("areSameLength function", () => {
  it("should return true if the strings are the same length", () => {
    expect(helpers.areSameLength("String 1", "String 2")).toEqual(true);
    expect(helpers.areSameLength("String 111", "String 2")).toEqual(false);
  });
  it("should return null if one of the value length is zero", () => {
    expect(helpers.areSameLength(undefined, "String")).toEqual(null);
    expect(helpers.areSameLength("", " 2")).toEqual(null);
  });
  //test for numbers
});

describe("areEqual function", () => {
  it("should return true if the numbers are equal", () => {
    expect(helpers.areEqual(5, 5)).toEqual(true);
    expect(helpers.areEqual(7, 10)).toEqual(false);
  });
  it("should return null if one of the value length is zero", () => {
    expect(helpers.areEqual(undefined, 2)).toEqual(null);
  });
  //test for strings
});

describe("lessThanNinety function", () => {
  it("should return true if less than 90", () => {
    expect(helpers.lessThanNinety(40)).toEqual(true);
    expect(helpers.lessThanNinety(95)).toEqual(false);
  });
  it("should return null if one of the value length is zero", () => {
    expect(helpers.lessThanNinety(undefined)).toEqual(null);
  });
  //test for strings
});


describe("greaterThanFifty function", () => {
  it("should return true if greater than 50", () => {
    expect(helpers.greaterThanFifty(51)).toEqual(true);
    expect(helpers.greaterThanFifty(50)).toEqual(false);
    expect(helpers.greaterThanFifty(25)).toEqual(false);
  });
  it("should return null if number is undefined", () => {
    expect(helpers.greaterThanFifty(undefined)).toEqual(null);
  });
  //test for strings
});


describe("add function", () => {
  it("should add two numbers", () => {
    expect(helpers.add(3,4)).toEqual(7);
    expect(helpers.add(4,-4)).toEqual(0);
  });
  it("should return false when one of the values is undefined", () => {
    expect(helpers.add(undefined, -4)).toEqual(false);
  });
});


describe("subtract function", () => {
  it("should subtract two numbers", () => {
    expect(helpers.subtract(5,2)).toEqual(3);
    expect(helpers.subtract(-3,3)).toEqual(-6);
  });
  it("should return false when one of the values is undefined", () => {
    expect(helpers.subtract(undefined, 4)).toEqual(false);
  });
});


describe("divide function", () => {
  it("should divide two numbers", () => {
    expect(helpers.divide(10,2)).toEqual(5);
    expect(helpers.divide(-20, 4)).toEqual(-5);
  });
  it("should return false when one of the values is undefined", () => {
    expect(helpers.divide(undefined)).toEqual(false);
  });
});


describe("multiply function", () => {
  it("should multiply two numbers", () => {
    expect(helpers.multiply(5,4)).toEqual(20);
    expect(helpers.multiply(-5,-5)).toEqual(25);
  });
  it("should return false when one of the values is undefined", () => {
    expect(helpers.multiply(undefined)).toEqual(false);
  });
});


// describe("lessThanNinety function", () => {
//   it("should return true if less than 90", () => {
//     expect(helpers.lessThanNinety()).toEqual(true);
//     expect(helpers.lessThanNinety()).toEqual(false);
//   });
//   it("should return null if one of the value length is zero", () => {
//     expect(helpers.lessThanNinety()).toEqual(null);
//   });
// });

// describe("lessThanNinety function", () => {
//   it("should return true if less than 90", () => {
//     expect(helpers.lessThanNinety()).toEqual(true);
//     expect(helpers.lessThanNinety()).toEqual(false);
//   });
//   it("should return null if one of the value length is zero", () => {
//     expect(helpers.lessThanNinety()).toEqual(null);
//   });
// });

// describe("lessThanNinety function", () => {
//   it("should return true if less than 90", () => {
//     expect(helpers.lessThanNinety()).toEqual(true);
//     expect(helpers.lessThanNinety()).toEqual(false);
//   });
//   it("should return null if one of the value length is zero", () => {
//     expect(helpers.lessThanNinety()).toEqual(null);
//   });
// });

// describe("lessThanNinety function", () => {
//   it("should return true if less than 90", () => {
//     expect(helpers.lessThanNinety()).toEqual(true);
//     expect(helpers.lessThanNinety()).toEqual(false);
//   });
//   it("should return null if one of the value length is zero", () => {
//     expect(helpers.lessThanNinety()).toEqual(null);
//   });
// });


// describe("lessThanNinety function", () => {
//   it("should return true if less than 90", () => {
//     expect(helpers.lessThanNinety()).toEqual(true);
//     expect(helpers.lessThanNinety()).toEqual(false);
//   });
//   it("should return null if one of the value length is zero", () => {
//     expect(helpers.lessThanNinety()).toEqual(null);
//   });
// });