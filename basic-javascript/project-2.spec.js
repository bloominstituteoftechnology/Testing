const funcs = require('./project-2');

describe('getBiggest', () => {
    test('6 or 7', () => {
        const result = funcs.getBiggest(6,7);
        expect(result).toBe(7)
    });
});

describe('greeting', () => {
    test('Norwegian', () => {
        const result = funcs.greeting('Norwegian');
        expect(result).toBe('Hello!');
    });
});

describe('isTenOrFive', () => {
    test('10is10', () => {
        const result = funcs.isTenOrFive(10);
        expect(result).toBe(true);
    });
});

describe('isInRange', () => {
    test('30IsInRange', () => {
        const result = funcs.isInRange(30);
        expect(result).toBe(true);
    });
});

describe('isInteger', () => {
    test('PiIsNot', () => {
        const result = funcs.isInteger(Math.PI);
        expect(result).toBe(false);
    });
});

describe('fizzBuzz', () => {
    test('15IsFizzbuzz', () => {
        const result = funcs.fizzBuzz(15);
        expect(result).toBe('fizzbuzz');
    });
});

describe('isPrime', () => {
    test('40IsNot', () => {
        const result = funcs.isPrime(40);
        expect(result).toBe(false);
    });
});

describe('returnFirst', () => {
    test('a', () => {
        const result = funcs.returnFirst(['a', 'b', 'c']);
        expect(result).toBe('a');
    });
});

describe('returnLast', () => {
    test('c', () => {
        const result = funcs.returnLast(['a', 'b', 'c']);
        expect(result).toBe('c');
    });
});

describe('getArrayLength', () => {
    test('c', () => {
        const result = funcs.getArrayLength(['a', 'b', 'c']);
        expect(result).toBe(3);
    });
});

describe('incrementByOne', () => {
    test('c', () => {
        const result = funcs.incrementByOne([1, 2, -1]);
        expect(result).toEqual([2, 3, 0]); //.toBe throws error. toEqual checks for deep equality
    });
});

describe('addItemToArray', () => {
    test('[1, [], {}]', () => {
        const result = funcs.addItemToArray([1, [], {}], 'a');
        expect(result).toEqual([1, [], {}, 'a']);
    });
});

describe('addItemToFront', () => {
    test('[1, [], {}]', () => {
        const result = funcs.addItemToFront([1, [], {}], 'a');
        expect(result).toEqual(['a', 1, [], {}]);
    });
});

describe('wordsToSentence', () => {
    test('one brown shoe', () => {
        const result = funcs.wordsToSentence(['one', 'brown', 'shoe']);
        expect(result).toBe('one brown shoe');
    });
});

describe('contains', () => {
    test('[1, [], {}]', () => {
        const result = funcs.contains([1, [], {}], 1);
        expect(result).toEqual(true);
    });
});

describe('addNumbers', () => {
    test('[1, -1, 10]=10', () => {
        const result = funcs.addNumbers([1, -1, 10]);
        expect(result).toEqual(10);
    });
});

describe('averageTestScore', () => {
    test('[12, 12, 0]', () => {
        const result = funcs.averageTestScore([12, 12, 0]);
        expect(result).toEqual(8);
    });
});

describe('largestNumber', () => {
    test('[12, -14, 0]', () => {
        const result = funcs.largestNumber([12, -14, 0]);
        expect(result).toEqual(12);
    });
});