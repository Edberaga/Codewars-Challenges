// return masked string
function maskify(cc) {
    if(cc.length <= 4) {
      return cc;
    }
    const string = cc.slice(- 4);
    const array = [];
    for(let i=0; i < cc.length - 4; i++) {
        array.push('#');
    }
    array.push(string);
    return array.join('');
}

console.log(maskify('12345'));