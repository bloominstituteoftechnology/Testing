const helpers = require('./project-1');

it('should multiply the number passed by ten', () => {
    expect(helpers.multiplyByTen(4)).toEqual(40);
    expect(helpers.multiplyByTen(6)).toEqual(60);
    expect(helpers.multiplyByTen(10)).toEqual(100);
});

it('should subtract the number passed by five', () => {
    expect(helpers.subtractFive(5)).toEqual(0);
    expect(helpers.subtractFive(100)).toEqual(95);
    expect(helpers.subtractFive(30)).toEqual(25);
})