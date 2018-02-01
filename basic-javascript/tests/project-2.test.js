const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. 
//You'll simply just have to create one :/

describe getBiggest = (x, y) => {
    it('should be a function', () => {
        if (x > y) {
            return x;
        } else if (x === y) {
            return y;
        }
        return y;
    };

    describe greeting = language => {
        it('should be a function', () => {
            switch (language) {
                case 'German':
                    return 'Guten Tag!';
                case 'Spanish':
                    return 'Hola!';
                default:
                    return 'Hello!';
            }
        };

        describe isTenOrFive = num => {
            it('should be a function', () => {

                if (num === 10 || num === 5) {
                    return true;
                }
                return false;
            };

            describe isInRange = num => {
                it('should be a function', () => {


                    if (num < 50 && num > 20) {
                        return true;
                    }
                    return false;
                };

                describe isInteger = num => {
                    it('should be a function', () => {
                        if (Math.floor(num) === num) {
                            return true;
                        }
                        return false;
                    };

                    describe fizzBuzz = num => {
                        it('should be a function', () => {
                            if (num % 5 === 0 && num % 3 === 0) {
                                return 'fizzbuzz';
                            } else if (num % 5 === 0) {
                                return 'buzz';
                            } else if (num % 3 === 0) {
                                return 'fizz';
                            }
                            return num;
                        };

                        describe isPrime = num => {
                            it('should be a function', () => {
                                if (num < 0) {
                                    return false;
                                }
                                if (num === 1 || num === 0) {
                                    return false;
                                }
                                for (let i = 2; i < num; i++) {
                                    if (num % i === 0) {
                                        return false;
                                    }
                                }
                                return true;
                            };

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
