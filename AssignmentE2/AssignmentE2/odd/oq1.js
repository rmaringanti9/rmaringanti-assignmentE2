// oq1.js
let shower= document.getElementById("show");
let showNextButton = document.querySelector("div");

 showNextButton.onclick= function(e) {
      let inputNumber = document.getElementById("current");
      let currentNumber = parseInt(inputNumber.value);
      let nextNumber = (currentNumber + 1);
     shower.textContent=`Next number is ${nextNumber}`;
    }
