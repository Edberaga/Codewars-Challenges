const test = [
    [1,2,'a','b'],
    [1,2,'a','b',3,4,5],
    [1,2,'a','b',3,4,5,6,7,8,9,0],
    ['a','b','c','d'],
    ['a','b','c','d',1,2,3,4,5],
    ['a','b','c','d',1,2,3,4,5,6,7,8,9,0],
];

function filter_list(l) {
    // Return a new array with the strings filtered out
    return l.filter(item => typeof item === 'number');
}

test.map((cases) => {
    console.log(filter_list(cases));
})