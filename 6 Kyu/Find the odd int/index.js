function findOdd(A) {
    //happy coding!
    let obj = {};
    for(let i = 0; i < A.length; i++) {
      if(obj[A[i]] === undefined) {
        obj[A[i]] = 1;
      } else {
        obj[A[i]]++;
      }
    }
    
    console.log(obj);
    for(let num in obj) {
        if(obj[num] % 2!== 0) {
          return Number(num);
        }
    }
  }

console.log(findOdd([1, 1, 2]));
console.log(findOdd([2, 2, 3]));
console.log(findOdd([1, 2, 2, 3, 3, 1, 4, 2, 2, 3, 5, 3, 5]));