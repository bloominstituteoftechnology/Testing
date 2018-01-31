const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/


describe('Project-2 Functions', () => {

    describe('`getBiggest`', () => {
        const getBiggest = funcs.getBiggest;
        it('should be a function', () => {
            assert.typeOf(getBiggest, 'function');
        });
        it('returns correct typeof and output ', () => {
            const output = getBiggest(3, 2);
            assert.typeOf(output, 'number');
            assert.equal(output, 3); // bigger
        });
        it('returns correct typeof and output ', () => {
            const output = getBiggest(10, 27);
            assert.typeOf(output, 'number');
            assert.equal(output, 27); // smaller

        });
        it('returns correct typeof and output ', () => {
            const output = getBiggest(90, 90);
            assert.typeOf(output, 'number');
            assert.equal(output, 90); // equal
        });
    });

    describe(`greeting`, () => {
        const greeting = funcs.greeting;
        it('should be a function', () => {
            assert.typeOf(greeting, 'function');
        })
        it('should be correct typeof and output', () => {
            const output = greeting('German');
            assert.typeOf(output, 'string');
            assert.equal(output, 'Guten Tag!'); // german
        })
        it('should be correct typeof and output', () => {
            const output = greeting('Spanish');
            assert.typeOf(output, 'string');
            assert.equal(output, 'Hola!'); // spanish
        })
        it('should be correct typeof and output', () => {
            const output = greeting('English');
            assert.typeOf(output, 'string');
            assert.equal(output, 'Hello!'); // neither
        });
    });

    describe(`isTenOrFive`, () => {
        const isTenOrFive = funcs.isTenOrFive;
        it('should be a function', () => {
            assert.typeOf(isTenOrFive, 'function');
        })
        it('should be correct typeof and output', () => {
            const output = isTenOrFive(10);
            assert.typeOf(output, 'boolean');
            console.log(output);
            assert.equal(output, true); // either
        })
        it('should be correct typeof and output', () => {
            const output = isTenOrFive(80);
            assert.typeOf(output, 'boolean');
            assert.equal(output, false); // neither
        });
    });

    describe(`isInRange`, () => {
        const isInRange = funcs.isInRange;
        it('should be a function', () => {
            assert.typeOf(isInRange, 'function');
        })
        it('should be correct typeof and output', () => {
            const output = isInRange(34);
            assert.typeOf(output, 'boolean');
            assert.equal(output, true); // in range
        })
        it('should be correct typeof and output', () => {
            const output = isInRange(23424);
            assert.typeOf(output, 'boolean');
            assert.equal(output, false); // out of range
        });
    });

    describe(`isInteger`, () => {
        const isInteger = funcs.isInteger;
        it('should be a function', () => {
            assert.typeOf(isInteger, 'function');
        })
        it('should be correct typeof and output', () => {
            const output = isInteger(6);
            assert.typeOf(output, 'boolean');
            assert.equal(output, true); //equal
        })
        it('should be correct typeof and output', () => {
            const output = isInteger(-3.4);
            assert.typeOf(output, 'boolean');
            assert.equal(output, false); // not equal
        });
    });

    describe(`fizzBuzz`, () => {
        const fizzBuzz = funcs.fizzBuzz;
        it('should be a function', () => {
            assert.typeOf(fizzBuzz, 'function');
        })
        it('should be correct typeof and output', () => {
            const output = fizzBuzz(15);
            assert.typeOf(output, 'string');
            assert.equal(output, 'fizzbuzz'); // both
        })
        it('should be correct typeof and output', () => {
            const output = fizzBuzz(25);
            assert.typeOf(output, 'string');
            assert.equal(output, 'buzz'); // 5
        });
        it('should be correct typeof and output', () => {
            const output = fizzBuzz(9);
            assert.typeOf(output, 'string');
            assert.equal(output, 'fizz'); // 3
        });
        it('should be correct typeof and output', () => {
            const output = fizzBuzz(1);
            assert.typeOf(output, 'number');
            assert.equal(output, 1); // neither
        });
    });

    describe(`isPrime`, () => {
        const isPrime = funcs.isPrime;
        it('should be a function', () => {
            assert.typeOf(isPrime, 'function');
        })
        it('should be correct typeof and output', () => {
            const output = isPrime(-.23);
            assert.typeOf(output, 'boolean');
            assert.equal(output, false); // less than 0
        })
        it('should be correct typeof and output', () => {
            const output = isPrime(0);
            assert.typeOf(output, 'boolean');
            assert.equal(output, false); // equal to 1 or 0
        });
        it('should be correct typeof and output', () => {
            const output = isPrime(8);
            assert.typeOf(output, 'boolean');
            assert.equal(output, false); // modulo i
        });
        it('should be correct typeof and output', () => {
            const output = isPrime(2);
            assert.typeOf(output, 'boolean');
            assert.equal(output, true); // none
        });
    });

    describe(`returnFirst`, () => {
        const returnFirst = funcs.returnFirst;
        it('should be a function', () => {
            assert.typeOf(returnFirst, 'function');
        })
        it('should be correct typeof and output', () => {
            const output = returnFirst([1, 2, 3]);
            assert.typeOf(output, 'number');
            assert.equal(output, 1); // array
        })
        it('should be correct typeof and output', () => {
            const array = [{ a: 1 }, { b: 2 }, { b: 3 }]
            const output = returnFirst(array);
            assert.typeOf(output, 'object');
            assert.equal(output, array[0]); // array of objects
        });
        it('should be correct typeof and output', () => {
            const output = returnFirst(8);
            assert.typeOf(output, 'undefined');
            assert.equal(output, undefined); // undefined
        });
    });

    describe(`returnLast`, () => {
        const returnLast = funcs.returnLast;
        it('should be a function', () => {
            assert.typeOf(returnLast, 'function');
        })
        it('should be correct typeof and output', () => {
            const output = returnLast([1, 2, 3]);
            assert.typeOf(output, 'number');
            assert.equal(output, 3); // array
        })
        it('should be correct typeof and output', () => {
            const array = [{ a: 1 }, { b: 2 }, { b: 3 }]
            const output = returnLast(array);
            console.log(output);
            assert.typeOf(output, 'object');
            assert.equal(output, array[2]); // array of objects
        });
        it('should be correct typeof and output', () => {
            const output = returnLast(8);
            assert.typeOf(output, 'undefined');
            assert.equal(output, undefined); // undefined
        });
    });

    describe(`getArrayLength`, () => {
        const getArrayLength = funcs.getArrayLength;
        it('should be a function', () => {
            assert.typeOf(getArrayLength, 'function');
        })
        it('should be correct typeof and output', () => {
            const output = getArrayLength([1, 2, 3]);
            assert.typeOf(output, 'number');
            assert.equal(output, 3); // array
        })
        it('should be correct typeof and output', () => {
            const output = getArrayLength([]);
            assert.typeOf(output, 'number');
            assert.equal(output, 0); // undefined
        });
    });

    describe(`incrementByOne`, () => {
        const incrementByOne = funcs.incrementByOne;
        it('should be a function', () => {
            assert.typeOf(incrementByOne, 'function');
        })
        it('should be correct typeof and output', () => {
            const array = [1, 2, 3]
            const output = incrementByOne(array);
            assert.typeOf(output, 'array');
            assert.equal(output[0], 2);
            assert.equal(output[1], 3);
            assert.equal(output[2], 4);
        })
        it('should be correct typeof and output', () => {
            const array = [];
            const output = incrementByOne(array);
            assert.equal(output, array); // undefined
        });
    });

    describe(`addItemToArray`, () => {
        const addItemToArray = funcs.addItemToArray;
        it('should be a function', () => {
            assert.typeOf(addItemToArray, 'function');
        })
        it('should be correct typeof and output', () => {
            const array = [1, 2, 3]
            const output = addItemToArray(array, 4);
            assert.typeOf(output, 'array');
            assert.equal(output[3], 4); // array numbers
        })
        it('should be correct typeof and output', () => {
            const array = []
            const output = addItemToArray(array, 'hi');
            assert.typeOf(output, 'array');
            assert.equal(output[0], 'hi'); // array string
        });
    });

    describe(`addItemToFront`, () => {
        const addItemToFront = funcs.addItemToFront;
        it('should be a function', () => {
            assert.typeOf(addItemToFront, 'function');
        })
        it('should be correct typeof and output', () => {
            const array = [1, 2, 3]
            const output = addItemToFront(array, 0);
            assert.typeOf(output, 'array');
            assert.equal(output[0], 0); // array numbers
        })
        it('should be correct typeof and output', () => {
            const array = ['there']
            const output = addItemToFront(['there'], 'hi');
            assert.typeOf(output, 'array');
            assert.equal(output[0], 'hi'); // array string
        });
    });

    describe(`wordsToSentence`, () => {
        const wordsToSentence = funcs.wordsToSentence;
        it('should be a function', () => {
            assert.typeOf(wordsToSentence, 'function');
        })
        it('should be correct typeof and output', () => {
            const output = wordsToSentence(['one', 'two', 'three']);
            assert.typeOf(output, 'string');
            assert.equal(output, ['one two three']); // string
        })
    });

    describe(`contains`, () => {
        const contains = funcs.contains;
        it('should be a function', () => {
            assert.typeOf(contains, 'function');
        })
        it('should be correct typeof and output', () => {
            const output = contains(['one', 'two', 'three'], 'one');
            assert.typeOf(output, 'boolean');
            assert.equal(output, true); // false
        })
        it('should be correct typeof and output', () => {
            const output = contains(['one', 'two', 'three'], 'five');
            assert.typeOf(output, 'boolean');
            assert.equal(output, false); // false
        })
    });

    describe(`addNumbers`, () => {
        const addNumbers = funcs.addNumbers;
        it('should be a function', () => {
            assert.typeOf(addNumbers, 'function');
        })
        it('should be correct typeof and output', () => {
            const output = addNumbers([1, 2, 3]);
            assert.typeOf(output, 'number');
            assert.equal(output, 6);
        })
    });

    describe(`averageTestScore`, () => {
        const averageTestScore = funcs.averageTestScore;
        it('should be a function', () => {
            assert.typeOf(averageTestScore, 'function');
        })
        it('should be correct typeof and output', () => {
            const output = averageTestScore([5, 5, 7]);
            assert.typeOf(output, 'number');
            assert.equal(output, ((5 + 5 + 7) / 3));
        })
    });

    describe(`largestNumber`, () => {
        const largestNumber = funcs.largestNumber;
        it('should be a function', () => {
            assert.typeOf(largestNumber, 'function');
        })
        it('should be correct typeof and output', () => {
            const output = largestNumber([5, 10, 7]);
            assert.typeOf(output, 'number');
            assert.equal(output, 10);
        })
    });



});