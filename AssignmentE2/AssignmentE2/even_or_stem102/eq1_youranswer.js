// eq1.js
const num = document.getElementById("num");

const show = document.querySelector("P");

const result = document.getElementById("result");

show.onclick = function (e) {

let numValue= parseInt(num.value);

result.textContent =`${numValue} x ${numValue}  = ${numValue*numValue}`
};
