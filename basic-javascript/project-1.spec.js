const helpers = require('./project-1');

it('should multiply the number passed by ten', () => {
    expect(helpers.multiplyByTen(4)).toEqual(40);
    expect(helpers.multiplyByTen(6)).toEqual(60);
    expect(helpers.multiplyByTen(10)).toEqual(100);
})