function nbYear(p0, percent, aug, p) {
    let year = 0;
    while(p0 < p) {
        p0 += Math.floor(p0 * (percent / 100)) + aug;
        year++;
    }
    return year;
}

console.log(nbYear(1500000, 2.5, 10000, 2000000)); // 10
console.log(nbYear(1500000, 0.25, 1000, 2000000));
console.log(nbYear(1000, 2.0, 50, 1214));
console.log(nbYear(1000, 2.0, 50, 1213));