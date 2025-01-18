const testcase = ["123", "a1b2c3", "aa1bb2cc3dd"]

var filterString = function(value) {
  let array = [];
  for(const letter of value) {
    const l = parseInt(letter);
    if(l >= 0) {
      array.push(String(l));
    }
  }
  return Number(array.join(""));
}

for(const test of testcase) {
  console.log(filterString(test));
}