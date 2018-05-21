const funcs = require("./project-1");

// write your tests here

describe("multiply by ten", () => {
  it("should multiply a number by 10", () => {
    //arrange
    const multiplyByTen = funcs.multiplyByTen;
    //act
    const thirty = multiplyByTen(3);

    //assert
    expect(thirty).toBe(30);
  });
});

describe("subtract by five", () => {
  it("should subtract by 5", () => {
    //arrange
    const subtractFive = funcs.subtractFive;
    //act
    const ten = subtractFive(15);

    //assert
    expect(ten).toBe(10);
  });
});
describe("check legnth of two things", () => {
  it("Should return true or false", () => {
    //arrange
    const areSameLength = funcs.areSameLength;
    //act
    const length = areSameLength("as", "work");

    //assert
    expect(length).toBe(false);
  });
});

describe("check if equal", () => {
  it("should check if two things are equal", () => {
    //arrange
    const areEqual = funcs.areEqual;
    //act
    const equal = areEqual(5, 5);

    //assert
    expect(equal).toBe(true);
  });
});
describe("is less than 90", () => {
  it("is it less than 90 it should return true", () => {
    //arrange
    const lessThanNinety = funcs.lessThanNinety;
    //act
    const number = lessThanNinety(55);

    //assert
    expect(number).toBe(true);
  });
});

describe("greater than fifty", () => {
  it("if it's greater than 50 it should return true", () => {
    //arrange
    const greaterThanFifty = funcs.greaterThanFifty;
    //act
    const number = greaterThanFifty(55);

    //assert
    expect(number).toBe(true);
  });
});
describe("add two numbers", () => {
  it("should add two numbers and give a sum", () => {
    //arrange
    const func = funcs.add;
    //act
    const result = func(5, 5);

    //assert
    expect(result).toBe(10);
  });
});

describe("subtract x - y numbers", () => {
  it("should subtract two the second number from the fist returning the sum", () => {
    //arrange
    const func = funcs.subtract;
    //act
    const result = func(10, 5);

    //assert
    expect(result).toBe(5);
  });
});
describe("divide two numbers", () => {
  it("should divide two numbers and give a sum", () => {
    //arrange
    const func = funcs.divide;
    //act
    const result = func(10, 10);

    //assert
    expect(result).toBe(1);
  });
});
describe("multiply two numbers", () => {
  it("should multiply two numbers and give a sum", () => {
    //arrange
    const func = funcs.multiply;
    //act
    const result = func(5, 5);

    //assert
    expect(result).toBe(25);
  });
});
describe("get the remainder of two numbers", () => {
  it("sho two numbers and give a sum", () => {
    //arrange
    const func = funcs.getRemainder;
    //act
    const result = func(55, 2);

    //assert
    expect(result).toBe(1);
  });
});
describe("dheck if a number is even", () => {
  it("should return true if the number is even", () => {
    //arrange
    const func = funcs.isEven;
    //act
    const result = func(10);

    //assert
    expect(result).toBe(true);
  });
});
describe("Check if a number is odd", () => {
  it("Should return true if odd", () => {
    //arrange
    const func = funcs.isOdd;
    //act
    const result = func(5);
    //assert
    expect(result).toBe(true);
  });
});
describe(" check if the square root of a number was returned", () => {
  it("should return the square root of a number", () => {
    //arrange
    const func = funcs.square;
    //act
    const result = func(5);

    //assert
    expect(result).toBe(25);
  });
});
describe("check if the number cubed", () => {
  it("should pass in a number and exponent and return a the cubed sum", () => {
    //arrange
    const func = funcs.cube;
    //act
    const result = func(5, 5);

    //assert
    expect(result).toBe(125);
  });
});
describe("check if the number was raised to the power of", () => {
  it("should pass in a number and exponent and return the power of the number", () => {
    //arrange
    const func = funcs.multiply;
    //act
    const result = func(5, 5);

    //assert
    expect(result).toBe(25);
  });
});
describe("check if number is rounded", () => {
  it("should round number passed into function", () => {
    const rounded = funcs.roundNumber;

    const round = rounded(44);
    expect(round).toBe(44);
  });
});
describe('check if number was rounded up',()=>{
    it("should round up the number passed in",()=>{
        const  roundUp =funcs.roundUp;
        const thirty = roundUp(29.6)
        expect(thirty).toBe(30)

    })
})
describe('check if exclamation point was added',()=>{
    it('should add an exlamation point to string',()=>{
        const ex = funcs.addExclamationPoint
        const exclamation = ex('apple')
        expect(exclamation).toBe('apple!')
    })
})
describe('check if two strings are combined',()=>{
    it('should add two strings together making one string',()=>{
        const combine = funcs.combineNames
        const oneString = combine('Jacob',"Lyerla")
        expect(oneString).toBe("Jacob Lyerla")
    })
})
describe('check if greeting was added to the name',()=>{
    it('should add greeting before the passed name',()=>{
        const getGreeting    = funcs.getGreeting
        const greeting = getGreeting('Jacob Lyerla')
        expect(greeting).toBe("Hello Jacob Lyerla!")
    })
})
describe('check if the area of rectangle was returned',()=>{
    it('should  get the area of a rectangle ',()=>{
        const getRectangleArea = funcs.getRectangleArea
        const rectangle = getRectangleArea(55,55)
        expect(rectangle).toBe(3025)
    })
})
describe('check if the area of triangle was returned',()=>{
    it('should get the area of a triangle',()=>{
        const triangle = funcs.getTriangleArea
        const tri = triangle(3,5)
        expect(tri).toBe(7.5)
    })
})

describe('check if area of circle was returned',()=>{
    it('should get the area of a circle',()=>{
        const circle = funcs.getCircleArea
        let cir = circle(3)
        cir = Math.round(cir)
        expect(cir).toEqual(28)
    })
})
describe('check if  rectangular prism volume was returned',()=>{
    it('thakes width height and length and returned the volumn',()=>{
        const volume = funcs.getRectangularPrismVolume
        let vol = volume(2,5,4)
        vol = Math.round(vol)
        expect(vol).toEqual(40)
    })
})

