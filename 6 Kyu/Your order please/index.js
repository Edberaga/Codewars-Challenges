// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  "" 
const test_cases = ["is2 Thi1s T4est 3a", "4of Fo1r pe6ople g3ood th5e the2", ""];

function order(words){
    if(words.length === 0) {
        return "";
    }
    //1. Divided the string into an array
    const array = words.split(" ");
    //2. Create an objects to store the value and number
    const ordered_words = [];
    //3. Iterate a loop to find number for each word
    for(let i = 1; i <= array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            if(array[j].includes(i)) {
                ordered_words.push({});
                ordered_words[i - 1]['value'] = array[j];
                // console.log(ordered_words);
                break;
            };
        }
    }
    // console.log("Result: ", ordered_words);
    
    //4. Initialize a string
    let string = [];
    //5. Iterate a loop to add each ordered word to the string
    for(let i = 0; i < array.length; i++) {
       string.push(ordered_words[i]['value']);
    }
    //6. return the string
    return string.join(" ");
}

for(const cases of test_cases) {
    console.log(order(cases));
}