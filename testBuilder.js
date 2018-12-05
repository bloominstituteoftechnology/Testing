const strArr = [
  'getBiggest',
  'greeting', 
  'isTenOrFive',
  'isInRange',
  'isInteger',
  'fizzBuzz',
  'isPrime',
  'returnFirst',
  'returnLast',
  'getArrayLength',
  'incrementByOne',
  'addItemToArray',
  'addItemToFront',
  'wordsToSentence',
  'contains',
  'addNumbers',
  'averageTestScore',
  'largestNumber'
]

const output = `

describe('helpers library', () => {
  const against = func => test => {
    expect(func(...test[0])).toBe(test[1])
  }
  const againstUndefined = func => test => {
    expect(func(...test)).toBeUndefined()
  }
  ${strArr.map(funcName => `

  describe('${funcName}', ()=>{
    it('description', ()=>{
      expect(2+2).toBe(4)

    }) 

    it('should return something', () => {

      const input = [
         5,
      ];

      const expected = 50;

      const result = ${funcName}(...input)

      expect(result).toBe(expected)
    })

    it('runs', () => {
      const tests = [
        [ [ 5 ] , 25 ],
      ]
      tests.forEach(against(against(${funcName})))
    })

    it('should return null', () => {
      const tests = [
         [], 
         [undefined],
         ['a'],
      ]
      tests.forEach(againstUndefined(${funcName})))
        expect(${funcName}()).toBeUndefined();
        expect(${funcName}('a')).toBeUndefined();
        expect(${funcName}('a', null)).toBeUndefined();
        expect(${funcName}(undefined, 'a')).toBeUndefined();
        expect(${funcName}('1', NaN)).toBeUndefined();
        expect(${funcName}('', 'a')).toBeUndefined();
        expect(${funcName}(0, 'a')).toBeUndefined();
    })

  })

`).join('\n')}


});`
console.log(output)
