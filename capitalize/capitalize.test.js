const capitalize = require('./capitalize');

const testCases = [
    {
        input: 'joe',
        expect: 'Joe',
    },
    {
        input: 'Joe',
        expect: 'Joe',
    },
    {
        input: '     joe',
        expect: 'Joe',
    },
    {
        input: '     joe   ',
        expect: 'Joe',
    },
    {
        input: 'joe   ',
        expect: 'Joe',
    },
];

testCases.forEach((t) => {
    const actual = capitalize(t.input);
    test(`${actual} equals to ${t.expect}`, () => {
        expect(actual).toBe(t.expect)
    }
);
});
