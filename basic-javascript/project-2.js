/* eslint-disable arrow-parens */

const getBiggest = (x, y) => {
if (typeof x !== 'number' && typeof y !== 'number') {
  return NaN
}
  if (x > y) {
    return x;
  } else if (x === y) {
    return y;
  }
  return y;
};

const greeting = language => {
switch (language) {
    case 'German':
      return 'Guten Tag!';
    case 'Spanish':
      return 'Hola!';
    default:
      return 'Hello!';
  }
};

const isTenOrFive = num => {
if (typeof num !== 'number') {
  return false
}
  if (num === 10 || num === 5) {
    return true;
  }
  return false;
};

const isInRange = num => {
if (typeof num !== 'number') {
  return false
}
  if (num < 50 && num > 20) {
    return true;
  }
  return false;
};

const isInteger = num => {
if (typeof num !== 'number') {
    return false
  }
  if (Math.floor(num) === num) {
    return true;
  }
  return false;
};

const fizzBuzz = num => {
if (typeof num !== 'number') {
    return NaN
  }
  if (num % 5 === 0 && num % 3 === 0) {
    return 'fizzbuzz';
  } else if (num % 5 === 0) {
    return 'buzz';
  } else if (num % 3 === 0) {
    return 'fizz';
  }
  return num;
};

const isPrime = num => {
if (typeof num !== 'number') {
    return false
  }
  if (num < 2) {
    return false; // changed this to include decimals and negative numbers
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  if (Math.floor(num) !== num) {
    return false; // changed this to include decimals
  }
  return true;
};

const returnFirst = arr => {
if (!(Array.isArray(arr))) {
    return arr
  }
  return arr[0];
};

const returnLast = arr => {
if (!(Array.isArray(arr))) {
    return arr
  }
  return arr[arr.length - 1];
};

const getArrayLength = arr => {
if (!(Array.isArray(arr))) {
    return 1
  }
  return arr.length;
};

const incrementByOne = arr => {
if (!(Array.isArray(arr))) {
    return false
  }
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      arr[i]++;
  } else {
    return NaN;
  } 
}
  return arr
};

const addItemToArray = (arr, item) => {
if (!(Array.isArray(arr))) {
    return false
  }
  arr.push(item);
  return arr;
};

const addItemToFront = (arr, item) => {
if (!(Array.isArray(arr))) {
    return false
  }
  arr.unshift(item);
  return arr;
};

const wordsToSentence = words => {
if (typeof words !== 'string') {
    return false
  }
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

const contains = (arr, item) => {
  if (!(Array.isArray(arr))) {
    return false
  }
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

const addNumbers = numbers => {
if (!(Array.isArray(numbers))) {
  return false
}
  let sumOfNumbers = 0;
  for (let i = 0; i < numbers.length; i++) {
    sumOfNumbers += numbers[i];
  }
  return sumOfNumbers;
};

const averageTestScore = testScores => {
if (!(Array.isArray(testScores))) {
    return false
  }
  let totalSumScores = 0;
  let numberOfScore = 0;
  for (let i = 0; i < testScores.length; i++) {
    totalSumScores += testScores[i];
    numberOfScore++;
  }
  return totalSumScores / numberOfScore;
};

const largestNumber = numbers => {
if (!(Array.isArray(numbers))) {
  return false
}
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
