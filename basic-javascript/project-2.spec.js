const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('project-2', () => {
    describe('getBiggest', () => {
        it('returns NaN when given a non numeric value', () => {
            expect(funcs.getBiggest(2, 4)).toBe(4);
            expect(funcs.getBiggest(4, 4)).toBe(4);
        });

        it('should return the bigger number', () => {});
    });

    describe("greeting", () =>{
        it("return greeting in German, Spanish, or default to English", () => {
            expect(funcs.greeting('German')).toBe("Guten Tag!")
            expect(funcs.greeting('Spanish')).toBe("Hola!")
            expect(funcs.greeting('')).toBe("Hello!")
        })
    })

    describe("", () =>{
        it("", () => {
            expect()    
        })
    })
    describe("", () =>{
        it("", () => {
            expect()    
        })
    })
    describe("", () =>{
        it("", () => {
            expect()    
        })
    })
    describe("", () =>{
        it("", () => {
            expect()    
        })
    })
    describe("", () =>{
        it("", () => {
            expect()    
        })
    })
    describe("", () =>{
        it("", () => {
            expect()    
        })
    })
    describe("", () =>{
        it("", () => {
            expect()    
        })
    })
    describe("", () =>{
        it("", () => {
            expect()    
        })
    })
    describe("", () =>{
        it("", () => {
            expect()    
        })
    })
    describe("", () =>{
        it("", () => {
            expect()    
        })
    })
    describe("", () =>{
        it("", () => {
            expect()    
        })
    })
    describe("", () =>{
        it("", () => {
            expect()    
        })
    })
    describe("", () =>{
        it("", () => {
            expect()    
        })
    })
    describe("", () =>{
        it("", () => {
            expect()    
        })
    })
    describe("", () =>{
        it("", () => {
            expect()    
        })
    })
    describe("", () =>{
        it("", () => {
            expect()    
        })
    })
    describe("", () =>{
        it("", () => {
            expect()    
        })
    })
    describe("", () =>{
        it("", () => {
            expect()    
        })
    })
});