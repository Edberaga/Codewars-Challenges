const test_case = [
    [[121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]],
    [[121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 36100, 25921, 361, 20736, 361]],
    [[2, 2, 3], [4, 9, 9]],
    [[], []],
    [[], null]
]

function comp(array1, array2){
  if(array1 === null || array2 === null) return false; //avoid null data types

  array1.sort((a, b) => (a - b));
  array2.sort((a, b) => (a - b));

  for(let i = 0; i < array1.length; i++) {
    if(Math.sqrt(array2[i]) !== array1[i]) {
      return false;
    }
  }

  return true;
}

for(const cases of test_case) {
    console.log(comp(cases[0], cases[1]));
}