//Tried with Recursive Functions

function accum(s, result = '', index = 0) {
  let res = result;
  res += s[index].toUpperCase();

  for(let i = 0; i < index; i++) {
    res += s[index].toLowerCase();
  }
  
  if(index + 1 !== s.length) {
    res += '-';
  }
  
  if(index !== s.length - 1) {
    return accum(s, res, index + 1);
  } else {
    return res;
  }
}

console.log(accum('ZpglnRxqenU'));