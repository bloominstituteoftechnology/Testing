const helpers = require('./project-1');

describe('multiplication helpers', () => {
    describe('multiplyByTen', () => {
        it('should multiply a number by ten', () => {
            const expected = 350;
            
            const actual = multiply(35, 10);
        

            expect(actual).toEqual(expected);
        
        });
    });
});    

describe('subtractFive', () => {
    it('should subtract a number by five', () => { 
        const expected = 95;
        const actual = subtract(100, 5);

        expect(actual).toEqual(expected);

    })

});


describe('areSameLength', () => {
    it('Should return strings that are the same length', () => {

        const expected = (str1='si', str2='no');
        const actual = areSameLength(str1, str2);

        expect(actual).toBe(true);
    })

});

describe('areEqual', () => { 
    it('it should return two numbers that are equal', () => { 
        const expected = (x = 5, y = 5);
        const actual = equal(x, y);

        expect(actual).toBe(true);

    })

})



//FUNCS
function multiply(a, b) {
    return a * b;
}

function subtract(a, b) {
    return a - b;
}

function areSameLength(strA, strB) {
    return strA.length === strB.length;
    
}

function equal(x, y) {
    return x === y;
}
// start testing!



