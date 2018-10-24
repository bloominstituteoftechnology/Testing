/* eslint-disable arrow-parens */

const getBiggest = (x, y) => {
  if (!x || !y || typeof x !== 'number' || typeof y !== 'number') {
    return 'Please enter an x-value and a y-value that is a number';
  }

  if (x > y) {
    return x;
  } else if (x < y) {
    return y;
  } else if (x === y) {
    return 'Same Value'
  } 
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
  if (num === 10 || num === 5) {
    return true;
  } else if (typeof num !== 'number') {
    return 'Please enter a number';
  }
  return false;
};

const isInRange = num => {
  if (!num || typeof num !== 'number') {
    return 'Please enter a number';
  }
  if (num < 50 && num > 20) {
    return true;
  }
  return false;
};

const isInteger = num => {
  if (!num || typeof num !== 'number' || Number.isInteger(num) === false) {
    return 'Please enter an integer (number with no decimal values)';
  }

  if (Math.floor(num) === num) {
    return true;
  }
  return false;
};

const fizzBuzz = num => {
  if (!num || typeof num !== 'number') {
    return 'Please enter a number';
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
  if (!arr || Array.isArray(arr) !== true) {
    return 'Please give an array';
  }
  return arr[0];
};

const returnLast = arr => {
  if (!arr || Array.isArray(arr) !== true) {
    return 'Please give an array';
  }
  return arr[arr.length - 1];
};

const getArrayLength = arr => {
  if (!arr || Array.isArray(arr) !== true) {
    return 'Please give an array';
  }
  return arr.length;
};

const incrementByOne = arr => {
  if (!arr || Array.isArray(arr) !== true) {
    return 'Please give an array';
  }
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      return 'Please make items in array, a number';
    }
    arr[i]++;
  }
  return arr;
};

const addItemToArray = (arr, item) => {
  if (!arr || !item || Array.isArray(arr) !== true) {
    return 'Please ensure to: give an array AND an item to add to the array';
  }
  arr.push(item);
  return arr;
};

const addItemToFront = (arr, item) => {
  if (!arr || !item || Array.isArray(arr) !== true) {
    return 'Please ensure to: give an array AND an item to add to the array';
  }
  arr.unshift(item);
  return arr;
};

const wordsToSentence = words => {
  if (!words || Array.isArray(words) !== true || words.length < 1) {
    return 'Please give an array of STRINGS, so we can STRING together a sweet sentence for you!';
  }
  let newSentence = '';
  for (let i = 0; i < words.length; i++) {
    if (typeof words[i] !== 'string') {
      return 'Please give an array of STRINGS, so we can STRING together a sweet sentence for you!';
    }
    if (i === 0) {
      newSentence += `${words[i]}`;
    } else {
      newSentence += ` ${words[i]}`;
    }
  }
  return newSentence;
};

const contains = (arr, item) => {
  if (!arr || !item || Array.isArray(arr) !== true) {
    return 'Please give an array and/or an item to check for';
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
  if (!numbers || Array.isArray(numbers) !== true || numbers.length < 1) {
    return 'Please give an ARRAY of NUMBERS';
  }
  let sumOfNumbers = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== 'number') {
      return 'Please give an ARRAY of NUMBERS';
    }
    sumOfNumbers += numbers[i];
  }
  return sumOfNumbers;
};

const averageTestScore = testScores => {
  if (!testScores || Array.isArray(testScores) !== true || testScores.length < 1) {
    return 'Please give an ARRAY of NUMBERS';
  }
  let totalSumScores = 0;
  let numberOfScore = 0;
  for (let i = 0; i < testScores.length; i++) {
    if (typeof testScores[i] !== 'number') {
      return 'Please give an ARRAY of NUMBERS';
    }
    totalSumScores += testScores[i];
    numberOfScore++;
  }
  return totalSumScores / numberOfScore;
};

const largestNumber = numbers => {
  if (!numbers || Array.isArray(numbers) !== true || numbers.length < 1) {
    return 'Please give an ARRAY of NUMBERS';
  }
  let biggestInteger = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== 'number') {
      return 'Please give an ARRAY of NUMBERS';
    }
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
