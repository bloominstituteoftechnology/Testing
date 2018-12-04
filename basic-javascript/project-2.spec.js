const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('greeting function', () =>{
    it('should return a string when a string is passed', ()=>{
        const result = funcs.greeting('English')
        expect(typeof result).toBe('string')
    });
    it('should return Guten Tag for case German', ()=>{
        expect(funcs.greeting('German')).toBe('Guten Tag!')
    });
    it('should return Hola! for case Spanish', ()=>{
        expect(funcs.greeting('Spanish')).toBe('Hola!')
    })
    it('should return Hello! for default case', ()=>{
        expect(funcs.greeting('any')).toBe('Hello!')
    })

    describe('should return null for non-string params',()=>{
        it('should return null for numbers', ()=>{
            expect(funcs.greeting(1)).toBe(null);
        })
        it('should return null for objects', ()=>{
            expect(funcs.greeting({1:'any'})).toBe(null);
        })
        it('should return null for boolean values', ()=>{
            expect(funcs.greeting(false)).toBe(null);
        })
    })
})

describe('isTenOrFive function', ()=>{
    describe('should return true for 10 or 5', ()=>{
        it('5', ()=>{
          expect(funcs.isTenOrFive(5)).toBe(true);  
        });
        it('10', ()=>{
          expect(funcs.isTenOrFive(10)).toBe(true);  
        });
    });

    it('should return false for non 10 or 5 numbers', ()=>{
        expect(funcs.isTenOrFive(4)).toBe(false);
    })

    describe('should return null for non-number params',()=>{
        it('should return null for strings', ()=>{
            expect(funcs.isTenOrFive('hi')).toBe(null);
        })
        it('should return null for objects', ()=>{
            expect(funcs.isTenOrFive({1:'any'})).toBe(null);
        })
        it('should return null for boolean values', ()=>{
            expect(funcs.isTenOrFive(false)).toBe(null);
        })
    })
})