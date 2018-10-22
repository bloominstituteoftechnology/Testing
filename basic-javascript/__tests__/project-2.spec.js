const funcs = require('../project-2');


describe('getBiggest()', ()=> {
    it('should return x when x is larger', ()=> {
        const actual = funcs.getBiggest(4, 1);
        expect(actual).toBe(4);
    });

    it('should return y when y is larger', ()=> {
        const actual = funcs.getBiggest(-12, 0);
        expect(actual).toBe(0);
    });

    it('should return y when x and y are equal', ()=> {
        const actual = funcs.getBiggest(0, 0);
        expect(actual).toBe(0);
    });
});

describe('greeting()', ()=> {
    it('should return Hello when no language specified', ()=> {
        const actual = funcs.greeting();
        expect(actual).toBe('Hello!');
    });

    it('should return Guten Tag when language is German', ()=> {
        const actual = funcs.greeting('German');
        expect(actual).toBe('Guten Tag!');
    });

    it('should return Hola when language is Spanish', ()=> {
        const actual = funcs.greeting('Spanish');
        expect(actual).toBe('Hola!');
    });

    it('should return I dont speak Italian when language is Italian', ()=> {
        const actual = funcs.greeting('Italian');
        expect(actual).toBe('I dont speak Italian');
    });
});
// whoops.. there is no test suite for this file. You'll simply just have to create one :/
