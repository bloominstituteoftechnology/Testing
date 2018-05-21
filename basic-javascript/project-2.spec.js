const funcs = require('./project-2');

describe('check if biggest is returned',()=>{
    it('should return the biggest of two numbers',()=>{
        const bigboy = funcs.getBiggest
        const big = bigboy(3,6)
        expect(big).toBe(6)
    })
})
describe('check if correct greeting was returned',()=>{
    it('should return the greeting matching the language passed',()=>{
        const greeting = funcs.greeting
        const greet = greeting('German')
        expect(greet).toBe("Guten Tag!")
    })
})

describe('check if the number is ten or five',()=>{
    it('should return true if it is 10 or five',()=>{
        const isTenOrFive = funcs.isTenOrFive
        const five = isTenOrFive(5)
        expect(five).toBe(true)
    })
})

describe("check if the number is in the range passed", () => {
    it("should return true if the number is between 20-50", () => {
      const range = funcs.isInRange;
      const thirty = range(30);
      expect(thirty).toBe(true);
    });
  });
  describe('check if the number passed is an integer',()=>{
    it('should return should check if number passsed is an integer and return true or false',()=>{
        const isTenOrFive = funcs.isTenOrFive
        const five = isTenOrFive(5)
        expect(five).toBe(true)
    })
})
  
