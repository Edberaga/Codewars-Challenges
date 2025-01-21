function minMax(arr){
    let min = arr[0];
    let max = arr[0];
    arr.map((par) => {
      if(par > max) {
        max = par 
      }
      else if (par < min) {
        min = par
      }
    });
     
    return [min,max]; // fix me!
  }

const test_case = [[1, 2, 3, 4, 5], [2334454, 5], [5]];
for(const test of test_case) {
    console.log(minMax(test));
}