const helpers = require('./project-1');
test('should run test', () => {

})

// start testing!
it('should equal 20', () => {
    const actual = helpers.multiplyByTen(2)

    expect(actual).toEqual(20)
})

it('should equal -3', () => {
    const expected = 2
    const actual = helpers.subtractFive(expected)

    expect(actual).toEqual(-3)
})

it('should equal same length', () => {
    const actual = helpers.areSameLength('rainbow', 'seventy')

    expect(actual).toEqual(true)
})

it('should equal true', () => {
    const actual = helpers.areEqual(2,2)
    expect(actual).toEqual(true)
})

it('should equal true', () => {
    const actual = helpers.lessThanNinety(2)
    expect(actual).toEqual(true)
})

it('should equal true', () => {
    const actual = helpers.greaterThanFifty(52)
    expect(actual).toEqual(true)
})

it('should equal 4', () => {
    const actual = helpers.add(2,2)
    expect(actual).toEqual(4)
})

it('should equal 0', () => {
    const actual = helpers.subtract(2,2)
    expect(actual).toEqual(0)
})

it('should equal 1', () => {
    const actual = helpers.divide(2,2)
    expect(actual).toEqual(1)
})

it('should equal 2', () => {
    const actual = helpers.multiply(2,2)
    expect(actual).toEqual(4)
})

it('should equal 1', () => {
    const actual = helpers.getRemainder(3,2)
    expect(actual).toEqual(1)
})

it('should equal true', () => {
    const actual = helpers.isEven(52)
    expect(actual).toEqual(true)
})


it('should equal true', () => {
    const actual = helpers.isOdd(5)
    expect(actual).toEqual(true)
})


it('should equal 16', () => {
    const actual = helpers.square(4)
    expect(actual).toEqual(16)
})


it('should equal 8', () => {
    const actual = helpers.cube(2)
    expect(actual).toEqual(8)
})


it('should equal 16', () => {
    const actual = helpers.raiseToPower(2,4)
    expect(actual).toEqual(16)
})


it('should equal 2', () => {
    const actual = helpers.roundNumber(1.6)
    expect(actual).toEqual(2)
})


it('should equal 6', () => {
    const actual = helpers.roundUp(5.2)
    expect(actual).toEqual(6)
})


it('should equal wow', () => {
    const actual = helpers.addExclamationPoint('wow')
    expect(actual).toEqual('wow!')
})


it('should equal ezra davis', () => {
    const actual = helpers.combineNames('ezra','davis')
    expect(actual).toEqual('ezra davis')
})

it('should equal Hello davis', () => {
    const actual = helpers.getGreeting('davis')
    expect(actual).toEqual('Hello davis!')
})

