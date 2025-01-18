function stray(numbers) {
    let nums = {};
    for(const item of numbers) {
      if(nums[item] === undefined) {
        nums[item] = 1
      } else {
        nums[item]++;
      }
    }
    
    let minValue = Math.min(...Object.values(nums));
    return Object.keys(nums).find(key => nums[key] === minValue);
}

console.log(stray([1, 1, 2]));
console.log(stray([1, 2, 3, 2, 3, 4, 3, 4, 5])); // 1
console.log(stray([1, 1, 2, 2, 3, 3, 4, 4, 5])); // 5