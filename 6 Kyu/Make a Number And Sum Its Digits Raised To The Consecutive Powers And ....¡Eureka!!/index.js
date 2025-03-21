const test_case = [
  [1, 10],
  [1, 100],
  [10, 100],
  [90, 100],
  [90, 150],
  [50, 150],
  [10, 150]
];

function isEureka(n) {
  (n < 10) && true;
  const digit = String(n).length;
  const numbers = String(n).split('');
  let sum = 0;
  // console.log(numbers, "and", digit);

  for(let i = 1; i <= digit; i++) {
    sum += Number(numbers[i - 1]) ** i;
  }

  if(sum === n) {
    return true;
  }
  return false;
}

console.log(isEureka(89));
console.log(isEureka(135));

function sumDigPow(a, b) {
  const array = [];
  for(let i = a; i < b; i++) {
    if(isEureka(i)) {
      array.push(i);
    }
  }

  return array;
}

// for(const cases of test_case) {
//   console.log(sumDigPow(cases[0], cases[1]));
// }

// function isEureka(n) {
//   if(n < 10) {
//     return true;
//   }

//   //case of two digits
//   if(n >= 10 && n < 100) {
//     const firstDigit = Math.floor(n / 10);
//     const secondDigit = (n % 10) **2;
//     // console.log(`${firstDigit} + ${secondDigit**2}`);
//     if((firstDigit + secondDigit) === n) {
//       return true;
//     }
//   }

//   //case of three digits
//   if(n > 100) {
//     const firstDigit = Math.floor(n / 100);
//     const secondDigit = (Math.floor(n / 10) % 10) ** 2;
//     const thirdDigit = (n % 10) ** 3;
//     // console.log(`${firstDigit}, + ${secondDigit} + ${thirdDigit}`);

//     if((firstDigit**1 + secondDigit + thirdDigit) === n) {
//       return true;
//     }
//   }
//   return false
// }