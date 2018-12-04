/* eslint-disable arrow-parens */

const getBiggest = (x, y) => x > y ? x : y;

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

const isTenOrFive = num => num === 10 || num === 5 ? true : false;

const isInRange = num => num < 50 && num > 20 ? true : false;

const isInteger = num => Math.floor(num) === num ? true : false;

const fizzBuzz = num => {
  // return num % 5 === 0 && num % 3 === 0 ? 'fizzbuzz' : num % 5 === 0 ? 'buzz' : num %   3 === 0 ? 'fizz' : num;
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
  return arr[0];
};

const returnLast = arr => {
  return arr[arr.length - 1];
};

const getArrayLength = arr => {
  return arr.length;
};

const incrementByOne = arr => {
  return arr.map(item => item + 1);
};

const addItemToArray = (arr, item) => {
  arr.push(item);
  return arr;
};

const addItemToFront = (arr, item) => {
  arr.unshift(item);
  return arr;
};

const wordsToSentence = words => {
  return words.join(' ');
};

const contains = (arr, item) => {
  let itemCounter = arr.indexOf(item);
  return itemCounter > -1 ? true : false;
};

const addNumbers = numbers => {
  return numbers.reduce((total, number) => total + number, 0);
};

const averageTestScore = testScores => {
  return testScores.reduce((total, score) => total + score, 0) / testScores.length;
};

const largestNumber = numbers => {
  return Math.max(...numbers);
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