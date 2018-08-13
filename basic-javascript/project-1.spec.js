const helpers = require('./project-1');

describe('multiplication tests', () => {
it('should multiply the number passed by ten', () => {
    expect(helpers.multiplyByTen(4)).toEqual(40);
    expect(helpers.multiplyByTen(0)).toEqual(0);
});

it('should return false if the number is undefined or null', () =>{
expect(helpers.multiplyByTen(undefined)).toEqual(false);	

});

});



