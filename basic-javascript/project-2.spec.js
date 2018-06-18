const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('project-2', () => {
    describe('getBiggest', () => {
        it('returns string when given a non string numeric value', () => {
            expect(funcs.getBiggest('2', '4')).toBe("4");
        });

        it('should return the bigger number', () => {
            expect(funcs.getBiggest(6, 18)).toBe(18);
        });
    });

    describe("greeting", () =>{
        it("return greeting in German, Spanish, or default to English", () => {
            expect(funcs.greeting('German')).toBe("Guten Tag!")
            expect(funcs.greeting('Spanish')).toBe("Hola!")
            expect(funcs.greeting('')).toBe("Hello!")
        })
    })

    describe("isTenOrFive", () =>{
        it("return true if the number is 10 or 5", () => {
            expect(funcs.isTenOrFive(10)).toBeTruthy()
            expect(funcs.isTenOrFive(5)).toBeTruthy()      
        })
    })
    describe("isInRange", () =>{
        it("return true if number is between 20 and 50", () => {
            expect(funcs.isInRange(34)).toBeTruthy() 
            expect(funcs.isInRange(18)).toBeFalsy()      
        })
    })
    describe("isInteger", () =>{
        it("", () => {
            expect()    
        })
    })
    describe("fizzBuzz", () =>{
        it("", () => {
            expect()    
        })
    })
    describe("isPrime", () =>{
        it("", () => {
            expect()    
        })
    })
    describe("returnFirst", () =>{
        it("", () => {
            expect()    
        })
    })
    describe("returnLast", () =>{
        it("", () => {
            expect()    
        })
    })
    describe("getArrayLength", () =>{
        it("", () => {
            expect()    
        })
    })
    describe("incrementByOne", () =>{
        it("", () => {
            expect()    
        })
    })
    describe("addItemToArray", () =>{
        it("", () => {
            expect()    
        })
    })
    describe("addItemToFront", () =>{
        it("", () => {
            expect()    
        })
    })
    describe("wordsToSentence", () =>{
        it("", () => {
            expect()    
        })
    })
    describe("contains", () =>{
        it("", () => {
            expect()    
        })
    })
    describe("addNumbers", () =>{
        it("", () => {
            expect()    
        })
    })
    describe("averageTestScore", () =>{
        it("", () => {
            expect()    
        })
    })
    describe("largestNumber", () =>{
        it("", () => {
            expect()    
        })
    })

});