const funcs = require('./project-2');


test('should run test', () => {

})

it('should equal 20', () => {
    const actual = funcs.getBiggest(20,10)

    expect(actual).toEqual(20)
})

it('should equal Guten Tag!', () => {
    const actual = funcs.greeting('German')

    expect(actual).toEqual("Guten Tag!")
})

it('should equal true', () => {
    const actual = funcs.isTenOrFive(10)

    expect(actual).toEqual(true)
})

it('should equal true', () => {
    const actual = funcs.isInRange(21)

    expect(actual).toEqual(true)
})

it('should equal true', () => {
    const actual = funcs.isInteger(5)

    expect(actual).toEqual(true)
})

it('should equal fizzbuzz', () => {
    const actual = funcs.fizzBuzz(15)

    expect(actual).toEqual('fizzbuzz')
})

it('should equal fizz', () => {
    const actual = funcs.fizzBuzz(3)

    expect(actual).toEqual('fizz')
})

it('should equal buzz', () => {
    const actual = funcs.fizzBuzz(5)

    expect(actual).toEqual('buzz')
})

it('should equal true', () => {
    const actual = funcs.isPrime(5)

    expect(actual).toEqual(true)
})

it('should equal false', () => {
    const actual = funcs.isPrime(-5)

    expect(actual).toEqual(false)
})

it('should equal false', () => {
    const actual = funcs.isPrime(1)

    expect(actual).toEqual(false)
})

it('should equal false', () => {
    const actual = funcs.isPrime(4)

    expect(actual).toEqual(false)
})

it('should equal a', () => {
    const actual = funcs.returnFirst(['a','b','c'])

    expect(actual).toEqual('a')
})

it('should equal c', () => {
    const actual = funcs.returnLast(['a','b','c'])

    expect(actual).toEqual('c')
})

it('should equal 3', () => {
    const actual = funcs.getArrayLength(['a','b','c'])

    expect(actual).toEqual(3)
})

it('should equal [4,6]', () => {
    const actual = funcs.incrementByOne([3,5])

    expect(actual).toEqual([4,6])
})

it('should equal [a,b,c]', () => {
    const actual = funcs.addItemToArray(['a','b','c'], 'd')

    expect(actual).toEqual(['a','b','c', 'd'])
})

it('should equal a b c', () => {
    const actual = funcs.wordsToSentence(['a','b','c'])

    expect(actual).toEqual('a b c')
})

it('should equal true', () => {
    const actual = funcs.contains(['a','b','c'], 'c')

    expect(actual).toEqual(true)
})

it('should equal 9', () => {
    const actual = funcs.addNumbers([3,3,3])

    expect(actual).toEqual(9)
})

it('should equal 126', () => {
    const actual = funcs.averageTestScore([34,342,3])

    expect(actual).toEqual(126)
})

it('should equal 88', () => {
    const actual = funcs.largestNumber([2,4,88])

    expect(actual).toEqual(88)
})

describe('firstStarWars', () => {
    
    it('should return lukeSkywalker', done => {
        setTimeout(done, 5000)
        expect(funcs.firstStarWars()).toEqual("Luke Skywalker")
    });
  })