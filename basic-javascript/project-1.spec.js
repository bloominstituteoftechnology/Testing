const helpers = require('./project-1');

test('multiply by ten', ()=>{
    const test= 5
    const result = helpers.multiplyByTen(test)
    expect(result).toBe(50)
})
test('subtract 5', ()=>{
    const result= helpers.subtractFive(15)
    expect(result).toBe(10)
})
test(' areSameLength true', ()=>{
    const result= helpers.areSameLength('poppy', 'lucky')
    expect(result).toBe(true)
})
test(' areSameLength false', ()=>{
    const result= helpers.areSameLength('popp', 'lucky')
    expect(result).toBe(false)
})
test(' areEqual false', ()=>{
    const result= helpers.equal('poppy', 'lucky')
    expect(result).toBe(false)
})
// start testing!
