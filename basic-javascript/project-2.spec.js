const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
test("should return biggest number", () => {
    const expected = 22;
    const actual = funcs.getBiggest(20, 22);
    expect(actual).toBe(expected);
});
test("should return correct greeting in German", () => {
    const expected = "Guten Tag!";
    const actual = funcs.greeting("German");
    expect(actual).toBe(expected);
});
test("should return number is 10 or 5", () => {
    const expected = true;
    const actual = funcs.isTenOrFive(10);
    expect(actual).toBe(expected);
});
test("should NOT return number is 10 or 5", () => {
    const expected = false;
    const actual = funcs.isTenOrFive(9);
    expect(actual).toBe(expected);
});
test("should return if number is in range between 20 and 50", () => {
    const expected = true;
    const actual = funcs.isInRange(30);
    expect(actual).toBe(expected);
});
test("should check if it integer", () => {
    const expected = true;
    const actual = funcs.isInteger(22);
    expect(actual).toBe(expected);
});
test("should return fizz", () => {
    const expected = "fizz";
    const actual = funcs.fizzBuzz(9);
    expect(actual).toBe(expected);
});
test("should return fizzbuzz", () => {
    const expected = "fizzbuzz";
    const actual = funcs.fizzBuzz(15);
    expect(actual).toBe(expected);
});
test("should return true if prime number", () => {
    const expected = true;
    const actual = funcs.isPrime(2);
    expect(actual).toBe(expected);
});
test("should first item in array", () => {
    const expected = 4;
    const actual = funcs.returnFirst([4,20]);
    expect(actual).toBe(expected);
});