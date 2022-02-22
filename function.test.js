const func = require('./functions')


test('return two test', () => {
    expect(func.returnTwo()).toBe(2)
})


test('greeting test', () => {
    expect(func.greeting('James')).toBe('Hello, James')
})


test('add test', () => {
    expect(func.add(9, 2)).toBe(11)
})


