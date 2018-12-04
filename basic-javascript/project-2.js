/* eslint-disable arrow-parens */

const getBiggest = (x, y) => {
  if (x > y) {
    return x;
  } else if (x === y) {
    return y;
  }
  return y;
};

const greeting = language => {
  switch (language) {
    case "German":
      return "Guten Tag!";
    case "Spanish":
      return "Hola!";
    default:
      return "Hello!";
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
    return "fizzbuzz";
  } else if (num % 5 === 0) {
    return "buzz";
  } else if (num % 3 === 0) {
    return "fizz";
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
  //added if statement to account for non-number being passed
  if (num && typeof num === "number" && num != NaN) {
    return true;
  } else {
    return null;
  }
};

const returnFirst = arr => {
  //added if statement to return undefined if passed empty array
  if (!arr.length) {
    return undefined;
  }
  return arr[0];
};

const returnLast = arr => {
  //added if statement to return undefined if passed empty array
  if (!arr.length) {
    return undefined;
  }
  return arr[arr.length - 1];
};

const getArrayLength = arr => {
  // added if statement to return undefined if passed non-array object
  if (!Array.isArray(arr)) {
    return undefined;
  }

  return arr.length;
};

const incrementByOne = arr => {
  for (let i = 0; i < arr.length; i++) {
    arr[i]++;
  }
  return arr;
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
  let newSentence = "";
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
  // added case for an empty array being passed (originally would still return zero)
  if (!numbers.length) {
    return null;
  }

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
    //added if statement making sure items are numbers
    if (typeof testScores[i] === "number" && testScores[i]) {
      totalSumScores += testScores[i];
      numberOfScore++;
    }
  }
  //added check for if the passed array is either empty or has no valid numbers
  if (numberOfScore === 0) {
    return undefined;
  }
  return totalSumScores / numberOfScore;
};

const largestNumber = numbers => {
  let biggestInteger = 0;
  //added countNumbers here to track how many numbers are in the array during the for loop
  let countNumbers = 0;

  for (let i = 0; i < numbers.length; i++) {
    //tracking amount of numbers in the array
    if (typeof numbers[i] === "number" && numbers[i]) {
      countNumbers++;
    }

    // if array contains no numbers or is empty, will return null instead of zero
    if (numbers[i] > biggestInteger) {
      biggestInteger = numbers[i];
    }
  }

  if (countNumbers === 0) {
    return null;
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
