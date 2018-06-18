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

function multiply(a, b) {
    return a * b;
}

function subtract(a, b) {
    return a - b;
}
// start testing!




// const {
//     getBiggest,
//     greeting,
//     isTenOrFive,
//     isInRange,
//     isInteger,
//     fizzBuzz,
//     isPrime,
//     returnFirst,
//     returnLast,
//     getArrayLength,
//     incrementByOne,
//     addItemToArray,
//     addItemToFront,
//     wordsToSentence,
//     contains,
//     addNumbers,
//     averageTestScore,
//     largestNumber
// } = func;

// module.exports = func;