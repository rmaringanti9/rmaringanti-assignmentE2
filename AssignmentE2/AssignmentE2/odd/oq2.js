// oq2.js
const ele1= document.getElementById('limit');
ele1.onchange = function (e){
    const value = parseInt(ele1.value);
    for (let i = 1;i <= value ; i++){
        const td = document.createElement('td');
        const tr = document.createElement('tr');
        td.textContent = `${i}`;
        tr.appendChild(td);
        document.querySelector('tbody').appendChild(tr);
    }
}