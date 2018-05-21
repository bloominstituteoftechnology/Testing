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
