function findOdd(A) {
    //happy coding!
    var count = 1;
    var target = 0;
    const array = A.sort();
    
    for(let i = 0; i < array.length; i++) {
      if(array[i] === array[i + 1]){
        target = array[i];
        count++;
      }
      else {
        if(count % 2 !== 0) {
          return target;
        }
        count = 1;
      }
    }
  }

  console.log(findOdd([1, 1, 2]));
  console.log(findOdd([2, 2, 3]));
  console.log(findOdd([1, 2, 2, 3, 3, 1, 4, 2, 2, 3, 5, 3, 5]));