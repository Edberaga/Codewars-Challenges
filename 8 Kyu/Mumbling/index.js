function accum(s) {
  let string = "";
  for(let i = 0; i < s.length; i++) {
    for(let j = 1; j <= i + 1; j++) {
      (j === 1) ? string += s[i].toUpperCase() : string += s[i].toLowerCase();
    }
    if(i + 1 !== s.length) {
       string += "-";
    }
  }
  return string;
}