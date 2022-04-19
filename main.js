'use strict'

const counterDisplay = document.querySelector("#count")
const buttons = document.querySelectorAll('button')
let countVal = 0; 
counterDisplay.innerHTML = countVal

Object.values(buttons).forEach(btn => {
   btn.onclick = () => { 
         if (btn.className == "maq i") counterDisplay.innerHTML = countVal++;
         if (btn.className == "maq r") {
                countVal = 0; 
                counterDisplay.innerHTML = countVal;
         }
         if (btn.className == "maq d") counterDisplay.innerHTML = countVal--;
   }
})








                                                                                                                       