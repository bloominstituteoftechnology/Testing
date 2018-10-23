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
it('take to numbers and then add them together', () => {
  expect(helpers.add(5,9)).toBe(14);
  expect(helpers.add("12", "23")).toBe(35);
  expect(helpers.add(45, "56")).toBe(101);
  expect(helpers.add("23", "something")).toBe(23);
  expect(helpers.add("23r","56kd")).toBe(0);
});
it('take two numbers and subtract the first by the second', () =>{
  expect(helpers.subtract(-5,10)).toBe(-15);
  expect(helpers.subtract(5-5)).toBe(0);
  expect(helpers.subtract(44-3)).toBe(41); 
  expect(helpers.subtract(2, 1)).toBe(1); 
  expect(helpers.subtract("45", 34)).toBe(11);
})

describe('Math Operation', () => {
  describe('divide', () => {
    it('should take two numbers and divide them', () => {
      expect(helpers.divide(1,1)).toBe(1);
      expect(helpers.divide(3,4)).toBe(0.75);
      expect(helpers.divide(0,0)).toBe(0);
      expect(helpers.divide(20,5)).toBe(4);
    })
  })
  describe('multiply', () => {
    it('should take two numbers and multiply them', () =>{
      expect(helpers.multiply(6,8)).toBe(48);
      expect(helpers.multiply(9,0)).toBe(0);
      expect(helpers.multiply("45", "78")).toBe(3510);
      expect(helpers.multiply(0,1)).toBe(0);
      expect(helpers.multiply("something", 3)).toBe(0);
    })
  })
  describe('getRemainder', () => {
    it('should take two numbers and produce the remainder',() => {
      expect(helpers.getRemainder(5,4)).toBe(1);
      expect(helpers.getRemainder(10,2)).toBe(0);
      expect(helpers.getRemainder(0,11)).toBe(0);
      expect(helpers.getRemainder(45, 5)).toBe(0);
      expect(helpers.getRemainder(21, 5)).toBe(1);
    })
  })
  describe('isEven', () => {
    it('should check if the number provided is even', () => {
      expect(helpers.isEven(90)).toBeTruthy(); 
      expect(helpers.isEven("something")).toBeTruthy(); 
      expect(helpers.isEven(93)).toBeFalsy(); 
      expect(helpers.isEven(71)).toBeFalsy(); 
      expect(helpers.isEven("59")).toBeFalsy(); 
    })
  })
  describe('isOdd', () => {
    it('should check if the number provided is odd', () => {
      expect(helpers.isOdd(3)).toBeTruthy();
      expect(helpers.isOdd("7")).toBeTruthy(); 
      expect(helpers.isOdd(56)).toBeFalsy(); 
      expect(helpers.isOdd(11)).toBeTruthy(); 
      expect(helpers.isOdd(22)).toBeFalsy();
    })
  })
  describe('square', () => {
    it('Should take the num and multiple it by itself', () => {
      expect(helpers.square(7)).toEqual(49);
      expect(helpers.square(2)).toEqual(4);
      expect(helpers.square(20)).toBe(400);
      expect(helpers.square(9)).toBe(81);
      expect(helpers.square("23")).toBeDefined(); 
    })
  })
  describe('cube', () => {
    it('Should take the num and multiple it by itself twice', ()=>{
      expect(helpers.cube(10)).toEqual(1000);
      expect(helpers.cube(4)).toEqual(64);
      expect(helpers.cube(2)).toBe(8);
      expect(helpers.cube("1")).toBe(1);
      expect(helpers.cube(3)).toBe(27); 
    })
  })
  describe('raiseToPower', () => {
    it('Should take two numbers the first will be raised to the power of the second', () => {
      expect(helpers.raiseToPower(3,2)).toEqual(9);
      expect(helpers.raiseToPower(5, 0)).toEqual(1);
      expect(helpers.raiseToPower(9, 4)).toBe(6561);
      expect(helpers.raiseToPower(3, 4)).toEqual(81);
      expect(helpers.raiseToPower("78", "3")).toEqual(474552);
    })
  })
  describe('roundNumber', () => {
    it('Should take a number and round it', () => {
      expect(helpers.roundNumber(4.2)).toEqual(4);
      expect(helpers.roundNumber(4.7)).toEqual(5);
      expect(helpers.roundNumber(10)).toBe(10);
      expect(helpers.roundNumber(.75)).toBe(1);
      expect(helpers.roundNumber("something")).toBe(0);
    })
  })
  describe('roundUp', () => {
    it('should take a number and round it up', () => {
      expect(helpers.roundUp(4.2)).toEqual(5);
      expect(helpers.roundUp(23.11)).toEqual(24);
      expect(helpers.roundUp(.1)).toEqual(1);
      expect(helpers.roundUp(".34")).toEqual(1);
      expect(helpers.roundUp(9.67)).toBe(10);
    })
  })
 describe('addExclamationPoint', () => {
    it('should take the parmater and add a ! to it', () => {
      expect(helpers.addExclamationPoint(5)).toBe("5!");
      expect(helpers.addExclamationPoint("Jonathan")).toEqual("Jonathan!");
      expect(helpers.addExclamationPoint("this")).toBe("this!");
      expect(helpers.addExclamationPoint("hello")).toBe("hello!");
      expect(helpers.addExclamationPoint(4590)).toEqual("4590!");
    })
 })

 describe("combineNames", () => {
  it('should take the two parmaters and combine them', () => {
    expect(helpers.combineNames("jon", "jamel")).toBe("jon jamel");
    expect(helpers.combineNames(23, 45)).toEqual("23 45");
    expect(helpers.combineNames("lauren", "nicole")).toEqual("lauren nicole");
    expect(helpers.combineNames("Yes")).toEqual("Yes ");
    expect(helpers.combineNames("luck", 45)).toBe("luck 45");
  })
 })
 describe("getGreeting", () => {
  it("should take parmater and add to the end of a string stating Hello", () => {
    expect(helpers.getGreeting("jon")).toEqual("Hello jon!");
    expect(helpers.getGreeting(1)).toEqual("Hello 1!");
    expect(helpers.getGreeting("some")).toEqual("Hello some!");
    expect(helpers.getGreeting("w")).toBe("Hello w!");
    expect(helpers.getGreeting(789)).toEqual("Hello 789!");
  })
 })
 describe("getRectangleArea", () => {
   it("should take length and with and multiply them", () => {
      expect(helpers.getRectangleArea(3,4)).toEqual(12);
      expect(helpers.getRectangleArea(4,5)).toBe(20);
      expect(helpers.getRectangleArea(8,9)).toEqual(72);
      expect(helpers.getRectangleArea(9,2)).toEqual(18);
      expect(helpers.getRectangleArea(3,6)).toBe(18);
   })
 })
 describe("getTriangleArea", () => {
   it("should take base and height and multiple them together and then by .5", () => {
       expect(helpers.getTriangleArea(4,5)).toBe(10);
       expect(helpers.getTriangleArea(3,4)).toEqual(6);
       expect(helpers.getTriangleArea(8,9)).toEqual(36);
    expect(helpers.getTriangleArea(9,2)).toEqual(9);
    expect(helpers.getTriangleArea(3,6)).toBe(9);
   })
 })
  describe("getCircleArea", () => {
    it("Should take a radius multipled by itslef and Math.PI", () => {
      expect(helpers.getCircleArea(5)).toEqual(78.53981633974483);
      expect(helpers.getCircleArea(6)).toBe(113.09733552923255);
      expect(helpers.getCircleArea(3)).toEqual(28.274333882308138);
      expect(helpers.getCircleArea(2)).toBe(12.566370614359172);
      expect(helpers.getCircleArea(10)).toEqual(314.1592653589793);
    })
  })
  describe("getRectangleArea", () => {
    it("should take length widht and height and multiply them by each other", () => {
        expect(helpers.getRectangularPrismVolume(4,6,9)).toEqual(216);
        expect(helpers.getRectangularPrismVolume(3,6,7)).toEqual(126);
        expect(helpers.getRectangularPrismVolume(4,3,2)).toEqual(24);
        expect(helpers.getRectangularPrismVolume(7,3,2)).toBe(42);
        expect(helpers.getRectangularPrismVolume(1,6,7)).toBe(42);
    })
  })
})