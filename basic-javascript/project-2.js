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
  switch (language.toLowerCase()) {
    case 'german':
      return 'Guten Tag!';
    case 'spanish':
      return 'Hola!';
    default:
      return 'Hello!';
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
   const arr = isArray(numbers)
   if(arr){
     for (let i = 0; i< arr.length; i++){
       const numConverter = isNumber(arr[i])
       if(numConverter[0] > biggestInteger){
         biggestInteger = numConverter[0]; 
       }
     }
     return biggestInteger; 
   } else {
     return false; // not an array 
   }
};

function isArray (arr){
  if(Array.isArray(arr) === true ){
    return arr;
  } else {
    return false; 
  }
}

function isNumber(...args){
  for(let i = 0; i<args.length; i++){
    if(typeof args[i] === 'string'){
      //Perform a check if it can be converted to Number.
      test = Number(args[i])
      if(test){
        args[i] = test
      }else {
        args[i] = 0; 
      }
    } else if (args[i] === undefined){
      args[i] = 0; 
    }
  }
  return args; 
}

function anyZeros (...args) {
  for(let i = 0; i < args.length; i++){
    if(args[i] === 0){
      return 0; 
    }
  }
  return args; 
 }

 function checkArray (ar1, ar2){
  for (let i = 0; i < ar1.length; i++) {
    if (Array.isArray(ar1[i]) && Array.isArray(ar2[i])) {
      if (ar1[i].length === ar2[i].length) {
        const anotherCheck = checkArray(ar1[i], ar2[i])
        if (!anotherCheck) {
          return false;
        }
      // if length is not the same no need to check. 
      } else {
        return false;
       }
    //first if 
    } else if (typeof ar1[i] === 'object' && typeof ar2[i] === 'object' && !(ar1[i] === null && ar2[i] === null)) {
        const checkAgain = isObject(ar1[i], ar2[i]);
        if (!checkAgain) {
            return false;
        }
    } else if (ar1[i] !== ar2[i]) {
        return false;
    }
} // end of for loop. 
return true;
}

function isObject (obj1, obj2) {
  if (Array.isArray(obj1 && Array.isArray(obj2))) {
    if (obj1.length === obj2.length) {
      const anotherCheck = checkArray(obj1, obj2)
      if (!anotherCheck) {
        return false;
      }
    } else {
       //length doesn't match don't do nothing
       return false;
      }
  }
  if (Object.keys(obj1).length === Object.keys(obj2).length) {
    for (let key in obj1) {
      if (typeof obj1[key] === "object") {
            if (!isObject(obj1[key], obj2[key])) return false;
        } else if (obj1[key] !== obj2[key]) return false;
    }
  } else return false;
  return true;   
}

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
