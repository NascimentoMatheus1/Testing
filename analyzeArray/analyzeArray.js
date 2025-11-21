function analyzeArray(arr) {
    const sum = arr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
    const average = Number((sum / arr.length).toFixed(2));
    const length = arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return {
        average,
        min,
        max,
        length,
    };
}

module.exports = analyzeArray;
