const test_case = [
    [[], [1]],
    [[3, 2, 1], [7, 9, 8], [6, 4, 5]],
    [[1, 3, 5], [100], [2, 4, 6]]
]

function flattenAndSort(array) {
    // Good luck, brave code warrior!
    const arr = [];
    
    for(let i = 0; i < array.length; i++) {
      arr.push(...array[i]);
    }

    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    return arr;
}

for(test of test_case) {
    console.log(flattenAndSort(test));
}