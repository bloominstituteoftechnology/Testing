/* eslint-disable arrow-parens */

const multiplyByTen = num => {
  let v1 = isNumber(num);
  v1 = v1[0];
  return v1 * 10;
};

const subtractFive = num => {
  let v1 = isNumber(num);
  v1 = v1[0];
  return v1 - 5;
};

const areSameLength = (str1, str2) => {
  const result = isString(str1, str2);
  let v1 = result[0];
  let v2 = result[1];
  return v1.length === v2.length;
};

const areEqual = (x, y) => {
  if (Array.isArray(x) === true && Array.isArray(y) === true) {
    if (x.length === y.length) {
      return checkArray(x, y);
    } else {
      return x === y;
    }
  } else if (
    typeof x === "object" &&
    typeof y === "object" &&
    !(x === null && y !== null)
  ) {
    return isObject(x, y);
  } else {
    return x === y;
  }
};

const lessThanNinety = num => {
  let v1 = isNumber(num);
  v1 = v1[0];
  if (v1 < 90) {
    return true;
  }
  return false;
};

const greaterThanFifty = num => {
  let v1 = isNumber(num);
  v1 = v1[0];
  if (v1 > 50) {
    return true;
  }
  return false;
};

const add = (x, y) => {
  const v = isNumber(x, y);
  let v1 = v[0];
  let v2 = v[1];
  return v1 + v2;
};

const subtract = (x, y) => {
  const v = isNumber(x, y);
  let v1 = v[0];
  let v2 = v[1];
  return v1 - v2;
};

const divide = (x, y) => {
  const result1 = isNumber(x, y);
  let v1;
  let v2;
  if (result1) {
    v1 = result1[0];
    v2 = result1[1];
  } else {
    return 0;
  }
  const result2 = anyZeros(v1, v2);
  if (result2) {
    v1 = result2[0];
    v2 = result2[1];
  } else {
    return 0;
  }
  //if result2 is a thing
  return v1 / v2;
};

const multiply = (x, y) => {
  const result1 = isNumber(x, y);
  let v1 = result1[0];
  let v2 = result1[1];

  return v1 * v2;
};

const getRemainder = (x, y) => {
  const result1 = isNumber(x, y);
  let v1;
  let v2;
  if (result1) {
    v1 = result1[0];
    v2 = result1[1];
  } else {
    return 0;
  }
  const result2 = anyZeros(v1, v2);
  if (result2) {
    v1 = result2[0];
    v2 = result2[1];
  } else {
    return 0;
  }
  //if result2 is a thing
  return v1 % v2;
};

const isEven = num => {
  const result1 = isNumber(num);
  if (!result1) {
    return true; // because zero is even;
  }
  const result2 = anyZeros(result1[0]);
  if (!result2) {
    return true; //because zero is even
  }
  let v1 = result2;
  if (v1 % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

const isOdd = num => {
  const result1 = isNumber(num);
  if (!result1) {
    return true; // because zero is even;
  }
  const result2 = anyZeros(result1[0]);
  if (!result2) {
    return true; //because zero is even
  }
  let v1 = result2;
  if (v1 % 2 === 0) {
    return false;
  } else {
    return true;
  }
};

const square = num => {
  const result1 = isNumber(num);
  let v1;
  if (!result1) {
    return 0;
  } else {
    v1 = result1[0];
  }
  return v1 * v1;
};

const cube = num => {
  const result1 = isNumber(num);
  let v1;
  if (!result1) {
    return 0;
  } else {
    v1 = result1[0];
  }
  return v1 * v1 * v1;
};

const raiseToPower = (num, exponent) => {
  const result1 = isNumber(num, exponent);
  let v1;
  let v2;
  if (result1) {
    v1 = result1[0];
    v2 = result1[1];
  } else {
    return 0;
  }
  return v1 ** v2;
};

const roundNumber = num => {
  const result1 = isNumber(num);
  let v1;
  if (!result1) {
    return 0;
  } else {
    v1 = result1[0];
  }
  return Math.round(v1);
};

const roundUp = num => {
  const result1 = isNumber(num);
  let v1;
  if (!result1) {
    return 0;
  } else {
    v1 = result1[0];
  }
  return Math.ceil(v1);
};

const addExclamationPoint = str => {
  const result1 = isString(str);
  let v1 = result1[0];
  return (v1 += "!");
};

const combineNames = (firstName, lastName) => {
  const result1 = isString(firstName, lastName);
  let v1 = result1[0];
  let v2 = result1[1];
  return `${v1} ${v2}`;
};

const getGreeting = name => {
  const result1 = isString(name);
  let v1 = result1[0];
  return `Hello ${v1}!`;
};

const getRectangleArea = (length, width) => {
  return multiply(length, width)
};

const getTriangleArea = (base, height) => {
  return 0.5 * multiply(base,height);
};

const getCircleArea = radius => {
  return Math.PI * multiply(radius, radius)
};

const getRectangularPrismVolume = (length, width, height) => {
  return multiply(length,1) * multiply(width, 1) * multiply(height,1);
};

//Because some of the number checkers have various argument lengths
//the plan is to desirn functions to check infinite amount or arguments.

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

module.exports = {
  multiplyByTen,
  subtractFive,
  areSameLength,
  areEqual,
  lessThanNinety,
  greaterThanFifty,
  add,
  subtract,
  divide,
  multiply,
  getRemainder,
  isEven,
  isOdd,
  square,
  cube,
  raiseToPower,
  roundNumber,
  roundUp,
  addExclamationPoint,
  combineNames,
  getGreeting,
  getRectangleArea,
  getTriangleArea,
  getCircleArea,
  getRectangularPrismVolume
};
