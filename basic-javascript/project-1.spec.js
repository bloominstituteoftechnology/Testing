const helpers = require('./project-1');

describe('math functions', () => {
    it('runs the test', () => {
        expect(true).toBe(true);
    });

    describe('multiply by ten function', () => {
        it('should multiply by ten', () => {
            expect(helpers.multiplyByTen(5)).toEqual(50);
        });
    
        it('should return false when one of the values is undefined', () => {
            // arrange / setup
            const max = Number.MAX_VALUE;
            // act / execute the System Under Test (SUT)
      
            // assert : check your assumptions
            expect(helpers.multiplyByTen(undefined)).toEqual(false);
          });    
    
    });

    describe('subtract five function', () => {
        it('should subtract by five', () => {
            expect(helpers.subtractFive(10)).toEqual(5);
        });

    
    });

    describe('are same length function', () => {
        it('should be same length', () => {

        });
    });

    describe('are equal function', () => {
        it('should be equal'), () => {

        }
    })

    describe('less than ninety function', () => {
        it('should be equal', () => {

        });
    });

    describe('greater than fifty function', () => {
        it('should be greater than fifty', () => {

        });
    });

    describe('add function', () => {
        it('should add', () => {

        });
    });

    describe('subtract function', () => {
        it('should subtract', () => {

        });
    });

    describe('divide function', () => {
        it('should divide', () => {

        });
    });

    describe('multiply function', () => {
        it('should multiply', () => {

        });
    });

    describe('get remainder function', () => {
        it('should get remainder', () => {

        });
    });

    describe('is even function', () => {
        it('should be is even', () => {

        });
    });
});




// start testing!
