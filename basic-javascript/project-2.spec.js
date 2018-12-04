const {
  getBiggest,
  greeting,
  isTenOrFive,
  isInRange,
  isInteger,
  fizzBuzz,
  isPrime,
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber
} = require('./project-2')

describe('Jest', () => {
  test('Jest runs', () => {})
})

describe('getBiggest', () => {
  test('returns biggest of different sizes', () => {
    const input1 = 10
    const input2 = 12
    const expected = input2
    const actual = getBiggest(input1, input2)
    expect(actual).toBe(expected)
  })

  test('returns second if same sizes', () => {
    const input1 = 10
    const input2 = 10
    const expected = input2
    const actual = getBiggest(input1, input2)
    expect(actual).toBe(expected)
  })
})

describe('greeting', () => {
  test('returns German', () => {
    expect(greeting('German')).toBe('Guten Tag!')
  })

  test('returns Spanish', () => {
    expect(greeting('Spanish')).toBe('Hola!')
  })

  test('returns English from no input', () => {
    expect(greeting()).toBe('Hello!')
  })

  test('returns English from unknown input', () => {
    expect(greeting(';lkjafoiehafpoieaiea')).toBe('Hello!')
  })
})

describe('isTenOrFive', () => {
  test('returns true if param is 5', () => {
    expect(isTenOrFive(5)).toBe(true)
  })

  test('returns true if param is 10', () => {
    expect(isTenOrFive(10)).toBe(true)
  })

  test('returns true if param is not 5 or 10', () => {
    expect(isTenOrFive(9)).toBe(false)
  })
})

describe('isInRange', () => {
  test('returns true if param is 5', () => {
    expect(isInRange(5)).toBe(false)
  })

  test('returns true if param is 25', () => {
    expect(isInRange(25)).toBe(true)
  })
})

describe('isInteger', () => {
  test('returns true if param is integer', () => {
    expect(isInteger(5)).toBe(true)
  })

  test('returns false if param is not integer', () => {
    expect(isInteger('25')).toBe(false)
  })
})

describe('fizzBuzz', () => {
  test('returns fizzbuzz', () => {
    expect(fizzBuzz(15)).toBe('fizzbuzz')
  })

  test('returns fizz', () => {
    expect(fizzBuzz(3)).toBe('fizz')
  })

  test('returns buzz', () => {
    expect(fizzBuzz(10)).toBe('buzz')
  })

  test('returns number', () => {
    expect(fizzBuzz(7)).toBe(7)
  })
})

describe('isPrime', () => {
  test('returns true if prime', () => {
    expect(isPrime(7)).toBe(true)
  })

  test('returns false if not prime', () => {
    expect(isPrime(6)).toBe(false)
  })
})

describe('returnFirst', () => {
  test('returns first item in array', () => {
    expect(returnFirst([1, 2])).toBe(1)
  })
})

describe('returnLast', () => {
  test('returns last item in array', () => {
    expect(returnLast([1, 2])).toBe(2)
  })
})

describe('returnLast', () => {
  test('returns last item in array', () => {
    expect(returnLast([1, 2])).toBe(2)
  })
})

describe('getArrayLength', () => {
  test('returns array length', () => {
    expect(getArrayLength([1, 2])).toBe(2)
  })
})

describe('incrementByOne', () => {
  test('returns array with each item incremented by one', () => {
    expect(incrementByOne([1, 2])).toEqual([2, 3])
  })
})

describe('addItemToArray', () => {
  test('returns array with item added', () => {
    expect(addItemToArray([1, 2], 3)).toEqual([1, 2, 3])
  })
})

describe('addItemToFront', () => {
  test('returns array with item added to front', () => {
    expect(addItemToFront([1, 2], 3)).toEqual([3, 1, 2])
  })
})

describe('wordsToSentence', () => {
  test('returns array into sentence', () => {
    expect(wordsToSentence(['I', 'am', 'not', 'a', 'chicken'])).toEqual(
      'I am not a chicken'
    )
  })
})

describe('contains', () => {
  test('returns true if array contains item', () => {
    expect(contains(['I', 'am', 'not', 'a', 'chicken'], 'I')).toBe(true)
  })

  test('returns false if array does not contain item', () => {
    expect(contains(['I', 'am', 'not', 'a', 'chicken'], 'blar')).toBe(false)
  })
})

describe('addNumbers', () => {
  test('returns sum of numbers', () => {
    expect(addNumbers([2, 3])).toEqual(5)
  })
})

describe('averageTestScore', () => {
  test('returns average', () => {
    expect(averageTestScore([2, 3])).toEqual(2.5)
  })
})

describe('largestNumber', () => {
  test('returns largest', () => {
    expect(largestNumber([2, 3])).toEqual(3)
  })

  test('returns largest if numbers are the same', () => {
    expect(largestNumber([3, 3])).toEqual(3)
  })

  test('returns largest if only one argument', () => {
    expect(largestNumber([3])).toEqual(3)
  })

  test('returns largest if numbers in different order', () => {
    expect(largestNumber([3, 2])).toEqual(3)
  })

  test('returns largest if one number is negative', () => {
    expect(largestNumber([-3, 2])).toEqual(2)
  })

  test('returns largest if both numbers are negative', () => {
    expect(largestNumber([-3, -2])).toEqual(-2)
  })

  test('returns largest if both numbers are really big', () => {
    expect(
      largestNumber([
        7879384798527497594887498274945,
        82705948705294870952874098724502480728948475284502482045
      ])
    ).toEqual(82705948705294870952874098724502480728948475284502482045)
  })

  test('throws error if one item is not a number', () => {
    expect(() => largestNumber(['a', -2])).toThrow()
  })

  test('throws error arg is a string', () => {
    expect(() => largestNumber('lkjlakfea')).toThrow()
  })

  test('throws error arg is an object', () => {
    expect(() => largestNumber({})).toThrow()
  })

  test('throws error arg is a number', () => {
    expect(() => largestNumber(8)).toThrow()
  })
})
