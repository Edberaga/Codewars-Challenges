function stairs(n) {
    const maxSpace = n * 2;
    const stairs = [];
    let str = '';
    var moving;
    for(let i = 1; i <= n; i++) { //Add numbers from front
      str = '\xa0'.repeat(maxSpace - (i * 2)) + str;
      str += i;
    }
    for(let i = n; i > 0; i--) {
        str = '\xa0'.repeat(maxSpace - (i * 2)) + str;
        str += i;
    }
    return str;
  }

console.log(stairs(1));
console.log(stairs(4));