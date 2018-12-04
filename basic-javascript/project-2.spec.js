

//==============================================================================

//-- Dependencies --------------------------------
const funcs = require('./project-2');

//------------------------------------------------
describe('getBiggest', () => {
    test('Handles Integers', () => {
        const input1 = 6
        const input2 = -19;
        const expectedResult = 6;
        const result = funcs.getBiggest(input1, input2);
        expect(result).toBe(expectedResult);
    });
});

//------------------------------------------------
describe('greeting', () => {
    test('Greet in German', () => {
        const result = funcs.greeting('German');
        expect(result).toBe('Guten Tag!');
    });
    test('Greet in Spanish', () => {
        const result = funcs.greeting('Spanish');
        expect(result).toBe('Hola!');
    });
    test('Greet in default English', () => {
        const result = funcs.greeting();
        expect(result).toBe('Hello!');
    });
});

//------------------------------------------------
describe('isTenOrFive', () => {
    test('Test 5', () => {
        const result = funcs.isTenOrFive(5);
        expect(result).toBeTruthy();
    });
    test('Test 10', () => {
        const result = funcs.isTenOrFive(10);
        expect(result).toBeTruthy();
    });
    test('Test 50', () => {
        const result = funcs.isTenOrFive(50);
        expect(result).toBeFalsy();
    });
});

//------------------------------------------------
describe('isInRange', () => {
    test('Test inside', () => {
        const result = funcs.isInRange(30);
        expect(result).toBeTruthy();
    });
    test('Test outside range', () => {
        const result = funcs.isInRange(0);
        expect(result).toBeFalsy();
    });
    test('Test nonsense', () => {
        const result = funcs.isInRange('German');
        expect(result).toBeFalsy();
    });
});

//------------------------------------------------
describe('isInteger', () => {
    test('Test Integer', () => {
        const result = funcs.isInteger(3);
        expect(result).toBeTruthy();
    });
    test('Test Float', () => {
        const result = funcs.isInteger(Math.PI);
        expect(result).toBeFalsy();
    });
    test('Test Infinity', () => {
        const result = funcs.isInteger(Infinity);
        expect(result).toBeFalsy();
    });
    test('Test NaN', () => {
        const result = funcs.isInteger(NaN);
        expect(result).toBeFalsy();
    });
});

//------------------------------------------------
describe('fizzBuzz', () => {
    test('Test Fizz (3)', () => {
        const result = funcs.fizzBuzz(9);
        expect(result).toBe('fizz');
    });
    test('Test Buzz (5)', () => {
        const result = funcs.fizzBuzz(20);
        expect(result).toBe('buzz');
    });
    test('Test FizzBuzz', () => {
        const result = funcs.fizzBuzz(30);
        expect(result).toBe('fizzbuzz');
    });
    test('Test other number', () => {
        const result = funcs.fizzBuzz(11);
        expect(result).toBe(11);
    });
});

//------------------------------------------------
describe('isPrime', () => {
    test('Test prime', () => {
        const result = funcs.isPrime(11);
        expect(result).toBeTruthy();
    });
    test('Test not prime', () => {
        const result = funcs.isPrime(12);
        expect(result).toBeFalsy();
    });
    test('Test One (not prime)', () => {
        const result = funcs.isPrime(1);
        expect(result).toBeFalsy();
    });
});

//------------------------------------------------
describe('returnFirst', () => {
    test('Check first value', () => {
        const result = funcs.returnFirst([4,3,2,1,0]);
        expect(result).toBe(4);
    });
});

//------------------------------------------------
describe('returnLast', () => {
    test('Check last value', () => {
        const result = funcs.returnLast([0,1,2,3,4]);
        expect(result).toBe(4);
    });
});

//------------------------------------------------
describe('getArrayLength', () => {
    test('Check array length', () => {
        const result = funcs.getArrayLength([0,1,2,3,4]);
        expect(result).toBe(5);
    });
});

//------------------------------------------------
describe('incrementByOne', () => {
    test('Increment each value by one', () => {
        const result = funcs.incrementByOne([0,1,2,3,4]);
        expect(result).toEqual([1,2,3,4,5]);
    });
    test('Do nothing', () => {
        const result = funcs.incrementByOne([]);
        expect(result).toEqual([]);
    });
});

//------------------------------------------------
describe('addItemToArray', () => {
    test('Check addition to array', () => {
        const result = funcs.addItemToArray([0,1,2,3], 4);
        expect(result).toEqual([0,1,2,3,4]);
    });
});

//------------------------------------------------
describe('addItemToFront', () => {
    test('Check addition to start of array', () => {
        const result = funcs.addItemToFront([1,2,3,4], 0);
        expect(result).toEqual([0,1,2,3,4]);
    });
});

//------------------------------------------------
describe('wordsToSentence', () => {
    test('Check words array converted to sentence', () => {
        const result = funcs.wordsToSentence([
            'Check',
            'words',
            'array',
            'converted',
            'to',
            'sentence',
        ]);
        expect(result).toBe("Check words array converted to sentence");
    });
});

//------------------------------------------------
describe('contains', () => {
    test('Can find item in array', () => {
        const result = funcs.contains([0,1,2,3,4], 0);
        expect(result).toBeTruthy();
    });
    test('Doesn\'t find item in array that doesn\'t include it', () => {
        const result = funcs.contains([0,1,2,3,4], 5);
        expect(result).toBeFalsy();
    });
    test('Find items by reference', () => {
        const searchItem = {test: 'test'};
        const result = funcs.contains([{}, {}, searchItem, {}], searchItem);
        expect(result).toBeTruthy();
    });
});

//------------------------------------------------
describe('averageTestScore', () => {
    test('Averages Scores', () => {
        const result = funcs.averageTestScore([0,1,2,3,4,5,6]);
        expect(result).toBe(3);
    });
    test('Throws on non-numeric values', () => {
        expect(() => {
            funcs.averageTestScore([0,1,2,3,'4',5,6]);
        }).toThrow();
    });
});

//------------------------------------------------
describe('largestNumber', () => {
    test('Selects largest number from an array of values', () => {
        const result = funcs.largestNumber([
            {}, '100', 1, -Infinity, NaN, 2, [],
        ]);
        expect(result).toBe(2);
    });
    test('Doesn\'t select NaN as number', () => {
        expect(funcs.largestNumber([NaN])).toBe(undefined);
    });
    test('Returns undefined if given an array without numbers', () => {
        expect(funcs.largestNumber([])).toBe(undefined);
    });
});



