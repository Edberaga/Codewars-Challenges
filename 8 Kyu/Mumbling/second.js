function accum(s) {
	// your code
  let str = '';
  for(let i = 0; i < s.length; i++) {
    str += s[i].toUpperCase();
    for(let j = 0; j < i; j++) {
      str += s[i].toLowerCase();
    }
    if(i !== s.length - 1) {
      str += '-';
    }
  }
  return str
}