/* eslint-disable arrow-parens */


// works with numbers and number strings
const getBiggest = (x, y) => {
  if (x === undefined || y === undefined) {
    return 'Please provide two values';
  }

  if (typeof x === 'object' || typeof x === 'boolean') {
    return 'Please provide two numbers';
  }

  if (typeof y === 'object' || typeof y === 'boolean') {
    return 'Please provide two numbers';
  }

  if (x > y) {
    return x;
  } else if (x === y) {
    return y;
  }
  return y;
};


// only works with strings
const greeting = language => {
  if (typeof language !== 'string') {
    return 'Please provide a string'
  }

  switch (language) {
    case 'German':
      return 'Guten Tag!';
    case 'Spanish':
      return 'Hola!';
    default:
      return 'Please provide language';
  }
};

const isTenOrFive = num => {
  if (num === 10 || num === 5) {
    return true;
  }
  return false;
};

const isInRange = num => {
  if (num < 50 && num > 20) {
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


// only works with arrays
const returnFirst = arr => {
  if (Array.isArray(arr)) {
    if (arr.length === 0) {
      return 'array can\'t be empty' 
    } else {
      return arr[0];
    }
  } else {
    return 'Please provide an array'
  }
};


// only works with arrays
const returnLast = arr => {
  if (Array.isArray(arr)) {
    if (arr.length === 0) {
      return 'array can\'t be empty' 
    } else {
      return arr[arr.length - 1];
    }
  } else {
    return 'Please provide an array'
  }
};


// only works with arrays
const getArrayLength = arr => {
  if (Array.isArray(arr)) {
    return arr.length;
  } else {
    return 'Please provide an array'
  }
};


// only works with arrays
const incrementByOne = arr => {

  if (Array.isArray(arr)) {
    if (arr.length === 0) {
      return 'array can\'t be empty' 
    } else {
      for (let i = 0; i < arr.length; i++) {
        arr[i]++;
      }
      return arr;
    }
  } else {
    return 'Please provide an array'
  }

};


// only works with arrays, no empty values
const addItemToArray = (arr, item) => {
  if (item === undefined || arr === undefined) {
    return 'please provide both values';
  }

  if (Array.isArray(arr)) {
    arr.push(item);
    return arr;
  } else {
    return 'Please provide an array'
  }

};


// only works with arrays, no empty values
const addItemToFront = (arr, item) => {
  if (item === undefined || arr === undefined) {
    return 'please provide both values';
  }

  if (Array.isArray(arr)) {
    arr.unshift(item);
    return arr;
  } else {
    return 'Please provide an array'
  }

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
