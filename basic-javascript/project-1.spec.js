const helpers = require("./project-1");

// -------------------------- (*) BY TEN -------------------------

it("multiply both positive and negative by 10", () => {
  expect(helpers.multiplyByTen(10)).toBe(100);
  expect(helpers.multiplyByTen(-10)).toBe(-100);
});

it("multiply string parameter value", () => {
  expect(helpers.multiplyByTen("-10")).toBe(-100);
  expect(helpers.multiplyByTen("10")).toBe(100);
});

// ------------------------ (-) FIVE ----------------------------

it("subtract the number by 5", () => {
  expect(helpers.subtractFive(10)).toBe(5);
  expect(helpers.subtractFive(-10)).toBe(-15);
});

it("subtract the number by 5 even if string", () => {
  expect(helpers.subtractFive("10")).toBe(5);
});

//--------------------------SAME LENGTH --------------------------

it("return true if parameters are same length", () => {
  expect(helpers.areSameLength("Hello", "Hey")).toBeFalsy();
  expect(helpers.areSameLength("NO", "YO")).toBeTruthy();
});

// ---------------------ARE = ---------------------------------------

it("check if two parameters are the same", () => {
  expect(helpers.areEqual(10, 10)).toBeTruthy();
  expect(helpers.areEqual(10, 9)).toBeFalsy();
  expect(helpers.areEqual("123", "123")).toBeTruthy();
  expect(helpers.areEqual("abc", "cba")).toBeFalsy();
  expect(helpers.areEqual(10, "10")).toBeFalsy(); 
});

// -------------------- < 90 -------------------------------

it('return true if less than 90', () => {
    expect(helpers.lessThanNinety(100)).toBeFalsy();
    expect(helpers.lessThanNinety(10)).toBeTruthy();
    expect(helpers.lessThanNinety(90)).toBeFalsy();
});

// ------------------ > 50 --------------------------

it('return true if value is greater than fifty', () => {
    expect(helpers.greaterThanFifty(51)).toBeTruthy();
    expect(helpers.greaterThanFifty(50)).toBeFalsy();
    expect(helpers.greaterThanFifty(10)).toBeFalsy();

});

// ---------------------- + --------------------------

it('add both values and return the sum', () => {
  expect(helpers.add(25,25)).toBe(50);
  expect(helpers.add(-50,-50)).toBe(-100);
  expect(helpers.add(10,-10)).toBe(0);
});


// ---------------------- ( - ) -------------------------------

it('subtract second param from first param', () => {
  expect(helpers.subtract(10,10)).toBe(0); 
  expect(helpers.subtract(-10,10)).toBe(-20); 
})

it('subtract param 2 from param 2, as a string', () => {
  expect(helpers.subtract('-10', 10)).toBe(-20); 
  expect(helpers.subtract('0', '0')).toBe(0)
})

// ----------------------- ( / ) -----------------------------------

it('divide param 1 by param 2', () => {
  expect(helpers.divide(10, 10)).toBe(1); 
  expect(helpers.divide(-5, -5)).toBe(1); 
}); 

// ---------------------- ( * ) -----------------------------

it('multiply both parameters and return product or param 1 and 2', () => {
  expect(helpers.multiply(9,9)).toBe(81); 
  expect(helpers.multiply(-10, -10)).toBe(100); 
}); 

//-----------------------REMAINDER---------------------

it('return remainder of param 2 divided by param 1', () => {
  expect(helpers.getRemainder(10, 3)).toBe(1); 
  expect(helpers.getRemainder(5, 1)).toBe(0); 
}); 

// -------------------IS EVEN ---------------------------------

it('return whether value is even', () => {
  expect(helpers.isEven(10)).toBeTruthy(); 
  expect(helpers.isEven(5)).toBeFalsy(); 
})

//-------------------IS ODD----------------------------------

it('return whether value is odd', () => {
  expect(helpers.isOdd(10)).toBeFalsy();
  expect(helpers.isOdd(11)).toBeTruthy();  
}); 

//-----------------SQUARE--------------------------------

it('return squared value', () => {
  expect(helpers.square(9)).toBe(81); 
  expect(helpers.square(10)).toBe(100); 
}); 

//----------------CUBE----------------------------------------

it('return cubed value', () => {
  expect(helpers.cube(10)).toBe(1000); 
  expect(helpers.cube(0)).toBe(0); 
});

//----------------RAISE TO POWER-----------------------------

it('return the result of the first param to the power of the second param', () => {
  expect(helpers.raiseToPower(10,2)).toBe(100); 
  expect(helpers.raiseToPower(10,3)).toBe(1000); 
}); 

// --------------ROUND NUMBER ---------------------------------

it('return a rounded param value', () => {
  expect(helpers.roundNumber(10.9)).toBe(11); 
  expect(helpers.roundNumber(10.1)).toBe(10); 
})

//-----------------ROUND ^ ---------------------------------------

it('return the value rounded up to the nearest whole number', () => {
  expect(helpers.roundUp(9.2)).toBe(10); 
  expect(helpers.roundUp(100.0)).toBe(100); 
})

// -----------------ADD (!) ----------------------

it('return a string with an exclamation concatenated to the end', () => {
  expect(helpers.addExclamationPoint('GO AWAY')).toBe('GO AWAY!');
  expect(helpers.addExclamationPoint('Tadaaaaaa')).toBe("Tadaaaaaa!"); 
}); 

//-----------------COMBINE NAMES ----------------------------

it('return a string that combines the first and last name parameters',  () => {
  expect(helpers.combineNames('Terrance', 'Danckert')).toBe('Terrance Danckert'); 
  expect(helpers.combineNames('Jimmy', 'Neutron')).toBe('Jimmy Neutron'); 
})

// ------------------ GREETING-----------------

it('return Hello with the name of the parameter as a string', () => {
  expect(helpers.getGreeting('Dude')).toBe('Hello Dude!'); 
  expect(helpers.getGreeting('Dudet')).toBe('Hello Dudet!')
}); 