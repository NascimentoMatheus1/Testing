const calculator = require('./calculator');

const testCasesAddition = [
    {
        firstNumber: 0,
        SecondNumber: 0,
        expect: 0,
    },
    {
        firstNumber: 0,
        SecondNumber: 1,
        expect: 1,
    },
    {
        firstNumber: 0,
        SecondNumber: -1,
        expect: -1,
    },
    {
        firstNumber: -1,
        SecondNumber: -1,
        expect: -2,
    },
    {
        firstNumber: -1,
        SecondNumber: 2,
        expect: 1,
    },
    {
        firstNumber: 1,
        SecondNumber: 1,
        expect: 2,
    },
    {
        firstNumber: 2,
        SecondNumber: 2,
        expect: 4,
    },
];

testCasesAddition.forEach((t) => {
    const actual = calculator.add(t.firstNumber, t.SecondNumber);
    test(`${t.firstNumber} + ${t.SecondNumber} equals to ${t.expect}`, () => {
        expect(actual).toBe(t.expect);
    });
});


const testCasesSubtract = [
    {
        firstNumber: 0,
        SecondNumber: 0,
        expect: 0,
    },
    {
        firstNumber: 0,
        SecondNumber: 1,
        expect: -1,
    },
    {
        firstNumber: 0,
        SecondNumber: -1,
        expect: 1,
    },
    {
        firstNumber: -1,
        SecondNumber: -1,
        expect: 0,
    },
    {
        firstNumber: -1,
        SecondNumber: 2,
        expect: -3,
    },
    {
        firstNumber: 1,
        SecondNumber: 1,
        expect: 0,
    },
    {
        firstNumber: 2,
        SecondNumber: 2,
        expect: 0,
    },
];

testCasesSubtract.forEach((t) => {
    const actual = calculator.subtract(t.firstNumber, t.SecondNumber);
    test(`${t.firstNumber} - ${t.SecondNumber} equals to ${t.expect}`, () => {
        expect(actual).toBe(t.expect);
    });
});

const testCasesMultiply = [
    {
        firstNumber: 0,
        SecondNumber: 0,
        expect: 0,
    },
    {
        firstNumber: 0,
        SecondNumber: 1,
        expect: 0,
    },
    {
        firstNumber: 0,
        SecondNumber: -1,
        expect: 0,
    },
    {
        firstNumber: -1,
        SecondNumber: -1,
        expect: 1,
    },
    {
        firstNumber: -1,
        SecondNumber: 2,
        expect: -2,
    },
    {
        firstNumber: 1,
        SecondNumber: 1,
        expect: 1,
    },
    {
        firstNumber: 2,
        SecondNumber: 2,
        expect: 4,
    },
];

testCasesMultiply.forEach((t) => {
    const actual = calculator.multiply(t.firstNumber, t.SecondNumber);
    test(`${t.firstNumber} x ${t.SecondNumber} equals to ${t.expect}`, () => {
        expect(actual).toBe(t.expect);
    });
});

const testCasesDivide = [
    {
        firstNumber: 0,
        SecondNumber: 0,
        expect: 'Cannot divide by zero',
    },
    {
        firstNumber: 0,
        SecondNumber: 1,
        expect: 0,
    },
    {
        firstNumber: 0,
        SecondNumber: -1,
        expect: 0,
    },
    {
        firstNumber: -1,
        SecondNumber: -1,
        expect: 1,
    },
    {
        firstNumber: -1,
        SecondNumber: 2,
        expect: -0.5,
    },
    {
        firstNumber: 1,
        SecondNumber: 1,
        expect: 1,
    },
    {
        firstNumber: 2,
        SecondNumber: 2,
        expect: 1,
    },
];

testCasesDivide.forEach((t) => {
    const actual = calculator.divide(t.firstNumber, t.SecondNumber);
    test(`${t.firstNumber} / ${t.SecondNumber} equals to ${t.expect}`, () => {
        expect(actual).toBe(t.expect);
    });
});