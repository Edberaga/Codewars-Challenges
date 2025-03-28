const makeNegative = (num) => (num > 0) ? num - (num * 2) : num;

console.log(makeNegative(42));
console.log(makeNegative(9));
console.log(makeNegative(-1));
console.log(makeNegative(-9));