const true_test = [
    [10,2], [63, 7], [2450, 5], [24612, 3]
];

const false_test = [
    [9, 2], [653, 7], [2453, 5], [24617,3]
];

function checkForFactor (base, factor) {
    // code here
    console.log(`${base} % ${factor} = ${base % factor}`);
    return (base % factor === 0);
  }

for(const cases of true_test) {
    console.log(checkForFactor(cases[0], cases[1]));
}

for(const cases of false_test) {
    console.log(checkForFactor(cases[0], cases[1]));
}