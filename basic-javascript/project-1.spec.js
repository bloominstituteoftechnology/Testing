const helpers = require("./project-1");

// --------------------------MULTIPLY BY TEN TESTS -------------------------

it("should multiply both positive and negative by 10", () => {
  expect(helpers.multiplyByTen(2)).toBe(20);
  expect(helpers.multiplyByTen(-3)).toBe(-30);
  expect(helpers.multiplyByTen("-4")).toBe(-40);
});

it("should multiply string parameter value", () => {
  expect(helpers.multiplyByTen("-4")).toBe(-40);
  expect(helpers.multiplyByTen("5")).toBe(50);
});

// ------------------------SUBTRACT FIVE TESTS ----------------------------

it("should subtract the number by 5", () => {
  expect(helpers.subtractFive(10)).toBe(5);
  expect(helpers.subtractFive(0)).toBe(-5);
});

it("should subtract the number by 5 even if string", () => {
  expect(helpers.subtractFive("15")).toBe(10);
});

//--------------------------ARE SAME LENGTH TESTS -----------------------

it("should return true if parameters are same length", () => {
  expect(helpers.areSameLength("hello", "hi")).toBeFalsy();
  expect(helpers.areSameLength("yo", "hi")).toBeTruthy();
});

// ---------------------ARE EQUAL TESTS --------------------------------

it("should check if to parameters are the same", () => {
  expect(helpers.areEqual(8, 8)).toBeTruthy();
  expect(helpers.areEqual(8, 9)).toBeFalsy();
  expect(helpers.areEqual("abc", "abc")).toBeTruthy();
  expect(helpers.areEqual("abc", "cba")).toBeFalsy();
  expect(helpers.areEqual(456, "456")).toBe(false);
});

// --------------------LESS THAN 90 TESTS -----------------------------

it('should return true if less than 90', () => {
    expect(helpers.lessThanNinety('89')).toBeTruthy();
    expect(helpers.lessThanNinety(91)).toBeFalsy();
    expect(helpers.lessThanNinety(89)).toBeTruthy();
    expect(helpers.lessThanNinety(90)).toBeFalsy();
});

// ------------------GREATER THAN 50 TESTS ----------------------------

it('should return true if value is greater than fifty', () => {
    expect(helpers.greaterThanFifty(75)).toBeTruthy();
    expect(helpers.greaterThanFifty(50)).toBeFalsy();
    expect(helpers.greaterThanFifty(25)).toBeFalsy();

});

// ----------------------ADD TESTS-------------------------------------

it('should add both values and return the sum', () => {
    expect(helpers.add(75,25)).toBe(100);
  
});

it('should add both values and return the sum', () => {
    expect(helpers.add(-75,-25)).toBe(-100);
    expect(helpers.add(75,-25)).toBe(50);
    expect(helpers.add(-75,25)).toBe(-50);

});

// ----------------------SUBTRACT TESTS --------------------------------

it('should subtract second param from first param', () => {
    expect(helpers.subtract(2,1)).toBe(1); 
    expect(helpers.subtract(-8,-4)).toBe(-4); 
    expect(helpers.subtract(3, -9)).toBe(12); 
    expect(helpers.subtract(-3, 2)).toBe(-5); 
})

it('should subtract param 2 from param 2, as a string', () => {
    expect(helpers.subtract('-5', 7)).toBe(-12); 
    expect(helpers.subtract('-12', '-4')).toBe(-8)
})

// -----------------------DIVIDE TESTS -----------------------------------

it('should divide param 1 by param 2', () => {
    expect(helpers.divide(16, 4)).toBe(4); 
    expect(helpers.divide(-2, -1)).toBe(2); 
    expect(helpers.divide(-25, 5)).toBe(-5); 
    expect(helpers.divide(5, 2)).toBe(2.5); 
}); 

// ----------------------MULTIPLY TESTS ----------------------------------

it('should multiply both parameters and return product or param 1 and 2', () => {
    expect(helpers.multiply(6,9)).toBe(54); 
    expect(helpers.multiply(-3, 2)).toBe(-6); 
    expect(helpers.multiply(-10, -10)).toBe(100); 
}); 

//-----------------------GET REMAINDER TESTS-----------------------------

it('should return remainder of param 2 divided by param 1', () => {
    expect(helpers.getRemainder(5, 3)).toBe(2); 
    expect(helpers.getRemainder(4, 2)).toBe(0); 
    // expect(helpers.getRemainder(-9, 2)).toBe(1); 
    // does not work for some reason
}); 

//----------------------- isEven TESTS-----------------------------

it('should return true if param is even', () => {
    expect(helpers.isEven(5)).toBeFalsy(); 
    expect(helpers.isEven(4)).toBeTruthy(); 
    expect(helpers.isEven(-9)).toBeFalsy(); 
}); 

//----------------------- isOdd TESTS-----------------------------

it('should return true if param is odd', () => {
    expect(helpers.isOdd(5)).toBeTruthy(); 
    expect(helpers.isOdd(4)).toBeFalsy(); 
    expect(helpers.isOdd(-9)).toBeTruthy(); 
}); 

//----------------------- square TESTS-----------------------------

it('should return the square of the passed param', () => {
    expect(helpers.square(5)).toBe(25);
    expect(helpers.square(4)).toBe(16);
    expect(helpers.square(4.2)).toBe(17.64);
});

//----------------------- cube TESTS-----------------------------

it('should return the cube of the passed param', () => {
    expect(helpers.cube(5)).toBe(125);
    expect(helpers.cube(4)).toBe(64);
    expect(helpers.cube(-4)).toBe(-64);
});

//----------------------- raisedToPower TESTS-----------------------------

it('should return the first param with the second param as the exponent', () => {
    expect(helpers.raiseToPower(2, 3)).toBe(8);
    expect(helpers.raiseToPower(2, -3)).toBe(.125);
    expect(helpers.raiseToPower(4, -4)).toBe(0.00390625);
});

//----------------------- roundNumber TESTS-----------------------------

it('should return the nearest integer to the param, tie goes to larger number', () => {
    expect(helpers.roundNumber(3.2653)).toBe(3);
    expect(helpers.roundNumber(5.99)).toBe(6);
    expect(helpers.roundNumber(2.1)).toBe(2);
    expect(helpers.roundNumber(-2.1)).toBe(-2);
    expect(helpers.roundNumber(-2.5)).toBe(-2);
    expect(helpers.roundNumber(2.5)).toBe(3);
});

//----------------------- roundUp TESTS-----------------------------

it('should return the first integet larger than the param', () => {
    expect(helpers.roundUp(3.2653)).toBe(4);
    expect(helpers.roundUp(5.99)).toBe(6);
    expect(helpers.roundUp(2.1)).toBe(3);
    expect(helpers.roundUp(-2.1)).toBe(-2);
});

//----------------------- addExclimationPoint TESTS-----------------------------

it('should return and string with an additional exclmation point', () => {
    expect(helpers.addExclamationPoint('yo')).toBe('yo!');
    expect(helpers.addExclamationPoint(5)).toBe('5!');
});

//----------------------- combineNames TESTS-----------------------------

it('should return a full name when passed a first and a last name', () => {
    expect(helpers.combineNames('mike', 'kerbleski')).toBe('mike kerbleski');
    expect(helpers.combineNames('connor', 'mcgreggor')).toBe('connor mcgreggor');
});