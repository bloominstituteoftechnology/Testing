const helpers = require('./project-1');

describe("project-1", () => {
    describe("multiplyByTen", () =>{
        it("should return the given number multiplied by ten", () =>{
            expect(helpers.multiplyByTen(5)).toBe(Number(50));
        })
        it("should return NaN if undefined", ()=>{
            expect(helpers.multiplyByTen(undefined)).toBe(NaN);
        })
        it("should return 0 if false", () => {
            expect(helpers.multiplyByTen(false)).toBe(0)
        })
        it("should return 0 if 0 is muliplied by 10", () =>{
            expect(helpers.multiplyByTen(0)).toBe(Number(0));
        })
    });

    describe("subtractFive", () => {
        it("should return the given number minus five", () => {
            expect(helpers.subtractFive(56)).toBe(Number(51));
        })
        it("should return -4 if true", () => {
            expect(helpers.subtractFive(true)).toBe(Number(-4));
        })
        it("should return -5 if false", () => {
            expect(helpers.subtractFive(false)).toBe(Number(-5));
        })
        it("should return NaN if empty", () => {
            expect(helpers.subtractFive()).toBe(NaN);
        })
        
    });

    describe("areSameLength", () => {
        it("should return true if lengths are equal", () => {
            expect(helpers.areSameLength("string1", "string2")).toBeTruthy();
        })
        it("should return true if strings are empty", () => {
            expect(helpers.areSameLength("", "")).toBeTruthy();
        })
        it("should return false if strings are different lengths", () => {
            expect(helpers.areSameLength("asddfd", "adf")).toBeFalsy();
        })

    });

    describe("areEqual", () => {
        it("should return true if numbers are equal", () => {
            expect(helpers.areEqual(8,8)).toBeTruthy();
        })
        it("should return false if numbers are not equal", () => {
            expect(helpers.areEqual(54,92)).toBeFalsy();
        })
        it("should return false if one argument is a string", () => {
            expect(helpers.areEqual("92",92)).toBeFalsy();
        })
        it("should return false if one argument is a boolean", () => {
            expect(helpers.areEqual(false,92)).toBeFalsy();
        })
        it("should return true if no arguments are defined", () => {
            expect(helpers.areEqual(undefined)).toBeTruthy();
        })
    });
    describe("lessThanNinety", () => {
        it("should return true if less than ninety", () => {
            expect(helpers.lessThanNinety(50)).toBeTruthy();
        })
        it("should return false if greater than or equal to ninety", () => {
            expect(helpers.lessThanNinety(90)).toBeFalsy();
        })
        it("should return false if undefined", () => {
            expect(helpers.lessThanNinety()).toBeFalsy();
        })
    });

    describe("greaterThanFifty", () => {
        it("should return true if greater than fifty", () => {
            expect(helpers.greaterThanFifty(51)).toBeTruthy();
        })
        it("should return false if less than or equal to fifty", () => {
            expect(helpers.greaterThanFifty(50)).toBeFalsy();
        })
        it("should return false if undefined", () => {
            expect(helpers.greaterThanFifty()).toBeFalsy();
        })
    });

    describe("add", () => {
        it("should add two numbers", () => {
            expect(helpers.add(1000, 1952)).toBe(Number(2952));
        })

    });

    describe("subtract", () => {
        it("should subtract two numbers", () => {
            expect(helpers.subtract(1000, 1952)).toBe(Number(-952));
        })
    });

    describe("divide", () => {
        it("should divide two numbers", () => {
            expect(helpers.divide("50", "20")).toBe(2.5);
        }) //ask about type coercion when it comes to division
    });

    describe("multiply", () => {
        it("should multiply two numbers", () => {
            expect(helpers.multiply("-5", "6")).toBe(-30);
        }) //ask about type coercion when it comes to multiplication
    });

    describe("getRemainder", () => {
        it("should get the remainder", () => {
            expect(helpers.getRemainder(10, 3)).toBe(1);
        })
    });

    describe("is number even", () => {
        it("should be true if even", () => {
            expect(helpers.isEven(144)).toBeTruthy();
        })
        it("should be false if odd", () => {
            expect(helpers.isEven("145")).toBeFalsy();
        })
    });

    describe("is number odd", () => {
        it("should be true if odd", () => {
            expect(helpers.isOdd(123)).toBeTruthy();
        })
        it("should be false if even", () => {
            expect(helpers.isOdd(120)).toBeFalsy();
        })
    });

    describe("multiply number by itself", () => {
        it("should square the number", () => {
            expect(helpers.square(7)).toBe(49);
        })
        it("should return NaN if undefined", () => {
            expect(helpers.square()).toBe(NaN);
        })

    });
    
    describe("cube the number", () =>{
        it("should cube the number", () => {
            expect(helpers.cube(222)).toBe(10941048);
        })
        it("should return NaN if undefined", () => {
            expect(helpers.cube()).toBe(NaN);
        })
    });

    describe("raise to exponent", () => {
        it("should raise to exponent", () =>{
            expect(helpers.raiseToPower(3,3)).toBe(27);
        })
        it("should return NaN if undefined or null", () =>{
            expect(helpers.raiseToPower(null)).toBe(NaN);
        })

    });

    describe("round number", () => {
        it("should round the number up", () => {
            expect(helpers.roundNumber(15.789)).toBe(16);
        })
        it("should round the number down", () => {
            expect(helpers.roundNumber(13.245)).toBe(13);
        })
        it("should return 1 if true", () => {
            expect(helpers.roundNumber(true)).toBe(1);
        })
        it("should return NaN if undefined", () => {
            expect(helpers.roundNumber()).toBe(NaN);
        })
    });
    
    describe("round up a given number", () => {
        it("should round any given number up", () => {
            expect(helpers.roundUp(12)).toBe(12);
        })
        it("should round any given number up", () => {
            expect(helpers.roundUp(165.1)).toBe(166);
        })
        it("should round any given number up", () => {
            expect(helpers.roundUp(2.65)).toBe(3);
        })
        it("return NaN if undefined", () => {
            expect(helpers.roundUp()).toBe(NaN);
        })
    });

    describe("add exclaimation point to string", () => {
        it("should return \"undefined!\" if undefined", () => {
            expect(helpers.addExclamationPoint(undefined)).toBe("undefined!");
        })
        it("should return \"Number!\" if Number", () => {
            expect(helpers.addExclamationPoint(8)).toBe("8!");
        })
        it("should return \"string!\" if String", () => {
            expect(helpers.addExclamationPoint("string")).toBe("string!");
        })
        it("should return \"NaN!\" if NaN", () => {
            expect(helpers.addExclamationPoint(NaN)).toBe("NaN!");
        })
    });

    describe("combine variables", () => {
        it("should concatenate variables", () => {
            expect(helpers.combineNames("Moises", "Dobarganes")).toBe("Moises Dobarganes");
        })
        it("should concatenate variables", () => {
            expect(helpers.combineNames("Dre\'Sean", "Williams")).toBe("Dre'Sean Williams");
        })

    });

    describe("concatenate greeting with variable", () => {
        it("should concatenate greeting with name", () => {
            expect(helpers.getGreeting("Christina")).toBe("Hello Christina!");
        })
        it("returns hello undefined if no var", () => {
            expect(helpers.getGreeting()).toBe("Hello undefined!");
        })
    });

    describe("rectangle area", () => {
        it("should return NaN if one or both variables is undefined", () =>{
            expect(helpers.getRectangleArea(undefined, undefined)).toBe(NaN);
        })
        
        it("should return 0 if one or both variables is null", () =>{
            expect(helpers.getRectangleArea(null, null)).toBe(0);
        })
        it("should return rectangle area", () =>{
            expect(helpers.getRectangleArea(10, 5)).toBe(50);
        })


    })
    describe("triangle area", () => {
        it("should return NaN if one or both variables is undefined", () =>{
            expect(helpers.getTriangleArea(undefined, undefined)).toBe(NaN);
        })
        
        it("should return 0 if one or both variables is null", () =>{
            expect(helpers.getTriangleArea(null, null)).toBe(0);
        })
        it("should return triangle area", () =>{
            expect(helpers.getTriangleArea(10, 5)).toBe(25);
        })


    })
    describe("area of circle", () => {
        it("should return NaN if radius is undefined", () =>{
            expect(helpers.getCircleArea(undefined)).toBe(NaN);
        })
        
        it("should return 0 if radius is null", () =>{
            expect(helpers.getCircleArea(null)).toBe(0);
        })
        it("should return area of circle", () =>{
            expect(helpers.getCircleArea(5)).toBe(78.539816339744835);
        })


    });

    describe("volume of rect prism", () => {
        it("should return volume (all sides same)", () => {
            expect(helpers.getRectangularPrismVolume(5, 5, 5)).toBe(125);
        })
        it("should return volume (sides diff lengths)", () => {
            expect(helpers.getRectangularPrismVolume(10, 5, 2)).toBe(100);
        })
        it("should return NaN if one or more variables is undefined", () => {
            expect(helpers.getRectangularPrismVolume(undefined, 5, 2)).toBe(NaN);
        })
        it("should return 0 if one or more variables is null", () => {
            expect(helpers.getRectangularPrismVolume(null, 5, 2)).toBe(0);
        })
    });
});
