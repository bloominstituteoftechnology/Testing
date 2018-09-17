const helpers = require('./project-1');

// start testing!

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
  
  //--------------------------ARE SAME LENGTH TESTS --------------------------
  
  it("should return true if parameters are same length", () => {
    expect(helpers.areSameLength("hello", "hi")).toBeFalsy();
    expect(helpers.areSameLength("yo", "hi")).toBeTruthy();
  });
  
  // ---------------------ARE EQUAL TESTS ---------------------------------------
  
  it("should check if to parameters are the same", () => {
    expect(helpers.areEqual(8, 8)).toBeTruthy();
    expect(helpers.areEqual(8, 9)).toBeFalsy();
    expect(helpers.areEqual("abc", "abc")).toBeTruthy();
    expect(helpers.areEqual("abc", "cba")).toBeFalsy();
    expect(helpers.areEqual(456, "456")).toBe(false);
  });
  
  // --------------------LESS THAN 90 TESTS -------------------------------
  
  it('should return true if less than 90', () => {
      expect(helpers.lessThanNinety('89')).toBeTruthy();
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
    
  });
  
  it('should add both values and return the sum', () => {
      expect(helpers.add(-75,-25)).toBe(-100);
      expect(helpers.add(75,-25)).toBe(50);
      expect(helpers.add(-75,25)).toBe(-50);
  
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

//-----------------------NUMBER IS EVEN---------------------
  it('should check if number is an even number', () => {
    expect(helpers.isEven(10)).toBe(true);
    expect(helpers.isEven(3)).toBe(false);
});

//----------------------NUMBER IS ODD----------------------
 it('should check if number is an odd number', () => {
    expect(helpers.isOdd(144)).toBe(false);
    expect(helpers.isOdd(8675309)).toBe(true);
});

//---------------------SQUARE OF NUMBER-----------------------
 it('should square number', () => {
    expect(helpers.square(10)).toBe(100);
    expect(helpers.square(3)).toBe(9);
});

//--------------------CUBED NUMBER------------------------
 it('should cube number', () => {
    expect(helpers.cube(10)).toBe(1000);
    expect(helpers.cube(3)).toBe(27);
});

//-----------------------POWER OF NUMBER---------------------
 it('should raise a given number to the power of the exponent', () => {
    expect(helpers.raiseToPower(10,3)).toBe(1000);
    expect(helpers.raiseToPower(3,5)).toBe(243);
});

//---------------------ROUND TO NEAREST INTEGER-----------------------
 it('should round the number to the nearest integer', () => {
    expect(helpers.roundNumber(5.5)).toBe(6);
    expect(helpers.roundNumber(2.2)).toBe(2);
});

//----------------------ROUND UP----------------------
 it('should round number up to the nearest integer', () => {
    expect(helpers.roundUp(10.1)).toBe(11);
    expect(helpers.roundUp(9.89)).toBe(10);
});

//--------------------ADD EXCLAMATION------------------------
 it('should add exclamation to the string', () => {
    expect(helpers.addExclamationPoint('hi')).toBe('hi!');
    expect(helpers.addExclamationPoint('Sean')).toBe('Sean!');
});

//----------------------RETURN FULL NAME----------------------
 it('should return full name based on first and last name', () => {
    expect(helpers.combineNames('Sean', 'Kennedy')).toBe('Sean Kennedy');
    expect(helpers.combineNames('Brian', 'Kennedy')).toBe('Brian Kennedy');
});

//----------------------GREETING----------------------
 it('should greet someone based on name provided', () => {
    expect(helpers.getGreeting('Sean')).toBe('Hello Sean!');
    expect(helpers.getGreeting('Luis')).toBe('Hello Luis!');
});

//---------------------AREA OF RECTANGLE-----------------------
 it('get the area of a rectangle based on the length and width', () => {
    expect(helpers.getRectangleArea(7,3)).toBe(21);
    expect(helpers.getRectangleArea(10, 70)).toBe(700);
});

//----------------------AREA OF TRIANGLE----------------------
 it('get the area of a triangle based on the base and height', () => {
    expect(helpers.getTriangleArea(4,6)).toBe(12);
    expect(helpers.getTriangleArea(10, 50)).toBe(250);
});

//-----------------------AREA OF CIRCLE---------------------
 it('get the area of a circle based on the radius', () => {
    expect(helpers.getCircleArea(4)).toBeCloseTo(50, 0);
    expect(helpers.getCircleArea(10)).toBeCloseTo(314, 0);
});

//--------------------VOLUME OF PRISM------------------------
 it('get the volume of a rectangular prism based on length, height, and width', () => {
    expect(helpers.getRectangularPrismVolume(4, 50, 10)).toBe(2000);
    expect(helpers.getRectangularPrismVolume(10, 10, 30)).toBe(3000);
});
