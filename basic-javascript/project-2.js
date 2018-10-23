/* eslint-disable arrow-parens */

const getBiggest = (x, y) => {
  if (x > y) {
    return x;
  } else if (y > x) {
    return y;
  } else if (x === y) {
    return y;
  }
};

const greeting = language => {
  if (typeof language !== 'string') {
    return null;
  }

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
    return null;
  }

  if (num === 10 || num === 5) {
    return true;
  }
  return false;
};

const isInRange = num => {
  if (typeof num !== 'number') {
    return null;
  }

  if (num < 50 && num > 20) {
    return true;
  }
  return false;
};

const isInteger = num => {
  if (typeof num !== 'number') {
    return null;
  }

  if (Math.floor(num) === num) {
    return true;
  }
  return false;
};

const fizzBuzz = num => {
  if (num % 5 === 0 && num % 3 === 0) {
    return 'fizzbuzz';
  } else if (num % 5 === 0) {
    return 'buzz';
  } else if (num % 3 === 0) {
    return 'fizz';
  } else {
    return num;
  }
};

const isPrime = num => {
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

const returnFirst = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr[0];
};

const returnLast = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }

  return arr[arr.length - 1];
};

const getArrayLength = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }

  return arr.length;
};

const incrementByOne = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
    } else {
      arr[i]++;
    }
  }
  return arr;
};

const addItemToArray = (arr, item) => {
  if (!Array.isArray(arr)) {
    return null;
  }

  arr.push(item);
  return arr;
};

const addItemToFront = (arr, item) => {
  if (!Array.isArray(arr)) {
    return null;
  }

  arr.unshift(item);
  return arr;
};

const wordsToSentence = words => {
  if (!Array.isArray(words)) {
    return null;
  }

  let newSentence = '';
  for (let i = 0; i < words.length; i++) {
    if (typeof words[i] !== 'string') {
      return null;
    } else if (i === 0) {
      newSentence += `${words[i]}`;
    } else {
      newSentence += ` ${words[i]}`;
    }
  }
  return newSentence;
};

const contains = (arr, item) => {
  if (!Array.isArray(arr)) {
    return null;
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
  let sumOfNumbers = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== 'number') {
      return null;
    }
    sumOfNumbers += numbers[i];
  }
  return sumOfNumbers;
};

const averageTestScore = testScores => {
  if (!Array.isArray(testScores)) {
    return null;
  }

  let totalSumScores = 0;
  let numberOfScore = 0;
  for (let i = 0; i < testScores.length; i++) {
    if (typeof testScores[i] !== 'number') {
      return null;
    }
    totalSumScores += testScores[i];
    numberOfScore++;
  }
  return totalSumScores / numberOfScore;
};

const largestNumber = numbers => {
  if (!Array.isArray(numbers)) {
    return null;
  }

  let biggestInteger = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > biggestInteger) {
      if (typeof numbers[i] !== 'number') {
        return null;
      }
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
  largestNumber,
};
