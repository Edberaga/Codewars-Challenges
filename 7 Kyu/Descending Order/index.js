/*
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

const testCase = [42145, 145263, 123456789];

function descOrder(n) {
    const array = String(n).split('').map(str => Number(str));
    for(let i = 0; i < array.length; i++) {
        //console.log(`Turn: ${i}, array: ${array}, cur: ${array[i]}, next:${array[i + 1]}`);
        if(array[i] < array[i + 1]) {
            //console.log(`${array[i]} is lesser than ${array[i + 1]}`);
            //switch program
            let cur = array[i];
            array[i] = array[i + 1];
            array[i + 1] = cur;
            //console.log(`After switch, cur = ${array}`);
            
            //Resets it
            i = -1;
        }
    }
    return array.join('');
}

for(const tests of testCase) {
    console.log("================================");
    console.log(`Result: ${descOrder(tests)}`);
}