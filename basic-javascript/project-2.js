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
    case "german":
      return "Guten Tag!";
    case "spanish":
      return "Hola!";
    default:
      return "Hello!";
  }
};

const isTenOrFive = num => {
  let numb = isNumber(num);
  numb = numb[0];
  if (numb === 10 || numb === 5) {
    return true;
  }
  return false;
};

const isInRange = num => {
  let numb = isNumber(num);
  numb = numb[0];
  if (numb < 50 && numb > 20) {
    return true;
  } else {
    return false;
  }
};

const isInteger = num => {
  let numb = isNumber(num);
  numb = numb[0];
  if (Math.floor(numb) === numb) {
    return true;
  } else {
    return false;
  }
};

const fizzBuzz = num => {
  let numb = isNumber(num);
  numb = anyZeros(numb[0]);
  numb = numb[0];
  if (numb) {
    if (numb % 5 === 0 && numb % 3 === 0) {
      return "fizzbuzz";
    } else if (numb % 5 === 0) {
      return "buzz";
    } else if (numb % 3 === 0) {
      return "fizz";
    }
  }
  return numb;
};

const isPrime = num => {
  let numb = isNumber(num);
  numb = numb[0];
  if (numb < 0) {
    return false;
  }
  if (numb === 1 || numb === 0) {
    return false;
  }
  for (let i = 2; i < numb; i++) {
    if (numb % i === 0) {
      return false;
    }
  }
  return true;
};

const returnFirst = arr => {
  const result = isArray(arr);
  if (result) {
    return result[0];
  } else {
    return false;
  }
};

const returnLast = arr => {
  const result = isArray(arr);
  if (result) {
    return result[result.length - 1];
  } else {
    return false;
  }
};

const getArrayLength = arr => {
  const result = isArray(arr);
  if (result) {
    return result.length;
  } else {
    return false;
  }
};

const incrementByOne = arr => {
  const result = isArray(arr);
  if (result) {
    for (let i = 0; i < arr.length; i++) {
      let num = isNumber(arr[i]);
      num++;
      arr[i] = num;
    }
  } else {
    return false;
  }
  return arr;
};

const addItemToArray = (arr, item) => {
  const result = isArray(arr);
  if (result) {
    if(item){
      result.push(item);
      return result;
    } else {
      return result; 
    }
  } else {
    return false;
  }
};

const addItemToFront = (arr, item) => {
  const result = isArray(arr);
  if (result) {
    if(item){
      result.unshift(item);
      return result;
    } else {
      return result; 
    }
  } else {
    return false;
  }
};

const wordsToSentence = words => {
  const arr = isArray(words);
  let newSentence = "";
  if (arr) {
    for (let i = 0; i < arr.length; i++) {
      let newWord = isString(arr[i]);
      newWord = newWord[0];
      if (i === 0) {
        newSentence += `${newWord}`;
      } else {
        newSentence += ` ${newWord}`;
      }
    }
    return newSentence;
  } else {
    return false;
  }
};

const contains = (arr, item) => {
  const result = isArray(arr);
  let itemCounter = 0;
  if (result) {
    for (let i = 0; i < result.length; i++) {
      if (arr[i] === item) {
        itemCounter++;
      }
    }
  } else {
    return false;
  }
  if (itemCounter > 0) {
    return true;
  } else {
    return false;
  }
};

const addNumbers = numbers => {
  let sumOfNumbers = 0;
  let arr = isArray(numbers);
  if (arr) {
    for (let i = 0; i < numbers.length; i++) {
      let num = isNumber(numbers[i]);
      sumOfNumbers += num[0];
    }
    return sumOfNumbers;
  } else {
    return false;
  }
  return sumOfNumbers;
};

const averageTestScore = testScores => {
  let totalSumScores = 0;
  let numberOfScores = 0;
  const arr = isArray(testScores);
  if (arr) {
    for (let i = 0; i < testScores.length; i++) {
      let score = isNumber(testScores[i]);
      totalSumScores += score[0];
      numberOfScores++;
    }
  } else {
    return false;
  }
  if (totalSumScores) {
    return totalSumScores / numberOfScores;
  } else {
    return false;
  }
};

const largestNumber = numbers => {
  let biggestInteger = 0;
  const arr = isArray(numbers);
  if (arr) {
    for (let i = 0; i < arr.length; i++) {
      const numConverter = isNumber(arr[i]);
      if (numConverter[0] > biggestInteger) {
        biggestInteger = numConverter[0];
      }
    }
    return biggestInteger;
  } else {
    return false; // not an array
  }
};

function isArray(arr) {
  if (Array.isArray(arr) === true) {
    return arr;
  } else {
    return false;
  }
}
function isString(...args) {
  for (let i = 0; i < args.length; i++) {
      if (args[i]) {
          args[i] = args[i].toString();
      } else {
          args[i] = "";
      }
  }
  return args;
}
function isNumber(...args) {
  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] === "string") {
      //Perform a check if it can be converted to Number.
      test = Number(args[i]);
      if (test) {
        args[i] = test;
      } else {
        args[i] = 0;
      }
    } else if (args[i] === undefined) {
      args[i] = 0;
    }
  }
  return args;
}

function anyZeros(...args) {
  for (let i = 0; i < args.length; i++) {
    if (args[i] === 0) {
      return 0;
    }
  }
  return args;
}

function checkArray(ar1, ar2) {
  for (let i = 0; i < ar1.length; i++) {
    if (Array.isArray(ar1[i]) && Array.isArray(ar2[i])) {
      if (ar1[i].length === ar2[i].length) {
        const anotherCheck = checkArray(ar1[i], ar2[i]);
        if (!anotherCheck) {
          return false;
        }
        // if length is not the same no need to check.
      } else {
        return false;
      }
      //first if
    } else if (
      typeof ar1[i] === "object" &&
      typeof ar2[i] === "object" &&
      !(ar1[i] === null && ar2[i] === null)
    ) {
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

function isObject(obj1, obj2) {
  if (Array.isArray(obj1 && Array.isArray(obj2))) {
    if (obj1.length === obj2.length) {
      const anotherCheck = checkArray(obj1, obj2);
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
