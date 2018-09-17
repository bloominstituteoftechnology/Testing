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
  return str1.length === str2.length;
};

const areEqual = (x, y) => {
  if (Array.isArray(x) === true && Array.isArray(y) === true ) {
    if (x.length === y.length){
      return checkArray(x,y)
    } else {
      return x === y; 
    }  
  } else if (typeof x === 'object' && typeof y === 'object' && !(x === null && y !== null)) {
    return isObject(x, y); 
  }else {
    return x === y; 
  }
};

const lessThanNinety = num => {
  let v1 = isNumber(num); 
  v1 = v1[0]
  if (v1 < 90) {
    return true;
  }
  return false;
};

const greaterThanFifty = num => {
  let v1 = isNumber(num); 
  v1 = v1[0]
  if (v1 > 50) {
    return true;
  }
  return false;
};

const add = (x, y) => {
  const v = isNumber(x,y); 
  let v1 = v[0];
  let v2 = v[1]; 
  return v1 + v2;
};

const subtract = (x, y) => {
  const v = isNumber(x,y); 
  let v1 = v[0];
  let v2 = v[1];
  return v1 - v2;
};

const divide = (x, y) => {
  const result1 = isNumber(x,y); 
  let v1; 
  let v2; 
  if(result1){
    v1 = result1[0];
    v2 = result1[1]; 
  } else {
    return 0; 
  }
  const result2 = anyZeros(v1,v2);
  if (result2){
    v1 = result2[0];
    v2 = result2[1]; 
  } else {
    return 0; 
  }
  //if result2 is a thing
  return v1 / v2; 
};

const multiply = (x, y) => {
  const result1 = isNumber(x,y);
  let v1 = result1[0];
  let v2 = result1[1]; 
  
  return v1 * v2;
};

const getRemainder = (x, y) => {
  const result1 = isNumber(x,y); 
  let v1; 
  let v2; 
  if(result1){
    v1 = result1[0];
    v2 = result1[1]; 
  } else {
    return 0; 
  }
  const result2 = anyZeros(v1,v2);
  if (result2){
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
  if(!result1){
    return true; // because zero is even;  
  }
  const result2 = anyZeros(result1[0]);
  if(!result2){
    return true; //because zero is even 
  }
  let v1 = result2; 
  if(v1 % 2 === 0){
    return true 
  } else {
    return false ; 
  }
};

const isOdd = num => {
  const result1 = isNumber(num);
  if(!result1){
    return true; // because zero is even;  
  }
  const result2 = anyZeros(result1[0]);
  if(!result2){
    return true; //because zero is even 
  }
  let v1 = result2; 
  if(v1 % 2 === 0){
    return false
  } else {
    return true; 
  }
};

const square = num => {
  const result1 = isNumber(num);
  let v1; 
  if(!result1){
    return 0; 
  } else {
    v1 = result1[0]; 
  }
  return v1 * v1;
};

const cube = num => {
  const result1 = isNumber(num);
  let v1; 
  if(!result1){
    return 0; 
  } else {
    v1 = result1[0]; 
  }
  return v1 * v1 * v1;
};

const raiseToPower = (num, exponent) => {
  const result1 = isNumber(num,exponent); 
  let v1; 
  let v2; 
  if(result1){
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
  if(!result1){
    return 0; 
  } else {
    v1 = result1[0]; 
  }
  return Math.round(v1);
};

const roundUp = num => {
  const result1 = isNumber(num); 
  let v1; 
  if(!result1){
    return 0; 
  } else {
    v1 = result1[0]; 
  }
  return Math.ceil(v1);
};

const addExclamationPoint = str => {
  const result1 = isString(str);
  let v1 = result1[0]; 
  return (v1 += "!")
};

const combineNames = (firstName, lastName) => {
  const result1 = isString(firstName, lastName);
  let v1 = result1[0];
  let v2 = result1[1];  
  return `${v1} ${v2}`
};

const getGreeting = name => {
  const result1 = isString(name);
  let v1 = result1[0];  
  return `Hello ${v1}!`
};

const getRectangleArea = (length, width) => {
  let v1 = result1[0];
  let v2 = result1[1];
  return v1 * v2;
};

const getTriangleArea = (base, height) => {
  const result1 = isNumber(base, height);
  let v1 = result1[0];
  let v2 = result1[1];
  return 0.5 * v1 * v2;
};

const getCircleArea = radius => {
  const result1 = isNumber(radius);
  let v1 = result1[0];
  return Math.PI * radius * radius;
};

const getRectangularPrismVolume = (length, width, height) => {
  const result1 = isNumber(length, width, height);
  let v1 = result1[0];
  let v2 = result1[1];
  let v3 = result1[2]; 
  return v1 * v2 * v3
};

//Because some of the number checkers have various argument lengths
//the plan is to desirn functions to check infinite amount or arguments. 

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
  for (let i = 0; i<ar1.length; i++){
    if(ar1[i] !== ar2[i]){
      return false; 
    }
  }
  return true; 
}

function isObject (obj1, obj2) {
  console.log("object")
  if (Object.keys(obj1).length === Object.keys(obj2).length) {
    for (let key in obj1) {
      if (typeof obj1[key] === "object") {
        if (!isObject(obj1[key], obj2[key])) return false;
      }
      else if (obj1[key] !== obj2[key]) return false;
    }
  } else return false;
  return true;   
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
