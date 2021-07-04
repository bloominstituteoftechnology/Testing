const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('project-2', () => {
    it.only('getBiggest', () => {
        expect(funcs.getBiggest(10, 5)).toBe(10);
    });
});

describe('project-2', () => {
    it.only('greeting', () => {
        expect(funcs.greeting('German')).toBe('Guten Tag!');
        expect(funcs.greeting('Spanish')).toBe('Hola!');
        expect(funcs.greeting()).toBe('Hello!');
    });
});

describe('project-2', () => {
    it.only('isTenOrFive', () => {
        expect(funcs.isTenOrFive(33)).toBeFalsy();
        expect(funcs.isTenOrFive(10)).toBeTruthy();
    });
});

describe('project-2', () => {
    it.only('isInRange', () => {
        expect(funcs.isInRange(30)).toBeTruthy();
        expect(funcs.isInRange(10)).toBeFalsy();
    });
});

describe('project-2', () => {
    it.only('isInterger', () => {
        expect(funcs.isInteger(1)).toBeTruthy();
    });
});

describe('project-2', () => {
    it.only('fizzBuzz', () => {
        expect(funcs.fizzBuzz(15)).toBe('fizzbuzz')
    });
});

describe('project-2', () => {
    it.only('isPrime', () => {
        expect(funcs.isPrime(9)).toBeFalsy();
        expect(funcs.isPrime(13)).toBeTruthy();
    });
});

describe('project-2', () => {
    it.only('returnFirst', () => {
        expect(funcs.returnFirst([1, 2, 3, 4])).toBe(1)
    });
});

describe('project-2', () => {
    it.only('returnLast', () => {
        expect(funcs.returnLast([1, 2, 3, 4])).toBe(4)
    });
});

describe('project-2', () => {
    it.only('getArrayLength', () => {
        expect(funcs.getArrayLength([1, 2, 3, 4])).toBe(4)
    });
});

describe('project-2', () => {
    it.only('incrementByOne', () => {
        expect(funcs.incrementByOne(5)).toBe(5)
    });
});

// describe('project-2', () => {
//     it.only('addItemToArray', () => {
//         const expected = []
//     });
// });

// describe('project-2', () => {
//     it.only('addItemToFront', () => {
//         expect()
//     });
// });

// describe('project-2', () => {
//     it.only('wordsToSentence', () => {
//         expect()
//     });
// });

// describe('project-2', () => {
//     it.only('contains', () => {
//         expect()
//     });
// });

// describe('project-2', () => {
//     it.only('addNumbers', () => {
//         expect()
//     });
// });

// describe('project-2', () => {
//     it.only('averageTestScore', () => {
//         expect()
//     });
// });

// describe('project-2', () => {
//     it.only('largestNumber', () => {
//         expect(funcs.largestNumber)
//     });
// }); 



const {
    getBiggest,
    greeting,
    isTenOrFive,
    isInRange,
    isInteger,
    fizzBuzz,
    isPrime,
    returnFirst,
    returnLast,
    getArrayLength,
    incrementByOne,
    addItemToArray,
    addItemToFront,
    wordsToSentence,
    contains,
    addNumbers,
    averageTestScore,
    largestNumber
} = funcs;