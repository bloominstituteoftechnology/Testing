const helpers = require("./project-1");

it("should run tests using it instead of test", () => {
  //Arrange: setup the world
  //Act: execute the code
  //assert: check that it works
});
// start testing!


describe.skip('Project 1 tests', () => { 
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

//areEqual()
describe("Should return true if inputs are equal to one another", () => {
  it("should return true if equal", () => {
    const expected = true;
    const actual = helpers.areEqual(1, 1);
    expect(actual).toEqual(expected);
  });

  it("should throw error if input is undefined", () => {
    expect(() => {
      helpers.areEqual("", "y");
    }).toThrow("error");
  });

  it("should throw error if not given arguments", () => {
    expect(() => {
      helpers.areEqual();
    }).toThrow("error");
  });
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

  it("Should throw error for NaN", () => {
    expect(() => {
      helpers.add("a", 45);
    }).toThrow("You can only add numbers");
  });

  describe("Should return x-y", () => {
    it("Should return x-y", () => {
      const actual = helpers.subtract(5, 50);
      expect(actual).toBe(-45);
    });

    it("Should throw error for NaN", () => {
      expect(() => {
        helpers.add("string", 45);
      }).toThrow("You can only add numbers");
    });
  });

  describe("divide()", () => {
    it("should divide x by y", () => {
      const expected = 2;
      const actual = helpers.divide(10, 5);
      expect(actual).toBe(expected);
    });

    it("Should return error if given NaN", () => {
      expect(() => {
        helpers.divide("string", "string");
      }).toThrow();
    });
  });

  describe("Multiply function", () => {
    it("Should multipy x by y", () => {
      const expected = 40;
      const actual = helpers.multiply(8, 5);
      expect(actual).toBe(expected);
    });

    it("throw error if NaN input", () => {
      expect(() => {
        helpers.multiply("string", "string");
      }).toThrow();
    });

    it("Should throw error if not passed arguments", () => {
      expect(() => {
        helpers.multiply();
      }).toThrow();
    });
  });

    describe('getRemainder()', () => {
      it('Should return remainder', ()=> {
        const expected = 1;
        const actual = helpers.getRemainder(9,2);
        expect(actual).toEqual(expected);
      })

      it('Should only take in numbers', ()=> {
        expect(()=> {
          helpers.getRemainder('string', 'string')
        }).toThrow()
      })

      it('Should handle decimals', ()=> {
        const expected = 1.5;
        const actual = helpers.getRemainder(9.5, 2);
        expect(actual).toBe(expected);
      })
    })

    describe('isEven()', ()=> {
      it('Should return true if even', ()=> {
        const expected = true;
        const actual = helpers.isEven(8,2);
        expect(actual).toEqual(expected);
      })
    })

    describe('isOdd()', ()=> {
      it('Should return true if odd', ()=> {
        const expected = true;
        const actual = helpers.isOdd(9,2);
        expect(actual).toEqual(expected);
      })
    })

    describe('square()', ()=> {
      it('Should square input', ()=> {
        const expected = 9;
        const actual = helpers.square(3);
        expect(actual).toEqual(expected)
      })
    })

    describe('cube()', ()=> {
      it('Should cube input', ()=> {
        const expected = 27;
        const actual = helpers.cube(3);
        expect(actual).toEqual(expected);
      })
    })

    describe('raiseToPower()', ()=> {
      it('Should raise num to exponent value', ()=> {
        const expected = 125;
        const actual = helpers.raiseToPower(5,3);
        expect(actual).toBe(expected);
      })
    })

    describe('roundNumber()', ()=> {
      it('Should round number to integer', ()=> {
        const expected = 3
        const actual = helpers.roundNumber(3.4);
        expect(actual).toEqual(expected);
      })
    })

    describe('roundUp()', ()=> {
      it('Rounds number up to next integer', ()=> {
          const expected = 4;
          const actual = helpers.roundUp(3.4);
          expect(actual).toBe(expected);
      })
    })

    describe('addExclamationPoint()', ()=> {
      it('Should add exclamation point to string', ()=> {
        const expected = "string!";
        const actual = helpers.addExclamationPoint('string');
        expect(actual).toEqual(expected);
      })
    })

    describe('combineNames()',()=> {
      it('Should combine names',()=> {
          const expected = 'Tom Kisner';
          const actual = helpers.combineNames('Tom', 'Kisner')
          expect(actual).toEqual(expected);
      })
    })

    describe('getGreeting()', ()=> {
      it('Should return greeting', ()=> {
        const expected = 'Hello Tom!';
        const actual = helpers.getGreeting('Tom');
        expect(actual).toEqual(expected);
      })
    })

    describe('getRectangleArea()', ()=> {
      it('Should return rectangle area', ()=> {
        const expected = 20;
        const actual = helpers.getRectangleArea(5,4);
        expect(actual).toBe(expected);
      })
    })

    describe('getTriangleArea()', ()=> {
      it('Should return triangle area', ()=> {
        const expected = 10;
        const actual = helpers.getTriangleArea(5,4);
        expect(actual).toEqual(expected);
      })
    })

    describe('getCircleArea()', ()=> {
      it('Should return circle area', ()=> {
        const expected = Math.PI*25;
        const actual = helpers.getCircleArea(5);
        expect(actual).toBe(expected);
      })
    })

    describe('getRectangePrismVolume()', ()=> {
      it('Should return rectangle prism volume', ()=> {
        const expected = 60;
        const actual = helpers.getRectangularPrismVolume(5,4,3);
        expect(actual).toBe(expected);
      })
    })
})
})
