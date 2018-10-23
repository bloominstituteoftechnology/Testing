/* eslint-disable arrow-parens */

const getBiggest = (x, y) => {
  if (typeof x === "undefined" || typeof y === "undefined"){
    throw new Error('values must not be null');
  }
  if (typeof x !=="number" || typeof y !=="number"){
    throw new Error('values must be of number type');
  }
  if (x > y) {
    return x;
  } else if (x === y) {
    return y;
  }
  return y;
};

const greeting = language => {
  if (typeof language !=="string" && typeof language !=="undefined"){
    throw new Error('values must be of string type');
  }
  switch (language) {
    case 'German':
      return 'Guten Tag!';
    case 'Spanish':
      return 'Hola!';
    case 'English' || '' || null:
      return 'Hello!';
    default:
      return 'Hello!';
  }
};

const isTenOrFive = num => {
  if (typeof num === "undefined"){
    throw new Error('values must not be null');
  }
  if (typeof num !=="number"){
    throw new Error('values must be of number type');
  }
  if (num === 10 || num === 5) {
    return true;
  }
  return false;
};

const isInRange = num => {
  if (typeof num === "undefined"){
    throw new Error('values must not be null');
  }
  if (typeof num !=="number"){
    throw new Error('values must be of number type');
  }
  if (num < 50 && num > 20) {
    return true;
  }
  return false;
};

const isInteger = num => {
  if (typeof num === "undefined"){
    throw new Error('values must not be null');
  }
  if (typeof num !=="number"){
    throw new Error('values must be of number type');
  }
  if (Math.floor(num) === num) {
    return true;
  }
  return false;
};

const fizzBuzz = num => {
  if (typeof num === "undefined"){
    throw new Error('values must not be null');
  }
  if (typeof num !=="number"){
    throw new Error('values must be of number type');
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
  if (typeof num === "undefined"){
    throw new Error('values must not be null');
  }
  //if num if not an integer
  if (typeof num !=="number" || Math.floor(num) !== num){
    throw new Error('values must be of integer type');
  }
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
  //if arr is not defined
  if (typeof arr === "undefined" || typeof arr === null){
    throw new Error('value must be defined');
  }
  //if arr is defined but is not an array
  if (!Array.isArray(arr)){
    throw new Error('values must be of array type');
  }
  //if arr is empty
  if (arr.length === 0){
    throw new Error('values must contain at least one element');
  }
  return arr[0];
};

const returnLast = arr => {
  //if arr is not defined
  if (typeof arr === "undefined" || typeof arr === null){
    throw new Error('value must be defined');
  }
  //if arr is defined but is not an array
  if (!Array.isArray(arr)){
    throw new Error('values must be of array type');
  }
  //if arr is empty
  if (arr.length === 0){
    throw new Error('values must contain at least one element');
  }
  return arr[arr.length - 1];
};

const getArrayLength = arr => {
  //if arr is not defined
  if (typeof arr === "undefined" || typeof arr === null){
    throw new Error('value must be defined');
  }
  //if arr is defined but is not an array
  if (!Array.isArray(arr)){
    throw new Error('values must be of array type');
  }
  return arr.length;
};

const incrementByOne = arr => {
  //if arr is not defined
  if (typeof arr === "undefined" || typeof arr === null){
    throw new Error('value must be defined');
  }
  //if arr is defined but is not an array
  if (!Array.isArray(arr)){
    throw new Error('value must be of array type');
  }
  //if arr is empty
  if (arr.length ===0){
    throw new Error('array must have at least one element');
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i]++;
  }
  return arr;
};

const addItemToArray = (arr, item) => {
   //if arr or item is not defined
   if (typeof arr === "undefined" || typeof arr === null || typeof item === 'undefined' || typeof item === null){
    throw new Error('values must be defined');
  }
  //if arr is defined but is not an array
  if (!Array.isArray(arr)){
    throw new Error('values must be of array type');
  }
  arr.push(item);
  return arr;
};

const addItemToFront = (arr, item) => {
   //if arr or item is not defined
   if (typeof arr === "undefined" || typeof arr === null || typeof item === 'undefined' || typeof item === null){
    throw new Error('values must be defined');
  }
  //if arr is defined but is not an array
  if (!Array.isArray(arr)){
    throw new Error('values must be of array type');
  }
  arr.unshift(item);
  return arr;
};

const wordsToSentence = words => {
  //if words is not defined
  if (typeof words === "undefined" || typeof words === null){
    throw new Error('values must be defined');
  }
  //if words is defined but is not an array
  if (!Array.isArray(words)){
    throw new Error('values must be of array type');
  }
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
  //if arr or item is not defined
  if (typeof arr === "undefined" || typeof arr === null || typeof item === "undefined" || typeof item === null){
    throw new Error('values must be defined');
  }
  //if arr is defined but is not an array
  if (!Array.isArray(arr)){
    throw new Error('values must be of array type');
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
  //if numbers is not defined
  if (typeof numbers === "undefined" || typeof numbers === null ){
    throw new Error('value must be defined');
  }
  //if numbers is defined but is not an array
  if (!Array.isArray(numbers)){
    throw new Error('values must be of array type');
  }
  let sumOfNumbers = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== 'number'){
      throw new Error('Value must contain all numerical elements');
    }
    sumOfNumbers += numbers[i];
  }
  return sumOfNumbers;
};

const averageTestScore = testScores => {
  //if testScores is not defined
  if (typeof testScores === "undefined" || typeof testScores === null ){
    throw new Error('value must be defined');
  }
  //if testScores is defined but is not an array
  if (!Array.isArray(testScores)){
    throw new Error('values must be of array type');
  }
  if (testScores.length === 0){
    throw new Error('Value must contain at least one element.');
  }
  let totalSumScores = 0;
  let numberOfScore = 0;
  for (let i = 0; i < testScores.length; i++) {
    if (typeof testScores[i] !== 'number'){
      throw new Error('Value must contain all numerical elements');
    }
    totalSumScores += testScores[i];
    numberOfScore++;
  }
  return totalSumScores / numberOfScore;
};

const largestNumber = numbers => {
  //if numbers is not defined
  if (typeof numbers === "undefined" || typeof numbers === null ){
    throw new Error('value must be defined');
  }
  //if numbers is defined but is not an array
  if (!Array.isArray(numbers)){
    throw new Error('values must be of array type');
  }
  if (numbers.length ===0){
    throw new Error('Value must contain at least one element.');
  }
  let biggestInteger = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== 'number'){
      throw new Error('Value must contain all numerical elements');
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
