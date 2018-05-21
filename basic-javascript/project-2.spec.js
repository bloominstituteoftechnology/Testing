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
    it('should return the array item at first index ',()=>{
        const returnLast = funcs.returnLast
        const last = returnLast([5,4,5,6,5434,22,34,])
        expect(last).toBe(34)
    })
})
describe('check if last item in array was returned',()=>{
    it('should return the array item at the last index',()=>{
        const getArrayLength = funcs.getArrayLength
        const length = getArrayLength([5,4,5,6])
        expect(length).toBe(4)
    })
})
describe('check if array is incremented by one',()=>{
    it('should return array incremented by one',()=>{
        const incrementByOne = funcs.incrementByOne
        const inc = incrementByOne([4,5,6,7,8])
        expect(inc).toEqual([5,6,7,8,9])
    })
})
describe('check if item was pushed into array',()=>{
    it('should return array incremented by one',()=>{
        const addItemToArray = funcs.addItemToArray
        const nine = addItemToArray([4,5,6,7,8],9)
        expect(nine).toEqual([4,5,6,7,8,9])
    })
})
describe('check if item was pushed into array',()=>{
    it('should return array incremented by one',()=>{
        const addItemToFront = funcs.addItemToFront
        const nine = addItemToFront([4,5,6,7,8],9)
        expect(nine).toEqual([9,4,5,6,7,8])
    })
})
describe('check if item was pushed into array',()=>{
    it('should return array incremented by one',()=>{
        const addItemToArray = funcs.addItemToArray
        const nine = addItemToArray([4,5,6,7,8],9)
        expect(nine).toEqual([4,5,6,7,8,9])
    })
})
describe('check if words were added into a sentence',()=>{
    it('should return a sentance of the words in the array ',()=>{
        const wordsToSentence = funcs.wordsToSentence
        const sentance = wordsToSentence(["bilbo","slayed","the","dragon"])
        expect(sentance).toEqual("bilbo slayed the dragon")
    })
})
describe('check if  array contains an item',()=>{
    it('should return true if the array contains an item',()=>{
        const contains = funcs.contains
        const eight = contains([4,5,6,7,8],8)
        expect(eight).toEqual(true)
    })
})
describe('check if numbers of an array were added',()=>{
    it('should return the sum of the array',()=>{
        const addNumbers = funcs.addNumbers
        const sum = addNumbers([4,5,6,7,8])
        expect(sum).toEqual(30)
    })
})
describe('check if item was pushed into array',()=>{
    it('should return array incremented by one',()=>{
        const addItemToArray = funcs.addItemToArray
        const nine = addItemToArray([4,5,6,7,8],9)
        expect(nine).toEqual([4,5,6,7,8,9])
    })
})
describe('check for the avarage test score',()=>{
    it('should return the avarage test score out of an array of scores',()=>{
        const averageTestScore = funcs.averageTestScore
        const avg = averageTestScore([4,5,6,7,8])
        expect(avg).toEqual(6)
    })
})
describe('check for the largest number',()=>{
    it('should return the largest number in an array',()=>{
        const largestNumber = funcs.largestNumber
        const large = largestNumber([4,5,6,7,8])
        expect(large).toEqual(8)
    })
})