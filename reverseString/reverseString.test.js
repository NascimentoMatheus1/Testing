const reverseString = require('./reverseString');

test('nothing equals to nothing', () => {
    expect(reverseString('')).toBe('');
})

test('a equals to a', () => {
    expect(reverseString('a')).toBe('a');
})

test('ab equals to ba', () => {
    expect(reverseString('ab')).toBe('ba');
})

test('abcde equals to edcba', () => {
    expect(reverseString('abcde')).toBe('edcba');
})

test('hello equals to olleh', () => {
    expect(reverseString('hello')).toBe('olleh');
})

test('hello world equals to dlrow olleh', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
})

