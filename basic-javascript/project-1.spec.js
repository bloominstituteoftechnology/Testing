const funcs = require('./project-1');

// write your tests here
    
    describe('multiply by ten',()=>{
    it("should multiply a number by 10", () => {
      //arrange
    const multiplyByTen = funcs.multiplyByTen;
      //act
      const thirty = multiplyByTen(3)
 
      //assert
      expect(thirty).toBe(30)
      
    });
    })
        
    describe('subtract by five',()=>{
        it("should subtract by 5", () => {
          //arrange
        const subtractFive = funcs.subtractFive;
          //act
          const ten = subtractFive(15)
     
          //assert
          expect(ten).toBe(10)
          
        });
        })
        describe('check legnth of two arrays',()=>{
            it("Should return true or false", () => {
              //arrange
            const areSameLength = funcs.areSameLength;
              //act
              const ten = subtractFive(15)
         
              //assert
              expect(ten).toBe(10)
              
            });
            })
            
        
    