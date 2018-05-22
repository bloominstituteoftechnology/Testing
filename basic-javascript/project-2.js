/* eslint-disable arrow-parens */
//1
const getBiggest = (x, y) => {
  if (x > y) {
    return x;
  } else if (x === y) {
    return y;
  }
  return y;
}; //Done

//2
const greeting = language => {
  switch (language) {
    case 'German':
      return 'Guten Tag!';
    case 'Spanish':
      return 'Hola!';
    default:
      return 'Hello!';
  }
};//Done

//3
const isTenOrFive = num => {
  if (num === 10 || num === 5) {
    return true;
  }
  return false;
};//Done

//4
const isInRange = num => {
  if (num < 50 && num > 20) {
    return true;
  }
  return false;
};//Done

//5
const isInteger = num => {
  if (Math.floor(num) === num) {
    return true;
  }
  return false;
};

//6
const fizzBuzz = num => {
  if (num % 5 === 0 && num % 3 === 0) {
    return 'fizzbuzz';
  } else if (num % 5 === 0) {
    return 'buzz';
  } else if (num % 3 === 0) {
    return 'fizz';
  }
  return num;
};//Done

//7
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
};//Done

//8
const returnFirst = arr => {
  return arr[0];
};//Done

//9
const returnLast = arr => {
  return arr[arr.length - 1];
};//Done

//10
const getArrayLength = arr => {
  return arr.length;
};//Done

//11
const incrementByOne = arr => {
  for (let i = 0; i < arr.length; i++) {
    arr[i]++;
  }
  return arr;
}; //Done

//12
const addItemToArray = (arr, item) => {
  arr.push(item);
  return arr;
};//Done

//13
const addItemToFront = (arr, item) => {
  arr.unshift(item);
  return arr;
}; //Done

//14
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
}; //Done

//15
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
}; //Done

//16
const addNumbers = numbers => {
  let sumOfNumbers = 0;
  for (let i = 0; i < numbers.length; i++) {
    sumOfNumbers += numbers[i];
  }
  return sumOfNumbers;
}; //Done

//17
const averageTestScore = testScores => {
  let totalSumScores = 0;
  let numberOfScore = 0;
  for (let i = 0; i < testScores.length; i++) {
    totalSumScores += testScores[i];
    numberOfScore++;
  }
  return totalSumScores / numberOfScore;
}; //Done

//18
const largestNumber = numbers => {
  let biggestInteger = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > biggestInteger) {
      biggestInteger = numbers[i];
    }
  }
  return biggestInteger;
}; //Done

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
