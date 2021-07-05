const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
test("getBiggest", () => {
  expect(funcs.getBiggest(10,30)).toBe(30);
  expect(funcs.getBiggest(30,30)).toBe(30);
  expect(funcs.getBiggest(30,10)).toBe(30);
});

test("greeting", () => {
  expect(funcs.greeting("German")).toEqual(expect.stringContaining("Guten Tag!"));
  expect(funcs.greeting("Spanish")).toEqual(expect.stringContaining("Hola!"));
  expect(funcs.greeting("Test")).toEqual(expect.stringContaining("Hello!"));
  expect(funcs.greeting("")).toEqual(expect.stringContaining("Hello!"));
});

test("isTenOrFive", () => {
  expect(funcs.isTenOrFive(5)).toBeTruthy();
  expect(funcs.isTenOrFive(10)).toBeTruthy();
  expect(funcs.isTenOrFive("30,10")).toBeFalsy();
});

test("isInRange", () => {
  expect(funcs.isInRange(5)).toBeFalsy();
  expect(funcs.isInRange(30)).toBeTruthy();
  expect(funcs.isInRange("30,10")).toBeFalsy();
});

test("isInteger", () => {
  expect(funcs.isInteger(5)).toBeTruthy();
  expect(funcs.isInteger(30.22)).toBeFalsy();
  expect(funcs.isInteger("30,10")).toBeFalsy();
});

test("fizzBuzz", () => {
  expect(funcs.fizzBuzz(15)).toEqual(expect.stringContaining("fizzbuzz"));
  expect(funcs.fizzBuzz(25)).toEqual(expect.stringContaining("buzz"));
  expect(funcs.fizzBuzz(9)).toEqual(expect.stringContaining("fizz"));
  expect(funcs.fizzBuzz(1)).toBe(1);
  expect(funcs.fizzBuzz("30,10")).toBe("30,10");
});

test("isPrime", () => {
  expect(funcs.isPrime(15)).toBeFalsy();
  expect(funcs.isPrime(3)).toBeTruthy();
  expect(funcs.isPrime(1)).toBeFalsy();
  expect(funcs.isPrime("15")).toBeFalsy();
  expect(funcs.isPrime(-15)).toBeFalsy();
  expect(funcs.isPrime(-7)).toBeTruthy();
});

test("returnFirst", () => {
  const testArr= [1,2,3,4];
  const testArrEmp= [];
  expect(funcs.returnFirst(testArr)).toBe(testArr[0]);
  expect(funcs.returnFirst(testArrEmp)).toBeUndefined();
});

test("returnLast", () => {
  const testArr= [1,2,3,4];
  const testArrEmp= [];
  expect(funcs.returnLast(testArr)).toBe(testArr[testArr.length - 1]);
  expect(funcs.returnLast(testArrEmp)).toBeUndefined();
});

test("getArrayLength", () => {
  const testArr= [1,2,3,4];
  const testArrEmp= [];
  expect(funcs.getArrayLength(testArr)).toBe(4);
  expect(funcs.getArrayLength(testArrEmp)).toBe(0);
});

test("incrementByOne", () => {
  const testArr= [1,2,3,4];
  const testArrEmp= [];
  expect(funcs.incrementByOne(testArr)).toEqual(expect.arrayContaining([2,3,4,5]));
  expect(funcs.incrementByOne(testArrEmp)).toHaveLength(0);
});

test("addItemToArray", () => {
  const testArr= [1,2,3,4];
  const testArrEmp= [];
  expect(funcs.addItemToArray(testArr,5)).toEqual(expect.arrayContaining([1,2,3,4,5]));
  expect(funcs.addItemToArray(testArr,6)).toHaveLength(6);
  expect(funcs.addItemToArray(testArrEmp,4)).toHaveLength(1);
});

test("addItemToFront", () => {
  const testArr= [1,2,3,4];
  const testArrEmp= [];
  expect(funcs.addItemToFront(testArr,5)).toEqual(expect.arrayContaining([5,1,2,3,4]));
  expect(funcs.addItemToFront(testArr,6)).toHaveLength(6);
  expect(funcs.addItemToFront(testArrEmp,4)).toHaveLength(1);
});

test("wordsToSentence", () => {
  const testArr= [1,2,3,4];
  expect(funcs.wordsToSentence(testArr)).toEqual(expect.stringContaining("1 2 3 4"));
  expect(funcs.wordsToSentence([1])).toEqual(expect.stringContaining("1"));
  expect(funcs.wordsToSentence(1)).toEqual(expect.stringContaining(""));
});

test("contains", () => {
  const testArr= [1,2,3,4];
  expect(funcs.contains(testArr,5)).toBeFalsy();
  expect(funcs.contains(testArr,3)).toBeTruthy();
  expect(funcs.contains("3")).toBeFalsy();
});

test("addNumbers", () => {
  const testArr= [1,2,3,4];
  expect(funcs.addNumbers(testArr)).toBe(10);
  expect(funcs.addNumbers(3)).toBe(0);
});

test("averageTestScore", () => {
  const testArr= [1,2,3,4];
  expect(funcs.averageTestScore(testArr)).toBe(2.5);
  expect(funcs.averageTestScore(3)).toBeFalsy();
});
test("largestNumber", () => {
  const testArr= [1,2,3,4];
  expect(funcs.largestNumber(testArr)).toBe(4);
  expect(funcs.largestNumber(3)).toBeFalsy();
});