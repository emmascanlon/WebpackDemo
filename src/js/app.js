import {countButton, numberDisplay} from './dom-loader.js';
import '../css/index.css';
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