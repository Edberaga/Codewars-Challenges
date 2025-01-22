function total(arr) {
    let sum = 0;
    const primeNum = [];

    for(let i = 0; i < arr.length; i++) {
        if(isPrime(i)) {
            primeNum.push(arr[i]);
        }
    }
    primeNum.map((num) => sum += num);
    return sum;
}

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        // console.log(`Number: ${num}, divide to: ${i}, result: ${num % i}`);
        if (num % i === 0) {
            // console.log(`${num} is not a prime number.`); 
            return false; // If num is divisible by any number other than 1 and itself
        }
    }
    return true; // If no divisors were found, num is a prime number
}

console.log(total([1, 2, 3, 4]));