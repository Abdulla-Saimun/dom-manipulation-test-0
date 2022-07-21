const btn = document.getElementById('submit');
const tableHead = document.getElementById('thead');
const title = document.getElementById('title');
const author = document.getElementById('author');
const year = document.getElementById('year');


btn.addEventListener('click', (e)=>{
    e.defaultPrevented();
    if(title.value == "" && author.value == "" && year.value == "") {
        alert('please fill the all box');
    } else {
        const tr = document.createElement('tr');
        const th1 = document.createElement('th');
        th1.innerHTML = title.value;
        const th2 = document.createElement('th');
        th2.innerHTML = author.value;
        const th3 = document.createElement('th');
        th3.innerHTML = year.value;

        tr.appendChild(th1);
        tr.appendChild(th2);
        tr.appendChild(th3);

        tableHead.appendChild(tr);
    }
})