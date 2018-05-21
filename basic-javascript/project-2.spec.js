const funcs = require('./project-2');

describe('check if biggest is returned',()=>{
    it('should return the biggest of two numbers',()=>{
        const bigboy = funcs.getBiggest
        let big = bigboy(3,6)
        expect(big).toEqual(6)
    })
})