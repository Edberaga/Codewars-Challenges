// 12 --> "10 + 2"
// 45 --> "40 + 5"
// 70304 --> "70000 + 300 + 4" 12, 45, 70304, 

const test_case = [24007424];

function expandedForm(num) {
    //1. define array for containing the number into array and split them
    const array = String(num).split("");
    const length = array.length;
    console.log(array);
    /*
    2. iterate the array with loop, for each value with add the number with zero, 
    for: total length - (index position + 1) condition if its "0" then removed
    */
   for(let i = 0; i < length; i++) {
    let zeros = "";
    let count = (length - 1) - i;

    if(array[i] === "0") {
        continue;
    }

    for(let j = 0; j < count; j++) {
        // console.log(`Zeros before: ${zeros}`);
        zeros += "0";
        // console.log(`Zeros now: ${zeros}`);
    }
    array[i] = `${array[i]}${zeros}`;
   }
   //3. remove the zeros from the array
   var i = 0;
    while (i < length) {
      if (array[i] === "0") {
         array.splice(i, 1);
      } else {
         ++i;
      }
    }

   for(let i = 0; i < length; i++) {
    if(array[i] === "0") {
        array.splice(i, 1);
    }
   }
   //3. return it with join(" + ")
    return array.join(" + ");
}

for(const cases of test_case) {
    console.log(expandedForm(cases));
}