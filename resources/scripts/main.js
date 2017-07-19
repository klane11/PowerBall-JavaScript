// first set of numbers range from 1-69. there are 5 slots to be filled and the numbers cannot repeat
// second set of numbers range from 1-26. there are 2 slots to be filled and the numbers cannot repeat












// 5 slots
// user must press button to innitiate thing (event listener)
// generage a random number between 1-69  (math.round)
// choose one at a time and enter them into the html shown to user (probably using textContent property)
// as loops through and fills slots on html: 
    // if number is same as previous number(s) choose another
// stop when all 5 slots are filled --> then do next two slots of numbers




function getRandomFirstNumbers(min, max) {
    // min and max ceil and floor incase someone put min as 9.5 or max as 34.14
    // min = Math.ceil(min);
    // max - Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    // returns random number between 1 and 69
}

 


