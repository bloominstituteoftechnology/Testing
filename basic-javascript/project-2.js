/* eslint-disable arrow-parens */

const getBiggest = (x, y) => {
  if (x && y && typeof x === "number" && typeof y === "number") {
    if (x > y) {
      return x;
    } else if (x === y) {
      return y;
    }
    return y;
  } else {
    return "invalid entry";
  }
};

const greeting = language => {
  if (typeof language === 'string') {
    switch (language) {
      case 'German':
        return 'Guten Tag!';
      case 'Spanish':
        return 'Hola!';
      default:
        return 'Hello!';
    };
  } else {
    return "invalid entry";
  }
};

const isTenOrFive = num => {
  if (num === 10 || num === 5 && typeof num === 'number') {
    return true;
  }
  return false;
};

const isInRange = num => {
  if (num < 50 && num > 20 && typeof num === 'number') {
    return true;
  }
  return false;
};

const isInteger = num => {
  if (Math.floor(num) === num) {
    return true;
  }
  return false;
};

const fizzBuzz = num => {
  if (num % 5 === 0 && num % 3 === 0 && typeof num === 'number') {
    return 'fizzbuzz';
  } else if (num % 5 === 0) {
    return 'buzz';
  } else if (num % 3 === 0) {
    return 'fizz';
  }
  return num;
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
  return arr === undefined ? null : arr[0];
};

const returnLast = arr => {
  return arr === undefined ? null : arr[arr.length - 1];
};

const getArrayLength = arr => {
  return arr === undefined ? null : arr.length;
};

const incrementByOne = arr => {
  if (arr !== undefined) {
    for (let i = 0; i < arr.length; i++) {
      arr[i]++;
    }
    return arr;
  }
};

const addItemToArray = (arr, item) => {
  if (arr === undefined) {
    return null;
  } else {
    arr.push(item);
    return arr;
  }
};

const addItemToFront = (arr, item) => {
  arr.unshift(item);
  return arr;
};

const wordsToSentence = words => {
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
    sumOfNumbers += numbers[i];
  }
  return sumOfNumbers;
};

const averageTestScore = testScores => {
  let totalSumScores = 0;
  let numberOfScore = 0;
  for (let i = 0; i < testScores.length; i++) {
    totalSumScores += testScores[i];
    numberOfScore++;
  }
  return totalSumScores / numberOfScore;
};

const largestNumber = numbers => {
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
