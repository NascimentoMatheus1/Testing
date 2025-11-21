const analyzeArray = require('./analyzeArray');

test(`[1,8,3,4,2,6] equals to {
   average: 4,
   min: 1,
   max: 8,
   length: 6
}`, () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});

test(`[10, 20, 30, 40, 50] equals to {
   average: 30,
   min: 10,
   max: 50,
   length: 5
}`, () => {
    expect(analyzeArray([10, 20, 30, 40, 50])).toEqual({
        average: 30,
        min: 10,
        max: 50,
        length: 5,
    });
});

test(`[5, -3, 15, 8, -1, 22, 7] equals to {
   average: 7.57,
   min: -3,
   max: 22,
   length: 7
}`, () => {
    expect(analyzeArray([5, -3, 15, 8, -1, 22, 7])).toEqual({
        average: 7.57,
        min: -3,
        max: 22,
        length: 7,
    });
});

test(`[1.5, 2.8, 3.2, 4.9, 5.1, 6.7] equals to {
   average: 4.03,
   min: 1.5,
   max: 6.7,
   length: 6
}`, () => {
    expect(analyzeArray([1.5, 2.8, 3.2, 4.9, 5.1, 6.7])).toEqual({
        average: 4.03,
        min: 1.5,
        max: 6.7,
        length: 6,
    });
});
