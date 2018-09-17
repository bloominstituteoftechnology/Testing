const helpers = require("./project-1");

// --------------------------MULTIPLY BY TEN TESTS -------------------------

it("should multiply both positive and negative by 10", () => {
  expect(helpers.multiplyByTen(2)).toBe(20);
  expect(helpers.multiplyByTen(-3)).toBe(-30);
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

//--------------------------ARE SAME LENGTH TESTS --------------------------

it("should return true if parameters are same length", () => {
  expect(helpers.areSameLength("hello", "hi")).toBeFalsy();
  expect(helpers.areSameLength("yo", "hi")).toBeTruthy();
});

// ---------------------ARE EQUAL TESTS ---------------------------------------

it("should check if two parameters are the same", () => {
  expect(helpers.areEqual(8, 8)).toBeTruthy();
  expect(helpers.areEqual(8, 9)).toBeFalsy();
  expect(helpers.areEqual("abc", "abc")).toBeTruthy();
  expect(helpers.areEqual("abc", "cba")).toBeFalsy();
  expect(helpers.areEqual(456, "456")).toBeFalsy(); 
});

// --------------------LESS THAN 90 TESTS -------------------------------

it('should return true if less than 90', () => {
    expect(helpers.lessThanNinety(91)).toBeFalsy();
    expect(helpers.lessThanNinety(89)).toBeTruthy();
    expect(helpers.lessThanNinety(90)).toBeFalsy();
});

// ------------------GREATER THAN 50 TESTS --------------------------

it('should return true if value is greater than fifty', () => {
    expect(helpers.greaterThanFifty(75)).toBeTruthy();
    expect(helpers.greaterThanFifty(50)).toBeFalsy();
    expect(helpers.greaterThanFifty(25)).toBeFalsy();

});

// ----------------------ADD TESTS--------------------------

it('should add both values and return the sum', () => {
    expect(helpers.add(75,25)).toBe(100);
    expect(helpers.add(-75,-25)).toBe(-100);
    expect(helpers.add(75,-25)).toBe(50);
});


// ----------------------SUBTRACT TESTS -------------------------------

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

// ----------------------MULTIPLY TESTS -----------------------------

it('should multiply both parameters and return product or param 1 and 2', () => {
    expect(helpers.multiply(6,9)).toBe(54); 
    expect(helpers.multiply(-3, 2)).toBe(-6); 
    expect(helpers.multiply(-10, -10)).toBe(100); 
}); 

//-----------------------GET REMAINDER TESTS---------------------

it('should return remainder of param 2 divided by param 1', () => {
    expect(helpers.getRemainder(5, 3)).toBe(2); 
    expect(helpers.getRemainder(4, 2)).toBe(0); 
}); 

// -------------------IS EVEN TEST ---------------------------------

it('should return whether value is even', () => {
    expect(helpers.isEven(4)).toBeTruthy(); 
    expect(helpers.isEven(3)).toBeFalsy(); 
    expect(helpers.isEven(2.5)).toBeFalsy(); 
})

//-------------------IS ODD TEST----------------------------------

it('should return whether value is odd', () => {
    expect(helpers.isOdd(4)).toBeFalsy();
    expect(helpers.isOdd(3)).toBeTruthy();  
}); 

//-----------------SQUARE TEST--------------------------------

it('should return squared value', () => {
    expect(helpers.square(4)).toBe(16); 
    expect(helpers.square(5)).toBe(25); 
}); 

//----------------CUBE TEST----------------------------------------

it('should return cubed value', () => {
    expect(helpers.cube(2)).toBe(8); 
    expect(helpers.cube(3)).toBe(27); 
}); 

//----------------RAISE TO POWER TEST-----------------------------

it('should return the result of the first param to the power of the second param', () => {
    expect(helpers.raiseToPower(10,2)).toBe(100); 
    expect(helpers.raiseToPower(1,5)).toBe(1); 
}); 

// --------------ROUND NUMBER TEST ---------------------------------

it('should return a rounded param value', () => {
    expect(helpers.roundNumber(10.6)).toBe(11); 
    expect(helpers.roundNumber(22.2)).toBe(22); 
})

//-----------------ROUND UP TEST ---------------------------------------

it('should return the value rounded up to the nearest whole number', () => {
    expect(helpers.roundUp(3.2)).toBe(4); 
    expect(helpers.roundUp(4.0)).toBe(4); 
})

// -----------------ADD EXCLAMATION POINT TEST ----------------------

it('should return a string with an exclamation concatenated to the end', () => {
    expect(helpers.addExclamationPoint('hello')).toBe('hello!');
    expect(helpers.addExclamationPoint('This is cool')).toBe("This is cool!"); 
}); 

//-----------------COMBINE NAMES TEST ----------------------------

it('should return a string that combines the first and last name parameters',  () => {
    expect(helpers.combineNames('Katia', 'Gilligan')).toBe('Katia Gilligan'); 
    expect(helpers.combineNames('Joshua', 'Henderson')).toBe('Joshua Henderson'); 
})

// ------------------ GET GREETING TEST-----------------

it('should return Hello with the name of the parameter as a string', () => {
    expect(helpers.getGreeting('Sam')).toBe('Hello Sam!'); 
    expect(helpers.getGreeting('Ed')).toBe('Hello Ed!')
}); 

// ---------------- GET RECTANGLE AREA TEST ----------------

it('should return the product of the two parameters', () => {
    expect(helpers.getRectangleArea(1,4)).toBe(4); 
    expect(helpers.getRectangleArea(4,4)).toBe(16); 
})

// ---------------- GET TRIANGLE AREA ----------------------

it('should return product of two parameters divided by two', () => {
    expect(helpers.getTriangleArea(3,2)).toBe(3); 
    expect(helpers.getTriangleArea(5,6)).toBe(15); 
}); 

// --------------- GET CIRCLE AREA --------------------------

it('should return the parameter squared and multiplied by pi', () => {
    expect(helpers.getCircleArea(4)).toBe(16 * Math.PI); 
    expect(helpers.getCircleArea(10)).toBe(100 * Math.PI); 
}); 

// --------------- GET RECTANGULAR PRISM VOLUME ----------------

it('should return the product of all three parameters', () => {
    expect(helpers.getRectangularPrismVolume(3,3,6)).toBe(54); 
    expect(helpers.getRectangularPrismVolume(2,1,2)).toBe(4); 
}); 

