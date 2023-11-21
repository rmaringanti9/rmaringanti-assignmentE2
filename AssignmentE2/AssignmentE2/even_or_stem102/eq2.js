const num = document.getElementById("number");
const list1 = document.querySelector('ul');

num.onchange = function(e){
    var numValue = parseInt(num.value);
    for(var i=1;i<=numValue; i++){
        let li = document.createElement("li");
        li.textContent = i;
        list1.appendChild(li);
    }
};