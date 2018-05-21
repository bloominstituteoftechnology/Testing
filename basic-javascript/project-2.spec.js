const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/


describe('return biggest number', () => {
    it('Should compare and return the bigger number of the two', () => {
        //arange
        const bigger = funcs.getBiggest;
        //act
        const A = 3;
        const B = 5;
        const bigProd = bigger(A,B);
        //assert
        expect(bigProd).toBeGreaterThan(A);

    });

});
describe('return greet', () => {
    it('Should return a greeting in the language entered.Selection: German, Spanish, default is English', () => {
        //arange
        const greet = funcs.greeting;
        const gcall = (string) => {
            if (string === 'German') {
                expect(greetPrompt).toBe('Guten Tag!') 
            } else if (string === 'Spanish') {
                expect(greetPrompt).toBe('Hola!') 
            } else {
                expect(greetPrompt).toBe('Hello!')
            }
        }
        //act
        const A = 'German';
        const B = 'Spanish';
        let greetPrompt;
        // const greetPrompt = greet(B);
        // gcall(A);
        const laguage = (lang) => {
            greetPrompt = greet(lang);
            gcall(lang)
        }
        laguage(B)
      
    });

});

describe('is ten or five ', () => {
    it('Should return true or false if value is 5 or 10 ', () => {
        //arange
        const tenorFive = funcs.isTenOrFive;

        //act
        const A = 5;
        const B = 10;
        const tfprod = tenorFive(A);
        //assert
        expect(tfprod).toEqual(true)


    });

});

describe(' ', () => {
    it(' ', () => {
        //arange

        //act

        //assert

    });

});

describe(' ', () => {
    it(' ', () => {
        //arange

        //act

        //assert

    });

});

describe(' ', () => {
    it(' ', () => {
        //arange

        //act

        //assert

    });

});

describe(' ', () => {
    it(' ', () => {
        //arange

        //act

        //assert

    });

});

