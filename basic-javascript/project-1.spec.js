const helpers = require("./project-1");

it("should run tests using it instead of test", () => {
  //Arrange: setup the world
  //Act: execute the code
  //assert: check that it works
});
// start testing!

describe("MultiplyByTen()", () => {
  it("should return 0 when called with no value", () => {
    const product = helpers.multiplyByTen();
    expect(product).toBe(0);
  });

  it("should *10 provided number", () => {
    const expected = 100;
    const actual = helpers.multiplyByTen(10);
    expect(actual).toEqual(expected);
  });

  it("should return 0 when given string", () => {
    const expected = 0;
    const actual = helpers.multiplyByTen("string");
    expect(actual).toEqual(expected);
  });
});
//test for undefined
//test for negative
//test for string

describe("Subtract five from input", () => {
  it("Should subtract 5 from integer", () => {
    const expected = 0;
    const actual = helpers.subtractFive(5);
    expect(actual).toEqual(expected);
  });

  it("Should handle negatives", () => {
    const expected = -6;
    const actual = helpers.subtractFive(-1);
    expect(actual).toEqual(expected);
  });

  it("Should return error if given undefined", () => {
    expect(() => {
      subtractFive();
    }).toThrow();
  });

  it("Should return error if given NaN", () => {
    expect(() => {
      subtractFive("string");
    }).toThrow();
  });
});

describe("Should return true if length is equal", () => {
  it("Should return true if equal", () => {
    const expected = true;
    const actual = helpers.areSameLength("string", "string");
    expect(actual).toEqual(expected);
  });
  // it('Should return error if given undefined', () => {
  //     expect(() => {
  //         let str1 = 'string'
  //         let str2;
  //         helpers.areSameLength(str1, str2 );
  //     }).toThrow('You must input something to compare');
  // })
});

describe("Should return true if inputs are equal to one another", () => {
  const expected = true;
  const actual = helpers.areEqual(1, 1);
  expect(actual).toEqual(expected);
});

describe("Should return true if input < 90", () => {
  it("should return true if input < 90", () => {
    const expected = false;
    const actual = helpers.lessThanNinety(91);
    expect(actual).toEqual(expected);
  });

  it("Should return error if input is not a number", () => {
    expect(() => {
      helpers.lessThanNinety("dog");
    }).toThrow("You must input a number");
  });
});

describe("Should return true for numbers > 50", () => {
  it("Should return true for numbers > 50", () => {
    const expected = true;
    const actual = helpers.greaterThanFifty(55);
    expect(actual).toBe(expected);
  });

  it("Should throw error if argument is NaN", () => {
    expect(() => {
      helpers.greaterThanFifty("string");
    }).toThrow("You must input a number");
  });

  it("should throw error if argument is undefined", () => {
    expect(() => {
      helpers.greaterThanFifty();
    }).toThrow("You must input a number");
  });
});

describe("Should return x+y", () => {
  it("Should return x+y", () => {
    const actual = helpers.add(5, 50);
    expect(actual).toBe(55);
  });

  it('Should throw error for NaN', ()=> {
    expect(()=> {
      helpers.add('a', 45)
    }).toThrow('You can only add numbers');
  })

  describe("Should return x-y", () => {
    it("Should return x-y", () => {
      const actual = helpers.subtract(5, 50);
      expect(actual).toBe(-45);
    });
  
    it('Should throw error for NaN', ()=> {
      expect(()=> {
        helpers.add('string', 45)
      }).toThrow('You can only add numbers');
    })
  });
})

