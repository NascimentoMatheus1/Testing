const caesarCipher = require('./caesarCipher');

test('a equals to D in Shift 3', () => {
    expect(caesarCipher('a', 3)).toBe('d');
});

test('xyz equals to abc in Shift 3', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('HeLLo equals to KhOOr in Shift 3', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('Hello, World! equals to Khoor, Zruog! in shift 3', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('HELLO WORLD equals to MJQQT BTWQI in shift 5', () => {
    expect(caesarCipher('HELLO WORLD', 5)).toBe('MJQQT BTWQI');
});

test('julius caesar equals to mxolxv fdhvdu in shift 3', () => {
    expect(caesarCipher('julius caesar', 3)).toBe('mxolxv fdhvdu');
});

test('Beware the Ides of March. equals to Ildhyl aol Pklz vm Thyjo. in shift 3', () => {
    expect(caesarCipher('Beware the Ides of March.', 7)).toBe(
        'Ildhyl aol Pklz vm Thyjo.'
    );
});
