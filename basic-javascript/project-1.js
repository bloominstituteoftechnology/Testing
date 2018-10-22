/* eslint-disable arrow-parens */
const assert = require('assert');

const multiplyByTen = num => {
  if (!num){
    return 0;
  }
  if(typeof num==='string'){
    throw new Error('value must be a number');
  }
    return num * 10;
};

const subtractFive = num => {
  if (!num){
    return 0;
  }
  if(typeof num==='string'){
    throw new Error('value must be a number');
  }
  return num - 5;
};

const areSameLength = (str1, str2) => {
  if (!str1 || !str2){
    throw new Error('values must not be null');
  }
  if(typeof str1==='boolean' || typeof str2==='boolean'){
    throw new Error('values must not be boolean');
  }
  return str1.length === str2.length;
};

const areEqual = (x, y) => {
  if (typeof x === "undefined" || typeof y === "undefined"){
    throw new Error('values must not be null');
  }
  if (typeof x ==="object" && typeof y ==="object"){
    return assert.deepStrictEqual(x,y);
  }
  return x===y;
};

const lessThanNinety = num => {
  if (!num){
    throw new Error('must provide a value');
  }
  if(typeof num!=='number'){
    throw new Error('value must be a number');
  }
  if (num < 90) {
    return true;
  }
  return false;
};

const greaterThanFifty = num => {
  if (!num){
    throw new Error('must provide a value');
  }
  if(typeof num!=='number'){
    throw new Error('value must be a number');
  }
  if (num > 50) {
    return true;
  }
  return false;
};

const add = (x, y) => {
  if (!x || !y){
    throw new Error('values must not be null');
  }
  if(typeof x!=='number' || typeof y!=='number'){
    throw new Error('values must be of number type');
  }
  return x + y;
};

const subtract = (x, y) => {
  if (!x || !y){
    throw new Error('values must not be null');
  }
  if(typeof x!=='number' || typeof y!=='number'){
    throw new Error('values must be of number type');
  }
  return x - y;
};

const divide = (x, y) => {
  if (!x || !y){
    throw new Error('values must not be null');
  }
  if(typeof x!=='number' || typeof y!=='number'){
    throw new Error('values must be of number type');
  }
  return x / y;
};

const multiply = (x, y) => {
  if (!x || !y){
    throw new Error('values must not be null');
  }
  if(typeof x!=='number' || typeof y!=='number'){
    throw new Error('values must be of number type');
  }
  return x * y;
};

const getRemainder = (x, y) => {
  if (!x || !y){
    throw new Error('values must not be null');
  }
  if(typeof x!=='number' || typeof y!=='number'){
    throw new Error('values must be of number type');
  }
  return x % y;
};

const isEven = num => {
  if (!num){
    throw new Error('value must not be null');
  }
  if(typeof num!=='number'){
    throw new Error('value must be of number type');
  }
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const isOdd = num => {
  if (!num){
    throw new Error('value must not be null');
  }
  if(typeof num!=='number'){
    throw new Error('value must be of number type');
  }
  if (num % 2 === 0) {
    return false;
  }
  return true;
};

const square = num => {
  if (!num){
    throw new Error('value must not be null');
  }
  if(typeof num!=='number'){
    throw new Error('value must be of number type');
  }
  return num * num;
};

const cube = num => {
  if (!num){
    throw new Error('value must not be null');
  }
  if(typeof num!=='number'){
    throw new Error('value must be of number type');
  }
  return num * num * num;
};

const raiseToPower = (num, exponent) => {
  if (!num || !exponent){
    throw new Error('values must not be null');
  }
  if(typeof num!=='number' || typeof exponent!=='number'){
    throw new Error('values must be of number type');
  }
  return num ** exponent;
};

const roundNumber = num => {
  if (!num){
    throw new Error('values must not be null');
  }
  if(typeof num!=='number'){
    throw new Error('values must be of number type');
  }
  return Math.round(num);
};

const roundUp = num => {
  if (!num){
    throw new Error('values must not be null');
  }
  if(typeof num!=='number'){
    throw new Error('values must be of number type');
  }
  return Math.ceil(num);
};

const addExclamationPoint = str => {
  if (!str){
    throw new Error('values must not be null');
  }
  if(typeof str!=='string'){
    throw new Error('values must be of string type');
  }
  return (str += '!');
};

const combineNames = (firstName, lastName) => {
  if (!firstName || !lastName){
    throw new Error('values must not be null');
  }
  if(typeof firstName!=='string' || typeof lastName!=='string' ){
    throw new Error('values must be of string type');
  }
  return `${firstName} ${lastName}`;
};

const getGreeting = name => {
  if (!name){
    throw new Error('value must not be null');
  }
  if(typeof name!=='string'){
    throw new Error('value must be of string type');
  }
  return `Hello ${name}!`;
};

const getRectangleArea = (length, width) => {
  if (!length || !width){
    throw new Error('values must not be null');
  }
  if(typeof length!=='number' || typeof width!=='number'){
    throw new Error('values must be of number type');
  }
  return length * width;
};

const getTriangleArea = (base, height) => {
  if (!base || !height){
    throw new Error('values must not be null');
  }
  if(typeof base!=='number' || typeof height!=='number'){
    throw new Error('values must be of number type');
  }
  return 0.5 * base * height;
};

const getCircleArea = radius => {
  if (!radius){
    throw new Error('values must not be null');
  }
  if(typeof radius!=='number'){
    throw new Error('values must be of number type');
  }
  return Math.PI * radius * radius;
};

const getRectangularPrismVolume = (length, width, height) => {
  if (!length || !width || !height){
    throw new Error('values must not be null');
  }
  if(typeof length!=='number' || typeof width!=='number' ||typeof height!=='number'){
    throw new Error('values must be of number type');
  }
  return width * height * length;
};

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
