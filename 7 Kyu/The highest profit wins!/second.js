const minMax = (arr) => [Math.min(...arr), Math.max(...arr)]; // fix me!

const test_case = [[1, 2, 3, 4, 5], [2334454, 5], [5]];
for(const test of test_case) {
    console.log(minMax(test));
}