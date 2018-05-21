const funcs = require('./project-1');

// write your tests here

describe ('default', () => {
    it('run the tests', () => {});
});

describe('multiplyByTen', () => {
    it('should multiply by 10', () => {
        
      //arrange
      const multiply = funcs.multiplyByTen;

      // act
      const fourty = multiply(4);


      //assert
      expect(fourty).toBe(40);

    })
})

describe('subtractFive', () => {
    it('should subtract five from sum', () => {
        const subtract = funcs.subtractFive;

        const ten = subtract(15);

        expect(ten).toBe(10);
    })
})