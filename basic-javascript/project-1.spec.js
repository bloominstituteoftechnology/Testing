const helpers = require('./project-1');

// start testing!

it('should multiply the number by 10', () => {
    expect(helpers.multiplyByTen(2)).toBe(20);
    expect(helpers.multiplyByTen(10)).toBe(100); 
})