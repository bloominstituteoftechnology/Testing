const funcs = require("./project-2");

describe("check if biggest is returned", () => {
  it("should return the biggest of two numbers", () => {
    const bigboy = funcs.getBiggest;
    const big = bigboy(3, 6);
    expect(big).toBe(6);
  });
});
describe("check if correct greeting was returned", () => {
  it("should return the greeting matching the language passed", () => {
    const greeting = funcs.greeting;
    const greet = greeting("German");
    expect(greet).toBe("Guten Tag!");
  });
});

describe("check if the number is ten or five", () => {
  it("should return true if it is 10 or five", () => {
    const isTenOrFive = funcs.isTenOrFive;
    const five = isTenOrFive(5);
    expect(five).toBe(true);
  });
});

describe("check if the number is in the range passed", () => {
  it("should return true if the number is between 20-50", () => {
    const range = funcs.isInRange;
    const thirty = range(30);
    expect(thirty).toBe(true);
  });
});
describe("check if the number passed is an integer", () => {
  it("should return number passsed is an integer and return true or false", () => {
    const integer = funcs.isInteger;
    const int = integer(5);
    expect(int).toBe(true);
  });
});
describe('check if  number matches the if statments',()=>{
    it('should return return the word that matches the if and if none matches it will return the word ',()=>{
        const fizzBuzz = funcs.fizzBuzz
        const fizz = fizzBuzz(6)
        expect(fizz).toBe("fizz")
    })
})
describe('check if number is prime',()=>{
    it('should return true if prime and false if not',()=>{
        const isPrime = funcs.isPrime
        const prime = isPrime(5)
        expect(prime).toBe(true)
    })
})
describe('check if first item in array was returned',()=>{
    it('should return the array item and index 0',()=>{
        const returnFirst = funcs.returnFirst
        const first = returnFirst([5,4,5,6,5434,22,34,])
        expect(first).toBe(5)
    })
})
describe('check if first item in array was returned',()=>{
    it('should return the array item and index 0',()=>{
        const returnLast = funcs.returnLast
        const last = returnLast([5,4,5,6,5434,22,34,])
        expect(last).toBe(34)
    })
})