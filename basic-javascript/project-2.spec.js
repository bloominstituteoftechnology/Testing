const funcs = require('./project-2');
// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('getBiggest', () => {
    it('should return X if its larger than Y', () => {
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
    it('Should return \'Guten Tag!\' for German', () => {
        expect(funcs.greeting('German')).toBe('Guten Tag!');
    });
    it('Should return \'Hola!\' for Spanish', () => {
        expect(funcs.greeting('Spanish')).toBe('Hola!');
    });
    it('Should return \'Hello!\' if neither Spanish,German is entered',() => {
        // expect(funcs.greeting('Japanese')).toBe('Hello!');
        expect(funcs.greeting()).toBe('Hello!');
    })
});

