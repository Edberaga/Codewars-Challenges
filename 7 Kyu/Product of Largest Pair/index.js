const test_case = [
    [1, 2, 3],
    [7, 5, 14, 2, 8, 8, 10, 1, 2, 3]
]

function maximumPair(arr) {
    //initialize number to store the current maximum pairs
    let curr_max = 0;
    //iterate the numbers on arr, with dual loop
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(i === j) {
                continue;
            }
            const sum = arr[i] * arr[j];
            if(sum > curr_max) {
                curr_max = sum;
            }
        }
    }
    //return the number
    return curr_max;
}

for(const c of test_case) {
    console.log(maximumPair(c));
}