const test_case = [
    [1, 2, 3],
    [7, 5, 14, 2, 8, 8, 10, 1, 2, 3]
]

function maxProduct(nums) {
    let max1 = 0;
    let max2 = 0;

    for(let num of nums) {
        if(num > max1) {
            max2 = max1;
            max1 = num;
        } else if(num > max2) {
            max2 = num;
        }
    }
    return max1 * max2;
}

for(const c of test_case) {
    console.log(maxProduct(c));
}