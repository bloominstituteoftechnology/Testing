const isNumber = (func) => {
    it('should return null if arg given is not a number', () => {
        expect(func(true)).toBe(null)
        expect(func(false)).toBe(null)
        expect(func('string')).toBe(null)
        expect(func({})).toBe(null)
        expect(func([])).toBe(null)
    })

}

const isString = func => {
    it('should return null if the arg given is not a string', () => {
        expect(func(true)).toBe(null)
        expect(func(false)).toBe(null)
        expect(func('string')).toBe(null)
        expect(func({})).toBe(null)
        expect(func([])).toBe(null)
    })
}


module.exports = {
    isNumber,
    isString
}