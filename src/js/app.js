import {numberDisplay, countButton} from './dom-loader.js'
var number = 0;
countButton.addEventListener('click', addOneToNumber);
updateNumberDisplayed();

function addOneToNumber() {
    number++
    updateNumberDisplayed();
}

function updateNumberDisplayed(){
    numberDisplay.textContent = number;
}