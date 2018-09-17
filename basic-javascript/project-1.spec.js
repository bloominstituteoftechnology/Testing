const helpers = require('./project-1');

// Tests for multiply by ten

//check if test passes for positive number, 
//check if test passes for negative number, 

it('should multiply the number by 10', () => {
    expect(helpers.multiplyByTen(2)).toBe(20);
    expect(helpers.multiplyByTen(10)).toBe(100); 
})

it('should allow for negative parameters outputting negative results', () => {
    expect(helpers.multiplyByTen(-3)).toBe(-30); 
    expect(helpers.multiplyByTen(-100)).toBe(-1000); 
}); 

