const test_cases = [
    "The sunset sets at twelve o' clock.", //20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11
    "The narwhal bacons at midnight."
];

function alphabetPosition(text) {
    //split the text into group array which skip the spacing 
    const array = text.split(" ").join("").split(/[^a-zA-Z]+/).join("").split("");
    console.log(array);
    //iterate a lop, each character will become number, and store to an array
    const result = [];
    for(let i = 0; i < array.length; i++) {
        result.push(array[i].toLowerCase().charCodeAt(0) - 96)
    }
    console.log(result);
    //then join it into a string to return it
    return result.join(" ");
  }

for(const cases of test_cases) {
    alphabetPosition(cases);
}