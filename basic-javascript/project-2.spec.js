const funcs = require('./project-2');
// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('getBiggest', () => {
    it('should return X if its larger than Y', () => {
        // expect(funcs.getBiggest(undefined)).toBeNaN(true);
        // expect(funcs.getBiggest('two')).toBeNaN();
        
        expect(funcs.getBiggest(7, 5)).toEqual(7);
       
    })
    it('Should return y if its larger than X', () => { 
        expect(funcs.getBiggest(85, 1000)).toBe(1000);
    })
    it('Should return either X or Y if they are the same', () => { 
        expect(funcs.getBiggest(800, 800)).toBe(800);
    })
});

describe('greeting', () => { 



})