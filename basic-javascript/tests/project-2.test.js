const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. 
//You'll simply just have to create one :/
//describe('`raiseToPower`', () => {
//it('should be a function', () => {
//   const raiseToPower = funcs.raiseToPower;
//   assert.typeOf(raiseToPower, 'function');
//  assert.equal(raiseToPower(5, 3), 125);
//});
// });

describe('`getBiggest`', () => {
    it('should be a function', () => {
        const getBiggest = funcs.getBiggest;
        assert.typeOf(getBiggest, 'function');
        assert.equal(getBiggest(x, y), true);
    });
});

describe('`greeting`', () => {
    it('should be a function', () => {
        const getGreeting = funcs.getGreeting;
        assert.typeOf(getGreeting, 'function');
        assert.equal(getGreeting('German', true);
    });
});

describe(`'isTenOrFive`', () => {
    it('should be a function', () => {
        const isTenOrFive = funcs.isTenOrFive;
        assert.typeOf(isTenOrFive, 'function');
        assert.equal(isTenOrFive, true);
    });
});

describe(`'isInRange`', () => {
    it('should be a function', () => {
        const isInRange = funcs.isInRange;
        assert.typeOf(isInRange, 'function');
        assert.equal(isInRange, true);
    });
});

describe(`'isInteger`', () => {
    it('should be a function', () => {
        const isInteger = funcs.isInRange;
        assert.typeOf(isInteger, 'function');
        assert.equal(isInteger, true);
    };

describe(`'fizzBuzz`', () => {
    it('should be a function', () => {
        const fizzBuzz = funcs.fizzBuzz;
        assert.typeOf(fizzBuzz, 'function');
        assert.equal(fizzBuzz, true);

describe`'isPrime`', () => {
    it('should be a function', () => {
        const isPrime = funcs.isPrime;
        assert.typeOf(isPrime, 'function');
        assert.equal(isPrime, true);


describe returnFirst = arr => {
                it('should be a function', () => {
                    return arr[0];
                };

                describe returnLast = arr => {
                    it('should be a function', () => {
                        return arr[arr.length - 1];
                    };

                    describe getArrayLength = arr => {
                        it('should be a function', () => {
                            return arr.length;
                        };

                        describe incrementByOne = arr => {
                            it('should be a function', () => {
                                for (let i = 0; i < arr.length; i++) {
                                    arr[i]++;
                                }
                                return arr;
                            };

                            describe addItemToArray = (arr, item) => {
                                it('should be a function', () => {
                                    arr.push(item);
                                    return arr;
                                };

                                describe addItemToFront = (arr, item) => {
                                    it('should be a function', () => {
                                        arr.unshift(item);
                                        return arr;
                                    };

                                    describe wordsToSentence = words => {
                                        it('should be a function', () => {
                                            let newSentence = '';
                                            for (let i = 0; i < words.length; i++) {
                                                if (i === 0) {
                                                    newSentence += `${words[i]}`;
                                                } else {
                                                    newSentence += ` ${words[i]}`;
                                                }
                                            }
                                            return newSentence;
                                        };

                                        describe contains = (arr, item) => {
                                            it('should be a function', () => {
                                                let itemCounter = 0;
                                                for (let i = 0; i < arr.length; i++) {
                                                    if (arr[i] === item) {
                                                        itemCounter++;
                                                    }
                                                }
                                                if (itemCounter > 0) {
                                                    return true;
                                                }
                                                return false;
                                            };

                                            describe addNumbers = numbers => {
                                                it('should be a function', () => {
                                                    let sumOfNumbers = 0;
                                                    for (let i = 0; i < numbers.length; i++) {
                                                        sumOfNumbers += numbers[i];
                                                    }
                                                    return sumOfNumbers;
                                                };

                                                describe averageTestScore = testScores => {
                                                    it('should be a function', () => {
                                                        let totalSumScores = 0;
                                                        let numberOfScore = 0;
                                                        for (let i = 0; i < testScores.length; i++) {
                                                            totalSumScores += testScores[i];
                                                            numberOfScore++;
                                                        }
                                                        return totalSumScores / numberOfScore;
                                                    };

                                                    describe largestNumber = numbers => {
                                                        it('should be a function', () => {
                                                            let biggestInteger = 0;
                                                            for (let i = 0; i < numbers.length; i++) {
                                                                if (numbers[i] > biggestInteger) {
                                                                    biggestInteger = numbers[i];
                                                                }
                                                            }
                                                            return biggestInteger;
                                                        };

                                                        module.exports = {
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
                                                        };
