function count(string) {
  // TODO
  const array = {};
  for(const letter of string) {
    if(array[letter] === undefined) {
      array[letter] = 1;
    } else {
      array[letter]++;
    }
  }
  return array;
}

console.log(count('abc'));
console.log(count('aac'));