// first set of numbers range from 1-69. there are 5 slots to be filled and the numbers cannot repeat
// second set of numbers range from 1-26. there are 2 slots to be filled and the numbers cannot repeat












// 5 slots
// user must press button to innitiate thing (event listener)
// generage a random number between 1-69  (math.round)
// choose one at a time and enter them into the html shown to user (probably using textContent property)
// as loops through and fills slots on html: 
    // if number is same as previous number(s) choose another
// stop when all 5 slots are filled --> then do next two slots of numbers

function getButton(){
    var button = document.getElementsByClassName("click-me");
    var buttonArray = [].slice.call(button)
    return buttonArray;
};

function clickButton(min, max){
    var clickMeBtn = getButton();
    clickMeBtn.addEventListener("click", function (event) {
        event.preventDefault();
        return getRandomFirstNumbers(min, max);
    });
};

        // event.target.textContent = getRandomFirstNumbers(min, max);
function getRandomFirstNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    // returns random number between min and max (ex 1, 69)
};


