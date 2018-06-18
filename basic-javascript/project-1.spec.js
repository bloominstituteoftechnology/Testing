const helpers = require('./project-1');

// start testing!

// multiplyByTen
describe("Multiply by 10", () => {
  it("returns NaN when given a type that is not a number", () => {
    expect(helpers.multiplyByTen(null)).toEqual(0);
    expect(helpers.multiplyByTen(undefined)).toBeNaN()
  })
})

//subtractFive
describe("Subtract by 5", () => {
  it("return a number that is subtracted by 5", () => {
    expect(helpers.subtractFive(10)).toBe(5);
  })
})

//areSameLength
describe("return true if the length are the same false otherwise", () => {
  it("place holder text", () => {
    expect(helpers.areSameLength("abc", "def")).toBeTruthy();
  })
})

//areEqual
describe("areEqual", () => {
  it("return true when x and y are the same number and type",() => {
    expect(helpers.areEqual(10, 10)).toBeTruthy();
  })
})

//lessThanNinety
describe("less than 90", () => {
  it("return true if the number pass in is less than 90 otherwise false", () => {
    expect(helpers.lessThanNinety(70)).toBeTruthy();
  })
})

//greaterThanFifty
describe("greater than 50", () => {
  it("return true if the number pass in is greater than 50 otherwise false", () => {
    expect(helpers.greaterThanFifty(60)).toBeTruthy();
  })
})

//add
describe("add 2 numbers", () => {
  it("return the sum of the 2 numbers pass in", () => {
    expect(helpers.add(2,3)).toBe(5);
  })
})

//subtract
describe("subtract 2 numbers", () => {
  it("return the difference of the 2 numbers pass in", () => {
    expect(helpers.subtract(10, 5)).toBe(5)
  })
})

//divide
describe("divide 2 numbers", () => {
  it("return the quotient of the 2 numbers pass in", () => {
    expect(helpers.divide(10, 5)).toEqual(2)
  })
})

//multiply
describe("multiply 2 numbers", () => {
  it("returns the product of the 2 numbers pass in", () => {
    expect(helpers.multiply(10, 2)).toEqual(20)
  })
})

//getRemainder 
describe("get the remainder of 2 numbers divided by each other", () => {
  it("returns the remainder of the 2 numbers pass in", () => {
    expect(helpers.getRemainder(10, 3)).toEqual(1)
  })
})

//isEven
describe("return true if the number is even otherwise false", () => {
  it("returns true when the number pass in is even", () => {
    expect(helpers.isEven(6)).toBeTruthy()
  })
})

//isOdd
describe("return true if the number is odd otherwise false", () => {
  it("returns true when the number pass in is odd", () => {
    expect(helpers.isOdd(3)).toBeTruthy();
  })
})

//square 
describe("square the number", () => {
  it("return the square of the number pass in", () => {
    expect(helpers.square(2)).toEqual(4)
  })
})

//cube
describe("cube the number", () => {
  it("return the cube of the number pass in", () => {
    expect(helpers.cube(3)).toEqual(27)
  })
})

//raiseToPower
describe("raise to the power", () => {
  it("return the first number to the power of the second number", () => {
    expect(helpers.raiseToPower(3, 3)).toEqual(27)
  })
})

//roundNumber 
describe("rounded number", () => {
  it("return the number rounded off to the nearest whole number", () => {
    expect(helpers.roundNumber(7.5)).toEqual(8)
  })
})

//roundUp
describe("round up number", () => {
  it("return the number rounded up to the nearest whole number", () => {
    expect(helpers.roundUp(8.2)).toEqual(9)
  })
})


//addExclamationPoint
describe("add exclamation point to string", () => {
  it("return the string with an exclamation point append to it", () => {
    expect(helpers.addExclamationPoint("Hello")).toEqual("Hello!")
  })
})

//combineNames 
describe("combine names", () => {
  it("return the combination of the 2 names pass in", () => {
    expect(helpers.combineNames("Xang", "Thao")).toEqual("Xang Thao")
  })
})

//getGreeting
describe("Greet person", () => {
  it("return greeting with the name pass in", () => {
    expect(helpers.getGreeting("Rome")).toEqual("Hello Rome!")
  })
})

//getRectangleArea
describe("get the rectangle area", () => {
  it("return the area of the rectangle", () => {
    expect(helpers.getRectangleArea(3,7)).toEqual(21)
  })
})

//getTriangleArea
describe("get the triangle area", () => {
  it("return the area of the triangle", () => {
    expect(helpers.getTriangleArea(2, 10)).toEqual(10)
  })
})

//getCircleArea 
describe("get the circle area", () => {
  it("return the area of the cirle", () => {
    let num = 5;
    let area = num * num * Math.PI;
    expect(helpers.getCircleArea(num)).toEqual(area)
  })
})

//getRectangularPrismVolume 
describe("get the rectangular prism volume", () => {
  it("return the volume of the rectangle", () => {
    expect(helpers.getRectangularPrismVolume(2,3,4)).toEqual(24)
  })
})